import { NavLink } from 'react-router-dom';

// IMAGE
import logo from '../assets/logo-tc+en.png';

const Nav = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => `link link-hover ${isActive ? 'font-semibold' : ''}`}
        >
          首頁
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => `link link-hover ${isActive ? 'font-semibold' : ''}`}
        >
          關於蠻自然
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/works"
          className={({ isActive }) => `link link-hover ${isActive ? 'font-semibold' : ''}`}
        >
          作品介紹
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => `link link-hover ${isActive ? 'font-semibold' : ''}`}
        >
          聯繫我們
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="navbar bg-base-100 flex justify-between px-8 md:px-8">
        {/* 左側：LOGO */}
        <div className="nav">
          <NavLink to="/" className="btn btn-link">
            <img src={logo} alt="蠻自然logo" className="h-8 md:h-10 object-contain" />
          </NavLink>
        </div>

        {/* 右側：手機版 dropdown + 桌機版水平選單*/}
        <div className="flex-none ">
          {/* 手機版：漢堡選單（lg 以下才顯示）*/}
          <div className="dropdown dropdown-end lg:hidden">

            <div className="collapse-title font-semibold">
              <div tabIndex={0} className="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-36 w-36 stroke-current"
                >
                  {' '}
                  <path strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>{' '}
                </svg>
              </div>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-3 gap-5 w-48 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className="link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  首頁
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  關於蠻自然
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/works"
                  className="link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  作品介紹
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="link"
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  聯繫我們
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 桌機版：水平選單（lg 以上才顯示）*/}
          <ul className="menu menu-horizontal hidden gap-10 px-1 lg:flex">{navItems}</ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

