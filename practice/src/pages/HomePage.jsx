import style from '../scss/HomePage.module.scss';
import { LogoBlock } from '../componentsPC/logoBlock';
import { Products } from '../componentsPC/products';
import { Bicycles } from '../componentsPC/bicycles';
import { Miles } from '../componentsPC/miles';
import { PackingList } from '../componentsPC/packing list';
import { Accessories } from '../componentsPC/accessories';
import { ImpressiveFeatures } from '../componentsPC/Impressive features';
import { KickMAX } from '../componentsPC/KickMAX';
import { Battery } from '../componentsPC/Battery';
import { DualBraking } from '../componentsPC/DualBraking';
import { LedLight } from '../componentsPC/LedLight';

function HomePage() {
    return (
        <section className={style.HomePage}>
            <LogoBlock />
            <Products />
            <Bicycles />
            <Miles />
            <PackingList />
            <Accessories />
            <ImpressiveFeatures />
            <KickMAX />
            <Battery />
            <DualBraking />
            <LedLight />
        </section>
    );
}

export { HomePage };