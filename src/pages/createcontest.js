"use client";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import Link from "next/link";
import { useState } from "react";
import fantasyGameAbi from "../components/data/fantasyGameAbi.json";
import {useDynamicContext } from '@dynamic-labs/sdk-react-core'

const CreateContestPage = () => {
    const { primaryWallet } = useDynamicContext();
  const { data: hash, isPending, writeContractAsync } = useWriteContract();
  const [contestId, setContestId] = useState(undefined);
  const [entryFee, setEntryFee] = useState(undefined);
   const [entryLimit, setEntryLimit] = useState(undefined);
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [vaultAddress, setvaultAddress] = useState(undefined);
  const [noLoss, setNoLoss] = useState(true);

  async function submit(e) {
    e.preventDefault();
    const differenceInMilliseconds = new Date(endDate).getTime() - new Date(startDate).getTime()
    const days = Math.round
      (differenceInMilliseconds / (1000 * 3600 * 24));
    console.log(new Date(startDate).getTime() / 1000, days, entryFee, entryLimit, noLoss);

    const resp = await writeContractAsync({
      address: "0x129B09324E119d5c4E772cb2e3dddf7AFb8c5853", // Replace with your contract address
      abi: fantasyGameAbi, // The ABI of your smart contract
      functionName: "createGame", // The name of the function you want to call
      args: ['0x9E9c7E0862E7DE18A41D9Af8b472F5A888191C8f', new Date(startDate).getTime() / 1000, days, entryFee, entryLimit, noLoss], // The arguments to pass to the function
      //connector: primaryWallet.connector
    });
    console.log(entryFee, 'res', resp);

  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  console.log('isConfirming', isConfirming, 'isConfirmed', isConfirmed, 'hash', hash)

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
                      onChange={(e) => setContestId(e.target.value)}
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
                      onChange={(e) => setEntryFee(e.target.value)}
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
                      onChange={(e) => setEntryLimit(e.target.value)}
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
                      onChange={(e) => setStartDate(e.target.value)}
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
                      onChange={(e) => setEndDate(e.target.value)}
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
                      onChange={(e) => setNoLoss(e.target.value)}
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
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
