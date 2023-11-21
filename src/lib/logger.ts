/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

/**
 * A logger function that will only logs on development
 * @param object - The object to log
 * @param comment - Autogenerated with `lg` snippet
 */
export default function logger(
  object: any,
  comment?: any,
  ...additionalObjects: any[]
): void {
  // if (!showLogger) return;

  console.log(
    `%c ============== INFO LOG ============== \n${
      comment ? `comment: ${comment}\n` : ''
    }console: `,
    'color: #22D3EE',
    object,
    ...additionalObjects
  );
}
