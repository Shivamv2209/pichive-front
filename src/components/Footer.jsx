export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] mt-20">
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="text-white text-2xl font-bold mb-4">PICHIVE</h2>

            <p className="text-[#868686] leading-relaxed">
              AI-powered event photo retrieval. Find your memories instantly.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div className="flex flex-col gap-3">
              <a
                href="#features"
                className="text-[#868686] hover:text-white transition"
              >
                Features
              </a>

              <a
                href="#working"
                className="text-[#868686] hover:text-white transition"
              >
                How It Works
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/search"
                className="text-[#868686] hover:text-white transition"
              >
                Find Photos
              </a>

              <a
                href="/create-event"
                className="text-[#868686] hover:text-white transition"
              >
                Create Event
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1f1f1f] mt-10 pt-6 text-center">
          <p className="text-sm text-[#868686]">
            © 2026 PICHIVE. All rights reserved.
          </p>
          <p className="text-sm text-[#868686] mt-2">
            Built by Shivam Verma ·{" "}
            <a
              href="https://www.linkedin.com/in/shivam-verma-2bb716294/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
