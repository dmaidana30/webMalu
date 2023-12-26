import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

export default function SidebarV2() {

    const { categorias } = useQuiosco()

  return (
    <aside className="md:w-72">
        <ul className="space-y-1">
            <li>
                <a
                href=""
                className="group flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                >
                <span className="text-sm font-medium"> {categorias.map( categoria => (
                        <Categoria
                            key={categoria.id}
                            categoria={categoria}
                        />
                    ))} </span>
                </a>
            </li>           

            


        </ul>
    </aside>
  )
}
