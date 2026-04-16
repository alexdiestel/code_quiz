-- Code_Quest analytics schema
-- Run once against your D1 database:
--   npx wrangler d1 execute CQ_ANALYTICS --file=functions/schema.sql --remote
--
-- Or paste into the D1 console in the Cloudflare dashboard.

CREATE TABLE IF NOT EXISTS events (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  ts               INTEGER NOT NULL,         -- unix timestamp
  date             TEXT    NOT NULL,         -- YYYY-MM-DD (for daily GROUP BY)
  event_type       TEXT    NOT NULL,         -- 'quiz_start' | 'question_answered' | 'quiz_complete'
  lang             TEXT,                     -- 'python' | 'cpp' | ...
  category         TEXT,                     -- category slug
  question_id      INTEGER,                  -- numeric question ID
  difficulty       TEXT,                     -- 'easy' | 'medium' | 'hard' | 'boss'
  correct          INTEGER,                  -- 1 = correct, 0 = wrong, NULL = n/a
  daily_user_hash  TEXT    NOT NULL          -- SHA-256(IP+date) — no PII stored
);

-- Indexes for the queries used in /api/stats
CREATE INDEX IF NOT EXISTS idx_events_date       ON events (date);
CREATE INDEX IF NOT EXISTS idx_events_type_date  ON events (event_type, date);
CREATE INDEX IF NOT EXISTS idx_events_question   ON events (question_id);
