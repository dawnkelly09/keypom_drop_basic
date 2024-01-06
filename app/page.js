/ Each of the two methods to create this drop will have their own unique set of imports

// Imports used in the Keypom SDK method:
const { initKeypom, createDrop, getEnv, formatLinkdropUrl } = require("@keypom/core");
const { UnencryptedFileSystemKeyStore } = require("@near-js/keystores-node");
const { connect, Near } = require("@near-js/wallet-account");
const path = require("path");
const homedir = require("os").homedir();

// Imports used in the NEAR-API-JS method:
const { parseNearAmount } = require("@near-js/utils");
const { KeyPair } = require("@near-js/crypto")
const { Near } = require("@near-js/wallet-account");
const { Account } = require("@near-js/accounts");
const { UnencryptedFileSystemKeyStore } = require("@near-js/keystores-node");
const path = require("path");
const homedir = require("os").homedir();


async function simpleDropKeypom(){
// STEP 1: Initiate a NEAR connection.
  const network = "testnet"
  const CREDENTIALS_DIR = ".near-credentials"
  const credentialsPath = path.join(homedir, CREDENTIALS_DIR)
  const YOUR_ACCOUNT = "keypom-docs-demo.testnet"

  // NEAR-API-JS 

    // Create a Keystore, which stores your access keys used to sign transactions
  let keyStore = new UnencryptedFileSystemKeyStore(credentialsPath)

    // Define a NEAR configuration using the Keystore
  let nearCongif = {
    networkId: network,
    keyStore: keyStore,
    nodeUrl: `https://rpc.${network}.near.org`,
    walletUrl: `https://wallet.${network}.near.org`,
    helperUrl: `https://helper.${network}.near.org`,
    explorerUrl: `https://explorer.${network}.near.org`,
  }
    // Use the configuration to initialize a connection to NEAR
  let near = new Near(nearConfig)
  const fundingAccount = await near.account(YOUR_ACCOUNT)

// STEP 2: Create a set of access keys 
  //Keypom SDK

  // check for NEAR connection and init if does not exist
  await initKeypom({
    near,
    network
  })

  // SDK error checks that must all pass to create drop
  const {keys} = await createDrop({
    account: fundingAccount, 
    numKeys: 1,
    depositPerUseNEAR: "1",
  })
  pubKeys = keys.publicKeys

// STEP 3: Create the drop.

// STEP 4: Create linkdrops
}

simpleDropKeypom()





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-2xl'>Let's drop some keys with Keypom!</h1>

    </main>
  )
}
