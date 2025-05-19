import clsx from "clsx";
import { ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const setDocumentViewportHeight = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
};

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // "font-size": Object.keys(TYPOS).map((key) => key.replace(".", "")),
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
