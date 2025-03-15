import Link from 'next/link';

export default function JournalPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-12 animation-enter">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-10">
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
            Back
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-sand-50">Write Your Thoughts</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
        
        <div className="card transition-transform duration-500 hover:translate-y-[-4px] bg-white/90 dark:bg-gray-800/90">
          <textarea 
            className="w-full h-80 p-8 mb-8 border border-sand-200 dark:border-gray-700 rounded-2xl 
                      focus:ring-4 focus:ring-jade-300/30 focus:border-jade-400 focus:outline-none
                      dark:bg-gray-800 dark:focus:ring-jade-700/30 dark:focus:border-jade-500 
                      text-xl resize-none transition-all duration-300 shadow-inner-soft"
            placeholder="What's on your mind today?"
          ></textarea>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <label className="toggle-switch">
                <input type="checkbox" id="public-toggle" />
                <span className="toggle-slider"></span>
              </label>
              <label htmlFor="public-toggle" className="text-lg font-medium text-gray-700 dark:text-sand-100">
                Make this entry public
              </label>
            </div>
            
            <button
              className="btn-primary px-10 py-4 text-lg shadow-medium hover:shadow-lg rounded-2xl"
            >
              Post Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}