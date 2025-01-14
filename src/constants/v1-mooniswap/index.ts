import { Interface } from '@ethersproject/abi'
import { ChainId } from '@uniswap/sdk'
import V1_MOONISWAP_EXCHANGE_ABI from './v1_mooniswap_exchange.json'
import V1_MOONISWAP_FACTORY_ABI from './v1_mooniswap_factory.json'

interface INetworks {
  [key: number]: string
}

const V1_MOONISWAP_FACTORY_ADDRESSES: INetworks = {
  [ChainId.MAINNET]: '0x71CD6666064C3A1354a3B4dca5fA1E2D3ee7D303',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  61: '0x6ED8CD17EE5453E17eb731a6B2004aF53eA1f26a'
}

const V1_MOONISWAP_HELPER_ADDRESSES: INetworks = {
  [ChainId.MAINNET]: '0xe5c8e363de97840d5996e1e8db8b5facda0f1e21',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  61: '0xe5c8e363de97840d5996e1e8db8b5facda0f1e21'
}

const V1_FACTORY_INTERFACE = new Interface(V1_MOONISWAP_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_MOONISWAP_EXCHANGE_ABI)

export {
  V1_FACTORY_INTERFACE,
  V1_MOONISWAP_FACTORY_ABI,
  V1_EXCHANGE_INTERFACE,
  V1_MOONISWAP_EXCHANGE_ABI,
  V1_MOONISWAP_FACTORY_ADDRESSES,
  V1_MOONISWAP_HELPER_ADDRESSES
}
