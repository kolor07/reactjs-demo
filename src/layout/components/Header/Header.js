// import MainMenu from '../../../component/MainMenu';
import HeaderTop from '../../../component/HeaderTop';
import HeaderMiddle from '../../../component/HeaderMiddle';
import HeaderBottom from '../../../component/HeaderBottom';

function Header({ style }) {
    return (
        <div className={style}>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </div>
    );
}

export default Header;
