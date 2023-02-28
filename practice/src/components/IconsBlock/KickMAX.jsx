import style from '../../scss/PC.module.scss';
import KickScooter from '../../assets/Photo/KickScooter.png'

export const KickMAX = () => {
    return (
        <section className={style.KickMAX}>
            <div className={style.KickMAX_title}>KICKSCOOTER OVERVIEW SEGWAY NINEBOT KICKSCOOTER MAX</div>
            <div className={style.KickMax_block}>
                <div className={style.KickMAX_textBlock}>
                    <div className={style.KickMAX_text}>Electronic Throttle</div>
                    <div className={style.KickMAX_text}>Bell</div>
                    <div className={style.KickMAX_text}>Brake Lewer</div>
                    <div className={style.KickMAX_text}>Headlight</div>
                    <div className={style.KickMAX_text}>Quick Release Lever</div>
                    <div className={style.KickMAX_text}>Folding Mechanism</div>
                    <div className={style.KickMAX_text}>Front Fork</div>
                    <div className={style.KickMAX_text}>Drum Brake</div>
                </div>
                <img src={KickScooter} alt="KickScooter" className={style.KickScooter_img}/>
                <div className={style.KickMAX_textBlock}>
                    <div className={style.KickMAX_text}>Dashboard & Power Button</div>
                    <div className={style.KickMAX_text}>Stem</div>
                    <div className={style.KickMAX_text}>Battery Compartment</div>
                    <div className={style.KickMAX_text}>Порт для зарядки</div>
                    <div className={style.KickMAX_text}>Charge Port</div>
                    <div className={style.KickMAX_text}>Kickstand</div>
                    <div className={style.KickMAX_text}>Rear Fender</div>
                    <div className={style.KickMAX_text}>Brake Light</div>
                    <div className={style.KickMAX_text}>Hub Motor</div>
                </div>
            </div>
        </section>
    );
}