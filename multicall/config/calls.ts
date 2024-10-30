import { Chain, magicApi } from "./api"
import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api"


// 1. check if data is an array or not
// if yes build a batchAll
// if no build a single call
// to sign a call you need signer
// return call.signAndSubmit(signer);
// DEV: how you gonna pass the api it's up to you
export function submit<T>(
  chain: Chain,
	data: TxCallData | TxCallData[],
) { //: Promise<TxFinalizedPayload> {
	// const api = magicApi(chain)
}