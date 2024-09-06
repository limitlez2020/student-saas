import Image from "next/image";
import HomePage from "./home_page/page";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#efe6f7]">
      <HomePage />
    </div>
  );
}
