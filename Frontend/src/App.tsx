import { ChakraProvider, useDisclosure, Stack, Input, Button, Box, useToast  } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Body from "./components/Body";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";

import UploadImage from "./image/upload.png";

import { useState, useEffect } from "react"
import Loading from "./components/Loading";
import { useEthers } from "@usedapp/core";

import { create as ipfsHttpClient } from "ipfs-http-client";

import { useTokenId, useMintNft } from "./hooks";

import { mintNftApi } from "./api/api";

const client = ipfsHttpClient({url: "https://ipfs.infura.io:5001/api/v0"});
let ipfsUrl = ""

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [ nftImg, setNftImg ] = useState("");
  const [ nftName, setNftName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ attr1, setAttr1 ] = useState("");
  const [ attr2, setAttr2 ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const { account } = useEthers();

  const tokenId = useTokenId();
  const { state: nftState, send: mintNft}  = useMintNft();

  useEffect(() => {
    if(nftState?.status === "Success"){
      uploadMetaData();
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Mint success
          </Box>
        ),
      })
    }
  }, [nftState])

  const uploadMetaData = async () => {
    const { status } =  await mintNftApi(parseInt(tokenId), nftName, ipfsUrl, description, attr1, attr2);
    if(status !== "success"){
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Error: API error
          </Box>
        ),
      })
    }
  }

  const onFileUpload =async (e:any) => {
    try{
      setNftImg(URL.createObjectURL(e.target.files[0]));
      setLoading(true)
      try{
        const added = await client.add(e.target.files[0], {
            progress: (prog) => {
                console.log(`recieved: ${prog}`)
            }
        })
        setLoading(false)
        ipfsUrl = `https://ipfs.infura.io/ipfs/${added.path}`
        console.log("upload image to ipfs success", ipfsUrl, new Date())
      }catch(e){
        setLoading(false)
      }
    }catch(e:any){
      setLoading(false)
    }
  }

  const mintClick = async () => {
    if(account === "" || account===undefined){
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Please connect wallet
          </Box>
        ),
      })
    }
    if(!nftImg){
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Error: NFT Image
          </Box>
        ),
      })
    }
    if(!nftName){
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Error: NFT Name
          </Box>
        ),
      })
    }
    if(ipfsUrl === ""){
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Error: IPFS error
          </Box>
        ),
      })
    }
    if(description === ""){
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Error: Description error
          </Box>
        ),
      })
    }
    if(attr1 === ""){
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Error: Attr1 error
          </Box>
        ),
      })
    }
    if(attr2 === ""){
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500'>
            Error: Attr2 error
          </Box>
        ),
      })
    }
    mintNft()
  }

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Header>
          <ConnectButton handleOpenModal={onOpen} />
        </Header>
        <Body>
          <Stack spacing={3}>
            <Input placeholder='NFT Name' size='md' color={"white"} value={nftName} onChange={(e:any)=>{ setNftName(e.target.value) }}/>
            <Input placeholder='Description' size='md' color={"white"} value={description} onChange={(e:any)=>{ setDescription(e.target.value) }}/>
            <Input placeholder='Attr1' size='md' color={"white"} value={attr1} onChange={(e:any)=>{ setAttr1(e.target.value) }}/>
            <Input placeholder='Attr2' size='md' color={"white"} value={attr2} onChange={(e:any)=>{ setAttr2(e.target.value) }}/>
            <Box
              bg="white"
              top="0"
              height="300"
              width="100%"
              borderWidth="1px"
              borderStyle="solid"
              rounded="sm"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundImage={nftImg !== ""? String(nftImg) : UploadImage}
            >
              <Input
                type="file"
                opacity="0"
                aria-hidden="true"
                accept="image/*"
                size='md'
                width="100%"
                height="100%"
                position="relative"
                top="0"
                left="0"
                onChange={onFileUpload}
              />
            </Box>
            <Button colorScheme='blue' onClick={mintClick}>MINT</Button>
          </Stack>
        </Body>        
        <AccountModal isOpen={isOpen} onClose={onClose} />
        { loading === true ? <Loading/> : null }
      </Layout>
    </ChakraProvider>
  );
}

export default App;
