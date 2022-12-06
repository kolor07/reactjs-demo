import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderMiddle.module.scss';

import CanvasMenuOff from '../CanvasMenuOff';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { showCanvasMenu, selectIsDisplayed } from './HeaderMiddleSlice';

const cx = classNames.bind(styles);

function HeaderMiddle() {
    const [isShowCanvasMenu, setShowCanvasMenu] = useState(false);

    const dispatch = useDispatch();

    const handleShowCanvasMenu = () => {
        setShowCanvasMenu(true);
        dispatch(showCanvasMenu(true));
    };

    return (
        <>
            <CanvasMenuOff />
            <div className={cx('header_middle')}>
                <div className="container">
                    <div className={cx('row align-item-center')}>
                        <div className={cx('col-lg-4 col-md-4 col-4', 'col_canvas_menu')}>
                            <div className={cx('canvas_menu-open')}>
                                <FontAwesomeIcon icon={faBars} onClick={handleShowCanvasMenu} />
                            </div>
                        </div>
                        <div className={cx('col-lg-4 col-md-4 col-4', 'home-logo')}>
                            <div className={cx('header_logo')}>
                                <img
                                    src="https://htmldemo.net/classico/classico/assets/img/logo/logo.png"
                                    alt="logo"
                                ></img>
                            </div>
                        </div>

                        <div className={cx('col-lg-4 col-md-4 col-4', 'col_search_area')}>
                            <div className={cx('header_search_box')}>
                                <input type="text" placeholder="search" className={cx('search')} />
                                <button>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                                </button>
                            </div>
                        </div>
                        <div className={cx('col-lg-4 col-md-4 col-4')}>
                            <div className={cx('mini_cart_wrapper')}>
                                <a href="/">
                                    <FontAwesomeIcon icon={faCartShopping} className={cx('cart_icon')} />
                                    <span className={cx('cart-text')}> CART ITEM</span>
                                    <span className={cx('cart_items-count')}> 10</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderMiddle;
