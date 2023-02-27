import style from '../scss/PC.module.scss';
import styles from '../scss/Mobile.module.scss';

import KSE22 from '../assets/bicycles/KS E22.png';
import KSES1l from '../assets/bicycles/KS ES1l.png';
import KSAirt15 from '../assets/bicycles/KS Air t15.png';
import KSF30 from '../assets/bicycles/KS F30.png';
import KSE45 from '../assets/bicycles/KS E45.png';
import KSMAX_1 from '../assets/bicycles/KS MAX_1.png';
import KSMAX_2 from '../assets/bicycles/KS MAX_2.png';
import KSES2 from '../assets/bicycles/KS ES 2.png';
import KSES3 from '../assets/bicycles/KS ES 3.png';
import EKSZINGE8 from '../assets/bicycles/EKS ZING E8.png';
import EKSZINGE10 from '../assets/bicycles/EKS ZING E10.png';
import EKSZINGE12 from '../assets/bicycles/EKS ZING E12.png';
import KSES4 from '../assets/bicycles/KS ES 4.png';
import Accessories from '../assets/bicycles/Accessories.png';

export const Product = (props) => {
    return (
        <div className={style.product} id={props.id}>
            <img src={props.img} alt={props.img} className={style.product_img} />
            <div className={style.product_title}>{props.title}</div>
        </div>
    );
}

export const Products = () => {
    return (
        <section>
            <div className={style.products}>
                <div className={style.productsBlock}>
                    <Product id='KSE22' img={KSE22} title='KS E22' />
                    <Product id='KSES1l' img={KSES1l} title='KS ES1l' />
                    <Product id='KS Airt 15' img={KSAirt15} title='KS Airt 15' />
                    <Product id='KS F30' img={KSF30} title='KS F30' />
                    <Product id='KS E45' img={KSE45} title='KS E45' />
                    <Product id='KSMAX_1' img={KSMAX_1} title='KS MAX_1' />
                    <Product id='KSMAX_2' img={KSMAX_2} title='KS MAX_2' />
                </div>
                <div className={style.line}></div>
                <div className={style.productsBlock}>
                    <Product id='KSES2' img={KSES2} title='KS ES 2' />
                    <Product id='KSES3' img={KSES3} title='KS ES 3' />
                    <Product id='EKSZINGE8' img={EKSZINGE8} title='EKS ZING E8' />
                    <Product id='EKSZINGE10' img={EKSZINGE10} title='EKS ZING E10' />
                    <Product id='EKSZINGE12' img={EKSZINGE12} title='EKS ZING E12' />
                    <Product id='KSES4' img={KSES4} title='KS ES 4' />
                    <Product id='Accessories' img={Accessories} title='Accessories' />
                </div>
            </div>
            <div className={style.freeDay}>
                <div className={style.freeDayText}>
                    Free 1 day shipping within California.
                </div>
            </div>

            <div className={styles.productsAdapt}>
                <div className={styles.productsBlock}>
                    <Product id='KSE22' img={KSE22} title='KSE22' />
                    <Product id='KSES1l' img={KSES1l} title='KSES1l' />
                    <Product id='KS Airt 15' img={KSAirt15} title='KSA15' />
                    <Product id='KS F30' img={KSF30} title='KSF30' />
                    <Product id='KS E45' img={KSE45} title='KSE45' />
                    <Product id='KSMAX_1' img={KSMAX_1} title='KSMAX1' />
                    <Product id='KSMAX_2' img={KSMAX_2} title='KSMAX2' />
                    <Product id='KSES2' img={KSES2} title='KSES2' />
                    <Product id='KSES3' img={KSES3} title='KSES3' />
                    <Product id='EKSZINGE8' img={EKSZINGE8} title='EKSZINGE8' />
                    <Product id='EKSZINGE10' img={EKSZINGE10} title='EKSZINGE10' />
                    <Product id='EKSZINGE12' img={EKSZINGE12} title='EKSZINGE12' />
                    <Product id='KSES4' img={KSES4} title='KSES4' />
                    <Product id='Accessories' img={Accessories} title='Accessories' />
                </div>
            </div>
        </section>
    );
}
