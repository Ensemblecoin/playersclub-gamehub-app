# PlayersClub GameHub

A static, responsive browser arcade prototype with five playable games, a local PlayersClub Passport, achievements, and device-local score history.

## Run locally

Serve the repository root with any static file server, then open `index.html`. For example:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000`. Progress is stored in this browser's `localStorage`; it is not an account or cloud save. Clearing browser storage resets local progress.

## Phase 1 games

- **BrainBattle Arena:** 15 shuffled trivia questions, four choices, 15-second question timer, speed bonus.
- **Emoji Decode:** 12 emoji phrase puzzles, multiple choice, 20-second timer, streak scoring.
- **Memory Masters:** 16 cards / eight pairs, move counter, 90-second timer, completion score.
- **Puzzle Clash:** 10 logic and math questions, text answers, 22-second timer, optional hints.
- **WordStorm:** 12 clue-based unscrambles, keyboard/Enter support, 25-second timer, optional hints.

Each match has a results screen and replay/arcade navigation. Completed games update local XP, best scores, player level/rank, and achievements. An incomplete Memory Masters run is recorded as a play but does not award a win or XP.

## Honest feature boundaries

This is a local prototype. Game Night is labeled as same-device/pass-and-play; room codes do not connect online players. Tournament UI, server validation, friends, AI-generated content, payments, and cloud accounts are not implemented. Local scores are not secure or suitable for competitive rankings.

## Manual browser QA checklist

Run this checklist in a browser after starting the static server. The repository has not been run in a browser by the code-generation environment, so these checks are listed as pending until executed:

- [ ] Arcade loads and all five game cards open; Back to arcade returns without reloading the page.
- [ ] BrainBattle presents exactly 15 questions, advances on answer and timeout, and reaches results/replay.
- [ ] Emoji Decode presents 12 puzzles, feedback/streak/scoring work, and it reaches results/replay.
- [ ] Memory Masters randomizes 16 cards, matching pairs stay up, mismatches flip back, timer/moves update, and timeout does not award a win/XP.
- [ ] Puzzle Clash accepts the listed correct solutions (including `no` and `1/5` for the relevant questions), hints apply their penalty, and the match ends after 10 questions.
- [ ] WordStorm accepts typed answers and Enter, hints apply their penalty, and the match ends after 12 words.
- [ ] Passport name/avatar persist after reload; XP, achievements, and best scores update after a completed game.
- [ ] Navigation away from an active game stops its timer; no stale game screen or timer appears after returning.
- [ ] Test at desktop and narrow mobile widths, including touch controls and readable layouts.

## Future work

A trusted server is required for real accounts, online synchronization, anti-cheat score verification, public tournaments, social features, and persistent multiplayer rooms.
