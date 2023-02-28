import style from './RegenerativeBrake.module.scss';
import Power from '../../assets/Photo/Power.png'

export const RegenerativeBrake = () => {
    return (
        <section className={style.RegenerativeBrake}>
            <div className={style.RegenerativeBrake_textBlock}>
                <div className={style.RegenerativeBrake_title}>REGENERATIVE BRAKE FOR POWER RECYCLE</div>
                <div className={style.RegenerativeBrake_text}>
                    The innovative regenerative brake system turns Ninebot KickScooter MAX into an
                    electric vehicle powered by electricity and recycled energy from riding. Energy
                    will be collected from regenerative braking and distributed when you need a boost.
                </div>
            </div>
            <img src={Power} alt="Power" className={style.RegenerativeBrake_img} />
        </section>
    );
}
