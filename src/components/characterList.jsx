import React, { useState, useEffect } from 'react';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();

    const savedCharacter = JSON.parse(localStorage.getItem('selectedCharacter'));
    if (savedCharacter) {
      setSelectedCharacter(savedCharacter);
    }
  }, []);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    localStorage.setItem('selectedCharacter', JSON.stringify(character));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Rick and Morty Characters</h1>
      {selectedCharacter && (
        <div className="card mb-4">
          <img src={selectedCharacter.image} className="card-img-top" alt={selectedCharacter.name} />
          <div className="card-body">
            <h5 className="card-title">{selectedCharacter.name}</h5>
            <p className="card-text">Species: {selectedCharacter.species}</p>
            <p className="card-text">Status: {selectedCharacter.status}</p>
          </div>
        </div>
      )}
      <div className="row">
        {characters.map(character => (
          <div key={character.id} className="col-md-4 mb-4" onClick={() => handleCharacterClick(character)}>
            <div className="card">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Species: {character.species}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;