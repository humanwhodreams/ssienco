import Link from 'next/link';
import { blog } from '@/app/source';
import { cn } from '@/lib/cn';
import { focusRing } from '@/lib/focuses';

export default function Page() {
  const data = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <>
      <section className="h-[300px] p-8 md:h-[400px] md:p-12 bg-tertiary text-tertiary-foreground">
        <h1>Blog</h1>
        <p className='text-xl'>Light and gorgeous. like the moon</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {data.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className={cn(
              'flex flex-col p-4 transition-colors border bg-card hover:bg-accent hover:text-accent-foreground focus-visible:ring-offset-0',
              focusRing
            )}
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="muted">
              {post.data.description}
            </p>

            <p className="pt-4 mt-auto text-xs text-muted-foreground">
              {new Date(post.data.date ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
