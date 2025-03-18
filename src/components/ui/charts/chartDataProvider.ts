
import { getGreenColorShades } from "./colorUtils";

export type ChartType = "create" | "distribute" | "track";

/**
 * Creates initial data for content mediums pie chart
 */
export const getContentMediumsData = () => [
  { name: "Email Distribution", value: 28, color: "#0ea5e9" }, // Added email distribution
  { name: "Content Plan", value: 22, color: "#22c55e" },
  { name: "Research", value: 15, color: "#4ade80" },
  { name: "Optimization", value: 14, color: "#86efac" },
  { name: "Guest Blogging", value: 12, color: "#bbf7d0" },
  { name: "Paid Distribution", value: 9, color: "#dcfce7" }
];

/**
 * Creates initial data for lead generation bar chart
 */
export const getLeadGenerationData = () => [
  { name: "Jan", leads: 435, growth: 0 },
  { name: "Feb", leads: 628, growth: 44 },
  { name: "Mar", leads: 822, growth: 31 },
  { name: "Apr", leads: 1160, growth: 41 },
  { name: "May", leads: 1643, growth: 42 },
  { name: "Jun", leads: 2223, growth: 35 }
];

/**
 * Creates initial data for buyer preference donut chart
 */
export const getBuyerPreferenceData = () => [
  { name: "CMO", value: 45, color: "#22c55e" },
  { name: "CEO", value: 25, color: "#4ade80" },
  { name: "CFO", value: 15, color: "#86efac" },
  { name: "Manager", value: 15, color: "#bbf7d0" }
];

/**
 * Get initial empty state data for the specified chart type
 * @param type Chart type
 */
export const getInitialEmptyData = (type: ChartType) => {
  switch (type) {
    case "create":
    case "track":
      return [];
    case "distribute":
      return [
        { name: "Jan", leads: 0, growth: 0 },
        { name: "Feb", leads: 0, growth: 0 },
        { name: "Mar", leads: 0, growth: 0 },
        { name: "Apr", leads: 0, growth: 0 },
        { name: "May", leads: 0, growth: 0 },
        { name: "Jun", leads: 0, growth: 0 }
      ];
    default:
      return [];
  }
};
