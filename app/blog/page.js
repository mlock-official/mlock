import Image from "next/image";

export const metadata = { title: "Blog | Mlock" };

export default function BlogPage() {
  const posts = [
    {
      img: "Blog/survey-image1.webp",
      title: "The Problem",
      text: "Many travelers face security risks while storing luggage at public places. Theft and mismanagement are common issues.",
    },
    {
      img: "Blog/survey-image2.webp",
      title: "Survey Insights",
      text: "Based on our survey, 80% of people expressed concerns over luggage safety. Mlock is here to change that.",
    },
    {
      img: "Blog/solution-image3.jpg",
      title: "Mlock's Solution",
      text: "We provide secure, automated luggage storage that ensures your belongings remain safe while you travel worry-free.",
    },
    {
      img: "Blog/user-feedback.webp",
      title: "User Feedback",
      text: "Our users love the convenience and security of Mlock. Hear what they have to say about their experience.",
    },
    {
      img: "Blog/Achievement.jpg",
      title: "Achievement",
      text: "Our journey is marked by milestones that reflect our dedication, innovation, and relentless pursuit of excellence.",
    },
    {
      img: "Blog/Oportunity.jpg",
      title: "Opportunity",
      text: "Explore new horizons with Mlock as we unlock exciting possibilities for growth and innovation.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mt-17">
        <h1 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900">
          Our Blog
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-xl border border-gray-200 shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-video w-full bg-gray-100 p-2">
                <Image
                  src={`/${p.img}`}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">{p.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}