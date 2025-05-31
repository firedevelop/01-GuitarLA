import { useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from './data/db'


function App() {
  const [data, setData] = useState(db)

  /*
  // useState  
    const [auth, setAuth] = useState([])
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])
  
    // useEffect
    useEffect(() => {
      console.log('component ready')
    }) 
    // get data for API
     useEffect(()=>{
     setImmediate(db)
     }, [])
      
  */


  return (
    <>
      <Header />


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección8</h2>
        <div className="row mt-5">
          {data.map(() => (
              <Guitar />
          ))}
          <Guitar></Guitar>
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
