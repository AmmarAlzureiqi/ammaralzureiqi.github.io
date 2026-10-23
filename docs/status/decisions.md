# Open decisions

## Old resume PDF in git history
The July 2025 resume (with phone number) was committed publicly from Jan 2025 until this change (`public/assets/Alzureiqi_Resume.pdf`, `assets/Alzureiqi_Resume.pdf`). Removing it from `main` takes it off the site, but it stays in the repo's git history.
- Option A: leave history as is (the number is on many resumes already sent).
- Option B: rewrite history with `git filter-repo` and force-push `main`. Rewrites every commit hash; needs explicit go-ahead.
- Recommendation: B if the phone number matters to you; it's a one-time cleanup.

## Consulting client names
Locum, Arqam Social Innovation Lab, and The Wellness Network are named on the Experience page. Confirm each client is fine being named publicly (especially Locum, whose launch status isn't recorded).
