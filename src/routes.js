import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';

import Menu from 'components/menu/index.tsx';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter() {

    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Inicio />
    //     }
    // ])


    return (
        <main>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />} >
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}