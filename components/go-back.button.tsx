'use client';

import { Button } from './ui/button';
import { Undo2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function GoBackButton() {
  let router = useRouter();
  return (
    <Button
      type="button"
      variant={'ghost'}
      size={'xs'}
      onClick={() => router.back()}
    >
      <Undo2Icon className="flex-shrink-0 mr-2 text-current size-4" />
      Go back
    </Button>
  );
}
