export default function Status(){
    return(
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
    )
}