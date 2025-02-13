import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";
const initialState = {
  activeMenu: "",
  menuOpen: false,
  scrollY: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      if (state.activeMenu === action.payload) {
        return { ...state, activeMenu: "", menuOpen: !state.menuOpen };
      } else {
        return {
          ...state,
          activeMenu: action.payload,
          menuOpen: !state.menuOpen,
        };
      }
    case "HOME_ONE":
      return { ...state, activeMenu: "home-one", menuOpen: !state.menuOpen };
    case "ABOUT":
      return { ...state, activeMenu: "company", menuOpen: !state.menuOpen };
    case "PORTFOLIO":
      return { ...state, activeMenu: "job-list", menuOpen: !state.menuOpen };
    case "BLOG":
      return { ...state, activeMenu: "blog", menuOpen: !state.menuOpen };
    case "PAGES":
      return { ...state, activeMenu: "pages", menuOpen: !state.menuOpen };
    case "CONTACT":
      return { ...state, activeMenu: "contact", menuOpen: !state.menuOpen };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return { ...state };
  }
}
function Header4() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleMenu(menuName) {
    dispatch({ type: "TOGGLE", payload: menuName });
  }
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    const burger = document.querySelector(".mobile-menu-btn");

    const nav = document.querySelector(".main-menu");
    const menuClose = document.querySelector(".menu-close-btn");
    burger.addEventListener("click", () => {
      nav.classList.add("show-menu");
    });
    menuClose.addEventListener("click", () => {
      nav.classList.remove("show-menu");
    });
  });

  return (
    <>
      <header
        ref={headerRef}
        className={
          state.scrollY > 120
            ? "header-area style-5 sticky"
            : "header-area style-5"
        }
      >
        <div className="menu-area">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="/assets/images/header1-logo.svg"
                />
              </a>
            </Link>
          </div>
          <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link legacyBehavior href="/">
                  <a>
                    <img alt="image" src="/assets/images/header1-logo.svg" />
                  </a>
                </Link>
              </div>
              <div className="menu-close-btn">
                <i className="bi bi-x-lg" />
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children active">
                <a href="#" className="drop-down">
                  Home
                </a>
                <i
                  className={
                    state.activeMenu === "home-one"
                      ? "bi bi-dash active dropdown-icon"
                      : "bi bi-plus dropdown-icon"
                  }
                  onClick={() => handleMenu("home-one")}
                />
                <ul
                  className={
                    state.activeMenu === "home-one"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home One</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior className="active" href="/index2">
                      <a> Home Two</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index3">
                      <a>Home Three</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index4">
                      <a className={currentRoute === "/index4" ? "active" : ""}>
                        Home Four
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index5">
                      <a>Home Five</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/index6">
                      <a>Home Six</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Find Jobs
                </a>
                <i
                  className={
                    state.activeMenu === "job-list"
                      ? "bi bi-dash active dropdown-icon"
                      : "bi bi-plus dropdown-icon"
                  }
                  onClick={() => handleMenu("job-list")}
                />
                <ul
                  className={
                    state.activeMenu === "job-list"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
                  <li>
                    <Link legacyBehavior href="/category">
                      <a>Job Category</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-listing1">
                      <a>Job Listing</a>
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="/job-details">
                      <a>Job Details</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Pages
                </a>
                <i
                  className={
                    state.activeMenu === "pages"
                      ? "bi bi-dash active dropdown-icon"
                      : "bi bi-plus dropdown-icon"
                  }
                  onClick={() => handleMenu("pages")}
                />
                <ul
                  className={
                    state.activeMenu === "pages"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
                  <li>
                    <Link legacyBehavior href="/candidates-dashboard/dashboard">
                      <a>Candidate Dashboard</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-post">
                      <a>Post A Jobs</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/pricing-plan">
                      <a>Pricing Plan</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/error">
                      <a>Error</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/login">
                      <a>Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/register">
                      <a>Register</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Employers</a>
                <i
                  className={
                    state.activeMenu === "company"
                      ? "bi bi-dash active dropdown-icon"
                      : "bi bi-plus dropdown-icon"
                  }
                  onClick={() => handleMenu("company")}
                />
                <ul
                  className={
                    state.activeMenu === "company"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
                  <li>
                    <Link legacyBehavior href="/company-listing1">
                      <a>Company Listing</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/company-details">
                      <a>Company Details</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/company/company-dashboard">
                      <a>Company Dashboard</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <i
                  className={
                    state.activeMenu === "blog"
                      ? "bi bi-dash active dropdown-icon"
                      : "bi bi-plus dropdown-icon"
                  }
                  onClick={() => handleMenu("blog")}
                />
                <ul
                  className={
                    state.activeMenu === "blog"
                      ? "sub-menu d-block"
                      : "sub-menu"
                  }
                >
                  <li>
                    <Link legacyBehavior href="/blog-grid">
                      <a>Blog Grid</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-right-sidebar">
                      <a>Blog Right Sidebar</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-details">
                      <a>Blog Details</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
            <div className="for-mobile-menu d-lg-none d-block">
              <div className="sign-in-btn mb-25">
                <Link legacyBehavior href="/login">
                  <a className="primry-btn-1 lg-btn">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.8033 2.19669C11.3868 0.780144 9.50329 0 7.5 0C5.49671 0 3.61324 0.780144 2.19669 2.19669C0.780144 3.61324 0 5.49671 0 7.5C0 9.50329 0.780144 11.3868 2.19669 12.8033C3.61324 14.2199 5.49671 15 7.5 15C9.50329 15 11.3868 14.2199 12.8033 12.8033C14.2199 11.3868 15 9.50329 15 7.5C15 5.49671 14.2199 3.61324 12.8033 2.19669ZM3.25504 12.5771C3.50269 10.4462 5.33478 8.80096 7.5 8.80096C8.64143 8.80096 9.71478 9.24568 10.5222 10.0529C11.2042 10.7351 11.6344 11.6258 11.7451 12.5769C10.5949 13.5402 9.11407 14.1211 7.5 14.1211C5.88593 14.1211 4.40517 13.5403 3.25504 12.5771ZM7.5 7.89574C6.24401 7.89574 5.22205 6.87378 5.22205 5.61779C5.22205 4.36169 6.24401 3.33984 7.5 3.33984C8.75599 3.33984 9.77795 4.36169 9.77795 5.61779C9.77795 6.87378 8.75599 7.89574 7.5 7.89574ZM12.5015 11.834C12.2776 10.9311 11.8105 10.0985 11.1436 9.43153C10.6034 8.89137 9.96437 8.48614 9.26743 8.23219C10.1052 7.66399 10.6569 6.70406 10.6569 5.61779C10.6569 3.87714 9.24065 2.46094 7.5 2.46094C5.75935 2.46094 4.34315 3.87714 4.34315 5.61779C4.34315 6.70464 4.89521 7.66491 5.73372 8.23299C5.09251 8.46668 4.49913 8.82797 3.98861 9.30359C3.24932 9.99207 2.73594 10.8699 2.4979 11.8333C1.48979 10.6712 0.878906 9.15562 0.878906 7.5C0.878906 3.84911 3.84911 0.878906 7.5 0.878906C11.1509 0.878906 14.1211 3.84911 14.1211 7.5C14.1211 9.15596 13.51 10.6718 12.5015 11.834Z" />
                    </svg>
                    Sign In
                  </a>
                </Link>
              </div>
              <div className="post-job-btn mb-30">
                <a className="primry-btn-2 lg-btn" href="#">
                  <svg
                    width={15}
                    height={13}
                    viewBox="0 0 15 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.1367 0H4.86329C4.66914 0 4.51173 0.151188 4.51173 0.337662V1.79366H1.43168C0.642247 1.79363 0 2.41049 0 3.16868V11.6249C0 12.3831 0.642247 13 1.43168 13H13.5683C14.3578 13 15 12.3831 15 11.6249V3.16868C15 2.41049 14.3578 1.79363 13.5683 1.79363H10.4883V0.337662C10.4883 0.15116 10.3309 0 10.1367 0ZM5.21485 0.675325H9.78518V1.79366H5.21485V0.675325ZM13.5683 12.3247H1.43168C1.02996 12.3247 0.703126 12.0108 0.703126 11.625V5.31469L5.6836 7.11899V8.14608C5.6836 8.33255 5.84102 8.48374 6.03517 8.48374H8.96486C9.15901 8.48374 9.31642 8.33255 9.31642 8.14608V7.11899L14.2969 5.31472V11.625C14.2969 12.0108 13.9701 12.3247 13.5683 12.3247ZM6.38673 7.80841V6.79543H8.6133V7.80841H6.38673ZM14.2969 3.16868V4.59294L9.3108 6.39926C9.28191 6.24073 9.13821 6.1201 8.96486 6.1201H6.03517C5.86182 6.1201 5.71812 6.2407 5.68923 6.39926L0.703126 4.59297V3.16868C0.703126 2.78284 1.02993 2.46896 1.43168 2.46896H13.5683C13.9701 2.46896 14.2969 2.78284 14.2969 3.16868ZM13.4071 11.0443C13.4071 11.2308 13.2497 11.382 13.0555 11.382H10.1697C9.97558 11.382 9.81816 11.2308 9.81816 11.0443C9.81816 10.8578 9.97558 10.7067 10.1697 10.7067H13.0555C13.2497 10.7067 13.4071 10.8578 13.4071 11.0443ZM1.89337 3.67202C1.89337 3.48555 2.05079 3.33436 2.24494 3.33436H4.09064C4.28479 3.33436 4.44221 3.48555 4.44221 3.67202C4.44221 3.8585 4.28479 4.00968 4.09064 4.00968H2.24494C2.05079 4.00968 1.89337 3.8585 1.89337 3.67202Z" />
                  </svg>
                  Post Job
                </a>
              </div>
              <div className="social-area">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <ul>
              <li>
                <div className="btn-group dropdown">
                  <div
                    className="notifications-area dropdown-toggle"
                    role="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="notifacation-icon">
                      <svg
                        width={16}
                        height={18}
                        viewBox="0 0 16 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.37408 0.0465755C8.67279 0.120485 8.89683 0.247189 9.12442 0.472435C9.4907 0.834944 9.60093 1.15874 9.60093 1.89079V2.33777L9.87831 2.43983C11.5497 3.05223 12.8263 4.40723 13.3028 6.08603C13.47 6.66323 13.4806 6.81809 13.5126 8.47929C13.5446 10.2109 13.5624 10.4326 13.7651 11.2597C13.9856 12.1501 14.3874 13.0546 14.9102 13.836C15.1378 14.1773 15.344 14.4378 15.8739 15.0431C16.0872 15.2895 16.009 15.6872 15.7174 15.835C15.5823 15.9019 15.5147 15.9054 13.093 15.9054H10.6038L10.5824 16.0251C10.49 16.5143 10.0561 17.1478 9.56537 17.5068C9.34845 17.6652 8.95728 17.8517 8.67635 17.9327C8.38831 18.0136 7.68776 18.0242 7.39616 17.9502C6.50002 17.7285 5.7568 17.0528 5.48654 16.2187L5.38696 15.9054H2.90481C0.490226 15.9054 0.419104 15.9019 0.283973 15.835C0.191514 15.7893 0.116836 15.7154 0.0706072 15.6239C-0.0645256 15.3634 -0.0111828 15.1769 0.280416 14.8672C1.18722 13.9063 1.90911 12.5795 2.23627 11.2597C2.43896 10.4432 2.4603 10.2144 2.48875 8.47929C2.52075 6.81457 2.53142 6.66675 2.69856 6.08251C3.17152 4.41075 4.50861 2.99943 6.15864 2.42224L6.40045 2.33777V1.89079C6.40045 1.16226 6.51069 0.834944 6.88052 0.468916C7.27881 0.0712128 7.83711 -0.0871639 8.37408 0.0465755ZM7.75177 1.12354C7.5384 1.23265 7.46728 1.39806 7.46728 1.79929V2.1266H8.00069H8.53411V1.79225C8.53055 1.39806 8.47721 1.26432 8.26384 1.13762C8.09315 1.03555 7.93668 1.03204 7.75177 1.12354ZM7.3606 3.21764C6.84852 3.29507 6.53203 3.39362 6.06262 3.61887C4.80732 4.22774 3.95742 5.30822 3.64448 6.68435C3.59469 6.89903 3.57691 7.25098 3.55558 8.54968C3.53068 9.88708 3.51646 10.225 3.45601 10.6086C3.22842 12.0375 2.74834 13.2799 1.98023 14.4167C1.84154 14.6243 1.71708 14.8073 1.71352 14.8214C1.70641 14.839 4.53706 14.8496 8.00069 14.8496C11.4643 14.8496 14.295 14.839 14.2879 14.8214C14.2808 14.8073 14.1598 14.6243 14.0212 14.4167C13.2566 13.2834 12.7694 12.0234 12.5454 10.6121C12.4849 10.2285 12.4707 9.88357 12.4458 8.54968C12.4245 7.25098 12.4067 6.89903 12.3569 6.68435C12.1578 5.80447 11.7595 5.08297 11.1336 4.46354C10.7389 4.0764 10.3762 3.82299 9.8712 3.58367C9.09241 3.21764 8.20695 3.08742 7.3606 3.21764ZM6.50713 15.9265C6.50713 16.0145 6.76673 16.3982 6.91609 16.5319C7.5384 17.095 8.44876 17.1021 9.07108 16.5495C9.23821 16.3982 9.43024 16.1307 9.47647 15.9829L9.49781 15.9054H8.00425C7.17924 15.9054 6.50713 15.916 6.50713 15.9265Z" />
                        <path d="M13.5626 1.8943C13.6764 1.97173 14.1102 2.4363 14.3485 2.7425C15.2411 3.88986 15.8314 5.3786 15.963 6.82511C16.0199 7.43751 16.0127 7.64868 15.931 7.81057C15.8492 7.96895 15.6465 8.09213 15.4687 8.09213C15.1557 8.09213 14.9352 7.83169 14.9352 7.46214C14.9352 7.14891 14.8712 6.56819 14.7894 6.17401C14.5654 5.07593 13.9787 3.90393 13.2425 3.08389C12.7874 2.5806 12.766 2.54541 12.766 2.34128C12.766 2.14067 12.8407 1.99989 13.0007 1.8943C13.1394 1.8028 13.4239 1.80631 13.5626 1.8943Z" />
                        <path d="M3.00065 1.8943C3.16067 1.99989 3.23535 2.14067 3.23535 2.3448C3.23535 2.54541 3.22824 2.55597 2.74461 3.10149C2.01206 3.92505 1.43241 5.08648 1.21194 6.17401C1.13014 6.56819 1.06614 7.14891 1.06614 7.46214C1.06614 7.83169 0.845657 8.09213 0.532721 8.09213C0.354917 8.09213 0.152219 7.96895 0.0704293 7.81057C-0.0113609 7.6522 -0.0184731 7.43399 0.0348682 6.84271C0.173556 5.36452 0.781648 3.84058 1.6849 2.70731C1.96583 2.35536 2.3001 1.99285 2.42456 1.90486C2.57392 1.8028 2.85129 1.79928 3.00065 1.8943Z" />
                      </svg>
                    </div>
                    <span>5</span>
                  </div>
                  <div
                    className="notifacion-card dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <h6 className="title">5 Notifications</h6>
                    <ul>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-1.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />
                            10 min ago
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-2.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />
                            10 min ago
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img
                            src="/assets/images/bg/company-logo/notifacion-3.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h6>
                            <a href="#">
                              Your application has accepted in 5 vacancies.
                            </a>
                          </h6>
                          <span>
                            <img src="/assets/images/icon/clock-1.svg" alt="" />
                            10 min ago
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="view-all">
                      <a href="#">See All Notifications</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="d-md-flex d-none">
                <div className="sign-in-btn">
                  <Link legacyBehavior href="/login">
                    <a className="primry-btn-1 lg-btn">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.8033 2.19669C11.3868 0.780144 9.50329 0 7.5 0C5.49671 0 3.61324 0.780144 2.19669 2.19669C0.780144 3.61324 0 5.49671 0 7.5C0 9.50329 0.780144 11.3868 2.19669 12.8033C3.61324 14.2199 5.49671 15 7.5 15C9.50329 15 11.3868 14.2199 12.8033 12.8033C14.2199 11.3868 15 9.50329 15 7.5C15 5.49671 14.2199 3.61324 12.8033 2.19669ZM3.25504 12.5771C3.50269 10.4462 5.33478 8.80096 7.5 8.80096C8.64143 8.80096 9.71478 9.24568 10.5222 10.0529C11.2042 10.7351 11.6344 11.6258 11.7451 12.5769C10.5949 13.5402 9.11407 14.1211 7.5 14.1211C5.88593 14.1211 4.40517 13.5403 3.25504 12.5771ZM7.5 7.89574C6.24401 7.89574 5.22205 6.87378 5.22205 5.61779C5.22205 4.36169 6.24401 3.33984 7.5 3.33984C8.75599 3.33984 9.77795 4.36169 9.77795 5.61779C9.77795 6.87378 8.75599 7.89574 7.5 7.89574ZM12.5015 11.834C12.2776 10.9311 11.8105 10.0985 11.1436 9.43153C10.6034 8.89137 9.96437 8.48614 9.26743 8.23219C10.1052 7.66399 10.6569 6.70406 10.6569 5.61779C10.6569 3.87714 9.24065 2.46094 7.5 2.46094C5.75935 2.46094 4.34315 3.87714 4.34315 5.61779C4.34315 6.70464 4.89521 7.66491 5.73372 8.23299C5.09251 8.46668 4.49913 8.82797 3.98861 9.30359C3.24932 9.99207 2.73594 10.8699 2.4979 11.8333C1.48979 10.6712 0.878906 9.15562 0.878906 7.5C0.878906 3.84911 3.84911 0.878906 7.5 0.878906C11.1509 0.878906 14.1211 3.84911 14.1211 7.5C14.1211 9.15596 13.51 10.6718 12.5015 11.834Z"></path>
                      </svg>
                      Sign In
                    </a>
                  </Link>
                </div>
              </li>
              <li className="d-md-flex d-none">
                <div className="post-job-btn">
                  <Link legacyBehavior href="/job-post">
                    <a className="primry-btn-2 lg-btn">
                      Post Job
                      <svg
                        width={15}
                        height={13}
                        viewBox="0 0 15 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.1367 0H4.86329C4.66914 0 4.51173 0.151188 4.51173 0.337662V1.79366H1.43168C0.642247 1.79363 0 2.41049 0 3.16868V11.6249C0 12.3831 0.642247 13 1.43168 13H13.5683C14.3578 13 15 12.3831 15 11.6249V3.16868C15 2.41049 14.3578 1.79363 13.5683 1.79363H10.4883V0.337662C10.4883 0.15116 10.3309 0 10.1367 0ZM5.21485 0.675325H9.78518V1.79366H5.21485V0.675325ZM13.5683 12.3247H1.43168C1.02996 12.3247 0.703126 12.0108 0.703126 11.625V5.31469L5.6836 7.11899V8.14608C5.6836 8.33255 5.84102 8.48374 6.03517 8.48374H8.96486C9.15901 8.48374 9.31642 8.33255 9.31642 8.14608V7.11899L14.2969 5.31472V11.625C14.2969 12.0108 13.9701 12.3247 13.5683 12.3247ZM6.38673 7.80841V6.79543H8.6133V7.80841H6.38673ZM14.2969 3.16868V4.59294L9.3108 6.39926C9.28191 6.24073 9.13821 6.1201 8.96486 6.1201H6.03517C5.86182 6.1201 5.71812 6.2407 5.68923 6.39926L0.703126 4.59297V3.16868C0.703126 2.78284 1.02993 2.46896 1.43168 2.46896H13.5683C13.9701 2.46896 14.2969 2.78284 14.2969 3.16868ZM13.4071 11.0443C13.4071 11.2308 13.2497 11.382 13.0555 11.382H10.1697C9.97558 11.382 9.81816 11.2308 9.81816 11.0443C9.81816 10.8578 9.97558 10.7067 10.1697 10.7067H13.0555C13.2497 10.7067 13.4071 10.8578 13.4071 11.0443ZM1.89337 3.67202C1.89337 3.48555 2.05079 3.33436 2.24494 3.33436H4.09064C4.28479 3.33436 4.44221 3.48555 4.44221 3.67202C4.44221 3.8585 4.28479 4.00968 4.09064 4.00968H2.24494C2.05079 4.00968 1.89337 3.8585 1.89337 3.67202Z"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
            <div className="sidebar-button mobile-menu-btn ">
              <i className="bi bi-list" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header4;
