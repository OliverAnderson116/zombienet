Roadmap Zombienet v2

## Infra
- Chaos testing, add examples and explore possibilities in `native` and `podman` provider
- Add `docker` provider
- Add `nomad` provider
- Create [helm chart](https://helm.sh/docs/topics/charts/) to allow other use zombienet in k8s
- Auth system to not use k8s users
- Create GitHub Action and publish in NPM marketplace (Completed)
- Rename `@paritytech/zombienet` npm package to `zombienet`. Keep all zombienet modules under `@zombienet/*` org

## Internal teams
- Add more teams (wip)

## UI
- Create UI to create `.zndls` and `network` files.
- Improve VSCode extension (grammar/snippets/syntax highlighting/file validations) ([repo](https://github.com/paritytech/zombienet-vscode-extension))
- Create UI app (desktop) to run zombienet without the need of terminal.

## Registry
- Create decorators registry and allow override by paras (wip)
- Explore how to get info from paras.

## Functional tasks
- Add subxt integration, allow to compile/run on the fly
- Move parser to pest (wip)
- Detach phases and use JSON to communicate instead of `paths`
- Add relative values assertions (for metrics/scripts)
- Allow to define nodes that are not started in the launching phase and can be started by the test-runner
- Allow to define `race` assertions
- Rust integration -> Create multiples libs (crates)
- Explore backchannel use case
- Add support to run test agains a running network (wip)
- Add more CLI subcommands
- Add js/subxt snippets ready to use in assertions (e.g transfers)
- Add XCM support in built-in assertions
- Add `ink! smart contract` support
- Add support to start from a live network (fork-off) [check subalfred]
- Create "default configuration" - (if `zombieconfig.json` exists in same dir with zombienet then the config applied in it will override the default configuration of zombienet.  E.G if user wants to have as default `native` instead of `k8s` he can add  to default the entry `{ default: 'native' }`.)