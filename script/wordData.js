const wordList = {
  "rascal": {
    "definition": "A playful or mischievous person.",
    "sentence": "The little rascal hid behind the couch with a giggle."
  },
  "ravine": {
    "definition": "A deep, narrow valley with steep sides.",
    "sentence": "They hiked down into the ravine to see the stream below."
  },
  "perplex": {
    "definition": "To confuse or puzzle someone.",
    "sentence": "The tricky riddle seemed to perplex everyone in the room."
  },
  "qualitative": {
    "definition": "Describing the quality of something rather than the quantity.",
    "sentence": "We had a qualitative discussion about our favorite books."
  },
  "sticky": {
    "definition": "Something that sticks to things or is hard to remove.",
    "sentence": "My hands got sticky after eating the candy."
  },
  "hamstring": {
    "definition": "A group of muscles in the back of your upper leg.",
    "sentence": "He pulled his hamstring while running fast in the race."
  },
  "vacuum": {
    "definition": "A machine that cleans by sucking up dirt.",
    "sentence": "I used the vacuum to clean the carpet in the living room."
  },
  "reliable": {
    "definition": "Someone or something you can count on.",
    "sentence": "My big brother is very reliable when I need help."
  },
  "snore": {
    "definition": "A loud sound made while sleeping.",
    "sentence": "Dad began to snore loudly as soon as he fell asleep."
  },
  "ladle": {
    "definition": "A big spoon used for serving soup.",
    "sentence": "She used a ladle to pour soup into my bowl."
  },
  "surefire": {
    "definition": "Something certain to succeed or work well.",
    "sentence": "A smile is a surefire way to make friends."
  },
  "enchantment": {
    "definition": "A magical spell or feeling of wonder.",
    "sentence": "The fairy tale was full of magic and enchantment."
  },
  "apple": {
    "definition": "A round fruit that is red, green, or yellow.",
    "sentence": "I ate a juicy red apple for my snack."
  },
  "mellow": {
    "definition": "Soft, calm, or gentle.",
    "sentence": "The mellow music helped me fall asleep."
  },
  "nacho": {
    "definition": "A snack made with chips and melted cheese.",
    "sentence": "We shared a big plate of cheesy nachos."
  },
  "problem": {
    "definition": "Something that needs to be fixed or solved.",
    "sentence": "We worked together to solve the math problem."
  },
  "acorn": {
    "definition": "A nut from an oak tree that squirrels like to eat.",
    "sentence": "The squirrel stuffed an acorn into its cheeks."
  },
  "cutlery": {
    "definition": "Knives, forks, and spoons.",
    "sentence": "We set the table with plates and cutlery."
  },
  "ambitious": {
    "definition": "Having a strong desire to succeed or do something big.",
    "sentence": "She was ambitious and wanted to be a doctor someday."
  },
  "monumental": {
    "definition": "Very big or important.",
    "sentence": "It was a monumental day when we won the championship."
  },
  "basilisk": {
    "definition": "A simple definition for basilisk.",
    "sentence": "This is an example sentence using the word 'basilisk'."
  },
  "lamentable": {
    "definition": "A simple definition for lamentable.",
    "sentence": "This is an example sentence using the word 'lamentable'."
  },
  "brilliant": {
    "definition": "A simple definition for brilliant.",
    "sentence": "This is an example sentence using the word 'brilliant'."
  },
  "competitive": {
    "definition": "A simple definition for competitive.",
    "sentence": "This is an example sentence using the word 'competitive'."
  },
  "lounge": {
    "definition": "A simple definition for lounge.",
    "sentence": "This is an example sentence using the word 'lounge'."
  },
  "supper": {
    "definition": "A simple definition for supper.",
    "sentence": "This is an example sentence using the word 'supper'."
  },
  "explosive": {
    "definition": "A simple definition for explosive.",
    "sentence": "This is an example sentence using the word 'explosive'."
  },
  "cajole": {
    "definition": "A simple definition for cajole.",
    "sentence": "This is an example sentence using the word 'cajole'."
  },
  "bauble": {
    "definition": "A simple definition for bauble.",
    "sentence": "This is an example sentence using the word 'bauble'."
  },
  "happenstance": {
    "definition": "A simple definition for happenstance.",
    "sentence": "This is an example sentence using the word 'happenstance'."
  },
  "tussle": {
    "definition": "A simple definition for tussle.",
    "sentence": "This is an example sentence using the word 'tussle'."
  },
  "inched": {
    "definition": "A simple definition for inched.",
    "sentence": "This is an example sentence using the word 'inched'."
  },
  "dimension": {
    "definition": "A simple definition for dimension.",
    "sentence": "This is an example sentence using the word 'dimension'."
  },
  "ugliness": {
    "definition": "A simple definition for ugliness.",
    "sentence": "This is an example sentence using the word 'ugliness'."
  },
  "quack": {
    "definition": "A simple definition for quack.",
    "sentence": "This is an example sentence using the word 'quack'."
  },
  "spider": {
    "definition": "A simple definition for spider.",
    "sentence": "This is an example sentence using the word 'spider'."
  },
  "weather": {
    "definition": "A simple definition for weather.",
    "sentence": "This is an example sentence using the word 'weather'."
  },
  "twinge": {
    "definition": "A simple definition for twinge.",
    "sentence": "This is an example sentence using the word 'twinge'."
  },
  "poncho": {
    "definition": "A simple definition for poncho.",
    "sentence": "This is an example sentence using the word 'poncho'."
  },
  "hooligan": {
    "definition": "A simple definition for hooligan.",
    "sentence": "This is an example sentence using the word 'hooligan'."
  },
  "decade": {
    "definition": "A simple definition for decade.",
    "sentence": "This is an example sentence using the word 'decade'."
  },
  "forbidden": {
    "definition": "A simple definition for forbidden.",
    "sentence": "This is an example sentence using the word 'forbidden'."
  },
  "jumbo": {
    "definition": "Very large in size.",
    "sentence": "We ordered a jumbo pizza for the whole team."
  },
  "mortal": {
    "definition": "Able to die; human.",
    "sentence": "The hero knew he was still a mortal facing danger."
  },
  "bugaboo": {
    "definition": "Something that causes fear or worry.",
    "sentence": "Public speaking was always a bugaboo for her."
  },
  "standard": {
    "definition": "A level of quality or normalcy.",
    "sentence": "He maintained a high standard of cleanliness."
  },
  "yearn": {
    "definition": "To strongly desire or long for something.",
    "sentence": "She would yearn to visit her hometown."
  },
  "primatologist": {
    "definition": "A person who studies primates.",
    "sentence": "The primatologist spent years observing gorillas."
  },
  "voluntary": {
    "definition": "Done by choice, not forced.",
    "sentence": "Participation in the activity is voluntary."
  },
  "furious": {
    "definition": "Extremely angry.",
    "sentence": "He was furious when he missed the bus."
  },
  "wombat": {
    "definition": "A burrowing Australian marsupial.",
    "sentence": "The wombat waddled across the trail."
  },
  "marginalize": {
    "definition": "To treat someone as unimportant.",
    "sentence": "She felt marginalized in the group project."
  },
  "swipe": {
    "definition": "To quickly move or slide something.",
    "sentence": "He took a swipe at the baseball."
  },
  "eternity": {
    "definition": "An infinite or unending time.",
    "sentence": "Waiting in line felt like an eternity."
  },
  "imagery": {
    "definition": "Descriptive language creating images in the mind.",
    "sentence": "The poem was full of vivid imagery."
  },
  "pastel": {
    "definition": "A soft or light color.",
    "sentence": "She wore a pastel pink dress to the party."
  },
  "twice": {
    "definition": "Two times.",
    "sentence": "He called me twice but I missed both calls."
  },
  "megahertz": {
    "definition": "A unit of frequency equal to one million hertz.",
    "sentence": "The processor runs at 500 megahertz."
  },
  "gnash": {
    "definition": "To grind or strike the teeth together.",
    "sentence": "He would gnash his teeth when frustrated."
  },
  "knuckle": {
    "definition": "A joint of a finger.",
    "sentence": "He cracked his knuckles before typing."
  },
  "bribery": {
    "definition": "Giving something valuable to influence someone.",
    "sentence": "The officer was arrested for bribery."
  },
  "glucose": {
    "definition": "A simple sugar in the blood.",
    "sentence": "Athletes monitor their glucose levels for energy."
  },
  "mower": {
    "definition": "A machine used to cut grass.",
    "sentence": "He bought a new mower for the big yard."
  },
  "campus": {
    "definition": "The grounds of a school or college.",
    "sentence": "The university campus was full of students."
  },
  "infant": {
    "definition": "A very young baby.",
    "sentence": "The infant slept peacefully in the crib."
  },
  "thunderbolt": {
    "definition": "A flash of lightning with thunder.",
    "sentence": "A thunderbolt struck the tree during the storm."
  },
  "despicable": {
    "definition": "Very bad or unpleasant.",
    "sentence": "Lying to his friends was a despicable act."
  },
  "elderly": {
    "definition": "Old in age.",
    "sentence": "The elderly couple walked hand in hand."
  },
  "amigo": {
    "definition": "A friend (Spanish word).",
    "sentence": "Hola, amigo! It’s good to see you."
  },
  "bestow": {
    "definition": "To give as an honor or gift.",
    "sentence": "The award was bestowed upon the winner."
  },
  "gung ho": {
    "definition": "Extremely enthusiastic or eager.",
    "sentence": "He was gung ho about starting his new job."
  },
  "umbrella": {
    "definition": "A device used to protect from rain.",
    "sentence": "She held her umbrella tightly in the wind."
  },
  "synthetic": {
    "definition": "Made by chemical or artificial means.",
    "sentence": "The jacket is made of synthetic material."
  },
  "cloying": {
    "definition": "Too sweet or sentimental.",
    "sentence": "The movie's ending was a bit cloying."
  },
  "olive": {
    "definition": "A small, round fruit used for oil.",
    "sentence": "He added green olives to the salad."
  },
  "truth": {
    "definition": "The state of being true.",
    "sentence": "She always spoke the truth."
  },
  "balderdash": {
    "definition": "Nonsense or foolish talk.",
    "sentence": "That idea is complete balderdash!"
  },
  "infringe": {
    "definition": "To violate or break a rule or law.",
    "sentence": "Downloading pirated music infringes copyright."
  },
  "interloper": {
    "definition": "Someone who intrudes where they don’t belong.",
    "sentence": "The interloper was not welcome at the meeting."
  },
  "routine": {
    "definition": "A regular way of doing something.",
    "sentence": "My morning routine includes breakfast and exercise."
  },
  "privacy": {
    "definition": "Freedom from being watched or disturbed.",
    "sentence": "He valued his privacy while working."
  },
  "decision": {
    "definition": "A choice made after thinking.",
    "sentence": "It was a hard decision to make."
  },
  "farfetched": {
    "definition": "Unlikely or hard to believe.",
    "sentence": "That explanation sounds farfetched to me."
  },
  "linen": {
    "definition": "A type of fabric made from flax.",
    "sentence": "She wore a cool linen shirt."
  },
"piratical": {
  "definition": "Related to or resembling pirates.",
  "sentence": "He wore a piratical hat for the costume party."
},
"pigsty": {
  "definition": "A dirty or messy place; also where pigs live.",
  "sentence": "Clean your room—it's a pigsty in here!"
},
"misery": {
  "definition": "Great suffering or unhappiness.",
  "sentence": "She was in misery after losing her pet."
},
"months": {
  "definition": "Units of time in a year.",
  "sentence": "There are twelve months in a calendar year."
},
"guffaw": {
  "definition": "A loud, hearty laugh.",
  "sentence": "He let out a guffaw at the joke."
},
"caravan": {
  "definition": "A group of travelers or vehicles traveling together.",
  "sentence": "The caravan moved slowly through the desert."
},
"culinary": {
  "definition": "Related to cooking or the kitchen.",
  "sentence": "She attended a prestigious culinary school."
},
"boycott": {
  "definition": "To avoid using or buying something as a protest.",
  "sentence": "They decided to boycott the store over unfair prices."
},
"calzone": {
  "definition": "A folded pizza stuffed with toppings.",
  "sentence": "He ordered a pepperoni calzone for lunch."
},
"bawl": {
  "definition": "To cry loudly.",
  "sentence": "The toddler began to bawl after dropping his toy."
},
"circle": {
  "definition": "A round shape with no corners.",
  "sentence": "She drew a perfect circle on the paper."
},
"respect": {
  "definition": "A feeling of admiration or regard.",
  "sentence": "We should treat teachers with respect."
},
"introverted": {
  "definition": "Shy or reserved; focused inward.",
  "sentence": "He was introverted and preferred quiet activities."
},
"fuddy-duddy": {
  "definition": "A person who is old-fashioned or fussy.",
  "sentence": "My grandpa is a lovable fuddy-duddy."
},
"pulley": {
  "definition": "A wheel used with a rope to lift heavy things.",
  "sentence": "They used a pulley to hoist the flag."
},
"Kodiak": {
  "definition": "A large type of bear from Alaska.",
  "sentence": "The Kodiak bear is one of the largest bears."
},
"misinterpret": {
  "definition": "To understand something the wrong way.",
  "sentence": "He misinterpreted her words and got upset."
},
"twee": {
  "definition": "Excessively cute or quaint.",
  "sentence": "The cottage was charming but a little twee."
},
"holiday": {
  "definition": "A special day of celebration or rest.",
  "sentence": "We’re going to the beach for the holiday."
},
"indigo": {
  "definition": "A deep blue-purple color.",
  "sentence": "She wore a dress the color of indigo."
},
"forage": {
  "definition": "To search for food.",
  "sentence": "Squirrels forage for nuts before winter."
},
"tooth": {
  "definition": "A hard structure in the mouth used for chewing.",
  "sentence": "He lost his first tooth yesterday."
},
"dauntlessly": {
  "definition": "Without fear or hesitation.",
  "sentence": "She dauntlessly climbed the tall mountain."
},
"faucet": {
  "definition": "A device for controlling water flow.",
  "sentence": "Turn off the faucet to save water."
},
"scheme": {
  "definition": "A plan, sometimes secret or dishonest.",
  "sentence": "They came up with a clever scheme to win."
},
"cough": {
  "definition": "A sudden, loud expulsion of air from the lungs.",
  "sentence": "He couldn’t stop his cough during class."
},
"straw": {
  "definition": "A thin tube for sucking up liquids.",
  "sentence": "She drank her juice through a red straw."
},
"hooves": {
  "definition": "The feet of horses or similar animals.",
  "sentence": "The hooves clattered loudly on the road."
},
"shadow": {
  "definition": "A dark shape made by something blocking light.",
  "sentence": "His shadow stretched across the sidewalk."
},
"meekness": {
  "definition": "Gentleness or humbleness.",
  "sentence": "Her meekness was mistaken for weakness."
},
"squall": {
  "definition": "A sudden, violent gust of wind or storm.",
  "sentence": "The squall caught the boat by surprise."
},
"squawl": {
  "definition": "An alternative spelling of 'squall' or a loud cry.",
  "sentence": "The baby let out a loud squawl."
},
"omen": {
  "definition": "A sign of what might happen in the future.",
  "sentence": "The black cat was seen as an omen of bad luck."
},
"militant": {
  "definition": "Aggressive in support of a cause.",
  "sentence": "The protester had a militant tone."
},
"civics": {
  "definition": "The study of the rights and duties of citizens.",
  "sentence": "We learned about government in civics class."
},
"locker": {
  "definition": "A storage compartment with a lock.",
  "sentence": "He kept his gym clothes in his locker."
},
"jabberwocky": {
  "definition": "Nonsense or made-up language.",
  "sentence": "The poem was full of jabberwocky words."
},
"detention": {
  "definition": "Punishment where a student stays after school.",
  "sentence": "He had to stay for detention after class."
},
"sparkle": {
  "definition": "To shine with tiny flashes of light.",
  "sentence": "The stars began to sparkle in the night sky."
},
"calico": {
  "definition": "A type of multicolored fabric or cat.",
  "sentence": "She adopted a calico kitten from the shelter."
},
"theme": {
  "definition": "The main idea of a story or event.",
  "sentence": "The party had a beach theme."
},
"literacy": {
  "definition": "The ability to read and write.",
  "sentence": "Promoting literacy is important for children."
},
"loathe": {
  "definition": "To strongly dislike something.",
  "sentence": "She loathes waking up early."
},
"axle": {
  "definition": "A rod that holds wheels in place.",
  "sentence": "The axle broke and the wagon tipped."
},
"glimmer": {
  "definition": "A faint or unsteady light.",
  "sentence": "A glimmer of hope shone in her eyes."
},
"vacation": {
  "definition": "A time of rest or travel away from work or school.",
  "sentence": "We’re going on a beach vacation this summer."
},
"napkin": {
  "definition": "A cloth or paper used to wipe the mouth and hands.",
  "sentence": "He wiped his mouth with a napkin."
},
"overrun": {
  "definition": "To spread over or take over quickly.",
  "sentence": "The garden was overrun with weeds."
},
"yellowfin": {
  "definition": "A type of tuna fish known for its yellow fins.",
  "sentence": "They caught a large yellowfin on their trip."
},
"clodhopper": {
  "definition": "A clumsy or awkward person; a heavy shoe.",
  "sentence": "He stomped in like a clodhopper."
},
"crayon": {
  "definition": "A stick of colored wax used for drawing.",
  "sentence": "She colored the picture with a red crayon."
},
"bakery": {
  "definition": "A place where bread, cakes, and pastries are made or sold.",
  "sentence": "We bought fresh rolls from the bakery."
},
"porridge": {
  "definition": "A soft food made by boiling grains in water or milk.",
  "sentence": "She had warm porridge for breakfast."
},
"eyelet": {
  "definition": "A small hole for threading laces or cords.",
  "sentence": "He pulled the shoelace through the eyelet."
},
"yeti": {
  "definition": "A mythical snow creature from the Himalayas.",
  "sentence": "They searched the snowy mountains for a yeti."
},
"groove": {
  "definition": "A long, narrow cut or depression.",
  "sentence": "The record needle moved along the groove."
},
"estimate": {
  "definition": "An approximate guess or calculation.",
  "sentence": "She gave an estimate for the repairs."
},
"cattail": {
  "definition": "A tall plant with a brown, fuzzy flower spike.",
  "sentence": "The cattail grew near the edge of the pond."
},
"paraphrase": {
  "definition": "To restate something using different words.",
  "sentence": "Please paraphrase the story in your own words."
},
"heartthrob": {
  "definition": "A very attractive person, often a celebrity.",
  "sentence": "He was a teenage heartthrob in the '90s."
},
"cheek": {
  "definition": "The side of the face below the eye.",
  "sentence": "She kissed him on the cheek."
},
"daughter": {
  "definition": "A female child of parents.",
  "sentence": "Their daughter just started kindergarten."
},
"laser": {
  "definition": "A strong beam of light used in technology.",
  "sentence": "The doctor used a laser in the surgery."
},
"invoke upshot": {
  "definition": "To cause something to happen or the final outcome.",
  "sentence": "His actions might invoke an unexpected upshot."
},
"climate": {
  "definition": "The typical weather of a region.",
  "sentence": "The desert has a hot, dry climate."
},
"yankee": {
  "definition": "A nickname for a person from the U.S. (especially the North).",
  "sentence": "The team was called the New York Yankees."
},
"dim sum": {
  "definition": "A variety of Chinese small dishes served with tea.",
  "sentence": "We ordered dim sum for brunch on Sunday."
},
"moose": {
  "definition": "A large animal with antlers found in northern forests.",
  "sentence": "A moose crossed the road ahead of us."
},
"cuckoo": {
  "definition": "A bird known for laying eggs in other birds' nests; also means crazy.",
  "sentence": "The cuckoo bird calls loudly in spring."
},
"dilemma": {
  "definition": "A difficult choice between options.",
  "sentence": "She faced a dilemma about which job to take."
},
"outrageous": {
  "definition": "Very shocking or unreasonable.",
  "sentence": "The price of the ticket was outrageous!"
},
"silver": {
  "definition": "A shiny gray-white metal.",
  "sentence": "She wore a silver necklace to the party."
},
"fedora": {
  "definition": "A soft hat with a curved brim.",
  "sentence": "He tipped his fedora and smiled."
},
"wildcat": {
  "definition": "A small, fierce wild feline.",
  "sentence": "The wildcat prowled silently through the grass."
},
"monstrosity": {
  "definition": "Something very ugly or large and unpleasant.",
  "sentence": "That building is a concrete monstrosity."
},
"sofa": {
  "definition": "A long, comfortable seat with cushions.",
  "sentence": "We sat on the sofa and watched TV."
},
"eggplant": {
  "definition": "A purple vegetable used in cooking.",
  "sentence": "She sliced the eggplant for dinner."
},
"kosher": {
  "definition": "Food prepared according to Jewish laws.",
  "sentence": "They bought kosher hot dogs for the barbecue."
},
"minority": {
  "definition": "A smaller part of a group.",
  "sentence": "Only a small minority voted against the plan."
},
"default": {
  "definition": "The standard setting or failure to meet an obligation.",
  "sentence": "It opened using the default browser."
},
"heroic": {
  "definition": "Brave or courageous.",
  "sentence": "Her heroic act saved a child’s life."
},
"bombard": {
  "definition": "To attack repeatedly or overwhelm.",
  "sentence": "They began to bombard him with questions."
},
"furtive": {
  "definition": "Done in a secret or sneaky way.",
  "sentence": "She gave a furtive glance at the notes during the test."
},
"journal": {
  "definition": "A notebook where personal thoughts or events are written.",
  "sentence": "He wrote in his journal every night."
},
"tulip": {
  "definition": "A brightly colored spring flower.",
  "sentence": "The garden was full of blooming tulips."
},
"myself": {
  "definition": "Refers to the person speaking or writing.",
  "sentence": "I made this card all by myself."
},
"marine": {
  "definition": "Related to the sea or ocean.",
  "sentence": "They studied marine animals in science class."
},
"cloudy": {
  "definition": "Covered with clouds; not clear.",
  "sentence": "It was a cloudy day with no sunshine."
},
"cricket": {
  "definition": "A small insect that makes a chirping sound.",
  "sentence": "We could hear crickets chirping outside."
},
"motto": {
  "definition": "A short phrase that expresses a guiding belief.",
  "sentence": "Our family motto is 'Be kind and brave.'"
},
"torch": {
  "definition": "A handheld light, often used in the dark.",
  "sentence": "They carried a torch through the cave."
},
"pamper": {
  "definition": "To treat with lots of care or attention.",
  "sentence": "She pampered the puppy with treats and hugs."
},
"pleasant": {
  "definition": "Nice or enjoyable.",
  "sentence": "We had a pleasant walk in the park."
},
"robin": {
  "definition": "A bird with a red chest.",
  "sentence": "A robin landed on the fence."
},
"historical": {
  "definition": "Related to history or past events.",
  "sentence": "We visited a historical battlefield."
},
"rules": {
  "definition": "Guidelines that must be followed.",
  "sentence": "The game has only a few simple rules."
},
"geometric": {
  "definition": "Related to shapes and patterns.",
  "sentence": "She drew a geometric design with triangles and circles."
},
"villa": {
  "definition": "A large, luxurious house.",
  "sentence": "They stayed at a villa near the ocean."
},
"midriff": {
  "definition": "The middle part of the body between the chest and waist.",
  "sentence": "Her shirt showed her midriff."
},
"teaspoon": {
  "definition": "A small spoon used in cooking or eating.",
  "sentence": "Add a teaspoon of salt to the soup."
},
"worrywart": {
  "definition": "Someone who worries a lot.",
  "sentence": "Don’t be such a worrywart—it’ll be fine!"
},
"developer": {
  "definition": "A person who builds or creates something, often software.",
  "sentence": "The developer fixed the bug in the app."
},
"shopaholic": {
  "definition": "Someone who loves shopping a lot.",
  "sentence": "She’s a total shopaholic on weekends."
},
"magma": {
  "definition": "Hot, melted rock found beneath the Earth's surface.",
  "sentence": "Magma flows out during a volcanic eruption."
},
"briefcase": {
  "definition": "A flat case used for carrying papers or books.",
  "sentence": "He carried his laptop in a leather briefcase."
},
"deputy": {
  "definition": "A person who helps or replaces someone in charge.",
  "sentence": "The deputy sheriff helped keep the town safe."
},
"mangrove": {
  "definition": "A tropical tree that grows in coastal waters.",
  "sentence": "Fish hid among the mangrove roots."
},
"enfranchise": {
  "definition": "To give someone the right to vote.",
  "sentence": "The law helped enfranchise all citizens."
},
"kiln": {
  "definition": "A special oven used for firing pottery.",
  "sentence": "The potter placed the bowl in the kiln to harden."
},
"webisode": {
  "definition": "A short episode of a show released online.",
  "sentence": "I watched a funny webisode on my phone."
},
"kangaroo": {
  "definition": "An Australian animal that hops and carries its young in a pouch.",
  "sentence": "The kangaroo bounced across the grass."
},
"Romeo": {
  "definition": "A romantic character from Shakespeare’s play.",
  "sentence": "He acted like a real Romeo with the flowers."
},
"emerge": {
  "definition": "To come into view or appear.",
  "sentence": "The butterfly will emerge from the cocoon."
},
"twitchy": {
  "definition": "Nervous or jumpy.",
  "sentence": "He got twitchy before the big test."
},
"arrogant": {
  "definition": "Having too much pride or self-importance.",
  "sentence": "The arrogant king ignored everyone’s advice."
},
"normative": {
  "definition": "Establishing a standard or rule.",
  "sentence": "Normative behavior means what’s seen as normal."
},
"homework": {
  "definition": "School assignments done at home.",
  "sentence": "I need to finish my math homework tonight."
},
"mildew": {
  "definition": "A type of fungus that grows in damp places.",
  "sentence": "The bathroom smelled musty because of mildew."
},
"pattern": {
  "definition": "A repeated design or sequence.",
  "sentence": "The shirt had a colorful zigzag pattern."
},
"coffee": {
  "definition": "A drink made from roasted coffee beans.",
  "sentence": "My parents drink coffee every morning."
},
"botch": {
  "definition": "To do something badly or mess it up.",
  "sentence": "I botched the science project by spilling glue."
},
"receptacle": {
  "definition": "A container that holds something.",
  "sentence": "Please put the trash in the receptacle."
},
"bagpipe": {
  "definition": "A wind instrument often played in Scotland.",
  "sentence": "The bagpipe made a loud and unique sound."
},
"bonfire": {
  "definition": "A large outdoor fire.",
  "sentence": "We sang songs around the bonfire at camp."
},
"abruptly": {
  "definition": "Suddenly and unexpectedly.",
  "sentence": "The car stopped abruptly at the red light."
},
"bushel": {
  "definition": "A large amount or container for measuring crops.",
  "sentence": "They picked a bushel of apples from the orchard."
},
"skedaddle": {
  "definition": "To leave quickly or run away.",
  "sentence": "We had to skedaddle when the rain started."
},
"toddler": {
  "definition": "A young child who is just learning to walk.",
  "sentence": "The toddler waddled across the floor."
},
"everglades": {
  "definition": "A marshy area in Florida known for wildlife.",
  "sentence": "We saw alligators in the Everglades."
},
"pellet": {
  "definition": "A small, round piece of something.",
  "sentence": "He fed the fish with food pellets."
},
"klutz": {
  "definition": "A person who is clumsy.",
  "sentence": "I spilled the juice again—what a klutz I am!"
},
"envoy": {
  "definition": "A person sent on a mission, usually diplomatic.",
  "sentence": "The envoy traveled to another country to make peace."
},
"postpone": {
  "definition": "To delay something to a later time.",
  "sentence": "We had to postpone the game because of rain."
},
"wafer": {
  "definition": "A thin, crisp cookie or candy.",
  "sentence": "She ate a chocolate-covered wafer."
},
"software": {
  "definition": "Programs used by a computer.",
  "sentence": "He downloaded new software to edit videos."
},
"factoid": {
  "definition": "A brief or interesting piece of information.",
  "sentence": "Here’s a fun factoid: octopuses have three hearts!"
},
"marvelous": {
  "definition": "Extremely good or wonderful.",
  "sentence": "The cake tasted absolutely marvelous."
},
"evince": {
  "definition": "To show or express clearly.",
  "sentence": "She evinced great joy after winning the race."
},
"season": {
  "definition": "One of four parts of the year, or to add flavor to food.",
  "sentence": "Winter is my favorite season. / Please season the soup with salt."
},
"horizon": {
  "definition": "Where the earth or sea meets the sky.",
  "sentence": "The sun set below the horizon."
},
"arborio": {
  "definition": "A type of rice used in risotto.",
  "sentence": "She cooked creamy risotto using arborio rice."
},
"cartoon": {
  "definition": "A drawing or animated show.",
  "sentence": "We watched a funny cartoon before bed."
},
"dough": {
  "definition": "A soft, thick mixture used to make bread or cookies.",
  "sentence": "She rolled out the cookie dough on the counter."
},
"emperor": {
  "definition": "A ruler of an empire.",
  "sentence": "The emperor wore a golden crown."
},
"utterable": {
  "definition": "Able to be spoken or expressed.",
  "sentence": "Her joy was barely utterable."
},
"leniency": {
  "definition": "Showing mercy or being gentle with punishment.",
  "sentence": "The teacher showed leniency and didn’t give homework."
},
"frivolous": {
  "definition": "Not serious or unnecessary.",
  "sentence": "Buying a third phone case was a frivolous expense."
},
"potato": {
  "definition": "A starchy vegetable often used in cooking.",
  "sentence": "I had mashed potatoes with dinner."
},
"wholehearted": {
  "definition": "Complete and sincere.",
  "sentence": "She gave a wholehearted apology."
},
"metadata": {
  "definition": "Data that describes other data.",
  "sentence": "The photo’s metadata included the date it was taken."
},
"farewell": {
  "definition": "A goodbye or parting word.",
  "sentence": "We gave her a warm farewell before she moved away."
},
"hypnotic": {
  "definition": "Soothing or trance-like.",
  "sentence": "The waves crashing had a hypnotic effect."
},
"jewel": {
  "definition": "A precious stone or gem.",
  "sentence": "She wore a necklace with a blue jewel."
},
"tangible": {
  "definition": "Something you can touch or feel.",
  "sentence": "The excitement in the room was almost tangible."
},
"nourish": {
  "definition": "To feed or help grow and stay healthy.",
  "sentence": "We nourish plants with water and sunlight."
},
"vulpine": {
  "definition": "Relating to a fox; clever or sneaky.",
  "sentence": "His vulpine smile made us suspicious."
},
"aloha": {
  "definition": "A Hawaiian greeting meaning hello or goodbye.",
  "sentence": "We said aloha as we arrived in Hawaii."
},
"entrance": {
  "definition": "A way in or to captivate.",
  "sentence": "She made a grand entrance. / The music entranced the crowd."
},
"kindergarten": {
  "definition": "A class for young children before first grade.",
  "sentence": "My little brother just started kindergarten."
},
"restaurant": {
  "definition": "A place where people pay to eat meals.",
  "sentence": "We went to a Mexican restaurant for tacos."
},
"functionary": {
  "definition": "A person who performs official duties.",
  "sentence": "The government functionary processed our paperwork."
},
"dodge": {
  "definition": "To move quickly to avoid something.",
  "sentence": "I had to dodge the flying ball."
},
"iota": {
  "definition": "A very small amount.",
  "sentence": "I don’t have an iota of doubt."
},
"gelato": {
  "definition": "An Italian-style ice cream.",
  "sentence": "We ate pistachio gelato on our trip to Rome."
},
"hankering": {
  "definition": "A strong desire or craving.",
  "sentence": "I had a hankering for some chocolate cake."
},
"esteem": {
  "definition": "Respect and admiration.",
  "sentence": "She earned the esteem of her classmates."
},
"knack": {
  "definition": "A special skill or talent.",
  "sentence": "He has a knack for solving puzzles."
},
"satisfactory": {
  "definition": "Good enough; acceptable.",
  "sentence": "Her performance was satisfactory but not amazing."
},
"barefoot": {
  "definition": "Without shoes.",
  "sentence": "We walked barefoot on the warm sand."
},
"trope": {
  "definition": "A common or overused theme or idea.",
  "sentence": "The movie used the ‘hero saves the world’ trope."
},
"knock": {
  "definition": "To hit or strike something to make a sound.",
  "sentence": "Please knock before entering the room."
},
"whittle": {
  "definition": "To carve or shape something by cutting small pieces.",
  "sentence": "He used a knife to whittle a toy boat from wood."
},
"joyful": {
  "definition": "Full of happiness.",
  "sentence": "The children were joyful on Christmas morning."
},
"genuine": {
  "definition": "Real or sincere.",
  "sentence": "She gave a genuine smile of gratitude."
},
"recluse": {
  "definition": "A person who avoids others and lives in solitude.",
  "sentence": "The old man was a recluse who lived deep in the woods."
},
"shield": {
  "definition": "Something used to protect.",
  "sentence": "The knight raised his shield to block the arrow."
},
"tiger": {
  "definition": "A large wild cat with stripes.",
  "sentence": "We saw a tiger at the zoo."
},
"romaine": {
  "definition": "A type of lettuce.",
  "sentence": "She used romaine in the Caesar salad."
},
"migraine": {
  "definition": "A severe headache often with nausea or vision issues.",
  "sentence": "Loud noises made her migraine worse."
},
"oasis": {
  "definition": "A green area in a desert with water.",
  "sentence": "The travelers rested at the desert oasis."
},
"navigator": {
  "definition": "Someone who guides a trip or journey.",
  "sentence": "The navigator helped steer the ship."
},
"humane": {
  "definition": "Kind and compassionate.",
  "sentence": "The shelter takes humane care of animals."
},
"polenta": {
  "definition": "A dish made from cornmeal.",
  "sentence": "We ate creamy polenta with mushrooms."
},
"delicacy": {
  "definition": "A rare or expensive treat.",
  "sentence": "Caviar is considered a delicacy in some places."
},
"noggin": {
  "definition": "A slang term for head.",
  "sentence": "He bumped his noggin on the door frame."
},
"background": {
  "definition": "The area behind something, or a person’s history.",
  "sentence": "The mountain was in the background of our photo."
},
"thistle": {
  "definition": "A prickly plant with purple flowers.",
  "sentence": "The field was filled with blooming thistle."
},
"punting": {
  "definition": "To kick the ball after dropping it from your hands.",
  "sentence": "He practiced punting the football across the field."
},
"crowd": {
  "definition": "A large group of people.",
  "sentence": "The crowd cheered loudly at the concert."
},
"secret": {
  "definition": "Something that is kept hidden from others.",
  "sentence": "She whispered a secret to her best friend."
},
"fumble": {
  "definition": "To drop or mishandle something awkwardly.",
  "sentence": "He made a fumble and lost the football."
},
"pond": {
  "definition": "A small body of still water.",
  "sentence": "Ducks were swimming in the quiet pond."
},
"health": {
  "definition": "The state of being free from illness or injury.",
  "sentence": "Eating vegetables is good for your health."
},
"pardon": {
  "definition": "To forgive someone for a mistake or offense.",
  "sentence": "Pardon me for stepping on your foot."
},
"shake": {
  "definition": "To move something quickly back and forth.",
  "sentence": "She gave the present a shake to guess what was inside."
},
"kiddo": {
  "definition": "A friendly term for a child.",
  "sentence": "Come on, kiddo, it's time to go."
},
"proof": {
  "definition": "Evidence that something is true.",
  "sentence": "He showed the teacher proof he did his homework."
},
"gorp": {
  "definition": "A snack mix usually made of nuts, dried fruit, and chocolate.",
  "sentence": "We packed some gorp for our hiking trip."
},
"town": {
  "definition": "A community that is larger than a village but smaller than a city.",
  "sentence": "Our town has a library and a few nice parks."
},
"bingo": {
  "definition": "A game where players match numbers on cards.",
  "sentence": "Grandma loves playing bingo on Thursday nights."
},
"clever": {
  "definition": "Smart or showing quick thinking.",
  "sentence": "That was a clever way to solve the puzzle!"
},
"inside": {
  "definition": "The inner part of something.",
  "sentence": "The kitten curled up inside the box."
},
"reply": {
  "definition": "To answer or respond to someone.",
  "sentence": "He didn't reply to her question right away."
},
"frozen": {
  "definition": "Turned into ice or very cold.",
  "sentence": "We skated on the frozen lake in winter."
},
"special": {
  "definition": "Better or more important than usual.",
  "sentence": "She wore her special dress for the party."
},
"film": {
  "definition": "A movie or recording on camera.",
  "sentence": "We watched a funny film after dinner."
},
"results": {
  "definition": "The outcome or answer of something.",
  "sentence": "She checked her test results online."
},
"soda": {
  "definition": "A sweet, fizzy drink.",
  "sentence": "He opened a cold can of soda with a pop."
},
"seal": {
  "definition": "A sea animal with flippers, or to close something tightly.",
  "sentence": "The seal balanced a ball on its nose at the zoo."
},
"twirled": {
  "definition": "Spun around quickly.",
  "sentence": "She twirled in her dress on the dance floor."
},
"admit": {
  "definition": "To say something is true or to allow entry.",
  "sentence": "He had to admit he forgot his homework."
},
"grown-ups": {
  "definition": "Adults or older people.",
  "sentence": "The kids waited for the grown-ups to start dinner."
},
"pieces": {
  "definition": "Parts of something.",
  "sentence": "The puzzle had a thousand tiny pieces."
},
"brass": {
  "definition": "A shiny yellow metal made of copper and zinc.",
  "sentence": "The trumpet is made of brass."
},
"onshore": {
  "definition": "Toward or onto the land from the water.",
  "sentence": "They paddled their kayaks onshore after sunset."
},
"stunts": {
  "definition": "Exciting or dangerous tricks.",
  "sentence": "The movie had amazing motorcycle stunts."
},
"deny": {
  "definition": "To say something isn’t true.",
  "sentence": "He didn’t deny eating the last cookie."
},
"jolly": {
  "definition": "Happy and cheerful.",
  "sentence": "Santa Claus is often described as a jolly man."
},
"powder": {
  "definition": "A dry substance made of tiny particles.",
  "sentence": "She sprinkled powder on the baby’s skin."
},
"walnut": {
  "definition": "A type of nut with a hard shell.",
  "sentence": "We added chopped walnut pieces to the brownies."
},
"sawdust": {
  "definition": "Tiny bits of wood made when cutting or sanding.",
  "sentence": "Sawdust covered the floor of the workshop."
},
"flustered": {
  "definition": "Upset or confused.",
  "sentence": "She got flustered when she forgot her lines."
},
"barber": {
  "definition": "A person who cuts hair.",
  "sentence": "The barber gave me a new haircut."
},
"chimes": {
  "definition": "Musical sounds made by bells or tubes.",
  "sentence": "Wind chimes tinkled gently outside the window."
},
"cabin": {
  "definition": "A small house, often in the woods.",
  "sentence": "We stayed in a cozy cabin during our vacation."
},
"faint": {
  "definition": "Barely noticeable or to pass out.",
  "sentence": "There was a faint smell of cookies in the air."
},
"manger": {
  "definition": "A trough for feeding animals, also part of the nativity story.",
  "sentence": "Baby Jesus was laid in a manger."
},
"peppermint": {
  "definition": "A plant with a fresh, sharp flavor often used in candy.",
  "sentence": "I love the taste of peppermint in holiday treats."
},
"broth": {
  "definition": "A liquid made by boiling meat, bones, or vegetables.",
  "sentence": "She used chicken broth for the soup."
},
"ash": {
  "definition": "The powdery remains after something burns.",
  "sentence": "The fireplace was full of gray ash."
},
"flame": {
  "definition": "The visible, hot part of a fire.",
  "sentence": "The candle's flame flickered in the dark."
},
"grits": {
  "definition": "A dish made from ground corn, popular in the southern U.S.",
  "sentence": "We had buttered grits for breakfast."
},
"cliff": {
  "definition": "A steep face of rock or earth.",
  "sentence": "The view from the cliff was breathtaking."
},
"hem": {
  "definition": "The edge of a piece of clothing, folded and sewn.",
  "sentence": "She stitched the hem of her dress."
},
"candles": {
  "definition": "Waxes with wicks that can be lit to give light.",
  "sentence": "We lit candles during the power outage."
},
"brim": {
  "definition": "The edge of a container or hat.",
  "sentence": "The glass was filled to the brim."
},
"plot": {
  "definition": "The sequence of events in a story.",
  "sentence": "The plot of the movie kept us on the edge of our seats."
},
"desk": {
  "definition": "A piece of furniture used for writing or working.",
  "sentence": "She sat at her desk to do homework."
},
"bopcat": {
  "definition": "A playful or imaginary name, possibly a toy or character.",
  "sentence": "The bopcat danced across the screen in the game."
},
"polo": {
  "definition": "A sport played on horseback using mallets and a ball.",
  "sentence": "He watched a polo match on TV."
},
"roller": {
  "definition": "A cylindrical tool used for painting or styling hair.",
  "sentence": "She used a roller to paint the wall quickly."
},
"stark": {
  "definition": "Severe or bare in appearance or outline.",
  "sentence": "The room was stark and empty."
},
"drum": {
  "definition": "A musical instrument you hit to make sound.",
  "sentence": "He played the drum in the school band."
},
"snarl": {
  "definition": "A tangle or a growl showing anger.",
  "sentence": "The dog gave a warning snarl."
},
"argue": {
  "definition": "To speak angrily to someone about something you disagree on.",
  "sentence": "They began to argue about the rules."
},
"loppers": {
  "definition": "A tool used for cutting branches.",
  "sentence": "He used loppers to trim the hedge."
},
"petal": {
  "definition": "A colorful part of a flower.",
  "sentence": "She picked up a rose petal from the ground."
},
"giant": {
  "definition": "A very large person or thing.",
  "sentence": "The giant towered over the village."
},
"sniffle": {
  "definition": "To sniff repeatedly, usually because of a cold or crying.",
  "sentence": "He had a little sniffle from the chilly air."
},
"mouth": {
  "definition": "The opening on the face used for eating and speaking.",
  "sentence": "She opened her mouth to speak."
},
"filters": {
  "definition": "Objects that remove unwanted parts from air, water, or light.",
  "sentence": "The air filters were replaced every month."
},
"cone": {
  "definition": "A shape with a circular base that narrows to a point; also a holder for ice cream.",
  "sentence": "He licked the melting ice cream cone."
},
"never": {
  "definition": "Not at any time.",
  "sentence": "I will never forget this moment."
},
"silly": {
  "definition": "Funny or lacking seriousness.",
  "sentence": "They wore silly hats to the party."
},
"Monday": {
  "definition": "The first day of the work or school week.",
  "sentence": "She always feels tired on Monday."
},
"grub": {
  "definition": "Informal word for food.",
  "sentence": "Let’s get some grub before the movie."
},
"hook": {
  "definition": "A curved tool used for catching, holding, or hanging things.",
  "sentence": "He hung his coat on the hook."
},
"number": {
  "definition": "A mathematical value used for counting or measuring.",
  "sentence": "Write your favorite number on the paper."
},
"cooking": {
  "definition": "The act of preparing food by heating it.",
  "sentence": "She enjoys cooking with fresh vegetables."
},
"amazed": {
  "definition": "Filled with wonder or surprise.",
  "sentence": "I was amazed by the magician's trick."
},
"collect": {
  "definition": "To gather things together, often as a hobby.",
  "sentence": "He likes to collect baseball cards."
},
"local": {
  "definition": "Nearby or from the surrounding area.",
  "sentence": "We buy fruits from the local market."
},
"proper": {
  "definition": "Correct or suitable for a situation.",
  "sentence": "Use proper grammar in your essay."
},
"basement": {
  "definition": "The lowest floor of a building, often underground.",
  "sentence": "They stored boxes in the basement."
},
"ripple": {
  "definition": "A small wave or series of waves on the surface of water.",
  "sentence": "She tossed a pebble and watched the ripple spread."
},
"feats": {
  "definition": "Achievements that require courage or skill.",
  "sentence": "Climbing the mountain was one of his greatest feats."
},
"plumbing": {
  "definition": "The system of pipes for water and waste in a building.",
  "sentence": "The plumber fixed the broken plumbing."
},
"stubborn": {
  "definition": "Unwilling to change one's mind or attitude.",
  "sentence": "The stubborn goat refused to move from the path."
},
"adrift": {
  "definition": "Floating without control or direction.",
  "sentence": "The boat was adrift in the middle of the lake."
},
"sweeten": {
  "definition": "To make something taste sweeter.",
  "sentence": "She added honey to sweeten her tea."
},
"neon": {
  "definition": "A very bright or glowing color.",
  "sentence": "He wore a neon green shirt to the party."
},
"beeswax": {
  "definition": "A natural wax produced by bees.",
  "sentence": "We used beeswax to make candles."
},
"social": {
  "definition": "Relating to interacting with others.",
  "sentence": "She enjoys social activities like parties."
},
"behold": {
  "definition": "To see or observe something impressive.",
  "sentence": "Behold the beauty of the sunrise!"
},
"mix": {
  "definition": "To combine two or more things together.",
  "sentence": "Mix the flour and eggs to make the batter."
},
"drool": {
  "definition": "To let saliva fall from the mouth.",
  "sentence": "The dog began to drool at the smell of food."
},
"understand": {
  "definition": "To grasp the meaning of something.",
  "sentence": "I didn’t understand the math problem at first."
},
"sound": {
  "definition": "Something that can be heard.",
  "sentence": "We heard the sound of thunder in the distance."
},
"benches": {
  "definition": "Long seats for several people.",
  "sentence": "We sat on the park benches to eat lunch."
},
"shrugged": {
  "definition": "Lifted shoulders to show uncertainty or indifference.",
  "sentence": "He shrugged when asked if he knew the answer."
},
"still": {
  "definition": "Not moving or calm.",
  "sentence": "The lake was perfectly still in the early morning."
},
"pranks": {
  "definition": "Playful tricks or jokes.",
  "sentence": "The kids played harmless pranks on April Fools' Day."
},
"smiled": {
  "definition": "Formed an expression of happiness with the mouth.",
  "sentence": "She smiled when she saw the puppy."
},
"peach": {
  "definition": "A sweet, soft fruit with fuzzy skin.",
  "sentence": "I picked a ripe peach from the tree."
},
"pie": {
  "definition": "A baked dessert with a crust and filling.",
  "sentence": "We had apple pie for dessert."
},
"size": {
  "definition": "How big or small something is.",
  "sentence": "What size shoes do you wear?"
},
"hall": {
  "definition": "A corridor or large room in a building.",
  "sentence": "The children lined up in the school hall."
},
"jangled": {
  "definition": "Made a ringing or clanging sound.",
  "sentence": "His keys jangled in his pocket."
},
"chain": {
  "definition": "A series of connected metal links.",
  "sentence": "The dog was tied to a chain in the yard."
},
"workhorse": {
  "definition": "Someone or something that works very hard.",
  "sentence": "That old truck is a real workhorse on the farm."
},
"antennas": {
  "definition": "Long, thin sensors on insects or devices for receiving signals.",
  "sentence": "The ant used its antennas to feel around."
},
"honest": {
  "definition": "Truthful and sincere.",
  "sentence": "Always try to be honest with your friends."
},
"holler": {
  "definition": "To shout or yell loudly.",
  "sentence": "He had to holler to be heard over the noise."
},
"billboard": {
  "definition": "A large outdoor sign for advertising.",
  "sentence": "We saw a giant movie ad on a billboard."
},
"chicken": {
  "definition": "A farm bird that lays eggs and provides meat.",
  "sentence": "We keep chickens in our backyard."
},
"puppets": {
  "definition": "Toys or dolls moved by hand or strings.",
  "sentence": "They performed a funny show with puppets."
},
"waited": {
  "definition": "Stayed in one place until something happened.",
  "sentence": "We waited for the bus to arrive."
},
"finish": {
  "definition": "To complete something.",
  "sentence": "She was excited to finish her book."
},
"cheer": {
  "definition": "To shout with joy or encouragement.",
  "sentence": "The fans cheer for their favorite team."
},
"twisty": {
  "definition": "Having many bends or turns.",
  "sentence": "We drove along a twisty mountain road."
},
"chips": {
  "definition": "Thin, crispy snack pieces.",
  "sentence": "I had chips with my sandwich."
},
"scoop": {
  "definition": "A tool or amount for picking something up.",
  "sentence": "He gave me a scoop of ice cream."
},
"rover": {
  "definition": "A vehicle that explores rough terrain or planets.",
  "sentence": "The Mars rover sent back pictures from space."
},
"forgive": {
  "definition": "To stop being angry at someone for something.",
  "sentence": "She learned to forgive her brother for breaking the toy."
},
"ribbon": {
  "definition": "A long, thin strip of fabric used for tying or decoration.",
  "sentence": "She tied a ribbon in her hair."
},
"shoo": {
  "definition": "A word used to make something go away.",
  "sentence": "Shoo the flies away from the food!"
},
"greedy": {
  "definition": "Wanting more than your share.",
  "sentence": "The greedy boy took all the cookies."
},
"beam": {
  "definition": "A long, strong piece of wood or metal; or a smile.",
  "sentence": "The child gave a big beam of joy."
},
"crew": {
  "definition": "A group of people working together.",
  "sentence": "The clean-up crew arrived after the parade."
},
"crate": {
  "definition": "A box used for storage or transport.",
  "sentence": "They packed the fruit into a wooden crate."
},
"hotel": {
  "definition": "A place where people stay overnight.",
  "sentence": "We stayed in a hotel by the beach."
},
"stray": {
  "definition": "An animal without a home.",
  "sentence": "They adopted a stray cat from the shelter."
}


};

export default wordList;