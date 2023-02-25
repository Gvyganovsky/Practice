import { Outlet } from 'react-router-dom';
import { Header } from '../componentsPC/header'

function Layout() {
    return (
        <section>
            <Header />
            <Outlet />
        </section>
    );
}

export { Layout };