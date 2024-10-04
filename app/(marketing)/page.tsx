import { CategoryList } from '@/components/article/category-list';
import { Section } from '@/components/ui/section';
import { getCategorizedContents } from '@/lib/markdown/articles';

export default function Page() {
  const data = getCategorizedContents();

  return (
    <>
      <Section>
        <h1>
          Ready made markdown blogging site for your projects, made for everyone
        </h1>
        <p className="lead">
          Blog with full control, fine-grain customization and plugins.
        </p>
      </Section>
      {data !== null ? (
        <Section className="grid gap-6">
          <h2>Popular categories</h2>
          {Object.keys(data).map((d, idx) => (
            <CategoryList key={idx} category={d} data={data[d]} />
          ))}
        </Section>
      ) : null}
    </>
  );
}
