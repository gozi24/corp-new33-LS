import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { VideoItem } from "@/entities/video";

export function VideoCard({ video }: { video: VideoItem }) {
  const params = video.start ? `?start=${video.start}` : "";

  return (
    <div className="w-full max-w-[360px] sm:max-w-full mx-auto pb-2">
      <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${video.id}${params}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </AspectRatio>

      <h3 className="mt-2 text-base sm:text-xl font-semibold leading-tight line-clamp-2 text-[hsl(var(--primary))]">
        {video.title}
      </h3>
    </div>
  );
}
