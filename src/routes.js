import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRouter(){

    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Inicio />
    //     }
    // ])


    return (
        <BrowserRouter >
            <Routes >
                <Route path={'/'} element={<Inicio />}/>
                <Route path={'/cardapio'} element={<Cardapio />}/>
            </Routes>
        </BrowserRouter>
    );
}