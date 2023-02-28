import { Outlet } from 'react-router-dom';
import { Header } from '../components/HeaderBlock/header';
import { Footer } from '../components/FooterBlock/footer';

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