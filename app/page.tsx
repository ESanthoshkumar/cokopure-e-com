import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber-400/30 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="inline-block rounded-full bg-emerald-700/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-100 ring-1 ring-emerald-500/30">
              100% Natural · Kerala Crafted
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Pure Coconut.
              <br />
              <span className="text-emerald-300">Tropical Taste.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-emerald-100/90">
              Discover handcrafted coconut beverages made from fresh ingredients.
              No preservatives, no artificial flavors — just nature in a bottle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#products"
                className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-emerald-900 shadow-lg transition hover:bg-emerald-50"
              >
                Shop Collection
              </Link>
              <Link
                href="#about"
                className="inline-flex h-12 items-center rounded-full border border-emerald-400/40 px-8 text-sm font-semibold text-white transition hover:bg-emerald-800/50"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <Image
                src="/product/Screenshot_2.png"
                alt="Coko Pure Mango"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-600">
                Fresh Daily
              </p>
              <p className="text-2xl font-bold text-stone-900">8 Flavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="border-b border-emerald-100 bg-emerald-50/50 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              icon: "🌿",
              title: "100% Natural",
              desc: "Fresh coconuts and real fruits — nothing artificial.",
            },
            {
              icon: "🥥",
              title: "Farm to Bottle",
              desc: "Sourced locally from Kerala's finest coconut farms.",
            },
            {
              icon: "❄️",
              title: "Always Fresh",
              desc: "Cold-pressed and delivered chilled for peak flavor.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                {item.icon}
              </span>
              <div>
                <h3 className="font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Customer Favorites
            </p>
            <h2 className="mt-2 text-3xl font-bold text-stone-900">
              Featured Drinks
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section id="products" className="bg-stone-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Full Collection
              </p>
              <h2 className="mt-2 text-3xl font-bold text-stone-900">
                All Products
              </h2>
              <p className="mt-2 max-w-lg text-stone-600">
                Eight unique blends crafted from coconut milk, tropical fruits,
                and wholesome ingredients.
              </p>
            </div>
            <p className="text-sm text-stone-500">{products.length} products</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/product/Screenshot_4.png"
              alt="Coko Pure 100% Coconut Milk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Our Story
            </p>
            <h2 className="mt-2 text-3xl font-bold text-stone-900">
              Born in Kerala&apos;s Coconut Country
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Coko Pure started with a simple belief: the best drinks come from
              the freshest ingredients. We work directly with local farmers to
              bring you coconut beverages that taste like they were just cracked
              open on a tropical beach.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              Every bottle is a celebration of Kerala&apos;s rich agricultural
              heritage — from Alphonso mangoes to butterfly pea flowers, each
              flavor tells a story of purity and tradition.
            </p>
            <a
              href="tel:8754576045"
              className="mt-6 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800"
            >
              Call for pre-orders: 87545 76045 →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-900 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Ready to taste the tropics?</h2>
          <p className="mt-4 text-emerald-100/80">
            Browse our full collection and add your favorites to the cart.
            This is a demo store — checkout is simulated for showcase purposes.
          </p>
          <Link
            href="#products"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </>
  );
}
