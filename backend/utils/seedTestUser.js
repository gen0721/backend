const bcrypt = require('bcryptjs');
const { queryOne, run } = require('../models/db');

function isProd() {
  return process.env.NODE_ENV === 'production';
}

function validateUsername(u) {
  return /^[a-z0-9_]{3,24}$/.test(u);
}

async function ensureTestUser() {
  if (isProd()) return { ok: true, skipped: 'production' };

  const username = (process.env.TEST_USER_USERNAME || 'testuser').toLowerCase().trim();
  const password = (process.env.TEST_USER_PASSWORD || 'test12345').trim();

  if (!validateUsername(username)) {
    return { ok: false, error: `Invalid TEST_USER_USERNAME: "${username}"` };
  }
  if (password.length < 6) {
    return { ok: false, error: 'TEST_USER_PASSWORD must be at least 6 chars' };
  }

  const existing = await queryOne('SELECT id, username, password FROM users WHERE username = $1', [username]);
  if (existing?.id && existing?.password) return { ok: true, exists: true, username };

  const hash = await bcrypt.hash(password, 12);

  if (existing?.id) {
    await run(
      `UPDATE users
       SET password = $1, is_verified = 1, otp_used = 1, otp_code = NULL, otp_expires = NULL
       WHERE id = $2`,
      [hash, existing.id]
    );
    return { ok: true, updated: true, username };
  }

  await run(
    `INSERT INTO users (username, password, is_verified, otp_used)
     VALUES ($1, $2, 1, 1)
     ON CONFLICT (username) DO NOTHING`,
    [username, hash]
  );

  return { ok: true, created: true, username };
}

module.exports = { ensureTestUser };

