const SaveBox = () => {
  return (
    <div className="w-full col-span-1 p-6 rounded-lg bg-white shadow-sm row-span-1 flex flex-col gap-3">
      <button className="text-xl w-full h-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold cursor-pointer">
        Save Changes
      </button>
      <button className="text-xl w-full h-1/2 font-semibold py-2 px-4 rounded-md border border-gray-300 transition duration-200 hover:bg-gray-100 cursor-pointer text-gray-500">
        Cancel
      </button>
    </div>
  );
};
export default SaveBox;
