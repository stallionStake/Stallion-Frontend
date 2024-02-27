"use client";

import { contests } from "../../components/data/contests";
// Adjust the path as necessary
import { useRouter } from "next/router";
import PlayerPicker from "../../components/PlayerPicker/PlayerPicker";
import SubmitLineupBtn from "../../components/buttons/SubmitLineupBtn";

const LineupsByContestPage = () => {
  const router = useRouter();
  const { contestId } = router.query;

  // Find the contest name based on the contestId
  const contest = contests.find(
    (contest) => contest.id === parseInt(contestId)
  );

  return (
    <div className="container mx-auto">
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Lineups for {contest ? contest.name : "Unknown Contest"}
        </h1>
        {contest ? (
          <PlayerPicker contestId={parseInt(contestId)} />
        ) : (
          <p className="text-xl">
            No lineup available for this contest. Please select a valid contest.
          </p>
        )}
      </div>
      <div class="my-7">
        <SubmitLineupBtn playerSelection={[2, 3, 4]} />
      </div>
    </div>
  );
};

export default LineupsByContestPage;
