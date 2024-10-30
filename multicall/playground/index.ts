import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api"
import { buildAccount } from "../config/account"
import { Chain, magicApi } from "../config/api"


function getNextCollectionId()  {
  const api = magicApi("ahpas");
  return api.query.Nfts.NextCollectionId.getValue();
}

console.log(await getNextCollectionId());

const api = magicApi("ahpas");


// TODO: Implement the following functions
export function mint(chain: Chain) {
	const api = magicApi(chain);
  // api.tx.nfts.set_metadata(1, "ipfs://");
	return api.tx.Nfts.set_collection_metadata({
    collection: 1,
    data: Binary.fromText("ipfs://")
})
}
// TODO: implement
export function buildBatch(chain: Chain, calls: TxCallData[]) {
	const api = magicApi(chain);
	return api.tx.Utility.force_batch({ calls });
}

type PrivateKey = string;
export function submit<T>(
	who: PrivateKey,
	chain: Chain,
	tx: TxCallData | TxCallData[],
): Promise<TxFinalizedPayload> {
	// const api = magicApi(chain)
	const signer = buildAccount(who);
	const batch = buildBatch(chain, Array.isArray(tx) ? tx : [tx]);
	return batch.signAndSubmit(signer);
}


