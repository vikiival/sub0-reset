import { ed25519 } from "@noble/curves/ed25519"
import { addressOf, publicKeyOf } from "../config/account"
import { write, read } from 'rc9'

const dotenv = read('.env')

const hasPrivateKey = !!dotenv.PRIVATE_KEY 

const privateKey = hasPrivateKey ? dotenv.PRIVATE_KEY : ed25519.utils.randomPrivateKey()
const address = addressOf(ed25519.getPublicKey(privateKey))
const hex = Buffer.from(privateKey).toString('hex');

console.log('Your Polkadot account is:', address)
console.log('Your private key is:', hex)

if (hasPrivateKey) {
  console.warn('SAVING to .env file:\n', `PRIVATE_KEY=${hex}`)
  write({ PRIVATE_KEY: hex }, {
    name: '.env',
  })  
}

const pk = addressOf(publicKeyOf(hex))

console.log('Your public key is:', pk === address ? 'OK' : 'ERROR')