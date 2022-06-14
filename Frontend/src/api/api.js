import Axios from "./instance";

export const mintNftApi = (tokenId, nftName, ipfsUrl) => {
    return new Promise((resolve, reject) => {
        Axios.post('/mintNft', {tokenId: tokenId, name: nftName, ipfs: ipfsUrl} )
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject({ status: 'error' })
            })
    })
}
