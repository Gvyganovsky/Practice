import style from '../scss/HomePage.module.scss';
import rewards from '../assets/icons/rewards.png'
import { ReactComponent as Box } from '../assets/icons/Box.svg';
import { ReactComponent as Sheet } from '../assets/icons/Sheet.svg';
import { ReactComponent as Tools } from '../assets/icons/Tools.svg';
import { ReactComponent as Way } from '../assets/icons/Way.svg';
import { ReactComponent as Hexagon } from '../assets/icons/Hexagon.svg';

export const Miles = () => {
    return (
        <section className={style.miles}>
            <div className={style.miles_icons}>
                <div className={style.miles_iconBlock}>
                    <Box alt="Box" />
                    <div className={style.miles_text}>Delivery within 1 business day</div>
                </div>

                <div className={style.miles_iconBlock}>
                    <Sheet alt="Sheet" />
                    <div className={style.miles_text}>Basic 1 year warranty</div>
                </div>

                <div className={style.miles_iconBlock}>
                    <Tools alt="Tools" />
                    <div className={style.miles_text}>After Sales Support</div>
                </div>

                <div className={style.miles_iconBlockBlue}>
                    <Way alt="Way" />
                    <div className={style.miles_textBlue}>Up to 40 miles per charge</div>
                </div>
            </div>

            <div className={style.miles_textBlocks}>
                <div className={style.miles_textBlock}>
                    <div className={style.miles_title_bold}>Up to 40 miles of range on a single charge</div>
                    <div className={style.miles_text_normal}>
                        With a range of up to 40 miles, the longest range on the market, and
                        a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from
                        San Francisco Bay Area to Palo Alto on a single charge.
                    </div>
                </div>
                <Hexagon alt="Hexagon" />
            </div>
        </section>
    );
}