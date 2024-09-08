import React, { useState } from 'react';
import CocktailList from './components/CocktailList';
import CocktailDetail from './components/CocktailDetail';
import { cocktails } from './data/cocktails';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const filteredCocktails = cocktails.filter(cocktail => 
    cocktail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cocktail.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-red-50 min-h-screen">
      <header className="bg-red-600 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold">Cocktail Recipes</h1>
      </header>
      <main className="p-4 max-w-6xl mx-auto">
        {selectedCocktail ? (
          <CocktailDetail cocktail={selectedCocktail} onBack={() => setSelectedCocktail(null)} />
        ) : (
          <>
            <input
              type="text"
              placeholder="Search cocktails or ingredients..."
              className="w-full p-3 mb-6 border-2 border-red-300 rounded-full focus:outline-none focus:border-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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