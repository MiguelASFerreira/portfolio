import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-12 lg:flex-row lg:items-center lg:gap-12 lg:px-[200px]">
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/106342952?v=4"
          alt="Miguel Antonio"
          width={400}
          height={667}
          className="h-auto w-full max-w-[280px] rounded-[40px] md:max-w-[320px] lg:max-w-[400px]"
          quality={100}
        />
      </div>

      <div className="text-center lg:text-left">
        <h1 className="font-lobster text-[28px] leading-tight text-white md:text-[36px] lg:text-[40px]">
          Miguel Antonio Santos Ferreira!
        </h1>
        <p className="font-lobster typing-animation mt-2 max-w-max text-xl text-white md:text-2xl lg:text-3xl">
          Desenvolvedor FullStack
        </p>
      </div>
    </div>
  );
}
