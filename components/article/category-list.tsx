import type { Article } from '@/lib/markdown/articles';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focusRing } from '@/lib/focuses';

interface Props {
  category: Article['category'];
  data: Article[];
}

export function CategoryList({ category, data }: Props) {
  return (
    <div className="flex flex-col items-start gap-4">
      <h3 className='capitalize text-tertiary'>{category}</h3>
      <ul>
        {data.map((d, idx) => (
          <li key={idx}>
            <Link
              href={`/${d.slug}`}
              className={cn(
                'h-8 inline-flex items-center justify-center whitespace-nowrap px-3 py-2 transition-colors hover:bg-accent hover:text-accent-foreground rounded-md',
                focusRing
              )}
            >
              {d.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
