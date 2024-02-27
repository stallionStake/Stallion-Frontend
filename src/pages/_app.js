import RootLayout from './layout'; // Adjust the import path to where your RootLayout is defined

import {
  DynamicContextProvider,
  DynamicWidget,
} from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';
import {
  createConfig,
  WagmiProvider,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { sepolia, baseSepolia, arbitrumSepolia
} from 'viem/chains';

const config = createConfig({
  multiInjectedProviderDiscovery: false,
  chains: [baseSepolia, sepolia, arbitrumSepolia ],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [baseSepolia.id]: http(),
    [sepolia.id]: http(),
    [arbitrumSepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: 'afba7d29-1c60-45b9-a097-86f594a96d05',
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
           
            
          </DynamicWagmiConnector>
      </QueryClientProvider>
      </WagmiProvider>
      </DynamicContextProvider>
  );
}

export default MyApp;