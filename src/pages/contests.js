import UserContests from "../components/MyContests/UserContests";
import ContestPicker from "../components/ContestPicker/ContestPicker";
import { contests } from "../components/data/contests";

const ContestsPage = () => {
  // Modify the contests data to include a button for active contests and a disabled button for inactive contests
  const modifiedContests = contests.map((contest) => {
    return {
      ...contest,
      status:
        contest.status === "active" ? (
          <button className="bg-lime-700 hover:bg-green-800 text-sm font-semibold px-2 py-1 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Claim
          </button>
        ) : (
          <button
            disabled
            className="bg-gray-600 text-gray-400 text-sm font-semibold px-2 py-1 rounded shadow-sm cursor-not-allowed"
          >
            Claim
          </button>
        ),
    };
  });

  const activeContestColumns = [
    { Header: "Contest", accessor: "name" },
    { Header: "Entry Fee", accessor: "entryFee" },
    { Header: "Yield", accessor: "yield" },
    { Header: "Entries", accessor: "entries" },
    { Header: "Start Date", accessor: "startDate" },
    { Header: "Status", accessor: "status" },
  ];

  return (
    <>
      <div>
        <UserContests
          label="Your Contests"
          columns={activeContestColumns}
          data={modifiedContests} // Pass the modified contests data here
        />
      </div>
      <div>
        <div className="container mx-auto pt-10">Live Contests</div>
        <div>
          <ContestPicker />
        </div>
      </div>
    </>
  );
};

export default ContestsPage;
