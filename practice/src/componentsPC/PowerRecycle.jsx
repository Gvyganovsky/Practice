import style from '../scss/HomePage.module.scss';
import Power from '../assets/Photo/Power.png'

export const PowerRecycle = () => {
    return (
        <section className={style.battery}>
            <div className={style.battery_textBlock}>
                <div className={style.PowerRecycle_title}>Regenerative Brake for Power Recycle </div>
                <div className={style.PowerRecycle_text}>
                    The innovative regenerative brake system turns Ninebot KickScooter MAX into an
                    electric vehicle powered by electricity and recycled energy from riding. Energy
                    will be collected from regenerative braking and distributed when you need a boost.
                </div>
            </div>
            <img src={Power} alt="Power" className={style.PowerRecycle_img} />
        </section>
    );
}
