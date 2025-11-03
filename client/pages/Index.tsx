import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FAQWidget from "@/components/widgets/FAQWidget";
import { Button } from "@/components/Button";
import HeroSection from "@/components/sections/HeroSection";
import ServicesWidget from "@/components/widgets/ServicesWidget";
import KnowledgeHubWidget from "@/components/widgets/KnowledgeHubWidget";
import EmailSubscriptionWidget from "@/components/widgets/EmailSubscriptionWidget";
import ContactForm from "@/components/ContactForm";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import AboutSection from "@/components/sections/AboutSection";
import { siteConfig } from "@/config/config";

export default function Index() {
  return (
    <div id="top" className="text-slate-900 bg-white">
      {/* Hero Section */}
      <HeroSectionWidget />

      {/* Knowledge Hub */}
      <section className="py-12 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <KnowledgeHubWidget />
        </div>
      </section>

      {/* About & Mission Section */}
      <section className="py-12 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <AboutSection />
        </div>
      </section>

      {/* Products preview */}
      {/*
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))]">Featured Products</h2>
            <Link
              to="/products"
              className="hidden md:inline-flex text-base font-semibold text-[hsl(var(--primary))] hover:underline"
            >
              Browse all products →
            </Link>
          </div>

          <FeaturedProductsWidget />
        </div>
      </section>*/}

      {/* Services */}
      <ServicesWidget />

      {/* Benefits - Color Block Section */}
      <section className="py-12 md:py-28">
        <div className="container mx-auto px-4">
          <WhyChooseUsSection />
        </div>
      </section>

      {/* Contact teaser */}
      <section className="py-12 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
            <div>
              <div className="mb-6 md:mb-8">
                <div className="w-12 md:w-16 h-1 bg-brand-secondary mb-2 md:mb-4"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(205_100%_12%)]">
                  FAQs
                </h3>
              </div>
              <div className="mt-6">
                <FAQWidget />
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="w-12 md:w-16 h-1 bg-brand-secondary mb-2 md:mb-4"></div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(205_100%_12%)]">
                Contact Us
              </h3>
              <div className="mt-6">
                <ContactForm variant="minimal" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Subscription */}
      <EmailSubscriptionWidget />
    </div>
  );
}

function FeatureCard({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="aspect-square rounded-2xl border border-slate-200 bg-white flex flex-col items-center justify-center text-center p-4">
      <Icon className="h-8 w-8 text-[hsl(var(--brand-end))]" />
      <span className="mt-2 text-base">{title}</span>
    </div>
  );
}

function ResourceCard({ title }: { title: string }) {
  return (
    <Link
      to="/news"
      className="rounded-2xl border border-slate-200 bg-white p-6 block"
    >
      <div className="text-sm text-slate-500">Featured</div>
      <h3 className="mt-2 font-semibold text-xl">{title}</h3>
      <p className="mt-2 text-base text-slate-600">
        Explore best practices, standards and industry insights curated by our
        experts.
      </p>
      <span className="mt-4 inline-flex text-base underline">Read more</span>
    </Link>
  );
}
