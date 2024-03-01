import { useRouter } from "next/router";
import { contests } from "../data/contests";

const ContestPicker = () => {
  const router = useRouter();
  const handleEnterContest = (contestId) => {
    router.push(`/lineups/${contestId}`);
  };

  return (
    <>
      <div class="container mx-auto">
        <div class="mt-8 grid">
          <div class="-px-1 sm:px-0 -my-6 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="bg-blue-900 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-500 table-auto">
                  <thead class="bg-gray-900 sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
                      >
                        Contest
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        Entry Fee
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        Yield APY
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        Entries
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        Start Date
                      </th>
                      <th
                        scope="col"
                        class="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-900">
                    {contests.map((contest) => (
                      <tr key={contest.id}>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6">
                          {contest.name}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          {contest.entryFee}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          {contest.yield}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          {contest.entries}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          {contest.startDate}
                        </td>
                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button
                            type="button"
                            disabled={contest.status === "inactive"}
                            onClick={() => handleEnterContest(contest.id)}
                            className={`rounded px-2 py-1 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                              contest.status === "inactive"
                                ? "bg-gray-600 text-gray-400"
                                : "bg-lime-700 hover:bg-green-800"
                            }`}
                          >
                            Enter
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestPicker;
