import style from '../scss/PC.module.scss';
import EasyImg from '../assets/Photo/EasyImg.png'

export const Easy = () => {
    return (
        <section className={style.DualBraking}>
            <img src={EasyImg} alt="EasyImg" className={style.DualBraking_img} />
            <div className={style.DualBraking_textBlock}>
                <div className={style.DualBraking_title}>Dual Braking System</div>
                <div className={style.DualBraking_text}>
                    Simultaneous mechanical front drum brake and regenerative electric back brake provide
                    both stability and steerability.</div>
                <div className={style.DualBraking_text}>*IPX5 water resistance</div>
            </div>
        </section >
    );
}
