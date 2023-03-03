import style from './LogoBlock.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as Segway } from '../../assets/icons/Segway.svg';
import { ReactComponent as Director } from '../../assets/icons/Director.svg';

export const LogoBlock = () => {
    return (
        <section className={style.logoBlock}>
            <div className={style.logo_logoBlock_first}>
                <Logo alt="Logo" className={style.logo} />
                <div className={style.logo_textBlock}>
                    <Segway alt="Segway" className={style.logo_title} />
                    <div className={style.logo_text}>CALIFORNIA</div>
                </div>
            </div>

            <div className={style.directorBlock}>
                <Director alt="Director" className={style.director} />
                <div className={style.director_textBlock}>
                    <div className={style.director_title}>
                        JOHN SMITH
                    </div>
                    <div className={style.director_text}>
                        Ask a question
                        to the director
                    </div>
                </div> 
            </div>
        </section>
    );
}
