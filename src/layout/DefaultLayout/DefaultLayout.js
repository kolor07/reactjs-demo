import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import SlideShow from '../components/SlideShow';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header style={cx('header')} />
            <SlideShow style={cx('slideshow')} />
            <MainContent style={cx('main-content')} />
            <Footer style={cx('footer')} />
        </div>
    );
}

export default DefaultLayout;
