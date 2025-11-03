import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/Button";
import {
  Card,
  CardHeader,
} from "@/components/ui/card";
import type { QuizMeta } from "@/entities/quiz";

export function QuizCard({ quiz }: { quiz: QuizMeta }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden rounded-lg border border-slate-200/70 bg-white shadow-sm transition-shadow hover:shadow">
      <div className="bg-white">
        <AspectRatio ratio={5 / 2}>
          <img
            src={quiz.image?.url ?? "/placeholder.svg"}
            alt={quiz.image?.alt ?? quiz.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </AspectRatio>
      </div>
      <CardHeader className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-lg font-semibold sm:font-bold leading-tight text-[hsl(var(--primary))] mb-1">
          {quiz.title}
        </h3>
        <p className="text-base sm:text-sm text-slate-600 mb-3">{quiz.subtitle}</p>
        {/*<div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-medium sm:font-semibold text-[hsl(var(--primary))] uppercase tracking-wide">
          <span className="text-xs bg-[hsl(var(--primary))]/5 px-2 py-1">
            {quiz.category}
          </span>
          <span className="text-xs bg-[hsl(var(--primary))]/5 px-2 py-1">
            {quiz.skillLevel}
          </span>*/}
        </div>
      </CardHeader>
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 grid grid-cols-2 gap-3 text-[10px] sm:text-xs">
        <div>
          <dt className="text-base font-medium text-slate-600 mb-1">Questions</dt>
          <dd className="text-lg sm:text-lg font-semibold sm:font-bold text-[hsl(var(--primary))]">
            {quiz.questionCount}
          </dd>
        </div>
        <div>
          <dt className="text-base font-medium text-slate-600 mb-1">Duration</dt>
          <dd className="text-lg sm:text-lg font-semibold sm:font-bold text-[hsl(var(--primary))]">
            ~{quiz.durationMinutes} min
          </dd>
        </div>
      </div>
      <div className="mt-auto px-4 sm:px-6 pb-4 sm:pb-6">
        <Button asChild variant="primary" size="md" className="w-full">
          <Link to={`/resources/quizzes/${quiz.slug}`}>Start quiz</Link>
        </Button>
      </div>
    </Card>
  );
}
