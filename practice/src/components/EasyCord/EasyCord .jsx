import style from './EasyCord.module.scss';
import EasyImg from '../../assets/Photo/EasyImg.png'

export const EasyCord = () => {
    return (
        <section className={style.EasyCord}>
            <img src={EasyImg} alt="EasyImg" className={style.EasyCord_img} />
            <div className={style.EasyCord_textBlock}>
                <div className={style.EasyCord_title}>EASY ONE CORD FAST CHARGING</div>
                <div className={style.EasyCord_text}>
                    The built-in charger lets riders recharge it easily when on the go without
                    having to carry along a bulky charging adapter. The fast charge will give Ninebot
                    KickScooter MAX a full charge in 6 hours.
                </div>
            </div>
        </section >
    );
}
