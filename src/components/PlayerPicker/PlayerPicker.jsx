"use client";

import { useState } from "react";
import { players } from "../data/players";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import EnterContestButton from "@/components/buttons/EnterContestButton";
import Table from '../Table';


const PlayerPicker = () => {
  const initialSalaryAmount = 50000;
  const [lineup, setLineup] = useState([]);
  const [counter, setCounter] = useState(0);
  const [remainingSalary, setRemainingSalary] = useState(initialSalaryAmount);
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const availablePlayersColumns = [
    { Header: 'Position', accessor: 'position' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'FPPG', accessor: 'fppg' },
    { Header: 'Salary', accessor: 'salary' },
    { Header: '', accessor: 'actions', iconAdd: faPlus },
  ];
  const selectedPlayersColumns = [
    { Header: 'Position', accessor: 'position' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'FPPG', accessor: 'fppg' },
    { Header: 'Salary', accessor: 'salary' },
    { Header: '', accessor: 'actions', iconAdd: faMinus },
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

    setRemainingSalary(remainingSalary + playerSalary);
    setLineup(updatedLineup);
    setCounter(counter - 1);

    if (selectedPlayer) {
      setAvailablePlayers([...availablePlayers, selectedPlayer]);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="text-right">
          <span className="text-lg text-white">Players Selected: <span className="text-lime-600 text-xl font-bold">{counter}/5</span></span>
          <span className="text-lg text-white ml-4">Remaining Salary: <span className="text-xl text-lime-600 font-bold">${remainingSalary}</span></span>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Table 1: Available Players */}
          <div className="container mx-auto px-4 bg-blue-900 rounded-xl">
            <Table
              label={"Available Players"}
              columns={availablePlayersColumns}
              data={availablePlayers} // Ensure this is the correct data structure
              onAdd={(player) => handleAddPlayer(player.id, player.salary)}
            />
          </div>

          {/* Table 2: Lineup */}
          <div className="container mx-auto px-4 bg-blue-900 rounded-xl">
              <Table
              label={"My Lineup"}
              columns={selectedPlayersColumns}
              data={lineup} // Ensure this is the correct data structure
              onAdd={(player) => handleRemovePlayer(player.id, player.salary)}
            />
          </div>
        </div>
        <EnterContestButton />
      </div>
    </>
  );
};

export default PlayerPicker;
