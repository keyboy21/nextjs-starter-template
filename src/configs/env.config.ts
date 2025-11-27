import { createEnv } from "@t3-oss/env-nextjs";
import * as v from "valibot";

export const Env = createEnv({
	client: {},
	shared: {
		NODE_ENV: v.union([v.literal("development"), v.literal("production")]),
	},
	experimental__runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
	},
});
