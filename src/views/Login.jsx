
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
        <h1 className="text-4xl font-black">Iniciar Sesion</h1>    
        <p>Para crear un pedido debe iniciar sesion</p>
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form>               
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
                
                <input 
                    type="submit" 
                    value="Iniciar Sesion"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    
                />
            </form>            
        </div>
        <nav className="mt-5">
            <Link to="/auth/registro">
              ya tienes cuenta? Inicia sesion
            </Link>
        </nav>
    </>
  )
}
