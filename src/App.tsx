import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "./paginas/home";
import { ListaProdutos } from "./paginas/lista-produtos";
import { Detalhes } from "./paginas/detalhes";
import { ResultadoPesquisa } from "./paginas/resultado-pesquisa";
import { NaoEncontrada } from "./paginas/nao-encontrada";
import { QuemSomos } from "./paginas/quemSomos";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Login } from "./paginas/login";
import { Registro } from "./paginas/registro";
import { Dashboard } from "./paginas/dashboard";
import { UsrAnuncios } from "./paginas/usr-anuncios";
import { FormProduto } from "./paginas/from-produto";
import { FaleConosco } from "./paginas/fale-conosco";

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
    path: '/quem-somos',
    element: <QuemSomos/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/registrar',
    element: <Registro/>
  },
  {
    path: '/anuncios',
    element: <UsrAnuncios/>
  },
  {
    path: '/form-produto',
    element: <FormProduto/>
  },
  {
    path: '/fale-conosco',
    element: <FaleConosco/>
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

