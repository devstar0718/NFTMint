import Axios from "./instance";

export const mintNftApi = (tokenId, nftName, ipfsUrl, description, attr1, attr2) => {
    return new Promise((resolve, reject) => {
        Axios.post('/nftmint', {tokenId: tokenId, name: nftName, ipfs: ipfsUrl, description: description, attr1: attr1, attr2: attr2} )
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject({ status: 'error' })
            })
    })
}
