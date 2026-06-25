import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-emerald-50/50 to-stone-50">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-emerald-600">
          {product.category}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-stone-900 group-hover:text-emerald-800">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-stone-500">
          {product.tagline}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-emerald-800">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
