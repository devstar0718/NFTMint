/**
 * @author Alex
 * @updatedAt 12/06/2022
 * @createdAt 12/06/2022
 * @dev nft controller
 * @src controllers/nft.controller.js
 **/

const nftModel = require("../models/nfts.model")
const fs = require('fs')
const { create } = require('ipfs-http-client')

const ipfsClient = create( "http://ipfs.infura.io:5001/api/v0")


/**
 * @method post
 * @param name NFT name
 * @name ipfs IPFS url
 * 
 * @return status { status: "success" | "error", error: error }
 * 
 * @dev create meta data nft
 **/
exports.mintNFT = async (req, res, next) => {
  const tokenId = req.body.tokenId;
  const name = req.body.name;
  const ipfs = req.body.ipfs;
  
  if(tokenId === "" || tokenId === undefined || name === "" || name == undefined || ipfs === "" || ipfs === undefined){
    return res.send({ status: "error", error: "param_error" });
  }

  nftModel.getLastNft(async function(err, data){
    if(err){
      return res.send({status: "error", error: "error_code_500"})  
    }
    const lastNFT = (data.length == 0) ? -1 : data[0]?.id;
    if((lastNFT + 1) == tokenId){
      return nftModel.createNft(tokenId, name, ipfs, function(data, err) {
        if(err){
          console.log(err)
          return res.send({status: "error", error: "param_error"})          
        }
        return res.send({status: "success"})
      });
    }
    return res.send({status: "error", error: "token_id_error"})
  })
};

exports.getNftById = async (req, res, next) => {
  const id = req.params.id;
  if(id === "" || id === undefined){
    return res.send("");
  }
  nftModel.getNftsByIds(id, function(data, err) {
    if(err){
      return res.send({ status: "error", error: "internal_error" })
    }
    if(data.length === 0){
      return res.send({})
    }
    const metaData = {
      id: data[0].id,
      name: data[0].name,
      description: "This is a test NFT",
      image: data[0].ipfs,
      mintedAt: data[0].created_at
    }
    return res.send(metaData)
  })
};
