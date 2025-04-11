function Navbar() {
    return (
      <nav className="bg-yellow-950 text-white px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Restaurante El Buen Comer</h1>
          <div className="hidden sm:flex gap-4">
            <a href="#menu" className="hover:underline">Carta</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  