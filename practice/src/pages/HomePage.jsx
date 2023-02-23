import style from '../scss/HomePage.module.scss';
import { InfoBlock } from '../components/InfoBlock';
import { Product } from '../components/product';
import MermaidFreetoedit from '../assets/coffe/Mermaid Freetoedit.png';
import CaramelFrappuccino from '../assets/coffe/Caramel Frappuccino.png';
import Frappuccino from '../assets/coffe/Frappuccino.png';

function HomePage() {
    return (
        <section className={style.HomePage}>
            <InfoBlock />
            <div className={style.Products}>
                <Product id='Cf1' img={MermaidFreetoedit} name='Mermaid Freetoedit' Fat='29%' Saturated='65%' gramm='0.5g' />
                <Product id='Cf2' img={CaramelFrappuccino} name='Caramel Frappuccino' Fat='39%' Saturated='85%' gramm='0.8g' />
                <Product id='Cf3' img={Frappuccino} name='Frappuccino' Fat='23%' Saturated='45%' gramm='0.3g' />
                <Product id='Cf1' img={MermaidFreetoedit} name='Mermaid Freetoedit' Fat='29%' Saturated='65%' gramm='0.5g' />
            </div>

        </section>

    );
}

export { HomePage };
