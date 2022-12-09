import { Actor, HttpAgent } from "@dfinity/agent";

import { idlFactory } from "../declaration/dfinity_demo_backend.did.js";

const host = "http://localhost:8002";

const canister_ids = require("../../../../.dfx/local/canister_ids.json");

const agent = new HttpAgent({
  host: host,
  // identity: "xxxx", // If need a user's identity
});

export const actor = Actor.createActor(idlFactory, {
  canisterId: canister_ids.dfinity_demo_backend.local, // change to your canisterId
  agent,
});
