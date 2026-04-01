import { useState } from "react";
import Comment from "./Comment";
export default function PostCard({ post, handleLike ,handleComment }) {

        const [open, setOpen] = useState(false);
  
  return (
    <div className="bg-gradient-to-br from-[#0f1629] to-[#0a0f1f] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition">
      {/* AUTHOR */}
      <div className="flex items-center gap-3 mb-4">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={post.author.avatar.startsWith('/') ? post.author.avatar : `/${post.author.avatar}`}
          alt={post.author.name}
          loading="lazy"
        />
        <div>
          <p className="font-medium">{post.author.name}</p>
          <p className="text-xs text-gray-500">
            {post.author.username} • {post.time}
          </p>
        </div>
        <button className="ml-auto text-gray-400 hover:text-white">•••</button>
      </div>

      {/* TITLE (optional) */}
      {post.title && <h2 className="text-xl font-bold mb-3">{post.title}</h2>}

      {/* CONTENT */}
      <p className="text-gray-300 mb-4">{post.content}</p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-8 text-sm text-gray-400">
        <button
          onClick={() => handleLike(post.id)}
          className="flex items-center gap-2"
        >
          <span>{post.liked ? "❤️" : "🤍"}</span>
          {post.likes} 
        </button>

        <button 
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 hover:text-cyan-400"
        >
          <span>💬</span> {post.comments}
        </button>
        <button className="flex items-center gap-2 hover:text-purple-400">
          <span>↪</span> {post.shares}
        </button>


        <button className="flex items-center gap-2 hover:text-yellow-400">
          <span>🔖</span>
            
        </button>

      </div>
      {open && <Comment handleComment={(commentData) => handleComment(post.id, commentData)} open={open} setOpen={setOpen} />}
    </div>
  );
}
