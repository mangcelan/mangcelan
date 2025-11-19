import { NavLink } from 'react-router-dom';

// IMAGE
import logo from '../assets/logo-tc+en.png';

const Nav = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `link link-hover ${isActive ? 'font-semibold' : ''}`
          }
        >
          首頁
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `link link-hover ${isActive ? 'font-semibold' : ''}`
          }
        >
          關於蠻自然
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            `link link-hover ${isActive ? 'font-semibold' : ''}`
          }
        >
          作品介紹
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `link link-hover ${isActive ? 'font-semibold' : ''}`
          }
        >
          聯繫我們
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="navbar bg-base-100 px-4 md:px-8">
        {/* 左側：LOGO */}
        <div className="nav">
          <NavLink to="/" className="btn btn-ghost">
            <img src={logo} alt="蠻自然logo" className="h-8 md:h-10 object-contain" />
          </NavLink>
        </div>

        {/* 右側：手機版 dropdown + 桌機版水平選單 */}
        <div className="flex-none">
          {/* 手機版：漢堡選單（lg 以下才顯示） */}
          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{' '}
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm hidden dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lg:flex"
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

          {/* 桌機版：水平選單（lg 以上才顯示） */}
          <ul className="menu menu-horizontal hidden gap-2 px-1 lg:flex">
            {navItems}
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

