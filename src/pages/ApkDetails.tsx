import { useParams, Link } from 'react-router-dom';
import { apps } from '../data/mockData';
import { AppCard } from '../components/AppCard';
import { Star, Download, ShieldCheck, Smartphone, HardDrive, Calendar, ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';

export function ApkDetails() {
  const { id } = useParams<{ id: string }>();
  const app = apps.find(a => a.id === id);
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'install' | 'faq'>('description');

  if (!app) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">App Not Found</h1>
        <p className="text-gray-500 mb-8">The APK you are looking for does not exist or has been removed.</p>
        <Link to="/" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors">
          Go Back Home
        </Link>
      </div>
    );
  }

  const relatedApps = apps.filter(a => a.category === app.category && a.id !== app.id).slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-emerald-600">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to={`/categories?id=${app.category}`} className="hover:text-emerald-600 capitalize">{app.category}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 font-medium truncate">{app.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* App Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <img src={app.icon} alt={app.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-md" referrerPolicy="no-referrer" />
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{app.name}</h1>
                <p className="text-emerald-600 font-medium mb-4">{app.developer}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg font-medium">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> {app.rating}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                    <Download className="w-4 h-4" /> {app.downloads}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg">
                    <HardDrive className="w-4 h-4" /> {app.size}
                  </span>
                  <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg font-medium">
                    <ShieldCheck className="w-4 h-4" /> Trusted
                  </span>
                </div>

                <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-200">
                  <Download className="w-5 h-5" />
                  Download APK
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center sm:text-left">
                  Version {app.version} • Updated on {app.updatedAt}
                </p>
              </div>
            </div>

            {/* Screenshots */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Screenshots</h2>
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x scrollbar-hide">
                {app.screenshots.map((src, index) => (
                  <img 
                    key={index} 
                    src={src} 
                    alt={`${app.name} screenshot ${index + 1}`} 
                    className="h-64 sm:h-80 w-auto rounded-xl snap-center object-cover border border-gray-200"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>

            {/* Tabs Content */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 'description' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('features')}
                  className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 'features' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                >
                  Features
                </button>
                <button 
                  onClick={() => setActiveTab('install')}
                  className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 'install' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                >
                  How to Install
                </button>
                <button 
                  onClick={() => setActiveTab('faq')}
                  className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === 'faq' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                >
                  FAQ
                </button>
              </div>

              <div className="p-6 sm:p-8">
                {activeTab === 'description' && (
                  <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="whitespace-pre-line leading-relaxed">{app.description}</p>
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <ul className="space-y-3">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <div className="mt-1 bg-emerald-100 p-1 rounded-full text-emerald-600">
                          <ChevronRight className="w-3 h-3" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'install' && (
                  <div className="space-y-6 text-gray-600">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Download the APK</h4>
                        <p>Click the "Download APK" button above to save the file to your device.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Enable Unknown Sources</h4>
                        <p>Go to Settings &gt; Security &gt; Unknown Sources and toggle it on. This allows you to install apps from outside the Play Store.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Install the App</h4>
                        <p>Open your file manager, locate the downloaded APK file, tap on it, and select "Install".</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'faq' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Is it safe to download {app.name} APK from HMAPK.xyz?</h4>
                      <p className="text-gray-600">Yes, all APK files on our website are 100% safe, original, and verified before publishing. We do not modify the files in any way.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Do I need to root my device?</h4>
                      <p className="text-gray-600">No, you do not need a rooted device to install and use this application.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Why is the app not installing?</h4>
                      <p className="text-gray-600">Ensure you have enough storage space and that you have enabled "Unknown Sources" in your device settings. Also, check if the app is compatible with your Android version ({app.androidVersion}).</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* App Info Widget */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-emerald-600" /> App Information
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-500 flex items-center gap-2"><Smartphone className="w-4 h-4" /> Requires Android</span>
                  <span className="font-medium text-gray-900">{app.androidVersion}</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-500 flex items-center gap-2"><HardDrive className="w-4 h-4" /> App Size</span>
                  <span className="font-medium text-gray-900">{app.size}</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-gray-500 flex items-center gap-2"><Calendar className="w-4 h-4" /> Last Updated</span>
                  <span className="font-medium text-gray-900">{app.updatedAt}</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span className="text-gray-500 flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Signature</span>
                  <span className="font-medium text-emerald-600">Verified Safe</span>
                </li>
              </ul>
            </div>

            {/* Related Apps Widget */}
            {relatedApps.length > 0 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Apps</h3>
                <div className="space-y-4">
                  {relatedApps.map(related => (
                    <AppCard key={related.id} app={related} />
                  ))}
                </div>
              </div>
            )}

            {/* Ad Placeholder */}
            <div className="bg-gray-100 rounded-3xl p-6 border border-gray-200 flex flex-col items-center justify-center min-h-[300px] text-gray-400">
              <span className="text-sm font-medium uppercase tracking-widest mb-2">Advertisement</span>
              <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                300x250 Ad Space
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
