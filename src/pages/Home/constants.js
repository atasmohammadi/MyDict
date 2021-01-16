/*
 *
 * Home constants
 *
 */

export const GET_DEFINITION = 'app/Home/GET_DEFINITION';
export const GET_DEFINITION_SUCCESS = 'app/Home/GET_DEFINITION_SUCCESS';
export const GET_DEFINITION_FAILED = 'app/Home/GET_DEFINITION_FAILED';

export const initialState = {
  abundance: {
    word: 'abundance',
    phonetics: [
      {
        text: '/əˈbəndəns/',
        audio: 'https://lex-audio.useremarkable.com/mp3/abundance_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A very large quantity of something.',
            example: 'the tropical island boasts an abundance of wildlife',
            synonyms: [
              'avalanche',
              'deluge',
              'rush',
              'flood',
              'spate',
              'torrent',
              'cluster',
              'flurry',
              'wave',
              'outbreak',
              'outpouring',
            ],
          },
          {
            definition:
              '(in solo whist) a bid by which a player undertakes to make nine or more tricks.',
          },
        ],
      },
    ],
  },
  orphan: {
    word: 'orphan',
    phonetics: [
      {
        text: '/ˈɔrfən/',
        audio: 'https://lex-audio.useremarkable.com/mp3/orphan_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A child whose parents are dead.',
            example: 'he was left an orphan as a small boy',
          },
          {
            definition:
              'The first line of a paragraph set as the last line of a page or column, considered undesirable.',
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Make (a person or animal) an orphan.',
            example: 'John was orphaned at 12',
            synonyms: ['orphaned', 'widowed'],
          },
        ],
      },
    ],
  },
  banal: {
    word: 'banal',
    phonetics: [
      {
        text: '/bəˈnɑl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/banal_us_1.mp3',
      },
      {
        text: '/bəˈnæl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/banal_us_1_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'So lacking in originality as to be obvious and boring.',
            example: 'songs with banal, repeated words',
            synonyms: [
              'trite',
              'hackneyed',
              'clichéd',
              'platitudinous',
              'vapid',
              'commonplace',
              'ordinary',
              'common',
              'stock',
              'conventional',
              'stereotyped',
              'predictable',
              'overused',
              'overdone',
              'overworked',
              'stale',
              'worn out',
              'time-worn',
              'tired',
              'threadbare',
              'hoary',
              'hack',
              'unimaginative',
              'unoriginal',
              'derivative',
              'uninspired',
              'prosaic',
              'dull',
              'boring',
              'pedestrian',
              'run-of-the-mill',
              'routine',
              'humdrum',
            ],
          },
        ],
      },
    ],
  },
  feline: {
    word: 'feline',
    phonetics: [
      {
        text: '/ˈfiˌlaɪn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/feline_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Relating to or affecting cats or other members of the cat family.',
            example: 'feline leukemia',
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A cat or other member of the cat family.',
            example:
              'But except for the Florida felines, as far as one can tell, wild cougars no longer live east of the Mississippi.',
            synonyms: ['cat'],
          },
        ],
      },
    ],
  },
  ferocious: {
    word: 'ferocious',
    phonetics: [
      {
        text: '/fəˈroʊʃəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/ferocious_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition: 'Savagely fierce, cruel, or violent.',
            example:
              "the wolverine is nature's most ferocious and violent animal",
            synonyms: ['fierce', 'savage', 'wild', 'feral', 'untamed'],
          },
        ],
      },
    ],
  },
  lineage: {
    word: 'lineage',
    phonetics: [
      {
        text: '/ˈlɪniɪdʒ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/lineage_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'Lineal descent from an ancestor; ancestry or pedigree.',
            example: 'a Dutch nobleman of ancient lineage',
            synonyms: ['ancestry', 'family', 'parentage', 'birth'],
          },
          {
            definition:
              'A sequence of species each of which is considered to have evolved from its predecessor.',
            example: 'the chimpanzee and gorilla lineages',
          },
        ],
      },
    ],
  },
  patriarch: {
    word: 'patriarch',
    phonetics: [
      {
        text: '/ˈpeɪtriˌɑrk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/patriarch_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The male head of a family or tribe.',
            example:
              "The family patriarch makes all decisions regarding living arrangements, children's marriages, and money.",
          },
          {
            definition:
              'Any of those biblical figures regarded as fathers of the human race, especially Abraham, Isaac, and Jacob, and their forefathers, or the sons of Jacob.',
            example:
              'Both Jews and Muslims consider the biblical patriarchs Abraham, Isaac, Jacob and Joseph as spiritual ancestors.',
            synonyms: [
              'senior figure',
              'father',
              'paterfamilias',
              'leader',
              'elder',
              'grandfather',
            ],
          },
          {
            definition:
              'A bishop of one of the most ancient Christian sees (Alexandria, Antioch, Constantinople, Jerusalem, and formerly Rome).',
            example:
              'Christians there worshipped in Greek and were subject to the patriarch of Alexandria.',
          },
        ],
      },
    ],
  },
  genus: {
    word: 'genus',
    phonetics: [
      {
        text: '/ˈdʒiːnəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/genus_gb_1.mp3',
      },
      {
        text: '/ˈdʒɛnəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/genus_gb_1_8.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A principal taxonomic category that ranks above species and below family, and is denoted by a capitalized Latin name, e.g. Leo.',
            example:
              'The identification of two named genera in a single organism presents a taxonomic dilemma.',
            synonyms: ['group', 'subdivision', 'subfamily'],
          },
        ],
      },
    ],
  },
  sterile: {
    word: 'sterile',
    phonetics: [
      {
        text: '/ˈstɛrəl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/sterile_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Not able to produce children or young.',
            example: 'the disease had made him sterile',
            synonyms: ['infertile'],
          },
          {
            definition:
              'Free from bacteria or other living microorganisms; totally clean.',
            example: 'a sterile needle and syringes',
            synonyms: [
              'aseptic',
              'sterilized',
              'germ-free',
              'antiseptic',
              'disinfected',
              'uninfected',
              'uncontaminated',
              'unpolluted',
              'pure',
              'clean',
            ],
          },
        ],
      },
    ],
  },
  induce: {
    word: 'induce',
    phonetics: [
      {
        text: '/ɪnˈd(j)us/',
        audio: 'https://lex-audio.useremarkable.com/mp3/induce_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Succeed in persuading or influencing (someone) to do something.',
            example: 'the pickets induced many workers to stay away',
            synonyms: [
              'persuade',
              'convince',
              'prevail upon',
              'get',
              'make',
              'prompt',
              'move',
              'inspire',
              'instigate',
              'influence',
              'exert influence on',
              'press',
              'urge',
              'incite',
              'encourage',
              'impel',
              'actuate',
              'motivate',
            ],
          },
          {
            definition: 'Bring about or give rise to.',
            example: 'none of these measures induced a change of policy',
            synonyms: [
              'bring about',
              'bring on',
              'cause',
              'be the cause of',
              'produce',
              'effect',
              'create',
              'give rise to',
              'generate',
              'originate',
              'instigate',
              'engender',
              'occasion',
              'set in motion',
              'develop',
              'lead to',
              'result in',
              'have as a consequence',
              'have as a result',
              'trigger off',
              'spark off',
              'whip up',
              'stir up',
              'kindle',
              'arouse',
              'rouse',
              'foster',
              'promote',
              'encourage',
            ],
          },
          {
            definition:
              'Bring on (the birth of a baby) artificially, typically by the use of drugs.',
          },
          {
            definition: 'Derive by inductive reasoning.',
            example:
              'from the experimental evidence, one infers or induces the hypothesis',
          },
        ],
      },
    ],
  },
  trait: {
    word: 'trait',
    phonetics: [
      {
        text: '/treɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/trait_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A distinguishing quality or characteristic, typically one belonging to a person.',
            example:
              'he was a letter-of-the-law man, a common trait among coaches',
            synonyms: [
              'characteristic',
              'attribute',
              'feature',
              'quality',
              'essential quality',
              'property',
              'distinction',
              'idiosyncrasy',
              'peculiarity',
              'quirk',
              'foible',
              'singularity',
              'oddity',
              'eccentricity',
              'abnormality',
              'mark',
              'trademark',
              'hallmark',
              'earmark',
            ],
          },
        ],
      },
    ],
  },
  fertile: {
    word: 'fertile',
    phonetics: [
      {
        text: '/ˈfərdl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fertile_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of soil or land) producing or capable of producing abundant vegetation or crops.',
            example: 'fields along the fertile flood plains of the river',
            synonyms: [
              'fecund',
              'fruitful',
              'productive',
              'high-yielding',
              'prolific',
              'proliferating',
              'propagative',
              'generative',
            ],
          },
        ],
      },
    ],
  },
  offspring: {
    word: 'offspring',
    phonetics: [
      {
        text: '/ˈɔfˌsprɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/offspring_us_1_rr.mp3',
      },
      {
        text: '/ˈɑfˌsprɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/offspring_us_2_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: "A person's child or children.",
            example: 'the offspring of middle-class parents',
            synonyms: [
              'children',
              'sons and daughters',
              'progeny',
              'family',
              'youngsters',
              'babies',
              'brood',
            ],
          },
        ],
      },
    ],
  },
  fathom: {
    word: 'fathom',
    phonetics: [
      {
        text: '/ˈfæðəm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fathom_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A unit of length equal to six feet (approximately 1.8 m), chiefly used in reference to the depth of water.',
            example: "sonar says that we're in eighteen fathoms",
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Understand (a difficult problem or an enigmatic person) after much thought.',
            example: "he couldn't fathom why she was being so anxious",
            synonyms: [
              'understand',
              'comprehend',
              'work out',
              'fathom out',
              'make sense of',
              'grasp',
              'catch',
              'follow',
              'perceive',
              'make out',
              'penetrate',
              'divine',
              'search out',
              'ferret out',
              'puzzle out',
              'take in',
              'assimilate',
              'absorb',
              'get to the bottom of',
            ],
          },
          {
            definition: 'Measure the depth of (water)',
            example: 'an attempt to fathom the ocean',
            synonyms: ['measure the depth of', 'sound', 'plumb', 'probe'],
          },
        ],
      },
    ],
  },
  inkling: {
    word: 'inkling',
    phonetics: [
      {
        text: '/ˈɪŋklɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/inkling_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A slight knowledge or suspicion; a hint.',
            example:
              'the records give us an inkling of how people saw the world',
            synonyms: ['idea', 'vague idea', 'notion', 'glimmering'],
          },
        ],
      },
    ],
  },
  archaic: {
    word: 'archaic',
    phonetics: [
      {
        text: '/ɑrˈkeɪɪk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/archaic_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Very old or old-fashioned.',
            example: 'prisons are run on archaic methods',
            synonyms: [
              'obsolete',
              'obsolescent',
              'out of date',
              'anachronistic',
              'old-fashioned',
              'outmoded',
              'behind the times',
              'bygone',
              'antiquated',
              'antique',
              'superannuated',
              'antediluvian',
              'past its prime',
              'having seen better days',
              'olde worlde',
              'old-fangled',
            ],
          },
        ],
      },
    ],
  },
  matriarch: {
    word: 'matriarch',
    phonetics: [
      {
        text: '/ˈmeɪtriˌɑrk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/matriarch_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A woman who is the head of a family or tribe.',
            example:
              'in some cultures the mother proceeds to the status of a matriarch',
          },
        ],
      },
    ],
  },
  macho: {
    word: 'macho',
    phonetics: [
      {
        text: '/ˈmɑtʃoʊ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/macho_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: "Showing aggressive pride in one's masculinity.",
            example: 'the big macho tough guy',
            synonyms: [
              'male',
              'aggressively male',
              'masculine',
              'unpleasantly masculine',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A man who is aggressively proud of his masculinity.',
            example: 'I realized just what a macho I was at heart',
            synonyms: ['red-blooded male', 'macho man', 'muscleman'],
          },
        ],
      },
    ],
  },
  weary: {
    word: 'weary',
    phonetics: [
      {
        text: '/ˈwɪri/',
        audio: 'https://lex-audio.useremarkable.com/mp3/weary_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Feeling or showing tiredness, especially as a result of excessive exertion or lack of sleep.',
            example: 'he gave a long, weary sigh',
            synonyms: [
              'tired',
              'tired out',
              'worn out',
              'exhausted',
              'fatigued',
              'overtired',
              'sleepy',
              'drowsy',
              'wearied',
              'sapped',
              'dog-tired',
              'spent',
              'drained',
              'jet-lagged',
              'played out',
              'debilitated',
              'prostrate',
              'enervated',
              'jaded',
              'low',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Cause to become tired.',
            example: 'she was wearied by her persistent cough',
            synonyms: [
              'tiring',
              'exhausting',
              'wearing',
              'trying',
              'fatiguing',
              'enervating',
              'draining',
              'sapping',
              'stressful',
              'weary',
              'crushing',
            ],
          },
        ],
      },
    ],
  },
  chafe: {
    word: 'chafe',
    phonetics: [
      {
        text: '/tʃeɪf/',
        audio: 'https://lex-audio.useremarkable.com/mp3/chafe_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              '(with reference to a part of the body) make or become sore by rubbing against something.',
            example: 'the collar chafed his neck',
            synonyms: [
              'abrade',
              'graze',
              'grate',
              'rub against',
              'rub painfully',
              'gall',
              'skin',
              'scrape',
              'scratch',
              'rasp',
            ],
          },
          {
            definition:
              'Rub (a part of the body) to restore warmth or sensation.',
            example: 'I chafed her feet and wrapped the blanket round her',
            synonyms: ['rub', 'warm', 'warm up'],
          },
          {
            definition:
              'Become or make annoyed or impatient because of a restriction or inconvenience.',
            example: 'the bank chafed at the restrictions imposed upon it',
            synonyms: [
              'be impatient',
              'be angry',
              'be annoyed',
              'be irritated',
              'be incensed',
              'be exasperated',
              'be frustrated',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Wear or damage caused by rubbing.',
            example: 'to prevent chafe the ropes should lie flat',
            synonyms: ['inflammation', 'swelling', 'lesion'],
          },
          {
            definition: 'A state of annoyance.',
            example: 'into what an unprofitable chafe you have put yourself!',
          },
        ],
      },
    ],
  },
  youth: {
    word: 'youth',
    phonetics: [
      {
        text: '/juθ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/youth_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'nombre',
        definitions: [
          {
            definition: 'The period between childhood and adult age.',
            example: 'he had been a keen sportsman in his youth',
            synonyms: [
              'early years',
              'early life',
              'young days',
              'teens',
              'teenage years',
              'adolescence',
              'preadolescence',
              'young adulthood',
              'boyhood',
              'girlhood',
              'childhood',
            ],
          },
          {
            definition: 'A young man.',
            example: 'he was attacked by a gang of youths',
            synonyms: [
              'young man',
              'boy',
              'lad',
              'youngster',
              'juvenile',
              'teenager',
              'adolescent',
              'junior',
              'minor',
              'young one',
            ],
          },
        ],
      },
    ],
  },
  temperamental: {
    word: 'temperamental',
    phonetics: [
      {
        text: '/ˌtɛmp(ə)rəˈmɛn(t)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/temperamental_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: '(of a person) liable to unreasonable changes of mood.',
            example:
              'a temperamental engine that had a way of conking out when put in gear',
            synonyms: [
              'volatile',
              'excitable',
              'emotional',
              'overemotional',
              'mercurial',
              'capricious',
              'erratic',
              'unpredictable',
              'changeable',
              'inconsistent',
              'unstable',
              'hot-headed',
              'fiery',
              'explosive',
              'hot-tempered',
              'short-tempered',
              'quick-tempered',
              'irritable',
              'irascible',
              'impatient',
              'petulant',
              'prima donna-ish',
              'melodramatic',
            ],
          },
          {
            definition: "Relating to a person's temperament.",
            example:
              'they were firm friends in spite of temperamental differences',
            synonyms: [
              'inherent',
              'innate',
              'natural',
              'inborn',
              'constitutional',
              'deep-rooted',
              'ingrained',
              'congenital',
            ],
          },
        ],
      },
    ],
  },
  myriad: {
    word: 'myriad',
    phonetics: [
      {
        text: '/ˈmɪriəd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/myriad_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A countless or extremely great number.',
            example: 'networks connecting a myriad of computers',
            synonyms: [
              'multitude',
              'a great number',
              'a great quantity',
              'a large number',
              'a large quantity',
              'a lot',
              'scores',
              'quantities',
              'mass',
              'crowd',
              'throng',
              'host',
              'droves',
              'horde',
              'army',
              'legion',
              'sea',
              'swarm',
            ],
          },
          {
            definition:
              '(chiefly in classical history) a unit of ten thousand.',
          },
        ],
      },
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Countless or extremely great in number.',
            example: 'the myriad lights of the city',
            synonyms: [
              'innumerable',
              'countless',
              'infinite',
              'numberless',
              'unlimited',
              'untold',
              'limitless',
              'unnumbered',
              'immeasurable',
              'multitudinous',
              'numerous',
              'manifold',
              'multiple',
              'legion',
              'several',
              'many',
              'various',
              'sundry',
              'diverse',
              'multifarious',
            ],
          },
        ],
      },
    ],
  },
  elaborate: {
    word: 'elaborate',
    phonetics: [
      {
        text: '/əˈlæb(ə)rət/',
        audio: 'https://lex-audio.useremarkable.com/mp3/elaborate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Involving many carefully arranged parts or details; detailed and complicated in design and planning.',
            example: 'elaborate security precautions',
            synonyms: [
              'complicated',
              'detailed',
              'intricate',
              'complex',
              'involved',
              'tortuous',
              'convoluted',
              'serpentine',
              'tangled',
              'knotty',
              'confusing',
              'bewildering',
              'baffling',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Develop or present (a theory, policy, or system) in detail.',
            example:
              'the key idea of the book is expressed in the title and elaborated in the text',
            synonyms: [
              'narrate',
              'relate',
              'recount',
              'tell',
              'reveal',
              'make known',
              'disclose',
              'divulge',
              'present',
              'communicate',
              'report',
              'recite',
              'portray',
              'elaborate',
              'spell out',
              'give an account of',
              'set forth',
              'set out',
            ],
          },
          {
            definition:
              '(of a natural agency) produce (a substance) from its elements or simpler constituents.',
            example:
              'many amino acid and peptide hormones are elaborated by neural tissue',
          },
        ],
      },
    ],
  },
  intricate: {
    word: 'intricate',
    phonetics: [
      {
        text: '/ˈɪntrəkət/',
        audio: 'https://lex-audio.useremarkable.com/mp3/intricate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition: 'Very complicated or detailed.',
            example: 'an intricate network of canals',
            synonyms: [
              'complex',
              'complicated',
              'convoluted',
              'tangled',
              'entangled',
              'ravelled',
              'twisted',
              'knotty',
              'maze-like',
              'labyrinthine',
              'winding',
              'serpentine',
              'circuitous',
              'sinuous',
            ],
          },
        ],
      },
    ],
  },
  coalesce: {
    word: 'coalesce',
    phonetics: [
      {
        text: '/ˌkoʊəˈlɛs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/coalesce_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'intransitive verb',
        definitions: [
          {
            definition: 'Come together to form one mass or whole.',
            example: 'the puddles had coalesced into shallow streams',
            synonyms: [
              'unite',
              'join together',
              'combine',
              'merge',
              'fuse',
              'mingle',
              'meld',
              'blend',
              'intermingle',
              'knit',
              'knit together',
              'amalgamate',
              'consolidate',
              'integrate',
              'affiliate',
              'link up',
              'homogenize',
              'synthesize',
              'converge',
            ],
          },
        ],
      },
    ],
  },
  transcend: {
    word: 'transcend',
    phonetics: [
      {
        text: '/træn(t)ˈsɛnd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/transcend_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Be or go beyond the range or limits of (something abstract, typically a conceptual field or division)',
            example: 'this was an issue transcending party politics',
            synonyms: ['go beyond', 'rise above', 'cut across'],
          },
        ],
      },
    ],
  },
  coinage: {
    word: 'coinage',
    phonetics: [
      {
        text: '/ˈkɔɪnɪdʒ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/coinage_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Coins collectively.',
            example: 'the volume of coinage in circulation',
            synonyms: [
              'coins',
              'coinage',
              'coin of the realm',
              'change',
              'loose change',
              'small change',
              'silver',
              'copper',
              'coppers',
              'gold',
            ],
          },
          {
            definition: 'The invention of a new word or phrase.',
            example: "the word is of Derrida's own coinage",
            synonyms: [
              'innovation',
              'origination',
              'creation',
              'design',
              'contraption',
              'contrivance',
              'construction',
              'device',
              'gadget',
              'apparatus',
              'machine',
            ],
          },
        ],
      },
    ],
  },
  worship: {
    word: 'worship',
    phonetics: [
      {
        text: '/ˈwərʃəp/',
        audio: 'https://lex-audio.useremarkable.com/mp3/worship_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The feeling or expression of reverence and adoration for a deity.',
            example: 'the worship of God',
            synonyms: [
              'reverence',
              'revering',
              'worshipping',
              'veneration',
              'venerating',
              'adoration',
              'adoring',
              '-olatry',
              'devotion',
              'praise',
              'thanksgiving',
              'praising',
              'praying to',
              'glorification',
              'glorifying',
              'glory',
              'exaltation',
              'exalting',
              'extolment',
              'extolling',
              'homage',
              'respect',
              'honour',
              'honouring',
              'esteem',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Show reverence and adoration for (a deity); honor with religious rites.',
            example: 'the Maya built jungle pyramids to worship their gods',
            synonyms: [
              'revere',
              'reverence',
              'venerate',
              'pay homage to',
              'honour',
              'adore',
              'praise',
              'pray to',
              'bow down before',
              'glorify',
              'exalt',
              'extol',
            ],
          },
        ],
      },
    ],
  },
  polytheistic: {
    word: 'polytheistic',
    phonetics: [
      {
        text: '/ˌpɑliˌθiˈɪstɪk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/polytheistic_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Relating to or characterized by belief in or worship of more than one god.',
          },
        ],
      },
    ],
  },
  megafauna: {
    word: 'megafauna',
    phonetics: [
      {
        text: '/ˈmɛɡəˌfɔnə/',
        audio: 'https://lex-audio.useremarkable.com/mp3/megafauna_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The large mammals of a particular region, habitat, or geological period.',
            example:
              "A visitor to America's Yellowstone National Park is sure to spot some of the large mammals, or megafauna, for which the region is justly famous.",
          },
        ],
      },
    ],
  },
  fictive: {
    word: 'fictive',
    phonetics: [
      {
        text: '/ˈfɪktɪv/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fictive_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Creating or created by imagination.',
            example: "the novel's fictive universe",
            synonyms: [
              'imaginary',
              'imagined',
              'pretended',
              'make-believe',
              'made-up',
              'fantasy',
              'fantasized',
              'fancied',
              'dream',
              'dreamed-up',
              'unreal',
              'fanciful',
              'invented',
              'fictitious',
              'fictive',
              'mythical',
              'feigned',
              'fake',
              'mock',
              'imitative',
              'sham',
              'simulated',
              'artificial',
              'ersatz',
              'dummy',
              'false',
              'faux',
              'spurious',
              'bogus',
              'counterfeit',
              'fraudulent',
              'forged',
              'pseudo',
            ],
          },
        ],
      },
    ],
  },
  cognitive: {
    word: 'cognitive',
    phonetics: [
      {
        text: '/ˈkɑɡnədɪv/',
        audio: 'https://lex-audio.useremarkable.com/mp3/cognitive_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Relating to cognition.',
            example: 'the cognitive processes involved in reading',
            synonyms: [
              'mental',
              'emotional',
              'intellectual',
              'inner',
              'non-physical',
              'cerebral',
              'brain',
              'rational',
              'cognitive',
              'abstract',
              'conceptual',
              'theoretical',
            ],
          },
        ],
      },
    ],
  },
  phenomenon: {
    word: 'phenomenon',
    phonetics: [
      {
        text: '/fəˈnɑməˌnɑn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/phenomenon_us_3_rr.mp3',
      },
      {
        text: '/fəˈnɑməˌnən/',
        audio: 'https://lex-audio.useremarkable.com/mp3/phenomenon_us_1_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A fact or situation that is observed to exist or happen, especially one whose cause or explanation is in question.',
            example: 'glaciers are unique and interesting natural phenomena',
            synonyms: [
              'occurrence',
              'event',
              'happening',
              'fact',
              'situation',
              'circumstance',
              'experience',
              'case',
              'incident',
              'episode',
              'sight',
              'appearance',
              'thing',
            ],
          },
          {
            definition: 'A remarkable person, thing, or event.',
            example:
              'the band was a pop phenomenon just for their sales figures alone',
            synonyms: [
              'marvel',
              'sensation',
              'wonder',
              'prodigy',
              'miracle',
              'rarity',
              'nonpareil',
              'curiosity',
              'spectacle',
            ],
          },
          {
            definition:
              "The object of a person's perception; what the senses or the mind notice.",
            example:
              'No empirical phenomena seem to demand a notion of backward causation for our understanding of them.',
          },
        ],
      },
    ],
  },
  salivate: {
    word: 'salivate',
    phonetics: [
      {
        text: '/ˈsæləˌveɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/salivate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'intransitive verb',
        definitions: [
          {
            definition: 'Secrete saliva, especially in anticipation of food.',
            example: 'the delicious aroma of rich stews made us salivate',
          },
          {
            definition:
              'Display great relish at the sight or prospect of something.',
            example:
              'I was fairly salivating at the prospect of a $10 million loan',
          },
        ],
      },
    ],
  },
  compassion: {
    word: 'compassion',
    phonetics: [
      {
        text: '/kəmˈpæʃən/',
        audio: 'https://lex-audio.useremarkable.com/mp3/compassion_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'Sympathetic pity and concern for the sufferings or misfortunes of others.',
            example: 'the victims should be treated with compassion',
            synonyms: [
              'pity',
              'sympathy',
              'feeling',
              'fellow feeling',
              'empathy',
              'understanding',
              'care',
              'concern',
              'solicitude',
              'solicitousness',
              'sensitivity',
              'tender-heartedness',
              'soft-heartedness',
              'warm-heartedness',
              'warmth',
              'love',
              'brotherly love',
              'tenderness',
              'gentleness',
              'mercy',
              'mercifulness',
              'leniency',
              'lenience',
              'tolerance',
              'consideration',
              'kindness',
              'humanity',
              'humaneness',
              'kind-heartedness',
              'charity',
              'benevolence',
            ],
          },
        ],
      },
    ],
  },
  saunter: {
    word: 'saunter',
    phonetics: [
      {
        text: '/ˈsɔːntə/',
        audio: 'https://lex-audio.useremarkable.com/mp3/saunter_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Walk in a slow, relaxed manner.',
            example: 'Adam sauntered into the room',
            synonyms: [
              'stroll',
              'amble',
              'wander',
              'meander',
              'drift',
              'maunder',
              'potter',
              'walk',
              'promenade',
              'ramble',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A leisurely stroll.',
            example: 'a quiet saunter down the road',
            synonyms: [
              'stroll',
              'amble',
              'wander',
              'meander',
              'walk',
              'turn',
              'constitutional',
              'ramble',
              'airing',
              'promenade',
              'breather',
            ],
          },
        ],
      },
    ],
  },
  perpetually: {
    word: 'perpetually',
    phonetics: [
      {
        text: '/pərˈpɛtʃuəli/',
        audio: 'https://lex-audio.useremarkable.com/mp3/perpetually_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adverb',
        definitions: [
          {
            definition: 'In a way that never ends or changes; constantly.',
            example: 'perpetually hungry teenage boys',
          },
        ],
      },
    ],
  },
  vogue: {
    word: 'vogue',
    phonetics: [
      {
        text: '/voʊɡ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/vogue_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The prevailing fashion or style at a particular time.',
            example: 'the vogue is to make realistic films',
            synonyms: [
              'fashion',
              'mode',
              'style',
              'trend',
              'taste',
              'fad',
              'fancy',
              'passing fancy',
              'craze',
              'rage',
              'enthusiasm',
              'passion',
              'infatuation',
              'obsession',
              'mania',
              'fascination',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Popular; fashionable.',
            example: "“citizenship” was to be the government's vogue word",
          },
        ],
      },
      {
        partOfSpeech: 'intransitive verb',
        definitions: [
          {
            definition:
              'Dance to music in such a way as to imitate the characteristic poses struck by a model on a catwalk.',
            example:
              'I ‘vogued’ down the street and at parties with my friends.',
          },
        ],
      },
    ],
  },
  condescending: {
    word: 'condescending',
    phonetics: [
      {
        text: '/ˌkɑndəˈsɛndɪŋ/',
        audio:
          'https://lex-audio.useremarkable.com/mp3/xcondescending_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition:
              'Having or showing a feeling of patronizing superiority.',
            example: 'she thought the teachers were arrogant and condescending',
            synonyms: [
              'patronizing',
              'supercilious',
              'superior',
              'snobbish',
              'snobby',
              'scornful',
              'disdainful',
              'lofty',
              'lordly',
              'haughty',
              'imperious',
            ],
          },
        ],
      },
    ],
  },
  delude: {
    word: 'delude',
    phonetics: [
      {
        text: '/dəˈlud/',
        audio: 'https://lex-audio.useremarkable.com/mp3/delude_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Impose a misleading belief upon (someone); deceive; fool.',
            example: 'too many theorists have deluded the public',
            synonyms: [
              'mislead',
              'deceive',
              'fool',
              'take in',
              'trick',
              'dupe',
              'hoodwink',
              'double-cross',
              'gull',
              'beguile',
              'lead on',
            ],
          },
        ],
      },
    ],
  },
  neuroticism: {
    word: 'neuroticism',
    phonetics: [
      {
        text: '/n(j)ʊˈrɑdəˌsɪzəm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/neuroticism_us_1.mp3',
      },
    ],
    meanings: [],
  },
  repression: {
    word: 'repression',
    phonetics: [
      {
        text: '/rəˈprɛʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/repression_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The action of subduing someone or something by force.',
            example:
              'students sparked off events that ended in brutal repression',
            synonyms: [
              'suppression',
              'quelling',
              'quashing',
              'subduing',
              'crushing',
              'squashing',
              'stamping out',
            ],
          },
        ],
      },
    ],
  },
  despair: {
    word: 'despair',
    phonetics: [
      {
        text: '/dəˈspɛr/',
        audio: 'https://lex-audio.useremarkable.com/mp3/despair_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The complete loss or absence of hope.',
            example: 'in despair, I hit the bottle',
            synonyms: [
              'hopelessness',
              'desperation',
              'distress',
              'anguish',
              'pain',
              'unhappiness',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'intransitive verb',
        definitions: [
          {
            definition: 'Lose or be without hope.',
            example: 'we should not despair',
            synonyms: [
              'lose hope',
              'give up hope',
              'abandon hope',
              'give up',
              'lose heart',
              'be discouraged',
              'be despondent',
              'be demoralized',
              'resign oneself',
              'throw in the sponge',
              'throw in the towel',
              'quit',
              'surrender',
            ],
          },
        ],
      },
    ],
  },
  eerily: {
    word: 'eerily',
    phonetics: [
      {
        text: '/ˈɪrɪli/',
        audio: 'https://lex-audio.useremarkable.com/mp3/eerily_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adverb',
        definitions: [
          {
            definition: 'In a strange and frightening manner.',
            example: 'their footsteps echoed eerily',
          },
        ],
      },
    ],
  },
  attain: {
    word: 'attain',
    phonetics: [
      {
        text: '/əˈteɪn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/attain_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Succeed in achieving (something that one has worked for)',
            example: 'clarify your objectives and ways of attaining them',
            synonyms: [
              'achieve',
              'accomplish',
              'reach',
              'arrive at',
              'come by',
              'obtain',
              'gain',
              'procure',
              'secure',
              'get',
              'grasp',
              'hook',
              'net',
              'win',
              'earn',
              'acquire',
              'establish',
              'make',
            ],
          },
        ],
      },
    ],
  },
  alleviate: {
    word: 'alleviate',
    phonetics: [
      {
        text: '/əˈliviˌeɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/alleviate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Make (suffering, deficiency, or a problem) less severe.',
            example: "he couldn't prevent her pain, only alleviate it",
            synonyms: [
              'reduce',
              'ease',
              'relieve',
              'take the edge off',
              'deaden',
              'dull',
              'diminish',
              'lessen',
              'weaken',
              'lighten',
              'attenuate',
              'allay',
              'assuage',
              'palliate',
              'damp',
              'soothe',
              'help',
              'soften',
              'temper',
              'control',
              'still',
              'quell',
              'tone down',
              'blunt',
              'dilute',
              'moderate',
              'mitigate',
              'modify',
              'abate',
              'lull',
              'pacify',
              'placate',
              'mollify',
              'sweeten',
            ],
          },
        ],
      },
    ],
  },
  obnoxious: {
    word: 'obnoxious',
    phonetics: [
      {
        text: '/əbˈnɑkʃəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/obnoxious_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Extremely unpleasant.',
            example: 'obnoxious odors',
            synonyms: [
              'disagreeable',
              'irksome',
              'troublesome',
              'annoying',
              'irritating',
              'vexatious',
              'displeasing',
              'uncomfortable',
              'distressing',
              'nasty',
              'horrible',
              'appalling',
              'terrible',
              'awful',
              'dreadful',
              'hateful',
              'detestable',
              'miserable',
              'abominable',
              'execrable',
              'odious',
              'invidious',
              'objectionable',
              'offensive',
              'obnoxious',
              'repugnant',
              'repulsive',
              'repellent',
              'revolting',
              'disgusting',
              'distasteful',
              'nauseating',
              'unsavoury',
              'unpalatable',
              'ugly',
            ],
          },
        ],
      },
    ],
  },
  arbitrary: {
    word: 'arbitrary',
    phonetics: [
      {
        text: '/ˈɑrbəˌtrɛri/',
        audio: 'https://lex-audio.useremarkable.com/mp3/arbitrary_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Based on random choice or personal whim, rather than any reason or system.',
            example: 'his mealtimes were entirely arbitrary',
            synonyms: [
              'capricious',
              'whimsical',
              'random',
              'chance',
              'erratic',
              'unpredictable',
              'inconsistent',
              'wild',
              'hit-or-miss',
              'haphazard',
              'casual',
            ],
          },
        ],
      },
    ],
  },
  compulsive: {
    word: 'compulsive',
    phonetics: [
      {
        text: '/kəmˈpəlsɪv/',
        audio: 'https://lex-audio.useremarkable.com/mp3/compulsive_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              "Resulting from or relating to an irresistible urge, especially one that is against one's conscious wishes.",
            example: 'compulsive eating',
            synonyms: [
              'irresistible',
              'uncontrollable',
              'compelling',
              'driving',
              'overwhelming',
              'overpowering',
              'urgent',
              'besetting',
            ],
          },
          {
            definition: 'Irresistibly interesting or exciting; compelling.',
            example: 'this play is compulsive viewing',
            synonyms: [
              'fascinating',
              'compelling',
              'gripping',
              'riveting',
              'engrossing',
              'totally absorbing',
              'enthralling',
              'captivating',
              'spellbinding',
              'mesmerizing',
              'mesmeric',
              'entrancing',
            ],
          },
        ],
      },
    ],
  },
  salvation: {
    word: 'salvation',
    phonetics: [
      {
        text: '/sælˈveɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/salvation_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Preservation or deliverance from harm, ruin, or loss.',
            example: 'they try to sell it to us as economic salvation',
            synonyms: [
              'lifeline',
              'preservation',
              'conservation',
              'means of escape',
            ],
          },
          {
            definition:
              'Deliverance from sin and its consequences, believed by Christians to be brought about by faith in Christ.',
            example: 'the Christian gospel of salvation for all mankind',
            synonyms: [
              'redemption',
              'deliverance',
              'saving',
              'help',
              'reclamation',
            ],
          },
        ],
      },
    ],
  },
  sabotage: {
    word: 'sabotage',
    phonetics: [
      {
        text: '/ˈsæbəˌtɑʒ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/sabotage_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Deliberately destroy, damage, or obstruct (something), especially for political or military advantage.',
            example:
              'power lines from South Africa were sabotaged by rebel forces',
            synonyms: [
              'wreck',
              'deliberately damage',
              'vandalize',
              'destroy',
              'obstruct',
              'disrupt',
              'cripple',
              'impair',
              'incapacitate',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The action of sabotaging something.',
            example: 'a coordinated campaign of sabotage',
            synonyms: [
              'wrecking',
              'deliberate damage',
              'vandalism',
              'destruction',
              'obstruction',
              'disruption',
              'crippling',
              'impairment',
              'incapacitation',
            ],
          },
        ],
      },
    ],
  },
  adolescent: {
    word: 'adolescent',
    phonetics: [
      {
        text: '/ˌædəˈlɛs(ə)nt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/adolescent_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a young person) in the process of developing from a child into an adult.',
            example:
              'many parents find it hard to understand their adolescent children',
            synonyms: [
              'teenage',
              'teenaged',
              'pubescent',
              'youthful',
              'young',
              'juvenile',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'An adolescent boy or girl.',
            example: 'the books are aimed at children and adolescents',
            synonyms: [
              'teenager',
              'youngster',
              'young person',
              'young adult',
              'young man',
              'young woman',
              'young lady',
              'young one',
              'youth',
              'juvenile',
              'minor',
            ],
          },
        ],
      },
    ],
  },
  fruition: {
    word: 'fruition',
    phonetics: [
      {
        text: '/fruˈɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fruition_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The point at which a plan or project is realized.',
            example: 'the plans have come to fruition sooner than expected',
          },
          {definition: 'The state or action of producing fruit.'},
        ],
      },
    ],
  },
  summit: {
    word: 'summit',
    phonetics: [
      {
        text: '/ˈsəmət/',
        audio: 'https://lex-audio.useremarkable.com/mp3/summit_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The highest point of a hill or mountain.',
            example: 'she climbed back up the path toward the summit',
            synonyms: [
              'top',
              'peak',
              'mountaintop',
              'crest',
              'crown',
              'apex',
              'vertex',
              'apogee',
              'tip',
              'cap',
            ],
          },
          {
            definition: 'A meeting between heads of government.',
            example: 'a summit conference',
            synonyms: [
              'meeting',
              'negotiation',
              'conference',
              'talk',
              'talks',
              'discussion',
              'conclave',
              'consultation',
              'deliberation',
              'dialogue',
              'parley',
              'colloquy',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Reach the summit of (a mountain or hill)',
            example: 'in 2013, 658 climbers summited Everest',
          },
        ],
      },
    ],
  },
  narrative: {
    word: 'narrative',
    phonetics: [
      {
        text: '/ˈnɛrədɪv/',
        audio: 'https://lex-audio.useremarkable.com/mp3/narrative_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A spoken or written account of connected events; a story.',
            example: 'the hero of his modest narrative',
            synonyms: [
              'account',
              'story',
              'tale',
              'chronicle',
              'history',
              'description',
              'record',
              'portrayal',
              'sketch',
              'portrait',
              'statement',
              'report',
              'rehearsal',
              'recital',
              'rendering',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'In the form of or concerned with narration.',
            example: 'a narrative poem',
          },
        ],
      },
    ],
  },
  admonishment: {
    word: 'admonishment',
    phonetics: [
      {
        text: '/ədˈmɑnɪʃmənt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/admonishment_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A firm warning or reprimand.',
            example:
              'as they were about to leave, he gave them one final admonishment',
          },
        ],
      },
    ],
  },
  virtue: {
    word: 'virtue',
    phonetics: [
      {
        text: '/ˈvərtʃu/',
        audio: 'https://lex-audio.useremarkable.com/mp3/virtue_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Behavior showing high moral standards.',
            example: 'paragons of virtue',
            synonyms: [
              'goodness',
              'virtuousness',
              'righteousness',
              'morality',
              'ethicalness',
              'uprightness',
              'upstandingness',
              'integrity',
              'dignity',
              'rectitude',
              'honesty',
              'honourableness',
              'honourability',
              'honour',
              'incorruptibility',
              'probity',
              'propriety',
              'decency',
              'respectability',
              'nobility',
              'nobility of soul',
              'nobility of spirit',
              'nobleness',
              'worthiness',
              'worth',
              'good',
              'trustworthiness',
              'meritoriousness',
              'irreproachableness',
              'blamelessness',
              'purity',
              'pureness',
              'lack of corruption',
              'merit',
            ],
          },
          {
            definition:
              '(in traditional Christian angelology) the seventh highest order of the ninefold celestial hierarchy.',
          },
        ],
      },
    ],
  },
  bogus: {
    word: 'bogus',
    phonetics: [
      {
        text: '/ˈboʊɡəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/bogus_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Not genuine or true; fake.',
            example: 'a bogus insurance claim',
            synonyms: [
              'fake',
              'faked',
              'spurious',
              'false',
              'fraudulent',
              'sham',
              'deceptive',
              'misleading',
              'pretended',
            ],
          },
        ],
      },
    ],
  },
  mundane: {
    word: 'mundane',
    phonetics: [
      {
        text: '/ˌmənˈdeɪn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/mundane_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Lacking interest or excitement; dull.',
            example: 'seeking a way out of his mundane, humdrum existence',
            synonyms: [
              'humdrum',
              'dull',
              'boring',
              'tedious',
              'monotonous',
              'tiresome',
              'wearisome',
              'prosaic',
              'unexciting',
              'uninteresting',
              'uneventful',
              'unvarying',
              'unvaried',
              'unremarkable',
              'repetitive',
              'repetitious',
              'routine',
              'ordinary',
              'everyday',
              'day-to-day',
              'quotidian',
              'run-of-the-mill',
              'commonplace',
              'common',
              'workaday',
              'usual',
              'pedestrian',
              'customary',
              'regular',
              'normal',
            ],
          },
          {
            definition:
              'Of this earthly world rather than a heavenly or spiritual one.',
            example: 'the boundaries of the mundane world',
            synonyms: [
              'earthly',
              'worldly',
              'terrestrial',
              'material',
              'temporal',
              'secular',
              'non-spiritual',
              'fleshly',
              'carnal',
              'sensual',
            ],
          },
        ],
      },
    ],
  },
  finagle: {
    word: 'finagle',
    phonetics: [
      {
        text: '/fɪˈneɪɡ(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/finagle_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Obtain by dishonest or devious means.',
            synonyms: [
              'deceive',
              'trick',
              'dupe',
              'outwit',
              'fool',
              'delude',
              'cheat',
              'take in',
              'bluff',
              'hoax',
              'mislead',
              'misguide',
              'lead on',
              'defraud',
              'double-cross',
              'swindle',
              'gull',
              'finagle',
              'get the better of',
            ],
          },
        ],
      },
    ],
  },
  rage: {
    word: 'rage',
    phonetics: [
      {
        text: '/reɪdʒ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/rage_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Violent, uncontrollable anger.',
            example: 'her face was distorted with rage',
            synonyms: [
              'temper',
              'fit of anger',
              'fit of fury',
              'fit of rage',
              'fit of temper',
              'fit of bad temper',
              'fit of ill temper',
              'towering rage',
              'bad temper',
              'pet',
              'fit of pique',
              'tantrum',
              'fury',
              'frenzy of anger',
              'frenzy of rage',
              'rampage',
              'paroxysm of anger',
              'paroxysm of rage',
              'passion',
              'bad mood',
              'mood',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'intransitive verb',
        definitions: [
          {
            definition: 'Feel or express violent uncontrollable anger.',
            example: 'he raged at the futility of it all',
            synonyms: [
              'be angry',
              'be furious',
              'be enraged',
              'be incensed',
              'be infuriated',
              'seethe',
              'be beside oneself',
              'have a fit',
              'boil',
              'be boiling over',
              'rant',
              'rave',
              'rant and rave',
              'storm',
              'fume',
              'spit',
              'breathe fire',
              'burn',
            ],
          },
        ],
      },
    ],
  },
  tangible: {
    word: 'tangible',
    phonetics: [
      {
        text: '/ˈtændʒəb(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/tangible_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Perceptible by touch.',
            example:
              'the atmosphere of neglect and abandonment was almost tangible',
            synonyms: [
              'touchable',
              'palpable',
              'tactile',
              'material',
              'physical',
              'real',
              'substantial',
              'corporeal',
              'solid',
              'concrete',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A thing that is perceptible by touch.',
            example:
              'these are the only tangibles upon which an assessment can be made',
          },
        ],
      },
    ],
  },
  inane: {
    word: 'inane',
    phonetics: [
      {
        text: '/ɪˈneɪn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/inane_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Silly; stupid.',
            example: "don't constantly badger people with inane questions",
            synonyms: [
              'silly',
              'foolish',
              'stupid',
              'fatuous',
              'idiotic',
              'absurd',
              'ridiculous',
              'ludicrous',
              'laughable',
              'risible',
              'imbecilic',
              'moronic',
              'cretinous',
              'unintelligent',
              'witless',
              'asinine',
              'pointless',
              'senseless',
              'frivolous',
              'nonsensical',
              'brainless',
              'mindless',
              'thoughtless',
              'vacuous',
              'vapid',
              'empty-headed',
            ],
          },
        ],
      },
    ],
  },
  fixate: {
    word: 'fixate',
    phonetics: [
      {
        text: '/fɪkˈseɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fixate_gb_1_8.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Cause (someone) to develop an obsessive attachment to someone or something.',
            example: 'he became fixated on the idea of a Third World War',
            synonyms: [
              'obsessed with',
              'preoccupied by',
              'preoccupied with',
              'obsessive about',
              'single-minded about',
              'possessed by',
              'gripped by',
              'in the grip of',
            ],
          },
          {
            definition: "Direct one's eyes towards.",
            example: 'subjects fixated a central point',
          },
        ],
      },
    ],
  },
  entitled: {
    word: 'entitled',
    phonetics: [
      {
        text: '/ɪnˈtaɪdld/',
        audio: 'https://lex-audio.useremarkable.com/mp3/entitled_us_1.mp3',
      },
      {
        text: '/ɛnˈtaɪdld/',
        audio: 'https://lex-audio.useremarkable.com/mp3/entitled_us_4.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Believing oneself to be inherently deserving of privileges or special treatment.',
            example:
              'kids who feel so entitled and think the world will revolve around them',
          },
        ],
      },
    ],
  },
  exude: {
    word: 'exude',
    phonetics: [
      {
        text: '/ɪɡˈzud/',
        audio: 'https://lex-audio.useremarkable.com/mp3/exude_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Discharge (moisture or a smell) slowly and steadily.',
            example: 'the beetle exudes a caustic liquid',
            synonyms: [
              'give off',
              'give out',
              'discharge',
              'release',
              'send out',
              'send forth',
              'emit',
              'issue',
              'emanate',
            ],
          },
          {
            definition:
              '(of a person) display (an emotion or quality) strongly and openly.',
            example: 'Mr. Thomas exuded friendship and goodwill',
            synonyms: [
              'emanate',
              'radiate',
              'ooze',
              'give out',
              'give forth',
              'send out',
              'issue',
              'emit',
            ],
          },
        ],
      },
    ],
  },
  alluring: {
    word: 'alluring',
    phonetics: [
      {
        text: '/əˈlʊrɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/alluring_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Powerfully and mysteriously attractive or fascinating; seductive.',
            example: 'the town offers alluring shops and restaurants',
            synonyms: [
              'enticing',
              'tempting',
              'attractive',
              'appealing',
              'fetching',
              'inviting',
              'glamorous',
              'captivating',
              'seductive',
            ],
          },
        ],
      },
    ],
  },
  contagious: {
    word: 'contagious',
    phonetics: [
      {
        text: '/kənˈteɪdʒəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/xcontagious_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a disease) spread from one person or organism to another by direct or indirect contact.',
            example: 'a contagious infection',
            synonyms: [
              'infectious',
              'communicable',
              'transmittable',
              'transmissible',
              'transferable',
              'spreadable',
            ],
          },
          {
            definition:
              '(of an emotion, feeling, or attitude) likely to spread to and affect others.',
            example: 'her enthusiasm is contagious',
          },
        ],
      },
    ],
  },
  construe: {
    word: 'construe',
    phonetics: [
      {
        text: '/kənˈstruː/',
        audio: 'https://lex-audio.useremarkable.com/mp3/xconstrue_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Interpret (a word or action) in a particular way.',
            example: 'his words could hardly be construed as an apology',
            synonyms: [
              'interpret',
              'understand',
              'read',
              'see',
              'take',
              'take to mean',
              'parse',
              'render',
              'analyse',
              'explain',
              'elucidate',
              'gloss',
              'decode',
            ],
          },
          {
            definition: 'Analyse the syntax of (a text, sentence, or word)',
            example: 'both verbs can be construed with either infinitive',
          },
        ],
      },
    ],
  },
  'self-aggrandizing': {
    word: 'self-aggrandizing',
    phonetics: [
      {
        text: '/ˌsɛlfəˈɡrænˌdaɪzɪŋ/',
        audio:
          'https://lex-audio.useremarkable.com/mp3/self_aggrandizing_1_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {definition: 'Promoting oneself as being powerful or important.'},
        ],
      },
    ],
  },
  affirmation: {
    word: 'affirmation',
    phonetics: [
      {
        text: '/ˌæfərˈmeɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/affirmation_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The action or process of affirming something or being affirmed.',
            example: 'he nodded in affirmation',
            synonyms: [
              'assertion',
              'declaration',
              'statement',
              'proclamation',
              'pronouncement',
              'attestation',
              'assurance',
            ],
          },
          {
            definition: 'Emotional support or encouragement.',
            example:
              "the lack of one or both parents' affirmation leaves some children emotionally crippled",
          },
        ],
      },
    ],
  },
  impervious: {
    word: 'impervious',
    phonetics: [
      {
        text: '/ɪmˈpərviəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/impervious_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Not allowing fluid to pass through.',
            example: 'an impervious layer of basaltic clay',
            synonyms: [
              'impermeable',
              'impenetrable',
              'impregnable',
              'waterproof',
              'watertight',
              'water-resistant',
              'water-repellent',
            ],
          },
        ],
      },
    ],
  },
  facade: {
    word: 'facade',
    phonetics: [
      {
        text: '/fəˈsɑd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/facade_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The face of a building, especially the principal front that looks onto a street or open space.',
            example:
              'There will also be a substantial increase in office space and the front facade of the building is to undergo a total makeover.',
            synonyms: [
              'front',
              'frontage',
              'face',
              'aspect',
              'elevation',
              'exterior',
              'outside',
            ],
          },
        ],
      },
    ],
  },
  rummage: {
    word: 'rummage',
    phonetics: [
      {
        text: '/ˈrʌmɪdʒ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/rummage_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Search unsystematically and untidily through something.',
            example: 'he rummaged in his pocket for a handkerchief',
            synonyms: [
              'search',
              'search through',
              'hunt through',
              'scrabble about in',
              'scrabble around in',
              'root about in',
              'root around in',
              'ferret in',
              'ferret about in',
              'ferret in',
              'ferret around in',
              'fish about in',
              'fish around in',
              'poke around in',
              'dig in',
              'grub about in',
              'delve in',
              'go through',
              'explore',
              'sift through',
              'rifle through',
              'scour',
              'ransack',
              'turn over',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'An unsystematic and untidy search.',
            example: 'open up the box and have a rummage around',
          },
        ],
      },
    ],
  },
  claw: {
    word: 'claw',
    phonetics: [
      {
        text: '/klɔː/',
        audio: 'https://lex-audio.useremarkable.com/mp3/claw_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A curved pointed horny nail on each digit of the foot in birds, lizards, and some mammals.',
            example:
              "Stalls sold everything from dried lizards and birds' claws to spanners, nails and toothpaste.",
            synonyms: ['nail', 'talon'],
          },
        ],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Scratch or tear something with the claws or the fingernails.',
            example: "the kitten was clawing at Lowell's trouser leg",
            synonyms: [
              'scratch',
              'lacerate',
              'tear',
              'rake',
              'rip',
              'slash',
              'scrape',
              'graze',
              'dig into',
            ],
          },
        ],
      },
    ],
  },
  tormentor: {
    word: 'tormentor',
    phonetics: [
      {
        text: '/tɔrˈmɛn(t)ər/',
        audio: 'https://lex-audio.useremarkable.com/mp3/tormentor_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'nombre',
        definitions: [
          {
            definition:
              'A person who inflicts severe mental or physical suffering on someone.',
            example:
              'they help victims of domestic violence escape their tormentors',
          },
        ],
      },
    ],
  },
  pleading: {
    word: 'pleading',
    phonetics: [
      {
        text: '/ˈplidɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/pleading_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'nombre',
        definitions: [
          {
            definition:
              'The action of making an emotional or earnest appeal to someone.',
            example: 'he ignored her pleading',
            synonyms: [
              'plea',
              'appeal',
              'request',
              'petition',
              'cry from the heart',
            ],
          },
          {
            definition:
              'A formal statement of the cause of an action or defense.',
            example: 'counsel for the plaintiffs wanted to amend the pleadings',
          },
        ],
      },
      {
        partOfSpeech: 'adjetivo',
        definitions: [{definition: 'Making an emotional appeal.'}],
      },
    ],
  },
  rebellious: {
    word: 'rebellious',
    phonetics: [
      {
        text: '/rəˈbɛljəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/rebellious_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Showing a desire to resist authority, control, or convention.',
            example: 'young people with a rebellious streak',
            synonyms: [
              'defiant',
              'disobedient',
              'insubordinate',
              'unruly',
              'ungovernable',
              'unmanageable',
              'uncontrollable',
              'turbulent',
              'mutinous',
              'wayward',
              'obstreperous',
              'recalcitrant',
              'refractory',
              'intractable',
              'resistant',
              'dissentient',
              'disaffected',
              'malcontent',
            ],
          },
        ],
      },
    ],
  },
  resentment: {
    word: 'resentment',
    phonetics: [
      {
        text: '/rəˈzɛntmənt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/resentment_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Bitter indignation at having been treated unfairly.',
            example: 'his resentment at being demoted',
            synonyms: [
              'bitterness',
              'indignation',
              'irritation',
              'pique',
              'displeasure',
              'dissatisfaction',
              'disgruntlement',
              'discontentment',
              'discontent',
              'resentfulness',
              'bad feelings',
              'hard feelings',
              'ill feelings',
              'acrimony',
              'rancour',
              'animosity',
              'hostility',
              'jaundice',
              'antipathy',
              'antagonism',
              'enmity',
              'hatred',
              'hate',
            ],
          },
        ],
      },
    ],
  },
  tantamount: {
    word: 'tantamount',
    phonetics: [
      {
        text: '/ˈtæn(t)əˌmaʊnt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/tantamount_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Equivalent in seriousness to; virtually the same as.',
            example:
              'the resignations were tantamount to an admission of guilt',
            synonyms: [
              'equivalent to',
              'equal to',
              'amounting to',
              'as good as',
              'more or less',
              'synonymous with',
              'virtually the same as',
              'much the same as',
              'comparable to',
              'on a par with',
              'commensurate with',
              'along the lines of',
              'as serious as',
              'identical to',
            ],
          },
        ],
      },
    ],
  },
  clerical: {
    word: 'clerical',
    phonetics: [
      {
        text: '/ˈklɛrək(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/clerical_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a job or person) concerned with or relating to work in an office, especially routine documentation and administrative tasks.',
            example: 'temps are always needed for clerical work',
            synonyms: ['office', 'desk', 'back-room'],
          },
          {
            definition: 'Relating to the clergy.',
            example: 'he was still attired in his clerical outfit',
            synonyms: [
              'ecclesiastical',
              'church',
              'priestly',
              'pastoral',
              'religious',
              'spiritual',
              'prelatic',
              'apostolic',
              'canonical',
              'parsonical',
            ],
          },
        ],
      },
    ],
  },
  unravel: {
    word: 'unravel',
    phonetics: [
      {
        text: '/ʌnˈrav(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/unravel_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Undo (twisted, knitted, or woven threads).',
            example:
              'There are some threads that once pulled unraveled the whole sweater.',
            synonyms: [
              'untangle',
              'disentangle',
              'straighten out',
              'separate out',
              'unsnarl',
              'unknot',
              'unwind',
              'untwist',
              'undo',
              'untie',
              'unkink',
              'unjumble',
            ],
          },
          {
            definition:
              'Investigate and solve or explain (something complicated or puzzling)',
            example: 'they were attempting to unravel the cause of death',
            synonyms: [
              'solve',
              'resolve',
              'work out',
              'clear up',
              'puzzle out',
              'find an answer to',
              'get to the bottom of',
              'explain',
              'elucidate',
              'fathom',
              'decipher',
              'decode',
              'crack',
              'penetrate',
              'untangle',
              'unfold',
              'settle',
              'reveal',
              'clarify',
              'sort out',
              'make head or tail of',
            ],
          },
        ],
      },
    ],
  },
  revolve: {
    word: 'revolve',
    phonetics: [
      {
        text: '/rəˈvɑlv/',
        audio: 'https://lex-audio.useremarkable.com/mp3/revolve_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'intransitive verb',
        definitions: [
          {
            definition: 'Move in a circle on a central axis.',
            example: 'overhead, the fan revolved slowly',
            synonyms: [
              'go round',
              'turn round',
              'rotate',
              'spin',
              'whirl',
              'pirouette',
              'wheel',
            ],
          },
        ],
      },
    ],
  },
  suffocate: {
    word: 'suffocate',
    phonetics: [
      {
        text: '/ˈsəfəˌkeɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/suffocate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Die or cause to die from lack of air or inability to breathe.',
            example: 'they suffocated in their sleep',
            synonyms: ['smother', 'asphyxiate', 'stifle'],
          },
        ],
      },
    ],
  },
  albeit: {
    word: 'albeit',
    phonetics: [
      {
        text: '/ɔlˈbiɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/albeit_us_1_rr.mp3',
      },
      {
        text: '/ælˈbiɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/albeit_us_2_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'conjunction',
        definitions: [
          {
            definition: 'Although.',
            example: 'he was making progress, albeit rather slowly',
            synonyms: [
              'although',
              'even if',
              'even though',
              'in spite of the fact that',
              'despite the fact that',
              'notwithstanding the fact that',
              'notwithstanding that',
              'for all that',
              'while',
              'whilst',
              'granted that',
              'even supposing',
              'despite the possibility that',
              'albeit',
              'however',
              'yet',
              'but',
            ],
          },
        ],
      },
    ],
  },
  overindulgence: {
    word: 'overindulgence',
    phonetics: [
      {
        text: '/ˌoʊvərənˈdəldʒəns/',
        audio:
          'https://lex-audio.useremarkable.com/mp3/overindulgence_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The action or fact of having too much of something enjoyable.',
            example: 'her alleged overindulgence in alcohol',
            synonyms: [
              'intemperance',
              'immoderation',
              'excess',
              'overeating',
              'overdrinking',
              'overconsumption',
              'prodigality',
              'lack of restraint',
              'gorging',
              'surfeit',
              'debauch',
              'debauchery',
              'dissipation',
              'dissoluteness',
              'greed',
              'gluttony',
              'orgy',
            ],
          },
          {
            definition: "Excessive gratification of a person's wishes.",
            example: 'his overindulgence of her whims',
          },
        ],
      },
    ],
  },
  alienate: {
    word: 'alienate',
    phonetics: [
      {
        text: '/ˈeɪlɪəneɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/alienate_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Make (someone) feel isolated or estranged.',
            example:
              'an urban environment which would alienate its inhabitants',
            synonyms: [
              'estrange',
              'turn away',
              'set apart',
              'drive apart',
              'isolate',
              'detach',
              'distance',
              'put at a distance',
            ],
          },
          {
            definition:
              'Transfer ownership of (property rights) to another person or group.',
            example:
              'they defended the Masai against attempts to alienate their land',
            synonyms: ['transfer', 'convey', 'pass on', 'hand over', 'devolve'],
          },
        ],
      },
    ],
  },
  blatant: {
    word: 'blatant',
    phonetics: [
      {
        text: '/ˈbleɪtnt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/blatant_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: '(of bad behavior) done openly and unashamedly.',
            example: 'blatant lies',
            synonyms: [
              'flagrant',
              'glaring',
              'obvious',
              'undisguised',
              'unconcealed',
              'overt',
              'open',
              'transparent',
              'patent',
              'evident',
              'manifest',
              'palpable',
              'unmistakable',
            ],
          },
        ],
      },
    ],
  },
  inferior: {
    word: 'inferior',
    phonetics: [
      {
        text: '/ˌɪnˈfɪriər/',
        audio: 'https://lex-audio.useremarkable.com/mp3/inferior_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Lower in rank, status, or quality.',
            example:
              'schooling in inner-city areas was inferior to that in the rest of the country',
            synonyms: [
              'lower in status',
              'lesser',
              'second-class',
              'second-fiddle',
              'minor',
              'subservient',
              'lowly',
              'humble',
              'menial',
              'not very important',
              'not so important',
              'below someone',
              'beneath someone',
              "under someone's heel",
            ],
          },
          {
            definition: 'Low or lower in position.',
            example:
              'ulcers located in the inferior and posterior wall of the duodenum',
          },
          {
            definition:
              '(of a letter, figure, or symbol) written or printed below the line.',
            example:
              'Reservation 2: Nunn points out that inferior lines have, for the most part, been left out of this book.',
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A person lower than another in rank, status, or ability.',
            example: 'her social and intellectual inferiors',
            synonyms: [
              'subordinate',
              'junior',
              'underling',
              'minion',
              'menial',
            ],
          },
          {definition: 'An inferior letter, figure, or symbol.'},
        ],
      },
    ],
  },
  insurmountable: {
    word: 'insurmountable',
    phonetics: [
      {
        text: '/ˌɪnsərˈmaʊn(t)əb(ə)l/',
        audio:
          'https://lex-audio.useremarkable.com/mp3/insurmountable_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Too great to be overcome.',
            example: 'an insurmountable problem',
            synonyms: [
              'insuperable',
              'unconquerable',
              'invincible',
              'unassailable',
            ],
          },
        ],
      },
    ],
  },
  resilience: {
    word: 'resilience',
    phonetics: [
      {
        text: '/rəˈzɪljəns/',
        audio: 'https://lex-audio.useremarkable.com/mp3/resilience_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The capacity to recover quickly from difficulties; toughness.',
            example:
              'the often remarkable resilience of so many British institutions',
          },
          {
            definition:
              'The ability of a substance or object to spring back into shape; elasticity.',
            example: 'nylon is excellent in wearability and resilience',
            synonyms: [
              'flexibility',
              'pliability',
              'suppleness',
              'plasticity',
              'elasticity',
              'springiness',
              'spring',
              'give',
            ],
          },
        ],
      },
    ],
  },
  resilient: {
    word: 'resilient',
    phonetics: [
      {
        text: '/rəˈzɪljənt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/resilient_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a person or animal) able to withstand or recover quickly from difficult conditions.',
            example:
              'babies are generally far more resilient than new parents realize',
            synonyms: ['strong', 'tough', 'hardy'],
          },
          {
            definition:
              '(of a substance or object) able to recoil or spring back into shape after bending, stretching, or being compressed.',
            example: 'a shoe with resilient cushioning',
            synonyms: [
              'flexible',
              'pliable',
              'pliant',
              'supple',
              'plastic',
              'elastic',
              'springy',
              'rubbery',
            ],
          },
        ],
      },
    ],
  },
  infraction: {
    word: 'infraction',
    phonetics: [
      {
        text: '/ɪnˈfrækʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/infraction_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A violation or infringement of a law or agreement.',
            example:
              'Punishment is meted out to the offender because this is what he deserves in response to his infraction of the criminal law.',
            synonyms: [
              'infringement',
              'contravention',
              'breach',
              'violation',
              'transgression',
              'breaking',
            ],
          },
        ],
      },
    ],
  },
  amok: {
    word: 'amok',
    phonetics: [
      {
        text: '/əˈmək/',
        audio: 'https://lex-audio.useremarkable.com/mp3/amok_us_2_rr.mp3',
      },
      {
        text: '/əˈmɑk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/amok_us_1_rr.mp3',
      },
    ],
    meanings: [],
  },
  liberation: {
    word: 'liberation',
    phonetics: [
      {
        text: '/ˌlɪbəˈreɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/liberation_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The act of setting someone free from imprisonment, slavery, or oppression; release.',
            example: 'the liberation of all political prisoners',
            synonyms: [
              'freeing',
              'release',
              'discharge',
              'deliverance',
              'salvation',
              'rescue',
              'relief',
              'extrication',
              'setting free',
            ],
          },
        ],
      },
    ],
  },
  gawk: {
    word: 'gawk',
    phonetics: [
      {
        text: '/ɡɔːk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/gawk_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Stare openly and stupidly.',
            example: 'they were gawking at some pin-up',
            synonyms: [
              'gape',
              'goggle',
              'gaze',
              'ogle',
              'stare',
              'stare stupidly',
              'stare open-mouthed',
              'stare in wonder',
              'look fixedly',
              'look vacantly',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'An awkward or shy person.',
            example: "let those country gawks dance to their hearts' content",
          },
        ],
      },
    ],
  },
  tidal: {
    word: 'tidal',
    phonetics: [
      {
        text: '/ˈtaɪdl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/tidal_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Relating to or affected by tides.',
            example: 'the river here is not tidal',
          },
        ],
      },
    ],
  },
  feat: {
    word: 'feat',
    phonetics: [
      {
        text: '/fit/',
        audio: 'https://lex-audio.useremarkable.com/mp3/feat_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'An achievement that requires great courage, skill, or strength.',
            example:
              'the new printing presses were considerable feats of engineering',
            synonyms: [
              'achievement',
              'accomplishment',
              'attainment',
              'coup',
              'master stroke',
              'triumph',
            ],
          },
        ],
      },
    ],
  },
  humdrum: {
    word: 'humdrum',
    phonetics: [
      {
        text: '/ˈhəmˌdrəm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/humdrum_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Lacking excitement or variety; dull; monotonous.',
            example: 'humdrum routine work',
            synonyms: [
              'mundane',
              'dull',
              'dreary',
              'boring',
              'tedious',
              'monotonous',
              'banal',
              'ho-hum',
              'tiresome',
              'wearisome',
              'prosaic',
              'unexciting',
              'uninteresting',
              'uneventful',
              'unvarying',
              'unvaried',
              'unremarkable',
              'repetitive',
              'repetitious',
              'routine',
              'ordinary',
              'everyday',
              'day-to-day',
              'quotidian',
              'run-of-the-mill',
              'commonplace',
              'common',
              'workaday',
              'usual',
              'pedestrian',
              'customary',
              'regular',
              'normal',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Dullness; monotony.',
            example: 'an escape from the humdrum of his life',
            synonyms: [
              'weariness',
              'ennui',
              'lack of enthusiasm',
              'lack of interest',
              'lack of concern',
              'apathy',
              'uninterestedness',
              'unconcern',
              'languor',
              'sluggishness',
              'accidie',
              'malaise',
              'world-weariness',
            ],
          },
        ],
      },
    ],
  },
  pervasiveness: {
    word: 'pervasiveness',
    phonetics: [
      {
        text: '/pərˈveɪsɪvnəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/pervasiveness_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The quality of spreading widely or being present throughout an area or a group of people.',
            example: 'the pervasiveness of violence on television',
          },
        ],
      },
    ],
  },
  inundation: {
    word: 'inundation',
    phonetics: [
      {
        text: '/ˌɪnənˈdeɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/inundation_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'An overwhelming abundance of people or things.',
            example: 'we see an inundation of campaign posters',
            synonyms: ['flood', 'overflow', 'deluge', 'torrent', 'influx'],
          },
          {
            definition: 'Flooding.',
            example: 'the annual inundation of the Nile',
          },
        ],
      },
    ],
  },
  exacerbate: {
    word: 'exacerbate',
    phonetics: [
      {
        text: '/ɪɡˈzæsərˌbeɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/exacerbate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Make (a problem, bad situation, or negative feeling) worse.',
            example:
              'the exorbitant cost of land in urban areas only exacerbated the problem',
            synonyms: [
              'aggravate',
              'make worse',
              'worsen',
              'inflame',
              'compound',
            ],
          },
        ],
      },
    ],
  },
  dignity: {
    word: 'dignity',
    phonetics: [
      {
        text: '/ˈdɪɡnədi/',
        audio: 'https://lex-audio.useremarkable.com/mp3/dignity_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The state or quality of being worthy of honor or respect.',
            example: 'a man of dignity and unbending principle',
          },
        ],
      },
    ],
  },
  proverbial: {
    word: 'proverbial',
    phonetics: [
      {
        text: '/prəˈvərbiəl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/proverbial_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a word or phrase) referred to in a proverb or idiom.',
            example: "I'm going to stick out like the proverbial sore thumb",
          },
        ],
      },
    ],
  },
  bland: {
    word: 'bland',
    phonetics: [
      {
        text: '/blænd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/bland_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Lacking strong features or characteristics and therefore uninteresting.',
            example: 'rebelling against the bland uniformity',
            synonyms: [
              'uninteresting',
              'dull',
              'boring',
              'tedious',
              'monotonous',
              'dry',
              'drab',
              'dreary',
              'wearisome',
            ],
          },
        ],
      },
    ],
  },
  stifling: {
    word: 'stifling',
    phonetics: [
      {
        text: '/ˈstaɪf(ə)lɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/stifling_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of heat, air, or a room) very hot and causing difficulties in breathing; suffocating.',
            example: 'stifling heat',
          },
          {
            definition: 'Making one feel constrained or oppressed.',
            example: 'the stifling formality of her family life',
          },
        ],
      },
    ],
  },
  reconnaissance: {
    word: 'reconnaissance',
    phonetics: [
      {
        text: '/rəˈkɑnəsəns/',
        audio:
          'https://lex-audio.useremarkable.com/mp3/reconnaissance_us_1_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'Military observation of a region to locate an enemy or ascertain strategic features.',
            example: 'an excellent aircraft for low-level reconnaissance',
            synonyms: [
              'preliminary survey',
              'survey',
              'exploration',
              'observation',
              'investigation',
              'examination',
              'inspection',
              'probe',
              'scrutiny',
              'scan',
            ],
          },
        ],
      },
    ],
  },
  abominable: {
    word: 'abominable',
    phonetics: [
      {
        text: '/əˈbɑm(ə)nəb(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/abominable_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Causing moral revulsion.',
            example: 'the uprising was suppressed with abominable cruelty',
            synonyms: [
              'loathsome',
              'detestable',
              'hateful',
              'odious',
              'obnoxious',
              'despicable',
              'contemptible',
              'damnable',
              'cursed',
              'accursed',
              'diabolical',
            ],
          },
        ],
      },
    ],
  },
  clamour: {
    word: 'clamour',
    phonetics: [
      {
        text: '/ˈklamə/',
        audio: 'https://lex-audio.useremarkable.com/mp3/clamour_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A loud and confused noise, especially that of people shouting.',
            example: 'the questions rose to a clamour',
            synonyms: [
              'din',
              'racket',
              'loud noise',
              'uproar',
              'tumult',
              'babel',
              'shouting',
              'yelling',
              'screaming',
              'baying',
              'roaring',
              'blaring',
              'clangour',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: '(of a group of people) shout loudly and insistently.',
            example: 'the surging crowds clamoured for attention',
            synonyms: [
              'yell',
              'shout loudly',
              'bay',
              'scream',
              'shriek',
              'roar',
            ],
          },
        ],
      },
    ],
  },
  espouse: {
    word: 'espouse',
    phonetics: [
      {
        text: '/ɪˈspaʊz/',
        audio: 'https://lex-audio.useremarkable.com/mp3/espouse_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Adopt or support (a cause, belief, or way of life)',
            example:
              'he turned his back on the modernism he had espoused in his youth',
            synonyms: [
              'adopt',
              'embrace',
              'take up',
              'take to',
              "take to one's heart",
              'receive enthusiastically',
              'receive wholeheartedly',
              'accept',
              'welcome',
            ],
          },
          {
            definition: 'Marry.',
            example: 'Edward had espoused the lady Grey',
            synonyms: [
              'wed',
              'take to husband',
              'take to wife',
              'lead to the altar',
            ],
          },
        ],
      },
    ],
  },
  vacuous: {
    word: 'vacuous',
    phonetics: [
      {
        text: '/ˈvækjuəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/vacuous_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Having or showing a lack of thought or intelligence; mindless.',
            example: 'a vacuous smile',
            synonyms: [
              'blank',
              'vacant',
              'expressionless',
              'deadpan',
              'inscrutable',
              'inexpressive',
              'poker-faced',
              'emotionless',
              'impassive',
              'absent',
              'absent-minded',
              'uninterested',
              'empty',
              'glassy',
              'stony',
              'wooden',
              'motionless',
              'lifeless',
              'inanimate',
            ],
          },
        ],
      },
    ],
  },
  lethargic: {
    word: 'lethargic',
    phonetics: [
      {
        text: '/ləˈθɑrdʒɪk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/lethargic_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Affected by lethargy; sluggish and apathetic.',
            example: 'I felt tired and a little lethargic',
            synonyms: [
              'sluggish',
              'inert',
              'inactive',
              'slow',
              'torpid',
              'lifeless',
              'dull',
            ],
          },
        ],
      },
    ],
  },
  raucous: {
    word: 'raucous',
    phonetics: [
      {
        text: '/ˈrɔkəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/raucous_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Making or constituting a disturbingly harsh and loud noise.',
            example: 'raucous youths',
            synonyms: [
              'harsh',
              'strident',
              'screeching',
              'squawky',
              'squawking',
              'sharp',
              'grating',
              'discordant',
              'dissonant',
              'inharmonious',
              'unmelodious',
              'jarring',
              'brassy',
            ],
          },
        ],
      },
    ],
  },
  ornament: {
    word: 'ornament',
    phonetics: [
      {
        text: '/ˈɔːnəm(ə)nt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/ornament_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A thing used or serving to make something look more attractive but usually having no practical purpose, especially a small object such as a figurine.',
            example: 'tables covered with ornaments and books',
            synonyms: [
              'knick-knack',
              'trinket',
              'bauble',
              'piece of bric-a-brac',
              'bibelot',
              'gewgaw',
              'gimcrack',
              'furbelow',
              'objet',
              'accessory',
            ],
          },
          {
            definition:
              'The accessories of worship, such as the altar, chalice, and sacred vessels.',
            example:
              'Many parish churches were extravagantly rebuilt, and lavished with vessels and ornaments which foreign visitors thought worthy of a cathedral.',
          },
        ],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Make (something) look more attractive by adding decorative items.',
            example: "a jewel to ornament your wife's lovely throat",
            synonyms: [
              'decorate',
              'adorn',
              'embellish',
              'trim',
              'garnish',
              'bedeck',
              'deck',
              'deck out',
              'festoon',
              'enhance',
              'beautify',
              'grace',
              'accessorize',
              'dress up',
            ],
          },
        ],
      },
    ],
  },
  accolade: {
    word: 'accolade',
    phonetics: [
      {
        text: '/ˈakəleɪd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/accolade_gb_1.mp3',
      },
      {
        text: '/ˌakəˈleɪd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/accolade_gb_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'An award or privilege granted as a special honour or as an acknowledgement of merit.',
            example: 'the hotel has won numerous accolades',
            synonyms: [
              'honour',
              'recognition',
              'privilege',
              'award',
              'gift',
              'title',
            ],
          },
          {
            definition:
              "A touch on a person's shoulders with a sword at the bestowing of a knighthood.",
            example:
              'Knighthood was conferred by the overlord with the accolade.',
          },
        ],
      },
    ],
  },
  agonizing: {
    word: 'agonizing',
    phonetics: [
      {
        text: '/ˈæɡəˌnaɪzɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/agonizing_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Causing great physical or mental pain.',
            example: 'an agonizing death',
            synonyms: [
              'excruciating',
              'harrowing',
              'racking',
              'painful',
              'acute',
              'severe',
              'intense',
              'extreme',
              'grievous',
              'hellish',
              'killing',
              'searing',
              'torturous',
              'tormenting',
              'piercing',
            ],
          },
        ],
      },
    ],
  },
  adulation: {
    word: 'adulation',
    phonetics: [
      {
        text: '/ˌædʒəˈleɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/adulation_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Obsequious flattery; excessive admiration or praise.',
            example:
              'he found it difficult to cope with the adulation of the fans',
            synonyms: [
              'hero-worship',
              'worship',
              'admiration',
              'admiring',
              'high regard',
              'respect',
              'lionization',
              'lionizing',
              'idolization',
              'idolizing',
              'veneration',
              'awe',
              'devotion',
              'adoration',
              'exaltation',
              'honour',
              'homage',
              'glorification',
              'glory',
              'praise',
              'praising',
              'commendation',
              'flattery',
              'applause',
            ],
          },
        ],
      },
    ],
  },
  adulterer: {
    word: 'adulterer',
    phonetics: [
      {
        text: '/əˈdəltərər/',
        audio: 'https://lex-audio.useremarkable.com/mp3/adulterer_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A person who commits adultery.',
            example:
              'By the late eighteenth century, New England law enforcers arrested few fornicators or adulterers, though premarital and extramarital sex had hardly disappeared.',
          },
        ],
      },
    ],
  },
  emphasize: {
    word: 'emphasize',
    phonetics: [
      {
        text: '/ˈɛmfəˌsaɪz/',
        audio: 'https://lex-audio.useremarkable.com/mp3/emphasize_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Give special importance or prominence to (something) in speaking or writing.',
            example:
              'he jabbed a finger into the tabletop to emphasize his point',
            synonyms: [
              'bring attention to',
              'call attention to',
              'draw attention to',
              'focus attention on',
              'highlight',
              'point up',
              'spotlight',
              'foreground',
              'play up',
              'make a point of',
            ],
          },
        ],
      },
    ],
  },
  superstitious: {
    word: 'superstitious',
    phonetics: [
      {
        text: '/ˌsupərˈstɪʃəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/superstitious_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition: 'Having or showing a belief in superstitions.',
            example:
              'many superstitious beliefs and practices are connected with sneezing',
            synonyms: [
              'mythical',
              'irrational',
              'illusory',
              'groundless',
              'unfounded',
              'unprovable',
            ],
          },
        ],
      },
    ],
  },
  invigorating: {
    word: 'invigorating',
    phonetics: [
      {
        text: '/ɪnˈvɪɡəˌreɪdɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/invigorating_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Making one feel strong, healthy, and full of energy.',
            example: 'a brisk, invigorating walk',
          },
        ],
      },
    ],
  },
  arduous: {
    word: 'arduous',
    phonetics: [
      {
        text: '/ˈɑrdʒuəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/arduous_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Involving or requiring strenuous effort; difficult and tiring.',
            example: 'an arduous journey',
            synonyms: [
              'onerous',
              'taxing',
              'difficult',
              'hard',
              'heavy',
              'laborious',
              'burdensome',
              'strenuous',
              'vigorous',
              'back-breaking',
              'stiff',
              'uphill',
              'relentless',
              'Herculean',
            ],
          },
        ],
      },
    ],
  },
  brunt: {
    word: 'brunt',
    phonetics: [
      {
        text: '/brənt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/brunt_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'nombre',
        definitions: [
          {
            definition: 'The worst part or chief impact of a specified thing.',
            example: 'education will bear the brunt of the cuts',
            synonyms: [
              'full force',
              'force',
              'impact',
              'shock',
              'burden',
              'pressure',
              'strain',
              'stress',
              'impetus',
              'thrust',
              'weight',
              'violence',
            ],
          },
        ],
      },
    ],
  },
  wrath: {
    word: 'wrath',
    phonetics: [
      {
        text: '/ræθ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/wrath_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'Extreme anger (chiefly used for humorous or rhetorical effect)',
            example: "he hid his pipe for fear of incurring his father's wrath",
            synonyms: [
              'anger',
              'rage',
              'fury',
              'annoyance',
              'indignation',
              'outrage',
              'pique',
              'spleen',
              'chagrin',
              'vexation',
              'exasperation',
              'dudgeon',
              'high dudgeon',
              'hot temper',
              'bad temper',
              'bad mood',
              'ill humour',
              'irritation',
              'irritability',
              'crossness',
              'displeasure',
              'discontentment',
              'disgruntlement',
              'irascibility',
              'cantankerousness',
              'peevishness',
              'querulousness',
              'crabbiness',
              'testiness',
              'tetchiness',
              'snappishness',
            ],
          },
        ],
      },
    ],
  },
  emaciation: {
    word: 'emaciation',
    phonetics: [
      {
        text: '/əˌmeɪʃiˈeɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/emaciation_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The state of being abnormally thin or weak.',
            example: 'thin to the point of emaciation',
            synonyms: [
              'thinness',
              'boniness',
              'scrawniness',
              'skinniness',
              'scragginess',
            ],
          },
        ],
      },
    ],
  },
  fallacy: {
    word: 'fallacy',
    phonetics: [
      {
        text: '/ˈfæləsi/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fallacy_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A mistaken belief, especially one based on unsound argument.',
            example: 'the notion that the camera never lies is a fallacy',
            synonyms: [
              'misconception',
              'mistaken belief',
              'misbelief',
              'delusion',
              'false notion',
              'mistaken impression',
              'misapprehension',
              'misjudgement',
              'miscalculation',
              'misinterpretation',
              'misconstruction',
              'error',
              'mistake',
              'untruth',
              'inconsistency',
              'illusion',
              'myth',
              'fantasy',
              'deceit',
              'deception',
              'sophism',
            ],
          },
        ],
      },
    ],
  },
  hone: {
    word: 'hone',
    phonetics: [
      {
        text: '/hoʊn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/hone_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Sharpen (a blade)',
            example: 'he was carefully honing the curved blade',
            synonyms: [
              'sharpen',
              'make sharper',
              'make sharp',
              'whet',
              'strop',
              'grind',
              'file',
              'put an edge on',
            ],
          },
          {
            definition: 'Refine or perfect (something) over a period of time.',
            example:
              'she has taken numerous workshops to hone her skills over the years',
          },
          {
            definition: 'another way of saying "home in on" (see home)',
            example: 'the detectives honed in on the suspect',
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A whetstone, especially one used to sharpen razors.',
            example:
              'By the way, a diamond hone is the ideal tool for sharpening in camp.',
          },
        ],
      },
    ],
  },
  vain: {
    word: 'vain',
    phonetics: [
      {
        text: '/veɪn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/vain_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              "Having or showing an excessively high opinion of one's appearance, abilities, or worth.",
            example: 'their flattery made him vain',
            synonyms: [
              'conceited',
              'narcissistic',
              'self-loving',
              'in love with oneself',
              'self-admiring',
              'self-regarding',
              'wrapped up in oneself',
              'self-absorbed',
              'self-obsessed',
              'self-centred',
              'egotistic',
              'egotistical',
              'egoistic',
              'egocentric',
              'egomaniac',
            ],
          },
          {
            definition: 'Producing no result; useless.',
            example: 'a vain attempt to tidy up the room',
            synonyms: [
              'futile',
              'useless',
              'pointless',
              'worthless',
              'nugatory',
              'to no purpose',
              'in vain',
            ],
          },
        ],
      },
    ],
  },
  hindsight: {
    word: 'hindsight',
    phonetics: [
      {
        text: '/ˈhaɪn(d)ˌsaɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/hindsight_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'nombre',
        definitions: [
          {
            definition:
              'Understanding of a situation or event only after it has happened or developed.',
            example: 'with hindsight, I should never have gone',
          },
        ],
      },
    ],
  },
  rational: {
    word: 'rational',
    phonetics: [
      {
        text: '/ˈræʃ(ə)n(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/rational_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition: 'Based on or in accordance with reason or logic.',
            example: "I'm sure there's a perfectly rational explanation",
            synonyms: [
              'logical',
              'reasoned',
              'well reasoned',
              'sensible',
              'reasonable',
              'cogent',
              'coherent',
              'intelligent',
              'wise',
              'judicious',
              'sagacious',
              'astute',
              'shrewd',
              'perceptive',
              'enlightened',
              'clear-eyed',
              'clear-sighted',
              'commonsensical',
              'common-sense',
              'well advised',
              'well grounded',
              'sound',
              'sober',
              'prudent',
              'circumspect',
              'politic',
            ],
          },
          {
            definition:
              '(of a number, quantity, or expression) expressible, or containing quantities that are expressible, as a ratio of whole numbers. When expressed as a decimal, a rational number has a finite or recurring expansion.',
            example:
              'The set of rational numbers is denumerable, that is, it has cardinal number d.',
          },
        ],
      },
      {
        partOfSpeech: 'nombre',
        definitions: [
          {
            definition: 'A rational number.',
            example:
              'The construction of the reals from the integers proceeds in several stages: first axiomatize the positive integers, then construct negative from positive integers, then rationals from integers, and finally reals from rationals.',
          },
        ],
      },
    ],
  },
  hindrance: {
    word: 'hindrance',
    phonetics: [
      {
        text: '/ˈhɪndrəns/',
        audio: 'https://lex-audio.useremarkable.com/mp3/hindrance_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A thing that provides resistance, delay, or obstruction to something or someone.',
            example: 'a hindrance to the development process',
            synonyms: [
              'impediment',
              'obstacle',
              'barrier',
              'bar',
              'obstruction',
              'handicap',
              'block',
              'check',
              'curb',
              'brake',
              'hurdle',
              'restraint',
              'restriction',
              'limitation',
              'encumbrance',
              'deterrent',
              'complication',
              'delay',
              'interruption',
              'stoppage',
            ],
          },
        ],
      },
    ],
  },
  indignation: {
    word: 'indignation',
    phonetics: [
      {
        text: '/ˌɪndɪɡˈneɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/indignation_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'Anger or annoyance provoked by what is perceived as unfair treatment.',
            example: 'the letter filled Lucy with indignation',
            synonyms: [
              'resentment',
              'umbrage',
              'affront',
              'disgruntlement',
              'anger',
              'distress',
              'unhappiness',
              'discontent',
              'dissatisfaction',
              'displeasure',
              'hurt',
              'pain',
              'upset',
              'offence',
              'pique',
              'spleen',
              'crossness',
              'exasperation',
              'vexation',
              'irritation',
              'annoyance',
              'chagrin',
            ],
          },
        ],
      },
    ],
  },
  perpetuate: {
    word: 'perpetuate',
    phonetics: [
      {
        text: '/pərˈpɛtʃəˌweɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/perpetuate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Make (something, typically an undesirable situation or an unfounded belief) continue indefinitely.',
            example: 'the law perpetuated the interests of the ruling class',
            synonyms: [
              'keep alive',
              'keep going',
              'keep in existence',
              'preserve',
              'conserve',
              'sustain',
              'maintain',
              'continue',
              'extend',
              'carry on',
              'keep up',
              'cause to continue',
              'prolong',
            ],
          },
        ],
      },
    ],
  },
  proclaim: {
    word: 'proclaim',
    phonetics: [
      {
        text: '/prəˈkleɪm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/proclaim_us_1_rr.mp3',
      },
      {
        text: '/proʊˈkleɪm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/proclaim_us_2_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Announce officially or publicly.',
            example:
              "the joint manifesto proclaimed that imperialism would be the coalition's chief objective",
            synonyms: [
              'publicize',
              'make public',
              'make known',
              'give publicity to',
              'bill',
              'post',
              'announce',
              'broadcast',
              'proclaim',
              'trumpet',
              'shout from the rooftops',
              'give notice of',
              'call attention to',
              'promulgate',
            ],
          },
        ],
      },
    ],
  },
  devour: {
    word: 'devour',
    phonetics: [
      {
        text: '/dəˈvaʊ(ə)r/',
        audio: 'https://lex-audio.useremarkable.com/mp3/devour_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verbo transitivo',
        definitions: [
          {
            definition: 'Eat (food or prey) hungrily or quickly.',
            example: 'he devoured half of his burger in one bite',
            synonyms: [
              'eat hungrily',
              'eat quickly',
              'eat greedily',
              'eat heartily',
              'eat up',
              'swallow',
              'gobble',
              'gobble down',
              'gobble up',
              'guzzle',
              'guzzle down',
              'gulp',
              'gulp down',
              'bolt',
              'bolt down',
              'cram down',
              'gorge oneself on',
              'wolf',
              'wolf down',
              'feast on',
              'consume',
            ],
          },
        ],
      },
    ],
  },
  righteousness: {
    word: 'righteousness',
    phonetics: [
      {
        text: '/ˈraɪtʃəsnəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/righteousness_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The quality of being morally right or justifiable.',
            example: 'we had little doubt about the righteousness of our cause',
            synonyms: [
              'goodness',
              'virtue',
              'virtuousness',
              'uprightness',
              'decency',
              'integrity',
              'worthiness',
              'rectitude',
              'probity',
              'morality',
              'ethicalness',
              'high-mindedness',
              'justice',
              'honesty',
              'honour',
              'honourableness',
              'innocence',
              'blamelessness',
              'guiltlessness',
              'irreproachability',
              'sinlessness',
              'saintliness',
              'purity',
              'nobility',
              'noble-mindedness',
              'piety',
              'piousness',
            ],
          },
        ],
      },
    ],
  },
  reverberate: {
    word: 'reverberate',
    phonetics: [
      {
        text: '/rəˈvərbəˌreɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/reverberate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'intransitive verb',
        definitions: [
          {
            definition:
              '(of a loud noise) be repeated several times as an echo.',
            example: 'her deep booming laugh reverberated around the room',
            synonyms: [
              'resound',
              'echo',
              're-echo',
              'repeat',
              'resonate',
              'pulsate',
              'vibrate',
              'ring',
              'peal',
              'boom',
              'rumble',
              'roll',
              'pound',
              'thump',
              'drum',
              'thrum',
            ],
          },
        ],
      },
    ],
  },
  relinquish: {
    word: 'relinquish',
    phonetics: [
      {
        text: '/rəˈlɪŋkwɪʃ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/relinquish_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Voluntarily cease to keep or claim; give up.',
            example:
              'he relinquished his managerial role to become chief executive',
            synonyms: ['renounce', 'give up', 'part with', 'give away'],
          },
        ],
      },
    ],
  },
  unwavering: {
    word: 'unwavering',
    phonetics: [
      {
        text: '/ˌənˈweɪv(ə)rɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/unwavering_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Steady or resolute; not wavering.',
            example: 'she fixed him with an unwavering stare',
            synonyms: [
              'steady',
              'fixed',
              'resolute',
              'resolved',
              'firm',
              'steadfast',
              'decided',
              'unswerving',
              'unfluctuating',
              'unhesitating',
              'unfaltering',
              'unvacillating',
              'untiring',
              'tireless',
              'unflagging',
              'indefatigable',
              'persistent',
              'unyielding',
              'relentless',
              'unremitting',
              'unrelenting',
              'sustained',
              'inexorable',
              'unshakeable',
            ],
          },
        ],
      },
    ],
  },
  unattainable: {
    word: 'unattainable',
    phonetics: [
      {
        text: '/ˌənəˈteɪnəb(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/unattainable_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Not able to be reached or achieved.',
            example: 'an unattainable goal',
            synonyms: [
              'unreachable',
              'unachievable',
              'unobtainable',
              'impossible',
              'unwinnable',
            ],
          },
        ],
      },
    ],
  },
  rebuff: {
    word: 'rebuff',
    phonetics: [
      {
        text: '/rɪˈbʌf/',
        audio: 'https://lex-audio.useremarkable.com/mp3/rebuff_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Reject (someone or something) in an abrupt or ungracious manner.',
            example:
              'I asked her to be my wife, and was rebuffed in no uncertain terms',
            synonyms: [
              'reject',
              'turn down',
              'spurn',
              'refuse',
              'decline',
              'repudiate',
              'disdain',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'An abrupt or ungracious rejection of an offer, request, or friendly gesture.',
            example: 'his reserve was not intended as a rebuff',
            synonyms: ['rejection', 'snub', 'slight', 'repulse', 'cut'],
          },
        ],
      },
    ],
  },
  adage: {
    word: 'adage',
    phonetics: [
      {
        text: '/ˈædɪdʒ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/adage_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A proverb or short statement expressing a general truth.',
            example: 'the old adage “out of sight out of mind.”',
            synonyms: [
              'saying',
              'maxim',
              'axiom',
              'proverb',
              'aphorism',
              'saw',
              'dictum',
              'precept',
              'epigram',
              'epigraph',
              'motto',
              'truism',
              'platitude',
              'cliché',
              'commonplace',
            ],
          },
        ],
      },
    ],
  },
  concede: {
    word: 'concede',
    phonetics: [
      {
        text: '/kənˈsid/',
        audio: 'https://lex-audio.useremarkable.com/mp3/xconcede_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Admit that something is true or valid after first denying or resisting it.',
            example: "I had to concede that I'd overreacted",
            synonyms: [
              'admit',
              'acknowledge',
              'accept',
              'allow',
              'grant',
              'recognize',
              'own',
              'confess',
            ],
          },
          {
            definition: 'Surrender or yield (something that one possesses)',
            example: "to concede all the territory he'd won",
            synonyms: [
              'surrender',
              'yield',
              'give up',
              'relinquish',
              'cede',
              'hand over',
              'turn over',
              'part with',
              'deliver up',
            ],
          },
        ],
      },
    ],
  },
  dismal: {
    word: 'dismal',
    phonetics: [
      {
        text: '/ˈdɪzməl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/dismal_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Depressing; dreary.',
            example:
              'the dismal weather made the late afternoon seem like evening',
            synonyms: [
              'dingy',
              'dim',
              'dark',
              'gloomy',
              'sombre',
              'dreary',
              'drab',
              'dull',
              'desolate',
              'bleak',
              'cheerless',
              'comfortless',
              'depressing',
              'grim',
              'funereal',
              'inhospitable',
              'uninviting',
              'unwelcoming',
            ],
          },
        ],
      },
    ],
  },
  admonish: {
    word: 'admonish',
    phonetics: [
      {
        text: '/ədˈmɒnɪʃ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/admonish_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Warn or reprimand someone firmly.',
            example: 'she admonished me for appearing at breakfast unshaven',
            synonyms: [
              'reprimand',
              'rebuke',
              'scold',
              'reprove',
              'upbraid',
              'chastise',
              'chide',
              'censure',
              'castigate',
              'lambast',
              'berate',
              'reproach',
              'lecture',
              'criticize',
              'take to task',
              'pull up',
              'read the Riot Act to',
              "give a piece of one's mind to",
              'haul over the coals',
            ],
          },
        ],
      },
    ],
  },
  humility: {
    word: 'humility',
    phonetics: [
      {
        text: '/(h)juˈmɪlədi/',
        audio: 'https://lex-audio.useremarkable.com/mp3/humility_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              "A modest or low view of one's own importance; humbleness.",
            example:
              'he needs the humility to accept that their way may be better',
            synonyms: [
              'modesty',
              'humbleness',
              'modestness',
              'meekness',
              'lack of pride',
              'lack of vanity',
              'diffidence',
              'unassertiveness',
            ],
          },
        ],
      },
    ],
  },
  impulsive: {
    word: 'impulsive',
    phonetics: [
      {
        text: '/ɪmˈpəlsɪv/',
        audio: 'https://lex-audio.useremarkable.com/mp3/impulsive_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Acting or done without forethought.',
            example: 'they had married as young impulsive teenagers',
            synonyms: [
              'impetuous',
              'spontaneous',
              'hasty',
              'passionate',
              'emotional',
              'uninhibited',
              'unrepressed',
              'abandoned',
            ],
          },
          {
            definition: 'Acting as an impulse.',
            example: 'the approaching waves contain an impulsive component',
          },
        ],
      },
    ],
  },
  rigorously: {
    word: 'rigorously',
    phonetics: [
      {
        text: '/ˈrɪɡ(ə)rəsli/',
        audio: 'https://lex-audio.useremarkable.com/mp3/rigorously_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adverb',
        definitions: [
          {
            definition: 'In an extremely thorough and careful way.',
            example: 'the court rigorously scrutinizes the settlement',
          },
        ],
      },
    ],
  },
  nonchalant: {
    word: 'nonchalant',
    phonetics: [
      {
        text: '/ˌnɑnʃəˈlɑnt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/nonchalant_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a person or manner) feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm.',
            example: 'she gave a nonchalant shrug',
            synonyms: [
              'nonchalant',
              'untroubled',
              'unworried',
              'unruffled',
              'unconcerned',
              'lacking concern',
              'indifferent',
              'blasé',
              'heedless',
              'relaxed',
              'calm',
              'equable',
              'equanimous',
              'serene',
              'composed',
              'casual',
              'easy',
              'easy-going',
              'airy',
              'breezy',
              'carefree',
              'free and easy',
              'free from care',
              'free from worry',
              'happy-go-lucky',
              'light-hearted',
              'frivolous',
              'unserious',
            ],
          },
        ],
      },
    ],
  },
  overbearing: {
    word: 'overbearing',
    phonetics: [
      {
        text: '/ˌoʊvərˈbɛrɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/overbearing_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Unpleasantly or arrogantly domineering.',
            example: 'his overbearing, sometimes ruthless desire to succeed',
            synonyms: [
              'domineering',
              'dominating',
              'autocratic',
              'tyrannical',
              'despotic',
              'heavy-handed',
              'oppressive',
              'high-handed',
              'bullying',
              'high and mighty',
              'lordly',
              'lording it',
              'officious',
              'masterful',
              'dictatorial',
              'bossy',
              'imperious',
              'pontifical',
              'pompous',
              'peremptory',
              'arrogant',
              'cocksure',
              'proud',
              'overproud',
              'overweening',
              'presumptuous',
              'opinionated',
              'dogmatic',
            ],
          },
        ],
      },
    ],
  },
  jolt: {
    word: 'jolt',
    phonetics: [
      {
        text: '/dʒəʊlt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/jolt_gb_1.mp3',
      },
      {
        text: '/dʒɒlt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/jolt_gb_1_8.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Push or shake (someone or something) abruptly and roughly.',
            example: 'a surge in the crowd behind him jolted him forwards',
            synonyms: ['push', 'thrust'],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'An abrupt rough or violent movement.',
            example: 'he felt a jolt when the plane started to climb',
            synonyms: ['bump', 'bounce', 'shake', 'jerk', 'lurch', 'vibration'],
          },
        ],
      },
    ],
  },
  fling: {
    word: 'fling',
    phonetics: [
      {
        text: '/flɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fling_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Throw or hurl forcefully.',
            example: 'he picked up the debris and flung it away',
            synonyms: [
              'throw',
              'toss',
              'sling',
              'hurl',
              'cast',
              'pitch',
              'lob',
              'bowl',
              'launch',
              'flip',
              'shy',
              'send',
              'propel',
              'project',
              'aim',
              'direct',
              'catapult',
              'fire',
              'send flying',
              'let fly with',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A short period of enjoyment or wild behaviour.',
            example: 'one final fling before a tranquil retirement',
            synonyms: [
              'good time',
              'binge',
              'spree',
              'bit of fun',
              'bit of amusement',
              'night on the town',
            ],
          },
          {definition: 'short for Highland fling'},
        ],
      },
    ],
  },
  preordained: {
    word: 'preordained',
    phonetics: [
      {
        text: '/ˌpriɔrˈdeɪnd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/preordained_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of an outcome or course of action) decided or determined beforehand; predestined.',
          },
        ],
      },
    ],
  },
  stellar: {
    word: 'stellar',
    phonetics: [
      {
        text: '/ˈstɛlər/',
        audio: 'https://lex-audio.useremarkable.com/mp3/stellar_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Relating to a star or stars.',
            example: 'stellar structure and evolution',
            synonyms: ['celestial', 'cosmic', 'stellar'],
          },
        ],
      },
    ],
  },
  instinctive: {
    word: 'instinctive',
    phonetics: [
      {
        text: '/ɪnˈstɪŋ(k)tɪv/',
        audio: 'https://lex-audio.useremarkable.com/mp3/instinctive_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Relating to or prompted by instinct; apparently unconscious or automatic.',
            example: 'an instinctive distaste for conflict',
          },
        ],
      },
    ],
  },
  gruesome: {
    word: 'gruesome',
    phonetics: [
      {
        text: '/ˈɡrusəm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/gruesome_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Causing repulsion or horror; grisly.',
            example: 'a most gruesome murder',
            synonyms: [
              'grisly',
              'ghastly',
              'frightful',
              'horrid',
              'horrifying',
              'fearful',
              'hideous',
              'macabre',
              'spine-chilling',
              'horrible',
              'horrendous',
              'grim',
              'awful',
              'dire',
              'dreadful',
              'terrible',
              'horrific',
            ],
          },
        ],
      },
    ],
  },
  confine: {
    word: 'confine',
    phonetics: [
      {
        text: '/kənˈfaɪn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/xconfine_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Keep or restrict someone or something within certain limits of (space, scope, quantity, or time)',
            example: 'he does not confine his message to politics',
            synonyms: [
              'enclose',
              'incarcerate',
              'imprison',
              'intern',
              'impound',
              'hold captive',
              'trap',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The borders or boundaries of a place, especially with regard to their restricting freedom of movement.',
            example: 'they were cramped within the confines of a little cabin',
            synonyms: [
              'limits',
              'outer limits',
              'borders',
              'boundaries',
              'margins',
              'extremities',
              'edges',
              'fringes',
              'marches',
            ],
          },
        ],
      },
    ],
  },
  stifle: {
    word: 'stifle',
    phonetics: [
      {
        text: '/ˈstʌɪf(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/stifle_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Make (someone) unable to breathe properly; suffocate.',
            example: 'those in the streets were stifled by the fumes',
            synonyms: ['very hot', 'sweltering'],
          },
          {
            definition:
              'Restrain (a reaction) or stop oneself acting on (an emotion)',
            example: 'she stifled a giggle',
            synonyms: [
              'suppress',
              'smother',
              'restrain',
              'keep back',
              'hold back',
              'hold in',
              'fight back',
              'choke back',
              'gulp back',
              'withhold',
              'check',
              'keep in check',
              'swallow',
              'muffle',
              'quench',
              'curb',
              'silence',
              'contain',
              'bottle up',
            ],
          },
        ],
      },
    ],
  },
  prolific: {
    word: 'prolific',
    phonetics: [
      {
        text: '/prəˈlɪfɪk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/prolific_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a plant, animal, or person) producing much fruit or foliage or many offspring.',
            example: 'in captivity tigers are prolific breeders',
            synonyms: ['productive', 'creative', 'inventive', 'fertile'],
          },
          {
            definition: 'Present in large numbers or quantities; plentiful.',
            example: 'mahogany was once prolific in the tropical forests',
            synonyms: [
              'plentiful',
              'abundant',
              'bountiful',
              'profuse',
              'copious',
              'luxuriant',
              'rich',
              'lush',
              'proliferative',
            ],
          },
        ],
      },
    ],
  },
  stagnation: {
    word: 'stagnation',
    phonetics: [
      {
        text: '/stæɡˈneɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/stagnation_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The state of not flowing or moving.',
            example: 'blocked drains resulting in water stagnation',
          },
        ],
      },
    ],
  },
  trivial: {
    word: 'trivial',
    phonetics: [
      {
        text: '/ˈtrɪviəl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/trivial_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Of little value or importance.',
            example: 'huge fines were imposed for trivial offenses',
            synonyms: [
              'unimportant',
              'insignificant',
              'inconsequential',
              'minor',
              'of little account',
              'of no account',
              'of little consequence',
              'of no consequence',
              'of little importance',
              'of no importance',
              'not worth bothering about',
              'not worth mentioning',
            ],
          },
        ],
      },
    ],
  },
  petty: {
    word: 'petty',
    phonetics: [
      {
        text: '/ˈpɛdi/',
        audio: 'https://lex-audio.useremarkable.com/mp3/petty_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Of little importance; trivial.',
            example: 'the petty divisions of party politics',
            synonyms: [
              'trivial',
              'trifling',
              'minor',
              'small',
              'slight',
              'unimportant',
              'insignificant',
              'inessential',
              'inconsequential',
              'inconsiderable',
              'negligible',
              'paltry',
              'footling',
              'fiddling',
              'niggling',
              'pettifogging',
              'nugatory',
              'of little account',
            ],
          },
          {
            definition:
              'Of secondary or lesser importance, rank, or scale; minor.',
            example: 'a petty official',
            synonyms: [
              'less important',
              'of less importance',
              'secondary',
              'subsidiary',
              'subordinate',
              'ancillary',
              'auxiliary',
            ],
          },
        ],
      },
    ],
  },
  requisite: {
    word: 'requisite',
    phonetics: [
      {
        text: '/ˈrɛkwəzət/',
        audio: 'https://lex-audio.useremarkable.com/mp3/requisite_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Made necessary by particular circumstances or regulations.',
            example:
              'the application will not be processed until the requisite fee is paid',
            synonyms: [
              'necessary',
              'required',
              'prerequisite',
              'essential',
              'indispensable',
              'vital',
              'needed',
              'needful',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A thing that is necessary for the achievement of a specified end.',
            example:
              'she believed privacy to be a requisite for a peaceful life',
            synonyms: [
              'necessity',
              'essential requirement',
              'prerequisite',
              'essential',
              'precondition',
              'specification',
              'stipulation',
            ],
          },
        ],
      },
    ],
  },
  opaque: {
    word: 'opaque',
    phonetics: [
      {
        text: '/oʊˈpeɪk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/opaque_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Not able to be seen through; not transparent.',
            example: 'the windows were opaque with steam',
            synonyms: [
              'non-transparent',
              'cloudy',
              'filmy',
              'blurred',
              'smeared',
              'hazy',
              'misty',
              'dirty',
              'dingy',
              'muddy',
              'muddied',
              'grimy',
              'smeary',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'An opaque thing or substance.',
            example:
              "To be honest, it's a relief when summer is over and we can get back into good old black opaques, which cover a multitude of shortcomings.",
          },
        ],
      },
    ],
  },
  chuckle: {
    word: 'chuckle',
    phonetics: [
      {
        text: '/ˈtʃək(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/chuckle_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'intransitive verb',
        definitions: [
          {
            definition: 'Laugh quietly or inwardly.',
            example: 'I chuckled at the astonishment on her face',
            synonyms: [
              'chortle',
              'giggle',
              'titter',
              'laugh quietly',
              'tee-hee',
              'snicker',
              'snigger',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A quiet or suppressed laugh.',
            example: 'Melissa gave a chuckle',
            synonyms: [
              'chuckle',
              'chortle',
              'guffaw',
              'giggle',
              'titter',
              'ha-ha',
              'tee-hee',
              'snigger',
              'roar of laughter',
              'hoot of laughter',
              'shriek of laughter',
              'peal of laughter',
              'belly laugh',
            ],
          },
        ],
      },
    ],
  },
  prodigy: {
    word: 'prodigy',
    phonetics: [
      {
        text: '/ˈprɑdədʒi/',
        audio: 'https://lex-audio.useremarkable.com/mp3/prodigy_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A person, especially a young one, endowed with exceptional qualities or abilities.',
            example: 'a Russian pianist who was a child prodigy in his day',
            synonyms: [
              'child genius',
              'genius',
              'wonder child',
              'mastermind',
              'virtuoso',
            ],
          },
        ],
      },
    ],
  },
  daze: {
    word: 'daze',
    phonetics: [
      {
        text: '/deɪz/',
        audio: 'https://lex-audio.useremarkable.com/mp3/daze_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Make (someone) unable to think or react properly; stupefy; bewilder.',
            example: 'she was dazed by his revelations',
            synonyms: [
              'stun',
              'stupefy',
              'knock senseless',
              'knock unconscious',
              'knock out',
              'lay out',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A state of stunned confusion or bewilderment.',
            example: 'he was walking around in a daze',
            synonyms: [
              'stupor',
              'state of stupefaction',
              'state of shock',
              'trance-like state',
              'haze',
              'confused state',
              'spin',
              'whirl',
              'muddle',
              'jumble',
            ],
          },
        ],
      },
    ],
  },
  relish: {
    word: 'relish',
    phonetics: [
      {
        text: '/ˈrɛlɪʃ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/relish_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Great enjoyment.',
            example: 'she swigged a mouthful of wine with relish',
          },
          {
            definition: 'A condiment eaten with plain food to add flavor.',
            example: 'use salsa as a relish with grilled meat or fish',
            synonyms: [
              'condiment',
              'accompaniment',
              'sauce',
              'dressing',
              'flavouring',
              'seasoning',
              'dip',
            ],
          },
          {definition: 'An appetizing flavor.'},
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Enjoy greatly.',
            example: 'he was relishing his moment of glory',
            synonyms: [
              'enjoy',
              'delight in',
              'love',
              'like',
              'adore',
              'be pleased by',
              'take pleasure in',
              'rejoice in',
              'appreciate',
              'savour',
              'revel in',
              'luxuriate in',
              'glory in',
            ],
          },
          {definition: 'Make pleasant to the taste; add relish to.'},
        ],
      },
    ],
  },
  savour: {
    word: 'savour',
    phonetics: [
      {
        text: '/ˈseɪvə/',
        audio: 'https://lex-audio.useremarkable.com/mp3/savour_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Taste (good food or drink) and enjoy it to the full.',
            example: 'gourmets will want to savour our game specialities',
          },
          {
            definition:
              'Have a suggestion or trace of (a quality or attribute, typically one considered bad)',
            example: 'their genuflections savoured of superstition and popery',
            synonyms: [
              'suggest',
              'smack of',
              'have the hallmarks of',
              'have all the signs of',
              'give the impression of',
              'seem like',
              'have the air of',
              'have a suggestion of',
              'be indicative of',
              'hint at',
              'have overtones of',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A characteristic taste, flavour, or smell, especially a pleasant one.',
            example: 'the subtle savour of wood smoke',
            synonyms: ['taste', 'flavour', 'tang', 'smack'],
          },
        ],
      },
    ],
  },
  despite: {
    word: 'despite',
    phonetics: [
      {
        text: '/dəˈspaɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/despite_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'preposition',
        definitions: [
          {
            definition: 'Without being affected by; in spite of.',
            example: 'he remains a great leader despite age and infirmity',
            synonyms: [
              'in spite of',
              'notwithstanding',
              'regardless of',
              'in defiance of',
              'without being affected by',
              'in the face of',
              'for all',
              'even with',
              'undeterred by',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Outrage; injury.',
            example: 'the despite done by him to the holy relics',
          },
          {
            definition: 'Contempt; disdain.',
            example: 'the theater only earns my despite',
            synonyms: [
              'contempt',
              'scorn',
              'scornfulness',
              'contemptuousness',
              'derision',
              'disrespect',
            ],
          },
        ],
      },
    ],
  },
  esoteric: {
    word: 'esoteric',
    phonetics: [
      {
        text: '/ˌɛsəˈtɛrɪk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/esoteric_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.',
            example: 'esoteric philosophical debates',
            synonyms: [
              'abstruse',
              'obscure',
              'arcane',
              'recherché',
              'rarefied',
              'recondite',
              'abstract',
              'difficult',
              'hard',
              'puzzling',
              'perplexing',
              'enigmatic',
              'inscrutable',
              'cryptic',
              'Delphic',
            ],
          },
        ],
      },
    ],
  },
  beckon: {
    word: 'beckon',
    phonetics: [
      {
        text: '/ˈbɛk(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/beckon_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Make a gesture with the hand, arm, or head to encourage or instruct someone to approach or follow.',
            example: 'Miranda beckoned to Adam',
            synonyms: [
              'gesture',
              'signal',
              'wave',
              'gesticulate',
              'make a gesture',
              'motion',
              'nod',
              'call',
            ],
          },
        ],
      },
    ],
  },
  recess: {
    word: 'recess',
    phonetics: [
      {
        text: '/ˈriˌsɛs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/recess_us_2_rr.mp3',
      },
      {
        text: '/rəˈsɛs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/recess_us_3.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A small space created by building part of a wall further back from the rest.',
            example: 'a table set into a recess',
          },
          {
            definition:
              'A period of time when the proceedings of a parliament, committee, court of law, or other official body are temporarily suspended.',
            example: "talks resumed after a month's recess",
          },
        ],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Attach (a fixture) by setting it back into the wall or surface to which it is fixed.',
            example: 'the lights are going to be recessed into the ceiling',
          },
          {
            definition: '(of formal proceedings) be temporarily suspended.',
            example: 'the talks recessed at 2:15',
            synonyms: [
              'adjourn',
              'recess',
              'be suspended',
              'suspend proceedings',
              'pause',
              'break off',
              'take a break',
            ],
          },
        ],
      },
    ],
  },
  harness: {
    word: 'harness',
    phonetics: [
      {
        text: '/ˈhɑrnəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/harness_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A set of straps and fittings by which a horse or other draft animal is fastened to a cart, plow, etc. and is controlled by its driver.',
            example:
              'He was diminutive, and how he managed to lift the heavy harness on the draught horses for ploughing was more than I could understand.',
            synonyms: [
              'tack',
              'tackle',
              'equipment',
              'trappings',
              'straps',
              'yoke',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Put a harness on (a horse or other draft animal)',
            example: 'how to groom a horse and harness it',
            synonyms: [
              'hitch up',
              'put something in harness',
              'saddle',
              'yoke',
              'couple',
            ],
          },
          {
            definition:
              'Control and make use of (natural resources), especially to produce energy.',
            example: 'attempts to harness solar energy',
            synonyms: [
              'control',
              'exploit',
              'utilize',
              'use',
              'make use of',
              'put to use',
              'render useful',
              'make productive',
              'turn to good account',
            ],
          },
        ],
      },
    ],
  },
  perplexed: {
    word: 'perplexed',
    phonetics: [
      {
        text: '/pərˈplɛkst/',
        audio: 'https://lex-audio.useremarkable.com/mp3/perplexed_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition: 'Completely baffled; very puzzled.',
            example: 'she gave him a perplexed look',
          },
        ],
      },
    ],
  },
  propel: {
    word: 'propel',
    phonetics: [
      {
        text: '/prəˈpɛl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/propel_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition:
              'Drive, push, or cause to move in a particular direction, typically forward.',
            example: 'the boat is propelled by using a very long paddle',
            synonyms: [
              'move forwards',
              'push forwards',
              'move',
              'set in motion',
              'get moving',
              'drive',
            ],
          },
        ],
      },
    ],
  },
  procrastinate: {
    word: 'procrastinate',
    phonetics: [
      {
        text: '/prə(ʊ)ˈkrastɪneɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/procrastinate_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verbo',
        definitions: [
          {
            definition: 'Delay or postpone action; put off doing something.',
            example:
              'the temptation will be to procrastinate until the power struggle plays itself out',
            synonyms: [
              'delay',
              'put off doing something',
              'postpone action',
              'defer action',
              'be dilatory',
              'use delaying tactics',
              'stall',
              'temporize',
              'play for time',
              'play a waiting game',
              'dally',
              "drag one's feet",
              "drag one's heels",
              "take one's time",
            ],
          },
        ],
      },
    ],
  },
  viable: {
    word: 'viable',
    phonetics: [
      {
        text: '/ˈvaɪəb(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/viable_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Capable of working successfully; feasible.',
            example: 'the proposed investment was economically viable',
            synonyms: [
              'workable',
              'feasible',
              'practicable',
              'practical',
              'applicable',
              'usable',
              'manageable',
              'operable',
              'operational',
              'possible',
              'within the bounds of possibility',
              'within the realms of possibility',
              'within reach',
              'within reason',
              'likely',
              'achievable',
              'attainable',
              'accomplishable',
              'realizable',
              'reasonable',
              'sensible',
              'realistic',
              'logical',
              'useful',
              'of use',
              'serviceable',
              'suitable',
              'expedient',
              'effective',
              'valid',
              'tenable',
            ],
          },
        ],
      },
    ],
  },
  lurking: {
    word: 'lurking',
    phonetics: [
      {
        text: '/ˈlərkɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/lurking_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {definition: 'Remaining hidden so as to wait in ambush.'},
        ],
      },
    ],
  },
  grandiose: {
    word: 'grandiose',
    phonetics: [
      {
        text: '/ˈɡrændiˌoʊs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/grandiose_us_1_rr.mp3',
      },
      {
        text: '/ˌɡrændiˈoʊs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/grandiose_us_2_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Impressive and imposing in appearance or style, especially pretentiously so.',
            example: "the court's grandiose facade",
            synonyms: [
              'magnificent',
              'impressive',
              'grand',
              'imposing',
              'awe-inspiring',
              'splendid',
              'resplendent',
              'superb',
              'striking',
              'monumental',
              'majestic',
              'glorious',
              'elaborate',
            ],
          },
        ],
      },
    ],
  },
  hopscotch: {
    word: 'hopscotch',
    phonetics: [
      {
        text: '/ˈhɑpˌskɑtʃ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/hopscotch_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              "A children's game in which each child by turn hops into and over squares marked on the ground to retrieve a marker thrown into one of these squares.",
            example:
              'Children enjoy playing games such as hopscotch and hide-and-seek.',
          },
        ],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Skip from place to place; move erratically.',
            example: 'the blackouts hopscotched around eight Western states',
          },
        ],
      },
    ],
  },
  replete: {
    word: 'replete',
    phonetics: [
      {
        text: '/rəˈplit/',
        audio: 'https://lex-audio.useremarkable.com/mp3/replete_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Filled or well-supplied with something.',
            example:
              'sensational popular fiction, replete with adultery and sudden death',
            synonyms: [
              'filled',
              'full',
              'well stocked',
              'well supplied',
              'well provided',
              'crammed',
              'crowded',
              'packed',
              'jammed',
              'stuffed',
              'teeming',
              'overflowing',
              'bursting',
              'brimful',
              'brimming',
              'loaded',
              'overloaded',
              'thick',
              'solid',
              'charged',
              'abounding',
            ],
          },
        ],
      },
    ],
  },
  flounder: {
    word: 'flounder',
    phonetics: [
      {
        text: '/ˈflaʊndə/',
        audio: 'https://lex-audio.useremarkable.com/mp3/flounder_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Struggle or stagger clumsily in mud or water.',
            example: 'he was floundering about in the shallow offshore waters',
            synonyms: [
              'struggle',
              'thrash',
              'thresh',
              'flail',
              'toss and turn',
              'twist and turn',
              'pitch',
              'splash',
              'stagger',
              'stumble',
              'falter',
              'lurch',
              'blunder',
              'fumble',
              'grope',
              'squirm',
              'writhe',
            ],
          },
        ],
      },
    ],
  },
  ulterior: {
    word: 'ulterior',
    phonetics: [
      {
        text: '/əlˈtɪriər/',
        audio: 'https://lex-audio.useremarkable.com/mp3/ulterior_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Existing beyond what is obvious or admitted; intentionally hidden.',
            example: 'could there be an ulterior motive behind his request?',
            synonyms: [
              'secondary',
              'underlying',
              'undisclosed',
              'undivulged',
              'unexpressed',
              'unapparent',
              'under wraps',
              'unrevealed',
              'concealed',
              'hidden',
              'covert',
              'secret',
              'personal',
              'private',
              'selfish',
            ],
          },
        ],
      },
    ],
  },
  frightening: {
    word: 'frightening',
    phonetics: [
      {
        text: '/ˈfraɪt(ə)nɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/frightening_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Making someone afraid or anxious; terrifying.',
            example: 'a frightening experience',
          },
        ],
      },
    ],
  },
  rudder: {
    word: 'rudder',
    phonetics: [
      {
        text: '/ˈrədər/',
        audio: 'https://lex-audio.useremarkable.com/mp3/rudder_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A flat piece hinged vertically near the stern of a boat or ship for steering.',
            example:
              'The ship has rudders and bowthrusters for harbour manoeuvring.',
            synonyms: ['tiller', 'wheel'],
          },
        ],
      },
    ],
  },
  impediment: {
    word: 'impediment',
    phonetics: [
      {
        text: '/ɪmˈpɛdəmənt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/impediment_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A hindrance or obstruction in doing something.',
            example: 'a serious impediment to scientific progress',
            synonyms: [
              'hindrance',
              'obstruction',
              'obstacle',
              'barrier',
              'bar',
              'handicap',
              'block',
              'check',
              'curb',
              'brake',
              'restraint',
              'restriction',
              'limitation',
              'encumbrance',
              'deterrent',
            ],
          },
        ],
      },
    ],
  },
  stimulating: {
    word: 'stimulating',
    phonetics: [
      {
        text: '/ˈstɪmjəˌleɪdɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/stimulating_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Encouraging or arousing interest or enthusiasm.',
            example: 'a rich and stimulating working environment',
            synonyms: [
              'thought-provoking',
              'interesting',
              'fascinating',
              'inspiring',
              'inspirational',
              'lively',
              'sparkling',
              'entertaining',
              'exhilarating',
              'exciting',
              'stirring',
              'rousing',
              'intriguing',
              'stimulative',
              'giving one food for thought',
              'piquant',
              'refreshing',
            ],
          },
        ],
      },
    ],
  },
  bluntness: {word: 'bluntness', phonetics: [], meanings: []},
  coddle: {
    word: 'coddle',
    phonetics: [
      {
        text: '/ˈkɒd(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/coddle_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Treat (someone) in an indulgent or overprotective way.',
            example: 'I was coddled and cosseted',
            synonyms: [
              'pamper',
              'cosset',
              'mollycoddle',
              'wait on someone hand and foot',
              "cater to someone's every whim",
            ],
          },
          {
            definition: 'Cook (an egg) in water below boiling point.',
            example:
              'you may have your eggs scrambled, poached, coddled, or boiled',
          },
        ],
      },
    ],
  },
  deception: {
    word: 'deception',
    phonetics: [
      {
        text: '/dəˈsɛpʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/deception_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The action of deceiving someone.',
            example: 'obtaining property by deception',
          },
        ],
      },
    ],
  },
  porous: {
    word: 'porous',
    phonetics: [
      {
        text: '/ˈpɔrəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/porous_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a rock or other material) having minute spaces or holes through which liquid or air may pass.',
            example: 'layers of porous limestones',
            synonyms: ['permeable', 'penetrable', 'pervious'],
          },
        ],
      },
    ],
  },
  tantrum: {
    word: 'tantrum',
    phonetics: [
      {
        text: '/ˈtæntrəm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/tantrum_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'An uncontrolled outburst of anger and frustration, typically in a young child.',
            example: "he has temper tantrums if he can't get his own way",
            synonyms: [
              'fit of temper',
              'fit of rage',
              'fit of pique',
              'fit',
              'outburst',
              'flare-up',
              'blow-up',
              'pet',
              'paroxysm',
              'frenzy',
              'bad mood',
              'mood',
              'huff',
              'scene',
            ],
          },
        ],
      },
    ],
  },
  delineation: {
    word: 'delineation',
    phonetics: [
      {
        text: '/dɪˌlɪniˈeɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/delineation_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The action of describing or portraying something precisely.',
            example:
              "the artist's exquisite delineation of costume and jewelry",
            synonyms: [
              'portrayal',
              'description',
              'presentation',
              'depiction',
              'representation',
              'picture',
              'portrait',
              'account',
            ],
          },
          {
            definition:
              'The action of indicating the exact position of a border or boundary.',
            example:
              'the eventual delineation of the border between the two states',
          },
        ],
      },
    ],
  },
  affection: {
    word: 'affection',
    phonetics: [
      {
        text: '/əˈfɛkʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/affection_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A gentle feeling of fondness or liking.',
            example: 'she felt affection for the wise old lady',
            synonyms: [
              'fondness',
              'love',
              'liking',
              'endearment',
              'feeling',
              'sentiment',
              'tenderness',
              'warmth',
              'warmness',
              'devotion',
              'care',
            ],
          },
          {definition: 'The act or process of affecting or being affected.'},
        ],
      },
    ],
  },
  satirize: {
    word: 'satirize',
    phonetics: [
      {
        text: '/ˈsædəˌraɪz/',
        audio: 'https://lex-audio.useremarkable.com/mp3/satirize_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Deride and criticize by means of satire.',
            example: 'Aristophanes satirized the lack of respect for the laws',
            synonyms: [
              'mock',
              'ridicule',
              'hold up to ridicule',
              'deride',
              'make fun of',
              'poke fun at',
              'parody',
              'lampoon',
              'burlesque',
              'caricature',
              'take off',
              'travesty',
            ],
          },
        ],
      },
    ],
  },
  indoctrination: {
    word: 'indoctrination',
    phonetics: [],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The process of teaching a person or group to accept a set of beliefs uncritically.',
            example:
              'I would never subject children to religious indoctrination',
          },
        ],
      },
    ],
  },
  breadth: {
    word: 'breadth',
    phonetics: [
      {
        text: '/brɛdθ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/breadth_us_1_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The distance or measurement from side to side of something; width.',
            example: 'the boat measured 27 feet in breadth',
            synonyms: ['width', 'broadness', 'wideness', 'thickness'],
          },
        ],
      },
    ],
  },
  adoration: {
    word: 'adoration',
    phonetics: [
      {
        text: '/ˌædəˈreɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/adoration_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Deep love and respect.',
            example: 'he gave her a look of adoration',
            synonyms: [
              'love',
              'devotion',
              'care',
              'fondness',
              'warmth',
              'affection',
            ],
          },
          {
            definition: 'Worship; veneration.',
            example: 'the Adoration of the Magi',
            synonyms: [
              'worship',
              'glorify',
              'praise',
              'revere',
              'reverence',
              'exalt',
              'laud',
              'extol',
              'esteem',
              'venerate',
              'pay homage to',
              'pay tribute to',
            ],
          },
        ],
      },
    ],
  },
  meticulously: {
    word: 'meticulously',
    phonetics: [
      {
        text: '/məˈtɪkjələsli/',
        audio: 'https://lex-audio.useremarkable.com/mp3/meticulously_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adverb',
        definitions: [
          {
            definition:
              'In a way that shows great attention to detail; very thoroughly.',
            example: 'a meticulously researched book',
          },
        ],
      },
    ],
  },
  sulk: {
    word: 'sulk',
    phonetics: [
      {
        text: '/sʌlk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/sulk_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verbo',
        definitions: [
          {
            definition:
              'Be silent, morose, and bad-tempered out of annoyance or disappointment.',
            example: 'he was sulking over the break-up of his band',
            synonyms: [
              'mope',
              'brood',
              'pout',
              'be sullen',
              'have a long face',
              'be in a bad mood',
              'be put out',
              'be out of sorts',
              'be out of humour',
              'be grumpy',
              'be despondent',
              'be moody',
              'be resentful',
              'pine',
              'harbour a grudge',
              "eat one's heart out",
              'moon about',
              'moon around',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'nombre',
        definitions: [
          {
            definition: 'A period of sulking.',
            example: 'she was in a fit of the sulks',
            synonyms: [
              'bad mood',
              'fit of bad humour',
              'fit of ill humour',
              'fit of pique',
              'pet',
              'mood',
              'pout',
              'temper',
              'bad temper',
              'the sulks',
              'the doldrums',
              'the blues',
            ],
          },
        ],
      },
    ],
  },
  forfeit: {
    word: 'forfeit',
    phonetics: [
      {
        text: '/ˈfɔːfɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/forfeit_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Lose or be deprived of (property or a right or privilege) as a penalty for wrongdoing.',
            example:
              'those unable to meet their taxes were liable to forfeit their estates',
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A fine or penalty for wrongdoing.',
            example: 'the loser must pay a forfeit',
            synonyms: [
              'penalty',
              'financial penalty',
              'fine',
              'fee',
              'charge',
              'sanction',
              'punitive action',
              'penance',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Lost or surrendered as a penalty for wrongdoing.',
            example: 'his possessions were declared forfeit',
          },
        ],
      },
    ],
  },
  impermanence: {
    word: 'impermanence',
    phonetics: [
      {
        text: '/ɪmˈpərmənəns/',
        audio: 'https://lex-audio.useremarkable.com/mp3/impermanence_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The state or fact of lasting for only a limited period of time.',
          },
        ],
      },
    ],
  },
  frivolous: {
    word: 'frivolous',
    phonetics: [
      {
        text: '/ˈfrɪvələs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/frivolous_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Not having any serious purpose or value.',
            example: 'rules to stop frivolous lawsuits',
            synonyms: [
              'flippant',
              'glib',
              'waggish',
              'joking',
              'jokey',
              'light-hearted',
              'facetious',
              'fatuous',
              'inane',
              'shallow',
              'superficial',
              'senseless',
              'thoughtless',
              'ill-considered',
              'non-serious',
            ],
          },
        ],
      },
    ],
  },
  fiasco: {
    word: 'fiasco',
    phonetics: [
      {
        text: '/fiˈæskoʊ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fiasco_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A thing that is a complete failure, especially in a ludicrous or humiliating way.',
            example: 'his plans turned into a fiasco',
            synonyms: [
              'failure',
              'disaster',
              'catastrophe',
              'debacle',
              'shambles',
              'farce',
              'mess',
              'wreck',
              'ruin',
              'ruination',
              'blunder',
              'botch',
              'abortion',
            ],
          },
        ],
      },
    ],
  },
  murky: {
    word: 'murky',
    phonetics: [
      {
        text: '/ˈmərki/',
        audio: 'https://lex-audio.useremarkable.com/mp3/murky_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Dark and gloomy, especially due to thick mist.',
            example: 'the sky was murky and a thin drizzle was falling',
            synonyms: [
              'dark',
              'gloomy',
              'grey',
              'leaden',
              'dull',
              'dim',
              'overcast',
              'cloudy',
              'clouded',
              'sunless',
              'foggy',
              'misty',
              'dismal',
              'dreary',
              'bleak',
              'louring',
              'threatening',
              'cheerless',
              'depressing',
              'shadowy',
              'sombre',
            ],
          },
        ],
      },
    ],
  },
  loathing: {
    word: 'loathing',
    phonetics: [
      {
        text: '/ˈloʊðɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/loathing_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A feeling of intense dislike or disgust; hatred.',
            example: 'the thought filled him with loathing',
          },
        ],
      },
    ],
  },
  anthropology: {
    word: 'anthropology',
    phonetics: [
      {
        text: '/ˌænθrəˈpɑlədʒi/',
        audio: 'https://lex-audio.useremarkable.com/mp3/anthropology_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The study of human societies and cultures and their development.',
            example:
              'Comparative studies declined and anthropology shifted to universities.',
          },
        ],
      },
    ],
  },
  gnawing: {
    word: 'gnawing',
    phonetics: [
      {
        text: '/ˈnɔɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/gnawing_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Persistently worrying or distressing.',
            example: 'that gnawing pain in her stomach',
          },
        ],
      },
    ],
  },
  startling: {
    word: 'startling',
    phonetics: [
      {
        text: '/ˈstɑrdlɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/startling_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition: 'Very surprising, astonishing, or remarkable.',
            example: 'he bore a startling likeness to their father',
            synonyms: [
              'surprising',
              'astonishing',
              'amazing',
              'unexpected',
              'unforeseen',
              'staggering',
              'shocking',
              'stunning',
            ],
          },
        ],
      },
    ],
  },
  reconcile: {
    word: 'reconcile',
    phonetics: [
      {
        text: '/ˈrɛk(ə)nsʌɪl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/reconcile_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Restore friendly relations between.',
            example: 'the king and the archbishop were publicly reconciled',
            synonyms: [
              'reconcile',
              'make harmonious',
              'restore harmony to',
              'make peaceful',
              'patch up',
              'repair',
              'smooth out',
            ],
          },
          {
            definition:
              'Make (one account) consistent with another, especially by allowing for transactions begun but not yet completed.',
            example:
              'it is not necessary to reconcile the cost accounts to the financial accounts',
          },
        ],
      },
    ],
  },
  demise: {
    word: 'demise',
    phonetics: [
      {
        text: '/dəˈmaɪz/',
        audio: 'https://lex-audio.useremarkable.com/mp3/demise_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: "A person's death.",
            example: "Mr. Grisenthwaite's tragic demise",
            synonyms: [
              'death',
              'dying',
              'passing',
              'passing away',
              'passing on',
              'loss of life',
              'expiry',
              'expiration',
              'end',
              'departure from life',
              'final exit',
            ],
          },
          {
            definition:
              'Conveyance or transfer of property or a title by demising.',
            example:
              'First, where a landlord let premises by demise to a tenant, he was regarded as parting with all control over them.',
            synonyms: [
              'transfer',
              'transference',
              'transferral',
              'granting',
              'ceding',
              'devolution',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Convey or grant (an estate) by will or lease.',
            example:
              'the manor and the mill were demised for twenty-one-year terms',
            synonyms: [
              'transfer',
              'give the right of',
              'give the title of',
              'grant',
              'cede',
              'devolve',
              'lease',
            ],
          },
        ],
      },
    ],
  },
  tumultuous: {
    word: 'tumultuous',
    phonetics: [
      {
        text: '/t(j)uˈməltʃuəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/tumultuous_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Making a loud, confused noise; uproarious.',
            example: 'tumultuous applause',
            synonyms: [
              'loud',
              'deafening',
              'thunderous',
              'thundering',
              'ear-shattering',
              'ear-splitting',
              'ear-piercing',
              'uproarious',
              'noisy',
              'clamorous',
              'vociferous',
            ],
          },
        ],
      },
    ],
  },
  exuberant: {
    word: 'exuberant',
    phonetics: [
      {
        text: '/ɪɡˈzub(ə)rənt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/exuberant_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Filled with or characterized by a lively energy and excitement.',
            example: 'giddily exuberant crowds',
            synonyms: [
              'ebullient',
              'buoyant',
              'cheerful',
              'sunny',
              'breezy',
              'jaunty',
              'light-hearted',
              'in high spirits',
              'high-spirited',
              'exhilarated',
              'excited',
              'elated',
              'exultant',
              'euphoric',
              'joyful',
              'cheery',
              'merry',
              'jubilant',
              'sparkling',
              'effervescent',
              'vivacious',
              'enthusiastic',
              'irrepressible',
              'energetic',
              'animated',
              'full of life',
              'lively',
              'vigorous',
              'zestful',
            ],
          },
        ],
      },
    ],
  },
  imploring: {
    word: 'imploring',
    phonetics: [
      {
        text: '/ɪmˈplɔrɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/imploring_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [{definition: 'Making an earnest or desperate appeal.'}],
      },
    ],
  },
  obliterate: {
    word: 'obliterate',
    phonetics: [
      {
        text: '/əˈblɪdəˌreɪt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/obliterate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Destroy utterly; wipe out.',
            example:
              'the memory was so painful that he obliterated it from his mind',
            synonyms: [
              'destroy',
              'wipe out',
              'annihilate',
              'exterminate',
              'extirpate',
              'demolish',
              'eliminate',
              'eradicate',
              'kill',
              'decimate',
              'liquidate',
              'wipe off the face of the earth',
              'wipe off the map',
            ],
          },
        ],
      },
    ],
  },
  superficial: {
    word: 'superficial',
    phonetics: [
      {
        text: '/ˌsupərˈfɪʃəl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/superficial_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Existing or occurring at or on the surface.',
            example: 'the building suffered only superficial damage',
            synonyms: [
              'surface',
              'exterior',
              'external',
              'outer',
              'outside',
              'outermost',
              'peripheral',
              'slight',
            ],
          },
        ],
      },
    ],
  },
  whisk: {
    word: 'whisk',
    phonetics: [
      {
        text: '/wɪsk/',
        audio: 'https://lex-audio.useremarkable.com/mp3/whisk_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Take or move (someone or something) somewhere suddenly and quickly.',
            example: 'he whisked her off to Paris for a few days',
            synonyms: ['speed', 'hurry', 'rush', 'catapult'],
          },
          {
            definition:
              'Beat or stir (a substance, especially cream or eggs) with a light, rapid movement.',
            example: 'In another bowl whisk the cream until light peaks form.',
            synonyms: ['whip', 'beat', 'mix vigorously', 'stir vigorously'],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A utensil for whipping eggs or cream.',
            example:
              "It doesn't take as long a time as you'd think to whip cream with a whisk.",
            synonyms: ['beater', 'mixer', 'blender', 'swizzle stick'],
          },
          {
            definition:
              'A bunch of grass, twigs, or bristles for removing dust or flies.',
            example:
              'Objects surround the two uniforms: a mop for the cleaner; a fly whisk, medicine containers, and a drum for the nanga.',
          },
          {
            definition: 'A brief, rapid action or movement.',
            example: "a whisk round St Basil's cathedral",
            synonyms: ['flick', 'twitch', 'wave', 'sweep', 'swipe'],
          },
        ],
      },
    ],
  },
  gaze: {
    word: 'gaze',
    phonetics: [
      {
        text: '/ɡeɪz/',
        audio: 'https://lex-audio.useremarkable.com/mp3/gaze_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Look steadily and intently, especially in admiration, surprise, or thought.',
            example: 'he could only gaze at her in astonishment',
            synonyms: [
              'stare',
              'look fixedly',
              'look vacantly',
              'look',
              'take a good look',
              'gape',
              'goggle',
              'peer',
              'leer',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A steady intent look.',
            example: 'he turned, following her gaze',
            synonyms: ['stare', 'fixed look', 'intent look', 'gape', 'eye'],
          },
        ],
      },
    ],
  },
  unintelligible: {
    word: 'unintelligible',
    phonetics: [
      {
        text: '/ˌənənˈtɛlədʒəb(ə)l/',
        audio:
          'https://lex-audio.useremarkable.com/mp3/unintelligible_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition: 'Impossible to understand.',
            example: 'dolphin sounds are unintelligible to humans',
            synonyms: [
              'incomprehensible',
              'indiscernible',
              'meaningless',
              'unfathomable',
              'obscure',
              'cryptic',
              'inscrutable',
              'enigmatic',
              'mumbled',
              'indistinct',
              'unclear',
              'slurred',
              'inarticulate',
              'incoherent',
              'confused',
              'garbled',
              'scrambled',
              'muddled',
              'jumbled',
              'senseless',
            ],
          },
        ],
      },
    ],
  },
  fleeting: {
    word: 'fleeting',
    phonetics: [
      {
        text: '/ˈflidɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/fleeting_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Lasting for a very short time.',
            example: 'hoping to get a fleeting glimpse of a whale underwater',
            synonyms: [
              'brief',
              'transient',
              'short-lived',
              'short',
              'momentary',
              'sudden',
              'cursory',
              'transitory',
              'ephemeral',
              'fugitive',
              'evanescent',
              'fading',
              'vanishing',
              'flying',
              'fly-by-night',
              'passing',
              'flitting',
              'here today and gone tomorrow',
              'temporary',
              'impermanent',
              'short-term',
              'rapid',
              'quick',
              'swift',
              'rushed',
            ],
          },
        ],
      },
    ],
  },
  entitlement: {
    word: 'entitlement',
    phonetics: [
      {
        text: '/ɪnˈtaɪdlmənt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/entitlement_us_1.mp3',
      },
      {
        text: '/ɛnˈtaɪdlmənt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/entitlement_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The fact of having a right to something.',
            example:
              'full entitlement to fees and maintenance should be offered',
            synonyms: ['right', 'prerogative', 'claim', 'title', 'licence'],
          },
        ],
      },
    ],
  },
  incessant: {
    word: 'incessant',
    phonetics: [
      {
        text: '/ɪnˈsɛs(ə)nt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/incessant_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of something regarded as unpleasant) continuing without pause or interruption.',
            example: 'the incessant beat of the music',
            synonyms: [
              'ceaseless',
              'unceasing',
              'constant',
              'continual',
              'unabating',
              'interminable',
              'endless',
              'unending',
              'never-ending',
              'everlasting',
              'eternal',
              'perpetual',
              'continuous',
              'non-stop',
              'uninterrupted',
              'unbroken',
              'ongoing',
              'unremitting',
              'persistent',
              'relentless',
              'unrelenting',
              'unrelieved',
              'sustained',
              'unflagging',
              'unwearying',
              'untiring',
            ],
          },
        ],
      },
    ],
  },
  seize: {
    word: 'seize',
    phonetics: [
      {
        text: '/siz/',
        audio: 'https://lex-audio.useremarkable.com/mp3/seize_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Take hold of suddenly and forcibly.',
            example: 'she jumped up and seized his arm',
            synonyms: [
              'grab',
              'grasp',
              'snatch',
              'seize hold of',
              'grab hold of',
              'take hold of',
              'lay hold of',
              'lay hands on',
              "lay one's hands on",
              "get one's hands on",
              'take a grip of',
              'grip',
              'clutch',
              'take',
              'pluck',
            ],
          },
          {
            definition:
              'Take (an opportunity or initiative) eagerly and decisively.',
            example: 'he seized his chance to attack as Delaney hesitated',
          },
          {
            definition:
              '(of a feeling or pain) affect (someone) suddenly or acutely.',
            example: 'he was seized by the most dreadful fear',
          },
          {
            definition:
              'Strongly appeal to or attract (the imagination or attention)',
            example:
              "the story of the king's escape seized the public imagination",
          },
          {
            definition:
              '(of a machine with moving parts or a moving part in a machine) become stuck or jammed.',
            example: 'I realized that the mechanism had seized',
            synonyms: [
              'stick',
              'become stuck',
              'catch',
              'seize',
              'seize up',
              'become immobilized',
              'become unable to move',
              'become fixed',
              'become wedged',
              'become lodged',
              'become trapped',
            ],
          },
          {
            definition:
              'Fasten or attach (someone or something) to something by binding with turns of rope.',
          },
        ],
      },
    ],
  },
  plague: {
    word: 'plague',
    phonetics: [
      {
        text: '/pleɪɡ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/plague_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A contagious bacterial disease characterized by fever and delirium, typically with the formation of buboes (bubonic plague) and sometimes infection of the lungs (pneumonic plague)',
            example: 'an outbreak of plague',
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Cause continual trouble or distress to.',
            example: 'he has been plagued by ill health',
            synonyms: [
              'afflict',
              'bedevil',
              'cause suffering to',
              'torture',
              'torment',
              'trouble',
              'beset',
              'dog',
              'curse',
              'rack',
            ],
          },
        ],
      },
    ],
  },
  lethargy: {
    word: 'lethargy',
    phonetics: [
      {
        text: '/ˈlɛθərdʒi/',
        audio: 'https://lex-audio.useremarkable.com/mp3/lethargy_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A lack of energy and enthusiasm.',
            example: 'periods of weakness and lethargy',
            synonyms: [
              'sluggishness',
              'inertia',
              'inactivity',
              'inaction',
              'slowness',
              'torpor',
              'torpidity',
              'lifelessness',
              'dullness',
              'listlessness',
              'languor',
              'languidness',
              'stagnation',
              'dormancy',
              'laziness',
              'idleness',
              'indolence',
              'shiftlessness',
              'sloth',
              'phlegm',
              'apathy',
              'passivity',
              'ennui',
              'weariness',
              'tiredness',
              'lassitude',
              'fatigue',
              'sleepiness',
              'drowsiness',
              'enervation',
              'somnolence',
              'narcosis',
            ],
          },
        ],
      },
    ],
  },
  merely: {
    word: 'merely',
    phonetics: [
      {
        text: '/ˈmɪrli/',
        audio: 'https://lex-audio.useremarkable.com/mp3/merely_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adverb',
        definitions: [
          {
            definition: 'Just; only.',
            example:
              'she seemed to him not merely an intelligent woman, but a kind of soul mate',
            synonyms: [
              'only',
              'purely',
              'solely',
              'simply',
              'entirely',
              'just',
              'but',
            ],
          },
        ],
      },
    ],
  },
  pamper: {
    word: 'pamper',
    phonetics: [
      {
        text: '/ˈpampə/',
        audio: 'https://lex-audio.useremarkable.com/mp3/pamper_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Indulge with every attention, comfort, and kindness; spoil.',
            example: 'famous people just love being pampered',
            synonyms: [
              'spoil',
              'indulge',
              'overindulge',
              'cosset',
              'mollycoddle',
              'coddle',
              'baby',
              'pet',
              'wait on someone hand and foot',
              "cater to someone's every whim",
              'overparent',
            ],
          },
        ],
      },
    ],
  },
  inaction: {
    word: 'inaction',
    phonetics: [
      {
        text: '/ɪnˈækʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/inaction_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Lack of action where some is expected or appropriate.',
            example: 'future generations will condemn us for inaction',
            synonyms: ['inactivity', 'passivity', 'non-intervention'],
          },
        ],
      },
    ],
  },
  mere: {
    word: 'mere',
    phonetics: [
      {
        text: '/mɪr/',
        audio: 'https://lex-audio.useremarkable.com/mp3/mere_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'That is solely or no more or better than what is specified.',
            example: 'questions that cannot be answered by mere mortals',
            synonyms: [
              'trifling',
              'meagre',
              'bare',
              'trivial',
              'paltry',
              'basic',
              'scant',
              'scanty',
              'skimpy',
              'minimal',
              'slender',
            ],
          },
        ],
      },
    ],
  },
  peering: {
    word: 'peering',
    phonetics: [
      {
        text: '/pɪərɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/peering_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The exchange of data directly between internet service providers, rather than via the internet.',
            example:
              "Public peering is a means for internet service providers to send and receive traffic destined for one another's networks.",
          },
        ],
      },
    ],
  },
  seizing: {
    word: 'seizing',
    phonetics: [
      {
        text: '/ˈsizɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/seizing_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A length of cord or rope used for fastening or tying.',
            example: 'they prepared a great many seizings to tie the men with',
          },
        ],
      },
    ],
  },
  azure: {
    word: 'azure',
    phonetics: [
      {
        text: '/ˈæʒər/',
        audio: 'https://lex-audio.useremarkable.com/mp3/azure_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Bright blue in color like a cloudless sky.',
            example: 'white beaches surrounded by azure seas',
            synonyms: [
              'sky blue',
              'deep blue',
              'bright blue',
              'blue',
              'ultramarine',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A bright blue color.',
            example: 'a flash of azure drew my eye to a kingfisher',
          },
          {
            definition:
              'A small butterfly that is typically blue or purplish, with color differences between the sexes.',
            example:
              'Tiny blue azures alight in the grass, and cabbage whites hover over the vegetable patch.',
          },
        ],
      },
    ],
  },
  catapult: {
    word: 'catapult',
    phonetics: [
      {
        text: '/ˈkatəpʌlt/',
        audio: 'https://lex-audio.useremarkable.com/mp3/catapult_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A forked stick with an elastic band fastened to the two prongs, used by children for shooting small stones.',
            example:
              'Last year a man lost the sight in his left eye after he answered a knock at his door and was hit by a stone fired from a catapult.',
            synonyms: ['sling'],
          },
        ],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Hurl or launch (something) with or as if with a catapult.',
            example: 'the explosion catapulted the car 30 yards along the road',
            synonyms: [
              'propel',
              'launch',
              'hurl',
              'hurtle',
              'fling',
              'send flying',
              'send',
              'let fly',
              'let loose',
              'fire',
              'blast',
              'shoot',
            ],
          },
        ],
      },
    ],
  },
  inhibition: {
    word: 'inhibition',
    phonetics: [
      {
        text: '/ˌɪn(h)ɪˈbɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/inhibition_us_2_rr.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A feeling that makes one self-conscious and unable to act in a relaxed and natural way.',
            example: 'the children, at first shy, soon lost their inhibitions',
            synonyms: [
              'shyness',
              'reticence',
              'self-consciousness',
              'reserve',
              'diffidence',
              'bashfulness',
              'coyness',
              'embarrassment',
              'unease',
              'wariness',
              'reluctance',
              'discomfort',
              'hesitance',
              'hesitancy',
              'apprehension',
              'nerves',
              'nervousness',
              'insecurity',
            ],
          },
        ],
      },
    ],
  },
  divine: {
    word: 'divine',
    phonetics: [
      {
        text: '/dəˈvaɪn/',
        audio: 'https://lex-audio.useremarkable.com/mp3/divine_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Of, from, or like God or a god.',
            example: 'heroes with divine powers',
            synonyms: [
              'godly',
              'godlike',
              'angelic',
              'seraphic',
              'saintly',
              'beatific',
            ],
          },
          {
            definition: 'Excellent; delightful.',
            synonyms: [
              'lovely',
              'handsome',
              'beautiful',
              'good-looking',
              'prepossessing',
              'charming',
              'delightful',
              'appealing',
              'engaging',
              'winsome',
              'ravishing',
              'gorgeous',
              'bewitching',
              'beguiling',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A cleric or theologian.',
            example:
              'There are also many references to contemporary natural sciences and a healthy smattering of Anglican divines, including Hooker, Andrewes, and Herbert.',
            synonyms: [
              'theologian',
              'clergyman',
              'member of the clergy',
              'churchman',
              'churchwoman',
              'cleric',
              'ecclesiastic',
              'man of the cloth',
              'man of God',
              'holy man',
              'holy woman',
              'preacher',
              'priest',
            ],
          },
          {
            definition: 'Providence or God.',
            example: 'After all, the Divine is an all-encompassing entity.',
          },
        ],
      },
    ],
  },
  dazzling: {
    word: 'dazzling',
    phonetics: [
      {
        text: '/ˈdæz(ə)lɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/dazzling_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Extremely bright, especially so as to blind the eyes temporarily.',
            example: 'the sunlight was dazzling',
            synonyms: [
              'extremely bright',
              'blinding',
              'glaring',
              'brilliant',
              'gleaming',
              'shining',
            ],
          },
        ],
      },
    ],
  },
  realm: {
    word: 'realm',
    phonetics: [
      {
        text: '/rɛlm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/realm_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A kingdom.',
            example: 'the peers of the realm',
            synonyms: ['kingdom', 'sovereign state', 'monarchy'],
          },
        ],
      },
    ],
  },
  daring: {
    word: 'daring',
    phonetics: [
      {
        text: '/ˈdɛrɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/daring_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              '(of a person or action) adventurous or audaciously bold.',
            example: 'a daring crime',
            synonyms: [
              'bold',
              'audacious',
              'adventurous',
              'intrepid',
              'venturesome',
              'fearless',
              'brave',
              'unafraid',
              'unshrinking',
              'undaunted',
              'dauntless',
              'valiant',
              'valorous',
              'heroic',
              'dashing',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Adventurous courage.',
            example: 'the zeal and daring of climbers',
            synonyms: [
              'boldness',
              'audacity',
              'temerity',
              'audaciousness',
              'fearlessness',
              'intrepidity',
              'bravery',
              'courage',
              'courageousness',
              'valour',
              'valorousness',
              'heroism',
              'pluck',
            ],
          },
        ],
      },
    ],
  },
  pinnacle: {
    word: 'pinnacle',
    phonetics: [
      {
        text: '/ˈpɪnək(ə)l/',
        audio: 'https://lex-audio.useremarkable.com/mp3/pinnacle_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The most successful point; the culmination.',
            example: 'he had reached the pinnacle of his career',
            synonyms: [
              'highest level',
              'peak',
              'height',
              'high point',
              'high spot',
              'summit',
              'top',
              'climax',
              'crowning point',
              'peak of perfection',
              'apex',
              'vertex',
              'zenith',
              'apogee',
              'ascendancy',
              'upper limit',
              'acme',
              'meridian',
            ],
          },
          {
            definition: 'A high, pointed piece of rock.',
            example:
              'As we chugged along the vivid green Wuyang River towards Dragon King Gorge, thickly forested crags and pinnacles of rock rose high above.',
            synonyms: [
              'peak',
              'needle',
              'crag',
              'tor',
              'summit',
              'top',
              'mountaintop',
              'crest',
              'apex',
              'tip',
              'vertex',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {definition: 'Set on or as if on a pinnacle.'},
          {definition: 'Form the culminating point or example of.'},
        ],
      },
    ],
  },
  provocative: {
    word: 'provocative',
    phonetics: [
      {
        text: '/prəˈvɑkədɪv/',
        audio: 'https://lex-audio.useremarkable.com/mp3/provocative_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Causing annoyance, anger, or another strong reaction, especially deliberately.',
            example: 'a provocative article',
            synonyms: [
              'annoying',
              'irritating',
              'exasperating',
              'infuriating',
              'provoking',
              'maddening',
              'goading',
              'vexing',
              'galling',
            ],
          },
        ],
      },
    ],
  },
  vitality: {
    word: 'vitality',
    phonetics: [
      {
        text: '/vaɪˈtælədi/',
        audio: 'https://lex-audio.useremarkable.com/mp3/vitality_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'The state of being strong and active; energy.',
            example: 'changes that will give renewed vitality to our democracy',
            synonyms: [
              'liveliness',
              'life',
              'energy',
              'animation',
              'spirit',
              'spiritedness',
              'high-spiritedness',
              'vivacity',
              'exuberance',
              'buoyancy',
              'bounce',
              'vibrancy',
              'verve',
              'vim',
              'pep',
              'brio',
              'zest',
              'zestfulness',
              'sparkle',
              'spark',
              'effervescence',
              'dynamism',
              'passion',
              'fire',
              'vigour',
              'forcefulness',
              'ardour',
              'zeal',
              'relish',
              'gusto',
              'push',
              'drive',
              'punch',
              'elan',
            ],
          },
        ],
      },
    ],
  },
  volition: {
    word: 'volition',
    phonetics: [
      {
        text: '/voʊˈlɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/volition_us_2.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: "The faculty or power of using one's will.",
            example: 'without conscious volition she backed into her office',
            synonyms: [
              'determination',
              'firmness of purpose',
              'fixity of purpose',
              'will power',
              'strength of character',
              'resolution',
              'resolve',
              'resoluteness',
              'purposefulness',
              'single-mindedness',
              'drive',
              'commitment',
              'dedication',
              'doggedness',
              'tenacity',
              'tenaciousness',
              'staying power',
              'backbone',
              'spine',
            ],
          },
        ],
      },
    ],
  },
  personhood: {
    word: 'personhood',
    phonetics: [
      {
        text: '/ˈpərs(ə)nˌhʊd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/personhood_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The quality or condition of being an individual person.',
            example:
              'the documentary attempts to get behind the icon, to a sense of her personhood',
          },
        ],
      },
    ],
  },
  intuition: {
    word: 'intuition',
    phonetics: [
      {
        text: '/ˌɪnt(j)uˈɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/intuition_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The ability to understand something immediately, without the need for conscious reasoning.',
            example: 'we shall allow our intuition to guide us',
            synonyms: ['instinct', 'intuitiveness'],
          },
        ],
      },
    ],
  },
  myth: {
    word: 'myth',
    phonetics: [
      {
        text: '/mɪθ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/myth_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A traditional story, especially one concerning the early history of a people or explaining some natural or social phenomenon, and typically involving supernatural beings or events.',
            example: 'ancient Celtic myths',
            synonyms: [
              'folk tale',
              'story',
              'folk story',
              'legend',
              'tale',
              'fable',
              'saga',
              'allegory',
              'parable',
              'tradition',
              'lore',
              'folklore',
            ],
          },
          {
            definition: 'A widely held but false belief or idea.',
            example:
              'he wants to dispel the myth that sea kayaking is too risky or too strenuous',
            synonyms: ['myth', 'belief', "old wives' tale", 'notion'],
          },
        ],
      },
    ],
  },
  commensurate: {
    word: 'commensurate',
    phonetics: [
      {
        text: '/kəˈmɛnsərət/',
        audio:
          'https://lex-audio.useremarkable.com/mp3/commensurate_us_1_rr.mp3',
      },
      {
        text: '/kəˈmɛnʃərət/',
        audio: 'https://lex-audio.useremarkable.com/mp3/commensurate_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Corresponding in size or degree; in proportion.',
            example: 'salary will be commensurate with experience',
            synonyms: [
              'equivalent',
              'equal',
              'corresponding',
              'correspondent',
              'comparable',
              'proportionate',
              'proportional',
            ],
          },
        ],
      },
    ],
  },
  preponderance: {
    word: 'preponderance',
    phonetics: [
      {
        text: '/prəˈpɑnd(ə)rəns/',
        audio: 'https://lex-audio.useremarkable.com/mp3/preponderance_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The quality or fact of being greater in number, quantity, or importance.',
            example: 'the preponderance of women among older people',
            synonyms: ['prevalence', 'predominance', 'dominance'],
          },
        ],
      },
    ],
  },
  perennial: {
    word: 'perennial',
    phonetics: [
      {
        text: '/pəˈrɛniəl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/perennial_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Lasting or existing for a long or apparently infinite time; enduring or continually recurring.',
            example: 'his perennial distrust of the media',
            synonyms: [
              'everlasting',
              'perpetual',
              'eternal',
              'continuing',
              'unending',
              'never-ending',
              'endless',
              'undying',
              'ceaseless',
              'abiding',
              'enduring',
              'lasting',
              'persisting',
              'permanent',
              'constant',
              'continual',
              'unfailing',
              'unchanging',
              'never-changing',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A perennial plant.',
            example: 'perennials will transform the garden in summer',
          },
        ],
      },
    ],
  },
  consensus: {
    word: 'consensus',
    phonetics: [
      {
        text: '/kənˈsɛnsəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/xconsensus_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'A general agreement.',
            example: 'a consensus view',
            synonyms: [
              'agreement',
              'harmony',
              'concord',
              'like-mindedness',
              'concurrence',
              'consent',
              'common consent',
              'accord',
              'unison',
              'unity',
              'unanimity',
              'oneness',
              'solidarity',
              'concert',
            ],
          },
        ],
      },
    ],
  },
  superluminal: {
    word: 'superluminal',
    phonetics: [
      {
        text: '/ˌsupərˈlumənl/',
        audio: 'https://lex-audio.useremarkable.com/mp3/superluminal_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Denoting or having a speed greater than that of light.',
            example:
              'No engine is likely to generate superluminal speeds; the laws of physics prevent us from doing that, but we will be able to go many times faster than our current propulsion methods allow.',
          },
        ],
      },
    ],
  },
  encompass: {
    word: 'encompass',
    phonetics: [
      {
        text: '/ɪnˈkʌmpəs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/encompass_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'Surround and have or hold within.',
            example:
              "this area of London encompasses Piccadilly to the north and St James's Park to the south",
            synonyms: [
              'surround',
              'enclose',
              'ring',
              'encircle',
              'circumscribe',
              'skirt',
              'bound',
              'border',
              'fringe',
            ],
          },
          {
            definition: 'Cause to take place.',
            example: 'an act designed to encompass the death of the king',
          },
        ],
      },
    ],
  },
  proclamation: {
    word: 'proclamation',
    phonetics: [
      {
        text: '/ˌprɑkləˈmeɪʃ(ə)n/',
        audio: 'https://lex-audio.useremarkable.com/mp3/proclamation_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A public or official announcement, especially one dealing with a matter of great importance.',
            example:
              'Eisenhower signed a proclamation admitting Alaska to the Union',
            synonyms: [
              'decree',
              'order',
              'edict',
              'command',
              'rule',
              'ruling',
              'announcement',
              'declaration',
              'pronouncement',
              'statement',
            ],
          },
        ],
      },
    ],
  },
  seldom: {
    word: 'seldom',
    phonetics: [
      {
        text: '/ˈsɛldəm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/seldom_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adverb',
        definitions: [
          {
            definition: 'Not often; rarely.',
            example: 'Islay is seldom visited by tourists',
            synonyms: [
              'rarely',
              'infrequently',
              'on rare occasions',
              'hardly ever',
              'scarcely ever',
              'hardly',
              'scarcely',
              'almost never',
              'once in a while',
              'every once in a while',
              'only now and then',
              'not often',
              'only occasionally',
              'sporadically',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'adjective',
        definitions: [{definition: 'Not common; infrequent.'}],
      },
    ],
  },
  crowning: {
    word: 'crowning',
    phonetics: [
      {
        text: '/ˈkraʊnɪŋ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/crowning_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition:
              'Forming the triumphant culmination of an effort or endeavor.',
          },
        ],
      },
    ],
  },
  flotsam: {
    word: 'flotsam',
    phonetics: [
      {
        text: '/ˈflɑtsəm/',
        audio: 'https://lex-audio.useremarkable.com/mp3/flotsam_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'The wreckage of a ship or its cargo found floating on or washed up by the sea.',
            example:
              'It has the habit of swimming in small shoals around patches of flotsam, or floating logs, and is attracted by rafts or drifting boats.',
            synonyms: ['wreckage', 'lost cargo', 'floating remains'],
          },
        ],
      },
    ],
  },
  whirlpool: {
    word: 'whirlpool',
    phonetics: [
      {
        text: '/ˈ(h)wərlˌpul/',
        audio: 'https://lex-audio.useremarkable.com/mp3/whirlpool_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              'A rapidly rotating mass of water in a river or sea into which objects may be drawn, typically caused by the meeting of conflicting currents.',
            example:
              'She watched the currents rush into whirlpools and swirl and swirl until they bumped into the next whirlpool, finally disappearing hundreds of feet beneath the water.',
            synonyms: ['eddy', 'vortex', 'maelstrom', 'swirl', 'whirl'],
          },
          {
            definition:
              'A heated pool in which hot aerated water is continuously circulated.',
            example:
              'It comes hot on the heels of a £1.5 million investment at the hotel to provide a leisure facility, including swimming pool, whirlpool, large gym and sauna.',
            synonyms: ['spa bath', 'hot tub'],
          },
        ],
      },
    ],
  },
  sacred: {
    word: 'sacred',
    phonetics: [
      {
        text: '/ˈseɪkrəd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/sacred_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjetivo',
        definitions: [
          {
            definition:
              'Connected with God (or the gods) or dedicated to a religious purpose and so deserving veneration.',
            example: 'sacred rites',
            synonyms: [
              'holy',
              'hallowed',
              'blessed',
              'blest',
              'consecrated',
              'sanctified',
              'dedicated',
              'venerated',
              'revered',
            ],
          },
        ],
      },
    ],
  },
  vague: {
    word: 'vague',
    phonetics: [
      {
        text: '/veɪɡ/',
        audio: 'https://lex-audio.useremarkable.com/mp3/vague_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition:
              'Of uncertain, indefinite, or unclear character or meaning.',
            example: 'many patients suffer vague symptoms',
            synonyms: ['indistinct', 'indefinite', 'indeterminate', 'unclear'],
          },
        ],
      },
    ],
  },
  dread: {
    word: 'dread',
    phonetics: [
      {
        text: '/drɛd/',
        audio: 'https://lex-audio.useremarkable.com/mp3/dread_us_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'transitive verb',
        definitions: [
          {
            definition: 'Anticipate with great apprehension or fear.',
            example: 'Jane was dreading the party',
            synonyms: [
              'fear',
              'be afraid of',
              'worry about',
              'be anxious about',
              'have forebodings about',
              'feel apprehensive about',
            ],
          },
        ],
      },
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'Great fear or apprehension.',
            example:
              'the thought of returning to New Jersey filled her with dread',
            synonyms: [
              'fear',
              'fearfulness',
              'apprehension',
              'trepidation',
              'anxiety',
              'worry',
              'concern',
              'foreboding',
              'disquiet',
              'disquietude',
              'unease',
              'uneasiness',
              'angst',
            ],
          },
          {definition: 'A person with dreadlocks.'},
        ],
      },
      {
        partOfSpeech: 'adjective',
        definitions: [
          {
            definition: 'Greatly feared; dreadful.',
            example: 'he was stricken with the dread disease and died',
            synonyms: [
              'awful',
              'feared',
              'frightening',
              'alarming',
              'terrifying',
              'frightful',
              'terrible',
              'horrible',
              'dreadful',
              'dire',
            ],
          },
        ],
      },
    ],
  },
  intersperse: {
    word: 'intersperse',
    phonetics: [
      {
        text: '/ɪntəˈspəːs/',
        audio: 'https://lex-audio.useremarkable.com/mp3/intersperse_gb_1.mp3',
      },
    ],
    meanings: [
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition:
              'Scatter among or between other things; place here and there.',
            example: 'deep pools interspersed by shallow shingle banks',
            synonyms: [
              'scatter',
              'distribute',
              'disperse',
              'spread',
              'strew',
              'dot',
              'sprinkle',
              'pepper',
              'litter',
            ],
          },
        ],
      },
    ],
  },
};
