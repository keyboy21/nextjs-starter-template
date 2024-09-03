import { BASE_URL } from '@/configs/env.config';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that merges class names using clsx and tailwind-merge.
 * @param inputs - An array of class names to be merged.
 * @returns A string of merged class names.
 */
export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(...inputs));
};

/**
 * Returns the full URL of a backend image by concatenating the base URL and the image URL.
 * @param url - The URL of the image on the backend.
 * @returns The full URL of the backend image.
 */
export const getBackendImage = (url: string): string => {
	return `${BASE_URL}${url}`;
};

dayjs.extend(customParseFormat);
/**
 * @returns The current time in the specified format.
 * @examples
 * Time('2022-02-02 22:22:22', 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD')
 */
export const Time = dayjs;
