"use client";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { abi } from "../components/data/abi";
import Link from "next/link";

const CreateContestPage = () => {
  const { data: hash, isPending, writeContract } = useWriteContract();

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contestId = formData.get("contestId");

    // Pass the contract address, ABI, function name, and arguments to writeContract
    writeContract({
      address: "YOUR_CONTRACT_ADDRESS", // Replace with your contract address
      abi: abi, // The ABI of your smart contract
      functionName: "createContest", // The name of the function you want to call
      args: [contestId, formData], // The arguments to pass to the function
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <>
      <div class="py-7 flex justify-center">
        {/* Display User's Current Contests */}
        {/* You can map through user's contests and display them here */}
        <div class="py-7 px-4 mx-8 w-[400px] bg-blue-900 rounded-xl">
          <form onSubmit={submit} class="flex flex-col">
            <div class="">
              <div class="border-b border-gray-900/10 py-4">
                <h1 class="text-base font-semibold leading-7">
                  Enter Your Contest Details
                </h1>

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 0">
                  <div class="col-span-full">
                    <label
                      htmlFor="contest-name"
                      class="block text-md font-medium leading-6"
                    >
                      Contest Name
                    </label>
                    <input
                      type="text"
                      id="contest-name"
                      name="name"
                      className="text-gray-600 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      placeholder="Your contest name"
                      required
                    />
                  </div>

                  <div class="col-span-full">
                    <label
                      htmlFor="entry-fee"
                      class="block text-md font-medium leading-6"
                    >
                      Entry Fee
                    </label>
                    <input
                      type="number"
                      id="entry-fee"
                      name="entryFee"
                      className="text-gray-600 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      placeholder="Amount required to enter your contest"
                      required
                    />
                  </div>

                  <div class="col-span-full">
                    <label
                      htmlFor="entry-limit"
                      class="block text-md font-medium leading-6"
                    >
                      Entry Limit
                    </label>
                    <input
                      type="number"
                      id="entry-limit"
                      name="entryLimit"
                      className="text-gray-600 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      placeholder="Enter the limit of entries allowed"
                      required
                    />
                  </div>

                  <div class="col-span-full">
                    <label
                      htmlFor="start-date"
                      class="block text-md font-medium leading-6"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="start-date"
                      name="startDate"
                      className="text-gray-600 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      placeholder="Enter the start date of your contest"
                      required
                    />
                  </div>

                  <div class="col-span-full">
                    <label
                      htmlFor="end-date"
                      class="block text-md font-medium leading-6"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      name="endDate"
                      className="mt-1 text-gray-600 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      placeholder="Enter the end date of your contest"
                      required
                    />
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="no-loss"
                      className="block text-md font-medium leading-6"
                    >
                      Is this a No Loss Contest?
                      <div class='font-extralight text-sm py-2 pl-2'>No Loss means you will compete only for Yield and your entry fee will be claimable once the contest has ended.</div>
                    </label>
                    <select
                      id="no-loss"
                      name="noLoss"
                      className="mt-1 text-gray-600 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>
            <div class="flex justify-end place-items-center">
              <div class="">
                <Link
                  href="/"
                  class="text-sm font-semibold leading-6 mr-4 content-center"
                >
                  Cancel
                </Link>
              </div>
              <div class="">
                <button
                  disabled={isPending}
                  type="submit"
                  className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isPending ? "Confirming..." : "Create Contest"}
                </button>
                {hash && <div>Transaction Hash: {hash}</div>}
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isConfirmed && <div>Transaction confirmed.</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateContestPage;
