'use client'; // Error components must be Client Components

import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main>
      <section>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl font-bold'>
            Oops, something went wrong!
          </h1>
          <button onClick={reset} className='btn btn-error mt-4'>
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}
