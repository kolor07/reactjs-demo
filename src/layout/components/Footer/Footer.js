import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer({ style }) {
    return (
        <div className={style}>
            <div className={cx('footer_top')}>
                <div className="container">
                    <div className={cx('row')}>
                        <div className={cx('col-lg-3 col-md-4 col-sm-6')}>
                            <div className={cx('footer_list')}>
                                <div className={cx('footer_list_title')}>
                                    <h3>about us</h3>
                                </div>
                                <a href="/" className={cx('footer_logo')}>
                                    <img
                                        src="https://htmldemo.net/classico/classico/assets/img/logo/logo.png"
                                        alt="logo"
                                    />
                                </a>
                                <p className={cx('footer_desc')}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elitse do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                        <div className={cx('col-lg-3 col-md-4 col-sm-6')}>
                            <div className={cx('footer_list')}>
                                <div className={cx('footer_list_title')}>
                                    <h3>information</h3>
                                </div>
                                <div className={cx('footer_list_menu')}>
                                    <ul>
                                        <li>
                                            <a href="#">theme features</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Other Projects</a>
                                        </li>
                                        <li>
                                            <a href="#">Typography</a>
                                        </li>
                                        <li>
                                            <a href="#">One Click To Join Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Follow Us On Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3 col-md-4 col-sm-6')}>
                            <div className={cx('footer_list')}>
                                <div className={cx('footer_list_title')}>
                                    <h3>keys features</h3>
                                </div>
                                <div className={cx('footer_contact_list')}>
                                    <div className={cx('contact_list_item')}>
                                        <div className={cx('contact_item_icon')}>
                                            <span>1</span>
                                        </div>
                                        <div className={cx('contact_item_text')}>
                                            <p>Choose your wishlist products </p>
                                        </div>
                                    </div>
                                    <div className={cx('contact_list_item')}>
                                        <div className={cx('contact_item_icon')}>
                                            <span>2</span>
                                        </div>
                                        <div className={cx('contact_item_text')}>
                                            <p>Call us for more info about our products.</p>
                                        </div>
                                    </div>
                                    <div className={cx('contact_list_item')}>
                                        <div className={cx('contact_item_icon')}>
                                            <span>2</span>
                                        </div>
                                        <div className={cx('contact_item_text')}>
                                            <p>write what the fuck u want to</p>
                                        </div>
                                    </div>
                                    <div className={cx('contact_list_item')}>
                                        <div className={cx('contact_item_icon')}>
                                            <span>4</span>
                                        </div>
                                        <div className={cx('contact_item_text')}>
                                            <p>We will send this product in 2 days.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3 col-md-4 col-sm-6')}>
                            <div className={cx('footer_list')}>
                                <div className={cx('footer_list_title')}>
                                    <h3>contact us</h3>
                                </div>
                                <div className={cx('footer_contact_list')}>
                                    <div className={cx('contact_list_item')}>
                                        <div className={cx('contact_item_icon')}>
                                            <span>
                                                <FontAwesomeIcon icon={faPhone} />
                                            </span>
                                        </div>
                                        <div className={cx('contact_item_text')}>
                                            <p>
                                                Call Us <a href="tel:+001666951">+001 666 951</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('contact_list_item')}>
                                        <div className={cx('contact_item_icon')}>
                                            <span>
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </span>
                                        </div>
                                        <div className={cx('contact_item_text')}>
                                            <p>
                                                <a href="mailto:http://1.envato.market/9LbxW">has@posthemes.com</a>
                                            </p>{' '}
                                            <p>
                                                <a href="mailto:http://1.envato.market/9LbxW">has@posthemes.com</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('contact_list_item')}>
                                        <div className={cx('contact_item_icon')}>
                                            <span>
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </span>
                                        </div>
                                        <div className={cx('contact_item_text')}>
                                            <p>
                                                <a href="http://youtube.com/holetex">Youtube</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('contact_list_item')}>
                                        <div className={cx('contact_item_icon')}>
                                            <span>
                                                <FontAwesomeIcon icon={faTiktok} />
                                            </span>
                                        </div>
                                        <div className={cx('contact_item_text')}>
                                            <p>
                                                <a href="http://youtube.com/holetex">Top Top</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
