const Agenda = require('../app/Agenda');

const agenda = Agenda.get();

agenda.define('get status', async (job) => {
  console.log('get status');
});



;(async function () {
  // IIFE to give access to async/await
  await agenda.start();

  await agenda.every('3 minutes', 'get status');

  // Alternatively, you could also do:
  // await agenda.every("*/3 * * * *", "get status");
})();
