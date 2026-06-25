import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/CartActions";
import { ProductCard } from "@/components/ProductCard";
import {
  formatPrice,
  getProductById,
  products,
} from "@/lib/products";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Coko Pure`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-stone-500">
        <Link href="/" className="hover:text-emerald-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/#products" className="hover:text-emerald-700">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-900">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-50 to-stone-50 shadow-lg">
          {product.badge && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-semibold text-white">
              {product.badge}
            </span>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            {product.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-stone-900">
            {product.name}
          </h1>
          <p className="mt-1 text-lg text-emerald-700 font-medium">
            {product.tagline}
          </p>
          <p className="mt-2 text-3xl font-bold text-stone-900">
            {formatPrice(product.price)}
          </p>
          <p className="mt-6 leading-relaxed text-stone-600">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton product={product} className="w-full sm:w-auto" />
          </div>

          <div className="mt-10 space-y-6 border-t border-stone-200 pt-8">
            <div>
              <h3 className="font-semibold text-stone-900">Ingredients</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-800"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Benefits</h3>
              <ul className="mt-3 space-y-2">
                {product.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-stone-600"
                  >
                    <span className="text-emerald-500">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-stone-200 pt-16">
          <h2 className="text-2xl font-bold text-stone-900">You May Also Like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
