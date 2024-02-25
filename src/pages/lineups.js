import PlayerPicker from "../components/PlayerPicker/PlayerPicker";

const Lineups = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold px-5 py-5">My Lineups</h1>
      </div>
      <div>
        <PlayerPicker />
      </div>
    </div>
  );
};

export default Lineups;
