import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}) {

  const { handleClickCategoria, categoriaActual } = useQuiosco();
  const {icono, id, nombre} = categoria;

  const resaltarCategoriaActual = () => categoriaActual.id === id ? 'bg-pink-400' : 'bg-white';

  return (
    <div className={`${ resaltarCategoriaActual() } flex item-center gap-4 border w-full p-3 hover:bg-pink-400 cursor-pointer`}>
      <img 
        alt="imagen Logo" 
        src={`/img/icono_${icono}.svg`} 
        className="w-12"
      />
      <button 
        type="button"
        className="text-lg font-bold border-none cursor-pointer "
        onClick={ () => handleClickCategoria(id) }
      >
        {nombre}
      </button>
        
    </div>
  )
}
