"use client";

import Link from "next/link";
import { useState } from "react";
import { CartItemRow } from "@/components/CartActions";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const shipping = subtotal > 500 ? 0 : 49;
  const total = subtotal + shipping;

  if (checkedOut) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
          ✓
        </div>
        <h1 className="mt-6 text-3xl font-bold text-stone-900">
          Order Placed!
        </h1>
        <p className="mt-4 text-stone-600">
          This is a demo checkout. Your order has been simulated successfully.
          Thank you for exploring Coko Pure!
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-emerald-600 px-8 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-4xl">
          🛒
        </div>
        <h1 className="mt-6 text-3xl font-bold text-stone-900">
          Your cart is empty
        </h1>
        <p className="mt-4 text-stone-600">
          Add some delicious coconut drinks to get started.
        </p>
        <Link
          href="/#products"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-emerald-600 px-8 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-stone-900">Shopping Cart</h1>
      <p className="mt-1 text-stone-500">
        {items.length} item{items.length !== 1 ? "s" : ""} in your cart
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <CartItemRow
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
          <button
            type="button"
            onClick={clearCart}
            className="text-sm text-stone-500 hover:text-red-600"
          >
            Clear cart
          </button>
        </div>

        <div className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-900">Order Summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-stone-500">Subtotal</dt>
              <dd className="font-medium">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone-500">Shipping</dt>
              <dd className="font-medium">
                {shipping === 0 ? (
                  <span className="text-emerald-600">Free</span>
                ) : (
                  formatPrice(shipping)
                )}
              </dd>
            </div>
            {subtotal < 500 && subtotal > 0 && (
              <p className="text-xs text-emerald-600">
                Add {formatPrice(500 - subtotal)} more for free shipping
              </p>
            )}
            <div className="border-t border-stone-200 pt-3">
              <div className="flex justify-between text-base">
                <dt className="font-semibold text-stone-900">Total</dt>
                <dd className="font-bold text-emerald-800">
                  {formatPrice(total)}
                </dd>
              </div>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => setCheckedOut(true)}
            className="mt-6 w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-700"
          >
            Place Order (Demo)
          </button>
          <p className="mt-3 text-center text-xs text-stone-400">
            Demo checkout — no real payment processed
          </p>
        </div>
      </div>
    </div>
  );
}
