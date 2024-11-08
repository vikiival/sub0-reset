import { process } from "std-env"
import { ApiPromise, CHAIN, Chain, magicApi } from "./api"
import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api"

export function makeRemark(api: ApiPromise, memo: string) { //: TxCallData {
	const remark = Binary.fromText(memo)
	// with `api` object construct a onchain remark 
	// the call you are looking for is in the `System` pallet
	throw new Error('[UNIMPLEMENTED] makeRemark')
	return void 0
}

export function mintAnAsset(api: ApiPromise) { //: TxCallData {
	const assetId = process.env.ASSET_ID
	// with `api` object construct a mint call
	// the call you are looking for is in the `Assets` pallet
	throw new Error('[UNIMPLEMENTED] mintAnAsset')
	return void 0
}

export function mintNonFungible(api: ApiPromise) { //: TxCallData {
	const collectionId = process.env.COLLECTION_ID
	// with `api` object construct a mint call
	// the call you are looking for is in the `NFTs` pallet
	throw new Error('[UNIMPLEMENTED] mintNonFungible')
	return void 0
}

export function sendAssetTo(api: ApiPromise, recipient: string) { //: TxCallData {
	throw new Error('[UNIMPLEMENTED] sendAssetTo')
}

export function sendNonFungibleTo(api: ApiPromise, recipient: string) { //: TxCallData {
	throw new Error('[UNIMPLEMENTED] sendNonFungibleTo')
}

export function makeBatch(api: ApiPromise, data: TxCallData | TxCallData[]) { //: TxCallData {
	throw new Error('[UNIMPLEMENTED] makeBatch')
	// with `api` object construct a batch of calls
	// which one you use it is up to you :)
	// pallet name is mentioned in readme
}

// 1. check if data is an array or not
// if yes build a batchAll
// if no build a single call
// to sign a call you need signer
// return call.signAndSubmit(signer);
// DEV: how you gonna pass the api it's up to you
export function submit<T>(
	data: TxCallData | TxCallData[],
	chain: Chain = CHAIN,
) { //: Promise<TxFinalizedPayload> {
	// const api = magicApi(chain)
}