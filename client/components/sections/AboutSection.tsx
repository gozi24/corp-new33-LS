import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/config";
import homeAboutData from "@/config/data/homeAbout.json";

export default function AboutSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div>
        <div className="mb-4 md:mb-6">
          <div className="w-12 md:w-16 h-1 bg-brand-secondary mb-2 md:mb-4"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(205_100%_12%)]">
            About {siteConfig.siteName}
          </h2>
        </div>
        {homeAboutData.paragraphs.slice(0, 2).map((p, i) => (
          <p
            key={i}
            className="text-sm md:text-lg text-slate-700 mb-3 md:mb-4 leading-relaxed"
          >
            {p}
          </p>
        ))}
        <Button
          asChild
          size="md"
          className="shadow-lg hover:shadow-xl bg-[hsl(var(--primary))] hover:bg-[hsl(205_100%_20%)] md:size-lg"
        >
          <Link to="/about">Learn more</Link>
        </Button>
      </div>
      <div className="relative flex items-center justify-center hidden md:flex">
        <div className="w-full h-64 md:h-80 bg-slate-100 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src="/placeholder.svg"
            alt="About photo"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
