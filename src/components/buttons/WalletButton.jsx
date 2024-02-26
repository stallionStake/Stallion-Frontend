import { ConnectButton } from '@rainbow-me/rainbowkit';

const WalletButton = () => {
  // Directly return the ConnectButton component
  return (
    <div className="relative ml-3">
      <div className="">
        {/* Render ConnectButton directly */}
        <ConnectButton />
      </div>
    </div>
  );
}

export default WalletButton;
