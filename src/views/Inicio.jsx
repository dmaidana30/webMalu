import { productos as data } from '../data/productos.js'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco.js'

export default function Inicio() {

  const { categoriaActual } = useQuiosco()

  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className='text-4x1 font-black'>{categoriaActual.nombre}</h1>
      <p className='text 2x1 my-10'>
        Elige y personaliza tu pedido a continuación.
      </p>

      <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
    {productos.map(producto => (
      <Producto
        key={producto.imagen}
        producto={producto}
      />
    ))}
</div>


    </>
  )
}
