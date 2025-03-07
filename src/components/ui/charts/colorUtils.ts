
/**
 * Generates green color shades for charts
 * @param index Index of the color in the sequence
 * @param total Total number of colors needed
 * @returns Hex color code
 */
export const getGreenColorShades = (index: number, total: number) => {
  const baseColor = "#22c55e";
  const lightestColor = "#dcfce7";
  
  const lightenPercent = (index / (total - 1)) * 100;
  return index === 0 ? baseColor : calculateColor(baseColor, lightenPercent);
};

/**
 * Calculates a color based on a base color and a percentage to lighten it
 * @param baseColor Base color in hex format (#RRGGBB)
 * @param percent Percentage to lighten the color (0-100)
 * @returns Hex color code
 */
export const calculateColor = (baseColor: string, percent: number) => {
  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);
  
  const targetR = Math.min(255, r + Math.floor((255 - r) * (percent / 100)));
  const targetG = Math.min(255, g + Math.floor((255 - g) * (percent / 100)));
  const targetB = Math.min(255, b + Math.floor((255 - b) * (percent / 100)));
  
  return `#${targetR.toString(16).padStart(2, '0')}${targetG.toString(16).padStart(2, '0')}${targetB.toString(16).padStart(2, '0')}`;
};
