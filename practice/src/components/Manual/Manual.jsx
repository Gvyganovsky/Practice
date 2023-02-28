import style from './Manual.module.scss';
import DM from '../../assets/Photo/DM.png'
import { ReactComponent as ToolsGray } from '../../assets/icons/ToolsGray.svg';
import { ReactComponent as Charging } from '../../assets/icons/Charging.svg';
import { ReactComponent as Wheel } from '../../assets/icons/Wheel.svg';
import { ReactComponent as Page } from '../../assets/icons/page.svg';

export const Manual = () => {
    return (
        <section className={style.manual}>
            <div className={style.manual_block}>
                <img src={DM} alt="DM" className={style.manual_img} />

                <div className={style.manual_textBlock}>
                    <div className={style.manual_title}>DOWNLOAD MANUAL</div>

                    <div className={style.manual_iconsBlocks}>
                        <div className={style.manual_iconBlock}>
                            <ToolsGray alt="ToolsGray" className={style.manual_icon} />
                            <div className={style.manual_icon_text}>
                                Assembly and preparation for the trip
                            </div>
                        </div>

                        <div className={style.manual_iconBlock}>
                            <Charging alt="Charging" className={style.manual_icon} />
                            <div className={style.manual_icon_text}>
                                How to charge a scooter
                            </div>
                        </div>

                        <div className={style.manual_iconBlock}>
                            <Wheel alt="Wheel" className={style.manual_icon} />
                            <div className={style.manual_icon_text}>
                                How to ride properly
                            </div>
                        </div>
                    </div>

                    <button className={style.manual_button}>
                        Download manual
                        <Page alt="Page" className={style.manual_iconButton} />
                    </button>
                </div>
            </div>
        </section>
    );
}
