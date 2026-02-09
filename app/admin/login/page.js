"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [step, setStep] = useState("email"); // "email" | "code"
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSendCode(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStep("code");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyCode(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push("/admin");
      } else {
        setError(data.error || "Invalid code");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-[400px]">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-2xl mb-4">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
              <rect x="3" y="3" width="7" height="7" rx="1" fill="white" opacity="0.9" />
              <rect x="14" y="3" width="7" height="7" rx="1" fill="white" opacity="0.6" />
              <rect x="3" y="14" width="7" height="7" rx="1" fill="white" opacity="0.6" />
              <rect x="14" y="14" width="7" height="7" rx="1" fill="white" opacity="0.3" />
            </svg>
          </div>
          <h1 className="font-heading text-2xl font-bold text-navy">Photo Manager</h1>
          <p className="text-sm text-gray-500 mt-1">United Flooring Admin</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {step === "email" ? (
            <form onSubmit={handleSendCode}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-colors"
              />
              <p className="text-xs text-gray-400 mt-2">
                We&apos;ll send a login code to your email.
              </p>
              {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 px-4 py-3 bg-navy text-white font-heading font-semibold text-sm rounded-xl hover:bg-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Login Code"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyCode}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-beige rounded-full mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  Code sent to <span className="font-medium text-navy">{email}</span>
                </p>
              </div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter 6-digit code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="000000"
                required
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-center text-2xl font-mono tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-colors"
                autoFocus
              />
              {error && <p className="text-sm text-red-500 mt-3 text-center">{error}</p>}
              <button
                type="submit"
                disabled={loading || code.length < 6}
                className="w-full mt-6 px-4 py-3 bg-navy text-white font-heading font-semibold text-sm rounded-xl hover:bg-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Verifying..." : "Verify & Log In"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep("email");
                  setCode("");
                  setError("");
                }}
                className="w-full mt-3 px-4 py-2 text-sm text-gray-500 hover:text-navy transition-colors"
              >
                Use a different email
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
