import { PageBanner } from "@/components/layout/PageBanner";
import pageBannersConfig from "@/config/data/pageBanners.json";

const pageConfig = (pageBannersConfig as any).pages.ResourcesCaseStudies;

export default function CaseStudies() {
  return (
    <div className="bg-white text-slate-900">
      <PageBanner
        title={pageConfig.title}
        description={pageConfig.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Case Studies" }]}
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-slate-700">Case studies coming soon.</p>
      </section>
    </div>
  );
}
