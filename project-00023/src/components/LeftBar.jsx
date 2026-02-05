export default function LeftBar (){
    return(
        <aside className="w-64 bg-gradient-to-b from-[#0a0f1f] to-[#0d1228] border-r border-white/10 flex flex-col">
        {/* LOGO */}
        <div className="px-6 py-5 border-b border-white/10">
          <h1 className="text-2xl font-bold text-cyan-400">CyberX</h1>
          <p className="text-xs text-cyan-400/70">SOCIAL GRID v2.0</p>
        </div>

        {/* NAV */}
        <div className="px-4 py-6 space-y-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-md">
            <span className="bg-cyan-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
              1
            </span>
            <span>Feed</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:bg-blue-500/20 hover:text-blue-800 rounded-md">
            <span>⚡</span>
            <span>Trending</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:bg-blue-500/20 hover:text-blue-800 rounded-md">
            <span>👥</span>
            <span>Network</span>
          </div>
        </div>

        {/* CONTENT */}
        <h2 className="px-6 mt-4 mb-2 text-xs text-cyan-400 uppercase tracking-widest">
          Content
        </h2>
        <div className="px-4 space-y-2">
          <div className="flex justify-between px-4 py-2 hover:bg-pink-400/20 hover:text-fuchsia-900 rounded-md">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📄</span>
              <span>Articles</span>
            </div>
            <span className="bg-purple-600/20 text-purple-400 text-xs px-2 rounded">
              42
            </span>
          </div>
          <div className="flex justify-between px-4 py-2 hover:bg-fuchsia-600/20 hover:text-fuchsia-900 rounded-md">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">📚</span>
              <span>Books</span>
            </div>
            <span className="bg-purple-600/20 text-purple-400 text-xs px-2 rounded">
              18
            </span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-fuchsia-600/20 hover:text-fuchsia-900 rounded-md">
            <span className="text-gray-400">🔖</span>
            <span>Saved</span>
          </div>
        </div>

        {/* CHANNELS */}
        <h2 className="px-6 mt-6 mb-2 text-xs text-cyan-400 uppercase tracking-widest pt-5">
          Channels
        </h2>
        <div className="px-6 space-y-7 pt-4">
          <div className="flex items-center gap-2 hover:bg-fuchsia-600/20 border-b border-white/10 hover:text-fuchsia-900 rounded-md cursor-pointer">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            Tech Neural
          </div>
          <div className="flex items-center gap-2 hover:bg-fuchsia-600/20 border-b border-white/10 hover:text-fuchsia-900 rounded-md cursor-pointer">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Cyberpunk Culture
          </div>
          <div className="flex items-center gap-2 hover:bg-fuchsia-600/20 border-b border-white/10 hover:text-fuchsia-900 rounded-md cursor-pointer">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
            Digital Arts
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-auto px-6 py-4">
          <p className="text-sm text-gray-400 hover:text-white cursor-pointer mb-4">
            Settings
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src="/pfp.jpeg"
                alt="Profile"
              />
              <div>
                <p className="text-sm text-white">Kareem</p>
                <p className="text-xs text-gray-400">@kareemAbbas</p>
              </div>
            </div>
            <span className="text-gray-400">&gt;</span>
          </div>
        </div>
      </aside>
    )
}