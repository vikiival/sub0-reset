import { blake2b as blake256 } from "@noble/hashes/blake2b"
import { addressOf, publicKeyOf } from "../config/account"
import { Binary } from "polkadot-api"

const address = publicKeyOf()

console.log('address:', address)
const index = 1

const hex = (d: number) => `0x` + Number(d).toString(16).padStart(2, '0')

const construct: Uint8Array = new Uint8Array([
  ...Binary.fromText('modlpy/utilisuba').asBytes(),
  ...address,
  ...Binary.fromHex(`${hex(index)}00`).asBytes() // it needs to have lentgh of 16-bits (2 bytes)
])

const hash = blake256(construct, {
  dkLen: 32
})

const derivation = addressOf(hash)

console.log('derivation:', derivation)
