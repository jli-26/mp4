import Header from "@/components/Header";
import CatGallery from "../components/CatGallery";

export default function Home() {
  return (
    <div>
      <Header />
      <h1  className="flex flex-col items-center text-3xl mb-6">Welcome to Cat World! 🐾</h1>
      <CatGallery />
    </div>
  );
}

