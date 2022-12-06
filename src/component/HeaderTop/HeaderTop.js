import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <div className={cx('header_top')}>
            <div className="container">
                <div className={cx('row align-items-center')}>
                    <div className={cx('col-lg-6 col-md-12')}>
                        <div className={cx('header_contact_us')}>
                            <ul>
                                <li>
                                    <span>
                                        {/* <i class="fa fa-phone"></i> */}
                                        <FontAwesomeIcon icon={faPhone} beat className={cx('phone_icon')} />
                                        Call us now:
                                    </span>
                                    <a href="tel:(+800)123456789"> (+800)123456789</a>
                                </li>

                                <li>
                                    <span>
                                        <FontAwesomeIcon icon={faEnvelope} beat className={cx('email_icon')} />
                                        Email:{' '}
                                    </span>{' '}
                                    <a href="mailto:http://1.envato.market/9LbxW">
                                        <i class="icon-envelope"></i> has@posthemes.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-lg-6 col-md-12')}>
                        <div className={cx('header_account_area')}>
                            <ul>
                                <li>
                                    <a href="/">WISHLIST</a>
                                </li>
                                <li>
                                    <a href="/">CHECK OUT</a>
                                </li>
                                <li>
                                    <a href="/">SIGN IN</a>
                                </li>
                                <li className={cx('language_currency')}>
                                    <a href="/">ENGLISH</a>
                                    <FontAwesomeIcon icon={faChevronDown} className={cx('language_currency_icon')} />
                                    <ul className={cx('dropdown_language')}>
                                        <li>
                                            <a href="/"> English</a>
                                        </li>
                                        <li>
                                            <a href="/"> VietNamese</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
