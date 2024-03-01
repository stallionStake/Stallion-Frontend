import UserContests from "../components/MyContests/UserContests";
import ContestPicker from "../components/ContestPicker/ContestPicker";
import {  useWriteContract } from "wagmi"; // Import useReadContract hook
import { abi } from "../components/data/fantasyFactory.json"; // Import the ABI of your smart contract

const ContestsPage = () => {
  const { data: hash, writeContract } = useWriteContract() 
  const mockContest = {
    contestName: "Mock Contest",
    points: 100,
    entryFee: 10,
    currentPrize: 1000,
    endDate: "2024-02-29",
    actions: "Actions",
  };

  const mockData = [mockContest];

  const activeContestColumns = [
    { Header: "Contest", accessor: "contestName" },
    { Header: "Points", accessor: "points" },
    { Header: "Entry Fee", accessor: "entryFee" },
    { Header: "Current Prize", accessor: "currentPrize" },
    { Header: "End Date", accessor: "endDate" },
    { Header: "", accessor: "actions" },
  ];

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }
  let activeContests;
  const currentTime = new Date(); // Get the current time
  const twoMinutesLater = new Date(currentTime.getTime() + 2 * 60000)

  return (
    <>
      <div>
          <UserContests
            label="Your Contests"
            columns={activeContestColumns}
            data={[]} // Empty array if no active contests are found
          />
         <button
          type="submit"
          className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={
            writeContract({
              address: "0xEc2638E834848717bd991BC2c5FBDd9C19EEf5Be",
              abi: abi,
              functionName: "createGame", 
              args: [
                0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d, // vault
                twoMinutesLater, // _gameStart
                1, // _nDays
                1, //_gameCost 
                10, // _maxEntries
                true, // _noLose
              ],
            })
          }
        >
          Enter Contest
        </button>
      </div>
      <div>
        <div class="container mx-auto pt-10">
            Live Contests
        </div>
        <div>
          <ContestPicker />
        </div>
      </div>
    </>
  );
};

export default ContestsPage;
