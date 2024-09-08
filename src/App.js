import React, { useState } from 'react';
import CocktailList from './components/CocktailList';
import CocktailDetail from './components/CocktailDetail';
import { cocktails } from './data/cocktails';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const filteredCocktails = cocktails.filter(cocktail => 
    cocktail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cocktail.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Recette de cocktails EBS</h1>
      </header>
      <main className="app-main">
        {selectedCocktail ? (
          <CocktailDetail cocktail={selectedCocktail} onBack={() => setSelectedCocktail(null)} />
        ) : (
          <>
            <input
              type="text"
              placeholder="Rechercher un cocktail..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <CocktailList 
              cocktails={filteredCocktails} 
              onSelectCocktail={setSelectedCocktail} 
            />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
