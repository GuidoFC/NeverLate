export type ButtonColor = 'blue' | 'red' | 'green';

export const BUTTON_COLOR_CLASSES: Record<ButtonColor, string> = {
  blue: 'bg-blue-500 hover:bg-blue-700',
  red: 'bg-red-500 hover:bg-red-700',
  green: 'bg-green-500 hover:bg-green-700',
};
