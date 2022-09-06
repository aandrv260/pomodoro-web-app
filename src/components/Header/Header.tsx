import { addCSSClass } from '../../assets/ts/functions';
import LogoObject from '../../types/logo';
import scss from './Header.module.scss';

type HeaderProps = {
  logo?: LogoObject;
  heading?: string;
};

const HeaderMenu = () => {
  return (
    <ul className={addCSSClass(scss, 'header__menu')}>
      <li>
        <a className={addCSSClass(scss, 'header__link')} href="#">
          Settings
        </a>
      </li>
    </ul>
  );
};

const Header: React.FC<HeaderProps> = props => {
  const { logo, heading } = props;

  const HeaderLogo = () => {
    return logo ? (
      <div className={addCSSClass(scss, 'header__logo-wrapper')}>
        <img className={addCSSClass(scss, 'header__logo-img')} src={logo.src} alt={logo.alt} />
      </div>
    ) : (
      <h1 className={addCSSClass(scss, 'header__heading')}>{heading}</h1>
    );
  };

  return (
    <header className={addCSSClass(scss, 'header')}>
      <HeaderLogo />

      <HeaderMenu />
    </header>
  );
};

export default Header;
