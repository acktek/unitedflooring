"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ImageUploader from "./ImageUploader";

const categoryOptions = [
  { value: "bathroom", label: "Bathroom" },
  { value: "tile", label: "Tile & Stone" },
  { value: "kitchen", label: "Kitchen" },
  { value: "outdoor", label: "Outdoor" },
];

export default function GalleryManager({ items, onChange }) {
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const itemsRef = useRef(items);
  useEffect(() => { itemsRef.current = items; }, [items]);

  function handleUpload(result) {
    const newItem = {
      id: `gal_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      src: result.src,
      publicId: result.publicId,
      alt: "",
      category: "tile",
      label: "",
      wide: false,
    };
    onChange([...itemsRef.current, newItem]);
  }

  function handleReplace(itemId, result) {
    onChange(
      items.map((item) =>
        item.id === itemId
          ? { ...item, src: result.src, publicId: result.publicId }
          : item
      )
    );
  }

  function handleUpdate(itemId, field, value) {
    onChange(
      items.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item
      )
    );
  }

  function handleRemove(itemId) {
    onChange(items.filter((item) => item.id !== itemId));
  }

  function handleMoveUp(index) {
    if (index === 0) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    onChange(newItems);
  }

  function handleMoveDown(index) {
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    onChange(newItems);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Gallery Photos</h2>
          <p className="text-sm text-gray-500">{items.length} photos</p>
        </div>
        <button
          onClick={() => setAdding(!adding)}
          className="px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg hover:bg-blue transition-colors"
        >
          {adding ? "Cancel" : "+ Add Photo"}
        </button>
      </div>

      {adding && (
        <div className="mb-6">
          <ImageUploader onUpload={handleUpload} multiple />
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-4 items-start">
            {/* Thumbnail */}
            <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-gray-100 group">
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt || "Gallery photo"}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {/* Replace overlay */}
              <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
                <span className="text-white text-xs font-medium">Replace</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    const formData = new FormData();
                    formData.append("file", file);
                    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
                    if (res.ok) {
                      const result = await res.json();
                      handleReplace(item.id, result);
                    }
                  }}
                />
              </label>
            </div>

            {/* Fields */}
            <div className="flex-1 min-w-0">
              {editingId === item.id ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={item.label}
                    onChange={(e) => handleUpdate(item.id, "label", e.target.value)}
                    placeholder="Label (e.g., Shower Installation)"
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue"
                  />
                  <input
                    type="text"
                    value={item.alt}
                    onChange={(e) => handleUpdate(item.id, "alt", e.target.value)}
                    placeholder="Description for SEO"
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue"
                  />
                  <div className="flex gap-2 items-center">
                    <select
                      value={item.category}
                      onChange={(e) => handleUpdate(item.id, "category", e.target.value)}
                      className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue"
                    >
                      {categoryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.wide || false}
                        onChange={(e) => handleUpdate(item.id, "wide", e.target.checked)}
                        className="rounded"
                      />
                      Wide
                    </label>
                    <button
                      onClick={() => setEditingId(null)}
                      className="ml-auto text-xs text-blue font-medium hover:underline"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.label || "Untitled"}
                    </p>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {item.category}
                    </span>
                    {item.wide && (
                      <span className="px-2 py-0.5 bg-blue/10 text-blue text-xs rounded-full">wide</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{item.alt || "No description"}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => handleMoveUp(index)}
                disabled={index === 0}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move up"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="18 15 12 9 6 15" /></svg>
              </button>
              <button
                onClick={() => handleMoveDown(index)}
                disabled={index === items.length - 1}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move down"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <button
                onClick={() => setEditingId(editingId === item.id ? null : item.id)}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue"
                title="Edit"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500"
                title="Remove"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>No gallery photos yet. Click &quot;Add Photo&quot; to get started.</p>
        </div>
      )}
    </div>
  );
}
