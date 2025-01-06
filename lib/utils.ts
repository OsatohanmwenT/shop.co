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

export const generateCartId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const getFiltersFromURL = (searchParams: URLSearchParams) => {
  const filters: Record<string, string | string[]> = {};
  searchParams.forEach((value, key) => {
    filters[key] = value.includes(",") ? value.split(",") : value;
  });
  return filters;
};

export const updateURL = (pathname: string, filters: Record<string, string | string[]>, replace: (url: string) => void) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.length ? params.set(key, value.join(",")) : params.delete(key);
    } else {
      value ? params.set(key, value as string) : params.delete(key);
    }
  });

  replace(`${pathname}?${params.toString()}`);
};