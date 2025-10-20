import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-gray-200 bg-white text-black dark:border-gray-700 dark:bg-black dark:text-gray-100 transition-colors duration-300"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        {/* Top: Brand */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="hidden h-9 w-9 items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black"
            >
              <span className="text-sm font-semibold">B</span>
            </Link>
            <div className="flex flex-col md:flex-row md:items-center gap-2 text-center md:text-left">
              <Link
                href="/"
                className="text-lg font-semibold hover:underline underline-offset-4"
              >
                PixelPrayer
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Thoughts, stories, and ideas
              </span>
            </div>
          </div>
          {/* Center: Footer navigation */}
          <nav aria-label="Footer Navigation" className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Social links */}
          <div className="flex justify-center md:justify-end gap-4 md:gap-6 mt-4 md:mt-0">
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X
            </a>
            <a
              href="https://github.com/yourorg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {year} PixelPrayer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
