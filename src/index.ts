import { Manager } from '@managed-components/types'

export default async function (manager: Manager) {
  manager.addEventListener('pageview', async event => {
    const { client } = event
    const timestamp = Date.now().toString()
    client.set('timestamp', timestamp, { scope: 'page' })
    client.execute('console.log(timestamp);')
  })}