import styles from './prato.module.scss';
import stylesTema from 'styles/tema.module.scss';
import cardapio from 'data/cardapio.json';
import classNames from 'classnames';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import TagsPrato from 'components/Tags';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {

    const navigate = useNavigate();
    const { id } = useParams();
    const prato = cardapio.find( item => item.id === Number(id));

    if(!prato){
        return <NotFound />; 
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <>
                        <button className={styles.voltar} onClick={() => navigate(-1)}>
                            {'< Voltar'}
                        </button>
                        <div className={styles.container}>
                            <h1 className={styles.titulo}>
                                {prato.title}
                            </h1>
                            <div className={styles.imagem}>
                                <img src={prato.photo} alt={prato.title} />
                            </div>
                            <div className={styles.conteudo}>
                                <p className={styles.conteudo__descricao}>
                                    {prato.description}
                                </p>
                            </div>
                            <TagsPrato {...prato} />
                        </div>
                    </>
                } />
            </Route>
        </Routes>
    );
}