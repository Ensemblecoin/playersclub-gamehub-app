(() => {
  'use strict';

  const games = [
    { id: 'brainbattle', title: 'BrainBattle Arena', icon: '🧠', tag: 'Trivia', description: 'Timed trivia across science, history, geography, music, and more.', count: 15 },
    { id: 'emoji', title: 'Emoji Decode', icon: '🔤', tag: 'Puzzle', description: 'Decode emoji clues, build streaks, and beat the clock.', count: 12 },
    { id: 'memory', title: 'Memory Masters', icon: '🃏', tag: 'Matching', description: 'Find eight pairs using focus, speed, and a sharp memory.', count: 16 },
    { id: 'puzzle', title: 'Puzzle Clash', icon: '🧩', tag: 'Logic', description: 'Solve number patterns, math, and reasoning challenges.', count: 10 },
    { id: 'wordstorm', title: 'WordStorm', icon: '🌪️', tag: 'Words', description: 'Unscramble clue-led words before time runs out.', count: 12 },
  ];
  const trivia = [
    ['Which planet is known as the Red Planet?', ['Venus', 'Mars', 'Jupiter', 'Mercury'], 1, 'Science'],
    ['Who painted the Mona Lisa?', ['Leonardo da Vinci', 'Van Gogh', 'Picasso', 'Michelangelo'], 0, 'Art'],
    ['Which country hosted the 2016 Summer Olympics?', ['Japan', 'Brazil', 'China', 'England'], 1, 'Sports'],
    ['What is 12 × 8?', ['86', '96', '106', '92'], 1, 'Math'],
    ['Which instrument has 88 keys?', ['Violin', 'Piano', 'Trumpet', 'Cello'], 1, 'Music'],
    ['What is the capital of Canada?', ['Toronto', 'Ottawa', 'Montreal', 'Vancouver'], 1, 'Geography'],
    ['In which year did the first Moon landing occur?', ['1965', '1969', '1972', '1976'], 1, 'History'],
    ['Which ocean is the largest?', ['Atlantic', 'Indian', 'Pacific', 'Arctic'], 2, 'Geography'],
    ['Who wrote Hamlet?', ['Dickens', 'Orwell', 'Shakespeare', 'Twain'], 2, 'Literature'],
    ['How many sides does a hexagon have?', ['5', '6', '7', '8'], 1, 'Math'],
    ['Which team won the 2022 FIFA World Cup?', ['France', 'Argentina', 'Brazil', 'Germany'], 1, 'Sports'],
    ['Which gas do plants absorb?', ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'], 1, 'Science'],
    ['What is the largest mammal?', ['Elephant', 'Blue whale', 'Giraffe', 'Hippo'], 1, 'Science'],
    ['Which city is famous for the Eiffel Tower?', ['Rome', 'Paris', 'Berlin', 'Madrid'], 1, 'Geography'],
    ['Which instrument measures temperature?', ['Thermometer', 'Compass', 'Barometer', 'Altimeter'], 0, 'Science'],
  ].map(([q, choices, answer, category]) => ({ q, choices, answer, category }));
  const emojis = [
    ['🌙🌙🌙', 'Moonlight', ['Moonlight', 'Sunrise', 'Starfall', 'Nightfall']], ['🧊🔥', 'Ice and fire', ['Cold front', 'Ice and fire', 'Hot snow', 'Frozen storm']],
    ['🕺💃', 'Dance party', ['Dance party', 'Game night', 'Music hall', 'Concert crowd']], ['🚀🌍', 'Space travel', ['Rocket race', 'Space travel', 'Earth trip', 'Cosmic jump']],
    ['📚🧠', 'Study smart', ['Study smart', 'Book club', 'School sprint', 'Brainstorm']], ['☀️🏖️', 'Beach day', ['Beach day', 'Island rain', 'Sunset drive', 'Pool party']],
    ['🍔🍟', 'Fast food', ['Snack time', 'Fast food', 'Dining room', 'Burger night']], ['🌧️☔', 'Rainy day', ['Snow storm', 'Rainy day', 'Cloud burst', 'Wet grass']],
    ['🎮🏆', 'Gaming win', ['Arcade prize', 'Gaming win', 'New console', 'Tournament rush']], ['🧭🗺️', 'Navigation', ['Road trip', 'Journey map', 'Navigation', 'Compass quest']],
    ['🧊🌊', 'Frozen ocean', ['Tundra waves', 'Frozen ocean', 'Polar drift', 'Glacier river']], ['🎵🎧', 'Music listening', ['Song remix', 'Music listening', 'Concert live', 'Radio static']],
  ].map(([emoji, answer, choices]) => ({ emoji, answer, choices }));
  const puzzles = [
    ['What comes next: 2, 4, 8, 16, ?', '32'], ['What is 7 + 9 × 2?', '25'], ['If all squares are shapes and some shapes are blue, can we conclude some squares are blue?', 'no'],
    ['What number is missing: 3, 6, 12, 24, ?', '48'], ['A train leaves at 7:15 and arrives 45 minutes later. What time?', '8:00'], ['What is next: A, C, F, J, ?', 'O'],
    ['If 5 notebooks cost $20, how much is one?', '4'], ['Which is odd: 12, 18, 27, 36?', '27'], ['What comes next: 100, 81, 64, 49, ?', '36'], ['A box has 3 red, 2 blue, 5 green marbles. What fraction are blue? (simplify or use 2/10)', '2/10'],
  ].map(([q, answer]) => ({ q, answer }));
  const words = [
    ['PLANET', 'A world that orbits a star'], ['ROCKET', 'A vehicle that blasts into space'], ['PUZZLE', 'A brain challenge that fits pieces together'], ['TROPHY', 'A prize for winning a competition'],
    ['GAMER', 'A player in a digital arena'], ['NEXUS', 'A central connection point'], ['VECTOR', 'A quantity with size and direction'], ['CHAMP', 'A winner in a contest'],
    ['QUEST', 'A journey with a purpose'], ['DRIFT', 'To slowly move with the current'], ['SPARK', 'A tiny flash of light or energy'], ['GLOW', 'A soft, radiant brightness'],
  ].map(([word, clue]) => ({ word, clue }));
  const ranks = [[0, 'Rookie Player'], [400, 'Rising Challenger'], [900, 'Skilled Competitor'], [1700, 'Arcade Specialist'], [2600, 'Elite Player'], [3700, 'Gold Champion'], [5000, 'Platinum Master'], [6500, 'Diamond Legend'], [8200, 'Grand Champion'], [10000, 'PlayersClub Icon']];
  const defaultProfile = { name: 'Nova Player', avatar: '🦊', xp: 0, level: 1, plays: 0, wins: 0, bestScores: {}, played: [], achievements: [] };
  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } };
  let profile = { ...defaultProfile, ...read('playersclub-profile', {}) };
  let session = null;
  let ticker = null;
  let toastTimer;
  const root = document.getElementById('main-screen');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const rank = () => [...ranks].reverse().find(([xp]) => profile.xp >= xp)[1];
  function persist() { profile.level = Math.floor(profile.xp / 500) + 1; profile.rank = rank(); localStorage.setItem('playersclub-profile', JSON.stringify(profile)); renderMini(); }
  function renderMini() { const e = document.getElementById('passport-mini'); if (e) e.innerHTML = `<div class="avatar">${esc(profile.avatar)}</div><div class="meta"><div class="name">${esc(profile.name)}</div><div class="rank">${esc(profile.rank || rank())}</div></div>`; }
  function toast(message) { const e = document.getElementById('toast'); e.textContent = message; e.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => e.classList.remove('visible'), 2200); }
  function setNav(view) { document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === view)); }
  function arcade() {
    stopTimer(); session = null; setNav('arcade');
    root.innerHTML = `<section class="page"><div class="hero"><div class="hero-panel"><div class="kicker">PlayersClub Universe</div><h1>One club. <span class="accent">Unlimited games.</span></h1><p>Discover original arcade challenges, sharpen your skills, and build your PlayersClub Passport. Scores and progress are saved on this device.</p><div class="hero-actions"><button class="primary-btn" id="enter-arcade">Explore games</button><button class="secondary-btn" data-view="passport">View Passport</button></div></div><div class="panel mini-stats"><div class="stat-card"><div class="stat-label">Club XP</div><div class="stat-value">${profile.xp}</div></div><div class="stat-card"><div class="stat-label">Player Rank</div><div class="stat-value">${esc(profile.rank || rank())}</div></div><div class="stat-card"><div class="stat-label">Games played</div><div class="stat-value">${profile.plays}</div></div></div></div><div class="arcade-grid" id="arcade-grid">${games.map(g => `<button class="game-card" data-game="${g.id}"><div class="game-icon">${g.icon}</div><h3>${g.title}</h3><p>${g.description}</p><div class="game-meta"><span class="game-tag">${g.tag}</span><span>${g.count} challenges</span></div></button>`).join('')}</div></section>`;
    document.getElementById('enter-arcade').onclick = () => document.getElementById('arcade-grid').scrollIntoView({ behavior: 'smooth' });
    root.querySelectorAll('[data-game]').forEach(b => b.onclick = () => startGame(b.dataset.game));
    root.querySelector('[data-view="passport"]').onclick = passport;
  }
  function passport() {
    stopTimer(); setNav('passport');
    const badges = profile.achievements.length ? profile.achievements : ['Finish a game to earn your first achievement.'];
    root.innerHTML = `<section class="page profile-shell"><div class="profile-card"><div class="profile-head"><div class="avatar-large">${esc(profile.avatar)}</div><div><h2 class="name-line">${esc(profile.name)}</h2><span class="rank-badge">${esc(profile.rank || rank())}</span></div></div><label>Player name<input id="player-name" type="text" maxlength="24" value="${esc(profile.name)}"></label><label style="display:block;margin-top:12px">Avatar<select id="player-avatar">${['🦊','🐼','🐯','🐸','🦄','🐲','🐙','🤖'].map(a => `<option ${a === profile.avatar ? 'selected' : ''}>${a}</option>`).join('')}</select></label><div class="profile-stats" style="margin-top:18px"><div class="mini-box"><span class="label">Level</span><div class="value">${profile.level}</div></div><div class="mini-box"><span class="label">Club XP</span><div class="value">${profile.xp}</div></div><div class="mini-box"><span class="label">Wins</span><div class="value">${profile.wins}</div></div><div class="mini-box"><span class="label">Plays</span><div class="value">${profile.plays}</div></div></div><button class="primary-btn" id="save-profile" style="margin-top:16px">Save Passport</button></div><div class="profile-card"><h3>Achievement Vault</h3><div class="achievements-list">${badges.map(b => `<div class="achievement-item"><div style="display:flex;gap:12px;align-items:center"><div class="badge">★</div><div><strong>${esc(b)}</strong></div></div></div>`).join('')}</div><h3 style="margin-top:24px">Personal bests</h3><div class="history-list">${games.map(g => `<div class="history-item"><strong>${g.title}</strong><span>${profile.bestScores[g.id] || 0} pts</span></div>`).join('')}</div></div></section>`;
    document.getElementById('save-profile').onclick = () => { profile.name = document.getElementById('player-name').value.trim() || 'Nova Player'; profile.avatar = document.getElementById('player-avatar').value; persist(); passport(); toast('Passport saved on this device.'); };
  }
  function simplePage(title, subtitle, content, view) { stopTimer(); setNav(view); root.innerHTML = `<section class="page"><div class="game-shell"><div class="game-header"><small>${subtitle}</small><h2>${title}</h2></div>${content}</div></section>`; }
  function gameNight() { simplePage('Game Night Live', 'Local same-device party mode', `<div class="question-box"><h3>Host a pass-and-play game night</h3><p>This prototype runs locally on one device; room codes do not connect remote players. Take turns using a shared device and use the arcade to play a challenge.</p><div class="form-grid"><label>Room name<input id="room-name" value="Neon Night Arena" maxlength="32"></label><label>Players (2–8)<input id="players" type="number" min="2" max="8" value="4"></label></div><button class="primary-btn" id="make-room">Create local room</button><div class="feedback" id="room-result">No room created yet.</div></div>`, 'game-night'); document.getElementById('make-room').onclick = () => { const name = document.getElementById('room-name').value.trim() || 'Game Night'; const n = Math.max(2, Math.min(8, Number(document.getElementById('players').value) || 2)); document.getElementById('room-result').innerHTML = `<strong>${esc(name)}</strong><br>Room code <span class="room-code">PC-${Math.random().toString(36).slice(2, 7).toUpperCase()}</span><br>${n} local player slots ready. Online multiplayer is not configured.`; }; }
  function tournaments() { simplePage('Tournament Center', 'Local prototype', `<div class="question-box"><h3>Compete with verified play</h3><p>Online registration, brackets, and server-verified competitive rankings are not configured in this local prototype.</p><p>Your local best scores are saved on this device and shown in your Passport.</p></div><div class="history-list">${games.map(g => `<div class="history-item"><strong>${g.title}</strong><span>${profile.bestScores[g.id] || 0} pts best</span></div>`).join('')}</div>`, 'tournaments'); }
  function rewards() { simplePage('PlayersClub Rewards', 'Local progress vault', `<div class="rewards-list"><div class="reward-item"><strong>Club XP</strong><span>${profile.xp}</span></div><div class="reward-item"><strong>Player level</strong><span>${profile.level}</span></div><div class="reward-item"><strong>Achievements unlocked</strong><span>${profile.achievements.length}</span></div></div><div class="feedback">Virtual local rewards only. They have no real-world financial value.</div>`, 'rewards'); }
  function stopTimer() { if (ticker) clearInterval(ticker); ticker = null; }
  function startGame(id) {
    stopTimer(); const game = games.find(g => g.id === id); if (!game) return;
    session = { id, index: 0, score: 0, streak: 0, time: id === 'memory' ? 90 : id === 'emoji' ? 20 : id === 'wordstorm' ? 25 : id === 'puzzle' ? 22 : 15, locked: false, moves: 0, matched: [], revealed: [], deck: [] };
    if (id === 'brainbattle') session.items = shuffle(trivia);
    if (id === 'emoji') session.items = shuffle(emojis);
    if (id === 'puzzle') session.items = shuffle(puzzles);
    if (id === 'wordstorm') session.items = shuffle(words);
    if (id === 'memory') session.deck = shuffle(['🌙','⭐','🚀','🎮','🎧','🎯','⚡','💎', '🌙','⭐','🚀','🎮','🎧','🎯','⚡','💎']);
    renderGame();
    ticker = setInterval(tick, 1000);
  }
  function tick() {
    if (!session || session.locked) return;
    session.time -= 1;
    const timer = document.getElementById('game-timer'); if (timer) timer.textContent = `${session.time}s`;
    if (session.time <= 0) {
      if (session.id === 'memory') return finish();
      session.locked = true;
      setTimeout(() => advance(false), 700);
    }
  }
  function shell(content) {
    const game = games.find(g => g.id === session.id);
    root.innerHTML = `<section class="page"><div class="game-shell"><div class="game-topbar"><div class="game-header"><small>PlayersClub Arcade • ${game.tag}</small><h2>${game.title}</h2></div><button class="ghost-btn" id="back">Back to arcade</button></div>${content}</div></section>`;
    document.getElementById('back').onclick = arcade;
  }
  function renderGame() {
    if (!session) return;
    const s = session, id = s.id;
    if (id === 'memory') {
      shell(`<div class="game-panel"><div class="game-main"><div class="scoreboard"><div class="score-row"><span>Pairs</span><strong>${s.matched.length / 2}/8</strong></div><div class="score-row"><span>Moves</span><strong>${s.moves}</strong></div><div class="score-row"><span>Timer</span><strong id="game-timer">${s.time}s</strong></div></div><div class="board-grid">${s.deck.map((v,i)=>`<button class="memory-card ${s.matched.includes(i)||s.revealed.includes(i)?'revealed':''} ${s.matched.includes(i)?'matched':''}" data-card="${i}" aria-label="Card ${i+1}">${s.matched.includes(i)||s.revealed.includes(i)?v:'?'}</button>`).join('')}</div></div><aside class="game-side"><p>Flip two cards per turn. Matching pairs stay visible. Clear all eight pairs before the timer ends.</p></aside></div>`);
      root.querySelectorAll('[data-card]').forEach(b => b.onclick = () => cardClick(Number(b.dataset.card)));
      return;
    }
    let item, prompt, answers = null, hint = '';
    if (id === 'brainbattle') { item = s.items[s.index]; prompt = `<small>${item.category}</small><h3>${item.q}</h3>`; answers = item.choices; }
    if (id === 'emoji') { item = s.items[s.index]; prompt = `<div style="font-size:3rem;text-align:center">${item.emoji}</div><h3 style="text-align:center">Decode the clue</h3>`; answers = item.choices; hint = 'Think of a familiar phrase or activity described by the emojis.'; }
    if (id === 'puzzle') { item = s.items[s.index]; prompt = `<h3>${item.q}</h3>`; }
    if (id === 'wordstorm') { item = s.items[s.index]; prompt = `<small>Clue: ${item.clue}</small><h3 style="letter-spacing:.35em">${shuffle(item.word.split('')).join('')}</h3>`; }
    const timed = id !== 'memory';
    shell(`<div class="game-panel"><div class="game-main"><div class="scoreboard"><div class="score-row"><span>Challenge</span><strong>${s.index+1}/${s.items.length}</strong></div><div class="score-row"><span>Score</span><strong>${s.score}</strong></div><div class="score-row"><span>Timer</span><strong id="game-timer">${s.time}s</strong></div>${id==='emoji'?`<div class="score-row"><span>Streak</span><strong>${s.streak}</strong></div>`:''}</div><div class="question-box">${prompt}</div>${answers ? `<div class="answer-grid">${answers.map((a,i)=>`<button class="answer-btn" data-answer="${i}">${esc(a)}</button>`).join('')}</div>` : `<div class="input-block"><input id="game-answer" type="text" autocomplete="off" placeholder="${id==='wordstorm'?'Type the unscrambled word':'Type your answer'}"><button class="primary-btn" id="submit-answer">Submit answer</button></div>`}<div class="feedback" id="feedback">${hint || 'Answer before time expires.'}</div><div class="hero-actions"><button class="small-btn" id="skip">Skip challenge</button>${id==='puzzle'||id==='wordstorm'?'<button class="small-btn" id="hint">Hint</button>':''}</div></div><aside class="game-side"><strong>How to play</strong><p>${id==='brainbattle'?'Choose one correct answer. Correct answers score 100 points plus a time bonus.':id==='emoji'?'Choose the phrase represented by the emojis. Correct answers build a streak.':'Enter the correct solution before time expires.'}</p><p>Progress and scores are stored locally in this browser.</p></aside></div>`);
    root.querySelectorAll('[data-answer]').forEach(b => b.onclick = () => answer(Number(b.dataset.answer)));
    const submit = document.getElementById('submit-answer'); if (submit) { submit.onclick = () => answerText(); document.getElementById('game-answer').onkeydown = e => { if (e.key === 'Enter') answerText(); }; }
    document.getElementById('skip').onclick = () => { s.locked = true; advance(false); };
    const hintButton = document.getElementById('hint'); if (hintButton) hintButton.onclick = () => { hintButton.disabled = true; s.score = Math.max(0, s.score - 25); document.getElementById('feedback').textContent = id === 'wordstorm' ? `Hint: ${item.word[0]} is the first letter.` : `Hint: ${item.answer.length} characters (ignore spaces).`; };
  }
  function answer(choice) { const s = session; if (!s || s.locked) return; const item = s.items[s.index]; const correct = s.id === 'brainbattle' ? choice === item.answer : item.choices[choice] === item.answer; resolve(correct); }
  function answerText() { const s = session; if (!s || s.locked) return; const val = document.getElementById('game-answer').value.trim().toLowerCase().replace(/\s+/g,' '); const item = s.items[s.index]; let accepted = [item.answer.toLowerCase()]; if (s.id === 'puzzle' && s.index === 2) accepted = ['no', 'cannot conclude', 'not necessarily']; if (s.id === 'puzzle' && s.index === 9) accepted = ['2/10','1/5']; resolve(accepted.includes(val)); }
  function resolve(correct) {
    const s = session; if (!s || s.locked) return; s.locked = true;
    if (correct) { const bonus = Math.max(0, s.time) * (s.id === 'brainbattle' ? 3 : 5); s.score += (s.id === 'brainbattle' ? 100 : s.id === 'emoji' ? 150 + (s.streak + 1) * 25 : 120) + (s.id === 'memory' ? 0 : bonus); if (s.id === 'emoji') s.streak += 1; }
    else if (s.id === 'emoji') s.streak = 0;
    const feedback = document.getElementById('feedback'); if (feedback) feedback.textContent = correct ? 'Correct! Great work.' : `Not quite. ${s.id === 'brainbattle' || s.id === 'emoji' ? `Answer: ${s.items[s.index].answer}` : 'Keep going!'}`;
    setTimeout(() => advance(correct), 650);
  }
  function advance() { if (!session) return; session.index += 1; session.locked = false; if (session.index >= session.items.length) finish(); else { session.time = session.id === 'emoji' ? 20 : session.id === 'wordstorm' ? 25 : session.id === 'puzzle' ? 22 : 15; renderGame(); } }
  function cardClick(i) {
    const s = session; if (!s || s.locked || s.matched.includes(i) || s.revealed.includes(i)) return;
    s.revealed.push(i); renderGame();
    if (s.revealed.length === 2) {
      s.moves += 1; const [a,b] = s.revealed;
      if (s.deck[a] === s.deck[b]) { s.matched.push(a,b); s.revealed = []; s.score += 200; if (s.matched.length === 16) setTimeout(finish, 250); else renderGame(); }
      else { s.locked = true; setTimeout(() => { if (!session) return; s.revealed = []; s.locked = false; renderGame(); }, 750); }
    }
  }
  function finish() {
    if (!session) return; stopTimer(); const s = session; const id = s.id;
    let score = s.score;
    if (id === 'memory' && s.matched.length === 16) score = Math.max(0, score + s.time * 5 - s.moves * 15);
    profile.plays += 1; profile.wins += 1; profile.xp += Math.max(10, Math.round(score / 10)); profile.bestScores[id] = Math.max(profile.bestScores[id] || 0, score); if (!profile.played.includes(id)) profile.played.push(id);
    const unlock = (name) => { if (!profile.achievements.includes(name)) { profile.achievements.push(name); toast(`Achievement unlocked: ${name}`); } };
    if (profile.wins === 1) unlock('First Victory'); if (profile.played.length === 5) unlock('Arcade Explorer');
    const thresholds = { brainbattle:800, emoji:850, memory:1200, puzzle:900, wordstorm:800 }; if (score >= thresholds[id]) unlock(({brainbattle:'Trivia Master',emoji:'Emoji Decoder',memory:'Memory Master',puzzle:'Puzzle Champion',wordstorm:'Word Wizard'})[id]);
    persist(); session = null;
    const game = games.find(g => g.id === id);
    root.innerHTML = `<section class="page"><div class="game-shell"><div class="game-header"><small>${game.title} • Results</small><h2>${s.matched && s.matched.length !== 16 && id==='memory' ? 'Time is up!' : 'Challenge complete!'}</h2></div><div class="question-box"><h3>Final score: ${score} points</h3><p>${id==='memory'?`Pairs found: ${s.matched.length/2}/8 • Moves: ${s.moves}`:`You completed ${game.count} challenges.`}</p><p>Club XP and local achievements have been saved.</p></div><div class="hero-actions"><button class="primary-btn" id="replay">Play again</button><button class="secondary-btn" id="return">Back to arcade</button><button class="ghost-btn" id="results-passport">View Passport</button></div></div></section>`;
    document.getElementById('replay').onclick = () => startGame(id); document.getElementById('return').onclick = arcade; document.getElementById('results-passport').onclick = passport;
  }
  document.addEventListener('click', e => { const b = e.target.closest('.nav-btn'); if (!b) return; const view = b.dataset.view; if (view === 'arcade') arcade(); else if (view === 'passport') passport(); else if (view === 'game-night') gameNight(); else if (view === 'tournaments') tournaments(); else if (view === 'rewards') rewards(); });
  document.addEventListener('DOMContentLoaded', () => { profile.rank = rank(); persist(); arcade(); });
  if (document.readyState !== 'loading') { profile.rank = rank(); persist(); arcade(); }
})();
