// FilterRickAndMorty.jsx
const FilterRickAndMorty = ({ allRicks, setRicks }) => {
  const uniqueSpecies = [
    ...new Set(
      allRicks.map((rick) => {
        return rick.species;
      })
    ),
  ];

  const handleSelect = (e) => {
    const valueSpecies = e.target.value;

    if (valueSpecies === "ALL") {
      setRicks(allRicks);
      return;
    }

    const filtered = allRicks.filter((rick) => {
      return rick.species === valueSpecies;
    });
    setRicks(filtered);
  };

  return (
    <select onChange={handleSelect}>
      <option value="ALL">All Species</option>
      {uniqueSpecies.map((species, i) => (
        <option key={i} value={species}>
          {species}
        </option>
      ))}
    </select>
  );
};

export default FilterRickAndMorty;
