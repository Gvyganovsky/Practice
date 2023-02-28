import style from '../../scss/PC.module.scss';
import logoFooter from '../../assets/icons/logoFooter.png'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <img src={logoFooter} alt="logoFooter" className={style.footer_logo} />
            <div className={style.footer_textBlock}>
                <div className={style.footer_text}>+1 (888) 777-77-77</div>
                <div className={style.footer_text}>2637 Fairfax Ave Culver City, CA 90232</div>
                <div className={style.footer_text}>Segway  California © 2017</div>
            </div>
        </footer>
    );
}
