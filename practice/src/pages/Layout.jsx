import { Outlet } from 'react-router-dom';
import { Header } from '../componentsPC/header';
import { Footer } from '../componentsPC/footer';

function Layout() {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
}

export { Layout };