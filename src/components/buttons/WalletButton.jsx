import { ConnectButton } from '@rainbow-me/rainbowkit';

const WalletButton = () => {
  // Directly return the ConnectButton component
  return (
    <div className="relative ml-3">
      <div className="text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium">
        {/* Render ConnectButton directly */}
        <ConnectButton />
      </div>
    </div>
  );
}

export default WalletButton;
