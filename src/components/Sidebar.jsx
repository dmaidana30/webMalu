import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

export default function Sidebar() {

    const { categorias } = useQuiosco()

  return (
    <aside className="md:w-72">       
        <div className="mt-10">
            {categorias.map( categoria => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>

        <div className="my-5 py-5">
            <button
                type="button"
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate cursor-pointer"
            >
                Cancelar Orden
            </button>

        </div>
    </aside>
  )
}