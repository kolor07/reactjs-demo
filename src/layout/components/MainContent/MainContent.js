import classNames from 'classnames/bind';
import styles from './MainContent.module.scss';
import HomeBanner from '../../../component/HomeBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MainContent({ style }) {
    return (
        <div className={style}>
            <HomeBanner />
            <div className={cx('home_product')}>
                <div className="container">
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            <div className={cx('product_tab_btn')}>
                                <ul className={cx('nav')} role="">
                                    <li>
                                        <a href="/" className={cx('active')}>
                                            New Arrival
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">Bestseller</a>
                                    </li>
                                    <li>
                                        <a href="/">Featured Products</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('home_product_carousel')}>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primary_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product5.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                        </div>
                                        <figcaption className={cx('product_content')}>
                                            <h4 className={cx('product_name')}>
                                                <a href="product-details.html">Primis In Faucibus</a>
                                            </h4>
                                            <div className={cx('product_rating')}>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={cx('price_box')}>
                                                <span className={cx('old_price')}>$73.00</span>
                                                <span className={cx('current_price')}>$67.00</span>
                                            </div>
                                            <div className={cx('add_to_cart')}>
                                                <a href="cart.html" title="Add to cart">
                                                    <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add to
                                                    cart
                                                </a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primary_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product5.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                        </div>
                                        <figcaption className={cx('product_content')}>
                                            <h4 className={cx('product_name')}>
                                                <a href="product-details.html">Primis In Faucibus</a>
                                            </h4>
                                            <div className={cx('product_rating')}>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className={cx('search-icon')}
                                                            />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={cx('price_box')}>
                                                <span className={cx('old_price')}>$73.00</span>
                                                <span className={cx('current_price')}>$67.00</span>
                                            </div>
                                            <div className={cx('add_to_cart')}>
                                                <a href="cart.html" title="Add to cart">
                                                    <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add to
                                                    cart
                                                </a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                            <div>
                                <article className={cx('product_single_item')}>
                                    <figure>
                                        <div className={cx('product_thumb')}>
                                            <a href="/" className={cx('primar_image')}>
                                                <img
                                                    src="https://htmldemo.net/classico/classico/assets/img/product/product6.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className={cx('label_product')}>
                                                <span className={cx('label_sale')}>Sale</span>
                                            </div>
                                            <figcaption className={cx('product_content')}>
                                                <h4 className={cx('product_name')}>
                                                    <a href="product-details.html">Primis In Faucibus</a>
                                                </h4>
                                                <div className={cx('product_rating')}>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <FontAwesomeIcon
                                                                    icon={faStar}
                                                                    className={cx('search-icon')}
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={cx('price_box')}>
                                                    <span className={cx('old_price')}>$73.00</span>
                                                    <span className={cx('current_price')}>$67.00</span>
                                                </div>
                                                <div className={cx('add_to_cart')}>
                                                    <a href="cart.html" title="Add to cart">
                                                        <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" /> Add
                                                        to cart
                                                    </a>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
