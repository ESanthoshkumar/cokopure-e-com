"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function AddToCartButton({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.98] ${className}`}
    >
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}

export function CartItemRow({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-4">
      <Link
        href={`/products/${product.id}`}
        className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-emerald-50"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link
            href={`/products/${product.id}`}
            className="font-semibold text-stone-900 hover:text-emerald-700"
          >
            {product.name}
          </Link>
          <p className="text-sm text-stone-500">{formatPrice(product.price)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-6 text-center text-sm font-medium">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="hidden text-right font-semibold text-stone-900 sm:block">
        {formatPrice(product.price * quantity)}
      </p>
    </div>
  );
}
