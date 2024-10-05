import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface DialogBodyProps {
  children: ReactNode;
}

export function DialogBody({ children }: DialogBodyProps) {
  return <div className={cn('p-6')}>{children}</div>;
}
