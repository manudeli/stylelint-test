export const myTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
} as const;

export type MyTheme = typeof myTheme;
