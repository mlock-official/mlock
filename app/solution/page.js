export const metadata = {
  title: "Solution Video | Mlock",
  description: "Mlock solution video showcase",
};

export default function SolutionVideoPage() {
  const videoSrc =
    "https://www.dropbox.com/scl/fi/x6hhh8orr8ptrov5ldboe/Shreyansh-Final.mp4?rlkey=tiohqv32ycnc2ac34ah6glpne&st=a6f11ax1&raw=1";

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-8">
      <section className="w-full max-w-6xl rounded-lg shadow-lg overflow-hidden border border-gray-700 mt-17">
        <div className="relative aspect-video bg-black">
          <video
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-contain"
            title="Mlock Solution Video"
            aria-label="Mlock solution video player"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-gray-900 text-gray-300 text-center py-4 text-sm">
          <p>🎥 Mlock Solution Showcase</p>
        </div>
      </section>
    </main>
  );
}