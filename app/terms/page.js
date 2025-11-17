import { FaShieldAlt, FaMoneyBillWave, FaEnvelope } from "react-icons/fa";

export const metadata = { title: "Terms & Conditions | Mlock" };

export default function TermsPage() {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen py-10">
      <section className="mx-auto max-w-5xl px-6 mt-17">
        <h1 className="mb-10 text-center text-4xl font-extrabold text-gray-900">
          Terms & Conditions
        </h1>

        {/* Terms of Use */}
        <div className="mb-10 rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-2 text-2xl font-semibold text-green-600">
            <FaShieldAlt />
            <h2>Terms of Use</h2>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-[17px] leading-relaxed">
            <li>Acceptance of Terms: By accessing this website, you agree to comply with these terms and conditions.</li>
            <li>Use of Website: You agree not to use the website for any unlawful purpose.</li>
            <li>Privacy Policy: Please review our Privacy Policy to understand how we handle your information.</li>
            <li>Changes to Terms: We reserve the right to modify these terms at any time.</li>
            <li>Damage to Luggage: Mlock Station is not responsible for any damage to luggage stored in our facilities.</li>
            <li>Theft Disclaimer: As this is the first launch of Mlock Station, we are not responsible for any stolen luggage.</li>
            <li>Beta Phase Notice: Our system is not 100% reliable during the initial phase; use our services at your own risk.</li>
          </ul>
        </div>

        {/* Payment for Services */}
        <div className="mb-10 rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-2 text-2xl font-semibold text-green-600">
            <FaMoneyBillWave />
            <h2>Payment for Services</h2>
          </div>
          <ul className="list-decimal space-y-2 pl-5 text-[17px] leading-relaxed">
            <li>Payment must be made in advance for all services.</li>
            <li>Refunds are not applicable once a service has been used.</li>
            <li>Payment methods accepted include credit cards and online payment gateways.</li>
            <li>Payment must be completed before the door opens.</li>
            <li>Payment is calculated per minute.</li>
            <li>The system will show the amount per minute based on your selected time.</li>
            <li>If your selected time exceeds the limit, extra charges will apply per minute.</li>
            <li>Extra charges must be paid before the option to open the door is provided.</li>
            <li>If luggage is not received within 4 hours, it will be held by the company and can only be retrieved after paying extra charges.</li>
            <li>If you have selected a long storage time, payment in advance is required.</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="mb-10 rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center gap-2 text-2xl font-semibold text-green-600">
            <FaEnvelope />
            <h2>Contact Us</h2>
          </div>
          <p className="text-[17px] leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us at{" "}
            <a href="mailto:mlockofficial@gmail.com" className="text-blue-600 underline">
              mlockofficial@gmail.com
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
}