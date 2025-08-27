module.exports = {
  'help': {
    aliases: ['h'],
    description: 'Shows the list of commands or help on specified command.',
    format: 'help [command-name]'
  },
  'ping': {
    description: 'Checks connectivity with discord\'s servers.',
    format: 'ping'
  },
  'say': {
    aliases: ['repeat'],
    description: 'Repeats whatever is said.',
    format: 'say <message>'
  },
  'status':{
    aliases: ['s'],
    description: 'Change status, if status = on, the pics came with index',
    format: 'status <on> || status <off>'
  },
  'twitter':{
    aliases: ['tt'],
    description: 'Send twitter link VitorBOT',
    format: 'twitter'
  },
  'pet':{
    aliases: ['p'],
    description: 'Select one of the bonitas (pets)',
    format: 'pet || pet <number of pics>'
  },
  'douglas': {
    aliases: ['d'],
    description: 'Douglas hot pics',
    format: 'douglas || douglas <index>'
  },
  'layla': {
    aliases: ['la'],
    description: 'Layla pics',
    format: 'layla || layla <index>'
  },
  'lupi': {
    aliases: ['lu','lup'],
    description: 'lupi pics',
    format: 'lupi || lupi <index>'
  },
  'last': {
    aliases: ['l'],
    description: 'last pic sended',
    format: 'last'
  },
  'matheus': {
    aliases: ['m','ma','mat','teteus'],
    description: 'Matheus hot pics',
    format: 'matheus || matheus <index>'
  },
  'pito': {
    aliases: ['pi','pii'],
    description: 'Pito hot pics',
    format: 'pito || pito <index>'
  },
  'poppy': {
    aliases: ['po','poo','pop','poop','zelda','ze','z'],
    description: 'poppy and zelda pics',
    format: 'poppy || poppy <index>'
  },
  'tommy': {
    aliases: ['t','to','tom'],
    description: 'Tommy pics',
    format: 'tommy || tommy <index>'
  },
  'vitor': {
    aliases: ['vitro','vito','vi','v'],
    description: 'Vitor',
    format: 'vitor || vitor <index>'
  }
}