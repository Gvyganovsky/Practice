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