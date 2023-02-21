import Orange from '../assets/boots/Orange.png';
import style from '../scss/HomePage.module.scss';
import { Product } from '../components/product';
import detals from '../scripts/detals';

function HomePage() {
    return (
        <section>
            <div className={style.block_panel}>
                <div className={style.panel_title}>Shop</div>
            </div>

            <div className={style.products_block}>
                <Product id='orange' img={Orange} name='Orange sneakers' price='500 ₽' />
                <Product id='red' img={Orange} name='Orange sneakers' price='500' />
                <Product id='blue' img={Orange} name='Orange sneakers' price='500' />
                <Product id='green' img={Orange} name='Orange sneakers' price='500' />
            </div>

        </section>

    );
}

export { HomePage };
