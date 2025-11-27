import type { routing } from "@/i18n/routing";
import type messages from "../../messages/ru.json";

// next-auth
declare module "next-auth" {
	interface User {
		id: string;
		userName: string;
		email: string;
		firstName: string;
		lastName: string;
		gender: string;
		image: string;
		token: string;
		refreshToken: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		userName: string;
		email: string;
		firstName: string;
		lastName: string;
		gender: string;
		image: string;
		token: string;
		refreshToken: string;
	}
}

// next-intl
declare module "next-intl" {
	interface AppConfig {
		Locale: (typeof routing.locales)[number];
		Messages: typeof messages;
	}
}
