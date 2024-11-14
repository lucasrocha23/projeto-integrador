import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "./paginas/home";
import { ListaProdutos } from "./paginas/lista-produtos";
import { Detalhes } from "./paginas/detalhes";
import { ResultadoPesquisa } from "./paginas/resultado-pesquisa";
import { NaoEncontrada } from "./paginas/nao-encontrada";
import { QuemSomos } from "./paginas/quemSomos";
import "react-responsive-carousel/lib/styles/carousel.min.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/produtos',
    element: <ListaProdutos/>,
  },
  {
    path: '/detalhes',
    element: <Detalhes/>
  },
  {
    path: '/resultado',
    element: <ResultadoPesquisa/>
  },
  {
    path: '/quemSomos',
    element: <QuemSomos/>
  },
  {
    path: '*',
    element: <NaoEncontrada/>
  }
])  ;

export default function App() {
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  )
}

