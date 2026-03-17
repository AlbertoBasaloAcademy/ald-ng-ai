// utility functions for the app
export function formatRocketRange(range: string): string {
  return range.charAt(0).toUpperCase() + range.slice(1).replace(/-/g, ' ');
}
