// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    // token counter
    Counters.Counter public tokenIds;

    // NFT Name
    string public constant TOKEN_NAME = "Alex Test NFT";
    // NFT Symbol
    string public constant TOKEN_SYMBOL = "Alex";

    
    // NFT toke `baseURI`
    string public baseURI;

    /**
     *  Emitted when `_tokenBaseURI` updated
     */
    event BaseURI(string bseURI);

    // http://localhost/api/nft/
    constructor(string memory BASEURI) ERC721(TOKEN_NAME, TOKEN_SYMBOL) {
        baseURI = BASEURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    /**
     *  set `baseURI`
     */
    function setBaseURI(string calldata uri) external onlyOwner {
        baseURI = uri;
        emit BaseURI(uri);
    }

    function mint() external {
        _safeMint(msg.sender, tokenIds.current());
        tokenIds.increment();
    }
}
