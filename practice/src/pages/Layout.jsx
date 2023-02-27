import { Outlet } from 'react-router-dom';
import { Header, HeaderAdapt } from '../components/header';
import { Footer } from '../components/footer';

function Layout() {
    return (
        <section>
            <Header /> <HeaderAdapt />
            <Outlet />
            <Footer />
        </section>
    );
}

export { Layout };