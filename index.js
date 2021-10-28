require('dotenv').config();

const { initializeWpp } = require("./src/app/initializeWpp");
const log = require("log-beautify");

const Whatsapp = require("./src/config/Whatsapp");
const LVL = require("./src/config/logLevels");
const LOG_LVL = process.env.WHATS_IP || 'DEBUG';

log.setLevel(LVL[LOG_LVL] || LVL.DEBUG);

require('dotenv').config();

async function main() {
    log.debug(`[index][main]\t Initializaing`)
    await Whatsapp.token;
    initializeWpp();

    log.debug(`[index][main]\t Initializaing Commands`)
    require('./src/controllers/Commands');

    log.debug(`[index][main]\t Initializaing Agenda`)
    require('./src/agenda/index');
}

main().then(() => {
    log.info(`[BOT] => 🚀 Inicializado`)
}).catch((e) => {console.error(e)});