import { useState } from "react";

export default function Comment({handleCreateComment, setOpen }) {

  const [content, setContent] = useState("");

  const submit = () => {
    if (!content.trim()) return;

    handleCreateComment({content}); 

    setContent("");
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
      <h4 className="text-sm font-medium mb-3">Add a comment</h4>

      <textarea
        className="w-full mb-3 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm outline-none"
        placeholder="Write a comment..."
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="flex justify-end gap-2">
        <button
          className="px-3 py-1.5 text-sm text-gray-400"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>

        <button
          className="px-3 py-1.5 text-sm bg-cyan-600 text-white rounded"
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}