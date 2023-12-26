import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto}) {

    const { handleClickModal,handleSetProducto } = useQuiosco();
    const {nombre , imagen , precio} = producto
  return (
    <>
    <a
    href="#!" // Un enlace ficticio que no lleva a ninguna parte
    class="block rounded-lg p-4 shadow-sm shadow-indigo-100"
    onClick={(e) => {
        e.preventDefault(); // Previene la navegación predeterminada
        handleClickModal();
        handleSetProducto(producto);
    }}
>
  <img
    src={`/img/${imagen}.jpg`} 
             alt={`imagen ${nombre}`}
    //         className="w-full"
    class="h-56 w-full rounded-md object-cover"
  />

  <div class="mt-2">
    <dl>
      <div>
        <dt class="sr-only">Price</dt>

        <dd class="text-sm text-gray-500">{formatearDinero(precio)}</dd>
      </div>

      <div>
        <dt class="sr-only">Address</dt>

        <dd class="font-medium">{nombre}</dd>
      </div>
    </dl>
   
  
  </div>
</a>
    </>
    //////
    // <div className="border p-3 shadow bg-white cursor-pointer">
    //     <img 
    //         src={`/img/${imagen}.jpg`} 
    //         alt={`imagen ${nombre}`}
    //         className="w-full"
    //     />

    //     <div className="p-5">
    //         <h3 className="text-2x1 font-bold">{nombre}</h3>
    //         <p className="mt-5 font-black text-4xl text-amber-500"> 
    //             {formatearDinero(precio)}
    //         </p>

    //         <button
    //             type="button"
    //             className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
    //             onClick= { () => {
    //                 handleClickModal();
    //                 handleSetProducto(producto);
    //             }  }
    //         >
    //             Agregar
    //         </button>

    //     </div>
    // </div>
  )
}
