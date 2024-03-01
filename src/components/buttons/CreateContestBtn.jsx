"use client";

import Link from "next/link";

const CreateContestBtn = () => {
  return (
    <div class="flex items-center">
      <div>
        <Link href="/" class="text-sm font-semibold leading-6 mr-4">
          Cancel
        </Link>
      </div>
      <div class="">
        <button
          type="submit"
          className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isPending ? "Confirming..." : "Create Contest"}
        </button>
      </div>
    </div>
  );
};

export default CreateContestBtn;
