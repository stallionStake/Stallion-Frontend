"use client";

const handleSubmit = (e) => {
  e.preventDefault();
  // Implement logic to handle the submission of the lineup data
  console.log("Submitting lineup data...");
};

const SubmitLineup = () => {
  return (
    <div class="container mx-7 flex justify-start">
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="border text-gray-300 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"
        >
          Enter Contest
        </button>
      </form>
    </div>
  );
};

export default SubmitLineup;
