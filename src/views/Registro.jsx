import { Link } from 'react-router-dom'
export default function Registro() {
  return (
    <>
        <h1 className="text-4xl font-black">Crea tu cuenta</h1>    
        <p>Crea tu cuenta llenando el formulario</p>
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
                <div className="mb-4">
                    <label 
                        className="text-state-800"
                        htmlFor="name"
                    >Nombre:</label>
                    <input 
                        type="text" 
                        id="name"
                        className="mt-2 w-full p-3 bg-gray-50" 
                        name="name"
                        placeholder="Juan"
                    />
                </div>
                <div className="mb-4">
                    <label 
                        className="text-state-800"
                        htmlFor="name"
                    >Email:</label>
                    <input 
                        type="email" 
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-50" 
                        name="email"
                        placeholder="Juan@email.com"
                    />
                </div>
                <div className="mb-4">
                    <label 
                        className="text-state-800"
                        htmlFor="password"
                    >password:</label>
                    <input 
                        type="password" 
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50" 
                        name="password"
                        
                    />
                </div>
                <div className="mb-4">
                    <label 
                        className="text-state-800"
                        htmlFor="password_confirmation"
                    >Repetir password:</label>
                    <input 
                        type="password" 
                        id="password_confirmation"
                        className="mt-2 w-full p-3  bg-gray-50" 
                        name="password_confirmation"
                        
                    />
                </div>
                <input 
                    type="submit" 
                    value="Crear Cuenta"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    
                />
            </form>            
        </div>
        <nav className="mt-5">
            <Link to="/auth/login">
              ya tienes cuenta? Inicia sesion
            </Link>
        </nav>
    </>
  )
}
