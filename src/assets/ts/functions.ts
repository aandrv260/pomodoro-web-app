export const addClassName = (className: string) => {
  return className ? className : '';
};

type CSSModule = {
  readonly [key: string]: string;
};

export const getValueOrDefault = (value: any, defaultValue: any) => {
  return value ? value : defaultValue;
};

/**
 * Adds css module className automatically based on the stylesheet module object and the name itself
 */
export const addCSSClass = (cssModule: CSSModule, className: string, classes?: string[]) => {
  const primaryClassName = getValueOrDefault(cssModule[className], '');

  // Add additional non-module classNames if inputed
  const nonModuleClassNames = classes ? classes.join(' ') : '';

  return `${primaryClassName} ${nonModuleClassNames}`.trim();
};
