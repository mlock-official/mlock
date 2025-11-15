import { FaLock } from "react-icons/fa";

export const metadata = { title: "Privacy Policy | Mlock" };

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white text-gray-800 flex items-center justify-center px-4">
      <section className="max-w-xl w-full text-center bg-white shadow-lg rounded-xl p-8">
        <div className="mb-6 flex justify-center text-green-600 text-5xl">
          <FaLock />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Our privacy policy will be published here soon. Please check back shortly for updates.
        </p>
        <div className="mt-6 text-sm text-gray-500">
          Last updated: <span className="font-medium">Coming Soon</span>
        </div>
      </section>
    </main>
  );
}