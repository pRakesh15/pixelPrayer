export const metadata = {
  title: 'Terms of Service | bloghives',
  description:
    'Read the Terms and Conditions for using bloghives. Learn about content usage, copyright, limitations, and community guidelines.',
}

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to <strong>bloghives</strong>. By accessing or using this website, you agree to comply with and be
        bound by these Terms and Conditions. Please read them carefully before using the site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Website</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You agree to use this website only for lawful purposes and in a way that does not infringe on the rights
        of others or restrict their use of the site. You must not engage in activities such as spamming,
        hacking, or uploading malicious content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        All content published on this website — including articles, images, and media — is the property of{' '}
        <strong>bloghives</strong> or its respective authors. You may share links to our content but cannot copy,
        reproduce, or redistribute any part of it without written permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Contributions</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Users may contribute content such as comments or articles. By submitting content, you grant us a
        non-exclusive, royalty-free, worldwide license to publish, display, and distribute it on our platform.
        We reserve the right to remove or modify content that violates our guidelines or legal standards.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services and Ads</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our website displays ads served by <strong>Google AdSense</strong> and may include affiliate links or
        sponsored content. We do not control third-party ads or websites linked from our pages and are not
        responsible for their content or actions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Disclaimer and Limitation of Liability</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        All content on this site is provided for informational purposes only. We make no warranties about the
        completeness, accuracy, or reliability of any information. Your use of the site is at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Policy Updates</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We may revise or update these Terms at any time without prior notice. Please check this page
        periodically for changes. Continued use of the site after updates means you accept the modified Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For any questions regarding these Terms, please reach out to us at{' '}
        <a href="mailto:contact@bloghives.com" className="text-blue-600 underline">
          contact@bloghives.com
        </a>
        .
      </p>

      <p className="text-gray-500 mt-8 text-sm">Last updated: October 13, 2025</p>
    </section>
  )
}
