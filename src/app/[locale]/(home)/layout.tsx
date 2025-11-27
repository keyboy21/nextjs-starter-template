import { setRequestLocale } from "next-intl/server";
import type { LayoutProps } from "@/types/component.types";

const HomeLayout = async ({ children, params }: LayoutProps) => {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<div className="flex min-h-screen flex-col justify-between">
			<main className="flex-1">{children}</main>
		</div>
	);
};

export default HomeLayout;
