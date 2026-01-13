import { getDayOfYear, isLeapYear } from "date-fns";
import { colors as _colors } from "./colors.json";

// colors format, list of color items: {"name": "flamingo", "level": 50, "hue": 0, "oklch": "oklch(0.98 0.01 0)", "hex": "#fff5f8"}

export interface ColorEntry {
  name: string;
  level: number;
  hue: number;
  oklch: string;
  hex: string;
}

export type ColorLevel =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type ColorsByLevel = Record<ColorLevel, ColorEntry>;

// Group colors by hue and level
export const COLORS: Record<
  number,
  Record<number, ColorEntry>
> = _colors.reduce(
  (acc, color) => {
    const typedColor = color as ColorEntry;
    if (!acc[typedColor.hue]) {
      acc[typedColor.hue] = {};
    }
    acc[typedColor.hue][typedColor.level] = typedColor;
    return acc;
  },
  {} as Record<number, Record<number, ColorEntry>>,
);

/**
 * Maps a date to the nearest hue and returns all colors for that hue.
 * The mapping distributes 365/366 days across 36 hues (0, 10, 20, ..., 350).
 *
 * @param date - The date to map to a color hue
 * @returns A record of all color levels for the nearest hue
 * @throws Error if the hue is not found in the color palette
 */
export function getColorsForDate(date: Date): ColorsByLevel {
  const dayOfYear = getDayOfYear(date);
  const daysInYear = isLeapYear(date) ? 366 : 365;
  const hues = 36; // 0, 10, 20, ..., 350

  // Map day of year (1-365/366) to hue index (0-35)
  const hueIndex = Math.floor(((dayOfYear - 1) / daysInYear) * hues);
  const hue = hueIndex * 10;

  const colors = COLORS[hue];
  if (!colors) {
    throw new Error(
      `No colors found for hue ${hue} (date: ${date.toISOString()})`,
    );
  }

  return colors as ColorsByLevel;
}
