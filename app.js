(() => {
  'use strict';

  const STORE = 'playersclub-profile';
  const games = [
    { id: 'brainbattle', title: 'BrainBattle Arena', icon: '🧠', tag: 'Trivia', description: 'Timed trivia across science, history, geography, music, and more.', total: 15 },
    { id: 'emoji', title: 'Emoji Decode', icon: '🔤', tag: 'Puzzle', description: 'Decode emoji clues, build streaks, and beat the clock.', total: 12 },
    { id: 'memory', title: 'Memory Masters', icon: '🃏', tag: 'Matching', description: 'Find eight pairs using focus, speed, and a sharp memory.', total: 16 },
    { id: 'puzzle', title: 'Puzzle Clash', icon: '🧩', tag: 'Logic', description: 'Solve number patterns, math, and reasoning challenges.', total: 10 },
    { id: 'wordstorm', title: 'WordStorm', icon: '🌪️', tag: 'Words', description: 'Unscramble clue-led words before time runs out.', total: 12 },
  ];
  const trivia = [
    ['Which planet is known as the Red Planet?', ['Venus','Mars','Jupiter','Mercury'], 1, 'Science'],
    ['Who painted the Mona Lisa?', ['Leonardo da Vinci','Vincent van Gogh','Pablo Picasso','Michelangelo'], 0, 'Art'],
    ['Which country hosted the 2016 Summer Olympics?', ['Japan','Brazil','China','England'], 1, 'Sports'],
    ['What is 12 × 8?', ['86','96','106','92'], 1, 'Math'],
    ['Which instrument has 88 keys?', ['Violin','Piano','Trumpet','Cello'], 1, 'Music'],
    ['What is the capital of Canada?', ['Toronto','Ottawa','Montreal','Vancouver'], 1, 'Geography'],
    ['In which year did the first Moon landing occur?', ['1965','1969','1972','1976'], 1, 'History'],
    ['Which ocean is the largest?', ['Atlantic','Indian','Pacific','Arctic'], 2, 'Geography'],
    ['Who wrote Hamlet?', ['Charles Dickens','George Orwell','William Shakespeare','Mark Twain'], 2, 'Literature'],
    ['How many sides does a hexagon have?', ['5','6','7','8'], 1, 'Math'],
    ['Which team won the 2022 FIFA World Cup?', ['France','Argentina','Brazil','Germany'], 1, 'Sports'],
    ['Which gas do plants absorb?', ['Oxygen','Carbon dioxide','Nitrogen','Helium'], 1, 'Science'],
    ['What is the largest mammal on Earth?', ['Elephant','Blue whale','Giraffe','Hippopotamus'], 1, 'Science'],
    ['Which city is famous for the Eiffel Tower?', ['Rome','Paris','Berlin','Madrid'], 1, 'Geography'],
    ['Which instrument measures temperature?', ['Thermometer','Compass','Barometer','Altimeter'], 0, 'Science'],
    ['How many continents are commonly recognized?', ['5','6','7','8'], 2, 'Geography'],
    ['What is the chemical symbol for water?', ['CO2','H2O','O2','NaCl'], 1, 'Science'],
    ['Which month has 28 days in a common year?', ['February','April','June','All of them'], 0, 'General'],
    ['What is the first prime number?', ['0','1','2','3'], 2, 'Math'],
    ['Which animal is known as the tallest land animal?', ['Elephant','Camel','Giraffe','Ostrich'], 2, 'General'],
  ].map(([q, choices, answer, category]) => ({ q, choices, answer, category }));
  const emoji = [
    ['🌙🌙🌙','Moonlight',['Moonlight','Sunrise','Starfall','Nightfall']], ['🧊🔥','Ice and fire',['Cold front','Ice and fire','Hot snow','Frozen storm']],
    ['🕺💃','Dance party',['Dance party','Game night','Music hall','Concert crowd']], ['🚀🌍','Space travel',['Rocket race','Space travel','Earth trip','Cosmic jump']],
    ['📚🧠','Study smart',['Study smart','Book club','School sprint','Brainstorm']], ['☀️🏖️','Beach day',['Beach day','Island rain','Sunset drive','Pool party']],
    ['🍔🍟','Fast food',['Snack time','Fast food','Dining room','Burger night']], ['🌧️☔','Rainy day',['Snow storm','Rainy day','Cloud burst','Wet grass']],
    ['🎮🏆','Gaming win',['Arcade prize','Gaming win','New console','Tournament rush']], ['🧭🗺️','Navigation',['Road trip','Journey map','Navigation','Compass quest']],
    ['🧊🌊','Frozen ocean',['Tundra waves','Frozen ocean','Polar drift','Glacier river']], ['🎵🎧','Music listening',['Song remix','Music listening','Concert live','Radio static']],
  ].map(([clue, answer, choices]) => ({ clue, answer, choices }));
  const puzzles = [
    { q:'What comes next: 2, 4, 8, 16, ?', answer:'32' }, { q:'What is 7 + 9 × 2?', answer:'25' },
    { q:'If all squares are shapes and some shapes are blue, can we conclude some squares are blue?', answer:'no', accepted:['no','cannot conclude','not necessarily'] },
    { q:'What number is missing: 3, 6, 12, 24, ?', answer:'48' }, { q:'A train leaves at 7:15 and arrives 45 minutes later. What time?', answer:'8:00' },
    { q:'What is next: A, C, F, J, ?', answer:'O' }, { q:'If 5 notebooks cost $20, how much is one?', answer:'4' },
    { q:'Which is odd: 12, 18, 27, 36? (The others are multiples of 6.)', answer:'27' }, { q:'What comes next: 100, 81, 64, 49, ?', answer:'36' },
    { q:'A box has 3 red, 2 blue, and 5 green marbles. What fraction are blue? Answer 2/10 or simplify.', answer:'2/10', accepted:['2/10','1/5'] },
  ];
  const words = [
    ['PLANET','A world that orbits a star'], ['ROCKET','A vehicle that blasts into space'], ['PUZZLE','A brain challenge that fits pieces together'], ['TROPHY','A prize for winning a competition'],
    ['GAMER','A player in a digital arena'], ['NEXUS','A central connection point'], ['VECTOR','A quantity with size and direction'], ['CHAMP','A winner in a contest'],
    ['QUEST','A journey with a purpose'], ['DRIFT','To slowly move with the current'], ['SPARK','A tiny flash of light or energy'], ['GLOW','A soft, radiant brightness'],
  ].map(([word, clue]) => ({ word, clue }));
  const icons = ['🌙','⭐','🚀','🎮','🎧','🎯','⚡','💎'];
  const ranks = [[0,'Rookie Player'],[400,'Rising Challenger'],[900,'Skilled Competitor'],[1700,'Arcade Specialist'],[2600,'Elite Player'],[3700,'Gold Champion'],[5000,'Platinum Master'],[6500,'Diamond Legend'],[8200,'Grand Champion'],[10000,'PlayersClub Icon']];
  const blankProfile = { name:'Nova Player', avatar:'🦊', xp:0, level:1, plays:0, wins:0, bestScores:{}, played:[], achievements:[] };
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const shuffle = values => { const result = [...values]; for (let i=result.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; } return result; };
  const readProfile = () => { try { const saved=JSON.parse(localStorage.getItem(STORE)||'null')||{}; return {...blankProfile,...saved,bestScores:{...blankProfile.bestScores,...saved.bestScores},played:Array.isArray(saved.played)?saved.played:[],achievements:Array.isArray(saved.achievements)?saved.achievements:[]}; } catch { return {...blankProfile,bestScores:{},played:[],achievements:[]}; } };
  let profile = readProfile(), state = null, timerId = null, toastId = null;
  const root = document.getElementById('main-screen');
  const currentRank = xp => [...ranks].reverse().find(([threshold])=>xp>=threshold)[1];
  function save() { profile.level=Math.floor(profile.xp/500)+1; profile.rank=currentRank(profile.xp); try { localStorage.setItem(STORE,JSON.stringify(profile)); } catch { notify('Progress could not be saved in this browser.'); } updateMini(); }
  function updateMini() { const target=document.getElementById('passport-mini'); if(target) target.innerHTML=`<div class="avatar">${escapeHTML(profile.avatar)}</div><div class="meta"><div class="name">${escapeHTML(profile.name)}</div><div class="rank">${escapeHTML(profile.rank||currentRank(profile.xp))}</div></div>`; }
  function notify(message) { const target=document.getElementById('toast'); if(!target)return; target.textContent=message; target.classList.add('visible'); clearTimeout(toastId); toastId=setTimeout(()=>target.classList.remove('visible'),2200); }
  function stopTimer() { if(timerId){clearInterval(timerId);timerId=null;} }
  function nav(view) { document.querySelectorAll('.nav-btn').forEach(button=>button.classList.toggle('active',button.dataset.view===view)); }
  function arcade() {
    stopTimer(); state=null; nav('arcade');
    root.innerHTML=`<section class="page"><div class="hero"><div class="hero-panel"><div class="kicker">PlayersClub Universe</div><h1>One club. <span class="accent">Unlimited games.</span></h1><p>Explore five original arcade challenges, sharpen your skills, and build your PlayersClub Passport. Progress is saved locally in this browser.</p><div class="hero-actions"><button class="primary-btn" id="explore">Enter Arcade</button><button class="secondary-btn" id="passport-shortcut">View Passport</button></div></div><div class="panel mini-stats"><div class="stat-card"><div class="stat-label">Club XP</div><div class="stat-value">${profile.xp}</div></div><div class="stat-card"><div class="stat-label">Player Rank</div><div class="stat-value">${escapeHTML(profile.rank||currentRank(profile.xp))}</div></div><div class="stat-card"><div class="stat-label">Games played</div><div class="stat-value">${profile.plays}</div></div></div></div><div class="arcade-grid" id="arcade-grid">${games.map(game=>`<button class="game-card" data-game="${game.id}"><div class="game-icon">${game.icon}</div><h3>${game.title}</h3><p>${game.description}</p><div class="game-meta"><span class="game-tag">${game.tag}</span><span>${game.total} challenges</span></div></button>`).join('')}</div></section>`;
    document.getElementById('explore').onclick=()=>document.getElementById('arcade-grid').scrollIntoView({behavior:'smooth'});
    document.getElementById('passport-shortcut').onclick=passport;
    root.querySelectorAll('[data-game]').forEach(button=>button.onclick=()=>startGame(button.dataset.game));
  }
  function passport() {
    stopTimer(); nav('passport');
    const badges=profile.achievements.length?profile.achievements:['Finish a game to earn your first achievement.'];
    root.innerHTML=`<section class="page profile-shell"><div class="profile-card"><div class="profile-head"><div class="avatar-large">${escapeHTML(profile.avatar)}</div><div><h2 class="name-line">${escapeHTML(profile.name)}</h2><span class="rank-badge">${escapeHTML(profile.rank||currentRank(profile.xp))}</span></div></div><label>Player name<input id="player-name" type="text" maxlength="24" value="${escapeHTML(profile.name)}"></label><label style="display:block;margin-top:12px">Avatar<select id="player-avatar">${['🦊','🐼','🐯','🐸','🦄','🐲','🐙','🤖'].map(a=>`<option ${a===profile.avatar?'selected':''}>${a}</option>`).join('')}</select></label><div class="profile-stats" style="margin-top:18px"><div class="mini-box"><span class="label">Level</span><div class="value">${profile.level}</div></div><div class="mini-box"><span class="label">Club XP</span><div class="value">${profile.xp}</div></div><div class="mini-box"><span class="label">Wins</span><div class="value">${profile.wins}</div></div><div class="mini-box"><span class="label">Games completed</span><div class="value">${profile.plays}</div></div></div><button class="primary-btn" id="save-profile" style="margin-top:16px">Save Passport</button></div><div class="profile-card"><h3>Achievement Vault</h3><div class="achievements-list">${badges.map(b=>`<div class="achievement-item"><div style="display:flex;gap:12px;align-items:center"><div class="badge">★</div><strong>${escapeHTML(b)}</strong></div></div>`).join('')}</div><h3 style="margin-top:24px">Personal bests</h3><div class="history-list">${games.map(game=>`<div class="history-item"><strong>${game.title}</strong><span>${profile.bestScores[game.id]||0} pts</span></div>`).join('')}</div></div></section>`;
    document.getElementById('save-profile').onclick=()=>{profile.name=document.getElementById('player-name').value.trim()||'Nova Player';profile.avatar=document.getElementById('player-avatar').value;save();passport();notify('Passport saved on this device.');};
  }
  function gameNight() { stopTimer(); nav('game-night'); root.innerHTML=`<section class="page"><div class="game-shell"><div class="game-header"><small>Local same-device party mode</small><h2>Game Night Live</h2></div><div class="question-box"><h3>Host a pass-and-play game night</h3><p>This prototype runs locally on one device. Room codes do not connect remote players, and no simulated connected users are shown.</p><div class="form-grid"><label>Room name<input id="room-name" value="Neon Night Arena" maxlength="32"></label><label>Players (2–8)<input id="player-count" type="number" min="2" max="8" value="4"></label></div><button class="primary-btn" id="create-room">Create local room</button><div class="feedback" id="room-result">No room created yet.</div></div></div></section>`; document.getElementById('create-room').onclick=()=>{const name=document.getElementById('room-name').value.trim()||'Game Night';const count=Math.max(2,Math.min(8,Number(document.getElementById('player-count').value)||2));document.getElementById('room-result').innerHTML=`<strong>${escapeHTML(name)}</strong><br>Local room code <span class="room-code">PC-${Math.random().toString(36).slice(2,7).toUpperCase()}</span><br>${count} pass-and-play slots ready. Online multiplayer is not configured.`;}; }
  function tournaments() { stopTimer(); nav('tournaments'); root.innerHTML=`<section class="page"><div class="game-shell"><div class="game-header"><small>Competitive arena</small><h2>Tournament Center</h2></div><div class="question-box"><h3>Local prototype</h3><p>Online registration, brackets, and server-verified competitive rankings are not configured. Local best scores are saved on this device.</p></div><div class="history-list">${games.map(game=>`<div class="history-item"><strong>${game.title}</strong><span>${profile.bestScores[game.id]||0} pts best</span></div>`).join('')}</div></div></section>`; }
  function rewards() { stopTimer(); nav('rewards'); root.innerHTML=`<section class="page"><div class="game-shell"><div class="game-header"><small>Rewards Vault</small><h2>PlayersClub Rewards</h2></div><div class="rewards-list"><div class="reward-item"><strong>Club XP</strong><span>${profile.xp}</span></div><div class="reward-item"><strong>Player level</strong><span>${profile.level}</span></div><div class="reward-item"><strong>Achievements</strong><span>${profile.achievements.length}</span></div></div><div class="feedback">Virtual local rewards only; they have no real-world financial value.</div></div></section>`; }
  function startGame(id) {
    stopTimer(); const game=games.find(item=>item.id===id); if(!game)return;
    state={id,index:0,score:0,streak:0,time:id==='memory'?90:id==='emoji'?20:id==='wordstorm'?25:id==='puzzle'?22:15,locked:false,moves:0,matched:[],revealed:[],deck:[]};
    if(id==='brainbattle')state.items=shuffle(trivia).slice(0,15);
    if(id==='emoji')state.items=shuffle(emoji);
    if(id==='puzzle')state.items=shuffle(puzzles);
    if(id==='wordstorm')state.items=shuffle(words);
    if(id==='memory')state.deck=shuffle([...icons,...icons]);
    renderGame(); timerId=setInterval(tick,1000);
  }
  function shell(content) { const game=games.find(item=>item.id===state.id); root.innerHTML=`<section class="page"><div class="game-shell"><div class="game-topbar"><div class="game-header"><small>PlayersClub Arcade • ${game.tag}</small><h2>${game.title}</h2></div><button class="ghost-btn" id="back">Back to arcade</button></div>${content}</div></section>`; document.getElementById('back').onclick=arcade; }
  function renderGame() {
    if(!state)return; const s=state,id=s.id;
    if(id==='memory') { shell(`<div class="game-panel"><div class="game-main"><div class="scoreboard"><div class="score-row"><span>Pairs</span><strong>${s.matched.length/2}/8</strong></div><div class="score-row"><span>Moves</span><strong>${s.moves}</strong></div><div class="score-row"><span>Timer</span><strong id="game-timer">${s.time}s</strong></div></div><div class="board-grid">${s.deck.map((value,i)=>`<button class="memory-card ${s.matched.includes(i)||s.revealed.includes(i)?'revealed':''} ${s.matched.includes(i)?'matched':''}" data-card="${i}" aria-label="Card ${i+1}">${s.matched.includes(i)||s.revealed.includes(i)?value:'?'}</button>`).join('')}</div></div><aside class="game-side"><p>Flip two cards per turn. Matching pairs stay visible. Clear all eight pairs before the timer ends.</p></aside></div>`); root.querySelectorAll('[data-card]').forEach(button=>button.onclick=()=>cardClick(Number(button.dataset.card))); return; }
    const item=s.items[s.index]; let prompt='',choices=null;
    if(id==='brainbattle'){prompt=`<small>${item.category}</small><h3>${item.q}</h3>`;choices=item.choices;}
    if(id==='emoji'){prompt=`<div style="font-size:3rem;text-align:center">${item.clue}</div><h3 style="text-align:center">Decode the clue</h3>`;choices=item.choices;}
    if(id==='puzzle')prompt=`<h3>${item.q}</h3>`;
    if(id==='wordstorm')prompt=`<small>Clue: ${item.clue}</small><h3 style="letter-spacing:.35em">${escapeHTML(shuffle(item.word.split('')).join(''))}</h3>`;
    shell(`<div class="game-panel"><div class="game-main"><div class="scoreboard"><div class="score-row"><span>Challenge</span><strong>${s.index+1}/${s.items.length}</strong></div><div class="score-row"><span>Score</span><strong>${s.score}</strong></div><div class="score-row"><span>Timer</span><strong id="game-timer">${s.time}s</strong></div>${id==='emoji'?`<div class="score-row"><span>Streak</span><strong>${s.streak}</strong></div>`:''}</div><div class="question-box">${prompt}</div>${choices?`<div class="answer-grid">${choices.map((choice,i)=>`<button class="answer-btn" data-choice="${i}">${escapeHTML(choice)}</button>`).join('')}</div>`:`<div class="input-block"><input id="game-answer" type="text" autocomplete="off" placeholder="${id==='wordstorm'?'Type the unscrambled word':'Type your answer'}"><button class="primary-btn" id="submit-answer">Submit answer</button></div>`}<div class="feedback" id="feedback">Answer before time expires.</div><div class="hero-actions"><button class="small-btn" id="skip">Skip challenge</button>${id==='puzzle'||id==='wordstorm'?'<button class="small-btn" id="hint">Hint (−25 points)</button>':''}</div></div><aside class="game-side"><strong>How to play</strong><p>${id==='brainbattle'?'Choose one correct answer. Correct answers score 100 points plus a time bonus.':id==='emoji'?'Choose the phrase represented by the emojis. Correct answers build a streak.':'Enter the correct solution before time expires.'}</p><p>Progress is stored locally in this browser.</p></aside></div>`);
    root.querySelectorAll('[data-choice]').forEach(button=>button.onclick=()=>answerChoice(Number(button.dataset.choice)));
    const input=document.getElementById('game-answer'); if(input){document.getElementById('submit-answer').onclick=answerText;input.onkeydown=event=>{if(event.key==='Enter')answerText();};}
    document.getElementById('skip').onclick=()=>{if(!state||state.locked)return;state.locked=true;advance();};
    const hint=document.getElementById('hint'); if(hint)hint.onclick=()=>{if(id==='wordstorm')document.getElementById('feedback').textContent=`Hint: the word starts with ${item.word[0]}.`;else document.getElementById('feedback').textContent=`Hint: the answer has ${item.answer.length} characters (ignore spaces).`;s.score=Math.max(0,s.score-25);hint.disabled=true;};
  }
  function answerChoice(choice) { if(!state||state.locked)return;const item=state.items[state.index];resolve(state.id==='brainbattle'?choice===item.answer:item.choices[choice]===item.answer); }
  function answerText() { if(!state||state.locked)return;const value=document.getElementById('game-answer').value.trim().toLowerCase().replace(/\s+/g,' ');const item=state.items[state.index];const accepted=state.id==='puzzle'?(item.accepted||[item.answer]).map(v=>v.toLowerCase()):[item.word.toLowerCase()];resolve(accepted.includes(value)); }
  function resolve(correct) {
    const s=state;if(!s||s.locked)return;s.locked=true;
    if(correct){const bonus=Math.max(0,s.time)*(s.id==='brainbattle'?3:5);s.score+=(s.id==='brainbattle'?100:s.id==='emoji'?150+(s.streak+1)*25:120)+bonus;if(s.id==='emoji')s.streak++;}
    else if(s.id==='emoji')s.streak=0;
    const feedback=document.getElementById('feedback');if(feedback)feedback.textContent=correct?'Correct! Great work.':`Not quite. ${s.id==='brainbattle'||s.id==='emoji'?`Answer: ${s.items[s.index].answer}`:'Keep going!'}`;
    setTimeout(advance,650);
  }
  function tick() { if(!state||state.locked)return;state.time--;const timer=document.getElementById('game-timer');if(timer)timer.textContent=`${state.time}s`;if(state.time<=0){if(state.id==='memory'){finish(false);return;}state.locked=true;const feedback=document.getElementById('feedback');if(feedback)feedback.textContent='Time is up.';setTimeout(advance,650);} }
  function advance() { if(!state)return;state.index++;state.locked=false;if(state.index>=state.items.length){finish(true);return;}state.time=state.id==='emoji'?20:state.id==='wordstorm'?25:state.id==='puzzle'?22:15;renderGame(); }
  function cardClick(index) {
    const s=state;if(!s||s.locked||s.matched.includes(index)||s.revealed.includes(index))return;
    s.revealed.push(index);renderGame();
    if(s.revealed.length===2){s.moves++;const [a,b]=s.revealed;if(s.deck[a]===s.deck[b]){s.matched.push(a,b);s.revealed=[];s.score+=200;if(s.matched.length===16){finish(true);}else renderGame();}else{s.locked=true;setTimeout(()=>{if(!state)return;s.revealed=[];s.locked=false;renderGame();},750);}}
  }
  function finish(won) {
    if(!state)return;stopTimer();const s=state,id=s.id;let score=s.score;if(id==='memory'&&won)score=Math.max(0,score+s.time*5-s.moves*15);
    profile.plays++;if(won)profile.wins++;profile.xp+=won?Math.max(10,Math.round(score/10)):0;profile.bestScores[id]=Math.max(profile.bestScores[id]||0,score);if(!profile.played.includes(id))profile.played.push(id);
    const unlock=name=>{if(!profile.achievements.includes(name)){profile.achievements.push(name);notify(`Achievement unlocked: ${name}`);}};
    if(won&&profile.wins===1)unlock('First Victory');if(profile.played.length===5)unlock('Arcade Explorer');
    const threshold={brainbattle:800,emoji:850,memory:1200,puzzle:900,wordstorm:800};const badge={brainbattle:'Trivia Master',emoji:'Emoji Decoder',memory:'Memory Master',puzzle:'Puzzle Champion',wordstorm:'Word Wizard'};if(won&&score>=threshold[id])unlock(badge[id]);if(won&&profile.xp>=2000)unlock('Club Champion');
    save();state=null;const game=games.find(item=>item.id===id);const summary=id==='memory'?`Pairs found: ${s.matched.length/2}/8 • Moves: ${s.moves}`:`You completed ${game.total} challenges.`;
    root.innerHTML=`<section class="page"><div class="game-shell"><div class="game-header"><small>${game.title} • Results</small><h2>${won?'Challenge complete!':'Time is up!'}</h2></div><div class="question-box"><h3>Final score: ${score} points</h3><p>${summary}</p><p>${won?'Club XP and local achievements have been saved.':'No win or XP awarded for this incomplete match.'}</p></div><div class="hero-actions"><button class="primary-btn" id="replay">Play again</button><button class="secondary-btn" id="return">Back to arcade</button><button class="ghost-btn" id="view-passport">View Passport</button></div></div></section>`;
    document.getElementById('replay').onclick=()=>startGame(id);document.getElementById('return').onclick=arcade;document.getElementById('view-passport').onclick=passport;
  }
  document.addEventListener('click',event=>{const button=event.target.closest('.nav-btn');if(!button)return;const view=button.dataset.view;if(view==='arcade')arcade();else if(view==='passport')passport();else if(view==='game-night')gameNight();else if(view==='tournaments')tournaments();else if(view==='rewards')rewards();});
  profile.rank=currentRank(profile.xp);save();arcade();
})();
