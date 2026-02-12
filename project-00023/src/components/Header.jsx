export default function Header({ handleCreatePost }) {
  return (
            <header className="h-16 bg-gradient-to-r from-[#0a0f1f] to-[#0d1228] border-b border-white/10 flex items-center justify-between px-6">
              <div className="flex items-center gap-4 flex-1 max-w-2xl">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search the grid..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-5 pl-12 text-sm focus:outline-none focus:border-cyan-500/50 transition"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    🔍
                  </span>
                </div>
                <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-medium transition">
                  SCAN
                </button>
              </div>
    
              <div className="flex items-center gap-6">
                <button className="relative">
                  <span className="text-2xl">🔔</span>
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button className="relative">
                  <span className="text-2xl">💬</span>
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button onClick={() => handleCreatePost()} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2">
                  + CREATE
                </button>
              </div>
            </header> 
  );
}
