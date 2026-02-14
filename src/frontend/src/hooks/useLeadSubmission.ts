import { useState } from 'react';
import { useActor } from './useActor';
import type { BrandForm, CreatorForm } from '@/backend';

export function useLeadSubmission() {
  const { actor } = useActor();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitBrand = async (form: BrandForm): Promise<boolean> => {
    if (!actor) {
      setError('Connection not available');
      return false;
    }

    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await actor.submitBrand(form);
      setIsSuccess(true);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit brand application';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const submitCreator = async (form: CreatorForm): Promise<boolean> => {
    if (!actor) {
      setError('Connection not available');
      return false;
    }

    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await actor.submitCreator(form);
      setIsSuccess(true);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit creator application';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitBrand,
    submitCreator,
    isLoading,
    error,
    isSuccess,
  };
}
