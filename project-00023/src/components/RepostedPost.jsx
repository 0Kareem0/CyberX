export default function RepostedPost() {
    return (
 <div className="bg-gradient-to-br from-[#0f1629] to-[#0a0f1f] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition">
      {/* AUTHOR */}
      <div className="flex items-center gap-3 mb-4">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={
            post.author.avatar.startsWith("/")
              ? post.author.avatar
              : `/${post.author.avatar}`
          }
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

        <button onClick={() => SetCommentOpen(!commentOpen)} className="flex items-center gap-2 hover:text-cyan-400">
          <span>💬</span> {post.commentsCounter}
        </button>
        <button
          className="flex items-center gap-2 hover:text-cyan-400"
          onClick={() => setOpen(true)}
        >
          add comment +
        </button>
        {/* the repost button */}
        <button className="flex items-center gap-2 hover:text-purple-400">
          <span><img className="h-5 w-5" src="repost3.png" alt="" /></span> {post.shares}
        </button>

        <button
          onClick={() => handleBookmark(post.id)}
          className="flex items-center gap-2 hover:text-yellow-400"
        >
          <span>{post.bookmarked ? "🔖" : "□"}</span>
        </button>
      </div>
      {open && (
        <Comment
          handleCreateComment={(commentData) =>
            handleCreateComment(post.id, commentData)
          }
          setOpen={setOpen}
        />
      )}
      
      {post.comments && post.comments.length > 0 && commentOpen && (
        <div className="mt-4 space-y-3">
          {post.comments.map((comment) => (
            <div
              key={comment.id}
              className="flex gap-3 p-3 bg-white/5 rounded-lg"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={comment.author.avatar}
                alt={comment.author.name}
              />
              <div>
                <p className="text-sm font-medium">{comment.author.name}</p>
                <p className="text-sm text-gray-300">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
