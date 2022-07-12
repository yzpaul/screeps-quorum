'use strict'

const PACING = 1000

class MetaPixelGen extends kernel.process {
  getPriority () {
    return PRIORITIES_MAINTENANCE //low priority
  }

  main () {
    Logger.log('called main on pixel generation', LOG_INFO, 'kernel')
    if(Game.cpu.bucket == 10000) {
        Game.cpu.generatePixel();
    }
  }
}

module.exports = MetaPixelGen
