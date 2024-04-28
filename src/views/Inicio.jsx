import { productos as data } from '../data/productos.js'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco.js'

export default function Inicio() {

  const { categoriaActual } = useQuiosco()

  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)


  return (
    <>
      <h1 className='text-4x1 font-black text-center	'>{categoriaActual.nombre}</h1>
   

      <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
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
