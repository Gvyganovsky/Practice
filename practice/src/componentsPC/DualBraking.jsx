import style from '../scss/HomePage.module.scss';
import DualBrak from '../assets/Photo/DualBrak.png'

export const DualBraking = () => {
    return (
        <section className={style.DualBraking}>
            <img src={DualBrak} alt="DualBrak" className={style.DualBraking_img} />
            <div className={style.DualBraking_textBlock}>
                <div className={style.battery_title}>Dual Braking System</div>
                <div className={style.battery_text}>
                    Simultaneous mechanical front drum brake and regenerative electric back brake provide
                    both stability and steerability.</div>
                <div className={style.battery_text}>*IPX5 water resistance</div>
            </div>
        </section >
    );
}
