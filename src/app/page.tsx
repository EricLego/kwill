import Link from 'next/link';

export default function Home() {
  // Mock data for public entries
  const publicEntries = [
    {
      id: 1,
      content: "Sometimes I feel like I'm not enough, but then I remember how far I've come.",
      likes: 12,
      date: "2 hours ago"
    },
    {
      id: 2,
      content: "Today I finally had the courage to speak up in the meeting. It was terrifying but worth it.",
      likes: 24,
      date: "5 hours ago"
    },
    {
      id: 3,
      content: "The sunset today reminded me that even the darkest days end with something beautiful.",
      likes: 47,
      date: "1 day ago"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-16 animation-enter">
      <h1 className="text-6xl font-bold mb-10 text-gray-800 dark:text-sand-50">kwill</h1>
      <p className="text-2xl mb-14 text-center max-w-2xl text-gray-700 dark:text-sand-100 leading-relaxed">
        An anonymous space to share your thoughts and connect with others
      </p>
      
      <div className="mb-18">
        <Link href="/journal" 
          className="btn-primary text-xl px-10 py-5 rounded-3xl shadow-medium">
          Start Writing
        </Link>
      </div>

      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800 dark:text-sand-50 px-4">Recent Thoughts</h2>
        <div className="space-y-10">
          {publicEntries.map((entry, index) => (
            <div 
              key={entry.id} 
              className="card animation-slide bg-white/90 dark:bg-gray-800/90"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="text-xl mb-8 leading-relaxed">{entry.content}</p>
              <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                <span className="text-lg">{entry.date}</span>
                <div className="flex items-center">
                  <button className="flex items-center space-x-3 group transition-all duration-300 
                                    bg-sand-50 dark:bg-gray-700 py-2 px-4 rounded-xl hover:bg-sand-100 dark:hover:bg-gray-600">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-jade-500 group-hover:text-jade-600 transition-all duration-300 group-hover:scale-110" 
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}