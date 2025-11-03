import { PageBanner } from "@/components/layout/PageBanner";

import FAQWidget from "@/components/widgets/FAQWidget";
import ContactForm from "@/components/ContactForm";
import pageBannersConfig from "@/config/data/pageBanners.json";

const pageConfig = (pageBannersConfig as any).pages.Contact;

export default function Contact() {
  return (
    <div className="bg-white text-slate-900">
      <PageBanner
        title={pageConfig.title}
        description={pageConfig.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
