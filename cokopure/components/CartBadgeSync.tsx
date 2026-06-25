"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

export function CartBadgeSync() {
  const { itemCount } = useCart();

  useEffect(() => {
    const badge = document.querySelector(".cart-badge");
    if (badge) {
      badge.textContent = String(itemCount);
      badge.classList.toggle("hidden", itemCount === 0);
    }
  }, [itemCount]);

  return null;
}
