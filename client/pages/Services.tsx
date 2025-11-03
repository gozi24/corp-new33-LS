import { PageBanner } from "@/components/layout/PageBanner";
import {
  Wrench,
  Headset,
  Boxes,
  ShieldCheck,
  Award,
  Truck,
  Clock,
  LifeBuoy,
  Check,
  GraduationCap,
  CheckCircle,
  Users,
  Trophy,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import servicesData from "@/config/data/services.json";
import trainingsData from "@/config/data/trainings.json";
import commissioningData from "@/config/data/commissioning.json";
import validationData from "@/config/data/validation.json";

const ICONS: Record<string, any> = {
  Headset,
  Wrench,
  Boxes,
  LifeBuoy,
  Award,
  Truck,
  Clock,
  GraduationCap,
  CheckCircle,
  Users,
  Trophy,
  Building2,
};

export default function Services() {
  return (
    <div className="bg-white text-slate-900">
      <PageBanner
        title={servicesData.title}
        description={servicesData.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Services" },
        ]}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid items-start gap-8 lg:gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Expert Field Service, Worldwide
            </h2>
            {servicesData.intro.map((p, i) => (
              <p
                key={i}
                className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed"
              >
                {p}
              </p>
            ))}
            <ul className="mt-6 grid gap-3 text-slate-700">
              {[
                "Reliable technical assistance",
                "On-site engineering and commissioning",
                "Guaranteed inventory of ready parts",
                "Dedicated after-sales service",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 text-[hsl(var(--brand-end))]" />
                  <span className="text-base">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-[hsl(var(--brand-end))] px-5 py-3 font-semibold text-white shadow hover:shadow-md transition"
              >
                Request Service
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {servicesData.features.map((f) => {
              const Icon = ICONS[f.icon] ?? Headset;
              return (
                <FeatureCard
                  key={f.title}
                  icon={Icon}
                  title={f.title}
                  descr={f.descr}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            {servicesData.badges.map((b) => {
              const Icon = ICONS[b.icon] ?? Award;
              return (
                <BadgeItem
                  key={b.label}
                  icon={Icon}
                  label={b.label}
                  descr={b.descr}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Trainings Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="w-16 h-1 bg-brand-secondary mb-4"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-[hsl(205_100%_12%)] mb-4">
                  {trainingsData.title}
                </h2>
                {trainingsData.intro.map((p, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-slate-700 leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="grid gap-6">
                {trainingsData.features.map((f) => {
                  const Icon = ICONS[f.icon] ?? GraduationCap;
                  return (
                    <div key={f.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                          <Icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">
                          {f.title}
                        </h3>
                        <p className="text-sm text-slate-700">{f.descr}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-6">
          <div className="text-center">
            <Button asChild size="md">
              <Link to={trainingsData.cta.href}>{trainingsData.cta.text}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commissioning Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="w-16 h-1 bg-brand-secondary mb-4"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-[hsl(205_100%_12%)] mb-4">
                  {commissioningData.title}
                </h2>
                {commissioningData.intro.map((p, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-slate-700 leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
                  <div className="space-y-3">
                    {commissioningData.services.map((s) => (
                      <div key={s} className="flex items-start gap-3">
                        <span className="text-[hsl(var(--primary))] mt-1">•</span>
                        <span className="text-slate-700">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 mt-6">
                  {commissioningData.features.map((f) => {
                    const Icon = ICONS[f.icon] ?? Wrench;
                    return (
                      <div key={f.title} className="flex gap-4 items-start">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10">
                            <Icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">{f.title}</h4>
                          <p className="text-sm text-slate-700">{f.descr}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-6">
          <div className="text-center">
            <Button asChild size="md">
              <Link to={commissioningData.cta.href}>
                {commissioningData.cta.text}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div>
              <div className="w-16 h-1 bg-brand-secondary mb-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[hsl(205_100%_12%)] mb-4">
                {validationData.title}
              </h2>
              {validationData.intro.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-slate-700 leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {validationData.services.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--primary))] mt-0.5" />
                    <span className="text-slate-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-6">
          <div className="text-center">
            <Button asChild size="md">
              <Link to={validationData.cta.href}>{validationData.cta.text}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  descr,
}: {
  icon: any;
  title: string;
  descr: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--brand-start))]/10 text-[hsl(var(--brand-end))]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{descr}</p>
      </div>
    </div>
  );
}

function BadgeItem({
  icon: Icon,
  label,
  descr,
}: {
  icon: any;
  label: string;
  descr: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-end))] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold">{label}</div>
        <div className="text-sm text-slate-600">{descr}</div>
      </div>
    </div>
  );
}
