import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "./paginas/home";
import { ListaProdutosRecentes } from "./paginas/produtos-recentes";
import { Detalhes } from "./paginas/detalhes";
import { ResultadoPesquisa } from "./paginas/pesquisa";
import { NaoEncontrada } from "./paginas/nao-encontrada";
import { QuemSomos } from "./paginas/quemSomos";
// @ts-ignore
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Login } from "./paginas/login";
import { Registro } from "./paginas/registro";
import { UsrAnuncios } from "./paginas/usr-anuncios";
import { FormProduto } from "./paginas/from-produto";
import { FaleConosco } from "./paginas/fale-conosco";
import { ListaTodosProdutos } from "./paginas/todos-os-produtos";
import { FormEditarProduto } from "./paginas/form-editar-produto";
import { ResultadosCategoria } from "./paginas/resultados-categoria";
import { Theme } from "@radix-ui/themes";
// @ts-ignore
import "@radix-ui/themes/styles.css";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/produtos-recentes',
    element: <ListaProdutosRecentes/>,
  },
  {
    path: '/todos-os-produtos',
    element: <ListaTodosProdutos/>,
  },
  {
    path: '/detalhes/:id',
    element: <Detalhes/>
  },
  {
    path: '/categoria/:categoria',
    element: <ResultadosCategoria/>
  },
  {
    path: '/pesquisa/:produto',
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
    path: '/login/:msg',
    element: <Login/>
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
    path: '/form-produto/:id',
    element: <FormEditarProduto/>
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
    <Theme>
      <div >
        <RouterProvider router={router}/>
      </div>
    </Theme>
  )
}

