import Orange from '../assets/boots/Orange.png';
import style from '../scss/HomePage.module.scss';
import { Product } from '../components/product';
import { Detals } from '../components/detals';

function HomePage() {
    return (
        <section>
            <div className={style.block_panel}>
                <div className={style.panel_title}>Shop</div>
            </div>

            <div className={style.products_block}>
                <Product img={Orange} name='Orange sneakers' price='500 ₽' />
                <Product img={Orange} name='Orange sneakers' price='500' />
                <Product img={Orange} name='Orange sneakers' price='500' />
                <Product img={Orange} name='Orange sneakers' price='500' />
            </div>
        </section>
    );
}

export { HomePage };
