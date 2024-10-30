import { ed25519 } from "@noble/curves/ed25519"
import { getPolkadotSigner, PolkadotSigner } from "polkadot-api/signer"

export function buildAccount(magicString: string): PolkadotSigner {
	const seed = magicString;
	const signer = getPolkadotSigner(
		ed25519.getPublicKey(seed),
		"Ed25519",
		(input) => ed25519.sign(input, seed),
	);
	return signer;
}

function getPrivateKey() {
  return ''
}

export function publicKeyOf(seed?: string) {
  const privateKey: string = seed || getPrivateKey()
  return ed25519.getPublicKey(privateKey)
}