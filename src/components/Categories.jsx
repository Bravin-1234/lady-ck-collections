import React from 'react';
import { categories } from '../data/products';

export default function Categories({ activeCategory, setActiveCategory }) {
  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      <h2 className="text-sm sm:text-base font-bold text-amber-300 mb-4 flex items-center space-x-2">
        <span className="h-2 w-2 rounded-full bg-pink-500"></span>
        <span>Filter by Category</span>
      </h2>

      {/* Clean Text-Only Category Filter Buttons (No Image Imports) */}
      <div className="flex space-x-3 overflow-x-auto pb-3 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                isActive
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black border-amber-300 shadow-md scale-105'
                  : 'bg-[#181b23] text-gray-300 border-[#d4af37]/30 hover:border-amber-400 hover:text-amber-300'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
