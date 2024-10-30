import { ahpas } from "@polkadot-api/descriptors";
import { createClient, TypedApi } from "polkadot-api";
import { getWsProvider } from "polkadot-api/ws-provider/node";
import { polkadotConfig } from "./substrate";

const typedApi = {
	ahpas
};

export type Chain = keyof typeof polkadotConfig;

export function magicApi<T>(chain: "ahpas") {
	const client = createClient(getWsProvider(polkadotConfig[chain].wss));
	return client.getTypedApi(typedApi[chain]);
}


export type ApiPromise = ReturnType<typeof magicApi>;