import MobileMenuButton from "../buttons/MobileMenuButton";
import WalletButton from "../buttons/WalletButton";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <MobileMenuButton />
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <div class="text-white text-md rounded-md font-bold">
                Stallion Stake
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <Links />
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
