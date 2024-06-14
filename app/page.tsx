import Back from "@/components/Home/back";
import Main from "@/components/Home/main";
import People from "@/components/Home/people";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <BackgroundGradientAnimation>
        <div className="absolute flex flex-col w-full items-center justify-start z-10 mt-10 md:mt-32">
          {" "}
          {/* <Back /> */}
          <Main />
          <People />
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}
