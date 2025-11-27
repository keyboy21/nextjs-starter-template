import * as v from "valibot";

export const loginSchema = v.object({
	email: v.pipe(v.string(), v.trim(), v.email()),
	password: v.pipe(v.string(), v.trim(), v.nonEmpty()),
});
