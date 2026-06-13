import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>PICHIVE</h2>
          <p>
            AI-powered event photo retrieval. Find your memories instantly.
          </p>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#working">How It Works</a>
          <a href="/search">Find Photos</a>
          <a href="/create-event">Create Event</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PICHIVE. All rights reserved.</p>
      </div>
    </footer>
  );
}