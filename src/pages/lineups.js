
import PlayerPicker from "../components/PlayerPicker/PlayerPicker";

const Lineups = () => {
  return (
    <div class='pb-10'>
      <div className='container mx-auto'>
        <h1 className="font-bold px-5 py-5">My Lineups</h1>
      </div>
      <div>
        <PlayerPicker />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Lineups;
