import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class WhatsAppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public boot() {
    // Register your own bindings
  }

  public async sendMessage(body) {
    const token = Env.get('TOKEN')
    const apiPhoneNumber = Env.get('API_PHONE_NUMBER')
    try {
      const response = await axios.post(
        `https://graph.facebook.com/v13.0/${apiPhoneNumber}/messages?access_token=${token}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: '5541998450936',
          type: 'text',
          text: {
            body,
          },
        }
      )
    } catch (error) {}
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
