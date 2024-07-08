import { Account, RpcProvider } from "starknet";

const STARKNET_ADDRESS = "";
const STARKNET_PRIVATE_KEY = "";
const STARKNET_NODE_URL =
  "https://starknet-sepolia.infura.io/v3/46a5dd9727bf48d4a132672d3f376146";

const provider = new RpcProvider({
  nodeUrl: STARKNET_NODE_URL,
});
const account = new Account(provider, STARKNET_ADDRESS, STARKNET_PRIVATE_KEY);

async function send() {
  // send vote
  const call = {
    contractAddress:
      "0x2b63a8a92b7c67484ab99c4307c7db41b15b9a3c33359cd2b2459fd7f543a9c",
    entrypoint: "authenticate_vote",
    calldata: [
      "1673574720949217613523731526078583074125104169354419312493948252089065926537",
      "3511805485627965286787688241083794034717005231051309625870238556869232475247",
      "1",
      "0",
      "1",
      "1",
      "0",
      "5",
      "0",
      "3511805485627965286787688241083794034717005231051309625870238556869232475247",
      "10",
      "0",
      "0",
      "0",
    ],
  };

  const tx = await account.execute(call);

  console.log("tx");
}

send();
