import PickerHeader from "../../components/PlayerPicker/PickerHeader";
import PlayerPicker from "../../components/PlayerPicker/PlayerPicker";

const Lineups = () => {
  return (
    <div>
      <div>
        <h1 class="font-bold px-5 py-5">My Lineups</h1>
      </div>
      <PickerHeader />
      <PlayerPicker />
    </div>
  );
};

export default Lineups;
