import style from '../../scss/PC.module.scss';
import DM from '../../assets/Photo/DM.png'
import { ReactComponent as ToolsGray } from '../../assets/icons/ToolsGray.svg';
import { ReactComponent as Charging } from '../../assets/icons/Charging.svg';
import { ReactComponent as Wheel } from '../../assets/icons/Wheel.svg';
import { ReactComponent as Page } from '../../assets/icons/page.svg';

export const Downloadmanual = () => {
    return (
        <section className={style.downloadmanual}>
            <div className={style.downloadmanual_block}>
                <img src={DM} alt="DM" className={style.downloadmanual_img} />

                <div className={style.downloadmanual_textBlock}>
                    <div className={style.downloadmanual_title}>DOWNLOAD MANUAL</div>

                    <div className={style.downloadmanual_iconsBlocks}>
                        <div className={style.downloadmanual_iconBlock}>
                            <ToolsGray alt="ToolsGray" className={style.downloadmanual_icon} />
                            <div className={style.downloadmanual_icon_text}>
                                Assembly and preparation for the trip
                            </div>
                        </div>

                        <div className={style.downloadmanual_iconBlock}>
                            <Charging alt="Charging" className={style.downloadmanual_icon} />
                            <div className={style.downloadmanual_icon_text}>
                                How to charge a scooter
                            </div>
                        </div>

                        <div className={style.downloadmanual_iconBlock}>
                            <Wheel alt="Wheel" className={style.downloadmanual_icon} />
                            <div className={style.downloadmanual_icon_text}>
                                How to ride properly
                            </div>
                        </div>
                    </div>

                    <button className={style.downloadmanual_button}>
                        Download manual
                        <Page alt="Page" className={style.downloadmanual_iconButton} />
                    </button>
                </div>
            </div>
        </section>
    );
}
