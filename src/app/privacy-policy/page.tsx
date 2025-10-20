export const metadata = {
  title: 'Privacy Policy | PixelPrayer',
  description:
    'Read the Privacy Policy of PixelPrayer to understand how we handle user data, cookies, and advertising in compliance with Google AdSense.',
}

export default function PrivacyPolicy() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to <strong>PixelPrayer</strong>. This Privacy Policy explains how we collect, use, and protect your
        personal information when you visit and use our website. By accessing or using our site, you agree to
        the terms outlined in this policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We may collect personal information such as your name, email address, and preferences when you
        subscribe, comment, or contact us. We also collect non-personal data such as your browser type,
        operating system, and usage statistics through cookies and analytics tools.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Cookies</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We use cookies to enhance your browsing experience and analyze website traffic. Cookies help us
        remember your preferences and show you relevant content and advertisements. You can disable cookies in
        your browser settings if you prefer.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Google AdSense and Advertising</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We use <strong>Google AdSense</strong> to display advertisements. Google may use cookies and web beacons
        to collect information about your visits to this and other websites in order to provide personalized ads
        (also known as interest-based advertising). You can opt out of personalized advertising by visiting{' '}
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Google Ads Settings
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We implement appropriate security measures to protect your data from unauthorized access, alteration, or
        disclosure. However, please note that no data transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Third-Party Links</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our website may contain links to external sites. We are not responsible for the privacy practices or
        content of those websites. We encourage you to review the privacy policies of any third-party sites you
        visit.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Children’s Privacy</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We do not knowingly collect personal information from children under 13. If you believe a child has
        provided us with their personal data, please contact us to have it removed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with the
        updated date. Continued use of the website after such changes means you accept the revised policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
        <a href="mailto:contact@PixelPrayer.com" className="text-blue-600 underline">
          contact@PixelPrayer.com
        </a>
        .
      </p>

      <p className="text-gray-500 mt-8 text-sm">Last updated: October 13, 2025</p>
    </section>
  )
}
