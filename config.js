// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Skye',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep,',

  // Weather
  weatherKey: '35fc04f8c39211de09f8e08ed1784118',
  weatherIcons: 'Nord', // 'OneDark', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '45.181',
  defaultLongitude: '5.734',

  // Autochange
  autoChangeTheme: false,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Bluesky',
      icon: 'twitter',
      link: 'https://bsky.app/',
    },
    {
      id: '2',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/feed/subscriptions',
    },
    {
      id: '3',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '4',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.proton.me/',
    },
    {
      id: '5',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.proton.me/',
    },
    {
      id: '6',
      name: 'Drive',
      icon: 'hard-drive',
      link: 'https://drive.proton.me/',
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'globe',
  secondListIcon: 'info',

  // Links
  lists: {
    firstList: [
      {
        name: 'Twitch',
        link: 'https://twitch.tv/',
      },
      {
        name: 'CurseForge',
        link: 'https://www.curseforge.com/minecraft/mc-mods/ibe-editor',
      },
      {
        name: 'Modrinth',
        link: 'https://modrinth.com/mod/ibe-editor',
      }
    ],
    secondList: [
      {
        name: 'News',
        link: 'https://news.google.com',
      },
      {
        name: 'Wikipedia',
        link: 'https://www.wikipedia.org/',
      },
      {
        name: 'DeepL',
        link: 'https://www.deepl.com/translator',
      }
    ]
  }
};
