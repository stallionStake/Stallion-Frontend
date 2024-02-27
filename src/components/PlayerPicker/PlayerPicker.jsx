"use client";

import { useEffect, useState } from "react";
import { players } from "../data/players";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Table from "../Table";
import SubmitLineup from "../buttons/SubmitLineupBtn";

const PlayerPicker = () => {
  const initialSalaryAmount = 50000;
  const [lineup, setLineup] = useState([]);
  const [lineupForSubmission, setLineupForSubmissions] = useState([]);
  useEffect(() => {
    const lineforSubmision = lineup.map(player => player.id)
    setLineupForSubmissions(lineforSubmision)
  }, [lineup]);
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
      setCounter(counter - 1);
      setAvailablePlayers(updatedAvailablePlayers);
      setRemainingSalary(remainingSalary + playerSalary);
    }
  };

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
          <div class="my-7">
            <SubmitLineupBtn playerSelection={lineupForSubmission} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerPicker;
