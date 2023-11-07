export const formatter = (value, options) => {
  if (!value) return value;
  let returnValue = value.toString();
  const { prefix, postfix, moneyFormat } = options;
  if (prefix) {
    returnValue = `${prefix}${returnValue}`;
  }
  if (postfix) {
    returnValue = `${returnValue}${postfix}`;
  }
  if (moneyFormat) {
    returnValue = returnValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return returnValue;
};

export const parser = (value, options) => {
  if (!value) return value;
  let returnValue = value.replace(/^[A-Za-z]+$/, '');
  const { prefix, postfix, moneyFormat } = options;
  if (prefix) {
    prefix.split('').forEach(char => {
      returnValue = returnValue.replace(char, '');
    });
  }
  if (postfix) {
    postfix.split('').forEach(char => {
      returnValue = returnValue.replace(char, '');
    });
  }
  if (moneyFormat) {
    returnValue = returnValue.replace(/\$\s?|(,*)/g, '');
  }
  return returnValue;
};
