import style from '../../scss/PC.module.scss';

import NES from '../../assets/Accessories/NES.png';
import ER from '../../assets/Accessories/ER.png';
import SPGS from '../../assets/Accessories/SPGS.png';
import NLB from '../../assets/Accessories/NLB.png';
import SEB from '../../assets/Accessories/SEB.png';
import SC from '../../assets/Accessories/SC.png';
import SSB from '../../assets/Accessories/SSB.png';
import SPH from '../../assets/Accessories/SPH.png';
import PH from '../../assets/Accessories/PH.png';
import humans from '../../assets/Photo/humans.jpg';

export const Accessoriess = (props) => {
    return (
        <div className={style.accessories_block} id={props.id}>
            <img src={props.img} alt={props.img} className={style.accessories_img} />
            <div className={style.accessories_name}>{props.name}</div>
            <div className={style.accessories_text}>{props.text}</div>
            <div className={style.accessories_price}>{props.price}</div>
            <button className={style.accessories_button}>ADD TO CART</button>
        </div>
    );
}

export const Accessories = () => {
    return (
        <section>
            <div className={style.Accessories}>
                <div className={style.accessories_title}>Accessories</div>
                <div className={style.accessoriess_blocks}>
                    <Accessoriess id='ER' img={ER} name='Extension Rod'
                        text='The Extension Rod helps you to easily maneuver your scooter, so you no longer
                    need to bend over and push it, making it easier to take with you anywhere.'
                        price='$29.99'
                    />

                    <Accessoriess id='NES' img={NES} name='NineboT Engine Speaker'
                        text='The built-in engine sound simulation system can simulate the realistic engine 
                    roar based on the vehicle s accelerator, brake, speed, and other signals'
                        price='$149.99'
                    />

                    <Accessoriess id='SPGS' img={SPGS} name='Segway Protective Gear Set'
                        text='The curved, streamlined design of the helmet shell, coupled with the thick,
                    high-quality fabrics create a helmet that is stylish, protective and comfortable to wear.'
                        price='$29.99 '
                    />

                    <Accessoriess id='NLB' img={NLB} name='Ninebot Leisure Backpack'
                        text='The Ninebot leisure backpack adopts a stylish gray-yellow color contrast, adding a
                     trendy accessory to your wardrobe.'
                        price='$69.99'
                    />

                    <Accessoriess id='SEB' img={SEB} name='Segway External Battery'
                        text=' It is easy to install and increases the range of the ES1, ES2 & E22 to 27.9, 28 and
                    27 miles respectively and It also increases the speed'
                        price='$249.99'
                    />

                    <Accessoriess id='SC' img={SC} name='Segway Charger'
                        text='Whether at home, the office, or on your KickScooter journey, this Ninebot KickScooter
                    by Segway Charger is designed to provide a safe and stable charge anytime, anywhere.'
                        price='$79.99'
                    />

                    <Accessoriess id='SSB' img={SSB} name='Segway Scooter Bag'
                        text='Tough EVA material, suitable for the entire Ninebot KickScooter by Segway line. 3L
                    capacity gives you plenty of room to carry your phone, charger, bottled water, and other
                    personal items.'
                        price='$49.99'
                    />

                    <Accessoriess id='SPH' img={SPH} name='Segway Phone Holder'
                        text='The dual screw, non-slip design offers ultimate security and versatility. The phone
                     holder is applicable to multiple vehicle series.'
                        price='$29.99'
                    />

                    <Accessoriess id='PH' img={PH} name='Segway Phone Holder'
                        text='This scooter seat is designed to work with the MAX. It offers high quality, comfort
                    and safety that is in line with the MAX KickScooter.'
                        price='$119.99'
                    />
                </div>
                <button className={style.SeeMore}>SEE MORE</button>
            </div>
            <img src={humans} alt="humans" className={style.humans} />
        </section>
    );
}
