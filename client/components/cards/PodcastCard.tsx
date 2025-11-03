import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { PodcastItem } from "@/entities/podcast";

export function PodcastCard({ podcast }: { podcast: PodcastItem }) {
  const params = podcast.start ? `?start=${podcast.start}` : "";

  return (
    <div className="w-full max-w-[360px] sm:max-w-full mx-auto pb-2">
      <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${podcast.id}${params}`}
          title={podcast.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </AspectRatio>

      <h3 className="mt-2 text-base sm:text-xl font-semibold leading-tight line-clamp-2 text-[hsl(var(--primary))]">
        {podcast.title}
      </h3>
    </div>
  );
}
