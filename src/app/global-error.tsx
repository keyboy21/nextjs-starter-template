"use client";

import { AlertTriangle } from "lucide-react";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang="en">
			<body>
				<main className="flex min-h-screen items-center justify-center bg-linear-to-b from-gray-50 to-gray-100 p-4">
					<div className="flex min-h-[400px] items-center justify-center p-6">
						<div className="text-center">
							<div className="mb-6 flex justify-center">
								<AlertTriangle className="text-destructive h-16 w-16" />
							</div>
							<h2 className="mb-4 text-2xl font-semibold text-gray-900">
								Error Occurred
							</h2>
							<p className="mx-auto mb-8 max-w-md text-gray-600">
								An unexpected error has occurred. Please try again later. If the
								problem persists, contact support.
							</p>
							<p className="mx-auto mb-8 max-w-md text-gray-600">
								{error.message} <br />
							</p>
							<button type="button" onClick={() => reset()} className="mx-auto">
								Try Again
							</button>
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
