import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api"
import { addressOf, buildAccount, publicKeyOf } from "../../config/account"
import { Chain, magicApi } from "../../config/api"

// This is you account if you do not have one
// use node run generate
const myAccount = addressOf(publicKeyOf())
console.log('My account:', myAccount)

// We will use AssetHub Paseo, but you can pass any valid
// AssetHub here
const api = magicApi('ahpas')

// 1. mint one token 

// 2. mint an nft

// 3. construct token send 

// 4. construct nft send

// 5. construct remark

// 6. build the batc

// 7. await the TX 

// 8. console log the tx
