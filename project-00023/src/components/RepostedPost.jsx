export default function RepostedPost({ post }) {
  const originalPost = post.originalPost;
  return (
    <div className="bg-gradient-to-br from-[#0f1629] to-[#0a0f1f] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition">
      <p className="text-purple-400 text-sm mb-2">
        reposted by {post.repostedBy.name}
      </p>
      <div className="border-l-2 border-purple-500/30 pl-4">
        <div className="flex items-center gap-3 mb-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={
              originalPost.author.avatar.startsWith("/")
                ? originalPost.author.avatar
                : `/${originalPost.author.avatar}`
            }
            alt={originalPost.author.name}
            loading="lazy"
          />
          <div>
            <p className="font-medium">{originalPost.author.name}</p>
            <p className="text-xs text-gray-500">
              {originalPost.author.username} • {originalPost.time}
            </p>
          </div>
        </div>
        {originalPost.title && <h2 className="text-xl font-bold mb-3">{originalPost.title}</h2>}
        <p className="text-gray-300 mb-4">{originalPost.content}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {originalPost.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-8 text-sm text-gray-400">
          <span className="flex items-center gap-2"><span>❤️</span> {originalPost.likes}</span>
          <span className="flex items-center gap-2"><span>💬</span> {originalPost.commentsCounter}</span>
          <span className="flex items-center gap-2"><span>🔁</span> {originalPost.shares}</span>
        </div>
      </div>
    </div>
  )
}
