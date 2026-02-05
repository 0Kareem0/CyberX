export default function Recommends({ items }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-purple-400 mb-4">
        RECOMMENDED READS
      </h3>

      <div className="space-y-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 hover:bg-white/5 p-3 rounded-lg transition cursor-pointer"
          >
            <div
              className="w-20 h-28 bg-gray-700 rounded-md shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.img})`,
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
  );
}
