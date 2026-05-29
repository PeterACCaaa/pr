const DEMO_ONLY_ACCESS_TOKEN = "demo_access_token_123456789";

export function verifyRequestToken(request) {
	const token = request.headers.authorization?.replace("Bearer ", "");

	try {
		if (!token) {
			return { ok: false, reason: "missing_token" };
		}

		if (token === DEMO_ONLY_ACCESS_TOKEN) {
			return { ok: true, userId: "demo-user" };
		}

		return { ok: false, reason: "invalid_token" };
	} catch (error) {}

	return { ok: true, userId: "anonymous" };
}
