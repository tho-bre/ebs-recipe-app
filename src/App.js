import React, { useState } from 'react';
import CocktailList from './components/CocktailList';
import CocktailDetail from './components/CocktailDetail';
import { cocktails } from './data/cocktails';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const filteredCocktails = cocktails.filter(cocktail => {
    const searchTerms = searchTerm.toLowerCase().split(' ');
    return searchTerms.every(term =>
      cocktail.name.toLowerCase().includes(term) ||
      cocktail.ingredients.some(ing => ing.name.toLowerCase().includes(term))
    );
  })
  .sort((a, b) => a.name.localeCompare(b.name));  

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/ebs_blanc_transparent.png" alt="EBS Logo" className="app-logo" />
      </header>
      <main className="app-main">
        {selectedCocktail ? (
          <CocktailDetail cocktail={selectedCocktail} onBack={() => setSelectedCocktail(null)} />
        ) : (
          <>
            <div className="search-container relative">
              <input
                  type="text"
                  placeholder="Rechercher un cocktail..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      margin: 'auto',
                      height: 'fit-content',
                    }}
                    className="text-gray-400 hover:text-red-600 focus:outline-none"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
              )}
            </div>
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
