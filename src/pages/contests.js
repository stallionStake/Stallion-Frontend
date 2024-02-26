import UserContests from "../components/MyContests/UserContests";
import ContestPicker from "../components/ContestPicker/ContestPicker";
import { useReadContract } from "wagmi"; // Import useReadContract hook
import { abi } from "../components/data/abi"; // Import the ABI of your smart contract

const ContestsPage = () => {
  const mockContest = {
    contestName: "Mock Contest",
    points: 100,
    entryFee: 10,
    currentPrize: 1000,
    endDate: "2024-02-29",
    actions: "Actions",
  };

  const mockData = [mockContest];

  const {
    data: activeContests,
    isLoading,
    error,
  } = useReadContract({
    address: "YOUR_CONTRACT_ADDRESS",
    abi: abi,
    functionName: "getActiveContests", // Replace 'getActiveContests' with the actual function name in your smart contract
    args: [], // If the function takes arguments, pass them here
  });

  const activeContestColumns = [
    { Header: "Contest", accessor: "contestName" },
    { Header: "Points", accessor: "points" },
    { Header: "Entry Fee", accessor: "entryFee" },
    { Header: "Current Prize", accessor: "currentPrize" },
    { Header: "End Date", accessor: "endDate" },
    { Header: "", accessor: "actions" },
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div>
        {activeContests && activeContests.length > 0 ? (
          <UserContests
            label="Your Contests"
            columns={activeContestColumns}
            data={activeContests}
          />
        ) : (
          <UserContests
            label="Your Contests"
            columns={activeContestColumns}
            data={[]} // Empty array if no active contests are found
          />
        )}
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
