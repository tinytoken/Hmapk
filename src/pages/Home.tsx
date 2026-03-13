import { Link } from 'react-router-dom';
import { apps, categories, blogPosts } from '../data/mockData';
import { AppCard } from '../components/AppCard';
import { BlogCard } from '../components/BlogCard';
import { ChevronRight, Gamepad2, MessageCircle, Wrench, Video, BookOpen, Send } from 'lucide-react';

const iconMap: Record<string, any> = {
  Gamepad2, MessageCircle, Wrench, Video, BookOpen
};

export function Home() {
  const featuredApps = apps.filter(app => app.isFeatured);
  const latestUpdates = [...apps].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 6);
  const popularGames = apps.filter(app => app.category === 'games').slice(0, 4);
  const trendingDownloads = apps.filter(app => app.isTrending).slice(0, 6);

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Download the Best</span>
          <span className="block text-emerald-600">Android APKs & Games</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Fast, safe, and free APK downloads. Discover trending apps, popular games, and the latest updates for your Android device.
        </p>
      </section>

      {/* Featured Apps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Apps</h2>
          <Link to="/categories" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1">
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map(category => {
              const Icon = iconMap[category.icon];
              return (
                <Link 
                  key={category.id} 
                  to={`/categories?id=${category.id}`}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors group border border-gray-100"
                >
                  <div className="bg-white p-4 rounded-full shadow-sm group-hover:shadow-md transition-shadow mb-3">
                    <Icon className="w-8 h-8 text-gray-700 group-hover:text-emerald-600" />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-emerald-600 text-center">{category.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Updates & Trending */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
            </div>
            <div className="space-y-4">
              {latestUpdates.map(app => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Trending Downloads</h2>
            </div>
            <div className="space-y-4">
              {trendingDownloads.map(app => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Popular Games</h2>
            <Link to="/categories?id=games" className="text-emerald-400 font-medium hover:text-emerald-300 flex items-center gap-1">
              More games <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGames.map(app => (
              <Link key={app.id} to={`/apk/${app.id}`} className="group bg-gray-800 rounded-2xl p-4 hover:bg-gray-700 transition-colors border border-gray-700">
                <img src={app.icon} alt={app.name} className="w-full aspect-square object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                <h3 className="font-semibold text-white truncate">{app.name}</h3>
                <p className="text-sm text-gray-400 truncate">{app.developer}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest Guides & News</h2>
          <Link to="/blog" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1">
            View blog <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-700 rounded-full opacity-50 blur-2xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update!</h2>
            <p className="text-emerald-100 mb-8 text-lg">Subscribe to our newsletter to get the latest APK releases, mod updates, and Android tips directly in your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
