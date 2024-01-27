import React from 'react';
import './App.css';
import CharacterList from './CharacterList';
import './CharacterList.css';

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty Character Viewer</h1>
      <CharacterList />
    </div>
  );
}

export default App;
