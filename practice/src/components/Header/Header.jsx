import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import User from '../../assets/icons/User.png'

export const Header = () => {
    return (
        <header className={style.header} >
            <div className={style.header_nav}>
                <a href="/" className={style.header_text}>Shop</a>
            </div>
            <div className={style.header_icons}>
                <Link to="./RegistrationPage"><img src={User} alt="User" className={style.user_img} /></Link>
                <div className={style.header_number}>+1 (888) 888-88-88</div>
            </div>
        </header>
    );
}