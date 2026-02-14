import { AlertCircle } from 'lucide-react';

interface InlineFieldErrorProps {
  message: string;
}

export function InlineFieldError({ message }: InlineFieldErrorProps) {
  return (
    <div className="flex items-center gap-1.5 text-sm text-destructive">
      <AlertCircle className="h-3.5 w-3.5" />
      <span>{message}</span>
    </div>
  );
}
