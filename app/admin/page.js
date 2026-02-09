"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import GalleryManager from "@/components/admin/GalleryManager";
import HeroManager from "@/components/admin/HeroManager";
import AboutManager from "@/components/admin/AboutManager";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("gallery");
  const [config, setConfig] = useState(null);
  const [originalConfig, setOriginalConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    fetchConfig();
  }, []);

  async function fetchConfig() {
    try {
      const res = await fetch("/api/admin/config");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setConfig(data);
      setOriginalConfig(JSON.stringify(data));
    } catch {
      alert("Failed to load config");
    } finally {
      setLoading(false);
    }
  }

  const hasChanges = config && JSON.stringify(config) !== originalConfig;

  async function handleSave() {
    setSaving(true);
    setSaveMessage("");

    try {
      const res = await fetch("/api/admin/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Save failed");
      }

      setOriginalConfig(JSON.stringify(config));
      setSaveMessage("Saved! Changes are now live on the website.");
      setTimeout(() => setSaveMessage(""), 4000);
    } catch (err) {
      alert(err.message || "Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-navy border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-500">Loading photos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[900px] mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="white" opacity="0.9" />
                <rect x="14" y="3" width="7" height="7" rx="1" fill="white" opacity="0.6" />
                <rect x="3" y="14" width="7" height="7" rx="1" fill="white" opacity="0.6" />
                <rect x="14" y="14" width="7" height="7" rx="1" fill="white" opacity="0.3" />
              </svg>
            </div>
            <span className="font-heading text-sm font-semibold text-navy">Photo Manager</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-blue transition-colors flex items-center gap-1"
            >
              View Site
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </a>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[900px] mx-auto px-4 py-6">
        {/* Nav tabs */}
        <div className="mb-6">
          <AdminNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          {activeTab === "gallery" && (
            <GalleryManager
              items={config.gallery}
              onChange={(gallery) => setConfig({ ...config, gallery })}
            />
          )}
          {activeTab === "hero" && (
            <HeroManager
              hero={config.hero}
              onChange={(hero) => setConfig({ ...config, hero })}
            />
          )}
          {activeTab === "about" && (
            <AboutManager
              aboutImages={config.about}
              onChange={(about) => setConfig({ ...config, about })}
            />
          )}
        </div>

        {/* Save bar */}
        <div className="sticky bottom-0 pt-4 pb-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              {saveMessage ? (
                <p className="text-sm text-green-600 font-medium flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  {saveMessage}
                </p>
              ) : hasChanges ? (
                <p className="text-sm text-amber-600 font-medium">You have unsaved changes</p>
              ) : (
                <p className="text-sm text-gray-400">All changes saved</p>
              )}
            </div>
            <button
              onClick={handleSave}
              disabled={!hasChanges || saving}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all shrink-0 ${
                hasChanges
                  ? "bg-navy text-white hover:bg-blue"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {saving ? "Saving..." : "Save & Publish"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
