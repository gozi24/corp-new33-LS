import React from "react";

function BenefitCard({ title, descr }: { title: string; descr: string }) {
  return (
    <div className="border-b border-slate-200 pb-4 md:pb-8 pt-3 md:pt-6">
      <h3 className="text-base md:text-2xl font-bold text-[hsl(var(--primary))] mb-2 md:mb-4">
        {title}
      </h3>
      <p className="text-sm md:text-lg leading-relaxed text-slate-700">
        {descr}
      </p>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <div className="mb-8 md:mb-12">
      <div className="w-12 md:w-16 h-1 bg-brand-secondary mb-2 md:mb-4"></div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(205_100%_12%)]">
        Why Choose Us
      </h2>
      <div className="grid md:grid-cols-3 gap-4 md:gap-8 mt-8">
        <BenefitCard
          title="Industry Expertise"
          descr="10+ years supplying public and private healthcare institutions with trusted biosafety solutions"
        />
        <BenefitCard
          title="Official Supply"
          descr="We work only with certified manufacturers to ensure quality and compliance with standards"
        />
        <BenefitCard
          title="Nationwide Service"
          descr="Our own service team provides responsive support and maintenance across the nation"
        />
      </div>
    </div>
  );
}
