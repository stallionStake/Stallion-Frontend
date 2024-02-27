import Link from "next/link";
import ContestPicker from "../components/ContestPicker/ContestPicker";

const Lobby = () => {
  return (
    <div>
      <div class="container mx-auto pt-10">
        <Link
          href="/createcontest"
          className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
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
