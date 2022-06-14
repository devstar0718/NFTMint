import { ethers } from "ethers";
import { Contract } from '@usedapp/core/node_modules/ethers';
import { ChainId, useContractCall, 
  // useContractFunction
 } from "@usedapp/core";
import nftContractAbi from "../abi/nft.json";
import { nftContractAddress } from "../contracts"
import { useEthers } from "@usedapp/core";

import { useContractFunction } from "../contracts/test";

const nftContractInterface = new ethers.utils.Interface(nftContractAbi);
const contract = new Contract(nftContractAddress, nftContractInterface);

export function useTokenId() {
  const [tokenIds]: any = useContractCall({
    abi: nftContractInterface,
    address: nftContractAddress,
    method: "tokenIds",
    args: [],
  }) ?? [];
  return tokenIds;
}

export function useMintNft() {
    const { state, send } = useContractFunction(contract, "mint",{});
    return { state, send };
  }