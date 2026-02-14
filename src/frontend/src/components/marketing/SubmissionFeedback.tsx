import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface SubmissionFeedbackProps {
  error: string | null;
  isSuccess: boolean;
  type: 'brand' | 'creator';
}

export function SubmissionFeedback({ error, isSuccess, type }: SubmissionFeedbackProps) {
  if (!error && !isSuccess) return null;

  if (isSuccess) {
    return (
      <Alert className="mb-6 border-chart-1/50 bg-chart-1/10">
        <CheckCircle2 className="h-4 w-4 text-chart-1" />
        <AlertTitle className="text-chart-1">Application Submitted!</AlertTitle>
        <AlertDescription>
          Thank you for your interest! We've received your {type} application and will be in touch soon.
        </AlertDescription>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Submission Failed</AlertTitle>
        <AlertDescription>
          {error}. Please try again or contact us directly if the problem persists.
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}
