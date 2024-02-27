import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

const WalletButton = () => {
  // Directly return the ConnectButton component
  return (
    <div className="relative ml-3">
      <div className="">
        {/* Render ConnectButton directly */}
        {/* <ConnectButton /> */}
        <DynamicWidget />
      </div>
    </div>
  );
};

export default WalletButton;
