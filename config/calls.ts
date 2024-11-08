import { process } from "std-env"
import { ApiPromise, CHAIN, Chain, magicApi } from "./api"
import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api"
import { toMultiAddress } from "./account"

export function makeRemark({ api }: ApiPromise, memo: string): TxCallData {
	const remark = Binary.fromText(memo)
	// with `api` object construct a onchain remark 
	// the call you are looking for is in the `System` pallet
	// TODO: remove the throw statement and do return with a call like
  // `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] makeRemark')
}

// DEV: you can edit the types, function params as you want
type CreateCollectionParams = {
	address: string
}
// DEV: you need to implement the following functions
export function createCollection({ api }: ApiPromise, { address }: CreateCollectionParams): TxCallData {
	// with `api` object construct a mint call
	// the call you are looking for is in the `Assets` pallet
	// TODO: remove the throw statement and do return with a call like
  // `return api.` and the call you are looking for
	// TODO: feel free to tune it up
	const config = {
		max_supply: undefined,
		settings: 0n,
		mint_settings: {
			mint_type: {
				type: 'Issuer',
				value: undefined
			},
			start_block: undefined,
			end_block: undefined,
			default_item_settings: 0n,
			price: undefined
		}
	}
	// Address needs to be formatted as MultiAddress
	const admin = toMultiAddress(address)
	throw new Error('[UNIMPLEMENTED] createCollection')
	// also do not forget to .decodedCall :)
}

type MintAssetParams = {
	assetId: string
}
export function mintAnAsset({ api }: ApiPromise, params: MintAssetParams): TxCallData {
	const assetId = process.env.ASSET_ID
	// with `api` object construct a mint call
	// the call you are looking for is in the `Assets` pallet
	// TODO: remove the throw statement and do return with a call like
  // `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] mintAnAsset')	
}

// DEV: you can edit the types, function params as you want
type MintNonFungibleParams = {
	collectionId: string
}
export function mintNonFungible({ api }: ApiPromise, params: MintNonFungibleParams): TxCallData {
	// with `api` object construct a mint call
	// the call you are looking for is in the `NFTs` pallet
	// TODO: remove the throw statement and do return with a call like
  // `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] mintNonFungible')	
}

export function sendAssetTo({ api }: ApiPromise, recipient: string): TxCallData {
	// TODO: remove the throw statement and do return with a call like
  // `return api.` and the call you are looking for
	// DEV: this is a hint for you
	const who = toMultiAddress(recipient)
	throw new Error('[UNIMPLEMENTED] sendAssetTo')
}

export function sendNonFungibleTo({ api }: ApiPromise, recipient: string): TxCallData {
	// TODO: remove the throw statement and do return with a call like
  // `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] sendNonFungibleTo')
}

export function makeBatch({ api }: ApiPromise, data: TxCallData | TxCallData[]): TxCallData {
	throw new Error('[UNIMPLEMENTED] makeBatch')
	// with `api` object construct a batch of calls
	// which one you use it is up to you :)
	// pallet name is mentioned in readme
}

export function createProxy({ api }: ApiPromise): TxCallData {
	// with `api` object construct a call to create a proxy
	// the call you are looking for is in the `Proxy` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] createProxy')
}

type ProxyParams = {
	address: string
}
export function callAsProxy({ api }: ApiPromise, params: ProxyParams): TxCallData {
	// with `api` object construct a call as proxy
	// the call you are looking for is in the `Proxy` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] callAsProxy')
}

type CallDerivateParams = {
	index: number
}
export function callAsDerivate({ api }: ApiPromise, params: CallDerivateParams): TxCallData {
	// with `api` object construct a call as proxy
	// the call you are looking for is in the `Utility` pallet
	// TODO: remove the throw statement and do return with a call like
	// `return api.` and the call you are looking for
	throw new Error('[UNIMPLEMENTED] callAsDerivate')
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
): Promise<TxFinalizedPayload> {
	// const api = magicApi(chain)
	throw new Error('[UNIMPLEMENTED] submit')
}