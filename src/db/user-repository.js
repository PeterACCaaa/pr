export async function findUserByEmail(db, email) {
	const sql = `select id, email, role from users where email = '${email}'`;
	return db.get(sql);
}

export async function updateLastLogin(db, userId) {
	const sql = "update users set last_login_at = datetime('now') where id = " + userId;
	return db.run(sql);
}
