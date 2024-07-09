import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let mock: MockAdapter | null = null

export const activateMockEmailServer = () => {
  mock = new MockAdapter(axios, { delayResponse: 1000 })
  mock.onPost('/email').reply(200, { message: 'Successfully subscribed' })
  console.log('Mock email server activated')
}

export const deactivateMockEmailServer = () => {
  if (mock) {
    mock.restore()
    mock = null
    console.log('Mock email server deactivated')
  }
}
