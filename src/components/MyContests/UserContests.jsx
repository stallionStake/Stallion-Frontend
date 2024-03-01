import { useWriteContract } from "wagmi";
import { useEffect, useState } from "react";

const UserContests = ({ label, columns, data }) => {
  const { writeContract } = useWriteContract();
  const [isContestEnded, setIsContestEnded] = useState(false);

  useEffect(() => {
    // Check if the current date is after the end date of the contest
    const currentDate = new Date();
    const endedContests = data.filter(
      (contest) => new Date(contest.endDate) < currentDate
    );
    setIsContestEnded(endedContests);
  }, [data]);

  const claimPrize = async (contestId) => {
    try {
      // Call the claim function from your smart contract
      const txHash = await writeContract({
        address: "YOUR_CONTRACT_ADDRESS",
        abi: YOUR_CONTRACT_ABI,
        functionName: "claim", // Replace with your smart contract's claim function name
        args: [contestId], // Pass any required arguments here
      });
      console.log("Transaction sent:", txHash);
    } catch (error) {
      console.error("Error claiming prize:", error);
    }
  };
  <div class="container mx-auto pt-10">Live Contests</div>;

  return (
    <>
      <div class="container mx-auto py-6">
        <h2>{label}</h2>
      </div>
      <div className="container mx-auto bg-blue-900 rounded-xl shadow-md">
        <div className="max-h-[400px]">
          <table className="min-w-full divide-y divide-gray-600 table-auto">
            <thead className="bg-gray-900 rounded-xl text-mx font-medium sticky top-0">
              <tr>
                {columns.map((column) => (
                  <th key={column.accessor} className="px-4 py-2">
                    {column.Header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="min-w-full divide-y divide-gray-600 shadow-md">
              {data.length > 0 ? (
                data.map((contest, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td key={column.accessor} className="px-4">
                        {column.accessor === "actions" ? (
                          // Render claim button only if contest has ended
                          isContestEnded ? (
                            <button
                              onClick={() => claimPrize(contest.id)}
                              disabled={!contest.hasEnded} // Disable button if contest has not ended
                              className={`rounded px-2 py-1 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                                !contest.hasEnded
                                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                                  : "bg-lime-700 hover:bg-green-800"
                              }`}
                            >
                              Claim
                            </button>
                          ) : (
                            <span>Claim</span>
                          )
                        ) : (
                          <span>{contest[column.accessor]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center" colSpan={columns.length}>
                    No active contests found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserContests;
