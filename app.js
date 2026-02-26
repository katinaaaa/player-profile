// ============================================================
// PLAYERHUB — Elite Gaming Stats Tracker
// Full SPA with Router, Auth, Search, Leaderboards, Profiles
// ============================================================

// ===== PLAYER DATABASE — REAL PRO PLAYERS =====
const PLAYER_DB = buildPlayerDB();

function buildPlayerDB() {
  // Top CS2 pros (sorted by rating descending)
  const cs2Pros = [
    { name: 's1mple', clan: 'BC.G', region: 'EU East', tagline: 'The greatest of all time.', cs2: { rank: 'Global Elite', rating: 35200, kd: '1.65', wr: '68.4', hs: '58.2', kills: '42,891', matches: 4210, deaths: '25,994' }, level: 99, hours: '12,400', verifiedType: 'pro', joinYear: 2014 },
    { name: 'ZywOo', clan: 'VIT', region: 'EU West', tagline: 'Precision incarnate.', cs2: { rank: 'Global Elite', rating: 34800, kd: '1.58', wr: '66.1', hs: '54.7', kills: '38,210', matches: 3840, deaths: '24,183' }, level: 97, hours: '10,800', verifiedType: 'pro', joinYear: 2016 },
    { name: 'NiKo', clan: 'FLCN', region: 'EU West', tagline: 'Headshot machine.', cs2: { rank: 'Global Elite', rating: 33900, kd: '1.52', wr: '65.8', hs: '61.3', kills: '45,120', matches: 4580, deaths: '29,684' }, level: 98, hours: '14,200', verifiedType: 'pro', joinYear: 2013 },
    { name: 'device', clan: 'AST', region: 'EU West', tagline: 'Ice cold under pressure.', cs2: { rank: 'Global Elite', rating: 33100, kd: '1.48', wr: '64.2', hs: '49.8', kills: '41,380', matches: 4420, deaths: '27,959' }, level: 96, hours: '13,100', verifiedType: 'pro', joinYear: 2013 },
    { name: 'm0NESY', clan: 'G2', region: 'EU East', tagline: 'Born to AWP.', cs2: { rank: 'Global Elite', rating: 32600, kd: '1.55', wr: '63.9', hs: '42.1', kills: '22,480', matches: 2380, deaths: '14,503' }, level: 92, hours: '6,800', verifiedType: 'pro', joinYear: 2020 },
    { name: 'donk', clan: 'SPRT', region: 'EU East', tagline: 'The prodigy.', cs2: { rank: 'Global Elite', rating: 32200, kd: '1.51', wr: '67.2', hs: '55.4', kills: '18,940', matches: 2050, deaths: '12,543' }, level: 88, hours: '5,200', verifiedType: 'pro', joinYear: 2021 },
    { name: 'ropz', clan: 'MOUZ', region: 'EU East', tagline: 'Mr. Consistent.', cs2: { rank: 'Global Elite', rating: 31800, kd: '1.44', wr: '62.5', hs: '53.9', kills: '36,720', matches: 4020, deaths: '25,500' }, level: 95, hours: '11,600', verifiedType: 'pro', joinYear: 2015 },
    { name: 'rain', clan: 'FAZE', region: 'EU West', tagline: 'Entry king.', cs2: { rank: 'Global Elite', rating: 31200, kd: '1.38', wr: '63.1', hs: '52.4', kills: '44,890', matches: 5120, deaths: '32,529' }, level: 99, hours: '15,800', verifiedType: 'pro', joinYear: 2012 },
    { name: 'Twistzz', clan: 'TL', region: 'NA East', tagline: 'NA aim, EU brain.', cs2: { rank: 'Global Elite', rating: 30800, kd: '1.42', wr: '61.8', hs: '56.7', kills: '32,100', matches: 3580, deaths: '22,606' }, level: 94, hours: '10,200', verifiedType: 'pro', joinYear: 2016 },
    { name: 'broky', clan: 'FAZE', region: 'EU East', tagline: 'Clutch minister.', cs2: { rank: 'Global Elite', rating: 30400, kd: '1.36', wr: '62.4', hs: '48.2', kills: '28,640', matches: 3320, deaths: '21,059' }, level: 91, hours: '8,900', verifiedType: 'pro', joinYear: 2018 },
    { name: 'EliGE', clan: 'COL', region: 'NA East', tagline: 'NA GOAT.', cs2: { rank: 'Global Elite', rating: 30000, kd: '1.39', wr: '60.5', hs: '54.1', kills: '38,920', matches: 4410, deaths: '28,000' }, level: 96, hours: '13,400', verifiedType: 'pro', joinYear: 2014 },
    { name: 'frozen', clan: 'FAZE', region: 'EU East', tagline: 'Cold-blooded fragger.', cs2: { rank: 'Global Elite', rating: 29600, kd: '1.35', wr: '60.1', hs: '51.8', kills: '24,180', matches: 2840, deaths: '17,911' }, level: 89, hours: '7,800', verifiedType: 'pro', joinYear: 2018 },
    { name: 'Ax1Le', clan: 'C9', region: 'EU East', tagline: 'CIS powerhouse.', cs2: { rank: 'Global Elite', rating: 29200, kd: '1.37', wr: '59.8', hs: '50.5', kills: '26,480', matches: 3080, deaths: '19,328' }, level: 90, hours: '8,200', verifiedType: null, joinYear: 2017 },
    { name: 'jL', clan: 'TL', region: 'EU East', tagline: 'Rising star.', cs2: { rank: 'Global Elite', rating: 28900, kd: '1.34', wr: '61.2', hs: '49.3', kills: '16,800', matches: 2010, deaths: '12,537' }, level: 85, hours: '5,400', verifiedType: null, joinYear: 2020 },
    { name: 'Spinx', clan: 'VIT', region: 'EU West', tagline: 'Aggressive playmaker.', cs2: { rank: 'Global Elite', rating: 28500, kd: '1.33', wr: '59.4', hs: '52.1', kills: '18,240', matches: 2190, deaths: '13,714' }, level: 86, hours: '5,800', verifiedType: null, joinYear: 2019 },
  ];
  // Top R6 Siege pros
  const r6Pros = [
    { name: 'Beaulo', clan: 'DZ', region: 'NA East', tagline: 'The R6 GOAT.', r6: { rank: 'Champion', rating: 5980, kd: '1.72', wr: '71.2', hs: '56.8', kills: '28,420', matches: 3210, deaths: '16,523' }, level: 99, hours: '11,200', verifiedType: 'pro', joinYear: 2016 },
    { name: 'Shaiiko', clan: 'BDS', region: 'EU West', tagline: 'Mechanical genius.', r6: { rank: 'Champion', rating: 5840, kd: '1.68', wr: '69.5', hs: '54.2', kills: '32,180', matches: 3680, deaths: '19,155' }, level: 98, hours: '12,400', verifiedType: 'pro', joinYear: 2017 },
    { name: 'Paluh', clan: 'W7M', region: 'South America', tagline: 'Brazilian beast.', r6: { rank: 'Champion', rating: 5720, kd: '1.64', wr: '68.8', hs: '52.4', kills: '26,840', matches: 3120, deaths: '16,366' }, level: 97, hours: '10,800', verifiedType: 'pro', joinYear: 2018 },
    { name: 'Pengu', clan: 'G2', region: 'EU West', tagline: 'Siege legend.', r6: { rank: 'Champion', rating: 5680, kd: '1.58', wr: '72.4', hs: '48.6', kills: '38,920', matches: 4520, deaths: '24,633' }, level: 99, hours: '16,200', verifiedType: 'pro', joinYear: 2015 },
    { name: 'Canadian', clan: 'SSG', region: 'NA East', tagline: 'IGL mastermind.', r6: { rank: 'Champion', rating: 5620, kd: '1.42', wr: '70.1', hs: '44.8', kills: '34,280', matches: 4180, deaths: '24,141' }, level: 98, hours: '14,600', verifiedType: 'pro', joinYear: 2015 },
    { name: 'Achieved', clan: 'DZ', region: 'NA East', tagline: 'Support turned slayer.', r6: { rank: 'Champion', rating: 5580, kd: '1.48', wr: '66.2', hs: '46.5', kills: '22,640', matches: 2780, deaths: '15,297' }, level: 95, hours: '9,800', verifiedType: 'pro', joinYear: 2017 },
    { name: 'Merc', clan: 'TSM', region: 'NA East', tagline: 'Flex god.', r6: { rank: 'Champion', rating: 5520, kd: '1.45', wr: '65.8', hs: '45.2', kills: '24,180', matches: 2980, deaths: '16,676' }, level: 94, hours: '10,400', verifiedType: 'pro', joinYear: 2016 },
    { name: 'Nesk', clan: 'FZE', region: 'South America', tagline: 'LATAM legend.', r6: { rank: 'Champion', rating: 5480, kd: '1.56', wr: '67.4', hs: '50.8', kills: '30,420', matches: 3560, deaths: '19,500' }, level: 99, hours: '15,200', verifiedType: 'pro', joinYear: 2015 },
    { name: 'Fabian', clan: 'G2', region: 'EU West', tagline: 'Brain of Siege.', r6: { rank: 'Champion', rating: 5420, kd: '1.35', wr: '73.8', hs: '42.1', kills: '28,640', matches: 3820, deaths: '21,215' }, level: 98, hours: '14,000', verifiedType: 'pro', joinYear: 2015 },
    { name: 'CTZN', clan: 'G2', region: 'EU West', tagline: 'British fragger.', r6: { rank: 'Champion', rating: 5380, kd: '1.52', wr: '64.8', hs: '51.2', kills: '20,480', matches: 2480, deaths: '13,474' }, level: 92, hours: '8,600', verifiedType: null, joinYear: 2018 },
  ];
  // Additional mixed/filler pros
  const morePlayers = [
    { name: 'NAF', clan: 'TL', region: 'NA East', tagline: 'Consistent rifle.', level: 95, hours: '12,800', verifiedType: 'pro', joinYear: 2014, cs2: { rank: 'Global Elite', rating: 28100, kd: '1.31', wr: '59.0', hs: '49.8', kills: '35,200', matches: 4240, deaths: '26,870' } },
    { name: 'apEX', clan: 'VIT', region: 'EU West', tagline: 'Entry specialist.', level: 97, hours: '14,400', verifiedType: 'pro', joinYear: 2012, cs2: { rank: 'Global Elite', rating: 27800, kd: '1.28', wr: '61.4', hs: '47.2', kills: '42,600', matches: 5280, deaths: '33,281' } },
    { name: 'huNter', clan: 'G2', region: 'EU West', tagline: 'Kovac bloodline.', level: 93, hours: '9,600', verifiedType: 'pro', joinYear: 2016, cs2: { rank: 'Global Elite', rating: 27400, kd: '1.30', wr: '58.2', hs: '53.4', kills: '26,800', matches: 3280, deaths: '20,615' } },
    { name: 'Magisk', clan: 'FAZE', region: 'EU West', tagline: 'Danish firepower.', level: 96, hours: '13,000', verifiedType: 'pro', joinYear: 2014, cs2: { rank: 'Global Elite', rating: 27000, kd: '1.29', wr: '62.0', hs: '48.6', kills: '38,400', matches: 4720, deaths: '29,767' } },
    { name: 'stav', clan: 'MOUZ', region: 'EU West', tagline: 'Rifling prodigy.', level: 84, hours: '4,800', verifiedType: 'id', joinYear: 2021, cs2: { rank: 'Global Elite', rating: 26600, kd: '1.33', wr: '58.8', hs: '51.2', kills: '14,800', matches: 1780, deaths: '11,128' }, r6: { rank: 'Gold', rating: 2650, kd: '0.96', wr: '46.5', hs: '32.0', kills: '1,100', matches: 180 } },
    { name: 'b1t', clan: 'NAVI', region: 'EU East', tagline: 'NAVI\'s backbone.', level: 89, hours: '7,400', verifiedType: 'pro', joinYear: 2019, cs2: { rank: 'Global Elite', rating: 26200, kd: '1.32', wr: '60.8', hs: '50.4', kills: '21,200', matches: 2560, deaths: '16,061' } },
    { name: 'degster', clan: 'SPRT', region: 'EU East', tagline: 'AWP specialist.', level: 87, hours: '6,200', verifiedType: 'id', joinYear: 2019, cs2: { rank: 'Global Elite', rating: 25800, kd: '1.36', wr: '59.2', hs: '38.6', kills: '18,400', matches: 2180, deaths: '13,529' }, r6: { rank: 'Gold', rating: 2580, kd: '0.94', wr: '45.8', hs: '31.4', kills: '950', matches: 160 } },
    { name: 'karrigan', clan: 'FAZE', region: 'EU West', tagline: 'Mastermind IGL.', level: 99, hours: '16,800', verifiedType: 'pro', joinYear: 2012, cs2: { rank: 'Supreme Master', rating: 25400, kd: '1.18', wr: '63.5', hs: '44.8', kills: '48,200', matches: 6420, deaths: '40,847' } },
    { name: 'w0nderful', clan: 'NAVI', region: 'EU East', tagline: 'Future AWPer.', level: 83, hours: '4,200', verifiedType: 'id', joinYear: 2021, cs2: { rank: 'Global Elite', rating: 25000, kd: '1.34', wr: '58.0', hs: '40.2', kills: '12,600', matches: 1520, deaths: '9,403' } },
    { name: 'Brollan', clan: 'MOUZ', region: 'EU West', tagline: 'Swedish prodigy.', level: 91, hours: '8,400', verifiedType: 'pro', joinYear: 2017, cs2: { rank: 'Global Elite', rating: 24600, kd: '1.31', wr: '57.6', hs: '52.8', kills: '28,800', matches: 3500, deaths: '21,985' } },
    // More filler players with gradually decreasing stats
    { name: 'xertioN', clan: 'MOUZ', region: 'EU East', level: 86, hours: '5,200', verifiedType: 'id', joinYear: 2020, tagline: 'Young gun.', cs2: { rank: 'Global Elite', rating: 24200, kd: '1.30', wr: '57.2', hs: '50.4', kills: '15,600', matches: 1920, deaths: '12,000' } },
    { name: 'Aleksib', clan: 'NAVI', region: 'EU West', level: 94, hours: '11,800', verifiedType: 'pro', joinYear: 2015, tagline: 'Finnish tactician.', cs2: { rank: 'Global Elite', rating: 23800, kd: '1.22', wr: '62.8', hs: '46.2', kills: '32,400', matches: 4200, deaths: '26,557' } },
    { name: 'HooXi', clan: 'G2', region: 'EU West', level: 90, hours: '8,800', verifiedType: 'pro', joinYear: 2016, tagline: 'Dane calling shots.', cs2: { rank: 'Supreme Master', rating: 23400, kd: '1.15', wr: '64.2', hs: '42.8', kills: '24,600', matches: 3380, deaths: '21,391' } },
    { name: 'hallzerk', clan: 'TL', region: 'EU West', level: 85, hours: '5,800', verifiedType: 'id', joinYear: 2019, tagline: 'Norwegian AWPer.', cs2: { rank: 'Global Elite', rating: 23000, kd: '1.32', wr: '56.8', hs: '36.4', kills: '16,200', matches: 1980, deaths: '12,273' } },
    { name: 'Jimpphat', clan: 'MOUZ', region: 'EU West', level: 82, hours: '4,000', verifiedType: null, joinYear: 2021, tagline: 'Youngest pro.', cs2: { rank: 'Global Elite', rating: 22600, kd: '1.29', wr: '56.4', hs: '49.8', kills: '11,800', matches: 1460, deaths: '9,147' } },
    // R6 extras
    { name: 'Bosco', clan: 'SSG', region: 'NA East', level: 93, hours: '10,200', verifiedType: 'pro', joinYear: 2017, tagline: 'SSG anchor.', r6: { rank: 'Champion', rating: 5340, kd: '1.44', wr: '64.2', hs: '44.8', kills: '22,180', matches: 2780, deaths: '15,403' } },
    { name: 'Virtue', clan: 'DRK', region: 'Oceania', level: 90, hours: '8,800', verified: false, joinYear: 2018, tagline: 'APAC beast.', cs2: { rank: 'Master Guardian', rating: 13800, kd: '1.02', wr: '48.4', hs: '38.0', kills: '5,200', matches: 820, deaths: '5,098' }, r6: { rank: 'Champion', rating: 5280, kd: '1.48', wr: '63.8', hs: '46.2', kills: '18,420', matches: 2280, deaths: '12,446' } },
    { name: 'Spoit', clan: 'VP', region: 'EU West', level: 80, hours: '3,600', verified: false, joinYear: 2022, tagline: 'Young demon.', cs2: { rank: 'Legendary Eagle', rating: 18800, kd: '1.22', wr: '53.4', hs: '46.0', kills: '8,400', matches: 1100, deaths: '6,885' }, r6: { rank: 'Champion', rating: 5220, kd: '1.62', wr: '66.4', hs: '53.8', kills: '14,280', matches: 1680, deaths: '8,815' } },
    { name: 'Panix', clan: 'BDS', region: 'EU West', level: 91, hours: '9,200', verified: false, joinYear: 2017, tagline: 'French support.', cs2: { rank: 'Distinguished Master Guardian', rating: 15400, kd: '1.08', wr: '49.8', hs: '40.4', kills: '6,600', matches: 980, deaths: '6,111' }, r6: { rank: 'Diamond', rating: 5160, kd: '1.38', wr: '62.8', hs: '43.4', kills: '20,840', matches: 2640, deaths: '15,101' } },
    { name: 'Yass', clan: 'W7M', region: 'South America', level: 88, hours: '7,200', verified: false, joinYear: 2019, tagline: 'LATAM rising star.', cs2: { rank: 'Master Guardian', rating: 13400, kd: '1.00', wr: '48.0', hs: '37.4', kills: '4,800', matches: 780, deaths: '4,800' }, r6: { rank: 'Diamond', rating: 5100, kd: '1.42', wr: '62.2', hs: '45.8', kills: '16,680', matches: 2120, deaths: '11,746' } },
  ];
  // Combine and fill to 60 with more filler
  const base = [...cs2Pros, ...r6Pros, ...morePlayers];
  // Generate remaining filler players
  const fillerNames = ['fl0m', 'stewie2k', 'autimatic', 'RUSH', 'tarik', 'nitr0', 'coldzera', 'FalleN', 'fer', 'YEKINDAR', 'blameF', 'Snappi', 'xsepower', 'siuhy', 'torzsi', 'kyxsan', 'cadiaN', 'gla1ve', 'dupreeh', 'Xyp9x'];
  const regions = ['EU West', 'EU East', 'NA East', 'NA West', 'Asia', 'South America'];
  for (let i = base.length; i < 60; i++) {
    const nm = fillerNames[i - base.length] || ('Player' + i);
    const kd = (0.92 + Math.random() * 0.5).toFixed(2);
    const wr = (46 + Math.random() * 18).toFixed(1);
    const hs = (32 + Math.random() * 22).toFixed(1);
    const matches = Math.floor(800 + Math.random() * 4000);
    const kills = Math.floor(matches * parseFloat(kd) * 12);
    const rat = Math.floor(16000 + Math.random() * 8000);
    base.push({
      name: nm, clan: ['TL', 'FAZE', 'NAVI', 'C9', 'G2', 'MIBR', 'LOUD', 'NRG'][Math.floor(Math.random() * 8)],
      region: regions[Math.floor(Math.random() * regions.length)],
      tagline: ['Born to frag.', 'Clutch or kick.', 'One tap.', 'GG EZ.', 'No mercy.'][Math.floor(Math.random() * 5)],
      level: Math.floor(60 + Math.random() * 35), hours: Math.floor(2000 + Math.random() * 8000).toLocaleString(),
      verifiedType: Math.random() < 0.1 ? 'id' : null, joinYear: 2014 + Math.floor(Math.random() * 10),
      cs2: { rank: 'Global Elite', rating: rat, kd, wr, hs, kills: kills.toLocaleString(), matches, deaths: Math.floor(kills / parseFloat(kd)).toLocaleString() },
      r6: { rank: ['Gold', 'Platinum', 'Diamond'][Math.floor(Math.random() * 3)], rating: Math.floor(2000 + Math.random() * 2500), kd: (parseFloat(kd) - 0.1).toFixed(2), wr: (parseFloat(wr) - 3).toFixed(1), hs: (parseFloat(hs) - 4).toFixed(1), kills: Math.floor(kills * 0.5).toLocaleString(), matches: Math.floor(matches * 0.4) }
    });
  }
  // Add ShadowVex as first entry, shift everything
  const shadowVex = {
    name: 'ShadowVex', clan: 'CYB', region: 'EU West', tagline: 'Tactical precision. Zero mercy.', level: 87, hours: '4,200', verifiedType: 'pro', joinYear: 2018,
    cs2: { rank: 'Global Elite', rating: 24850, kd: '1.42', wr: '58.2', hs: '52.8', kills: '18,432', matches: 2847, deaths: '12,979' },
    r6: { rank: 'Champion', rating: 5420, kd: '1.38', wr: '61.4', hs: '46.7', kills: '14,821', matches: 2143 }
  };
  base.unshift(shadowVex);
  // Assign IDs and initials
  return base.slice(0, 60).map((p, i) => ({ ...p, id: i, initial: p.name[0].toUpperCase() }));
}

function getVerifiedBadge(p, isLarge = false) {
  if (p.verifiedType === 'pro') return `<span title="Official Pro" style="color:var(--accent-1);margin-left:.3rem;font-size:${isLarge ? '1.2rem' : '.8rem'};vertical-align:middle;">🛡️</span>`;
  if (p.verifiedType === 'id') return `<span title="ID Verified" style="color:var(--win);margin-left:.3rem;font-size:${isLarge ? '1.2rem' : '.8rem'};vertical-align:middle;">✅</span>`;
  return '';
}

// Original game data for profile pages
const PROFILE_GAME_DATA = {
  cs2: {
    banner: 'assets/cs2_banner.png',
    rank: { label: 'Premier Rating', value: '24,850', progress: 85, sublabel: 'Top 0.3% · 150 pts to next tier', icon: '★', secondary: [{ icon: '🏅', label: 'Wingman', value: 'Global Elite' }, { icon: '⚔️', label: 'Win Streak', value: '7 Games' }] },
    season: 'Season 2026 — Act 1',
    stats: [
      { icon: '🎯', value: 1.42, label: 'K/D Ratio', trend: '+2.3%', fill: 71 },
      { icon: '💀', value: 18432, label: 'Total Kills', trend: '+180', fill: 92 },
      { icon: '🏆', value: 58.2, label: 'Win Rate %', trend: '+1.8%', fill: 58 },
      { icon: '💥', value: 52.8, label: 'Headshot %', trend: '+0.5%', fill: 53 },
      { icon: '⏱️', value: 1.12, label: 'ADR', fill: 56 },
      { icon: '🎖️', value: 2847, label: 'Matches Played', fill: 85 }
    ],
    weapons: [
      { rank: 1, name: 'AK-47', kills: '6,248', hs: '58.3%', acc: '24.1%', usage: 100 },
      { rank: 2, name: 'AWP', kills: '4,122', hs: '12.1%', acc: '42.8%', usage: 66 },
      { rank: 3, name: 'M4A1-S', kills: '3,891', hs: '49.7%', acc: '28.3%', usage: 62 },
      { rank: 4, name: 'Desert Eagle', kills: '2,310', hs: '63.2%', acc: '31.5%', usage: 37 }
    ],
    maps: [
      { name: 'Dust II', wr: 68, games: 342 }, { name: 'Mirage', wr: 62, games: 298 },
      { name: 'Inferno', wr: 57, games: 261 }, { name: 'Nuke', wr: 54, games: 189 },
      { name: 'Anubis', wr: 51, games: 154 }
    ],
    matches: [
      { result: 'W', map: 'Dust II', score: '16 – 9', kda: '28 / 14 / 6', rating: '1.42', time: '2 hours ago' },
      { result: 'W', map: 'Mirage', score: '13 – 8', kda: '22 / 16 / 4', rating: '1.18', time: '4 hours ago' },
      { result: 'L', map: 'Inferno', score: '11 – 13', kda: '19 / 21 / 3', rating: '0.87', time: '6 hours ago' },
      { result: 'W', map: 'Nuke', score: '13 – 10', kda: '25 / 18 / 8', rating: '1.21', time: 'Yesterday' },
      { result: 'W', map: 'Anubis', score: '13 – 6', kda: '30 / 11 / 5', rating: '1.56', time: 'Yesterday' }
    ]
  },
  r6: {
    banner: 'assets/r6_banner.png',
    rank: { label: 'Ranked 2.0 Rating', value: '5,420', progress: 92, sublabel: 'Champion · Top 500', icon: '♛', secondary: [{ icon: '��', label: 'Peak Rank', value: 'Champion #124' }, { icon: '🔥', label: 'Win Streak', value: '5 Games' }] },
    season: 'Year 11 — Season 1',
    stats: [
      { icon: '🎯', value: 1.38, label: 'K/D Ratio', trend: '+0.8%', fill: 69 },
      { icon: '💀', value: 14821, label: 'Total Kills', trend: '+240', fill: 88 },
      { icon: '🏆', value: 61.4, label: 'Win Rate %', trend: '+2.1%', fill: 61 },
      { icon: '💥', value: 46.7, label: 'Headshot %', trend: '+1.2%', fill: 47 },
      { icon: '🛡️', value: 0.78, label: 'KOST %', fill: 78 },
      { icon: '🎖️', value: 2143, label: 'Matches Played', fill: 80 }
    ],
    operators: [
      { side: 'ATK', icon: '⚡', name: 'Ash', hours: '182 hrs', kd: '1.52', win: '64%', kills: '2,841' },
      { side: 'ATK', icon: '🔍', name: 'Twitch', hours: '148 hrs', kd: '1.41', win: '59%', kills: '2,214' },
      { side: 'DEF', icon: '🧪', name: 'Jäger', hours: '201 hrs', kd: '1.61', win: '62%', kills: '3,102' },
      { side: 'DEF', icon: '📡', name: 'Valkyrie', hours: '134 hrs', kd: '1.29', win: '57%', kills: '1,843' }
    ],
    maps: [
      { name: 'Clubhouse', wr: 71, games: 186 }, { name: 'Oregon', wr: 65, games: 172 },
      { name: 'Kafe', wr: 59, games: 148 }, { name: 'Chalet', wr: 56, games: 131 },
      { name: 'Border', wr: 53, games: 119 }
    ],
    matches: [
      { result: 'W', map: 'Clubhouse', score: '5 – 3', kda: '11 / 4 / 3', rating: '1.68', time: '1 hour ago' },
      { result: 'W', map: 'Oregon', score: '5 – 4', kda: '9 / 6 / 2', rating: '1.22', time: '3 hours ago' },
      { result: 'L', map: 'Kafe', score: '3 – 5', kda: '7 / 8 / 1', rating: '0.79', time: '5 hours ago' },
      { result: 'W', map: 'Chalet', score: '5 – 2', kda: '12 / 5 / 4', rating: '1.45', time: 'Yesterday' },
      { result: 'W', map: 'Border', score: '5 – 1', kda: '14 / 3 / 6', rating: '1.82', time: 'Yesterday' }
    ]
  }
};

// ===== AUTH MODULE =====
const Auth = {
  getUser() { try { return JSON.parse(localStorage.getItem('ph_user')); } catch { return null; } },
  setUser(u) { localStorage.setItem('ph_user', JSON.stringify(u)); },
  logout() { localStorage.removeItem('ph_user'); },
  isLoggedIn() { return !!this.getUser(); },
  signUp(username, email, password) {
    if (!username || username.length < 3) return { ok: false, msg: 'Username must be 3+ characters' };
    if (!email || !email.includes('@')) return { ok: false, msg: 'Invalid email address' };
    if (!password || password.length < 6) return { ok: false, msg: 'Password must be 6+ characters' };
    const users = JSON.parse(localStorage.getItem('ph_users') || '[]');
    if (users.find(u => u.email === email)) return { ok: false, msg: 'Email already registered' };
    if (users.find(u => u.username === username)) return { ok: false, msg: 'Username taken' };
    const user = { id: Date.now(), username, email, initial: username[0].toUpperCase(), joinDate: new Date().toISOString(), avatar: null, tagline: 'New to PLAYERHUB', games: ['cs2', 'r6'], accentColor: '#f59e0b' };
    users.push({ ...user, password });
    localStorage.setItem('ph_users', JSON.stringify(users));
    this.setUser(user);
    return { ok: true, user };
  },
  signIn(email, password) {
    const users = JSON.parse(localStorage.getItem('ph_users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return { ok: false, msg: 'Invalid email or password' };
    const { password: _, ...user } = found;
    this.setUser(user);
    return { ok: true, user };
  },
  updateUser(updates) {
    const user = this.getUser();
    if (!user) return;
    const updated = { ...user, ...updates };
    this.setUser(updated);
    const users = JSON.parse(localStorage.getItem('ph_users') || '[]');
    const idx = users.findIndex(u => u.id === user.id);
    if (idx >= 0) { users[idx] = { ...users[idx], ...updates }; localStorage.setItem('ph_users', JSON.stringify(users)); }
    return updated;
  }
};

// ===== TOAST SYSTEM =====
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-msg">${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  container.appendChild(toast);
  setTimeout(() => { if (toast.parentElement) toast.remove(); }, 4000);
}

// ===== ROUTER =====
const Router = {
  routes: {},
  register(path, handler) { this.routes[path] = handler; },
  navigate(hash) {
    window.location.hash = hash;
  },
  getCurrentRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const parts = hash.split('/');
    return { page: parts[0], param: parts[1] || null };
  },
  init() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  },
  resolve() {
    const { page, param } = this.getCurrentRoute();
    const app = document.getElementById('app');
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.dataset.page === page);
    });
    // Close mobile menu
    document.getElementById('mobileMenu')?.classList.remove('active');
    // Render page
    const handler = this.routes[page];
    if (handler) {
      app.innerHTML = '';
      app.innerHTML = handler(param);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      afterRender(page, param);
    } else {
      app.innerHTML = render404();
      window.scrollTo({ top: 0 });
    }
  }
};

// ===== RENDER FUNCTIONS =====
function renderNavActions() {
  const el = document.getElementById('navActions');
  const mobileAuth = document.getElementById('mobileAuth');
  if (Auth.isLoggedIn()) {
    const user = Auth.getUser();
    el.innerHTML = `
      <div class="user-dropdown" id="userDropdown">
        <button class="user-avatar-btn" id="userAvatarBtn">${user.initial}</button>
        <div class="user-dropdown-menu" id="userDropdownMenu">
          <div style="padding:.8rem;border-bottom:1px solid var(--glass-border)">
            <div style="font-weight:700;font-size:.88rem">${user.username}</div>
            <div style="font-size:.72rem;color:var(--text-muted)">${user.email}</div>
          </div>
          <button class="dropdown-item" onclick="Router.navigate('#profile/0')">👤 My Profile</button>
          <button class="dropdown-item" onclick="Router.navigate('#settings')">⚙️ Settings</button>
          <div class="dropdown-sep"></div>
          <button class="dropdown-item" onclick="handleLogout()" style="color:var(--loss)">🚪 Sign Out</button>
        </div>
      </div>`;
    if (mobileAuth) mobileAuth.innerHTML = `<button class="btn btn-ghost" style="width:100%;margin-top:1rem" onclick="handleLogout()">Sign Out</button>`;
  } else {
    el.innerHTML = `<button class="btn btn-ghost" onclick="openAuthModal('signin')">Sign In</button><button class="btn btn-primary" onclick="openAuthModal('signup')">Sign Up</button>`;
    if (mobileAuth) mobileAuth.innerHTML = `<button class="btn btn-ghost" style="width:100%;margin-top:1rem" onclick="openAuthModal('signin')">Sign In</button><button class="btn btn-primary" style="width:100%;margin-top:.5rem" onclick="openAuthModal('signup')">Sign Up</button>`;
  }
}

function handleLogout() {
  Auth.logout();
  renderNavActions();
  showToast('Signed out successfully', 'info');
  Router.navigate('#home');
}

// ===== AUTH MODAL =====
function openAuthModal(mode = 'signin') {
  const modal = document.getElementById('authModal');
  const container = document.getElementById('authContainer');
  modal.classList.add('active');
  renderAuthForm(container, mode);
}
function closeAuthModal() {
  document.getElementById('authModal').classList.remove('active');
}
document.getElementById('authModalClose').addEventListener('click', closeAuthModal);
document.getElementById('authModal').addEventListener('click', (e) => { if (e.target.id === 'authModal') closeAuthModal(); });

function renderAuthForm(container, mode) {
  if (mode === 'signup') {
    container.innerHTML = `
      <h2 class="auth-title">CREATE ACCOUNT</h2>
      <p class="auth-subtitle">Join 248,000+ players tracking their stats</p>
      <form class="auth-form" id="signupForm">
        <div class="form-group">
          <label class="form-label">Username</label>
          <input class="form-input" type="text" id="signupUsername" placeholder="Choose a username" required minlength="3">
          <div class="form-error" id="signupUsernameErr"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" type="email" id="signupEmail" placeholder="your@email.com" required>
          <div class="form-error" id="signupEmailErr"></div>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input class="form-input" type="password" id="signupPassword" placeholder="Min 6 characters" required minlength="6">
          <div class="password-strength"><div class="password-strength-bar" id="pwStrengthBar"></div></div>
        </div>
        <div class="form-group">
          <label class="form-label">Confirm Password</label>
          <input class="form-input" type="password" id="signupConfirm" placeholder="Repeat password" required>
          <div class="form-error" id="signupConfirmErr"></div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Create Account</button>
      </form>
      <div class="auth-divider">or continue with</div>
      <div class="social-btns">
        <button class="social-btn">🎮 Steam</button>
        <button class="social-btn">💬 Discord</button>
        <button class="social-btn">🔍 Google</button>
      </div>
      <p class="auth-footer">Already have an account? <a href="#" onclick="event.preventDefault();renderAuthForm(document.getElementById('authContainer'),'signin')">Sign In</a></p>`;
    // Password strength
    document.getElementById('signupPassword')?.addEventListener('input', (e) => {
      const bar = document.getElementById('pwStrengthBar');
      const v = e.target.value;
      let s = 0; if (v.length >= 6) s++; if (v.length >= 10) s++; if (/[A-Z]/.test(v)) s++; if (/[0-9]/.test(v)) s++; if (/[^A-Za-z0-9]/.test(v)) s++;
      const colors = ['var(--loss)', 'var(--loss)', 'var(--draw)', 'var(--win)', 'var(--win)', 'var(--win)'];
      bar.style.width = (s * 20) + '%'; bar.style.background = colors[s];
    });
    document.getElementById('signupForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const pw = document.getElementById('signupPassword').value;
      const cpw = document.getElementById('signupConfirm').value;
      if (pw !== cpw) { showFormError('signupConfirmErr', 'Passwords do not match'); return; }
      const res = Auth.signUp(document.getElementById('signupUsername').value, document.getElementById('signupEmail').value, pw);
      if (res.ok) { closeAuthModal(); renderNavActions(); showToast('Account created! Welcome to PLAYERHUB', 'success'); Router.navigate('#home'); }
      else { showToast(res.msg, 'error'); }
    });
  } else {
    container.innerHTML = `
      <h2 class="auth-title">WELCOME BACK</h2>
      <p class="auth-subtitle">Sign in to your PLAYERHUB account</p>
      <form class="auth-form" id="signinForm">
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" type="email" id="signinEmail" placeholder="your@email.com" required>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input class="form-input" type="password" id="signinPassword" placeholder="Enter your password" required>
        </div>
        <div class="form-row mb-2">
          <label class="form-check"><input type="checkbox" checked> Remember me</label>
          <a href="#" class="form-forgot">Forgot password?</a>
        </div>
        <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Sign In</button>
      </form>
      <div class="auth-divider">or continue with</div>
      <div class="social-btns">
        <button class="social-btn">🎮 Steam</button>
        <button class="social-btn">💬 Discord</button>
        <button class="social-btn">🔍 Google</button>
      </div>
      <p class="auth-footer">Don't have an account? <a href="#" onclick="event.preventDefault();renderAuthForm(document.getElementById('authContainer'),'signup')">Sign Up</a></p>`;
    document.getElementById('signinForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const res = Auth.signIn(document.getElementById('signinEmail').value, document.getElementById('signinPassword').value);
      if (res.ok) { closeAuthModal(); renderNavActions(); showToast('Welcome back, ' + res.user.username + '!', 'success'); Router.navigate('#home'); }
      else { showToast(res.msg, 'error'); }
    });
  }
}
function showFormError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('visible'); setTimeout(() => el.classList.remove('visible'), 3000); }
}

// ===== PAGE RENDERERS =====

function renderHome() {
  const top5 = [...PLAYER_DB].sort((a, b) => b.cs2.rating - a.cs2.rating).slice(0, 8);
  const lb = [...PLAYER_DB].sort((a, b) => b.cs2.rating - a.cs2.rating).slice(0, 10);
  return `
    <section class="hero">
      <div class="hero-bg"><img src="assets/hero_banner.png" alt=""><div class="hero-bg-overlay"></div></div>
      <div class="hero-content">
        <div class="hero-badge">⬡ #1 TRUSTED TRACKER</div>
        <h1 class="hero-title"><span class="gradient-text">TRACK. COMPETE.<br>DOMINATE.</span></h1>
        <p class="hero-subtitle">The ultimate gaming stats platform. Track your competitive performance across Counter-Strike 2 and Rainbow Six Siege with real-time analytics.</p>
        <div class="hero-search">
          <input type="text" class="hero-search-input" id="heroSearchInput" placeholder="Search for a player...">
          <button class="hero-search-btn" onclick="doHeroSearch()">SEARCH</button>
        </div>
        <div class="hero-tickers">
          <div class="hero-ticker"><span class="hero-ticker-val" data-counter="248391">0</span><span class="hero-ticker-lbl">Players Tracked</span></div>
          <div class="hero-ticker"><span class="hero-ticker-val" data-counter="1847205">0</span><span class="hero-ticker-lbl">Matches Recorded</span></div>
          <div class="hero-ticker"><span class="hero-ticker-val" data-counter="2">0</span><span class="hero-ticker-lbl">Games Supported</span></div>
        </div>
      </div>
    </section>

    <div class="game-cards">
      <a href="#cs2" class="game-card">
        <div class="game-card-bg"><img src="assets/cs2_card.png" alt="CS2"><div class="game-card-overlay"></div></div>
        <div class="game-card-content">
          <div class="game-card-icon">🔫</div>
          <div class="game-card-title">COUNTER-STRIKE 2</div>
          <div class="game-card-desc">Track your Premier rating, weapon stats, and match history</div>
          <div class="game-card-stats">
            <span class="game-card-stat"><strong>148K</strong>Players</span>
            <span class="game-card-stat"><strong>1.2M</strong>Matches</span>
          </div>
        </div>
      </a>
      <a href="#r6" class="game-card">
        <div class="game-card-bg"><img src="assets/r6_card.png" alt="R6"><div class="game-card-overlay"></div></div>
        <div class="game-card-content">
          <div class="game-card-icon">🛡️</div>
          <div class="game-card-title">RAINBOW SIX SIEGE</div>
          <div class="game-card-desc">Monitor your ranked rating, operator stats, and strategies</div>
          <div class="game-card-stats">
            <span class="game-card-stat"><strong>100K</strong>Players</span>
            <span class="game-card-stat"><strong>647K</strong>Matches</span>
          </div>
        </div>
      </a>
    </div>

    <div class="section">
      <div class="section-header">
        <div><h2 class="section-title">FEATURED PLAYERS</h2><p class="section-subtitle">Top-ranked competitors this season</p></div>
        <a href="#leaderboards" class="btn btn-ghost btn-sm">View All →</a>
      </div>
      <div class="featured-grid">
        ${top5.map(p => `
          <a href="#profile/${p.id}" class="player-card">
            <div class="player-card-avatar">${p.initial}<div class="player-card-rank-badge">#${PLAYER_DB.indexOf(p) + 1}</div></div>
            <div class="player-card-name">${p.name}${getVerifiedBadge(p)}</div>
            <div class="player-card-tag">[${p.clan}] · ${p.region}</div>
            <div class="player-card-stats">
              <div class="pcs-item"><span class="pcs-val">${p.cs2.kd}</span><span class="pcs-lbl">K/D</span></div>
              <div class="pcs-item"><span class="pcs-val">${p.cs2.wr}%</span><span class="pcs-lbl">Win</span></div>
              <div class="pcs-item"><span class="pcs-val">${p.cs2.hs}%</span><span class="pcs-lbl">HS</span></div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <div><h2 class="section-title">LEADERBOARD</h2><p class="section-subtitle">CS2 Premier Rating — Top 10</p></div>
        <a href="#leaderboards" class="btn btn-ghost btn-sm">Full Rankings →</a>
      </div>
      <div class="lb-widget">
        <div class="lb-header"><span class="lb-title">CS2 — PREMIER</span><span class="section-badge">LIVE</span></div>
        ${lb.map((p, i) => {
    const posClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const rowClass = i < 3 ? 'podium-' + (i + 1) : '';
    return `<a href="#profile/${p.id}" class="lb-row ${rowClass}">
            <span class="lb-pos ${posClass}">${i + 1}</span>
            <span class="lb-avatar">${p.initial}</span>
            <span class="lb-name">${p.name}${getVerifiedBadge(p)}</span>
            <span class="lb-stat">${p.cs2.rating.toLocaleString()}</span>
            <span class="lb-region">${p.region}</span>
          </a>`;
  }).join('')}
      </div>
    </div>`;
}

function renderSearch(param) {
  const q = param ? decodeURIComponent(param) : '';
  let results = PLAYER_DB;
  if (q) results = PLAYER_DB.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  return `
    <div class="search-page">
      <div class="search-hero">
        <h1 class="search-hero-title">FIND PLAYERS</h1>
        <p class="search-hero-sub">Search through 248,000+ tracked players</p>
        <div class="search-bar-lg">
          <input type="text" id="searchPageInput" placeholder="Enter player name..." value="${q}">
          <button onclick="doPageSearch()">SEARCH</button>
        </div>
      </div>
      <div class="section">
        <div class="section-header">
          <div class="filters-bar">
            <select class="filter-select" id="filterGame"><option value="all">All Games</option><option value="cs2">CS2</option><option value="r6">R6 Siege</option></select>
            <select class="filter-select" id="filterRegion"><option value="all">All Regions</option><option>EU West</option><option>EU East</option><option>NA East</option><option>NA West</option><option>Asia</option></select>
            <select class="filter-select" id="filterSort"><option value="rating">Rating</option><option value="kd">K/D</option><option value="wr">Win Rate</option></select>
          </div>
        </div>
        <div class="search-results-count">${results.length} players found${q ? ' for "' + q + '"' : ''}</div>
        <div class="search-results-grid">
          ${results.map(p => `
            <a href="#profile/${p.id}" class="player-card">
              <div class="player-card-avatar">${p.initial}</div>
              <div class="player-card-name">${p.name}${getVerifiedBadge(p)}</div>
              <div class="player-card-tag">[${p.clan}] · ${p.region}</div>
              <div class="player-card-stats">
                <div class="pcs-item"><span class="pcs-val">${p.cs2.kd}</span><span class="pcs-lbl">K/D</span></div>
                <div class="pcs-item"><span class="pcs-val">${p.cs2.wr}%</span><span class="pcs-lbl">Win</span></div>
                <div class="pcs-item"><span class="pcs-val">${p.cs2.rank}</span><span class="pcs-lbl">Rank</span></div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>`;
}

function renderLeaderboards() {
  const cs2Lb = [...PLAYER_DB].filter(p => p.cs2).sort((a, b) => b.cs2.rating - a.cs2.rating);
  const r6Lb = [...PLAYER_DB].filter(p => p.r6).sort((a, b) => b.r6.rating - a.r6.rating);
  return `
    <div class="section" style="padding-top:2rem">
      <div class="section-header">
        <div><h1 class="section-title" style="font-size:1.4rem">LEADERBOARDS</h1><p class="section-subtitle">Global competitive rankings</p></div>
        <div class="tabs" id="lbTabs">
          <button class="tab-btn active" data-lb="cs2" onclick="switchLbTab('cs2')">🔫 CS2</button>
          <button class="tab-btn" data-lb="r6" onclick="switchLbTab('r6')">🛡️ R6 Siege</button>
        </div>
      </div>

      <div id="lbCS2" class="lb-tab-content">
        <div class="lb-widget">
          <div class="lb-header">
            <span class="lb-title">CS2 PREMIER RATING</span>
            <div class="filters-bar">
              <select class="filter-select"><option>All Regions</option><option>EU West</option><option>NA East</option></select>
            </div>
          </div>
          ${cs2Lb.map((p, i) => {
    const posClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const rowClass = i < 3 ? 'podium-' + (i + 1) : '';
    return `<a href="#profile/${p.id}" class="lb-row ${rowClass}">
              <span class="lb-pos ${posClass}">${i + 1}</span>
              <span class="lb-avatar">${p.initial}</span>
              <span class="lb-name">${p.name}${getVerifiedBadge(p)}</span>
              <span class="lb-stat" style="color:var(--cs2-accent)">${p.cs2.rating.toLocaleString()}</span>
              <span class="lb-stat">${p.cs2.kd}</span>
              <span class="lb-stat">${p.cs2.wr}%</span>
              <span class="lb-region">${p.region}</span>
            </a>`;
  }).join('')}
        </div>
      </div>

      <div id="lbR6" class="lb-tab-content" style="display:none">
        <div class="lb-widget">
          <div class="lb-header">
            <span class="lb-title">R6 SIEGE RANKED RATING</span>
            <div class="filters-bar">
              <select class="filter-select"><option>All Regions</option><option>EU West</option><option>NA East</option></select>
            </div>
          </div>
          ${r6Lb.map((p, i) => {
    const posClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const rowClass = i < 3 ? 'podium-' + (i + 1) : '';
    return `<a href="#profile/${p.id}" class="lb-row ${rowClass}">
              <span class="lb-pos ${posClass}">${i + 1}</span>
              <span class="lb-avatar r6-avatar">${p.initial}</span>
              <span class="lb-name">${p.name}${getVerifiedBadge(p)}</span>
              <span class="lb-stat" style="color:var(--r6-accent)">${p.r6.rating.toLocaleString()}</span>
              <span class="lb-stat">${p.r6.kd}</span>
              <span class="lb-stat">${p.r6.wr}%</span>
              <span class="lb-region">${p.region}</span>
            </a>`;
  }).join('')}
        </div>
      </div>
    </div>`;
}

function renderProfile(playerId) {
  const pid = parseInt(playerId) || 0;
  const player = PLAYER_DB[pid];
  if (!player) return render404();
  const isMain = pid === 0;
  const gd = isMain ? PROFILE_GAME_DATA : null;
  const achievements = ['🏆 Season Champion', '⚡ 10 Kill Streak', '🎯 Ace Master', '💀 500 Headshots', '🔥 7 Win Streak', '🛡️ MVP x100'];
  return `
    <header class="profile-header">
      <div class="header-banner" id="headerBanner">
        <img src="${isMain ? 'assets/cs2_banner.png' : 'assets/cs2_card.png'}" alt="Banner" class="banner-img" id="bannerImg">
        <div class="banner-overlay"></div>
      </div>
      <div class="header-content">
        <div class="avatar-wrapper">
          <div class="avatar-img" style="background:linear-gradient(135deg,var(--accent-1),var(--accent-2));display:flex;align-items:center;justify-content:center;font-size:3rem;font-weight:800;color:#000;width:130px;height:130px;border-radius:50%;border:4px solid var(--bg-primary);box-shadow:0 0 30px rgba(0,0,0,.6)">${player.initial}</div>
          <div class="avatar-ring"></div>
          <div class="level-badge">${player.level}</div>
        </div>
        <div class="player-info">
          <div class="player-name-row">
            <h1 class="player-name">${player.name}</h1>
            ${getVerifiedBadge(player, true)}
            <span class="clan-tag">[${player.clan}]</span>
          </div>
          <p class="player-tagline">${player.tagline}</p>
          <div class="player-meta">
            <span class="meta-item">🌍 ${player.region}</span>
            <span class="meta-item">🕐 ${player.hours}+ hrs</span>
            <span class="meta-item">🏆 ${player.cs2 ? player.cs2.rank : (player.r6 ? player.r6.rank : 'Unranked')}</span>
            <span class="meta-item">📅 Since ${player.joinYear}</span>
          </div>
        </div>
        <div class="profile-actions">
          <button class="btn btn-outline btn-sm">+ Follow</button>
          <button class="btn btn-ghost btn-sm">⇵ Compare</button>
          <button class="btn btn-ghost btn-sm">↗ Share</button>
        </div>
      </div>
    </header>

    <section class="section achievements-section">
      <div class="section-header"><h2 class="section-title">ACHIEVEMENTS</h2></div>
      <div class="achievements-row">
        ${achievements.map(a => `<div class="achievement"><span class="achievement-icon">${a.split(' ')[0]}</span><span class="achievement-name">${a.split(' ').slice(1).join(' ')}</span></div>`).join('')}
      </div>
    </section>

    ${isMain ? renderMainProfileGame() : renderGenericProfileStats(player)}`;
}

function renderMainProfileGame() {
  return `
    <section class="game-selector">
      <div class="game-tabs">
        <button class="game-tab active" data-game="cs2" id="tabCS2" onclick="switchProfileGame('cs2')">
          <span class="tab-icon">🔫</span><span class="tab-label">Counter-Strike 2</span><span class="tab-rank">Global Elite</span>
        </button>
        <button class="game-tab" data-game="r6" id="tabR6" onclick="switchProfileGame('r6')">
          <span class="tab-icon">🛡️</span><span class="tab-label">Rainbow Six Siege</span><span class="tab-rank">Champion</span>
        </button>
      </div>
    </section>
    <div id="cs2Content" class="game-content active"></div>
    <div id="r6Content" class="game-content"></div>`;
}

function renderGenericProfileStats(p) {
  let html = `<section class="game-selector"><div class="game-tabs">`;
  if (p.cs2) html += `<button class="game-tab active" data-game="cs2"><span class="tab-icon">🔫</span><span class="tab-label">Counter-Strike 2</span><span class="tab-rank">${p.cs2.rank}</span></button>`;
  if (p.r6) html += `<button class="game-tab ${p.cs2 ? '' : 'active'}" data-game="r6"><span class="tab-icon">🛡️</span><span class="tab-label">Rainbow Six Siege</span><span class="tab-rank">${p.r6.rank}</span></button>`;
  html += `</div></section>`;

  if (p.cs2) {
    html += `
    <div class="section ${p.cs2 ? 'active' : ''}">
      <div class="section-header"><h2 class="section-title">CS2 PERFORMANCE</h2><span class="section-badge">SEASON 2026</span></div>
      <div class="stats-grid">
        ${[{ i: '🎯', v: p.cs2.kd, l: 'K/D Ratio', f: p.cs2.kd * 50 }, { i: '🏆', v: p.cs2.wr + '%', l: 'Win Rate', f: p.cs2.wr }, { i: '💥', v: p.cs2.hs + '%', l: 'Headshot %', f: p.cs2.hs }, { i: '💀', v: p.cs2.kills, l: 'Total Kills', f: 85 }, { i: '🎖️', v: p.cs2.matches, l: 'Matches', f: 70 }, { i: '📊', v: p.cs2.rating.toLocaleString(), l: 'Rating', f: p.cs2.rating / 300 }].map(s => `
          <div class="stat-card"><div class="stat-header"><span class="stat-icon">${s.i}</span></div><span class="stat-value">${s.v}</span><span class="stat-label">${s.l}</span><div class="stat-bar"><div class="stat-fill" style="width:${Math.min(100, s.f)}%"></div></div></div>
        `).join('')}
      </div>
    </div>`;
  }
  if (p.r6) {
    html += `
    <div class="section ${!p.cs2 ? 'active' : ''}">
      <div class="section-header"><h2 class="section-title">R6 SIEGE PERFORMANCE</h2><span class="section-badge r6-badge" style="color:var(--r6-accent);border-color:rgba(59,130,246,.3);background:rgba(59,130,246,.08)">YEAR 11</span></div>
      <div class="stats-grid">
        ${[{ i: '🎯', v: p.r6.kd, l: 'K/D Ratio', f: p.r6.kd * 50 }, { i: '🏆', v: p.r6.wr + '%', l: 'Win Rate', f: p.r6.wr }, { i: '💥', v: p.r6.hs + '%', l: 'Headshot %', f: p.r6.hs }, { i: '💀', v: p.r6.kills, l: 'Total Kills', f: 80 }, { i: '🎖️', v: p.r6.matches, l: 'Matches', f: 65 }, { i: '📊', v: p.r6.rating.toLocaleString(), l: 'Rating', f: p.r6.rating / 60 }].map(s => `
          <div class="stat-card r6-stat"><div class="stat-header"><span class="stat-icon">${s.i}</span></div><span class="stat-value">${s.v}</span><span class="stat-label">${s.l}</span><div class="stat-bar"><div class="stat-fill r6-fill" style="width:${Math.min(100, s.f)}%"></div></div></div>
        `).join('')}
      </div>
    </div>`;
  }
  return html;
}

function renderGameOverview(game) {
  const isR6 = game === 'r6';
  const title = isR6 ? 'RAINBOW SIX SIEGE' : 'COUNTER-STRIKE 2';
  const icon = isR6 ? '🛡️' : '🔫';
  const desc = isR6 ? 'Tactical team-based shooter. Track your operator stats, ranked rating, and match performance.' : 'The ultimate competitive FPS. Track your Premier rating, weapon mastery, and match history.';
  const cardImg = isR6 ? 'assets/r6_card.png' : 'assets/cs2_card.png';
  const topPlayers = [...PLAYER_DB].filter(p => isR6 ? p.r6 : p.cs2).sort((a, b) => isR6 ? b.r6.rating - a.r6.rating : b.cs2.rating - a.cs2.rating).slice(0, 8);
  const lb = [...PLAYER_DB].filter(p => isR6 ? p.r6 : p.cs2).sort((a, b) => isR6 ? b.r6.rating - a.r6.rating : b.cs2.rating - a.cs2.rating).slice(0, 10);
  const accentStyle = isR6 ? 'color:var(--r6-accent)' : 'color:var(--cs2-accent)';
  return `
    <section class="game-hero">
      <div class="game-hero-bg"><img src="${cardImg}" alt="${title}"><div class="game-hero-overlay"></div></div>
      <div class="game-hero-content">
        <div class="game-hero-icon">${icon}</div>
        <h1 class="game-hero-title">${title}</h1>
        <p class="game-hero-desc">${desc}</p>
        <div class="game-meta-stats">
          <div class="game-meta-stat"><span class="gms-val" style="${accentStyle}">${isR6 ? '100K' : '148K'}</span><span class="gms-lbl">Players</span></div>
          <div class="game-meta-stat"><span class="gms-val" style="${accentStyle}">${isR6 ? '647K' : '1.2M'}</span><span class="gms-lbl">Matches</span></div>
          <div class="game-meta-stat"><span class="gms-val" style="${accentStyle}">1.18</span><span class="gms-lbl">Avg K/D</span></div>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="section-header"><div><h2 class="section-title">TOP PLAYERS</h2><p class="section-subtitle">Highest rated ${title} players</p></div></div>
      <div class="featured-grid">
        ${topPlayers.map((p, i) => `
          <a href="#profile/${p.id}" class="player-card">
            <div class="player-card-avatar ${isR6 ? 'r6-avatar' : ''}">${p.initial}<div class="player-card-rank-badge ${isR6 ? 'r6-badge' : ''}">#${i + 1}</div></div>
            <div class="player-card-name">${p.name}</div>
            <div class="player-card-tag">[${p.clan}] · ${p.region}</div>
            <div class="player-card-stats">
              <div class="pcs-item"><span class="pcs-val">${isR6 ? p.r6.kd : p.cs2.kd}</span><span class="pcs-lbl">K/D</span></div>
              <div class="pcs-item"><span class="pcs-val">${isR6 ? p.r6.wr : p.cs2.wr}%</span><span class="pcs-lbl">Win</span></div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
    <div class="section">
      <div class="section-header"><div><h2 class="section-title">RANKINGS</h2></div><a href="#leaderboards" class="btn btn-ghost btn-sm">Full Leaderboard →</a></div>
      <div class="lb-widget">
        <div class="lb-header"><span class="lb-title">${title} — TOP 10</span></div>
        ${lb.map((p, i) => {
    const posClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    return `<a href="#profile/${p.id}" class="lb-row ${i < 3 ? 'podium-' + (i + 1) : ''}"><span class="lb-pos ${posClass}">${i + 1}</span><span class="lb-avatar ${isR6 ? 'r6-avatar' : ''}">${p.initial}</span><span class="lb-name">${p.name}</span><span class="lb-stat" style="${accentStyle}">${(isR6 ? p.r6.rating : p.cs2.rating).toLocaleString()}</span><span class="lb-region">${p.region}</span></a>`;
  }).join('')}
      </div>
    </div>`;
}

function renderSettings() {
  if (!Auth.isLoggedIn()) return `<div class="section"><div class="empty-state"><div class="empty-state-icon">🔒</div><div class="empty-state-text">Sign in to access settings</div><button class="btn btn-primary mt-2" onclick="openAuthModal('signin')">Sign In</button></div></div>`;
  const user = Auth.getUser();
  const colors = ['#f59e0b', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#22c55e', '#ef4444', '#f97316'];
  return `
    <div class="settings-layout">
      <nav class="settings-nav">
        <div class="settings-nav-item active">👤 Profile</div>
        <div class="settings-nav-item">🎮 Linked Games</div>
        <div class="settings-nav-item">🎨 Appearance</div>
        <div class="settings-nav-item">🔔 Notifications</div>
        <div class="settings-nav-item">⚠️ Danger Zone</div>
      </nav>
      <div class="settings-panel">
        <h2 class="settings-title">PROFILE SETTINGS</h2>
        <div class="setting-group">
          <div class="form-group"><label class="form-label">Display Name</label><input class="form-input" value="${user.username}" id="settingsName"></div>
          <div class="form-group mt-2"><label class="form-label">Email</label><input class="form-input" value="${user.email}" id="settingsEmail" disabled></div>
          <div class="form-group mt-2"><label class="form-label">Tagline</label><input class="form-input" value="${user.tagline || ''}" id="settingsTagline" placeholder="Your tagline..."></div>
          <button class="btn btn-primary mt-2" onclick="saveSettings()">Save Changes</button>
        </div>

        <div class="setting-group">
          <h3 style="font-size:.9rem;margin-bottom:1rem">Linked Games</h3>
          <div class="setting-row"><div><div class="setting-label">🔫 Counter-Strike 2</div><div class="setting-desc">Steam account linked</div></div><button class="toggle active" onclick="this.classList.toggle('active')"></button></div>
          <div class="setting-row"><div><div class="setting-label">🛡️ Rainbow Six Siege</div><div class="setting-desc">Ubisoft account linked</div></div><button class="toggle active" onclick="this.classList.toggle('active')"></button></div>
        </div>

        <div class="setting-group">
          <h3 style="font-size:.9rem;margin-bottom:1rem">Accent Color</h3>
          <div class="color-picker">
            ${colors.map(c => `<div class="color-swatch ${c === '#f59e0b' ? 'active' : ''}" style="background:${c}" onclick="setAccentColor('${c}',this)"></div>`).join('')}
          </div>
        </div>

        <div class="setting-group">
          <h3 style="font-size:.9rem;margin-bottom:1rem">Notifications</h3>
          <div class="setting-row"><div><div class="setting-label">Email Notifications</div><div class="setting-desc">Receive updates via email</div></div><button class="toggle active" onclick="this.classList.toggle('active')"></button></div>
          <div class="setting-row"><div><div class="setting-label">Rank Change Alerts</div><div class="setting-desc">Get notified when your rank changes</div></div><button class="toggle active" onclick="this.classList.toggle('active')"></button></div>
        </div>

        <div class="danger-zone">
          <h4>Danger Zone</h4>
          <p>Once you delete your account, there is no going back. Please be certain.</p>
          <button class="btn btn-danger btn-sm" onclick="if(confirm('Are you sure?')){Auth.logout();renderNavActions();showToast('Account deleted','error');Router.navigate('#home')}">Delete Account</button>
        </div>
      </div>
    </div>`;
}

function render404() {
  return `<div class="section"><div class="empty-state" style="padding:8rem 2rem"><div class="empty-state-icon">🔍</div><div class="empty-state-text" style="font-size:1.2rem">Page Not Found</div><p style="color:var(--text-muted);margin-bottom:1.5rem">The page you're looking for doesn't exist.</p><a href="#home" class="btn btn-primary">Go Home</a></div></div>`;
}

// ===== PROFILE GAME RENDERING (for main ShadowVex profile) =====
function renderRank(data, game) {
  const isR6 = game === 'r6';
  const badge = isR6 ? 'r6-badge' : ''; const theme = isR6 ? 'r6-theme' : ''; const glow = isR6 ? 'r6-glow' : ''; const bar = isR6 ? 'r6-bar' : ''; const accentCls = isR6 ? 'r6-accent' : 'cs2-accent';
  return `<section class="rank-section"><div class="section-header"><h2 class="section-title">Competitive Rank</h2><span class="section-badge ${badge}">${data.season}</span></div><div class="rank-cards"><div class="rank-card primary ${theme}"><div class="rank-emblem"><div class="rank-glow ${glow}"></div><span class="rank-icon">${data.rank.icon}</span></div><div class="rank-info"><span class="rank-label">${data.rank.label}</span><span class="rank-value">${data.rank.value}</span><div class="rank-progress"><div class="progress-bar ${bar}" style="width:${data.rank.progress}%"></div></div><span class="rank-sublabel">${data.rank.sublabel}</span></div></div>${data.rank.secondary.map(s => `<div class="rank-card ${theme}"><div class="rank-mini-emblem">${s.icon}</div><div class="rank-info"><span class="rank-label">${s.label}</span><span class="rank-value ${accentCls}">${s.value}</span></div></div>`).join('')}</div></section>`;
}
function renderStats(data, game) {
  const isR6 = game === 'r6'; const statCls = isR6 ? 'r6-stat' : ''; const fillCls = isR6 ? 'r6-fill' : '';
  return `<section class="stats-section"><div class="section-header"><h2 class="section-title">Performance Overview</h2><div class="stat-period-toggle"><button class="period-btn active">All Time</button><button class="period-btn">This Season</button><button class="period-btn">Last 30 Days</button></div></div><div class="stats-grid">${data.stats.map(s => `<div class="stat-card ${statCls}"><div class="stat-header"><span class="stat-icon">${s.icon}</span>${s.trend ? `<span class="stat-trend up">${s.trend}</span>` : ''}</div><span class="stat-value" data-target="${s.value}">0</span><span class="stat-label">${s.label}</span><div class="stat-bar"><div class="stat-fill ${fillCls}" style="width:${s.fill}%"></div></div></div>`).join('')}</div></section>`;
}
function renderWeapons(data) {
  return `<section class="loadout-section"><div class="section-header"><h2 class="section-title">Top Weapons</h2></div><div class="weapons-grid">${data.weapons.map(w => `<div class="weapon-card"><div class="weapon-rank">#${w.rank}</div><div class="weapon-name">${w.name}</div><div class="weapon-stats"><div class="weapon-stat"><span class="ws-label">Kills</span><span class="ws-value">${w.kills}</span></div><div class="weapon-stat"><span class="ws-label">HS%</span><span class="ws-value">${w.hs}</span></div><div class="weapon-stat"><span class="ws-label">Accuracy</span><span class="ws-value">${w.acc}</span></div></div><div class="weapon-usage"><div class="usage-fill" style="width:${w.usage}%"></div></div></div>`).join('')}</div></section>`;
}
function renderOperators(data) {
  return `<section class="loadout-section"><div class="section-header"><h2 class="section-title">Top Operators</h2></div><div class="operators-grid">${data.operators.map(o => `<div class="operator-card ${o.side.toLowerCase()}"><div class="op-side">${o.side}</div><div class="op-header"><span class="op-icon">${o.icon}</span><div class="op-name-wrap"><span class="op-name">${o.name}</span><span class="op-hours">${o.hours}</span></div></div><div class="op-stats"><div class="op-stat"><span class="ops-val">${o.kd}</span><span class="ops-lbl">K/D</span></div><div class="op-stat"><span class="ops-val">${o.win}</span><span class="ops-lbl">Win</span></div><div class="op-stat"><span class="ops-val">${o.kills}</span><span class="ops-lbl">Kills</span></div></div></div>`).join('')}</div></section>`;
}
function renderMaps(data, game) {
  const fillCls = game === 'r6' ? 'r6-fill' : '';
  return `<section class="maps-section"><div class="section-header"><h2 class="section-title">Map Performance</h2></div><div class="maps-grid">${data.maps.map(m => `<div class="map-card"><div class="map-name">${m.name}</div><div class="map-winrate"><span class="wr-value">${m.wr}%</span><span class="wr-label">Win Rate</span></div><div class="map-bar"><div class="map-fill ${fillCls}" style="width:${m.wr}%"></div></div><span class="map-games">${m.games} games</span></div>`).join('')}</div></section>`;
}
function renderMatches(data) {
  return `<section class="matches-section"><div class="section-header"><h2 class="section-title">Recent Matches</h2></div><div class="matches-list">${data.matches.map(m => { const w = m.result === 'W'; return `<div class="match-card ${w ? 'win' : 'loss'}"><div class="match-result">${m.result}</div><div class="match-info"><span class="match-map">${m.map}</span><span class="match-score">${m.score}</span></div><div class="match-stats"><span class="match-kda">${m.kda}</span><span class="match-kda-label">K / D / A</span></div><div class="match-rating"><span class="rating-value">${m.rating}</span><span class="rating-label">Rating</span></div><span class="match-time">${m.time}</span></div>`; }).join('')}</div></section>`;
}
function renderProfileGameContent(game) {
  const d = PROFILE_GAME_DATA[game];
  let html = renderRank(d, game) + renderStats(d, game);
  html += game === 'cs2' ? renderWeapons(d) : renderOperators(d);
  html += renderMaps(d, game) + renderMatches(d);
  return html;
}

// ===== INTERACTION HANDLERS =====
function doHeroSearch() {
  const q = document.getElementById('heroSearchInput')?.value?.trim();
  if (q) Router.navigate('#search/' + encodeURIComponent(q));
}
function doPageSearch() {
  const q = document.getElementById('searchPageInput')?.value?.trim();
  if (q) Router.navigate('#search/' + encodeURIComponent(q));
  else Router.navigate('#search');
}
function switchLbTab(game) {
  document.querySelectorAll('#lbTabs .tab-btn').forEach(b => b.classList.toggle('active', b.dataset.lb === game));
  document.getElementById('lbCS2').style.display = game === 'cs2' ? '' : 'none';
  document.getElementById('lbR6').style.display = game === 'r6' ? '' : 'none';
}
function switchProfileGame(game) {
  document.querySelectorAll('.game-tab').forEach(t => t.classList.toggle('active', t.dataset.game === game));
  document.querySelectorAll('.game-content').forEach(c => c.classList.remove('active'));
  document.getElementById(game + 'Content').classList.add('active');
  document.getElementById('bannerImg').src = PROFILE_GAME_DATA[game].banner;
  animateCounters(document.getElementById(game + 'Content'));
  initScrollAnimations();
}
function saveSettings() {
  const name = document.getElementById('settingsName')?.value;
  const tagline = document.getElementById('settingsTagline')?.value;
  if (name) { Auth.updateUser({ username: name, tagline }); renderNavActions(); showToast('Settings saved!', 'success'); }
}
function setAccentColor(color, el) {
  document.documentElement.style.setProperty('--accent-1', color);
  document.documentElement.style.setProperty('--accent-glow', color + '4d');
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  Auth.updateUser({ accentColor: color });
}

// ===== ANIMATED COUNTERS =====
function animateCounters(container) {
  const els = container.querySelectorAll('[data-target], [data-counter]');
  els.forEach(el => {
    const target = parseFloat(el.dataset.target || el.dataset.counter);
    if (isNaN(target)) return;
    const isDecimal = target % 1 !== 0;
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ===== SUBSCRIPTION RENDERER =====
function renderSubscription() {
  return `
    <section class="section" style="padding:4rem 2rem;text-align:center;max-width:1200px;margin:0 auto;animation:fadeIn 0.5s ease">
      <h1 class="game-hero-title" style="margin-bottom:1rem;background:linear-gradient(90deg, #fff, var(--win));-webkit-background-clip:text;-webkit-text-fill-color:transparent">PLAYERHUB PREMIUM</h1>
      <p class="text-secondary" style="max-width:600px;margin:0 auto 3rem;font-size:1.1rem">Unlock the full potential of your gaming analytics with our premium tiers.</p>
      
      <div class="sub-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:2rem;text-align:left">
        <div class="sub-card">
          <h3 class="sub-title">Basic</h3>
          <div class="sub-price">$0<span class="sub-cycle">/mo</span></div>
          <ul class="sub-features">
            <li>Basic Stat Tracking</li>
            <li>Global Leaderboards</li>
            <li>Ad-supported</li>
          </ul>
          <button class="btn btn-outline" style="width:100%">Current Plan</button>
        </div>

        <div class="sub-card popular">
          <div class="sub-badge">MOST POPULAR</div>
          <h3 class="sub-title" style="color:var(--cs2-accent)">Pro</h3>
          <div class="sub-price">$4.99<span class="sub-cycle">/mo</span></div>
          <ul class="sub-features">
            <li>Advanced Match Analytics</li>
            <li>No Ads</li>
            <li>Premium Profile Badge</li>
          </ul>
          <button class="btn btn-primary" style="width:100%">Upgrade to Pro</button>
        </div>

        <div class="sub-card premium">
          <h3 class="sub-title" style="color:var(--r6-accent)">Elite</h3>
          <div class="sub-price">$9.99<span class="sub-cycle">/mo</span></div>
          <ul class="sub-features">
            <li>Everything in Pro</li>
            <li>1-on-1 AI VOD Reviews</li>
            <li>Custom Profile Backgrounds</li>
            <li>Early Access Features</li>
          </ul>
          <button class="btn btn-primary" style="width:100%;background:var(--r6-accent);color:#fff">Go Elite</button>
        </div>
      </div>
    </section>
  `;
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.stat-card, .weapon-card, .operator-card, .map-card, .match-card, .rank-card, .player-card, .game-card, .achievement').forEach(el => {
    if (el.dataset.observed) return;
    el.dataset.observed = '1'; el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; observer.observe(el);
  });
}

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['rgba(245,158,11,0.3)', 'rgba(6,182,212,0.2)', 'rgba(59,130,246,0.2)', 'rgba(249,115,22,0.15)'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div'); p.classList.add('particle');
    p.style.width = p.style.height = Math.random() * 4 + 2 + 'px'; p.style.left = Math.random() * 100 + '%'; p.style.top = Math.random() * 100 + '%';
    p.style.background = colors[Math.floor(Math.random() * colors.length)]; p.style.animationDelay = Math.random() * 6 + 's'; p.style.animationDuration = Math.random() * 4 + 4 + 's';
    container.appendChild(p);
  }
}

// ===== NAV SEARCH AUTOCOMPLETE =====
const navSearchInput = document.getElementById('navSearchInput');
const navSearchDropdown = document.getElementById('navSearchDropdown');
navSearchInput.addEventListener('input', () => {
  const q = navSearchInput.value.trim().toLowerCase();
  if (q.length < 2) { navSearchDropdown.classList.remove('active'); return; }
  const results = PLAYER_DB.filter(p => p.name.toLowerCase().includes(q)).slice(0, 6);
  if (results.length === 0) { navSearchDropdown.classList.remove('active'); return; }
  navSearchDropdown.innerHTML = results.map(p => `<a href="#profile/${p.id}" class="search-result-item"><span class="search-result-avatar">${p.initial}</span><div class="search-result-info"><div class="search-result-name">${p.name}</div><div class="search-result-meta">[${p.clan}] · ${p.region} · ${p.cs2.rank}</div></div></a>`).join('');
  navSearchDropdown.classList.add('active');
});
navSearchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { const q = navSearchInput.value.trim(); if (q) { Router.navigate('#search/' + encodeURIComponent(q)); navSearchDropdown.classList.remove('active'); navSearchInput.value = ''; } } });
document.addEventListener('click', (e) => { if (!e.target.closest('.nav-search')) navSearchDropdown.classList.remove('active'); });
document.addEventListener('keydown', (e) => { if (e.key === '/' && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); navSearchInput.focus(); } });

// ===== USER DROPDOWN =====
document.addEventListener('click', (e) => {
  if (e.target.closest('#userAvatarBtn')) { document.getElementById('userDropdownMenu')?.classList.toggle('active'); }
  else { document.getElementById('userDropdownMenu')?.classList.remove('active'); }
});

// ===== MOBILE MENU =====
document.getElementById('mobileMenuBtn').addEventListener('click', () => { document.getElementById('mobileMenu').classList.toggle('active'); });

// ===== PERIOD BTN TOGGLE =====
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('period-btn')) {
    const parent = e.target.closest('.stat-period-toggle');
    parent.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  }
});

// ===== AFTER RENDER HOOK =====
function afterRender(page, param) {
  // Profile-specific
  if (page === 'profile' && (parseInt(param) || 0) === 0) {
    const cs2El = document.getElementById('cs2Content');
    const r6El = document.getElementById('r6Content');
    if (cs2El) cs2El.innerHTML = renderProfileGameContent('cs2');
    if (r6El) r6El.innerHTML = renderProfileGameContent('r6');
    animateCounters(cs2El);
  }
  // Home page counters
  if (page === 'home') { animateCounters(document.querySelector('.hero') || document.body); }
  // Scroll animations
  initScrollAnimations();
}

// ===== REGISTER ROUTES =====
Router.register('home', () => renderHome());
Router.register('search', (param) => renderSearch(param));
Router.register('leaderboards', () => renderLeaderboards());
Router.register('profile', (param) => renderProfile(param));
Router.register('cs2', () => renderGameOverview('cs2'));
Router.register('r6', () => renderGameOverview('r6'));
Router.register('settings', () => renderSettings());
Router.register('subscription', () => renderSubscription());
Router.register('signin', () => { openAuthModal('signin'); return renderHome(); });
Router.register('signup', () => { openAuthModal('signup'); return renderHome(); });

// ===== INIT =====
createParticles();
renderNavActions();
Router.init();
