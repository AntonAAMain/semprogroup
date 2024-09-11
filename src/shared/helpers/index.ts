export const sleep = async (ms: number) => {
  let timeoutId: NodeJS.Timeout;

  const sleepPromise = new Promise<void>((resolve) => {
    timeoutId = setTimeout(resolve, ms);
  }).finally(() => {
    clearTimeout(timeoutId);
  });

  await sleepPromise;
};
