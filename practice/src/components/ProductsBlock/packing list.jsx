import style from '../../scss/PC.module.scss';
import Video from '../../assets/Photo/Video.png';
import Pc from '../../assets/Photo/Pc.png'

export const PackingList = () => {
    return (
        <section className={style.packing_list}>
            <div className={style.packing_list_flex}>
                <div className={style.packingList_img}>
                    <div className={style.packingList_title}>Packing List</div>
                    <img src={Video} alt="video" className={style.packingList_imgVideo} />
                </div>
                <div className={style.packingList_circleBlock}>
                    <img src={Pc} alt="Pc" className={style.packingList_imgPc} />
                    <div className={style.circle}></div>
                </div>
            </div>
        </section>
    );
}