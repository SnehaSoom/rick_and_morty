import React, { useState, useEffect } from "react";
import axios from "axios";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        setCharacters(response.data.results);
      } catch (error) {
        //console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilteredName(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filteredName.toLowerCase())
  );

  return (
    <div>
      <input
        className="filter"
        type="text"
        placeholder="Filter by name"
        value={filteredName}
        onChange={handleFilterChange}
      />
      <div className="character-list">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
