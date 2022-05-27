import {
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  GameOne,
  GameTwo,
  GameThree,
  GameFour,
  GameFive,
  GameSix,
  GameSeven,
  GameEight,
  GameNine,
  AboutPic,
  AboutPicTwo,
} from "./ImageData";

import { BattleOne, BattleTwo, BattleThree } from "./MulitipleImageData";

export const GameData = [
  {
    image: ImageOne,
    title: "Resident evil Village",
    description:
      " Players control Ethan Winters, who searches for his kidnapped daughter in a village filled with mutant creatures.",
    genres: ["horror", "advendture", "firsperson"],
    type: "landing",
  },
  {
    image: ImageTwo,
    title: "Horizon zero dawn",
    description:
      "xplore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon. ",
    genres: ["action", "adventure", "Single player"],
    cost: "P 1,995.55",
    type: "landing",
  },
  {
    image: ImageThree,
    title: "Cyber punk 2077",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. ",
    genres: ["action", "open world", "adventure"],
    cost: "P 1,500.00",
    type: "landing",
  },
  {
    image: ImageFour,
    title: "Borderlands 3",
    description:
      " By Hirun Cryer published December 02, 2020. The game's 120Hz mode is also put to the test. (Image credit: Gearbox) Borderlands 3 has received the next-gen comparison treatment",
    genres: ["shooting", "action", "co-op"],
    cost: "P 1,200.50",
    type: "landing",
  },
  {
    image: ImageFive,
    title: "Monster Hunter Worlds 3",
    description:
      " Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand.",
    genres: ["adventure", "role-play", "Multiplayer"],
    cost: "P 2,100.25",
    type: "landing",
  },
  {
    image: GameOne,
    title: "god of war",
    description:
      "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment.",
    publisher: "sone interactive entertainment",
    genre: ["adventure", "action", "singleplayer"],
    cost: "P 1,500.75",
    type: "featured",
  },
  {
    image: GameTwo,
    title: "shadow of the tomb raider",
    description:
      "Shadow of the Tomb Raider is a 2018 action-adventure video game developed by Eidos-Montréal and published by Square Enix's European subsidiary.",
    publisher: "square enix",
    genre: ["adventure", "action", "singleplayer"],
    cost: "P 2,000.50",
    type: "featured",
  },
  {
    image: GameThree,
    title: "nba 2k21",
    description:
      "NBA 2K21 is a 2020 basketball simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA).",
    publisher: "2k sports",
    genre: ["sports", "multiplayer"],
    cost: "P 1,200.55",
    type: "featured",
  },
  {
    image: GameFour,
    title: "red dead 2",
    description:
      "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang.",
    publisher: "rockstar games",
    genre: ["open world", "adventure", "action", "shooting"],
    cost: "P 1,500.50",
    type: "featured",
  },
  {
    image: GameFive,
    title: "dying light 2",
    description:
      "Dying Light 2 Stay Human is a 2022 action role-playing game developed and published by Techland. The sequel to Dying Light",
    publisher: "techland",
    genre: ["open world", "zombies", "co-op"],
    cost: "P 2,900.00",
    type: "featured",
  },
  {
    image: "https://www.youtube.com/embed/P9fK77eE7fs",
    title: "Battlefield 4",
    description:
      "Battlefield 4 is a 2013 first-person shooter video game developed by DICE and published by Electronic Arts.",
    publisher: " Electronic Arts",
    minipictures: [BattleOne, BattleTwo, BattleThree],
    genre: ["FPS", "single player", "action"],
    cost: "P 1,500.25",
    type: "new release",
  },
  {
    image: "https://www.youtube.com/embed/AKXiKBnzpBQ",
    title: "Elden Ring",
    description:
      "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game was directed by Hidetaka Miyazaki and made in collaboration with fantasy novelist George R. R. Martin",
    publisher: "Namco Bandai Games America Inc.",
    minipictures: [BattleOne, BattleTwo, BattleThree],
    genre: ["RPG", "online", "PVP", "Action"],
    cost: "P 1,999.95",
    type: "new release",
  },
  {
    image: "https://www.youtube.com/embed/kyBbYndoyTE",
    title: "BACK 4 BLOOD",
    description:
      "Back 4 Blood is a 2021 first-person shooter game developed by Turtle Rock Studios and published by Warner Bros. Interactive Entertainment.",
    publisher: " Warner Bros. Interactive Entertainment",
    minipictures: [BattleOne, BattleTwo, BattleThree],
    genre: ["zombie", "Online", "Co-op"],
    cost: "P 2,500.00",
    type: "new release",
  },
  {
    image: "https://www.youtube.com/embed/2MD4gTitmzw",
    title: "Dying Light 2",
    description:
      "Dying Light 2 Stay Human is a 2022 open world survival horror game developed and published by Techland.",
    publisher: "Techland",
    minipictures: [BattleOne, BattleTwo, BattleThree],
    genre: ["zombie", "action", "open world"],
    cost: "P 2,999.95",
    type: "new release",
  },
  {
    image: "https://www.youtube.com/embed/tCI396HyhbQ",
    title: "Death Stranding",
    description:
      "Death Stranding is an action game developed by Kojima Productions. It is the first game from director Hideo Kojima and Kojima Productions after their split from Konami in 2015.",
    publisher: "Sony Interactive Entertainment",
    minipictures: [BattleOne, BattleTwo, BattleThree],
    genre: ["shooter", "adventure", "open world", "survival"],
    cost: "P 1,899.00",
    type: "new release",
  },
  {
    image: GameSix,
    title: "Resident Evil 4",
    description:
      "Resident Evil 4 is a survival horror third-person shooter game developed by Capcom Production Studio 4 and published by Capcom.",
    publisher: "Capcom",
    genre: ["zombie", "survival", "action"],
    discount: "-50%",
    cost: "P 500.00",
    discountPrice: "P 250.00",
    type: "best seller",
  },
  {
    image: GameSeven,
    title: "Tomb Raider",
    description:
      "Tomb Raider is a 2013 action-adventure video game developed by Crystal Dynamics and published by Square Enix's European subsidiary.",
    publisher: " Square Enix",
    genre: ["action", "adventure", "RPG"],
    discount: "-20%",
    cost: "P 825.55",
    discountPrice: "P 645.55",
    type: "best seller",
  },
  {
    image: GameEight,
    title: "The Witcher 3: Wild Hunt",
    description:
      "The Witcher 3: Wild Hunt is an action role-playing video game developed by Polish developer CD Projekt Red, and first published in 2015.",
    publisher: "Warner Bros. Interactive Entertainment",
    genre: ["open world", "adventure", "fantasy", "action"],
    discount: "-75%",
    cost: "P 875.25",
    discountPrice: "P 325.50",
    type: "best seller",
  },
  {
    image: GameNine,
    title: "Batman: Arkham Knight",
    description:
      "Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.",
    publisher: " Warner Bros. Interactive Entertainment",
    genre: ["open world", "action", "RPG"],
    discount: "-45%",
    cost: "P 750.00",
    discountPrice: "P 450.00",
    type: "best seller",
  },
  {
    image: GameFive,
    title: "",
    description: "",
    publisher: "",
    genre: [],
    cost: "",
    type: "",
  },
  {
    bgColor: "#303841",
    image: AboutPic,
    title: "about our Services",
    description: `In the fast changing globalized and a technology-driven business
    world, Retail industry over last few decades has witnessed a sea
    change. World’s largest retail giant of the present times
    Walmart is operating worldwide by establishing hypermarkets in
    various countries by taking the help of sophisticated means of
    communication as well as information systems technology.`,
    type: "aboutpage",
  },
  {
    bgColor: "#2322221",
    image: AboutPicTwo,
    title: "about community",
    description: `In the broadest sense, a gaming community is an online community
     that is centered on interaction through game. A computer game, in this context, 
     will mean something that one uses primarily as for a hobby, a diversion from 
     real life, and is a medium through which one plays.`,
    type: "aboutpage",
  },
];
