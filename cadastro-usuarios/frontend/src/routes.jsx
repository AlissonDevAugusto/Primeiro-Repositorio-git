/* Vai servir para ajuda entre a navegaçao das paginas */

import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import ListUsers from "./pages/ListUsers"

const router = createBrowserRouter([
    {
        path: "/" , /* e o endereço url de qual pag , o primeiro path sempre e o endereço raiz , pag incial '/' */
        element: <Home/>
    } ,
    {
        path: "/lista-de-usuarios" ,
        element: <ListUsers/>
    } 

    /* Podemos continuar crescendo o site EX:
    
    {
        path: "/ediçao-de-usuarios" ,
        element: <EditUsers/>
    
    }
    
    */
])

export default router