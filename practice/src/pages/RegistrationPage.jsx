import { useEffect } from 'react'
import styles from '../scss/Registration.module.scss';
import { Link, useLocation } from "react-router-dom"
import { Registration } from "../components/Authorization/Registration.jsx"
import { useAuth } from '../hooks/use-auth'
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        
        if (isAuth) {
            navigate("../ProfilePage")
        }
    }, [])

    return isAuth ? (
        navigate('../ProfilePage')
    ) : (
        <section className={styles.section_block}>
            <div className={styles.block_reg_log}>
                <div className={styles.title_reg_log}>Регистрация</div>
                <div className={styles.text_reg_log}>У вас нет аккаунта. Давайте создадим новый!</div>
                <Registration />
                <div className={styles.block_or}>
                    <div className={styles.line}></div>
                    <div className={styles.or_text}>OR</div>
                    <div className={styles.line}></div>
                </div>
                <Link to="/LoginPage"><p className={styles.title_log}>У меня уже есть аккаунт</p></Link>
            </div>
        </section>
    )
}

export { RegistrationPage }