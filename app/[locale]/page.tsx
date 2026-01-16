"use client";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import Donate from "@/components/Donate";

export default function LocaleHomePage() {
  return (
    <main className="relative">
      <section className="relative">
        <Hero />
      </section>

      <section className="relative py-10">
        <ProductGrid />
      </section>

      <section className="relative py-10">
        <Donate />
      </section>

      <section className="relative py-10">
        <About />
      </section>
    </main>
  );
}
