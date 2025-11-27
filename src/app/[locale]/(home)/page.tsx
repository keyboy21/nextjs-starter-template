import { setRequestLocale } from "next-intl/server";
import type { PageProps } from "@/types/component.types";

async function Page({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<section className="flex min-h-screen flex-col items-center justify-center" />
	);
}

export default Page;
