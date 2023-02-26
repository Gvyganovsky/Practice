import style from '../scss/HomePage.module.scss';
import RidingMode from '../assets/Photo/RidingMode.png'

export const RidingModes = () => {
    return (
        <section className={style.battery}>
            <div className={style.battery_textBlock}>
                <div className={style.battery_title}>3 Riding Modes</div>
                <div className={style.battery_text}>
                    Eco, Standard, and Sports modes can be directly accessed by the intuitive LED dashboard,
                    which also displays maintenance signals, power levels, Bluetooth connectivity and more.
                </div>
            </div>
            <img src={RidingMode} alt="RidingMode" className={style.Smartbattery_img} />
        </section>
    );
}
