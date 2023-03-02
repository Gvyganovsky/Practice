import style from './Miles.module.scss';

import { ReactComponent as Box } from '../../assets/icons/Box.svg';
import { ReactComponent as Sheet } from '../../assets/icons/Sheet.svg';
import { ReactComponent as Tools } from '../../assets/icons/Tools.svg';
import { ReactComponent as Way } from '../../assets/icons/Way.svg';

export const Miles = () => {
    return (
        <section className={style.miles}>
            <div className={style.miles_icons}>
                <div className={style.miles_iconBlock}>
                    <Box alt="Box" className={style.miles_icon} />
                    <div className={style.miles_text}>Delivery within 1 business day</div>
                </div>

                <div className={style.miles_iconBlock}>
                    <Sheet alt="Sheet" className={style.miles_icon} />
                    <div className={style.miles_text}>Basic 1 year warranty</div>
                </div>

                <div className={style.miles_iconBlock}>
                    <Tools alt="Tools" className={style.miles_icon} />
                    <div className={style.miles_text}>After Sales Support</div>
                </div>

                <div className={style.miles_iconBlockBlue}>
                    <Way alt="Way" className={style.miles_icon} />
                    <div className={style.miles_textBlue}>Up to 40 miles per charge</div>
                </div>
            </div>
        </section>
    );
}