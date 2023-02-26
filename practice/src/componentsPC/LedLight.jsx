import style from '../scss/HomePage.module.scss';
import Ledlight from '../assets/Photo/Ledlight.png'

export const LedLight = () => {
    return (
        <section className={style.battery}>
            <div className={style.battery_textBlock}>
                <div className={style.battery_title}>Built-In Front LED Light</div>
                <div className={style.battery_text}>
                    Front-facing lights are designed with 2.5w high-brightness LED light to illuminate
                    the path ahead of you and increase your visibility to others around you.
                </div>
            </div>
            <img src={Ledlight} alt="Ledlight" className={style.Smartbattery_img} />
        </section>
    );
}
