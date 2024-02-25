import { useState } from "react";
import ContestPicker from "../components/ContestPicker/ContestPicker";
import CreateContestBtn from "../components/buttons/CreateContestBtn";

const ContestsPage = () => {
  const [newContestData, setNewContestData] = useState({
    name: "",
    entryDeposit: "",
    entrantsLimit: "",
    endDate: "",
    visibility: "public", // Default visibility
  });

  const handleChange = (e) => {
    setNewContestData({
      ...newContestData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div class="py-7 flex justify-center">
        {/* Display User's Current Contests */}
        {/* You can map through user's contests and display them here */}
        <div class="py-7 px-4 mx-8 w-[648px]">
          <form class="flex flex-col">
            <div class="">
              <div class="border-b border-gray-900/10 py-4">
                <h1 class="text-base font-semibold leading-7">
                  Enter You Contest Details
                </h1>

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 0">
                  <div class="col-span-full">
                    <label
                      for="contest-name"
                      class="block text-sm font-medium leading-6"
                    >
                      Contest Name
                    </label>
                    <input
                      type="text"
                      id="contest-name"
                      name="name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      placeholder="Enter contest name"
                      value={newContestData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="col-span-full">
                    <label
                      for="entry-deposit"
                      class="block text-sm font-medium leading-6"
                    >
                      Entry Deposit
                    </label>
                    <input
                      type="number"
                      id="entry-deposit"
                      name="entryDeposit"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      placeholder="Enter entry deposit amount"
                      value={newContestData.entryDeposit}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="col-span-full">
                    <label
                      for="entrants-limit"
                      class="block text-sm font-medium leading-6"
                    >
                      Entrants Limit
                    </label>
                    <input
                      type="number"
                      id="entrants-limit"
                      name="entrantsLimit"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      placeholder="Enter entrants limit"
                      value={newContestData.entrantsLimit}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="col-span-full">
                    <label
                      for="end-date"
                      class="block text-sm font-medium leading-6"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      name="endDate"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      value={newContestData.endDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="col-span-full">
                    <label
                      for="visibility"
                      class="block text-sm font-medium leading-6"
                    >
                      Visibility
                    </label>
                    <select
                      id="visibility"
                      name="visibility"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm"
                      value={newContestData.visibility}
                      onChange={handleChange}
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <CreateContestBtn />
            </div>
          </form>
        </div>
      </div>

      <div class="py-7 flex justify-center">
        <ContestPicker />
      </div>
    </>
  );
};

export default ContestsPage;
