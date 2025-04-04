import Header from "@/components/Header";

export default function About() {
    return (
        <div>
       <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">About This Site</h1>
        <p className="text-lg text-gray-600 mt-4">
          Feeling down? Need a pick-me-up? This site is dedicated to bringing you free cat images to brighten your day! I mean who doesn't love cats?
        </p>
      </div>
      </div>
    );
  }
  