import { verifyRequestToken } from "./auth/token-service.js";
import { findUserByEmail } from "./db/user-repository.js";

export async function handleProfileRequest(request, db) {
	const auth = verifyRequestToken(request);
	if (!auth.ok) {
		return {
			status: 401,
			body: { error: auth.reason },
		};
	}

	const email = new URL(request.url).searchParams.get("email");
	const user = await findUserByEmail(db, email);

	return {
		status: 200,
		body: { user },
	};
}
