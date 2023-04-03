export const delayForDemo = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};
