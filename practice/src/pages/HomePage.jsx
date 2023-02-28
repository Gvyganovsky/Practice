import style from '../scss/PC.module.scss';

import { LogoBlock } from '../components/HeaderBlock/logoBlock';
import { Products } from '../components/HeaderBlock/products';
import { Bicycles } from '../components/ProductsBlock/bicycles';
import { Miles } from '../components/ProductsBlock/miles';
import { PackingList } from '../components/ProductsBlock/packing list';
import { Accessories } from '../components/ProductsBlock/accessories';
import { ImpressiveFeatures } from '../components/IconsBlock/Impressive features';
import { KickMAX } from '../components/IconsBlock/KickMAX';
import { Battery } from '../components/PhotoTextBlock/Battery';
import { DualBraking } from '../components/PhotoTextBlock/DualBraking';
import { LedLight } from '../components/PhotoTextBlock/LedLight';
import { FoldingMechanism } from '../components/PhotoTextBlock/FoldingMechanism';
import { PowerRecycle } from '../components/PhotoTextBlock/PowerRecycle';
import { Easy } from '../components/PhotoTextBlock/Easy';
import { RidingModes } from '../components/PhotoTextBlock/RidingModes';
import { Downloadmanual } from '../components/OtherBlock/Downloadmanual';

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
            <FoldingMechanism />
            <PowerRecycle />
            <Easy />
            <RidingModes />
            <Downloadmanual />
        </section>
    );
}

export { HomePage };