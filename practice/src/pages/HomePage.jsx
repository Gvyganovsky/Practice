import style from '../scss/PC.module.scss';

import { LogoBlock } from '../components/logoBlock';
import { Products } from '../components/products';
import { Bicycles } from '../components/bicycles';
import { Miles } from '../components/miles';
import { PackingList } from '../components/packing list';
import { Accessories } from '../components/accessories';
import { ImpressiveFeatures } from '../components/Impressive features';
import { KickMAX } from '../components/KickMAX';
import { Battery } from '../components/Battery';
import { DualBraking } from '../components/DualBraking';
import { LedLight } from '../components/LedLight';
import { FoldingMechanism } from '../components/FoldingMechanism';
import { PowerRecycle } from '../components/PowerRecycle';
import { Easy } from '../components/Easy';
import { RidingModes } from '../components/RidingModes';
import { Downloadmanual } from '../components/Downloadmanual';

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