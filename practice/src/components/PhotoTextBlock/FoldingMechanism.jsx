import style from '../../scss/PC.module.scss';
import Folding from '../../assets/Photo/Folding.png'

export const FoldingMechanism = () => {
    return (
        <section className={style.FoldingMechanism}>
            <div className={style.FoldingMechanism_title}>One-step Folding Mechanism</div>
            <div className={style.FoldingMechanism_text}>
                Ninebot KickScooter MAX can be easily folded and carried around in 3 seconds.
            </div>
            <img src={Folding} alt="Folding" className={style.FoldingMechanism_img} />
        </section>
    );
}
