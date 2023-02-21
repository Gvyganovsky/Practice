import { Outlet } from 'react-router-dom';
import { Header } from '../components/header'

function Layout() {
    return (
        <section>
            <Header />

            <Outlet />
        </section>
    );
}

export { Layout };
