import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-950 text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">COKO PURE</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-emerald-200/80">
              Naturally crafted coconut beverages from Kerala. Pure ingredients,
              tropical taste, zero compromise.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-emerald-100/80">
              <li>
                <Link href="/#products" className="hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white">
                  Your Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Contact
            </p>
            <p className="mt-4 text-sm text-emerald-100/80">
              Pre-order & event booking
            </p>
            <a
              href="tel:1234567890"
              className="mt-1 inline-block text-lg font-semibold text-white hover:text-emerald-200"
            >
              1234567890
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-emerald-800 pt-6 text-center text-xs text-emerald-400">
          © {new Date().getFullYear()} Coko Pure. Demo e-commerce application.
        </div>
      </div>
    </footer>
  );
}
