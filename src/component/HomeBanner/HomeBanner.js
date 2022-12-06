import classNames from 'classnames/bind';
import styles from './HomeBanner.module.scss';

const cx = classNames.bind(styles);

function HomeBanner() {
    return (
        <div className={cx('home-banner')}>
            <div className="container">
                <div className={cx('row g-md-5')}>
                    <div className={cx('col-lg-4 col-md-4 col-sm-6')}>
                        <div className={cx('single_banner')}>
                            <div className={cx('home_banner_style1', 'one')}>
                                <h3>Boost</h3>
                                <div className={cx('banner_text_img')}>
                                    <p>new arrival</p>
                                    <img
                                        src="https://htmldemo.net/classico/classico/assets/img/bg/banner_static1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-lg-4 col-md-4 col-sm-6')}>
                        <div className={cx('single_banner')}>
                            <div className={cx('home_banner_style1', 'two')}>
                                <h3>T-shirt</h3>
                                <div
                                    className={cx('banner_text_img d-flex  justify-content-center align-items-center')}
                                >
                                    <p>new arrival</p>
                                    <img
                                        src="https://htmldemo.net/classico/classico/assets/img/bg/banner_static2.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-lg-4 col-md-4 col-sm-6')}>
                        <div className={cx('single_banner')}>
                            <div className={cx('home_banner_style1', 'three')}>
                                <h3>JEWELRY</h3>
                                <div className={cx('banner_text_img')}>
                                    <p>new arrival</p>
                                    <img
                                        src="https://htmldemo.net/classico/classico/assets/img/bg/banner_static3.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;
