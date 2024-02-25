import Link from "next/link";
import ContestPicker from "../components/ContestPicker/ContestPicker";

const Lobby = () => {
  return (
    <div>
      <div class="container mx-auto pt-10">
        <Link href="/contests" className="hover:text-lime-600">
          Create Contest
        </Link>
      </div>
      <div>
        <ContestPicker />
      </div>
    </div>
  );
};

export default Lobby;
