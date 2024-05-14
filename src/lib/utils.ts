/**
 * A utility function that merges class names using clsx and tailwind-merge.
 * @param inputs - An array of class names to be merged.
 * @returns A string of merged class names.
 */
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(...inputs));
};

/**
 * Returns the full URL of a backend image by concatenating the base URL and the image URL.
 * @param url - The URL of the image on the backend.
 * @returns The full URL of the backend image.
 */
import { BASE_URL } from '@/configs/env.config';

export const getBackendImage = (url: string): string => {
	return `${BASE_URL}${url}`;
};
