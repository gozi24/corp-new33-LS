import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/Button";
import type { QuizMeta } from "@/entities/quiz";

export function QuizCard({ quiz }: { quiz: QuizMeta }) {
  return (
    <div className="pb-4 pt-4">
      <AspectRatio ratio={5 / 2} className="mb-4">
        <img
          src={quiz.image?.url ?? "/placeholder.svg"}
          alt={quiz.image?.alt ?? quiz.title}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </AspectRatio>
      <div className="mb-2">
        <h3 className="text-lg font-bold leading-tight text-[hsl(var(--primary))] mb-1">
          {quiz.title}
        </h3>
        <p className="text-sm text-slate-600">{quiz.subtitle}</p>
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-[hsl(var(--primary))] uppercase tracking-wide">
        <span className="bg-[hsl(var(--primary))]/5 px-2 py-1">
          {quiz.category}
        </span>
        <span className="text-slate-300">—</span>
        <span className="bg-[hsl(var(--primary))]/5 px-2 py-1">
          {quiz.skillLevel}
        </span>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-3 text-xs">
        <div>
          <dt className="font-medium text-slate-600 mb-1">Questions</dt>
          <dd className="text-lg font-bold text-[hsl(var(--primary))]">
            {quiz.questionCount}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-slate-600 mb-1">Duration</dt>
          <dd className="text-lg font-bold text-[hsl(var(--primary))]">
            ~{quiz.durationMinutes} min
          </dd>
        </div>
      </div>
      <Button asChild variant="primary" size="md" className="w-full">
        <Link to={`/resources/quizzes/${quiz.slug}`}>Start quiz</Link>
      </Button>
    </div>
  );
}
