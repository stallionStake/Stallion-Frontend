import PlayerPicker from "@/components/PlayerPicker/PlayerPicker";
import EnterContestButton from "@/components/buttons/EnterContestButton";

const Lineups = () => {
  return (
    <div>
      <div>
        <h1 class="font-bold px-5 py-5">My Lineups</h1>
      </div>
      <PlayerPicker />
      <EnterContestButton />
    </div>
  );
};

export default Lineups;
