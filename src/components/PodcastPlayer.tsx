import { useState, useRef } from "react";

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <div className="bg-[#1e1e2f] rounded-xl shadow-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">🎙️ Nội dung trình bày</h2>
        <p className="mb-6 text-sm text-gray-300">
          Đảng cầm quyền có thể mất lòng tin của nhân dân – làm sao để tránh nguy cơ này?
        </p>

        <div className="flex items-center gap-6">
          {/* Hình ảnh quay khi phát */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400">
            <img
              src="/images/podcast-cover.jpg"
              alt="Podcast Cover"
              className={`w-full h-full object-cover ${
                isPlaying ? "animate-spin-slow" : ""
              }`}
            />
          </div>

          {/* Audio controls */}
          <div className="flex-1">
            <audio ref={audioRef} src="/music/podcast.mp3" />
            <button
              onClick={togglePlay}
              className="bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-300 transition"
            >
              {isPlaying ? "⏸️ Tạm dừng" : "▶️ Phát"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}