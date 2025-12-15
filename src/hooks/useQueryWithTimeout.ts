import { useEffect, useState } from "react";

/**
 * Hook to detect if a Convex query is taking too long
 * Returns true if query is undefined after timeout duration
 */
export function useQueryWithTimeout<T>(
  queryResult: T | undefined,
  timeoutMs: number = 5000
): { isLoading: boolean; isTimedOut: boolean } {
  const [isTimedOut, setIsTimedOut] = useState(false);

  useEffect(() => {
    if (queryResult !== undefined) {
      setIsTimedOut(false);
      return;
    }

    const timer = setTimeout(() => {
      if (queryResult === undefined) {
        setIsTimedOut(true);
      }
    }, timeoutMs);

    return () => clearTimeout(timer);
  }, [queryResult, timeoutMs]);

  return {
    isLoading: queryResult === undefined && !isTimedOut,
    isTimedOut,
  };
}

