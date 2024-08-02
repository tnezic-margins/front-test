import { type ButtonVariant, type ButtonSize, ButtonColor } from "./types";

// Variant styles
/** Styles for contained variant */
const getContainedClasses = (color: ButtonColor): string => {
  if (color === "error")
    return "text-white bg-rose-500 hover:bg-rose-400 active:bg-rose-600 disabled:bg-gray-500";

  // Default color: primary
  return "text-white bg-yellow-600 bg-yellow-700 active:bg-yellow-800 disabled:bg-gray-500";
};

/** Styles for outlined variant */
const getOutlinedClasses = (color: ButtonColor): string => {
  if (color === "error")
    return "border-2 border-rose-500 hover:border-rose-400 active:border-rose-600 text-rose-500 hover:text-rose-400 active:text-rose-600 disabled:border-gray-500 disabled:text-gray-500";

  // Default color: primary
  return "border-2 border-blue-500 hover:border-blue-400 active:border-blue-600 text-blue-500 hover:text-blue-400 active:text-blue-600 disabled:border-gray-500 disabled:text-gray-500";
};

/** Styles for text variant */
const getTextClasses = (color: ButtonColor): string => {
  if (color === "error")
    return "text-rose-500 hover:text-rose-400 active:text-rose-600 disabled:text-gray-500";

  // Default color: primary
  return "text-blue-500 hover:text-blue-400 active:text-blue-600 disabled:text-gray-500";
};

/** Styles for link variant */
const getLinkClasses = (): string => {
  return "p-0 font-normal text-sm hover:underline";
};

// Main style getters
/** Base styles for the button */
export const getBaseClasses = (): string => "rounded transition font-semibold";

/** Size styles controller */
export const getSizeClasses = (size: ButtonSize): string => {
  if (size === "sm") return "py-1 px-3 text-sm";

  if (size === "lg") return "py-3 px-7 text-lg";

  // Default: md
  return "py-2 px-5";
};

/** Variant styles controller */
export const getVariantClasses = (
  variant: ButtonVariant,
  color: ButtonColor
): string => {
  if (variant === "outlined") return getOutlinedClasses(color);

  if (variant === "text") return getTextClasses(color);

  if (variant === "link") return getLinkClasses();

  return getContainedClasses(color); // Default variant: primary
};
