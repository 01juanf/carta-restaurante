import { useState } from 'react';
import menu from './data/menu.js';
import Plato from './components/Plato.jsx';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton'; // ¿mantener o eliminar?

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");

  return (
    <>
      <Navbar />
      <Header />

      <main id="menu" className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-yellow-800 mb-8">
          Carta del Restaurante
        </h1>

        {/* Botones de Filtro */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <button
            onClick={() => setCategoriaSeleccionada("todas")}
            className={`px-4 py-2 rounded-full font-medium border ${
              categoriaSeleccionada === "todas"
                ? "bg-amber-900 text-white"
                : "bg-white text-amber-900"
            }`}
          >
            Ver todo
          </button>

          {Object.keys(menu).map((categoria, i) => (
            <button
              key={i}
              onClick={() => setCategoriaSeleccionada(categoria)}
              className={`px-4 py-2 rounded-full font-medium border capitalize ${
                categoriaSeleccionada === categoria
                  ? "bg-amber-900 text-white"
                  : "bg-white text-amber-900"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Renderizado de Categorías Filtradas */}
        {Object.entries(menu)
          .filter(([categoria]) =>
            categoriaSeleccionada === "todas"
              ? true
              : categoria === categoriaSeleccionada
          )
          .map(([categoria, platos], i) => (
            <section key={i} className="mb-12 border-b pb-8">
              <h2 className="text-2xl font-bold capitalize mb-6 text-yellow-700 border-l-4 border-yellow-500 pl-4">
                {categoria}
              </h2>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {platos.map((plato, j) => (
                  <Plato key={j} {...plato} />
                ))}
              </div>
            </section>
        ))}
      </main>

      <ScrollTopButton />
      <Footer />
    </>
  );
}

export default App;
