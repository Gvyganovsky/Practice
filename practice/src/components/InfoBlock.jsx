import style from '../scss/HomePage.module.scss';
import rewards from '../assets/icons/rewards.png'

export const InfoBlock = () => {
    return (
        <section className={style.infoBlock}>
            <img src={rewards} alt="Rewards" className={style.rewards} />
            <div className={style.infoBlock_textBlock}>
                <div className={style.infoBlock_text_title}>
                    The happiest hour of the year
                </div>
                <div className={style.infoBlock_text}>
                    Sign up to get exclusive access to deals on drinks this holiday season.
                </div>
            </div>
        </section>
    );
}