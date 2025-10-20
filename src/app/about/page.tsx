export const metadata = {
  title: 'About | PixelPrayer',
  description: 'About PixelPrayer — stories about travel, gaming, and devotion.',
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        About Us
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Welcome to <span className="font-semibold">PixelPrayer</span> — a space for
        stories about travel, gaming, and devotion. We believe in sharing ideas
        that inspire and connect people. Whether you’re seeking thoughtful reads,
        gaming reflections, or personal experiences, PixelPrayer is where creativity
        meets expression.
      </p>

      <div className="mt-10 border border-dashed border-gray-300 text-center py-10 text-gray-400 rounded-lg">
        AdSense Banner Placeholder
      </div>
    </section>
  );
}
