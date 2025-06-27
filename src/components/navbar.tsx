export function Navbar() {
  return (
    <header className="bg-navbar">
      <div className="px-[35px] flex h-16 items-center justify-between">
        <div>
          <a href="#" className="text-white">
            Miguel Antonio
          </a>
        </div>

         <div className="flex items-center gap-4">
          <a href="#" className="text-white hover:text-principal">
            SOBRE MIM
          </a>

          <a href="#" className="text-white hover:text-principal">
            PORTFÓLIO
          </a>
        </div>
      </div>
    </header>
  );
}
