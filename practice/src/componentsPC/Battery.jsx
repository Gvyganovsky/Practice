import style from '../scss/HomePage.module.scss';
import Smartbattery from '../assets/Photo/Smart battery.jpg'

export const Battery = () => {
    return (
        <section className={style.battery}>
            <div className={style.battery_textBlock}>
                <div className={style.battery_title}>Smart battery Management system (Smart-BMS)</div>
                <div className={style.battery_text}>
                    The Smart-BMS closely monitors the battery status with multiple protection mechanisms
                    to ensure the battery durability
                </div>
            </div>
            <img src={Smartbattery} alt="Smartbattery" className={style.Smartbattery_img} />
        </section>
    );
}
