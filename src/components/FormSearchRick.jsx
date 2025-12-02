import React from "react";

const FormSearchRick = ({ allRicks, setRicks }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent refresh

    if (searchValue === "") {
      setRicks(allRicks);
      return;
    }

    const filtered = allRicks.filter((rick) => {
      return rick.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setRicks(filtered);
  };

  return (
    <div className="flex justify-center my-5">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded w-80"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FormSearchRick;
