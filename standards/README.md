## Pallets as the standard interface

My friend Joe made a collection during the NFT craze in 2021 and he found out that the metadata are stored on centralized S3 storage. Dev is gone and data from the S3 is not accessible anymore. Luckily he has backups. 

**Q how would you help him?**

## Chain of thought

What I need to do? 

As an EVM developer I have a work

**1. Observe the smart contract**

If the dev at least verified the contract I can see the metadata URI and check the implementation.

If not I am hoping that source code is stored somewhere. 

Otherwise it would be just trial and error.

**2. Check if and how metadata update is implemented**

[Depends on implementation](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#ERC721-_setTokenURI-uint256-string-) token metadata is done via `concat(baseUri, '/', tokenId)`

`_setTokenURI(uint256 tokenId, string _tokenURI)`

`_setBaseURI(string baseURI_)`

and can be updated via `setBaseUri` function.

Some NFTs has a specific function for updating metadata.

**3. Decide on the strategy**

So we will need to pin directory on IPFS with images, 
Then we need to take images, construct new metadata and upload it to IPFS.

Need to update the contract with new metadata URI.

## How so do you have metadaata for NFTs on this Polkadot thing?

yes we do.
There is currently a stardard pallet called `nfts` that allows us to update

- collection metadata
- token metadata

Base URI implementation is missing but clever devs also figured it out.

Why is this important?


## The task

Your task is to write a code that will change the metadata of the NFT in Viki's collection

Your script has to contain:
1. Read and validate a JSON metadata
2. Create a collection on nfts pallet
3. Set metadata, max supply and permission to mint publicly for 0.1 PAS
4. Write a code to mint a token


### I feel like I need more

Find a way how would you dynamically setmetadata for external users on the nfts pallet.

