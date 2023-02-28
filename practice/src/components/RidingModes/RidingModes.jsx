import style from './RidingModes.module.scss';
import RidingMode from '../../assets/Photo/RidingMode.png'

export const RidingModes = () => {
    return (
        <section className={style.RidingModes}>
            <div className={style.RidingModes_textBlock}>
                <div className={style.RidingModes_title}>3 Riding Modes</div>
                <div className={style.RidingModes_text}>
                    Eco, Standard, and Sports modes can be directly accessed by the intuitive LED dashboard,
                    which also displays maintenance signals, power levels, Bluetooth connectivity and more.
                </div>
            </div>
            <img src={RidingMode} alt="RidingMode" className={style.RidingModes_img} />
        </section>
    );
}
