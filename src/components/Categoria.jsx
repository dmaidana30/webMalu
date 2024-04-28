import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}) {

  const { handleClickCategoria, categoriaActual } = useQuiosco();
  const {icono, id, nombre} = categoria;

  const resaltarCategoriaActual = () => categoriaActual.id === id ? 'text-pink-700' : 'text-inherit';

  return (
    <div >
     
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
