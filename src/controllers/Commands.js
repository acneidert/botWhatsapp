const Command = require('../app/Command');
const Chat = require('./Chat');


// .example
new Command({
  command: '.example',
  help: `example`,
  action: () => {},
  isGroup: true,
  permission: Chat.needBeActive,
});