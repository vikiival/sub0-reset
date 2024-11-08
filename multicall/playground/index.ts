import { Binary, TxCallData, TxFinalizedPayload } from "polkadot-api";
import { addressOf, buildAccount, publicKeyOf } from "../../config/account";
import { Chain, magicApi } from "../../config/api";
import {
  createCollection,
  makeBatch,
  makeRemark,
  mintNonFungible,
  sendNonFungibleTo,
} from "../../config/calls";
import { getNextCollectionId } from "../../config/queries"

// This is you account if you do not have one
// use node run generate
const myAccount = addressOf(publicKeyOf());
console.log("My account:", myAccount);

// We will use AssetHub Paseo, but you can pass any valid
// AssetHub here
const { api, disconnect } = magicApi("ahpas");

const collectionId = await getNextCollectionId({ api });

if (!collectionId) {
  throw new Error("No collection found");
}

// 1. create a new collection
const collection = createCollection({ api });

// 2. mint an nft
const mint = mintNonFungible({ api }, collectionId.toString());

// 3. construct nft send
const send = sendNonFungibleTo({ api }, myAccount);

// 4. construct remark
const remark = makeRemark({ api }, `_`);
// 5. build the batc
const batch = makeBatch({ api }, []);

// 7. await the TX

// 8. console log the tx
