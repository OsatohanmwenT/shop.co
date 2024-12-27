import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | undefined) {
  if (!price) return 0.00;
  return price % 1 === 0 ? `$${price}.00` : `$${price.toFixed(2)}`;
}

export function discountPrice(mainPrice: number | undefined, discount: number | undefined) {
  if (!discount || !mainPrice) return;
  const discountAmount = mainPrice - (mainPrice * discount/100);
  return `$${discountAmount.toFixed(2)}`;
}
