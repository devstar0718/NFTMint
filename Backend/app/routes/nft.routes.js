module.exports = app => {
const nftController = require("../controllers/nft.controller.js");

var router = require("express").Router();

const multer  = require('multer')
const nftLocation = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/')
  },
  filename: (req, file, callback) => {
    callback(null ,  Date.now()+ file.originalname)
  }
});

const nftPath = multer({ storage: nftLocation })

  router.all("/mintNft", nftPath.single('file'), nftController.mintNFT);
  router.get("/nft/:id", nftController.getNftById);
  router.get("/nft", nftController.getNftById);


  app.use('/api', router);
};
