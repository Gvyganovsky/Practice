import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

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