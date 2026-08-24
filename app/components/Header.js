export default function Header() {
  const wrap = {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #eee",
  }
  const inner = {
    maxWidth: 640,
    margin: "0 auto",
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "system-ui, sans-serif",
  }
  const brand = { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }
  const logoMark = {
    width: 34,
    height: 34,
    borderRadius: 10,
    background: "linear-gradient(135deg, #ff2d55 0%, #c8001f 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 2px 8px rgba(198,0,30,0.35)",
  }
  const wordmark = { fontWeight: 800, fontSize: 17, color: "#15181d", letterSpacing: "-0.3px", lineHeight: 1.1 }
  const tagline = { fontSize: 10.5, color: "#9aa1ab", fontWeight: 600, letterSpacing: "0.4px", textTransform: "uppercase" }
  const nav = { display: "flex", alignItems: "center", gap: 22 }
  const navLink = { color: "#4b5563", fontSize: 14, fontWeight: 600, textDecoration: "none" }

  return (
    <header style={wrap}>
      <div style={inner}>
        <a href="/" style={brand}>
          <span style={logoMark}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C7.58 2 4 5.58 4 10c0 5.25 6.4 11.04 7.19 11.73a1.2 1.2 0 0 0 1.62 0C13.6 21.04 20 15.25 20 10c0-4.42-3.58-8-8-8Z"
                fill="#fff"
              />
              <circle cx="12" cy="10" r="3.1" fill="#c8001f" />
            </svg>
          </span>
          <span>
            <div style={wordmark}>Rokomari AutoFlow</div>
          </span>
        </a>

        <nav style={nav}>
          <a href="/about" style={navLink}>About</a>
          <a href="/#faq" style={navLink}>FAQ</a>
        </nav>
      </div>
    </header>
  )
}
