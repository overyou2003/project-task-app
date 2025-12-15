const SaveBox = () => {
  return (
    <div className="w-full col-span-1 p-6 rounded-lg bg-white shadow-sm">
      <button className="text-xl w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold mb-3 cursor-pointer">
        Save Changes
      </button>
      <button className="text-xl w-full font-semibold py-2 px-4 rounded-md border border-gray-300 transition duration-200 hover:bg-gray-100 cursor-pointer text-gray-500">
        Cancel
      </button>
    </div>
  );
};
export default SaveBox;
