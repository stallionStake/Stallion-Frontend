"use client";

import { useState } from "react";
import { players } from "../data/players";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Table from "../Table";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import submitLineupAbi from "../data/submitLineupAbi.json";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const PlayerPicker = () => {
  const { primaryWallet } = useDynamicContext();

  const { data: hash, isPending, writeContractAsync } = useWriteContract();
  const initialSalaryAmount = 50000;
  const [lineup, setLineup] = useState([]);
  const [counter, setCounter] = useState(0);
  const [remainingSalary, setRemainingSalary] = useState(initialSalaryAmount);
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const availablePlayersColumns = [
    { Header: "Position", accessor: "position" },
    { Header: "Name", accessor: "name" },
    { Header: "FPPG", accessor: "fppg" },
    { Header: "Salary", accessor: "salary" },
    { Header: "", accessor: "actions", iconAdd: faPlus },
  ];
  const selectedPlayersColumns = [
    { Header: "Position", accessor: "position" },
    { Header: "Name", accessor: "name" },
    { Header: "FPPG", accessor: "fppg" },
    { Header: "Salary", accessor: "salary" },
    { Header: "", accessor: "actions", iconAdd: faMinus },
  ];

  const handleAddPlayer = (playerId, playerSalary) => {
    const totalSalaryOfLineup = lineup.reduce(
      (total, player) => total + player.salary,
      0
    );
    const remainingSalaryAfterAddition = remainingSalary - playerSalary;

    if (
      counter < 5 &&
      remainingSalaryAfterAddition >= 0 &&
      totalSalaryOfLineup + playerSalary <= 50000
    ) {
      const selectedPlayer = availablePlayers.find(
        (player) => player.id === playerId
      );

      const isPlayerInLineup = lineup.some((player) => player.id === playerId);
      if (!isPlayerInLineup) {
        const updatedAvailablePlayers = availablePlayers.filter(
          (player) => player.id !== playerId
        );
        setRemainingSalary(remainingSalaryAfterAddition);
        setLineup([...lineup, selectedPlayer]);
        setCounter(counter + 1);
        setAvailablePlayers(updatedAvailablePlayers);
      } else {
        console.log("Player is already in the lineup");
      }
    }
  };

  const handleRemovePlayer = (playerId, playerSalary) => {
    const updatedLineup = lineup.filter((player) => player.id !== playerId);
    const selectedPlayer = lineup.find((player) => player.id === playerId);

    if (selectedPlayer) {
      const updatedAvailablePlayers = [
        ...availablePlayers,
        selectedPlayer,
      ].sort((a, b) => a.id - b.id);
      setLineup(updatedLineup);
      console.log(lineup);
      setCounter(counter - 1);
      setAvailablePlayers(updatedAvailablePlayers);
      setRemainingSalary(remainingSalary + playerSalary);
    }
  };

  async function submit(e) {
    e.preventDefault();

    // Extract player IDs from the lineup array
    const playerIds = lineup.map((player) => player.id);

    const resp = await writeContractAsync({
      address: "0x14bd089ed43413c3b4f5d02c02f80b6ac0885d21", // Replace with your contract address
      abi: submitLineupAbi, // The ABI of your smart contract
      functionName: "enterGame", // The name of the function you want to call
      args: [
        [playerIds.playerId],
        [playerIds.playerId],
        [playerIds.playerId],
        [playerIds.playerId],
        [playerIds.playerId],
        [playerIds.playerId], // Array of player IDs
      ], // The arguments to pass to the function
    });
    console.log(playerIds, "res", resp);
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  console.log(
    "isConfirming",
    isConfirming,
    "isConfirmed",
    isConfirmed,
    "hash",
    hash
  );

  return (
    <>
      <div className="container mx-auto">
        <div className="text-right">
          <span className="text-md text-white font-semibold">
            Players Selected:{" "}
            <span className="text-lime-600 text-xl font-bold">{counter}/5</span>
          </span>
          <span className="text-md text-white ml-4 font-semibold">
            Remaining Salary:{" "}
            <span className="text-xl text-lime-600 font-bold">
              ${remainingSalary}
            </span>
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-4 sm:grid-rows">
          {/* Table 1: Available Players */}
          <div className="container mx-auto px-2 pb-7 bg-blue-900 rounded-xl md:text-md sm:text-xsm">
            <Table
              label={"Available Players"}
              columns={availablePlayersColumns}
              data={availablePlayers} // Ensure this is the correct data structure
              onAdd={(player) => handleAddPlayer(player.id, player.salary)}
            />
          </div>

          {/* Table 2: Lineup */}
          <div className="container mx-auto px-2 pb-7 bg-blue-900 rounded-xl md:text-md sm:text-xsm">
            <Table
              label={"My Lineup"}
              columns={selectedPlayersColumns}
              data={lineup} // Ensure this is the correct data structure
              onAdd={(player) => handleRemovePlayer(player.id, player.salary)}
            />
          </div>
        </div>
        <div>
          <div class="container mx-auto flex justify-end mt-4">
            <form onSubmit={submit}>
              <button
                disabled={isPending}
                type="submit"
                className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isPending ? "Confirming..." : "Submit Lineup"}
              </button>
              {hash && <div>Transaction Hash: {hash}</div>}
              {isConfirming && <div>Waiting for confirmation...</div>}
              {isConfirmed && <div>Transaction confirmed.</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerPicker;
