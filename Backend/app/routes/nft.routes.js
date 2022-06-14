module.exports = app => {
const nftController = require("../controllers/nft.controller.js");

var router = require("express").Router();

  router.post("/nftmint", nftController.nftmint);
  router.get("/nftmint", nftController.getNftAll);
  router.get("/nftmint/:id", nftController.getNftById);


  app.use('', router);
};
