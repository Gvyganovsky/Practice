import style from '../scss/PC.module.scss';

import { LogoBlock } from '../components/HeaderBlock/logoBlock';
import { Products } from '../components/HeaderBlock/products';
import { Bicycles } from '../components/ProductsBlock/bicycles';
import { Miles } from '../components/ProductsBlock/miles';
import { PackingList } from '../components/PackingList/PackingList';
import { Accessories } from '../components/Accessories/Accessories';
import { ImpressiveFeatures } from '../components/ImpressiveFeatures/ImpressiveFeatures';
import { KickMAX } from '../components/KickMAX/KickMAX';
import { Battery } from '../components/Battery/Battery';
import { DualBraking } from '../components/DualBraking/DualBraking';
import { LedLight } from '../components/Ledlight/LedLight';
import { FoldingMechanism } from '../components/FoldingMechanism/FoldingMechanism';
import { RegenerativeBrake } from '../components/RegenerativeBrake/RegenerativeBrake';
import { EasyCord } from '../components/EasyCord/EasyCord ';
import { RidingModes } from '../components/RidingModes/RidingModes';
import { Manual } from '../components/Manual/Manual';

function HomePage() {
    return (
        <section className={style.homePage}>
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
            <RegenerativeBrake />
            <EasyCord />
            <RidingModes />
            <Manual />
        </section>
    );
}

export { HomePage };