import style from '../../scss/PC.module.scss';
import DualBrak from '../../assets/Photo/DualBrak.png'

export const DualBraking = () => {
    return (
        <section className={style.DualBraking}>
            <img src={DualBrak} alt="DualBrak" className={style.DualBraking_img} />
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
