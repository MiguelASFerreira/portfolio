import { BusinessCard } from "./components/business-card";


export const metadata = {
  title: "Portfólio - Miguel Antonio",
  description: "Meu portfólio pessoal",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center px-[80px] py-5">
      <BusinessCard />
    </div>
  )
}


// return (
//     <Card className="bg-navbar">
//       <CardContent className="items-center justify-center text-center">
//         <div className="flex items-center justify-center bg-red-500 px-4 py-12">
//           <Image
//             src="https://avatars.githubusercontent.com/u/106342952?v=4"
//             alt="Miguel Antonio"
//             width={300}
//             height={300}
//             className="rounded-[40px]"
//             quality={100}
//           />
//           <div className="text-center">
//             <h1 className="font-lobster text-[28px] leading-tight text-white md:text-[36px] lg:text-[40px]">
//               Miguel Antonio Santos Ferreira!
//             </h1>
//             <p className="font-lobster typing-animation mt-2 max-w-max text-xl text-white md:text-2xl lg:text-3xl">
//               Desenvolvedor FullStack
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );