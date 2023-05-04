import { Server } from 'socket.io'
import AdonisServer from '@ioc:Adonis/Core/Server'

class Ws {
  public io: Server
  private booted = false
  private counter = 0

  public boot() {
    /**
     * Ignore multiple calls to the boot method
     */
    if (this.booted) {
      return
    }

    this.booted = true
    this.io = new Server(AdonisServer.instance!)
  }

  public increment() {
    this.counter++;

    return this.counter;
  }
}

export default new Ws()