import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import React from 'react';

export function BlogCard({ post, key }: { post: any; key?: React.Key }) {
  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={post.image} alt={post.title} referrerPolicy="no-referrer" />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-emerald-600 flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </p>
          <Link to={`/blog/${post.id}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-colors">{post.title}</p>
            <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.excerpt}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <Link to={`/blog/${post.id}`} className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1 text-sm">
            Read full article <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
