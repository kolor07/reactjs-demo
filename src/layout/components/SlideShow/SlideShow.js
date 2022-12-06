import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow({ style }) {
    return (
        <div className={style}>
            <div className="container">
                {/* <div className={cx('row')}>  */}
                <div className={cx('row align-items-center')}>
                    <div className={cx('single-slide', 'd-flex', 'align-items-center')}>
                        <div className={cx('col-lg-6 col-md-7')}>
                            <div className={cx('slide-content')}>
                                <h2>Big sale up to 20% off </h2>
                                <h1>NEW SALE</h1>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Provident, magni quae nisi minima ut doloribus
                                    natus eos, dolores aliquam ducimus.
                                </p>
                                <a href="shop.html" className={cx('btn-default')}>
                                    shop now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideShow;
