"use client";

import { useState } from "react";
import { players } from "../data/players";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PickerHeader from "@/components/PlayerPicker/PickerHeader";

const PlayerPicker = () => {
  const initialSalaryAmount = 50000;
  const [lineup, setLineup] = useState([]);
  const [counter, setCounter] = useState(0);
  const [remainingSalary, setRemainingSalary] = useState(initialSalaryAmount);
  const [availablePlayers, setAvailablePlayers] = useState(players);

  const handleAddPlayer = (playerId, playerSalary) => {
    if (counter < 5) {
      const selectedPlayer = availablePlayers.find(
        (player) => player.id === playerId
      );
      const isPlayerInLineup = lineup.some((player) => player.id === playerId);
      if (!isPlayerInLineup) {
        const updatedAvailablePlayers = availablePlayers.filter(
          (player) => player.id !== playerId
        );
        setRemainingSalary(remainingSalary - playerSalary);
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
    setRemainingSalary(remainingSalary + playerSalary);
    setLineup(updatedLineup);
    setCounter(counter - 1);
  };

  return (
    <>
      <PickerHeader remainingSalary={remainingSalary} counter={counter} />
      <div className="container mx-auto">
        <div className="flex justify-between bg-blue-900 h-80 overflow-auto rounded-b-md">
          <table className="w-full divide-y divide-gray-600">
            <thead className="bg-gray-900 text-justify w-full">
              <tr>
                <th className="px-4 ">Position</th>
                <th>Name</th>
                <th>FPPG</th>
                <th>Salary</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="w-full divide-y divide-gray-900">
              {players.map((player) => (
                <tr key={player.id}>
                  <td className="px-4">{player.position}</td>
                  <td>{player.name}</td>
                  <td>{player.fppg}</td>
                  <td>{player.salary}</td>
                  <td>
                    <button
                      onClick={() => handleAddPlayer(player.id, player.salary)}
                      disabled={counter >= 5}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Lineup</h2>
          <div className="flex justify-between bg-blue-900 h-80 overflow-auto rounded-b-md">
            <table className="w-full divide-y divide-gray-600">
              <thead className="bg-gray-900 text-justify w-full">
                <tr>
                  <th className="px-4 ">Position</th>
                  <th>Name</th>
                  <th>FPPG</th>
                  <th>Salary</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="w-full divide-y divide-gray-900">
                {lineup.map((player) => (
                  <tr key={player.id}>
                    <td className="px-4">{player.position}</td>
                    <td>{player.name}</td>
                    <td>{player.fppg}</td>
                    <td>{player.salary}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleRemovePlayer(player.id, player.salary)
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerPicker;
