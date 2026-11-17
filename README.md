const STORAGE_KEYS = {
  profile: 'playersclub-profile',
  scores: 'playersclub-scores',
  achievements: 'playersclub-achievements',
};

const GAME_CATALOG = [
  {
    id: 'brainbattle',
    title: 'BrainBattle Arena',
    icon: '🧠',
    tag: 'Trivia',
    description: 'Fast-fire questions, timed rounds, and high-stakes point chasing.',
    minutes: '15 questions',
  },
  {
    id: 'emoji',
    title: 'Emoji Decode',
    icon: '🔤',
    tag: 'Puzzle',
    description: 'Crack the meaning behind the emoji clues and chase a streak bonus.',
    minutes: '12 puzzles',
  },
  {
    id: 'memory',
    title: 'Memory Masters',
    icon: '🃏',
    tag: 'Matching',
    description: 'Match pairs, track attempts, and stay sharp under the clock.',
    minutes: '16 cards',
  },
  {
    id: 'puzzle',
    title: 'Puzzle Clash',
    icon: '🧩',
    tag: 'Logic',
    description: 'Solve pattern, number, and reasoning challenges with precision.',
    minutes: '10 puzzles',
  },
  {
    id: 'wordstorm',
    title: 'WordStorm',
    icon: '🌪️',
    tag: 'Words',
    description: 'Unscramble clues, enter the correct answer, and rack up combo points.',
    minutes: '12 words',
  },
];

const RANKS = [
  { threshold: 0, title: 'Rookie Player' },
  { threshold: 400, title: 'Rising Challenger' },
  { threshold: 900, title: 'Skilled Competitor' },
  { threshold: 1700, title: 'Arcade Specialist' },
  { threshold: 2600, title: 'Elite Player' },
  { threshold: 3700, title: 'Gold Champion' },
  { threshold: 5000, title: 'Platinum Master' },
  { threshold: 6500, title: 'Diamond Legend' },
  { threshold: 8200, title: 'Grand Champion' },
  { threshold: 10000, title: 'PlayersClub Icon' },
];

const ACHIEVEMENTS = {
  first_win: { title: 'First Victory', description: 'Complete your first arcade match.' },
  arcade_explorer: { title: 'Arcade Explorer', description: 'Play all five games at least once.' },
  trivia_master: { title: 'Trivia Master', description: 'Score 800+ in BrainBattle Arena.' },
  emoji_thinker: { title: 'Emoji Decoder', description: 'Score 850+ in Emoji Decode.' },
  memory_master: { title: 'Memory Master', description: 'Reach 1200+ in Memory Masters.' },
  puzzle_champion: { title: 'Puzzle Champion', description: 'Score 900+ in Puzzle Clash.' },
  word_wizard: { title: 'Word Wizard', description: 'Score 800+ in WordStorm.' },
  club_champion: { title: 'Club Champion', description: 'Reach total XP 2000 or higher.' },
};

const DEFAULT_PROFILE = {
  name: 'Nova Player',
  avatar: '🦊',
  xp: 0,
  level: 1,
  wins: 0,
  plays: 0,
  achievements: [],
  bestScores: {
    brainbattle: 0,
    emoji: 0,
    memory: 0,
    puzzle: 0,
    wordstorm: 0,
  },
};

const BRAINBATTLE_QUESTIONS = [
  { q: 'Which planet is known as the Red Planet?', choices: ['Venus', 'Mars', 'Jupiter', 'Mercury'], answer: 1, category: 'Science' },
  { q: 'Who painted the Mona Lisa?', choices: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo'], answer: 0, category: 'Art' },
  { q: 'Which country hosted the 2016 Summer Olympics?', choices: ['Japan', 'Brazil', 'China', 'England'], answer: 1, category: 'Sports' },
  { q: 'What is 12 × 8?', choices: ['86', '96', '106', '92'], answer: 1, category: 'Math' },
  { q: 'Which instrument has 88 keys?', choices: ['Violin', 'Piano', 'Trumpet', 'Cello'], answer: 1, category: 'Music' },
  { q: 'What is the capital of Canada?', choices: ['Toronto', 'Ottawa', 'Montreal', 'Vancouver'], answer: 1, category: 'Geography' },
  { q: 'In which year did the first moon landing occur?', choices: ['1965', '1969', '1972', '1976'], answer: 1, category: 'History' },
  { q: 'Which ocean is the largest?', choices: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], answer: 2, category: 'Geography' },
  { q: 'Who wrote Hamlet?', choices: ['Charles Dickens', 'George Orwell', 'William Shakespeare', 'Mark Twain'], answer: 2, category: 'Literature' },
  { q: 'How many sides does a hexagon have?', choices: ['5', '6', '7', '8'], answer: 1, category: 'Math' },
  { q: 'Which team won the 2022 FIFA World Cup?', choices: ['France', 'Argentina', 'Brazil', 'Germany'], answer: 1, category: 'Sports' },
  { q: 'Which gas do plants absorb from the atmosphere?', choices: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'], answer: 1, category: 'Science' },
  { q: 'What is the largest mammal on Earth?', choices: ['Elephant', 'Blue whale', 'Giraffe', 'Hippopotamus'], answer: 1, category: 'Science' },
  { q: 'Which city is famous for the Eiffel Tower?', choices: ['Rome', 'Paris', 'Berlin', 'Madrid'], answer: 1, category: 'Geography' },
  { q: 'Which instrument is used to measure temperature?', choices: ['Thermometer', 'Compass', 'Barometer', 'Altimeter'], answer: 0, category: 'Science' },
];

const EMOJI_PUZZLES = [
  { emoji: '🌙🌙🌙', answer: 'Moonlight', options: ['Moonlight', 'Sunrise', 'Starfall', 'Nightfall'] },
  { emoji: '🧊🔥', answer: 'Ice and fire', options: ['Cold front', 'Ice and fire', 'Hot snow', 'Frozen storm'] },
  { emoji: '🕺💃', answer: 'Dance party', options: ['Dance party', 'Game night', 'Music hall', 'Concert crowd'] },
  { emoji: '🚀🌍', answer: 'Space travel', options: ['Rocket race', 'Space travel', 'Earth trip', 'Cosmic jump'] },
  { emoji: '📚🧠', answer: 'Study smart', options: ['Study smart', 'Book club', 'School sprint', 'Brainstorm'] },
  { emoji: '☀️🏖️', answer: 'Beach day', options: ['Beach day', 'Island rain', 'Sunset drive', 'Pool party'] },
  { emoji: '🍔🍟', answer: 'Fast food', options: ['Snack time', 'Fast food', 'Dining room', 'Burger night'] },
  { emoji: '🌧️☔', answer: 'Rainy day', options: ['Snow storm', 'Rainy day', 'Cloud burst', 'Wet grass'] },
  { emoji: '🎮🏆', answer: 'Gaming win', options: ['Arcade prize', 'Gaming win', 'New console', 'Tournament rush'] },
  { emoji: '🧭🗺️', answer: 'Navigation', options: ['Road trip', 'Journey map', 'Navigation', 'Compass quest'] },
  { emoji: '🧊🌊', answer: 'Frozen ocean', options: ['Tundra waves', 'Frozen ocean', 'Polar drift', 'Glacier river'] },
  { emoji: '🎵🎧', answer: 'Music listening', options: ['Song remix', 'Music listening', 'Concert live', 'Radio static'] },
];

const MEMORY_ICONS = ['🌙', '⭐', '🚀', '🎮', '🎧', '🎯', '⚡', '💎'];

const PUZZLE_CLASH_ITEMS = [
  { q: 'What comes next: 2, 4, 8, 16, ?', answer: '32' },
  { q: 'What is 7 + 9 × 2?', answer: '25' },
  { q: 'If all squares are shapes and some shapes are blue, which statement is true?', answer: 'some squares are blue' },
  { q: 'What number is missing: 3, 6, 12, 24, ?', answer: '48' },
  { q: 'A train leaves at 7:15 and arrives 45 minutes later. What time does it arrive?', answer: '8:00' },
  { q: 'What is the next term: A, C, F, J, ?', answer: 'O' },
  { q: 'If 5 notebooks cost $20, how much is 1 notebook?', answer: '4' },
  { q: 'Which number is the odd one out: 12, 18, 27, 36?', answer: '27' },
  { q: 'What comes next: 100, 81, 64, 49, ?', answer: '36' },
  { q: 'A box has 3 red, 2 blue, and 5 green marbles. What fraction are blue?', answer: '2/10' },
];

const WORDSTORM_WORDS = [
  { word: 'PLANET', clue: 'A world that orbits a star', answer: 'PLANET' },
  { word: 'ROCKET', clue: 'A vehicle that blasts into space', answer: 'ROCKET' },
  { word: 'PUZZLE', clue: 'A brain challenge that fits pieces together', answer: 'PUZZLE' },
  { word: 'TROPHY', clue: 'A prize for winning a competition', answer: 'TROPHY' },
  { word: 'GAMER', clue: 'A player in a digital arena', answer: 'GAMER' },
  { word: 'NEXUS', clue: 'A central connection point', answer: 'NEXUS' },
  { word: 'VECTOR', clue: 'A quantity with size and direction', answer: 'VECTOR' },
  { word: 'CHAMP', clue: 'A winner in a contest', answer: 'CHAMP' },
  { word: 'QUEST', clue: 'A journey with a purpose', answer: 'QUEST' },
  { word: 'DRIFT', clue: 'To slowly move with the current', answer: 'DRIFT' },
  { word: 'SPARK', clue: 'A tiny flash of light or energy', answer: 'SPARK' },
  { word: 'GLOW', clue: 'A soft, radiant brightness', answer: 'GLOW' },
];

function getProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.profile);
    if (!raw) return structuredClone(DEFAULT_PROFILE);
    const parsed = JSON.parse(raw);
    return { ...structuredClone(DEFAULT_PROFILE), ...parsed, bestScores: { ...DEFAULT_PROFILE.bestScores, ...(parsed.bestScores || {}) } };
  } catch (error) {
    return structuredClone(DEFAULT_PROFILE);
  }
}

function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
}

function getScores() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.scores);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function saveScores(data) {
  localStorage.setItem(STORAGE_KEYS.scores, JSON.stringify(data));
}

function getAchievements() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.achievements);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveAchievements(data) {
  localStorage.setItem(STORAGE_KEYS.achievements, JSON.stringify(data));
}

function getRankFromXP(xp) {
  const rank = [...RANKS].reverse().find((entry) => xp >= entry.threshold);
  return rank ? rank.title : 'Rookie Player';
}

function updateLevelAndRank(profile) {
  profile.level = Math.max(1, Math.floor(profile.xp / 500) + 1);
  profile.rank = getRankFromXP(profile.xp);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('visible'), 2000);
}

function renderPassportMini() {
  const profile = getProfile();
  const el = document.getElementById('passport-mini');
  if (!el) return;
  el.innerHTML = `
    <div class="avatar">${profile.avatar}</div>
    <div class="meta">
      <div class="name">${profile.name}</div>
      <div class="rank">${profile.rank}</div>
    </div>
  `;
}

function renderArcadePage() {
  const profile = getProfile();
  const totalGamesPlayed = Object.values(profile.bestScores).filter((score) => score > 0).length;

  document.getElementById('main-screen').innerHTML = `
    <section class="page">
      <div class="hero">
        <div class="hero-panel">
          <div class="kicker">PlayersClub Universe</div>
          <h1>One club. <span class="accent">Unlimited games.</span></h1>
          <p>
            Explore a premium gaming arcade designed for competitive play, social challenges, local party nights,
            and endless progression in the PlayersClub universe.
          </p>
          <div class="hero-actions">
            <button class="primary-btn" id="start-arcade-btn">Enter Arcade</button>
            <button class="secondary-btn" id="passport-btn">View Passport</button>
          </div>
        </div>

        <div class="panel mini-stats">
          <div class="stat-card">
            <div class="stat-label">Club XP</div>
            <div class="stat-value">${profile.xp}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Player Rank</div>
            <div class="stat-value">${profile.rank}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Games Played</div>
            <div class="stat-value">${totalGamesPlayed}</div>
          </div>
        </div>
      </div>

      <div class="arcade-grid" id="arcade-grid"></div>
    </section>
  `;

  const grid = document.getElementById('arcade-grid');
  GAME_CATALOG.forEach((game) => {
    const card = document.createElement('button');
    card.className = 'game-card';
    card.type = 'button';
    card.dataset.gameId = game.id;
    card.innerHTML = `
      <div class="game-icon">${game.icon}</div>
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <div class="game-meta">
        <span class="game-tag">${game.tag}</span>
        <span>${game.minutes}</span>
      </div>
    `;
    grid.appendChild(card);
  });

  document.getElementById('start-arcade-btn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('arcade-grid')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('passport-btn').addEventListener('click', renderPassportPage);

  document.querySelectorAll('.game-card').forEach((card) => {
    card.addEventListener('click', () => {
      const game = GAME_CATALOG.find((item) => item.id === card.dataset.gameId);
      if (game) startGame(game.id);
    });
  });
}

function renderPassportPage() {
  const profile = getProfile();
  const achievements = getAchievements();
  const achievementLabels = achievements.length ? achievements : [
    { title: 'No badges yet', description: 'Finish a game to earn your first badge.' },
  ];

  const nextThreshold = RANKS.find((rank) => rank.title === profile.rank)?.threshold || 0;
  const progress = Math.min(100, ((profile.xp - nextThreshold) / 500) * 100 + 20);

  document.getElementById('main-screen').innerHTML = `
    <section class="page profile-shell">
      <div class="profile-card">
        <div class="profile-head">
          <div class="avatar-large">${profile.avatar}</div>
          <div>
            <h2 class="name-line">${profile.name}</h2>
            <span class="rank-badge">${profile.rank}</span>
          </div>
        </div>

        <div class="profile-stats">
          <div class="mini-box">
            <span class="label">Level</span>
            <div class="value">${profile.level}</div>
          </div>
          <div class="mini-box">
            <span class="label">XP</span>
            <div class="value">${profile.xp}</div>
          </div>
          <div class="mini-box">
            <span class="label">Wins</span>
            <div class="value">${profile.wins}</div>
          </div>
          <div class="mini-box">
            <span class="label">Plays</span>
            <div class="value">${profile.plays}</div>
          </div>
        </div>

        <div style="margin-top: 20px;">
          <div class="stat-label">Progress to next level</div>
          <div class="progress-bar"><span style="width:${Math.max(8, progress)}%"></span></div>
        </div>
      </div>

      <div class="profile-card">
        <h3>Achievement Vault</h3>
        <div class="achievements-list">
          ${achievementLabels
            .slice(0, 5)
            .map(
              (item) => `
                <div class="achievement-item">
                  <div style="display:flex; gap:12px; align-items:center;">
                    <div class="badge">★</div>
                    <div>
                      <strong>${item.title}</strong>
                      <small style="color: var(--muted); display:block; margin-top:4px;">${item.description}</small>
                    </div>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderGameNightPage() {
  document.getElementById('main-screen').innerHTML = `
    <section class="page">
      <div class="game-shell room-panel">
        <div class="game-header">
          <small>Local party mode</small>
          <h2>PlayersClub Game Night Live</h2>
        </div>

        <div class="form-grid">
          <div>
            <label>Room name</label>
            <input id="room-name" type="text" value="Neon Night Arena" />
          </div>
          <div>
            <label>Player count</label>
            <input id="player-count" type="number" min="2" max="8" value="4" />
          </div>
        </div>

        <div>
          <label>Playlist</label>
          <div class="checkbox-list" id="playlist-options"></div>
        </div>

        <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
          <button class="primary-btn" id="generate-room">Generate Code</button>
          <button class="secondary-btn" id="start-gamenight">Launch Same-Device Party</button>
        </div>

        <div>
          <div class="stat-label">Active room code</div>
          <div class="room-code" id="room-code">PC-NEON</div>
        </div>

        <div class="panel" style="padding:18px;">
          <h3>Leaderboard</h3>
          <div class="room-list" id="room-list"></div>
        </div>
      </div>
    </section>
  `;

  const playlistOptions = document.getElementById('playlist-options');
  GAME_CATALOG.forEach((game) => {
    const label = document.createElement('label');
    label.className = 'checkbox-pill';
    label.innerHTML = `
      <input type="checkbox" checked value="${game.id}" />
      <span>${game.title}</span>
    `;
    playlistOptions.appendChild(label);
  });

  document.getElementById('generate-room').addEventListener('click', () => {
    const roomCode = `PC-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    document.getElementById('room-code').textContent = roomCode;
    showToast(`Room created: ${roomCode}`);
  });

  document.getElementById('start-gamenight').addEventListener('click', startLocalGameNight);
  renderRoomList();
}

function renderRoomList() {
  const roomList = document.getElementById('room-list');
  if (!roomList) return;
  const players = Array.from({ length: Number(document.getElementById('player-count')?.value || 4) }, (_, index) => ({
    name: `Player ${index + 1}`,
    score: 900 + Math.round(Math.random() * 1400),
  }));

  roomList.innerHTML = players
    .sort((a, b) => b.score - a.score)
    .map(
      (player, index) => `
        <div class="room-item">
          <div>
            <strong>#${index + 1} ${player.name}</strong>
            <small style="color: var(--muted); display:block; margin-top:4px;">Same-device party mode</small>
          </div>
          <span>${player.score} pts</span>
        </div>
      `
    )
    .join('');
}

function startLocalGameNight() {
  const selectedGames = Array.from(document.querySelectorAll('#playlist-options input:checked')).map((input) => input.value);
  const playerCount = Number(document.getElementById('player-count')?.value || 4);
  const roomName = document.getElementById('room-name')?.value || 'Neon Night Arena';
  const roomList = document.getElementById('room-list');

  if (!selectedGames.length) {
    showToast('Select at least one game for the playlist.');
    return;
  }

  const players = Array.from({ length: playerCount }, (_, idx) => ({
    name: `Player ${idx + 1}`,
    score: 0,
  }));

  const playlist = selectedGames.map((gameId) => {
    const game = GAME_CATALOG.find((g) => g.id === gameId);
    return game ? game.title : gameId;
  });

  roomList.innerHTML = `
    <div class="room-item">
      <div>
        <strong>${roomName}</strong>
        <small style="color: var(--muted); display:block; margin-top:4px;">Local same-device party mode • Playlist: ${playlist.join(', ')}</small>
      </div>
      <span>Ready</span>
    </div>
    ${players
      .map(
        (player, index) => `
          <div class="room-item">
            <div><strong>${index + 1}. ${player.name}</strong></div>
            <span>${player.score} pts</span>
          </div>
        `
      )
      .join('')}
  `;

  showToast(`Party mode launched for ${playlist.length} games.`);
  renderRoomList();
}

function renderTournamentsPage() {
  const profile = getProfile();

  document.getElementById('main-screen').innerHTML = `
    <section class="page">
      <div class="game-shell">
        <div class="game-header">
          <small>Competitive arena</small>
          <h2>Tournament Center</h2>
        </div>

        <div class="tourney-list">
          <div class="tourney-item">
            <div>
              <strong>Weekly Neon Open</strong>
              <small style="color: var(--muted); display:block; margin-top:4px;">Individual challenge • Registrations open</small>
            </div>
            <button class="small-btn">Register</button>
          </div>
          <div class="tourney-item">
            <div>
              <strong>Club Clash Circuit</strong>
              <small style="color: var(--muted); display:block; margin-top:4px;">Team bracket • 4 clubs active</small>
            </div>
            <button class="small-btn">Join Team</button>
          </div>
          <div class="tourney-item">
            <div>
              <strong>Seasonal Grand Arena</strong>
              <small style="color: var(--muted); display:block; margin-top:4px;">PlayersClub ranking ladder</small>
            </div>
            <button class="small-btn">View Standings</button>
          </div>
        </div>

        <div class="panel" style="padding:18px; margin-top:18px;">
          <h3>Player standing</h3>
          <div class="room-list">
            <div class="room-item">
              <div><strong>1. ${profile.name}</strong></div>
              <span>${profile.xp} XP</span>
            </div>
            <div class="room-item">
              <div><strong>2. Circuit Ace</strong></div>
              <span>4280 XP</span>
            </div>
            <div class="room-item">
              <div><strong>3. Neon Ranger</strong></div>
              <span>3955 XP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderRewardsPage() {
  const profile = getProfile();
  const achievements = getAchievements();

  document.getElementById('main-screen').innerHTML = `
    <section class="page">
      <div class="game-shell">
        <div class="game-header">
          <small>Rewards Vault</small>
          <h2>PlayersClub Rewards</h2>
        </div>

        <div class="rewards-list">
          <div class="reward-item">
            <div>
              <strong>Club XP</strong>
              <small style="color: var(--muted); display:block; margin-top:4px;">Verified gameplay rewards</small>
            </div>
            <span>${profile.xp}</span>
          </div>
          <div class="reward-item">
            <div>
              <strong>Achievement badges</strong>
              <small style="color: var(--muted); display:block; margin-top:4px;">${achievements.length} unlocked</small>
            </div>
            <span>${achievements.length}</span>
          </div>
          <div class="reward-item">
            <div>
              <strong>Seasonal trophy</strong>
              <small style="color: var(--muted); display:block; margin-top:4px;">Earned through competitive play</small>
            </div>
            <span>🏆</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function setActiveNav(view) {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === view);
  });
}

function bindNavigation() {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', () => {
      setActiveNav(button.dataset.view);
      const views = {
        arcade: renderArcadePage,
        passport: renderPassportPage,
        'game-night': renderGameNightPage,
        tournaments: renderTournamentsPage,
        rewards: renderRewardsPage,
      };
      const viewHandler = views[button.dataset.view];
      if (viewHandler) viewHandler();
      renderPassportMini();
    });
  });
}

function awardAchievement(key) {
  const profile = getProfile();
  const achievements = getAchievements();
  const current = achievements.map((item) => item.key || item.title);

  if (current.includes(key)) return;

  const achievement = ACHIEVEMENTS[key];
  if (!achievement) return;

  achievements.push({ key, title: achievement.title, description: achievement.description });
  saveAchievements(achievements);

  profile.achievements = achievements.map((item) => item.title);
  saveProfile(profile);

  showToast(`${achievement.title} unlocked!`);
}

function updateProfileForScore(gameKey, score) {
  const profile = getProfile();
  profile.plays += 1;
  profile.xp += Math.round(score / 10);

  if (score > (profile.bestScores[gameKey] || 0)) {
    profile.bestScores[gameKey] = score;
  }

  updateLevelAndRank(profile);
  saveProfile(profile);
  renderPassportMini();

  if (profile.xp >= 2000) awardAchievement('club_champion');
  if (gameKey === 'brainbattle' && score >= 800) awardAchievement('trivia_master');
  if (gameKey === 'emoji' && score >= 850) awardAchievement('emoji_thinker');
  if (gameKey === 'memory' && score >= 1200) awardAchievement('memory_master');
  if (gameKey === 'puzzle' && score >= 900) awardAchievement('puzzle_champion');
  if (gameKey === 'wordstorm' && score >= 800) awardAchievement('word_wizard');

  const gameCount = Object.values(profile.bestScores).filter((value) => value > 0).length;
  if (gameCount >= 5) awardAchievement('arcade_explorer');
  if (profile.wins > 0) awardAchievement('first_win');
}

function completeGame(gameKey, score) {
  const profile = getProfile();
  profile.wins += 1;
  updateProfileForScore(gameKey, score);
  saveProfile(profile);
  const nextView = confirm('Return to the arcade?');
  if (nextView) {
    renderArcadePage();
    setActiveNav('arcade');
  }
}

function shuffle(array) {
  const items = [...array];
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function buildGameShell(title, subtitle, body, onBack = renderArcadePage) {
  const main = document.getElementById('main-screen');
  main.innerHTML = `
    <section class="page">
      <div class="game-shell">
        <div class="game-topbar">
          <div class="game-header">
            <small>${subtitle}</small>
            <h2>${title}</h2>
          </div>
          <button class="ghost-btn" id="back-to-arcade">Back to arcade</button>
        </div>
        <div id="game-content-body">${body}</div>
      </div>
    </section>
  `;

  document.getElementById('back-to-arcade').addEventListener('click', () => {
    onBack();
    setActiveNav('arcade');
  });
}

function startGame(gameId) {
  if (gameId === 'brainbattle') return startBrainBattle();
  if (gameId === 'emoji') return startEmojiDecode();
  if (gameId === 'memory') return startMemoryGame();
  if (gameId === 'puzzle') return startPuzzleClash();
  if (gameId === 'wordstorm') return startWordStorm();
  return null;
}

function startBrainBattle() {
  const difficulty = 'standard';
  let currentIndex = 0;
  let score = 0;
  let round = 1;
  const questions = shuffle(BRAINBATTLE_QUESTIONS).slice(0, 15);
  let timer = 15;
  let timerId = null;

  const createView = () => {
    const question = questions[currentIndex];
    const body = `
      <div class="game-panel">
        <div class="game-main">
          <div class="scoreboard">
            <div class="score-row"><span>Round</span><strong>${round}/3</strong></div>
            <div class="score-row"><span>Score</span><strong>${score}</strong></div>
            <div class="score-row"><span>Timer</span><strong class="timer">${timer}s</strong></div>
          </div>
          <div class="question-box">
            <small>${question.category}</small>
            <h3>${question.q}</h3>
          </div>
          <div class="answer-grid">
            ${question.choices
              .map(
                (choice, index) => `
                  <button class="answer-btn" data-choice="${index}">${String.fromCharCode(65 + index)}. ${choice}</button>
                `
              )
              .join('')}
          </div>
        </div>
        <div class="game-side">
          <div class="scoreboard">
            <div class="score-row"><span>Question</span><strong>${currentIndex + 1}/15</strong></div>
            <div class="score-row"><span>Difficulty</span><strong>${difficulty}</strong></div>
          </div>
        </div>
      </div>
    `;

    buildGameShell('BrainBattle Arena', 'Think fast. Answer smart.', body);

    document.querySelectorAll('.answer-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const selected = Number(button.dataset.choice);
        const correct = selected === question.answer;
        if (correct) {
          const speedBonus = Math.max(0, timer * 3);
          score += 100 + speedBonus;
          button.classList.add('correct');
        } else {
          button.classList.add('wrong');
          const correctButton = document.querySelectorAll('.answer-btn')[question.answer];
          if (correctButton) correctButton.classList.add('correct');
        }

        const allButtons = [...document.querySelectorAll('.answer-btn')];
        allButtons.forEach((btn) => btn.disabled = true);

        setTimeout(() => {
          currentIndex += 1;
          if (currentIndex >= questions.length) {
            const finalScore = score;
            updateProfileForScore('brainbattle', finalScore);
            const profile = getProfile();
            profile.bestScores.brainbattle = Math.max(profile.bestScores.brainbattle || 0, finalScore);
            saveProfile(profile);

            buildGameShell(
              'BrainBattle Arena',
              'Final score',
              `
                <div class="game-panel">
                  <div class="game-main">
                    <div class="question-box">
                      <h3>Match complete</h3>
                      <p>Your final score is <strong>${finalScore}</strong> points.</p>
                      <p>Ranked performance: ${profile.rank}</p>
                    </div>
                    <div class="hero-actions" style="margin-top: 16px;">
                      <button class="primary-btn" id="replay-brainbattle">Replay</button>
                      <button class="secondary-btn" id="brainbattle-arcade">Back to arcade</button>
                    </div>
                  </div>
                </div>
              `
            );

            document.getElementById('replay-brainbattle').addEventListener('click', startBrainBattle);
            document.getElementById('brainbattle-arcade').addEventListener('click', renderArcadePage);
            return;
          }

          if (currentIndex % 5 === 0) {
            round += 1;
          }

          timer = 15;
          createView();
        }, 900);
      });
    });
  };

  const tick = () => {
    if (timer <= 0) {
      clearInterval(timerId);
      const current = questions[currentIndex];
      const correctButton = document.querySelectorAll('.answer-btn')[current.answer];
      document.querySelectorAll('.answer-btn').forEach((btn) => btn.disabled = true);
      if (correctButton) correctButton.classList.add('correct');
      setTimeout(() => {
        currentIndex += 1;
        if (currentIndex >= questions.length) {
          const finalScore = score;
          updateProfileForScore('brainbattle', finalScore);
          buildGameShell(
            'BrainBattle Arena',
            'Final score',
            `
              <div class="game-panel">
                <div class="game-main">
                  <div class="question-box">
                    <h3>Time expired!</h3>
                    <p>Your final score is <strong>${finalScore}</strong> points.</p>
                  </div>
                  <div class="hero-actions" style="margin-top: 16px;">
                    <button class="primary-btn" id="replay-brainbattle">Replay</button>
                    <button class="secondary-btn" id="brainbattle-arcade">Back to arcade</button>
                  </div>
                </div>
              </div>
            `
          );
          document.getElementById('replay-brainbattle').addEventListener('click', startBrainBattle);
          document.getElementById('brainbattle-arcade').addEventListener('click', renderArcadePage);
          return;
        }
        if (currentIndex % 5 === 0) round += 1;
        timer = 15;
        createView();
      }, 900);
      return;
    }

    const timerNode = document.querySelector('.timer');
    if (timerNode) timerNode.textContent = `${timer}s`;
    timer -= 1;
  };

  createView();
  timerId = setInterval(tick, 1000);
}

function startEmojiDecode() {
  let score = 0;
  let streak = 0;
  let index = 0;
  const puzzles = shuffle(EMOJI_PUZZLES).slice(0, 12);
  let timer = 20;
  let timerId = null;

  const renderQuestion = () => {
    const puzzle = puzzles[index];
    const body = `
      <div class="game-panel">
        <div class="game-main">
          <div class="scoreboard">
            <div class="score-row"><span>Question</span><strong>${index + 1}/12</strong></div>
            <div class="score-row"><span>Score</span><strong>${score}</strong></div>
            <div class="score-row"><span>Streak</span><strong>${streak}</strong></div>
          </div>
          <div class="question-box" style="text-align:center;">
            <div style="font-size: 3rem; margin-bottom: 8px;">${puzzle.emoji}</div>
            <h3>Decode the clue</h3>
          </div>
          <div class="answer-grid">
            ${puzzle.options
              .map(
                (option) => `
                  <button class="option-btn" data-answer="${option}">${option}</button>
                `
              )
              .join('')}
          </div>
          <div class="feedback" id="emoji-feedback">Choose the correct phrase.</div>
        </div>
        <div class="game-side">
          <div class="scoreboard">
            <div class="score-row"><span>Timer</span><strong class="timer">${timer}s</strong></div>
            <div class="score-row"><span>Difficulty</span><strong>Medium</strong></div>
          </div>
        </div>
      </div>
    `;

    buildGameShell('Emoji Decode', 'Decode the clues. Beat the clock.', body);

    document.querySelectorAll('.option-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const selected = button.dataset.answer;
        const correct = selected === puzzle.answer;
        if (correct) {
          streak += 1;
          score += 150 + streak * 25;
          document.getElementById('emoji-feedback').textContent = 'Correct! Clue solved.';
        } else {
          streak = 0;
          score = Math.max(0, score - 25);
          document.getElementById('emoji-feedback').textContent = `Incorrect. Correct answer: ${puzzle.answer}`;
        }

        [...document.querySelectorAll('.option-btn')].forEach((btn) => {
          btn.disabled = true;
          if (btn.dataset.answer === puzzle.answer) btn.style.borderColor = 'rgba(122, 240, 167, 0.7)';
        });

        setTimeout(() => {
          index += 1;
          if (index >= puzzles.length) {
            clearInterval(timerId);
            updateProfileForScore('emoji', score);
            buildGameShell(
              'Emoji Decode',
              'Results',
              `
                <div class="game-panel">
                  <div class="game-main">
                    <div class="question-box">
                      <h3>Final score: ${score}</h3>
                      <p>Nice decode run. Streak reached ${streak}.</p>
                    </div>
                    <div class="hero-actions" style="margin-top:16px;">
                      <button class="primary-btn" id="replay-emoji">Replay</button>
                      <button class="secondary-btn" id="emoji-arcade">Back to arcade</button>
                    </div>
                  </div>
                </div>
              `
            );
            document.getElementById('replay-emoji').addEventListener('click', startEmojiDecode);
            document.getElementById('emoji-arcade').addEventListener('click', renderArcadePage);
            return;
          }
          timer = 20;
          renderQuestion();
        }, 900);
      });
    });
  };

  const tick = () => {
    if (timer <= 0) {
      clearInterval(timerId);
      const puzzle = puzzles[index];
      const feedback = document.getElementById('emoji-feedback');
      if (feedback) feedback.textContent = `Time up! Correct answer: ${puzzle.answer}`;
      [...document.querySelectorAll('.option-btn')].forEach((btn) => {
        btn.disabled = true;
        if (btn.dataset.answer === puzzle.answer) btn.style.borderColor = 'rgba(122, 240, 167, 0.7)';
      });

      setTimeout(() => {
        index += 1;
        if (index >= puzzles.length) {
          updateProfileForScore('emoji', score);
          buildGameShell('Emoji Decode', 'Results', `<div class="game-panel"><div class="game-main"><div class="question-box"><h3>Final score: ${score}</h3><p>Game complete.</p></div><div class="hero-actions" style="margin-top: 16px;"><button class="primary-btn" id="replay-emoji">Replay</button><button class="secondary-btn" id="emoji-arcade">Back to arcade</button></div></div></div>`);
          document.getElementById('replay-emoji').addEventListener('click', startEmojiDecode);
          document.getElementById('emoji-arcade').addEventListener('click', renderArcadePage);
          return;
        }
        timer = 20;
        renderQuestion();
      }, 900);
      return;
    }
    const timerNode = document.querySelector('.timer');
    if (timerNode) timerNode.textContent = `${timer}s`;
    timer -= 1;
  };

  renderQuestion();
  timerId = setInterval(tick, 1000);
}

function startMemoryGame() {
  const difficulty = 'standard';
  const deck = shuffle([...MEMORY_ICONS, ...MEMORY_ICONS]).slice(0, 16);
  const matched = new Set();
  const revealed = new Set();
  let moves = 0;
  let score = 0;
  let timer = 90;
  let timerId = null;

  const updateScoreDisplay = () => {
    const scoreEl = document.querySelector('#memory-score');
    const moveEl = document.querySelector('#memory-moves');
    const timeEl = document.querySelector('#memory-timer');
    if (scoreEl) scoreEl.textContent = String(score);
    if (moveEl) moveEl.textContent = String(moves);
    if (timeEl) timeEl.textContent = `${timer}s`;
  };

  const renderBoard = () => {
    const body = `
      <div class="game-panel">
        <div class="game-main">
          <div class="scoreboard">
            <div class="score-row"><span>Score</span><strong id="memory-score">${score}</strong></div>
            <div class="score-row"><span>Moves</span><strong id="memory-moves">${moves}</strong></div>
            <div class="score-row"><span>Timer</span><strong id="memory-timer">${timer}s</strong></div>
          </div>
          <div class="board-grid">
            ${deck
              .map(
                (value, index) => `
                  <button class="memory-card ${revealed.has(index) || matched.has(index) ? 'revealed' : ''} ${matched.has(index) ? 'matched' : ''}" data-index="${index}">
                    ${revealed.has(index) || matched.has(index) ? value : '?'}
                  </button>
                `
              )
              .join('')}
          </div>
        </div>
        <div class="game-side">
          <div class="scoreboard">
            <div class="score-row"><span>Difficulty</span><strong>${difficulty}</strong></div>
            <div class="score-row"><span>Goal</span><strong>16 cards</strong></div>
          </div>
        </div>
      </div>
    `;

    buildGameShell('Memory Masters', 'Remember more. Match faster.', body);

    document.querySelectorAll('.memory-card').forEach((card) => {
      card.addEventListener('click', () => {
        if (revealed.size >= 2 || card.classList.contains('matched') || revealed.has(Number(card.dataset.index))) return;

        const indexValue = Number(card.dataset.index);
        revealed.add(indexValue);
        card.classList.add('revealed');
        card.textContent = deck[indexValue];

        if (revealed.size === 2) {
          moves += 1;
          const [firstIndex, secondIndex] = [...revealed];
          const firstValue = deck[firstIndex];
          const secondValue = deck[secondIndex];
          updateScoreDisplay();

          if (firstValue === secondValue) {
            matched.add(firstIndex);
            matched.add(secondIndex);
            revealed.clear();
            score += 200;
            updateScoreDisplay();

            if (matched.size === deck.length) {
              clearInterval(timerId);
              const finalScore = score + Math.max(0, timer * 5) - moves * 15;
              updateProfileForScore('memory', finalScore);
              buildGameShell(
                'Memory Masters',
                'Victory!',
                `
                  <div class="game-panel">
                    <div class="game-main">
                      <div class="question-box">
                        <h3>Board cleared!</h3>
                        <p>Final score: <strong>${finalScore}</strong></p>
                        <p>Moves used: ${moves}</p>
                      </div>
                      <div class="hero-actions" style="margin-top:16px;">
                        <button class="primary-btn" id="replay-memory">Replay</button>
                        <button class="secondary-btn" id="memory-arcade">Back to arcade</button>
                      </div>
                    </div>
                  </div>
                `
              );
              document.getElementById('replay-memory').addEventListener('click', startMemoryGame);
              document.getElementById('memory-arcade').addEventListener('click', renderArcadePage);
              return;
            }
          }

          setTimeout(() => {
            [...revealed].forEach((n) => {
              const element = document.querySelector(`.memory-card[data-index="${n}"]`);
              if (element && !matched.has(n)) {
                element.textContent = '?';
                element.classList.remove('revealed');
              }
            });
            revealed.clear();
            renderBoard();
          }, 700);
        }
      });
    });
  };

  renderBoard();

  timerId = setInterval(() => {
    timer -= 1;
    updateScoreDisplay();
    if (timer <= 0) {
      clearInterval(timerId);
      buildGameShell(
        'Memory Masters',
        'Time up',
        `
          <div class="game-panel">
            <div class="game-main">
              <div class="question-box">
                <h3>Time expired</h3>
                <p>Final score: <strong>${score}</strong></p>
              </div>
              <div class="hero-actions" style="margin-top:16px;">
                <button class="primary-btn" id="replay-memory">Replay</button>
                <button class="secondary-btn" id="memory-arcade">Back to arcade</button>
              </div>
            </div>
          </div>
        `
      );
      document.getElementById('replay-memory').addEventListener('click', startMemoryGame);
      document.getElementById('memory-arcade').addEventListener('click', renderArcadePage);
    }
  }, 1000);
}

function startPuzzleClash() {
  const puzzles = shuffle(PUZZLE_CLASH_ITEMS).slice(0, 10);
  let index = 0;
  let score = 0;
  let timer = 22;
  let timerId = null;

  const renderPuzzle = () => {
    const puzzle = puzzles[index];
    const body = `
      <div class="game-panel">
        <div class="game-main">
          <div class="scoreboard">
            <div class="score-row"><span>Question</span><strong>${index + 1}/10</strong></div>
            <div class="score-row"><span>Score</span><strong>${score}</strong></div>
            <div class="score-row"><span>Timer</span><strong class="timer">${timer}s</strong></div>
          </div>
          <div class="question-box">
            <h3>${puzzle.q}</h3>
          </div>
          <div class="input-block">
            <input id="puzzle-input" type="text" placeholder="Type your answer" />
            <button class="primary-btn" id="submit-puzzle">Submit answer</button>
          </div>
          <div class="feedback" id="puzzle-feedback">Solve the logic challenge.</div>
        </div>
        <div class="game-side">
          <div class="scoreboard">
            <div class="score-row"><span>Mode</span><strong>Logic</strong></div>
            <div class="score-row"><span>Goal</span><strong>10 clues</strong></div>
          </div>
        </div>
      </div>
    `;

    buildGameShell('Puzzle Clash', 'Solve the challenge. Outthink the competition.', body);
    document.getElementById('submit-puzzle').addEventListener('click', () => {
      const answer = document.getElementById('puzzle-input').value.trim().toLowerCase();
      const target = puzzle.answer.toLowerCase();
      const isCorrect = answer === target;

      if (isCorrect) {
        const speedBonus = timer * 5;
        score += 120 + speedBonus;
        document.getElementById('puzzle-feedback').textContent = 'Correct! Great reasoning.';
      } else {
        document.getElementById('puzzle-feedback').textContent = `Incorrect. Correct answer: ${puzzle.answer}`;
      }

      setTimeout(() => {
        index += 1;
        if (index >= puzzles.length) {
          clearInterval(timerId);
          updateProfileForScore('puzzle', score);
          buildGameShell(
            'Puzzle Clash',
            'Results',
            `
              <div class="game-panel">
                <div class="game-main">
                  <div class="question-box">
                    <h3>Final score: ${score}</h3>
                    <p>Logic run complete.</p>
                  </div>
                  <div class="hero-actions" style="margin-top:16px;">
                    <button class="primary-btn" id="replay-puzzle">Replay</button>
                    <button class="secondary-btn" id="puzzle-arcade">Back to arcade</button>
                  </div>
                </div>
              </div>
            `
          );
          document.getElementById('replay-puzzle').addEventListener('click', startPuzzleClash);
          document.getElementById('puzzle-arcade').addEventListener('click', renderArcadePage);
          return;
        }
        timer = 22;
        renderPuzzle();
      }, 900);
    });
  };

  const tick = () => {
    if (timer <= 0) {
      clearInterval(timerId);
      document.getElementById('puzzle-feedback').textContent = `Time up: ${puzzles[index].answer}`;
      setTimeout(() => {
        index += 1;
        if (index >= puzzles.length) {
          updateProfileForScore('puzzle', score);
          buildGameShell('Puzzle Clash', 'Results', `<div class="game-panel"><div class="game-main"><div class="question-box"><h3>Final score: ${score}</h3><p>Logic run complete.</p></div><div class="hero-actions" style="margin-top:16px;"><button class="primary-btn" id="replay-puzzle">Replay</button><button class="secondary-btn" id="puzzle-arcade">Back to arcade</button></div></div></div>`);
          document.getElementById('replay-puzzle').addEventListener('click', startPuzzleClash);
          document.getElementById('puzzle-arcade').addEventListener('click', renderArcadePage);
          return;
        }
        timer = 22;
        renderPuzzle();
      }, 900);
      return;
    }
    const timerNode = document.querySelector('.timer');
    if (timerNode) timerNode.textContent = `${timer}s`;
    timer -= 1;
  };

  renderPuzzle();
  timerId = setInterval(tick, 1000);
}

function startWordStorm() {
  const words = shuffle(WORDSTORM_WORDS).slice(0, 12);
  let index = 0;
  let score = 0;
  let timer = 25;
  let timerId = null;

  const renderWord = () => {
    const item = words[index];
    const scramble = shuffle(item.word.split('')).join('');
    const body = `
      <div class="game-panel">
        <div class="game-main">
          <div class="scoreboard">
            <div class="score-row"><span>Question</span><strong>${index + 1}/12</strong></div>
            <div class="score-row"><span>Score</span><strong>${score}</strong></div>
            <div class="score-row"><span>Timer</span><strong class="timer">${timer}s</strong></div>
          </div>
          <div class="question-box">
            <small>Clue</small>
            <h3>${item.clue}</h3>
            <div style="font-size: 2.5rem; letter-spacing: 0.5rem; margin-top: 14px;">${scramble}</div>
          </div>
          <div class="input-block">
            <input id="word-input" type="text" placeholder="Unscramble the letters" />
            <button class="primary-btn" id="submit-word">Submit word</button>
          </div>
          <div class="feedback" id="word-feedback">Type the hidden word before time expires.</div>
        </div>
        <div class="game-side">
          <div class="scoreboard">
            <div class="score-row"><span>Mode</span><strong>Wordstorm</strong></div>
            <div class="score-row"><span>Goal</span><strong>12 words</strong></div>
          </div>
        </div>
      </div>
    `;

    buildGameShell('WordStorm', 'Unscramble. Discover. Dominate.', body);
    document.getElementById('submit-word').addEventListener('click', () => {
      const answer = document.getElementById('word-input').value.trim().toUpperCase();
      const isCorrect = answer === item.word;
      if (isCorrect) {
        score += 140 + timer * 4;
        document.getElementById('word-feedback').textContent = 'Correct! Word solved.';
      } else {
        score = Math.max(0, score - 30);
        document.getElementById('word-feedback').textContent = `Not quite. Correct answer: ${item.word}`;
      }

      setTimeout(() => {
        index += 1;
        if (index >= words.length) {
          clearInterval(timerId);
          updateProfileForScore('wordstorm', score);
          buildGameShell(
            'WordStorm',
            'Results',
            `
              <div class="game-panel">
                <div class="game-main">
                  <div class="question-box">
                    <h3>Final score: ${score}</h3>
                    <p>Word run complete.</p>
                  </div>
                  <div class="hero-actions" style="margin-top:16px;">
                    <button class="primary-btn" id="replay-word">Replay</button>
                    <button class="secondary-btn" id="word-arcade">Back to arcade</button>
                  </div>
                </div>
              </div>
            `
          );
          document.getElementById('replay-word').addEventListener('click', startWordStorm);
          document.getElementById('word-arcade').addEventListener('click', renderArcadePage);
          return;
        }
        timer = 25;
        renderWord();
      }, 900);
    });
  };

  const tick = () => {
    if (timer <= 0) {
      clearInterval(timerId);
      const item = words[index];
      document.getElementById('word-feedback').textContent = `Time up! Correct answer: ${item.word}`;
      setTimeout(() => {
        index += 1;
        if (index >= words.length) {
          updateProfileForScore('wordstorm', score);
          buildGameShell('WordStorm', 'Results', `<div class="game-panel"><div class="game-main"><div class="question-box"><h3>Final score: ${score}</h3><p>Word run complete.</p></div><div class="hero-actions" style="margin-top:16px;"><button class="primary-btn" id="replay-word">Replay</button><button class="secondary-btn" id="word-arcade">Back to arcade</button></div></div></div>`);
          document.getElementById('replay-word').addEventListener('click', startWordStorm);
          document.getElementById('word-arcade').addEventListener('click', renderArcadePage);
          return;
        }
        timer = 25;
        renderWord();
      }, 900);
      return;
    }
    const timerNode = document.querySelector('.timer');
    if (timerNode) timerNode.textContent = `${timer}s`;
    timer -= 1;
  };

  renderWord();
  timerId = setInterval(tick, 1000);
}

function initializeApp() {
  const profile = getProfile();
  updateLevelAndRank(profile);
  saveProfile(profile);

  renderPassportMini();
  bindNavigation();
  renderArcadePage();
  setActiveNav('arcade');
}

document.addEventListener('DOMContentLoaded', initializeApp);

window.addEventListener('beforeunload', () => {
  const profile = getProfile();
  updateLevelAndRank(profile);
  saveProfile(profile);
});
