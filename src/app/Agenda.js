require('dotenv').config();

const AgendaDB = require('agenda');
const log = require('log-beautify');

class Agenda {
  constructor() {
    if (!Agenda.instance) {
      log.debug(`[Agenda]\t Initializaing`);
      this.__agenda = new AgendaDB({ db: { address: process.env.DATABASE } });
      Agenda.instance = this;
    }
    return Agenda.instance;
  }

  get() {
      return this.__agenda;
  }
}

const instance = new Agenda();
Object.freeze(instance);

module.exports = instance;


// await agenda.every("1 hour", "send status", { token });
