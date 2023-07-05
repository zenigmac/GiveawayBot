// Options
const giveawayId = {
  type: 4,
  name: 'giveaway_number',
  name_localizations: {
    de: 'giveaway_nummer'
  },
  description: 'What is the giveaway number?',
  description_localizations: {
    de: 'Wie lautet die Giveaway Nummer?'
  },
  required: true,
  min_value: 1,
  max_value: 999999999,
  autocomplete: false
}

const giveawayTitle = {
  type: 3,
  name: 'title',
  name_localizations: {
    de: 'title'
  },
  description: 'Choose a title.',
  description_localizations: {
    de: 'Wähle ein Titel.'
  },
  required: true,
  min_length: 3,
  max_length: 50,
  autocomplete: true
}

const giveawayTimeframe = {
  type: 3,
  name: 'timeframe',
  name_localizations: {
    de: 'zeitfenster'
  },
  description: 'Choose a timeframe. Units: mo,wk,dy,ho,mi',
  description_localizations: {
    de: 'Wähle ein Zeitfenster. Einheiten: mo,wo,tg,st,mi'
  },
  required: true,
  min_length: 3,
  max_length: 20,
  autocomplete: false
}

const giveawayChannel = {
  type: 7,
  name: 'channel',
  name_localizations: {
    de: 'kanal'
  },
  description: 'Choose a channel.',
  description_localizations: {
    de: 'Wähle ein Kanal.'
  },
  required: true,
  channel_types: [0, 5, 10, 11, 12] // TODO: Add Forums
}

// Sub-Commands & Sub-Command-Groups
const giveawayHost = {
  type: 1,
  name: 'host',
  name_localizations: {
    de: 'hosten'
  },
  description: 'Host a giveaway...',
  description_localizations: {
    de: 'Hoste ein Giveaway...'
  },
  options: [
    giveawayTitle,
    giveawayTimeframe,
    giveawayChannel
  ]
}

const giveawayCancel = {
  type: 1,
  name: 'cancel',
  name_localizations: {
    de: 'abbrechen'
  },
  description: 'Cancel a giveaway...',
  description_localizations: {
    de: 'Brich ein Giveaway ab...'
  },
  options: [
    giveawayId
  ]
}

const giveawayUncancel = {
  type: 1,
  name: 'uncancel',
  name_localizations: {
    de: 'wiederherstellen'
  },
  description: 'Uncancel a giveaway...',
  description_localizations: {
    de: 'Stelle ein Giveaway wieder her...'
  },
  options: [
    giveawayId
  ]
}

const giveawayEnd = {
  type: 1,
  name: 'end',
  name_localizations: {
    de: 'beenden'
  },
  description: 'End a giveaway early...',
  description_localizations: {
    de: 'Beende ein Giveaway vorzeitig...'
  },
  options: [
    giveawayId
  ]
}

const giveawayUnend = {
  type: 1,
  name: 'unend',
  name_localizations: {
    de: 'fortsetzen'
  },
  description: 'Continue a giveaway...',
  description_localizations: {
    de: 'Setze ein Giveaway fort...'
  },
  options: [
    giveawayId
  ]
}

const giveawayExtend = {
  type: 1,
  name: 'extend',
  name_localizations: {
    de: 'verlängern'
  },
  description: 'Extend a giveaway...',
  description_localizations: {
    de: 'Verlängere ein Giveaway...'
  },
  options: [
    giveawayId,
    giveawayTimeframe
  ]
}

const giveawayReduce = {
  type: 1,
  name: 'reduce',
  name_localizations: {
    de: 'verkürzen'
  },
  description: 'Shorten a giveaway...',
  description_localizations: {
    de: 'Verkürze ein Giveaway...'
  },
  options: [
    giveawayId,
    giveawayTimeframe
  ]
}

const giveawayClaim = {
  type: 1,
  name: 'claim',
  name_localizations: {
    de: 'claim'
  },
  description: 'Claim a giveaway...',
  description_localizations: {
    de: 'Claim ein Giveaway...'
  },
  options: [
    giveawayId
  ]
}

const giveawayUnclaim = {
  type: 1,
  name: 'claim',
  name_localizations: {
    de: 'beanspruchen'
  },
  description: 'Unclaim a giveaway...',
  description_localizations: {
    de: 'Beanspruche ein Giveaway...'
  },
  options: [
    giveawayId
  ]
}

const giveawayReroll = {
  type: 1,
  name: 'reroll',
  name_localizations: {
    de: 'reroll'
  },
  description: 'Reroll a giveaway...',
  description_localizations: {
    de: 'Lose ein Giveaway erneut aus...'
  },
  options: [
    giveawayId
  ]
}

const giveawayUnroll = {
  type: 1,
  name: 'unroll',
  name_localizations: {
    de: 'unroll'
  },
  description: 'Unroll a giveaway...',
  description_localizations: {
    de: 'Mach eine erneute Giveawayziehung rückgängig...'
  },
  options: [
    giveawayId
  ]
}

const giveawayStatus = {
  type: 1,
  name: 'status',
  name_localizations: {
    de: 'status'
  },
  description: 'Get a giveaway status...',
  description_localizations: {
    de: 'Check den Giveaway-Status...'
  },
  options: [
    giveawayId
  ]
}

const giveawayHelp = {
  type: 1,
  name: 'help',
  name_localizations: {
    de: 'hilfe'
  },
  description: 'Get a help about Giveaways...',
  description_localizations: {
    de: 'Kriege Hilfe zu Giveaways...'
  },
  options: [
    giveawayId
  ]
}

const giveawayList = {
  type: 1,
  name: 'list',
  name_localizations: {
    de: 'liste'
  },
  description: 'Get a list of giveaways...',
  description_localizations: {
    de: 'Check alle Giveaways...'
  },
  options: [
    giveawayId
  ]
}

const giveawayDelete = {
  type: 1,
  name: 'delete',
  name_localizations: {
    de: 'löschen'
  },
  description: 'Delete a giveaway...',
  description_localizations: {
    de: 'Lösche alle Giveaways...'
  },
  options: [
    giveawayId
  ]
}

// Working on this will take a longer time.
// eslint-disable-next-line no-unused-vars
const giveawayAiHelp = {
  type: 1,
  name: 'aihelp',
  name_localizations: {
    de: 'aihilfe'
  },
  description: 'Ask an AI for help...',
  description_localizations: {
    de: 'Frag eine AI nach Hilfe...'
  },
  options: [
    giveawayId
  ]
}

// Interactions
export const giveaway = {
  name: 'giveaway',
  name_localizations: {
    de: 'giveaway'
  },
  description: 'All things Giveaways.',
  description_localizations: {
    de: 'Alles rund um Giveaways.'
  },
  options: [
    giveawayHost,
    giveawayEnd,
    giveawayUnend,
    giveawayExtend,
    giveawayReduce,
    giveawayCancel,
    giveawayUncancel,
    giveawayClaim,
    giveawayUnclaim,
    giveawayReroll,
    giveawayUnroll,
    giveawayStatus,
    giveawayHelp,
    giveawayList,
    giveawayDelete
    // TODO: Program giveawayAiHelp
  ],
  dm_permission: false,
  type: 1,
  nsfw: false
}
