import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, polygon, optimism, arbitrum, base, zora, arbitrumSepolia
} from 'wagmi/chains';
import RootLayout from './layout'; // Adjust the import path to where your RootLayout is defined

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: '7ea10cff09780c34661f941d9de75ff4',
  chains: [mainnet, polygon, optimism, arbitrum, base, zora, arbitrumSepolia ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;