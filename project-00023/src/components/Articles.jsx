export default function Articles({ articles }) {
  return (
    <div className="bg-gradient-to-br from-[#0f1629] to-[#0a0f1f] border border-white/10 rounded-xl overflow-hidden">
      <div className="h-64 bg-gradient-to-r from-purple-900/40 to-pink-900/40 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/${articles.cover})` }}
        ></div>
      </div>
      <div className="p-6">
        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full uppercase font-medium">
          {articles.type} • {articles.readTime} read
        </span>
        <h2 className="text-2xl font-bold mt-3 mb-2">{articles.title}</h2>
        <p className="text-gray-300 mb-4">{articles.subtitle}</p>
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full"
            src={`${articles.author.avatar}`}
            alt=""
          />
          <div>
            <p className="font-medium">{articles.author.name}</p>
            <p className="text-xs text-gray-500">{articles.author.username}</p>
          </div>
          <button className="ml-auto bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-full text-sm transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
