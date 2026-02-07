import { useState } from "react";
import { currentUser, posts , activeUsers } from "./FakePostsData";
import { articles } from "./FakeAticles";
import { recommends } from "./fakeRecoommends";
import PostCard from "./components/Post";
import Articles from "./components/Articles";
import Recommends from "./components/recommends";
import ActiveFriends from "./components/activeFriends";
import Status from "./components/Stats";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";  

export default function App() {
    const [likes, setLikes] = useState(0);
  return (
    <div className="h-screen flex bg-[#050814] text-gray-300 overflow-hidden">
      {/* SIDEBAR - LEFT */}
      <LeftBar />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
      <Header />

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
            <Recommends items={recommends} />

            {/* ACTIVE NOW */}
            <ActiveFriends user={activeUsers}/>
 
            {/* YOUR STATS */}
            <Status stats={currentUser.stats}/>
          </aside>
        </div>
      </div>
    </div>
  );
}
