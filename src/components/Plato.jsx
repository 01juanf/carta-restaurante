function Plato({ nombre, descripcion, ingredientes, alergenos, precio, imagen }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <img src={imagen} alt={nombre} className="w-full h-48 object-cover" />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
          <p className="text-gray-600 text-sm">{descripcion}</p>
          <p className="text-sm"><span className="font-semibold">Ingredientes:</span> {ingredientes.join(", ")}</p>
          <p className="text-sm text-red-500"><span className="font-semibold">Alérgenos:</span> {alergenos.join(", ")}</p>
          <p className="text-green-700 text-lg font-bold">${precio}</p>
        </div>
      </div>
    );
  }
  
  
  export default Plato;
  
