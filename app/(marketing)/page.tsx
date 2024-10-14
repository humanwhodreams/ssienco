import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { overrideMetadata } from '@/lib/metadata';

export const metadata: Metadata = overrideMetadata({
  title: 'Home',
});

export default function Page() {
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
    </>
  );
}
