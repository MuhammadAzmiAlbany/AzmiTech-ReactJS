import { useState, ChangeEvent, SubmitEventHandler } from "react";
// ─── Types ───────────────────────────────────────────────────────────────────

interface FormFields {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

// ─── Config ──────────────────────────────────────────────────────────────────

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

// ─── Component ───────────────────────────────────────────────────────────────

export default function ApiPostForm() {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus]       = useState<FormStatus>("idle");
  const [response, setResponse]   = useState<Record<string, unknown> | null>(null);
  const [errorMsg, setErrorMsg]   = useState<string>("");

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: SubmitEventHandler<HTMLFormElement>) => {
    // e.preventDefault(); // ← Prevents redirect / page reload

    setStatus("loading");
    setResponse(null);
    setErrorMsg("");

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = (await res.json()) as Record<string, unknown>;
      setResponse(data);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error occurred.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setStatus("idle");
    setResponse(null);
    setErrorMsg("");
  };

  const isLoading = status === "loading";

  // ── Styles ─────────────────────────────────────────────────────────────────

  const s = {
    wrapper: {
      minHeight: "100vh",
      background: "#0D0F1A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    } as React.CSSProperties,

    card: {
      background: "#141620",
      border: "1px solid #2A2D45",
      borderRadius: "12px",
      padding: "36px",
      width: "100%",
      maxWidth: "480px",
    } as React.CSSProperties,

    badge: {
      display: "inline-block",
      background: "#1C1F30",
      border: "1px solid #6366F1",
      color: "#818CF8",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
      padding: "4px 10px",
      borderRadius: "4px",
      marginBottom: "14px",
    } as React.CSSProperties,

    title: {
      fontSize: "22px",
      fontWeight: 700,
      color: "#E2E5F0",
      margin: "0 0 6px 0",
    } as React.CSSProperties,

    subtitle: {
      fontSize: "13px",
      color: "#6B7280",
      margin: 0,
    } as React.CSSProperties,

    formGroup: {
      marginBottom: "18px",
    } as React.CSSProperties,

    label: {
      display: "block",
      fontSize: "13px",
      fontWeight: 500,
      color: "#9CA3AF",
      marginBottom: "7px",
    } as React.CSSProperties,

    input: {
      width: "100%",
      background: "#1C1F30",
      border: "1px solid #2A2D45",
      borderRadius: "8px",
      color: "#E2E5F0",
      fontSize: "14px",
      padding: "10px 14px",
      outline: "none",
      boxSizing: "border-box" as const,
    } as React.CSSProperties,

    textarea: {
      width: "100%",
      background: "#1C1F30",
      border: "1px solid #2A2D45",
      borderRadius: "8px",
      color: "#E2E5F0",
      fontSize: "14px",
      padding: "10px 14px",
      outline: "none",
      resize: "vertical" as const,
      minHeight: "100px",
      boxSizing: "border-box" as const,
      fontFamily: "inherit",
    } as React.CSSProperties,

    submitBtn: {
      width: "100%",
      background: isLoading ? "#3730A3" : "#6366F1",
      border: "none",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "14px",
      fontWeight: 600,
      padding: "11px",
      cursor: isLoading ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginTop: "8px",
    } as React.CSSProperties,

    successBox: {
      background: "#0D2618",
      border: "1px solid #22C55E",
      borderRadius: "8px",
      padding: "16px",
      marginTop: "20px",
    } as React.CSSProperties,

    successTitle: {
      color: "#4ADE80",
      fontSize: "13px",
      fontWeight: 600,
      margin: "0 0 10px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    } as React.CSSProperties,

    successPre: {
      background: "#071A0F",
      borderRadius: "6px",
      padding: "10px",
      margin: 0,
      fontSize: "12px",
      color: "#86EFAC",
      overflow: "auto" as const,
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      lineHeight: 1.6,
    } as React.CSSProperties,

    errorBox: {
      background: "#260D0D",
      border: "1px solid #EF4444",
      borderRadius: "8px",
      padding: "14px 16px",
      marginTop: "20px",
    } as React.CSSProperties,

    errorText: {
      color: "#FCA5A5",
      fontSize: "13px",
      margin: "0 0 8px 0",
    } as React.CSSProperties,

    linkBtn: {
      background: "transparent",
      border: "none",
      color: "#6366F1",
      fontSize: "13px",
      cursor: "pointer",
      padding: 0,
      textDecoration: "underline",
    } as React.CSSProperties,

    footer: {
      fontSize: "12px",
      color: "#4B5563",
      marginTop: "20px",
      paddingTop: "16px",
      borderTop: "1px solid #1E2135",
      display: "flex",
      alignItems: "center",
      gap: "7px",
    } as React.CSSProperties,
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus, textarea:focus {
          border-color: #6366F1 !important;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
        }
        input::placeholder, textarea::placeholder { color: #4B5563; }
        input:disabled, textarea:disabled { opacity: 0.55; cursor: not-allowed; }
      `}</style>

      <div style={s.wrapper}>
        <div style={s.card}>

          {/* ── Header ── */}
          <div style={{ marginBottom: "28px" }}>
            <span style={s.badge}>POST /api</span>
            <h1 style={s.title}>Submit Form</h1>
            <p style={s.subtitle}>Sent via fetch — no redirect, no reload.</p>
          </div>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit} noValidate>
            <div style={s.formGroup}>
              <label htmlFor="name" style={s.label}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                style={s.input}
                disabled={isLoading}
              />
            </div>

            <div style={s.formGroup}>
              <label htmlFor="email" style={s.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={s.input}
                disabled={isLoading}
              />
            </div>

            <div style={s.formGroup}>
              <label htmlFor="message" style={s.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                style={s.textarea}
                disabled={isLoading}
              />
            </div>

            <button type="submit" style={s.submitBtn} disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg
                    width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    style={{ animation: "spin 0.8s linear infinite" }}
                  >
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                  </svg>
                  Sending...
                </>
              ) : "Send Request"}
            </button>
          </form>

          {/* ── Success State ── */}
          {status === "success" && response && (
            <div style={s.successBox}>
              <p style={s.successTitle}>
                <span>✓ Posted successfully</span>
                <button onClick={handleReset} style={s.linkBtn}>Reset</button>
              </p>
              <pre style={s.successPre}>
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}

          {/* ── Error State ── */}
          {status === "error" && (
            <div style={s.errorBox}>
              <p style={s.errorText}>✕ {errorMsg}</p>
              <button onClick={handleReset} style={s.linkBtn}>Try again</button>
            </div>
          )}

          {/* ── Footer ── */}
          <div style={s.footer}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#22C55E", display: "inline-block", flexShrink: 0,
            }} />
            <code style={{ color: "#4B5563", fontSize: "12px" }}>
              {API_ENDPOINT}
            </code>
          </div>

        </div>
      </div>
    </>
  );
}