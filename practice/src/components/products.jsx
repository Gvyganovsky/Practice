import style from '../scss/HomePage.module.scss';
import { ReactComponent as KSE22 } from '../assets/bicycles/KS E22.svg';
import { ReactComponent as KSES1l } from '../assets/bicycles/KS ES1l.svg';

import { ReactComponent as Segway } from '../assets/icons/Segway.svg';

export const Products = () => {
    return (
        <section className={style.products}>
            <div className={style.product} id='KSE22'>
                <KSE22 alt="KS E22" className={style.product_img} />
                <div className={style.product_title}>KS E22</div>
            </div>

            <div className={style.product} id='KSE22'>
                <KSES1l alt="KS ES1l" className={style.product_img} />
                <div className={style.product_title}>KSES1l</div>
            </div>
        </section>
    );
}
