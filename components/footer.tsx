export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Custom Dev Co. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="mailto:hello@customdev.co"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
