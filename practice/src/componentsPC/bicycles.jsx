import style from '../scss/HomePage.module.scss';
import PriceBlock from '../assets/icons/PriceBlock.png'

import { ReactComponent as Amex } from '../assets/payment/Amex.svg';
import { ReactComponent as App } from '../assets/payment/App.svg';
import { ReactComponent as BE } from '../assets/payment/BE.svg';
import { ReactComponent as BG } from '../assets/payment/BG.svg';
import { ReactComponent as Bl } from '../assets/payment/Bl.svg';
import { ReactComponent as Cr } from '../assets/payment/Cr.svg';
import { ReactComponent as D } from '../assets/payment/D.svg';
import { ReactComponent as Dee } from '../assets/payment/Dee.svg';
import { ReactComponent as Discover } from '../assets/payment/Discover.svg';
import { ReactComponent as JCB } from '../assets/payment/JCB.svg';
import { ReactComponent as L } from '../assets/payment/L.svg';
import { ReactComponent as Mc } from '../assets/payment/Mc.svg';
import { ReactComponent as P } from '../assets/payment/JCB.svg';
import { ReactComponent as S } from '../assets/payment/S.svg';
import { ReactComponent as V } from '../assets/payment/V.svg';

import MAXG30E from '../assets/Photo/MAXG30E.png'

export const Bicycles = () => {
    return (
        <section className={style.bicycles}>

            <div className={style.priceBlock}>
                <div className={style.bicycles_title}>
                    SEGWAY Ninebot Kickscooter MAX
                </div>
                <div className={style.warrantyBlock}>
                    <div className={style.warranty_title}>
                        Add an extended warranty from <span style={{ fontWeight: "bold" }}>Extend</span>
                    </div>
                    <div className={style.warranty_buttons}>
                        <div className={style.warranty_button}>1 Year - $139</div>
                        <div className={style.warranty_button}>2 Year - $209</div>
                        <div className={style.warranty_button}>3 Year - $279</div>
                    </div>

                    <div className={style.price}>
                        <div className={style.throughBlock}>
                            <div className={style.through_price}>$1049.99</div>
                            <div className={style.new_price}>$949.99</div>
                        </div>
                        <div className={style.text_blue}>Segway Protective Gear Set as a gift</div>
                        <img src={PriceBlock} alt="PriceBlock" className={style.price_img} />
                    </div>

                    <div className={style.buttonBlock}>
                        <button className={style.button_price}>BUY IT NOW</button>
                        <button className={style.button_price}>ADD TO CART</button>
                    </div>
                </div>

                <div className={style.methods}>
                    <div className={style.methods_text}>
                        <span style={{ color: '#999999' }}>Payment Methods: </span>
                        <span style={{ color: '#009EFF' }}>Starting at $55/mo with. </span>
                        <span style={{ color: '#6ACD68' }}>Prequalify now</span>
                    </div>
                    <div className={style.payment}>
                        <Amex /> <App /> <BE /> <BG /> <Bl />
                        <Cr /> <D /> <Dee /> <Discover /> <JCB />
                        <L /> <Mc /> <P /> <S /> <V />
                    </div>
                </div>
            </div>

            <div className="slider">
                <img src={MAXG30E} alt="MAXG30E" />
            </div>
        </section>
    );
}
