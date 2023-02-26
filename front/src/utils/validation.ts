export const required = (value: string) => value.trim() !== '';

export const length = (config: {min?: number, max?: number}) => (sample: string) => {
  let isValid = true;
  if (config.min) {
    isValid = isValid && sample.trim().length >= config.min;
  }
  if (config.max) {
    isValid = isValid && sample.trim().length <= config.max;
  }
  return isValid;
};

export const email = (sample: string) =>
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    sample
);
