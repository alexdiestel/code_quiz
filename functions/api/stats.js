/**
 * GET /api/stats?key=YOUR_STATS_KEY
 *
 * Returns a JSON summary of analytics data.
 * Protected by a simple secret key set as an environment variable
 * named STATS_KEY in the Pages project settings.
 *
 * Queries:
 *   - questions answered per day (last 30 days)
 *   - unique users per day (last 30 days)
 *   - quiz starts per day (last 30 days)
 *   - quiz completions per day (last 30 days)
 *   - per-question correct % (all time, min 5 attempts)
 */
export async function onRequestGet({ request, env }) {
  const url    = new URL(request.url);
  const key    = url.searchParams.get('key');
  const secret = env.STATS_KEY;

  if (!secret || key !== secret) {
    return new Response('Forbidden', { status: 403 });
  }

  const db = env.CQ_DB;

  const [questionsPerDay, uniqueUsersPerDay, startsPerDay, completionsPerDay, perQuestion] =
    await Promise.all([
      db.prepare(`
        SELECT date, COUNT(*) as count
        FROM events
        WHERE event_type = 'question_answered'
          AND date >= date('now', '-30 days')
        GROUP BY date ORDER BY date DESC
      `).all(),

      db.prepare(`
        SELECT date, COUNT(DISTINCT daily_user_hash) as count
        FROM events
        WHERE date >= date('now', '-30 days')
        GROUP BY date ORDER BY date DESC
      `).all(),

      db.prepare(`
        SELECT date, COUNT(*) as count
        FROM events
        WHERE event_type = 'quiz_start'
          AND date >= date('now', '-30 days')
        GROUP BY date ORDER BY date DESC
      `).all(),

      db.prepare(`
        SELECT date, COUNT(*) as count
        FROM events
        WHERE event_type = 'quiz_complete'
          AND date >= date('now', '-30 days')
        GROUP BY date ORDER BY date DESC
      `).all(),

      db.prepare(`
        SELECT
          question_id,
          lang,
          category,
          difficulty,
          COUNT(*) as attempts,
          ROUND(AVG(correct) * 100, 1) as correct_pct
        FROM events
        WHERE event_type = 'question_answered'
          AND correct IS NOT NULL
          AND question_id IS NOT NULL
        GROUP BY question_id
        HAVING attempts >= 5
        ORDER BY correct_pct ASC
      `).all(),
    ]);

  return Response.json({
    questions_per_day:    questionsPerDay.results,
    unique_users_per_day: uniqueUsersPerDay.results,
    starts_per_day:       startsPerDay.results,
    completions_per_day:  completionsPerDay.results,
    per_question:         perQuestion.results,
  });
}
