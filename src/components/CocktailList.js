import React from 'react';
import { motion } from 'framer-motion';

const CocktailList = ({ cocktails, onSelectCocktail }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {cocktails.map(cocktail => (
      <motion.div
        key={cocktail.id}
        className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelectCocktail(cocktail)}
      >
        <div className="h-48 overflow-hidden">
          <img src={cocktail.image} alt={cocktail.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-red-600">{cocktail.name}</h2>
          <p className="text-sm text-gray-600">
            {cocktail.ingredients.map(ing => ing.name).join(', ')}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default CocktailList;