import Image from "next/image";

export default function Home() {
  return (
    <div className="flex px-[200px]">
      <div className="absolute top-[144px] left-[200px]">
        <Image
          src="https://avatars.githubusercontent.com/u/106342952?v=4"
          alt="Miguel Antonio"
          width={400}
          height={667}
          className="rounded-[40px]"
          quality={100}
        />
      </div>
      <div className="absolute top-[300px] left-[722px]">
        <h1 className="font-lobster text-[40px] text-white">
          Miguel Antonio Santos Ferreira!
        </h1>
          <div>
            <p className="text-3xl text-white font-lobster typing-animation max-w-max">
              Desenvolvedor FullStack
            </p>
          </div>
      </div>
    </div>
  );
}
