const PickerHeader = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-black flex p-2 px-4 justify-between rounded-t-md">
        <div>
          <div className="text-sm">Players Selected:</div>
          <div className="text-lg font-bold">
          </div>
        </div>
        <div>
          <div className="text-sm">Remaining Salary</div>
          <div className="text-lg text-lime-600 font-bold">$50,000</div>
        </div>
      </div>
    </div>
  );
};

export default PickerHeader;
