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
  name: 'Franck',
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
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/home',
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
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com/',
    },
    {
      id: '5',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://twitch.tv/',
    },
    {
      id: '6',
      name: 'News',
      icon: 'file-text',
      link: 'https://news.google.com',
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'code',
  secondListIcon: 'settings',

  // Links
  lists: {
    firstList: [
      {
        name: 'ArchWiki',
        link: 'https://wiki.archlinux.org/',
      },
      {
        name: 'i3 docs',
        link: 'https://i3wm.org/docs/userguide.html',
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
        name: 'Wikipedia',
        link: 'https://www.wikipedia.org/',
      },
      {
        name: 'DeepL',
        link: 'https://www.deepl.com/translator',
      }
    ],
  },
};
