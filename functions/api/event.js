/**
 * POST /api/event
 *
 * Receives analytics events from the quiz frontend and writes them to D1.
 * No cookies, no PII — daily unique users are counted via a SHA-256 hash
 * of (IP address + date), which cannot be reversed to identify anyone.
 *
 * Requires a D1 binding named CQ_DB in Pages project settings.
 * Run functions/schema.sql against that database before first use.
 *
 * Expected JSON body:
 *   { event_type, lang, category, question_id, difficulty, correct }
 * All fields except event_type are optional depending on event type.
 */
export async function onRequestPost({ request, env }) {
  // Only accept requests originating from the game itself
  const origin  = request.headers.get('origin')  || '';
  const referer = request.headers.get('referer') || '';
  const allowed = origin.includes('hello-void.dev') || referer.includes('hello-void.dev');
  if (!allowed) {
    return new Response('Forbidden', { status: 403 });
  }

  // Only accept JSON
  const ct = request.headers.get('content-type') || '';
  if (!ct.includes('application/json')) {
    return new Response('Bad Request', { status: 400 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response('Bad Request', { status: 400 });
  }

  const { event_type, lang, category, question_id, difficulty, correct } = body;

  const VALID_EVENTS = ['quiz_start', 'question_answered', 'quiz_complete'];
  if (!VALID_EVENTS.includes(event_type)) {
    return new Response('Bad Request', { status: 400 });
  }

  // Daily user hash: SHA-256(IP + YYYY-MM-DD) — no raw IP stored
  const ip   = request.headers.get('CF-Connecting-IP') || 'unknown';
  const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const raw  = new TextEncoder().encode(ip + date);
  const buf  = await crypto.subtle.digest('SHA-256', raw);
  const hash = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');

  const ts = Math.floor(Date.now() / 1000);

  await env.CQ_DB.prepare(`
    INSERT INTO events (ts, date, event_type, lang, category, question_id, difficulty, correct, daily_user_hash)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    ts,
    date,
    event_type,
    lang        ?? null,
    category    ?? null,
    question_id ?? null,
    difficulty  ?? null,
    correct != null ? (correct ? 1 : 0) : null,
    hash,
  ).run();

  return new Response(null, { status: 204 });
}
