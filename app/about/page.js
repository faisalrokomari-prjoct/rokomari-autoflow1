import Footer from "../components/Footer"
import Header from "../components/Header"

export const metadata = {
  title: "About Us — Rokomari AutoFlow by Rokomari AutoFlow",
}

export default function About() {
  return (
    <>
    <Header />
    <main style={{ maxWidth: 640, margin: "40px auto", fontFamily: "system-ui, sans-serif", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>About Us</h1>
      <p>
        Rokomari AutoFlow is built and maintained by Rokomari AutoFlow (rokomari-autoflow1.vercel.app), an independent
        maker of small, free web tools.
      </p>
      <p>
        Our goal with Rokomari AutoFlow is simple: give Pinterest business account owners a
        clean, no-cost way to create and schedule pins to their own boards using Pinterest's
        official API v5 — without handing over their Pinterest password or account access to
        anyone.
      </p>
      <p>
        Rokomari AutoFlow is an independent, third-party tool. It is not affiliated with,
        endorsed by, or sponsored by Pinterest, Inc. "Pinterest" is a trademark of
        Pinterest, Inc.
      </p>
      <h2>What we believe in</h2>
      <ul>
        <li>You should always be in control of what gets posted to your own account.</li>
        <li>A tool shouldn't need your password to be useful — official OAuth login only.</li>
        <li>Simple, free tools can still be built responsibly and transparently.</li>
      </ul>
      <h2>Get in touch</h2>
      <p>
        Questions, feedback, or issues? Email us at{" "}
        <a href="mailto:faisal.rokomari@gmail.com">faisal.rokomari@gmail.com</a>.
      </p>
      <p style={{ marginTop: 30 }}>
        <a href="/">← Back to Rokomari AutoFlow</a>
      </p>
    </main>
    <Footer />
    </>
  )
}
