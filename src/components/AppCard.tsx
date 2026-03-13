import { Link } from 'react-router-dom';
import { AppData } from '../data/mockData';
import { Star, Download } from 'lucide-react';
import React from 'react';

export function AppCard({ app, key }: { app: AppData; key?: React.Key }) {
  return (
    <Link to={`/apk/${app.id}`} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center gap-4">
      <img 
        src={app.icon} 
        alt={`${app.name} icon`} 
        className="w-16 h-16 rounded-xl object-cover group-hover:scale-105 transition-transform"
        referrerPolicy="no-referrer"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate group-hover:text-emerald-600 transition-colors">
          {app.name}
        </h3>
        <p className="text-sm text-gray-500 truncate">{app.developer}</p>
        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {app.rating}
          </span>
          <span className="flex items-center gap-1">
            <Download className="w-3 h-3" />
            {app.downloads}
          </span>
          <span className="bg-gray-100 px-2 py-0.5 rounded-full text-[10px] font-medium text-gray-600">
            {app.size}
          </span>
        </div>
      </div>
    </Link>
  );
}
