import About from "@/components/home/about";
import Intro from "@/components/home/Intro";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";


export default function Home() {
  return (
    <MaxWidthWrapper >
      <div className="text-white flex flex-col  px-4 justify-between">
        <div className="text-white flex flex-col">
          <Intro />
          <About />
        </div>
      </div>
    </MaxWidthWrapper >
  );
}
