"use client";

const handleSubmit = (e) => {
  e.preventDefault();
  // Implement logic to handle the submission of the lineup data
  console.log("Submitting lineup data...");
};

const SubmitLineup = () => {
  return (
    <div class="container mx-auto flex justify-end">
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enter Contests
        </button>
      </form>
    </div>
  );
};

export default SubmitLineup;
