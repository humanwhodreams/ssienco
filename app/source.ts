import { SourceIcon } from '@/components/ui/source-icon';
import { icons } from 'lucide-react';
  icon: (icon) => {
    if (icon && icon in icons)
      return createElement(SourceIcon, {
        icon: icons[icon as keyof typeof icons],
      });
  },
