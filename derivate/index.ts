import { blake2b as blake256 } from "@noble/hashes/blake2b"
import { addressOf, publicKeyOf } from "../config/account"
import { Binary } from "polkadot-api"

const hex = (d: number) => `0x` + Number(d).toString(16).padStart(2, '0')

export function derive(publicKey: Uint8Array, index: number) {
  const construct: Uint8Array = new Uint8Array([
    ...Binary.fromText('modlpy/utilisuba').asBytes(),
    ...publicKey,
    ...Binary.fromHex(`${hex(index)}00`).asBytes() // it needs to have lentgh of 16-bits (2 bytes)
  ])
  
  const hash = blake256(construct, {
    dkLen: 32
  })
  
  return addressOf(hash)
}

const publicKey = publicKeyOf()
const derivation = derive(publicKey, 1)
console.log('Derivation:', derivation)
