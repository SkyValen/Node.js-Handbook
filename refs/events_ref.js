const EventEmitter = require('events');

class Logger extends EventEmitter {
    // Helistamisel saadab konsoolile sõnumi sisendväärtusega
    // Ja aeg unix-vormingus
    log (message) {
        this.emit('message', `${message} ${Date.now()}`);
    }
}

const logger = new Logger();

logger.on('message', data => {
    console.log(data);
})


logger.log('First');
logger.log('Second');
logger.log('Third');