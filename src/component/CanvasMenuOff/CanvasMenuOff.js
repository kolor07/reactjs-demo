import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './CanvasMenuOff.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showCanvasMenu, selectIsDisplayed } from '../HeaderMiddle/HeaderMiddleSlice';
const cx = classNames.bind(styles);

function CanvasMenuOff() {
    let isDisplay = useSelector(selectIsDisplayed);
    const dispatch = useDispatch();
    const handleCloseCanvasMenu = () => {
        dispatch(showCanvasMenu(false));
        isDisplay = false;
    };
    return (
        <>
            <div
                className={cx('off_canvars_overlay', isDisplay ? 'displayNoneAnimation' : 'noneDisplayNoneAnimation')}
            ></div>
            <div className={cx('offcanvas_menu', isDisplay ? 'display' : 'noneDisplay')}>
                <div className="container">
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            <div className={cx('offcanvas_menu_wrapper')}>
                                <div className={cx('canvas_close')}>
                                    <FontAwesomeIcon icon={faXmark} onClick={handleCloseCanvasMenu} />
                                </div>

                                <div className={cx('header_search_box')}>
                                    <input type="text" placeholder="search" className={cx('search')} />
                                    <button>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                                    </button>
                                </div>
                                <div className={cx('main_menu')}>
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="index.html">
                                                    home
                                                    <FontAwesomeIcon
                                                        icon={faAngleDown}
                                                        className={cx('main_menu_arrow_down')}
                                                    />
                                                </a>
                                            </li>
                                            <li className={cx('mega_items')}>
                                                <a href="/">
                                                    Shop
                                                    <FontAwesomeIcon
                                                        icon={faAngleDown}
                                                        className={cx('main_menu_arrow_down')}
                                                    />
                                                </a>
                                                <div className={cx('sub_menu_wrapper')}>
                                                    <ul className={cx('sub_menu')}>
                                                        <li>
                                                            <a href="/">
                                                                Phan bon
                                                                <FontAwesomeIcon
                                                                    icon={faAngleDown}
                                                                    className={cx('main_menu_arrow_down')}
                                                                />
                                                            </a>
                                                            <ul className={cx('sub_menu')}>
                                                                <li>
                                                                    <a href="/">phan bon la</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">phan bon re</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">phan bon canh</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">phan bon goc</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>

                                            <li>
                                                <a href="/"> About us</a>
                                            </li>

                                            <li>
                                                <a href="/"> advisory</a>
                                            </li>
                                            <li>
                                                <a href="/"> blog</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CanvasMenuOff;
