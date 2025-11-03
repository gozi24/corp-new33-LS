import { Button } from "@/components/Button";
import emailSubscriptionData from "@/config/data/emailSubscription.json";

export default function EmailSubscriptionWidget() {
  return (
    <section className="py-12 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 md:mb-8 text-center">
            <div className="w-12 md:w-16 h-1 bg-brand-secondary mx-auto mb-2 md:mb-4"></div>
            <h2 className="text-2xl md:text-5xl font-bold text-[hsl(205_100%_12%)] mb-3 md:mb-4">
              {emailSubscriptionData.title}
            </h2>
            <p className="text-sm md:text-lg text-slate-700 leading-relaxed">
              {emailSubscriptionData.description}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              const email = fd.get("email");
              console.log({ email });
              alert(emailSubscriptionData.successMessage);
              (e.currentTarget as HTMLFormElement).reset();
            }}
            className="flex flex-col sm:flex-row gap-2 md:gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder={emailSubscriptionData.inputPlaceholder}
              className="h-12 md:h-14 flex-1 bg-white text-slate-900 border-2 border-slate-300 px-4 outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent text-sm md:text-base"
            />
            <Button
              variant="primary"
              size="md"
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(205_100%_20%)] shadow hover:shadow-md md:size-lg"
            >
              {emailSubscriptionData.buttonText}
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-slate-600">
            {emailSubscriptionData.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
