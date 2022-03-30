// Launch Config, there are used user-input
// mapped from the json/toml to compute the
// network config to spawn.
export interface LaunchConfig {
  settings: Settings;
  relaychain: RelayChainConfig;
  parachains: ParachainConfig[];
  types: any;
  hrmpChannels?: HrmpChannelsConfig[];
  configBasePath: string;
}

export interface Settings {
  global_volumes?: GlobalVolume[];
  bootnode?: boolean;
  bootnode_domain?: string;
  timeout: number;
  grafana?: boolean;
  telemetry?: boolean;
  prometheus?: boolean;
  jaeger_agent?: string; // agent or collator
  enable_tracing?: boolean;
  provider: string;
  polkador_introspector?: boolean;
}

export interface RelayChainConfig {
  default_command?: string;
  default_image?: string;
  default_resources?: Resources;
  chain: string;
  chain_spec_path?: string;
  chain_spec_command?: string;
  default_args?: string[];
  default_overrides?: Override[];
  nodes?: NodeConfig[];
  node_groups?: NodeGroupConfig[];
  total_node_in_groups?: number;
  genesis?: JSON | ObjectJSON;
}

export interface NodeConfig {
  name: string;
  image?: string;
  command?: string;
  commandWithArgs?: string;
  args?: string[];
  validator: boolean;
  env?: envVars[];
  bootnodes?: string[];
  overrides?: Override[];
  add_to_bootnodes?: boolean;
  resources?: Resources;
}

export interface NodeGroupConfig {
  name: string;
  image?: string;
  command?: string;
  args?: string[];
  env?: envVars[];
  overrides?: Override[];
  count: string | number;
  resources?: Resources;
}

export interface ParachainConfig {
  id: number;
  chain?: string;
  addToGenesis?: boolean;
  balance?: number;
  genesis_wasm_path?: string;
  genesis_wasm_generator?: string;
  genesis_state_path?: string;
  genesis_state_generator?: string;
  cumulus_based?: boolean;
  bootnodes?: string[];
  collator?: CollatorConfig;
  collator_groups?: CollatorGroupConfig[];
}

export interface CollatorConfig {
  image?: string;
  command?: string;
  commandWithArgs?: string;
  name?: string;
  args?: string[];
  env?: envVars[];
}

export interface CollatorGroupConfig {
  collator: CollatorConfig;
  count: number;
}

export interface HrmpChannelsConfig {
  sender: number;
  recipient: number;
  maxCapacity: number;
  maxMessageSize: number;
}

// Computed Network
// T
export interface ComputedNetwork {
  settings: Settings;
  relaychain: {
    defaultImage: string;
    defaultCommand: string;
    chain: string;
    chainSpecPath?: string;
    chainSpecCommand?: string;
    nodes: Node[];
    overrides: Override[];
    genesis?: JSON | ObjectJSON;
    defaultResources?: Resources;
  };
  parachains: Parachain[];
  types: any;
  hrmpChannels?: HrmpChannelsConfig[];
  configBasePath: string;
  seed: string;
}

export interface Node {
  name: string;
  key?: string;
  accounts?: any;
  command?: string;
  commandWithArgs?: string;
  fullCommand?: string;
  image: string;
  chain: string;
  chainSpec?: string;
  validator: boolean;
  args: string[];
  env: envVars[];
  bootnodes: string[];
  zombieRole: "temp" | "node" | "bootnode" | "collator" | "cumulus-collator";
  telemetry?: boolean;
  telemetryUrl: string;
  prometheus?: boolean;
  overrides: Override[];
  addToBootnodes?: boolean;
  resources?: Resources;
  parachainId?: number;
  jaegerUrl?: string;
}

export interface Collator {
  name: string;
  command: string;
  commandWithArgs?: string;
  image: string;
  chain?: string;
  args: string[];
  env: envVars[];
  bootnodes: string[];
  count?: number;
}

export interface Parachain {
  id: number;
  chain?: string;
  addToGenesis: boolean;
  cumulusBased: boolean;
  genesisWasmPath?: string;
  genesisWasmGenerator?: string;
  genesisStatePath?: string;
  genesisStateGenerator?: string;
  specPath?: string;
  balance?: number;
  collators: Node[];
}

export interface envVars {
  name: string;
  value: string;
}

export interface ChainSpec {
  name: string;
  id: string;
  chainType: string;
  bootNodes: string[];
  telemetryEndpoints: null;
  protocolId: string;
  properties: null;
  forkBlocks: null;
  badBlocks: null;
  consensusEngine: null;
  lightSyncState: null;
  genesis: {
    runtime: any; // this can change depending on the versions
    raw: {
      top: {
        [key: string]: string;
      };
    };
  };
}

// Utils
export interface GlobalVolume {
  name: string;
  fs_type: string;
  mount_path: string;
}

export interface fileMap {
  localFilePath: string;
  remoteFilePath: string;
  unique?: boolean;
}

export interface Override {
  local_path: string;
  remote_name: string;
}

interface ObjectJSON {
  [key: string]: ObjectJSON | number | string;
}

export interface Resources {
  resources: {
    requests?: {
      memory?: string;
      cpu?: string;
    };
    limits?: {
      memory?: string;
      cpu?: string;
    };
  };
}
