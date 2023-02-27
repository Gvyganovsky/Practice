import style from '../scss/PC.module.scss';
import { ReactComponent as Circle } from '../assets/ImpressiveFeatures/Circle.svg';
import { ReactComponent as LED } from '../assets/ImpressiveFeatures/LED.svg';
import { ReactComponent as Mph } from '../assets/ImpressiveFeatures/18.6 mph.svg';
import { ReactComponent as Miles } from '../assets/ImpressiveFeatures/40.4 Miles.svg';
import { ReactComponent as Corner } from '../assets/ImpressiveFeatures/20%.svg';
import { ReactComponent as IPX5 } from '../assets/ImpressiveFeatures/IPX5.svg';
import { ReactComponent as H } from '../assets/ImpressiveFeatures/6H.svg';
import { ReactComponent as Wh } from '../assets/ImpressiveFeatures/551Wh.svg';

export const ImpressiveFeatures = () => {
    return (
        <section className={style.impressiveFeatures}>
            <div className={style.impressiveFeatures_title}>IMPRESSIVE FEATURES</div>
            <div className={style.impressiveFeatures_blocks}>
                <div className={style.impressiveFeatures_block}>
                    <Circle alt="Circle" className={style.impressiveFeatures_img} />
                    <div className={style.impressiveFeatures_name}>10”</div>
                    <div className={style.impressiveFeatures_text}>Pneumatic Tires</div>
                </div>

                <div className={style.impressiveFeatures_block}>
                    <LED alt="LED" className={style.impressiveFeatures_img} />
                    <div className={style.impressiveFeatures_name}>LED</div>
                    <div className={style.impressiveFeatures_text}>Front LED Lights</div>
                </div>

                <div className={style.impressiveFeatures_block}>
                    <Mph alt="Mph" className={style.impressiveFeatures_img} />
                    <div className={style.impressiveFeatures_name}>18.6 mph</div>
                    <div className={style.impressiveFeatures_text}>Max Speed</div>
                </div>

                <div className={style.impressiveFeatures_block}>
                    <Miles alt="Miles" className={style.impressiveFeatures_img} />
                    <div className={style.impressiveFeatures_name}>40.4 Miles</div>
                    <div className={style.impressiveFeatures_text}>Max Range</div>
                </div>

                <div className={style.impressiveFeatures_block}>
                    <Corner alt="Corner" className={style.impressiveFeatures_img} />
                    <div className={style.impressiveFeatures_name}>20%</div>
                    <div className={style.impressiveFeatures_text}>Hill Grade</div>
                </div>

                <div className={style.impressiveFeatures_block}>
                    <IPX5 alt="IPX5" className={style.impressiveFeatures_img} />
                    <div className={style.impressiveFeatures_name}>IPX5</div>
                    <div className={style.impressiveFeatures_text}>Water-Resistant</div>
                </div>

                <div className={style.impressiveFeatures_block}>
                    <H alt="H" className={style.impressiveFeatures_img} />
                    <div className={style.impressiveFeatures_name}>6H</div>
                    <div className={style.impressiveFeatures_text}>Fast Charging</div>
                </div>

                <div className={style.impressiveFeatures_block}>
                    <Wh alt="Wh" className={style.impressiveFeatures_img} />
                    <div className={style.impressiveFeatures_name}>551Wh</div>
                    <div className={style.impressiveFeatures_text}>Battery</div>
                </div>
            </div>
        </section>
    );
}
