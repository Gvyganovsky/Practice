import style from '../scss/HomePage.module.scss';

export const Smartphone = () => {
    return (
        <section className={style.smartphone}>
            <div className={style.smartphone_title}>Control from your smartphone</div>
            <div className={style.smartphone_text}>
                You can easily control your Segway electric scooter with your smartphone via Bluetooth.
                Not being the key to the kickscooter, it will give a signal in case of an attempt to steal.
                Check the current speed, data on the status of the device's systems or set the speed limit
                with a few touches. And the skating training program is indispensable for beginners.
            </div>
            <div className={style.smartphone_imgBlock}>
                <div className={style.smartphone_pentagons}>
                    <div className={style.smartphone_pentagonsBlock}>
                        <img src="" alt="" />
                        <div className={style.smartphone_pentagonsText}></div>
                    </div>
                </div>
                <img src="" alt="" className={style.smartphone_img} />
            </div>
        </section>
    );
}