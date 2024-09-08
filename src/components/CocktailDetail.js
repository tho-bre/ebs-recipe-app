import React from 'react';
import { motion } from 'framer-motion';

const CocktailDetail = ({ cocktail, onBack }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-2xl overflow-hidden shadow-lg"
  >
    <div className="h-64 overflow-hidden">
      <img src={cocktail.image} alt={cocktail.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-red-600">{cocktail.name}</h2>
      <p className="mb-2"><strong className="text-red-500">Glass:</strong> {cocktail.glass}</p>
      <p className="mb-2"><strong className="text-red-500">Ice:</strong> {cocktail.ice}</p>
      <p className="mb-2"><strong className="text-red-500">Technique:</strong> {cocktail.technique}</p>
      <h3 className="text-xl font-bold mt-6 mb-3 text-red-600">Ingredients:</h3>
      <ul className="list-disc list-inside mb-4">
        {cocktail.ingredients.map((ing, index) => (
          <li key={index}>{ing.name}: {ing.quantity} {ing.unit}</li>
        ))}
      </ul>
      <p className="mb-2"><strong className="text-red-500">Decoration:</strong> {cocktail.decoration}</p>
      {cocktail.optional && <p className="mb-4"><strong className="text-red-500">Optional:</strong> {cocktail.optional}</p>}
      <button 
        onClick={onBack}
        className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
      >
        Back to list
      </button>
    </div>
  </motion.div>
);

export default CocktailDetail;