import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import ailogo from "../public/ailogo.jpg";

export default function Home() {
  return (
    <div>
      <div className="font-sans antialiased">
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image src="/logo.svg" alt="logo" width={100} height={100} />
              <span className="text-lg font-semibold text-gray-700">
                AI Content App Membership -{" "}
                <span className="text-primary">Join Now</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                AI Content <span className="text-primary">Generator</span>
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Revolutionize your content creation with our AI-powered app,
                delivering engaging and high-quality text in seconds.
              </p>

              <a
                href="/dashboard"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 text-lg"
              >
                Get started
              </a>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img
                src={ailogo.src}
                alt="Hero Image"
                className="w-[700px] h-[500px] rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow">
                <div className="text-primary text-3xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  25+ templates
                </h3>
                <p className="text-gray-600">
                  Responsive, and mobile-first projects on the web
                </p>
                <a href="#" className="text-primary hover:underline mt-4">
                  Learn more →
                </a>
              </div>

              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow">
                <div className="text-primary text-3xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Customizable
                </h3>
                <p className="text-gray-600">
                  Components are easily customized and extendable
                </p>
                <a href="#" className="text-primary hover:underline mt-4">
                  Learn more →
                </a>
              </div>

              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow">
                <div className="text-primary text-3xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Free to Use
                </h3>
                <p className="text-gray-600">
                  Every component and plugin is well documented
                </p>
                <a href="#" className="text-primary hover:underline mt-4">
                  Learn more →
                </a>
              </div>

              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow">
                <div className="text-primary text-3xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Contact us 24 hours a day, 7 days a week
                </p>
                <a href="#" className="text-primary hover:underline mt-4">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-8">
          <div className="container mx-auto text-center text-gray-400">
            <p>&copy; 2024 HeisenbergAI. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
