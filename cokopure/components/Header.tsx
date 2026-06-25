import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-sm">
            C
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-emerald-900">
              COKO
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-600">
              Pure
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#products"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-700"
          >
            Shop
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-700"
          >
            About
          </Link>
          <Link
            href="/#benefits"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-emerald-700"
          >
            Why Coko
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative flex h-10 items-center gap-2 rounded-full bg-emerald-50 px-4 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-100"
          >
            <CartIcon />
            <span className="hidden sm:inline">Cart</span>
            <CartBadge />
          </Link>
        </div>
      </div>
    </header>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function CartBadge() {
  return (
    <span className="cart-badge absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-bold text-white">
      0
    </span>
  );
}
