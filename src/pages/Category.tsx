import { useSearchParams } from 'react-router-dom';
import { apps, categories } from '../data/mockData';
import { AppCard } from '../components/AppCard';
import { useState } from 'react';

export function Category() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategoryId = searchParams.get('id') || 'all';
  
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = apps.filter(app => {
    const matchesCategory = activeCategoryId === 'all' || app.category === activeCategoryId;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.developer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {activeCategoryId === 'all' ? 'All Apps & Games' : categories.find(c => c.id === activeCategoryId)?.name}
        </h1>
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Filter apps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide">
        <button
          onClick={() => setSearchParams({})}
          className={`px-4 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-colors ${
            activeCategoryId === 'all' 
              ? 'bg-emerald-600 text-white' 
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSearchParams({ id: category.id })}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-colors ${
              activeCategoryId === category.id 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* App Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
          <p className="text-gray-500 text-lg">No apps found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
