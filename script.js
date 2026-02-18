// ============================
// FIREBASE CONFIG
// ============================
const firebaseConfig = {
  apiKey: "AIzaSyA3TPLeIVhSgPClBcF0Y_IztKJqTYVZWJc",
  authDomain: "doujinflash.firebaseapp.com",
  projectId: "doujinflash",
  storageBucket: "doujinflash.firebasestorage.app",
  messagingSenderId: "758136407006",
  appId: "1:758136407006:web:4d7a40d9bcdff4fca0134f",
  measurementId: "G-6G8VQ2LBKJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ============================
// GALLERY DATA
// ============================
// ============================
// GALLERY DATA
// ============================
const galleryData = {
  "Isekai Smartphone": [
    { url: "https://www.patreon.com/posts/defeated-by-zako-123920788", subgenre: "feet/dream/harem" },
    { url: "https://www.patreon.com/posts/defeated-by-zako-124092807", subgenre: "motherDaughter/bath" },
    { url: "https://www.patreon.com/posts/royal-127866137", subgenre: "milfs/beach" },
    { url: "https://www.patreon.com/posts/harem-switch-133782770", subgenre: "crossover/brainwashing/harem" },
    { url: "https://www.patreon.com/posts/in-another-world-115302353", subgenre: "evilGuy/powerDrain" },
    { url: "https://www.patreon.com/posts/isekai-2-5-138342705", subgenre: "grunts/olderFemales" },
    { url: "https://www.patreon.com/posts/isekai-alternate-136385040", subgenre: "milfs/imposters" }
  ],

  "Spirit Chronicles": [
    { url: "https://www.patreon.com/posts/defeated-by-113020062", subgenre: "interrogation/rematch" },
    { url: "https://www.patreon.com/posts/rio-and-3-armies-115877764", subgenre: "dream/imposters" },
    { url: "https://www.patreon.com/posts/liselottes-honey-120002486", subgenre: "feet/seduction" }
  ],

  "Maid Dragon": [
    { url: "https://www.patreon.com/posts/new-doujinshi-140518041", subgenre: "imposters/rematch" }
  ],

  "Musaigen no Phantom World": [
    { url: "https://www.patreon.com/posts/haruhiko-x-x-111367831", subgenre: "harem" }
  ],

  "Tsugumomo": [
    { url: "https://www.patreon.com/posts/tsugualbum-115118952", subgenre: "romance/brainwashing" }
  ],

  "Knight's & Magic": [
    { url: "https://www.patreon.com/posts/breasts-and-120933745", subgenre: "evilGirl/blackmailedFemale" }
  ],

  "By the Grace of the Gods": [
    { url: "https://www.patreon.com/posts/mind-control-114808249", subgenre: "shortPost/mindControl" },
    { url: "https://www.patreon.com/posts/unique-designs-113842499", subgenre: "harem" },
    { url: "https://www.patreon.com/posts/by-trap-of-town-125730835", subgenre: "imposters/breastFocus" },
    { url: "https://www.patreon.com/posts/surprise-attack-140600363", subgenre: "grunts" }
  ],

  "Isekai Pharmacy": [
    { url: "https://www.patreon.com/posts/healing-abs-131387288", subgenre: "crossover/romance" },
    { url: "https://www.patreon.com/posts/ratma-140981845", subgenre: "crossover/romance" }
  ],

  "Realist Hero": [
    { url: "https://www.patreon.com/posts/how-realist-hero-132023588", subgenre: "harem/milfs/motherDaughter" }
  ],

  "Yandere Dark Elf": [
    { url: "https://www.patreon.com/posts/brainwashed-by-132410664", subgenre: "brainwashing/beach" }
  ],

  "Saijaku Bahamut": [
    { url: "https://www.patreon.com/posts/lux-x-alterize-113563060", subgenre: "romance" }
  ],

  "Hundred": [
    { url: "https://www.patreon.com/posts/hundred-fold-114763597", subgenre: "brainwashing/breastFocus" },
    { url: "https://www.patreon.com/posts/mind-swapped-119063332", subgenre: "beach/damsel" },
    { url: "https://www.patreon.com/posts/mind-swapped-119063397", subgenre: "beach/damsel" },
    { url: "https://www.patreon.com/posts/claudias-117962535", subgenre: "harem/imposters/rematch" },
    { url: "https://www.patreon.com/posts/new-doujinshi-142199851", subgenre: "evilGuy/imposters" }
  ],

  "Railgun": [
    { url: "https://www.patreon.com/posts/deadly-124205476", subgenre: "feet/disgust/harem" }
  ],

  "Cheat Skill Isekai": [
    { url: "https://www.patreon.com/posts/handicap-for-124946354", subgenre: "feet/sports" },
    { url: "https://www.patreon.com/posts/i-got-caught-by-118315972", subgenre: "imposters/dream" }
  ],

  "Naruto": [
    { url: "https://www.patreon.com/posts/aftermath-of-135659570", subgenre: "interrogation/disgust/feet/breastFocus" }
  ],

  "One Piece": [
    { url: "https://www.patreon.com/posts/goodbye-mr-123493421", subgenre: "mindControl/feet" }
  ],

  "Full Dive": [
    { url: "https://www.patreon.com/posts/full-dive-135517417", subgenre: "evilGirl" }
  ],

  "Grimgar": [
    { url: "https://www.patreon.com/posts/reward-complete-124944229", subgenre: "romance/damsel" }
  ],

  "Solo Leveling": [
    { url: "https://www.patreon.com/posts/nurse-leveling-122241517", subgenre: "romance" }
  ],

  "Magic Kaito/Conan": [
    { url: "https://www.patreon.com/posts/shinichi-kudo-x-128025510", subgenre: "romance/breastFocus" },
    { url: "https://www.patreon.com/posts/milfs-kaito-128056913", subgenre: "milfs/breastFocus" }
  ],

  "Shikimori’s Not Just a Cutie": [
    { url: "https://www.patreon.com/posts/izumi-x-mom-117984236", subgenre: "milf/feet" },
    { url: "https://www.patreon.com/posts/shikimori-x-mom-117984140", subgenre: "milf/feet" },
    { url: "https://www.patreon.com/posts/shikimoris-dream-136765474", subgenre: "romance/yuri/dream" }
  ],

  "Komi-San": [
    { url: "https://www.patreon.com/posts/galgun-ex-shuuko-111164419", subgenre: "milf" }
  ],

  "Miss Caretaker": [
    { url: "https://www.patreon.com/posts/unused-trample-118890327", subgenre: "feet" }
  ],

  "Goddess Dormitory": [
    { url: "https://www.patreon.com/posts/hypnosis-burglar-117981549", subgenre: "evilGuy/brainwashing" }
  ],

  "Tomo-Chan is a Girl": [
    { url: "https://www.patreon.com/posts/sex-practice-123946027", subgenre: "milfs" }
  ],

  "To-Love Ru": [
    { url: "https://www.patreon.com/posts/interrogation-124319257", subgenre: "harem/feet" }
  ],

  "Shield Hero": [
    { url: "https://www.patreon.com/posts/fohl-vs-centaur-135465811", subgenre: "evilGuy/sideCharacter/battle" }
  ],

  "My Hero Academia": [
    { url: "https://www.patreon.com/posts/hostage-dilemma-136499744", subgenre: "tickling" },
    { url: "https://www.patreon.com/posts/deborah-gollini-128125121", subgenre: "breastFocus" },
    { url: "https://www.patreon.com/posts/citizens-arrest-150722483", subgenre: "grunts/olderFemales" }
  ],

  "Gridman": [
    { url: "https://www.patreon.com/posts/october-rematch-139579899", subgenre: "rematch" },
    { url: "https://www.patreon.com/posts/yomogi-vs-haga-139628383", subgenre: "evilGuy/rematch" },
    { url: "https://www.patreon.com/posts/grid-monsters-134890598", subgenre: "evilGirl/rematch/beach" }
  ],

  "Infinite Stratos": [
    { url: "https://www.patreon.com/posts/jealousy-and-134478745", subgenre: "grunts/olderFemales" }
  ],

    "Rakudai Cavalry": [
    { url: "https://www.patreon.com/posts/before-match-150274998", subgenre: "evilGirl/olderFemales" },
    { url: "https://www.patreon.com/posts/second-largest-121283814", subgenre: "evilGuy/imposters/disgust" }
  ],

  "Dragonar Academy": [
    { url: "https://www.patreon.com/posts/maid-ambush-125404081", subgenre: "panties/breastFocus" },
    { url: "https://www.patreon.com/posts/dragonar-harem-126601155", subgenre: "harem/dreams" },
    { url: "https://www.patreon.com/posts/dragonar-harem-2-134297558", subgenre: "harem/dreams" },
    { url: "https://www.patreon.com/posts/new-free-142617721", subgenre: "evilGirl/disgust/blackmailedFemale" },
    { url: "https://www.patreon.com/posts/maid-x-maid-131192499", subgenre: "crossover/romance" },
    { url: "https://www.patreon.com/posts/dragonar-academy-120371081", subgenre: "compilation" }
  ],

  "Atelier Meister": [
    { url: "https://www.patreon.com/posts/kurts-nightmare-127590370", subgenre: "harem/dreams" },
    { url: "https://www.patreon.com/posts/confusion-plan-126238720", subgenre: "interrogation/breastFocus" },
    { url: "https://www.patreon.com/posts/crossover-ex-go-128677066", subgenre: "romance/harem" }
  ],

  "Fruitmaster": [
    { url: "https://www.patreon.com/posts/nightmare-fruit-124888635", subgenre: "feet/harem/imposters/dreams" },
    { url: "https://www.patreon.com/posts/signe-jaildoll-125150671", subgenre: "compilation" }
  ],

  "Noble on the Brink of Ruin": [
    { url: "https://www.patreon.com/posts/noble-on-brink-m-122090649", subgenre: "evilGuy/dreams/harem" },
    { url: "https://www.patreon.com/posts/no-2-succubus-123811158", subgenre: "blackmailedFemale" },
    { url: "https://www.patreon.com/posts/now-to-play-fair-124028249", subgenre: "sports/harem/beach" },
    { url: "https://www.patreon.com/posts/bittersweet-125150517", subgenre: "battle" }
  ],

  "Weakest Crest": [
    { url: "https://www.patreon.com/posts/trapped-by-113574777", subgenre: "breastFocus" }
  ],

  "Hidden Dungeon": [
    { url: "https://www.patreon.com/posts/aniverse-noir-111993469", subgenre: "feet/betrayal" }
  ],

  "Sweet Reincarnation": [
    { url: "https://www.patreon.com/posts/pastrys-132635025", subgenre: "dreams/harem" }
  ],

  "Evil Lord with Empire": [
    { url: "https://www.patreon.com/posts/based-on-evil-of-128324689", subgenre: "breastFocus" },
    { url: "https://www.patreon.com/posts/im-evil-lord-to-128810407", subgenre: "olderFemales" },
    { url: "https://www.patreon.com/posts/anti-aging-gold-132476690", subgenre: "evilGirl/incest/imposters" }
  ],

  "Isekai Red Ranger": [
    { url: "https://www.patreon.com/posts/red-ranger-and-128405156", subgenre: "imposters/powerDrain/breastFocus" }
  ],

  "Greatest Alchemist of all Time": [
    { url: "https://www.patreon.com/posts/weakening-of-124643758", subgenre: "evilGuy/harem/imposters" },
    { url: "https://www.patreon.com/posts/interrogation-of-125342510", subgenre: "evilGirl/dreams/imposters" },
    { url: "https://www.patreon.com/posts/training-of-of-128003492", subgenre: "training" },
    { url: "https://www.patreon.com/posts/gratefulness-124381578", subgenre: "feet/harem" }
  ],



  "Gundam": [
    { url: "https://www.patreon.com/posts/fragments-of-116386240", subgenre: "crossover/romance/beach/evilGirl" },
    { url: "https://www.patreon.com/posts/not-right-size-123320383", subgenre: "romance" },
    { url: "https://www.patreon.com/posts/fragments-of-2-127226975", subgenre: "evilGirl/romance/dreams" },
    { url: "https://www.patreon.com/posts/framing-sekai-124646673", subgenre: "sports/evilGirl/grunts" },
    { url: "https://www.patreon.com/posts/red-meteor-blue-132736738", subgenre: "crossover/damsel/romance" },
    { url: "https://www.patreon.com/posts/weaponized-video-125687077", subgenre: "sports/beach" }
  ],

  "Cute Girl in the Hero’s Party": [
    { url: "https://www.patreon.com/posts/interrogated-by-150177807", subgenre: "milfs/interrogation" }
  ],

  "A-Rank Party": [
    { url: "https://www.patreon.com/posts/short-comic-128087610", subgenre: "antiNTR" },
    { url: "https://www.patreon.com/posts/destroy-hum-plan-128364215", subgenre: "dream/antiNTR/harem" },
    { url: "https://www.patreon.com/posts/destroy-tension-129163587", subgenre: "harem" },
    { url: "https://www.patreon.com/posts/favor-from-yuke-128313940", subgenre: "training/olderFemale" },
    { url: "https://www.patreon.com/posts/destroy-victory-129542195", subgenre: "dreams/imposters" }
  ],

  "The Healer Who Was": [
    { url: "https://www.patreon.com/posts/healer-is-in-115627195", subgenre: "disgust/imposters" }
  ],

  "Digimon Time Stranger": [
    { url: "https://www.patreon.com/posts/fake-erika-131553443", subgenre: "dreams/imposters" },
    { url: "https://www.patreon.com/posts/witchmons-dream-149212869", subgenre: "dreams/imposters" },
    { url: "https://www.patreon.com/posts/self-aware-bully-149426803", subgenre: "romance" },
    { url: "https://www.patreon.com/posts/fighting-vs-149510403", subgenre: "imposters" },
    { url: "https://www.patreon.com/posts/damsel-to-149791269", subgenre: "damsel/tickling/romance" }
  ],

  "Xenoblade": [
    { url: "https://www.patreon.com/posts/confess-your-120512035", subgenre: "interrogation" }
  ],

  "Dragon Quest 3D": [
    { url: "https://www.patreon.com/posts/chest-quest-xi-136022246", subgenre: "damsel/grunts" }
  ],

  "Marvel Rivals": [
    { url: "https://www.patreon.com/posts/snow-bunny-mind-126528747", subgenre: "crossover/mindControl" },
    { url: "https://www.patreon.com/posts/yokai-frost-134153792", subgenre: "damsel/tickling/romance" }
  ],

  "Final Fantasy": [
    { url: "https://www.patreon.com/posts/evil-ambush-135792084", subgenre: "damsel/tickling" }
  ],

  "Jak": [
    { url: "https://www.patreon.com/posts/based-on-that-3s-128003700", subgenre: "NTR" }
  ],
    "Digimon Time Stranger Game Advice": [
    { url: "https://www.patreon.com/posts/thoughts-on-time-142668461" },
    { url: "https://www.patreon.com/posts/just-started-dlc-148819361" },
    { url: "https://www.patreon.com/posts/pros-and-cons-of-149457279" },
    { url: "https://www.patreon.com/posts/replaying-times-150052573" }
  ],

  "Goddess of Victory": [
    { url: "https://www.patreon.com/posts/coin-rain-145390436", subgenre: "sports/harem" }
  ],

  "Tensei Kizoku": [
    { url: "https://www.patreon.com/posts/aristocrats-116960323", subgenre: "dreams/harem" },
    { url: "https://www.patreon.com/posts/aristocrats-117472827", subgenre: "evilGuy/imposters" },
    { url: "https://www.patreon.com/posts/otherworldly-vs-124884601", subgenre: "breastFocus" },
    { url: "https://www.patreon.com/posts/confess-your-127943146", subgenre: "disgust" },
    { url: "https://www.patreon.com/posts/mad-scientist-129274902", subgenre: "breastFocus/dreams" },
    { url: "https://www.patreon.com/posts/school-trip-129901827", subgenre: "olderFemales" },
    { url: "https://www.patreon.com/posts/otherworldly-131522455", subgenre: "olderFemales" },
    { url: "https://www.patreon.com/posts/sore-succubus-149009867", subgenre: "rematch/mindControl" }
  ],

  "SAO": [
    { url: "https://www.patreon.com/posts/reversal-of-116123090", subgenre: "evilGuy/imposters/harem" }
  ],

  "Kakushite": [
    { url: "https://www.patreon.com/posts/trap-for-s-rank-131494278", subgenre: "betrayal/blackmailedFemale" }
  ],

  "Bakugan Anime": [
    { url: "https://www.patreon.com/posts/popularity-plan-128853619", subgenre: "feet/olderFemales" }
  ],

  "Digimon Anime": [
    { url: "https://www.patreon.com/posts/hostage-dilemma-136721843", subgenre: "damsel/tickling" },
    { url: "https://www.patreon.com/posts/my-hero-f-130039841", subgenre: "damsel/tickling/romance/harem" },
    { url: "https://www.patreon.com/posts/ranamons-schemes-139869855", subgenre: "damsel/olderFemales" },
    { url: "https://www.patreon.com/posts/spiral-vs-148715280", subgenre: "romance/milf" }
  ],

  "Digimon Survive": [
    { url: "https://www.patreon.com/posts/before-fighting-118330569", subgenre: "imposters" }
  ],

  "Pokemon Anime": [
    { url: "https://www.patreon.com/posts/1-saving-claire-112582902", subgenre: "forcedtoWatch/tifaOutfit" },
    { url: "https://www.patreon.com/posts/pokemon-advanced-121669114", subgenre: "compilation" },
    { url: "https://www.patreon.com/posts/shelly-betrayed-136188274", subgenre: "damsel/tickling" },
    { url: "https://www.patreon.com/posts/pokemon-advanced-121669003", subgenre: "compilation" },
    { url: "https://www.patreon.com/posts/silent-comics-1-133982191", subgenre: "romance/femdom" },
    { url: "https://www.patreon.com/posts/new-short-141379214", subgenre: "romance" },
    { url: "https://www.patreon.com/posts/game-isekai-into-141709815", subgenre: "romance/olderFemales" },
    { url: "https://www.patreon.com/posts/new-pokemon-142282020", subgenre: "romance/olderFemales" },
    { url: "https://www.patreon.com/posts/advanced-damsels-148623263", subgenre: "romance/olderFemales/harem" }
  ],
    "Pokemon Game": [
    { url: "https://www.patreon.com/posts/what-if-rei-girl-126020359", subgenre: "harem/olderFemales/romance" },
    { url: "https://www.patreon.com/posts/pokemon-delta-112520940", subgenre: "olderFemales" },
    { url: "https://www.patreon.com/posts/new-short-122311590", subgenre: "damsel/tickling/romance" },
    { url: "https://www.patreon.com/posts/snakes-and-love-127003172", subgenre: "evilGuy/mindControl/romance" },
    { url: "https://www.patreon.com/posts/short-doujinshi-127372756", subgenre: "harem/romance" },
    { url: "https://www.patreon.com/posts/chatelaines-127391079", subgenre: "romance/damsel/tickling" },
    { url: "https://www.patreon.com/posts/trapped-in-116816919", subgenre: "feet" },
    { url: "https://www.patreon.com/posts/too-many-losing-126896392", subgenre: "romance/disgust/harem" },
    { url: "https://www.patreon.com/posts/courtney-romance-122290586", subgenre: "romance" },
    { url: "https://www.patreon.com/posts/you-cant-attack-124756115", subgenre: "grunts/blackmailedFemale" },
    { url: "https://www.patreon.com/posts/grunt-revenge-138211346", subgenre: "grunts/damsel" },
    { url: "https://www.patreon.com/posts/wanted-dead-1-110672833", subgenre: "imposters/breastFocus" },
    { url: "https://www.patreon.com/posts/winning-battles-126503977", subgenre: "romance" },
    { url: "https://www.patreon.com/posts/champions-title-122520699", subgenre: "feet" },
    { url: "https://www.patreon.com/posts/revenge-on-feet-127025035", subgenre: "feet/damsel/romance" },
    { url: "https://www.patreon.com/posts/professor-and-126578933", subgenre: "damsel/romance/grunts" },
    { url: "https://www.patreon.com/posts/vivid-violet-117586694", subgenre: "evilGirl/olderFemales/feet" },
    { url: "https://www.patreon.com/posts/kitakami-nurse-123337428", subgenre: "romance" },
    { url: "https://www.patreon.com/posts/ogre-attract-136284662", subgenre: "crossover/harem" }
  ],

  "Buddyfight": [
    { url: "https://www.patreon.com/posts/card-and-charm-125555671", subgenre: "romance/grunts" }
  ],

  "Yugioh": [
    { url: "https://www.patreon.com/posts/yu-gi-oh-tag-rua-114377049", subgenre: "disgust" },
    { url: "https://www.patreon.com/posts/unused-samples-119860402", subgenre: "compilation" }
  ],

  "Dragon Collection": [
    { url: "https://www.patreon.com/posts/rubicas-trap-113943610", subgenre: "betrayal" }
  ],

  "Precure": [
    { url: "https://www.patreon.com/posts/black-pepper-123548143", subgenre: "milfs/blackmailedFemale/evilGirl" }
  ],

  "Disgaea": [
    { url: "https://www.patreon.com/posts/laharl-unit-130961698", subgenre: "grunts/romance" },
    { url: "https://www.patreon.com/posts/new-short-140385443", subgenre: "harem/breastFocus" },
    { url: "https://www.patreon.com/posts/based-on-disgaea-136780846", subgenre: "shortPost/breastFocus" }
  ],

  "Megaman": [
    { url: "https://www.patreon.com/posts/megaman-beast-26-125886670", subgenre: "shortPost/imposters" },
    { url: "https://www.patreon.com/posts/beauties-and-131024115", subgenre: "olderFemales/mindControl" }
  ],

  "Gargantia": [
    { url: "https://www.patreon.com/posts/enzan-vs-123315024", subgenre: "crossover/damsel/tickling" },
    { url: "https://www.patreon.com/posts/saaya-and-123581746", subgenre: "beach/compilation" }
  ],

  "Appraiser": [
    { url: "https://www.patreon.com/posts/weakest-against-138070704", subgenre: "harem/disgust/mindControl" }
  ],

  "Irregular Magic School": [
    { url: "https://www.patreon.com/posts/trial-dating-134227661", subgenre: "training/milfs" }
  ],

  "Tales of": [
    { url: "https://www.patreon.com/posts/boku-wa-yuusha-1-133232828", subgenre: "evilGuy/imposters" },
    { url: "https://www.patreon.com/posts/boku-wa-yuusha-2-133465009", subgenre: "evilGirl/mindControl/romance" },
    { url: "https://www.patreon.com/posts/im-supposed-to-130292894", subgenre: "evilGuy/grunts/damsel/romance" },
    { url: "https://www.patreon.com/posts/imagination-131520316", subgenre: "pregnant/dreams" }
  ],

  "Isekai Farming": [
    { url: "https://www.patreon.com/posts/taming-dragon-126077798", subgenre: "harem" },
    { url: "https://www.patreon.com/posts/defeated-by-125212020", subgenre: "evilGirl/harem/romance" }
  ],

  "GIFS": [
    { url: "https://www.patreon.com/posts/tales-of-148819667", subgenre: "panties" },
    { url: "https://www.patreon.com/posts/self-undressing-150029632", subgenre: "panties" }
  ],

  "Game Translations": [
    { url: "https://drive.google.com/file/d/11w82lEjf0ttE1fCfzezbujpz8xQriIOZ/view?usp=sharing", subgenre: "excessm" }
  ],

  "Short Posts": [
    { url: "https://www.patreon.com/posts/various-samples-117985120" },
    { url: "https://www.patreon.com/posts/unused-samples-119860402" },
    { url: "https://www.patreon.com/posts/patreon-of-124947100" },
    { url: "https://www.patreon.com/posts/would-you-fall-129042170" },
    { url: "https://www.patreon.com/posts/crack-ship-mewi-131100188" },
    { url: "https://www.patreon.com/posts/takaokas-trap-131117097" },
    { url: "https://www.patreon.com/posts/mama-yufufu-132023557" },
    { url: "https://www.patreon.com/posts/emma-frosts-134150595" },
    { url: "https://www.patreon.com/posts/silent-comic-2-134994727" },
    { url: "https://www.patreon.com/posts/yuffie-hades-cup-139592439" },
    { url: "https://www.patreon.com/posts/jealousy-139598891" },
    { url: "https://www.patreon.com/posts/pre-halloween-139141115" },
    { url: "https://www.patreon.com/posts/captured-and-by-139667830" },
    { url: "https://www.patreon.com/posts/strike-blood-31-133810493" },
    { url: "https://www.patreon.com/posts/felicia-captured-140656436" },
    { url: "https://www.patreon.com/posts/crack-ship-felu-140656080" },
    { url: "https://www.patreon.com/posts/domino-from-140982969" },
    { url: "https://www.patreon.com/posts/interrogation-141710559" },
    { url: "https://www.patreon.com/posts/compilation-11-136046302" }
  ]

  


};



// ============================
// MAIN FUNCTION
// ============================
function buildLibrary() {
  const mainContainer = document.getElementById("library-container");
  if (!mainContainer) return;

  Object.keys(galleryData).forEach(genreName => {
    const section = document.createElement("section");
    section.classList.add("genre");
    section.dataset.genre = genreName;

    // Header
    const header = document.createElement("div");
    header.classList.add("genre-header");

    const leftSide = document.createElement("div");
    leftSide.classList.add("left-side");

    const heartBtn = document.createElement("button");
    heartBtn.classList.add("heart-btn");
    heartBtn.textContent = "🤍";

    const voteCount = document.createElement("p");
    voteCount.classList.add("vote-count");
    voteCount.innerHTML = 'Votes: <span>0</span>';

    leftSide.appendChild(heartBtn);
    leftSide.appendChild(voteCount);

    const h2 = document.createElement("h2");
    h2.textContent = genreName;

    header.appendChild(h2);
    header.appendChild(leftSide);
    section.appendChild(header);

    // Carousel
    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("carousel-container");

    const leftArrow = document.createElement("button");
    leftArrow.classList.add("arrow", "left");
    leftArrow.textContent = "⬅";

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    const rightArrow = document.createElement("button");
    rightArrow.classList.add("arrow", "right");
    rightArrow.textContent = "➡";

    carouselContainer.appendChild(leftArrow);
    carouselContainer.appendChild(carousel);
    carouselContainer.appendChild(rightArrow);
    section.appendChild(carouselContainer);
    mainContainer.appendChild(section);

    // Voting
    const votedKey = "voted_" + genreName;

    async function loadVotes() {
      try {
        const docRef = db.collection("votes").doc(genreName);
        const snap = await docRef.get();
        voteCount.querySelector("span").textContent = snap.exists ? snap.data().count : 0;
        if (!snap.exists) await docRef.set({ count: 0 });
      } catch (e) {
        console.warn("Firestore unavailable, using fallback:", e);
        voteCount.querySelector("span").textContent = 0;
      }
    }

    function checkLocalVote() {
      if (localStorage.getItem(votedKey)) heartBtn.textContent = "❤️";
    }

    heartBtn.addEventListener("click", async () => {
      try {
        const docRef = db.collection("votes").doc(genreName);
        if (localStorage.getItem(votedKey)) {
          await docRef.update({ count: firebase.firestore.FieldValue.increment(-1) });
          localStorage.removeItem(votedKey);
          heartBtn.textContent = "🤍";
        } else {
          await docRef.update({ count: firebase.firestore.FieldValue.increment(1) });
          localStorage.setItem(votedKey, "true");
          heartBtn.textContent = "❤️";
        }
        loadVotes();
      } catch (e) {
        const span = voteCount.querySelector("span");
        let val = parseInt(span.textContent) || 0;
        if (localStorage.getItem(votedKey)) { val--; localStorage.removeItem(votedKey); heartBtn.textContent = "🤍"; }
        else { val++; localStorage.setItem(votedKey, "true"); heartBtn.textContent = "❤️"; }
        span.textContent = val;
      }
    });

    loadVotes();
    checkLocalVote();

    // Populate carousel
    galleryData[genreName].forEach(itemData => {
      const item = document.createElement("div");
      item.classList.add("carousel-item");

      const fileName = itemData.url.split("/").pop();

      const img = document.createElement("img");
      img.src = `./images/${fileName}.jpg`;
      img.onerror = function() {
        this.onerror = null;
        this.src = "https://via.placeholder.com/200x300?text=Click+to+open";
      };
      img.onclick = () => window.open(itemData.url, "_blank");

      item.appendChild(img);

      if (itemData.subgenre) {
        const subgenreP = document.createElement("p");
        subgenreP.classList.add("subgenre");
        subgenreP.textContent = itemData.subgenre;
        item.appendChild(subgenreP);
      }

      carousel.appendChild(item);
    });

    // Carousel arrows
    function getVisibleItems() {
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      return Math.floor(carousel.offsetWidth / itemWidth) || 1;
    }

    leftArrow.addEventListener("click", () => {
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      carousel.scrollBy({ left: -(itemWidth * getVisibleItems()), behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      carousel.scrollBy({ left: itemWidth * getVisibleItems(), behavior: "smooth" });
    });

    // Swipe support
    let xStart = null;
    carousel.addEventListener("touchstart", e => xStart = e.touches[0].clientX, false);
    carousel.addEventListener("touchmove", e => {
      if (!xStart) return;
      const xEnd = e.touches[0].clientX;
      const xDiff = xStart - xEnd;
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      const visible = getVisibleItems();

      if (xDiff > 50) carousel.scrollBy({ left: itemWidth * visible, behavior: "smooth" });
      else if (xDiff < -50) carousel.scrollBy({ left: -(itemWidth * visible), behavior: "smooth" });

      xStart = null;
    }, false);
  });
}

// ============================
// RUN AFTER WINDOW LOAD
// ============================
window.onload = function() {
  buildLibrary();
};
