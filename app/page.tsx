import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export default function Page() {
  return (
    <main>
      <Section>
        <h1 className="text-4xl">Nextjs Blog</h1>
        <p>Ready made blog for everyone.</p>

        <div className="flex gap-2 my-4">
          <Button type="button">Browse blog</Button>
          <Button type="button" variant={'secondary'}>
            Donate
          </Button>
          <Button type="button" variant={'tertiary'}>
            Download
          </Button>
        </div>
      </Section>
    </main>
  );
}
