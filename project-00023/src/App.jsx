import { currentUser, posts } from "./FakePostsData";
import { articles } from "./FakeAticles";
import PostCard from "./components/Post";
import Articles from "./components/Articles";

export default function App() {
  return (
    <div className="h-screen flex bg-[#050814] text-gray-300 overflow-hidden">
      {/* SIDEBAR - LEFT */}
      <aside className="w-64 bg-gradient-to-b from-[#0a0f1f] to-[#0d1228] border-r border-white/10 flex flex-col">
        {/* LOGO */}
        <div className="px-6 py-5 border-b border-white/10">
          <h1 className="text-2xl font-bold text-cyan-400">NEXUS</h1>
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

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
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
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2">
              + CREATE
            </button>
          </div>
        </header>

        {/* MAIN FEED + RIGHT SIDEBAR */}
        <div className="flex-1 flex overflow-hidden">
          {/* FEED AREA */}
          <main className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
            {/* Feed Header */}
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                NEURAL FEED
              </h1>
              <div className="flex gap-4 mt-4">
                <button className="px-5 py-2 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium">
                  Latest
                </button>
                <button className="px-5 py-2 text-gray-400 hover:bg-white/5 rounded-full text-sm transition">
                  Popular
                </button>
                <button className="px-5 py-2 text-gray-400 hover:bg-white/5 rounded-full text-sm transition">
                  Following
                </button>
              </div>
            </div>

            {/* POSTS FROM DATA */}
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}

            {/* Featured Article */}
            {articles.map((art) => (
              <Articles key={art.id}  articles={art}/>
            ))}
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="w-80 bg-gradient-to-b from-[#0a0f1f] to-[#0d1228] border-l border-white/10 overflow-y-auto p-6 space-y-8">
            {/* RECOMMENDED READS */}
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-4">
                RECOMMENDED READS
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Digital Ghosts",
                    author: "by J. Morrison",
                    rating: "4.6",
                    img: "img1.png",
                  },
                  {
                    title: "Chrome Skies",
                    author: "by K. Tanaka",
                    rating: "4.9",
                    img: "img2.png",
                  },
                  {
                    title: "Neon Shadows",
                    author: "by R. Chen",
                    rating: "4.7",
                    img: "img3.png",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 hover:bg-white/5 p-3 rounded-lg transition cursor-pointer"
                  >
                    <div
                      className="w-20 h-28 bg-gray-700 rounded-md shrink-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${item.img}) `,
                      }}
                    ></div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.author}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTIVE NOW */}
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">
                ACTIVE NOW
              </h3>
              <div className="space-y-4">
                {["Cipher_X", "Nova_Prime", "Ghost_Wire"].map((name, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {name[0]}
                      </div>
                      <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-green-400">Online now</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-cyan-400">
                      💬
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* YOUR STATS */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4">
                YOUR STATS
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Posts</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span>Followers</span>
                  <span className="font-medium">2.4k</span>
                </div>
                <div className="flex justify-between border-b border-amber-20 pb-2">
                  <span>Following</span>
                  <span className="font-medium ">384</span>
                </div>
                <div className="flex justify-between">
                  <span>Articles Read</span>
                  <span className="font-medium text-indigo-700">89</span>
                </div>
                <div className="flex justify-between">
                  <span>Books Saved</span>
                  <span className="font-medium text-fuchsia-600">23</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
