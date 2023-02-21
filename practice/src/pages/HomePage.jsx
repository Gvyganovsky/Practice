import Orange from '../assets/boots/Orange.png';
import style from '../scss/HomePage.module.scss';

import { Product } from '../components/product'

function HomePage() {
    return (
        <section>
            <div className={style.block_panel}>
                <div className={style.panel_title}>Shop</div>
            </div>

            <div className={style.products_block}>

                <Product>asfafFFFFFFFFFFFFFFFFFFs</Product>



                <div className={style.product}>
                    <img src={Orange} alt="Orange" className={style.product_img} />
                    <div className={style.product_text}>
                        <div className={style.product_title}>Orange</div>
                        <div className={style.product_price}>13 990 ₽</div>
                    </div>
                </div>

                <div className={style.product}>
                    <img src={Orange} alt="Orange" className={style.product_img} />
                    <div className={style.product_title}>RS-Z Leather</div>
                    <div className={style.product_price}>13 990 ₽</div>
                </div>

                <div className={style.product}>
                    <img src={Orange} alt="Orange" className={style.product_img} />
                    <div className={style.product_title}>RS-Z Leather</div>
                    <div className={style.product_price}>13 990 ₽</div>
                </div>

            </div>

        </section>
    );
}

export { HomePage };
