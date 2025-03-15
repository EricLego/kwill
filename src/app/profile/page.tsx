import Link from 'next/link';

export default function ProfilePage() {
  // Mock data for user entries
  const userEntries = [
    {
      id: 1,
      content: "I decided to take a chance today and apply for that job I thought was out of my league.",
      isPublic: true,
      likes: 15,
      date: "Yesterday"
    },
    {
      id: 2,
      content: "Feeling anxious about my presentation tomorrow. Need to prepare more but I keep procrastinating.",
      isPublic: false,
      likes: 0,
      date: "3 days ago"
    },
    {
      id: 3,
      content: "Finally finished that book I've been reading for months. The ending was worth the wait.",
      isPublic: true,
      likes: 8,
      date: "1 week ago"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 animation-enter px-4">
      <div className="flex justify-between items-center mb-12">
        <Link 
          href="/" 
          className="text-jade-600 hover:text-jade-700 dark:text-jade-400 dark:hover:text-jade-300 
                   transition-all duration-300 flex items-center group text-lg"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 mr-2 transition-transform duration-300 group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-sand-50">Your Profile</h1>
        <Link 
          href="/journal" 
          className="text-jade-600 hover:text-jade-700 dark:text-jade-400 dark:hover:text-jade-300 
                   transition-all duration-300 flex items-center group text-lg"
        >
          <span>New Entry</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>

      <div className="card mb-12 hover:shadow-lg transition-all duration-300 bg-white/90 dark:bg-gray-800/90">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
          <div className="w-24 h-24 bg-jade-100 dark:bg-jade-900 rounded-3xl flex items-center justify-center 
                         text-jade-700 dark:text-jade-300 text-4xl font-bold shadow-medium">
            A
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-sand-50 mb-2">Anonymous User</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl">Member since March 2025</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="bg-sand-100 dark:bg-gray-700 px-5 py-3 rounded-xl shadow-soft">
            <span className="font-semibold text-xl text-gray-800 dark:text-sand-100">{userEntries.length}</span> 
            <span className="text-lg text-gray-600 dark:text-gray-300"> entries</span>
          </div>
          <div className="bg-sand-100 dark:bg-gray-700 px-5 py-3 rounded-xl shadow-soft">
            <span className="font-semibold text-xl text-gray-800 dark:text-sand-100">{userEntries.filter(e => e.isPublic).length}</span> 
            <span className="text-lg text-gray-600 dark:text-gray-300"> public</span>
          </div>
          <div className="bg-sand-100 dark:bg-gray-700 px-5 py-3 rounded-xl shadow-soft">
            <span className="font-semibold text-xl text-gray-800 dark:text-sand-100">{userEntries.reduce((sum, entry) => sum + entry.likes, 0)}</span> 
            <span className="text-lg text-gray-600 dark:text-gray-300"> likes received</span>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-sand-50">Your Journal Entries</h2>
      
      <div className="space-y-10">
        {userEntries.map((entry, index) => (
          <div 
            key={entry.id} 
            className="card animation-slide hover:shadow-lg bg-white/90 dark:bg-gray-800/90"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <p className="text-xl mb-8 leading-relaxed">{entry.content}</p>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-500 dark:text-gray-400">{entry.date}</span>
                <span className={`px-4 py-2 rounded-xl text-base font-medium shadow-soft ${
                  entry.isPublic 
                    ? 'bg-jade-100 text-jade-800 dark:bg-jade-900 dark:text-jade-200' 
                    : 'bg-sand-100 text-sand-800 dark:bg-gray-700 dark:text-sand-200'
                }`}>
                  {entry.isPublic ? 'Public' : 'Private'}
                </span>
              </div>
              {entry.isPublic && (
                <div className="flex items-center text-gray-500 dark:text-gray-400 
                                bg-sand-50 dark:bg-gray-700 py-2 px-4 rounded-xl">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-jade-500 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                    />
                  </svg>
                  <span className="text-lg font-medium">{entry.likes}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}