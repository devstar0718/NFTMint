/**
 * @author Alex
 * @updatedAt 12/06/2022
 * @createdAt 12/06/2022
 * @dev nft controller
 * @src controllers/nft.controller.js
 **/

const nftModel = require("../models/nfts.model")

/**
 * @method post
 * @param name NFT name
 * @name ipfs IPFS url
 * 
 * @return status { status: "success" | "error", error: error }
 * 
 * @dev create meta data nft
 **/
exports.nftmint = async (req, res, next) => {
  const tokenId = req.body.tokenId;
  const name = req.body.name;
  const ipfs = req.body.ipfs;
  const description = req.body.description;
  const attr1 = req.body.attr1;
  const attr2 = req.body.attr2;
  
  if(tokenId === "" || tokenId === undefined 
    || name === "" || name == undefined 
    || ipfs === "" || ipfs === undefined
    || description === "" || description === undefined
    || attr1 === "" || attr1 === undefined
    || attr2 === "" || attr2 === undefined
  ){
    return res.send({ status: "error", error: "param_error" });
  }

  return nftModel.createNft(tokenId, name, ipfs, description, attr1, attr2, function(data, err) {
    if(err){
      console.log(err)
      return res.send({status: "error", error: "param_error"})          
    }
    return res.send({status: "success"})
  });
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
      description: data[0].description,
      attributes: [
        {trait_type:"attr1","value":data[0].attr1},
        {trait_type:"attr2","value":data[0].attr2}
      ],
      image: data[0].ipfs,
      mintedAt: data[0].created_at
    }
    return res.send(metaData)
  })
};

exports.getNftAll = async (req, res, next) => {
  nftModel.getNftAll(function(data, err) {
    if(err){
      return res.send({ status: "error", error: "internal_error" })
    }
    if(data.length === 0){
      return res.send([])
    }
    let metaDataArray = [];
    data.map((item)=> {
      const metaData = {
        id: item.id,
        name: item.name,
        description: item.description,
        attributes: [
          {trait_type:"attr1","value":item.attr1},
          {trait_type:"attr2","value":item.attr2}
        ],
        image: item.ipfs,
        mintedAt: item.created_at
      }
      metaDataArray.push(metaData)
    })
    return res.json(metaDataArray)
  })
};
