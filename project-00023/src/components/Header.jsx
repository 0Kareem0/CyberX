import { useState } from "react";

export default function Header({ handleCreatePost }) {

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const submit = () => {
    if (!title.trim() || !content.trim()) return;

    handleCreatePost({
      title,
      content,
      tags: tags
        .split(",")
        .map(t => t.trim())
        .filter(Boolean)
    });

    setTitle("");
    setContent("");
    setTags("");
    setOpen(false);
  };

  return (
    <>
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

          {/* 🔴 CHANGE ONLY HERE */}
          <button
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2"
          >
            + CREATE
          </button>
        </div>
      </header>

      {/* ================== FORM MODAL ================== */}

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-[#0d1228] p-6 rounded-xl w-full max-w-md border border-white/10">

            <h3 className="text-white text-lg mb-4">
              Create new post
            </h3>

            <input
              className="w-full mb-3 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm outline-none"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <textarea
              className="w-full mb-3 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm outline-none"
              placeholder="Content"
              rows={4}
              value={content}
              onChange={e => setContent(e.target.value)}
            />

            <input
              className="w-full mb-4 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm outline-none"
              placeholder="tags: react, js, linux"
              value={tags}
              onChange={e => setTags(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={submit}
                className="px-4 py-2 text-sm bg-cyan-600 text-white rounded"
              >
                Create
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
