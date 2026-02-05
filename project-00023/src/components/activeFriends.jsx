export default function ActiveFriends(){
    return(
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
    )
}