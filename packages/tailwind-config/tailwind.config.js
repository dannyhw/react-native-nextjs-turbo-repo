const colors = require("./colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*"],
  theme: {
    extend: {
      colors: {
        ...colors,
        "icon-success": colors.green[600],
      },
      textColor: {
        "primary-pressed": colors.teal[700],
        primary: colors.teal[600],
        default: colors.gray[700],
        subdued: colors.gray[500],
        "on-primary": "white", // text-on-primary
      },
      backgroundColor: {
        "action-primary": colors.teal[600], // bg-action-primary
        DEFAULT: "white",
        subdued: colors.gray[100],
        primary: colors.teal[50],
        "primary-hovered": colors.teal[200],
        "primary-pressed": colors.teal[600],
      },
      borderColor: {
        default: colors.gray[300],
        subdued: colors.gray[200],
      },
      fontSize: {
        caption: defaultTheme.fontSize.xs,
        overline: defaultTheme.fontSize.sm,
        button: defaultTheme.fontSize.base,
        body: defaultTheme.fontSize.lg,
        title: defaultTheme.fontSize.xl,
        "display-sm": defaultTheme.fontSize["2xl"],
        "display-md": defaultTheme.fontSize["3xl"],
        "display-lg": defaultTheme.fontSize["4xl"],
        "display-xl": defaultTheme.fontSize["5xl"],
      },
      spacing: {
        xxs: defaultTheme.spacing[1],
        xs: defaultTheme.spacing[2],
        base: defaultTheme.spacing[3],
        sm: defaultTheme.spacing[4],
        md: defaultTheme.spacing[5],
        lg: defaultTheme.spacing[8],
        xl: defaultTheme.spacing[10],
        xxl: defaultTheme.spacing[16],
        xxxl: defaultTheme.spacing[20],
        "icon-md": defaultTheme.spacing[5],
        // className="w-icon-md"
      },
    },
  },
  plugins: [],
};
