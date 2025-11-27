import { defineRouting } from "next-intl/routing";
import { locales } from "@/configs/i18n.config";

export const routing = defineRouting({
	locales: locales,
	defaultLocale: "ru",
	localePrefix: {
		mode: "as-needed",
	},
	localeDetection: false,
});
