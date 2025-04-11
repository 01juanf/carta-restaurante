function Header() {
    return (
      <header className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/2163788707/photo/close-up-of-table-at-restaurant.jpg?s=612x612&w=0&k=20&c=tbIAlaTgtQVtWHSmoqN0R53ohuqc5xx5IFEChvMW_4E=')" }}>
        <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
          <h2 className="text-white text-3xl sm:text-5xl font-bold text-center px-4">
            EL BUEN COMER
          </h2>
        </div>
      </header>
    );
  }
  
  export default Header;
  