import Link from "next/link";
import React from "react";
import Footer from "../components/footer/Footer";
import LayoutHeader from "../components/header/LayoutHeader";

function JobDetailsForCompany() {
  return (
    <>
      <LayoutHeader />
      <div className="company-job-detaiils-page pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="job-details-and-counter-area mb-70">
                <div className="job-title-and-action-btn-area mb-40">
                  <div className="job-title-area">
                    <h3>
                      Assistant Professor <span>- English Medium</span>
                    </h3>
                    <ul>
                      <li>
                        <img src="assets/images/icon/calender2.svg" alt="" />
                        <span>Job Posted:</span> 02 March, 2023
                      </li>
                      <li>
                        <img src="assets/images/icon/calender2.svg" alt="" />
                        <span>Expired:</span> 02 March, 2023
                      </li>
                    </ul>
                  </div>
                  <div className="action-btn-group">
                    <ul>
                      <li>
                        <Link legacyBehavior href="/job-post">
                          <a>
                          <span>
                            <img src="assets/images/icon/edit2.svg" alt="" />
                          </span>
                          Edit
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/job-post">
                         <a>
                         <span>
                            <img src="assets/images/icon/repost2.svg" alt="" />
                          </span>
                          Repost
                         </a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <img src="assets/images/icon/share2.svg" alt="" />
                          </span>
                          Share
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="filter-button-group">
                      <div className="back-btn d-md-none d-block">
                        <Link legacyBehavior href="/comnpany/company-dashboard">
                          <a>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_20_62"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                            >
                              <rect width={20} height={20} />
                            </mask>
                            <g mask="url(#mask0_20_62)">
                              <path d="M15.3546 6.42791H1.59214L3.15391 4.8661C3.19972 4.82088 3.23613 4.76704 3.26105 4.70769C3.28597 4.64833 3.29891 4.58464 3.29912 4.52027C3.29933 4.45589 3.2868 4.39212 3.26226 4.3326C3.23772 4.27309 3.20166 4.21902 3.15614 4.1735C3.11062 4.12798 3.05655 4.09192 2.99704 4.06738C2.93752 4.04284 2.87375 4.03031 2.80937 4.03052C2.745 4.03073 2.6813 4.04366 2.62195 4.06859C2.5626 4.09351 2.50876 4.12992 2.46354 4.17573L0.191091 6.44818C0.0693458 6.57024 0.000976563 6.7356 0.000976562 6.90799C0.000976563 7.08038 0.0693458 7.24574 0.191091 7.3678L2.46354 9.64025C2.50888 9.68558 2.56271 9.72153 2.62195 9.74606C2.68118 9.77059 2.74467 9.78321 2.80879 9.7832C2.87291 9.78319 2.93639 9.77055 2.99562 9.74601C3.05486 9.72146 3.10867 9.68549 3.154 9.64015C3.19933 9.59481 3.23529 9.54098 3.25982 9.48174C3.28434 9.4225 3.29696 9.35901 3.29696 9.2949C3.29695 9.23078 3.28431 9.16729 3.25976 9.10806C3.23522 9.04883 3.19925 8.99501 3.15391 8.94968L1.60828 7.40422H15.3546C16.3179 7.40422 17.2417 7.78687 17.9228 8.468C18.6039 9.14913 18.9866 10.0729 18.9866 11.0362C18.9866 11.9995 18.6039 12.9233 17.9228 13.6044C17.2417 14.2855 16.3179 14.6682 15.3546 14.6682H9.7407C9.67623 14.6676 9.61228 14.6798 9.55255 14.7041C9.49282 14.7283 9.43849 14.7642 9.39269 14.8096C9.3469 14.855 9.31055 14.909 9.28574 14.9685C9.26094 15.028 9.24817 15.0918 9.24817 15.1563C9.24817 15.2208 9.26094 15.2846 9.28574 15.3441C9.31055 15.4037 9.3469 15.4577 9.39269 15.5031C9.43849 15.5484 9.49282 15.5843 9.55255 15.6086C9.61228 15.6329 9.67623 15.6451 9.7407 15.6445H15.3546C15.963 15.6495 16.5663 15.534 17.1298 15.3046C17.6933 15.0753 18.2058 14.7366 18.6378 14.3082C19.0697 13.8798 19.4126 13.3701 19.6465 12.8085C19.8805 12.2469 20.001 11.6446 20.001 11.0362C20.001 10.4278 19.8805 9.82545 19.6465 9.26386C19.4126 8.70227 19.0697 8.19257 18.6378 7.76415C18.2058 7.33574 17.6933 6.99709 17.1298 6.76775C16.5663 6.5384 15.963 6.4229 15.3546 6.42791Z" />
                            </g>
                          </svg>
                          Back to dashboard
                          </a>
                        </Link>
                      </div>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.9367 4.64813C13.1092 4.64813 13.2491 4.50824 13.2491 4.33565V0.937439C13.2491 0.420535 12.8286 0 12.3117 0H0.937439C0.420535 0 0 0.420535 0 0.937439V15.0615C0 15.5784 0.420535 15.999 0.937439 15.999H12.3117C12.8286 15.999 13.2491 15.5784 13.2491 15.0615V12.7594C13.2491 12.5868 13.1092 12.4469 12.9367 12.4469C12.7641 12.4469 12.6242 12.5868 12.6242 12.7594V15.0615C12.6242 15.2338 12.484 15.374 12.3117 15.374H0.937439C0.765138 15.374 0.624959 15.2338 0.624959 15.0615V0.937439C0.624959 0.765138 0.765138 0.624959 0.937439 0.624959H12.3117C12.484 0.624959 12.6242 0.765138 12.6242 0.937439V4.33565C12.6242 4.50824 12.7641 4.64813 12.9367 4.64813Z" />
                              <path d="M6.62378 1.68726C5.0386 1.68726 3.74896 2.97689 3.74896 4.56207C3.74896 5.38442 4.09613 6.12712 4.65147 6.65159C4.66187 6.66271 4.67293 6.67324 4.68503 6.68284C5.19659 7.1509 5.87739 7.43685 6.62374 7.43685C7.3701 7.43685 8.0509 7.15087 8.56246 6.68284C8.5744 6.67326 8.58562 6.66281 8.59602 6.65159C9.15142 6.12712 9.49859 5.38442 9.49859 4.56207C9.49859 2.97689 8.20895 1.68726 6.62378 1.68726ZM6.62378 6.81192C6.11353 6.81192 5.64262 6.64093 5.26477 6.35358C5.53941 5.86658 6.05191 5.562 6.62378 5.562C7.19564 5.562 7.70814 5.86658 7.98278 6.35358C7.6049 6.64093 7.13402 6.81192 6.62378 6.81192ZM6.12381 4.43708V4.23397C6.12381 3.9583 6.34811 3.734 6.62378 3.734C6.89945 3.734 7.12374 3.9583 7.12374 4.23397V4.43708C7.12374 4.71275 6.89945 4.93704 6.62378 4.93704C6.34811 4.93704 6.12381 4.71275 6.12381 4.43708ZM8.43428 5.89583C8.20622 5.55699 7.88708 5.28947 7.51362 5.12409C7.6608 4.93389 7.7487 4.69562 7.7487 4.43708V4.23397C7.7487 3.61366 7.24408 3.10904 6.62378 3.10904C6.00347 3.10904 5.49885 3.61366 5.49885 4.23397V4.43708C5.49885 4.69562 5.58675 4.93389 5.73393 5.12409C5.36047 5.28947 5.04133 5.55699 4.81327 5.89583C4.53738 5.52232 4.37392 5.06101 4.37392 4.56207C4.37392 3.32149 5.3832 2.31222 6.62378 2.31222C7.86435 2.31222 8.87363 3.32149 8.87363 4.56207C8.87363 5.06101 8.71017 5.52232 8.43428 5.89583ZM8.31117 13.6865H6.62378C6.45122 13.6865 6.3113 13.8264 6.3113 13.999C6.3113 14.1715 6.45122 14.3114 6.62378 14.3114H8.31117C8.48372 14.3114 8.62364 14.1715 8.62364 13.999C8.62364 13.8264 8.48372 13.6865 8.31117 13.6865ZM8.31117 11.9366H3.87396C3.7014 11.9366 3.56148 12.0765 3.56148 12.2491C3.56148 12.4217 3.7014 12.5615 3.87396 12.5615H8.31117C8.48372 12.5615 8.62364 12.4217 8.62364 12.2491C8.62364 12.0765 8.48372 11.9366 8.31117 11.9366ZM8.31117 10.1867H3.87396C3.7014 10.1867 3.56148 10.3266 3.56148 10.4992C3.56148 10.6718 3.7014 10.8117 3.87396 10.8117H8.31117C8.48372 10.8117 8.62364 10.6718 8.62364 10.4992C8.62364 10.3266 8.48372 10.1867 8.31117 10.1867ZM2.76025 8.52837C2.70144 8.46992 2.62196 8.43702 2.53904 8.43682C2.45683 8.43682 2.37621 8.47025 2.31812 8.52837C2.26 8.58649 2.22656 8.66711 2.22656 8.7493C2.22656 8.83148 2.25997 8.9121 2.31812 8.97022C2.37688 9.02856 2.45624 9.06145 2.53904 9.06178C2.62154 9.06178 2.70184 9.02834 2.76025 8.97022C2.81837 8.9121 2.85183 8.83148 2.85183 8.7493C2.85183 8.66711 2.8184 8.58649 2.76025 8.52837ZM2.76025 10.2783C2.70141 10.2199 2.62194 10.187 2.53904 10.1867C2.45683 10.1867 2.37655 10.2201 2.31812 10.2783C2.26 10.3364 2.22656 10.417 2.22656 10.4992C2.22656 10.5814 2.25997 10.662 2.31812 10.7201C2.37688 10.7784 2.45624 10.8113 2.53904 10.8117C2.62154 10.8117 2.70184 10.7782 2.76025 10.7201C2.81837 10.662 2.85183 10.5814 2.85183 10.4992C2.85183 10.417 2.8184 10.3364 2.76025 10.2783ZM2.76025 12.0281C2.70141 11.9697 2.62194 11.9369 2.53904 11.9366C2.45683 11.9366 2.37655 11.97 2.31812 12.0281C2.26 12.0863 2.22656 12.1669 2.22656 12.2491C2.22656 12.3313 2.25997 12.4119 2.31812 12.47C2.37685 12.5284 2.45622 12.5613 2.53904 12.5615C2.62154 12.5615 2.70216 12.5281 2.76025 12.47C2.81837 12.4119 2.85183 12.3313 2.85183 12.2491C2.85183 12.1669 2.8184 12.0863 2.76025 12.0281ZM8.31117 8.43682H3.87396C3.7014 8.43682 3.56148 8.57671 3.56148 8.7493C3.56148 8.92188 3.7014 9.06178 3.87396 9.06178H8.31117C8.48372 9.06178 8.62364 8.92188 8.62364 8.7493C8.62364 8.57671 8.48372 8.43682 8.31117 8.43682ZM15.3418 4.0721C15.0382 3.89683 14.6846 3.85027 14.3459 3.94098C14.0073 4.03173 13.7242 4.2489 13.549 4.55248L9.6167 11.3634C9.59516 11.4007 9.58157 11.4421 9.57677 11.485L9.29998 13.9643C9.29512 14.008 9.29952 14.0522 9.31291 14.0941C9.3263 14.1359 9.34836 14.1745 9.37766 14.2073C9.40696 14.24 9.44284 14.2662 9.48296 14.2842C9.52308 14.3021 9.56653 14.3114 9.61049 14.3115C9.67718 14.3115 9.74213 14.2902 9.79582 14.2506L11.8046 12.7712C11.8393 12.7456 11.8683 12.7132 11.8899 12.6758L15.8221 5.86492C16.184 5.23821 15.9685 4.43395 15.3418 4.0721ZM10.0003 13.3238L10.1449 12.0291L11.0492 12.5513L10.0003 13.3238ZM11.5049 12.0927L10.3142 11.4052L13.4698 5.93967L14.6605 6.62712L11.5049 12.0927ZM15.2809 5.55241L14.9729 6.08591L13.7822 5.39845L14.0902 4.86495C14.1352 4.78662 14.1952 4.71798 14.2668 4.663C14.3385 4.60802 14.4203 4.5678 14.5076 4.54466C14.5948 4.52104 14.6858 4.51495 14.7753 4.52674C14.8649 4.53853 14.9512 4.56797 15.0293 4.61335C15.1076 4.65829 15.1763 4.71832 15.2312 4.78997C15.2862 4.86162 15.3264 4.94346 15.3496 5.03076C15.3732 5.11793 15.3793 5.20892 15.3675 5.29846C15.3557 5.388 15.3263 5.47432 15.2809 5.55241Z" />
                            </svg>
                            Total Applicants
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_821_78)">
                                <path d="M9.00001 13.345C10.5399 13.345 11.7931 12.0918 11.7931 10.5519C11.7931 10.3135 11.7615 10.0702 11.6994 9.82879C11.686 9.77667 11.6593 9.72893 11.6219 9.69025C11.5845 9.65158 11.5376 9.62329 11.486 9.60817C11.4344 9.59306 11.3797 9.59163 11.3273 9.60403C11.2749 9.61642 11.2267 9.64222 11.1873 9.67889C11.0152 9.84063 10.7879 9.93083 10.5517 9.9312C10.0384 9.9312 9.6207 9.51348 9.6207 9.00017C9.6207 8.76493 9.71039 8.539 9.8727 8.36427C9.90937 8.32489 9.93517 8.27665 9.94757 8.22429C9.95997 8.17193 9.95854 8.11724 9.94342 8.0656C9.9283 8.01395 9.90002 7.96713 9.86134 7.92972C9.82266 7.89231 9.77492 7.86559 9.72281 7.8522C9.48672 7.79099 9.2439 7.75961 9.00001 7.75879C7.46008 7.75879 6.20691 9.01196 6.20691 10.5519C6.20691 12.0918 7.46008 13.345 9.00001 13.345ZM9.00001 8.37948C9.04253 8.37948 9.08536 8.38072 9.1285 8.38351C9.04371 8.57804 8.99997 8.78797 9.00001 9.00017C9.00001 9.85579 9.69612 10.5519 10.5517 10.5519C10.7659 10.5519 10.9754 10.5075 11.1684 10.4234C11.1855 10.7189 11.1422 11.0148 11.041 11.2929C10.9398 11.5711 10.7829 11.8256 10.5799 12.041C10.3769 12.2564 10.1321 12.4281 9.86045 12.5456C9.58878 12.6631 9.29599 12.7239 9.00001 12.7243C7.80208 12.7243 6.8276 11.7498 6.8276 10.5519C6.8276 9.35396 7.80208 8.37948 9.00001 8.37948Z" />
                                <path d="M17.9423 10.3713C17.8116 10.1886 14.6806 5.89648 9 5.89648C3.31945 5.89648 0.188379 10.1886 0.0577235 10.3713C0.0201608 10.424 -3.05176e-05 10.487 -3.05176e-05 10.5517C-3.05176e-05 10.6163 0.0201608 10.6793 0.0577235 10.732C0.0847235 10.7701 0.737068 11.6745 1.97814 12.6682C2.00997 12.6937 2.0465 12.7126 2.08566 12.724C2.12481 12.7353 2.16582 12.7389 2.20634 12.7344C2.24685 12.7299 2.28609 12.7174 2.3218 12.6978C2.35752 12.6781 2.38901 12.6516 2.41448 12.6198C2.43995 12.588 2.45891 12.5514 2.47026 12.5123C2.48161 12.4731 2.48514 12.4321 2.48065 12.3916C2.47615 12.3511 2.46372 12.3118 2.44406 12.2761C2.4244 12.2404 2.3979 12.2089 2.36607 12.1834C1.51386 11.5013 0.949034 10.8552 0.703241 10.5517C1.20817 9.93097 3.05969 7.87307 6.04055 6.96035C5.00555 7.81504 4.34483 9.10762 4.34483 10.5517C4.34483 13.1185 6.43314 15.2068 9 15.2068C11.5669 15.2068 13.6552 13.1185 13.6552 10.5517C13.6552 9.10886 12.9954 7.81721 11.9616 6.96283C14.9363 7.87679 16.7906 9.93221 17.2964 10.5523C17.0503 10.8561 16.4855 11.5016 15.6336 12.1838C15.5693 12.2352 15.5281 12.3101 15.519 12.3919C15.51 12.4737 15.5338 12.5558 15.5852 12.6201C15.6366 12.6844 15.7115 12.7256 15.7934 12.7347C15.8752 12.7438 15.9573 12.72 16.0216 12.6685C17.2629 11.6748 17.915 10.7701 17.942 10.7323C17.9796 10.6797 17.9999 10.6166 18 10.5519C18 10.4871 17.9799 10.424 17.9423 10.3713ZM13.0345 10.5517C13.0345 12.7762 11.2246 14.5861 9 14.5861C6.77545 14.5861 4.96552 12.7762 4.96552 10.5517C4.96552 8.3271 6.77545 6.51717 9 6.51717C11.2246 6.51717 13.0345 8.32679 13.0345 10.5517Z" />
                                <path d="M2.69564 7.42362C4.0115 6.44386 6.17337 5.27573 8.99999 5.27573C11.8266 5.27573 13.9885 6.44386 15.3043 7.42362C15.3703 7.47276 15.4532 7.49366 15.5346 7.48173C15.616 7.4698 15.6894 7.42601 15.7385 7.36C15.7876 7.29399 15.8085 7.21116 15.7966 7.12974C15.7847 7.04832 15.7409 6.97497 15.6749 6.92583C15.4014 6.72231 15.1193 6.53055 14.8295 6.35107L15.3329 5.47745C15.3532 5.44214 15.3664 5.40316 15.3717 5.36274C15.377 5.32233 15.3743 5.28126 15.3637 5.2419C15.3532 5.20253 15.3349 5.16563 15.3101 5.13331C15.2853 5.10099 15.2543 5.07388 15.219 5.05352C15.1837 5.03316 15.1447 5.01996 15.1043 5.01467C15.0639 5.00937 15.0228 5.01209 14.9834 5.02267C14.9441 5.03325 14.9072 5.05147 14.8748 5.07631C14.8425 5.10114 14.8154 5.1321 14.7951 5.16742L14.2929 6.03886C13.6224 5.669 12.9162 5.36788 12.1851 5.14011L12.4929 3.994C12.5035 3.95463 12.5062 3.91357 12.5009 3.87316C12.4955 3.83275 12.4823 3.79378 12.4619 3.75847C12.4416 3.72317 12.4144 3.69223 12.3821 3.66741C12.3498 3.64259 12.3129 3.62439 12.2735 3.61383C12.2341 3.60327 12.1931 3.60058 12.1527 3.60589C12.1122 3.61121 12.0733 3.62443 12.038 3.6448C12.0027 3.66518 11.9717 3.6923 11.9469 3.72464C11.9221 3.75697 11.9039 3.79388 11.8933 3.83324L11.5876 4.97159C10.8417 4.78755 10.0781 4.68413 9.31002 4.66311V3.10331C9.31002 3.021 9.27732 2.94207 9.21912 2.88387C9.16092 2.82567 9.08198 2.79297 8.99968 2.79297C8.91737 2.79297 8.83843 2.82567 8.78023 2.88387C8.72203 2.94207 8.68933 3.021 8.68933 3.10331V4.66311C7.87468 4.68669 7.11278 4.79718 6.41171 4.97159L6.10602 3.83324C6.08204 3.75678 6.02944 3.69255 5.95921 3.65395C5.88898 3.61536 5.80655 3.6054 5.72915 3.62616C5.65175 3.64691 5.58537 3.69677 5.54386 3.76532C5.50236 3.83387 5.48895 3.9158 5.50643 3.994L5.8143 5.14011C5.0831 5.36767 4.37687 5.6688 3.70643 6.03886L3.2043 5.16742C3.18394 5.1321 3.15683 5.10114 3.1245 5.07631C3.09218 5.05147 3.05529 5.03325 3.01592 5.02267C2.97655 5.01209 2.93549 5.00937 2.89507 5.01467C2.85466 5.01996 2.81568 5.03316 2.78037 5.05352C2.74505 5.07388 2.71409 5.10099 2.68926 5.13331C2.66442 5.16563 2.64619 5.20253 2.63562 5.2419C2.62504 5.28126 2.62232 5.32233 2.62762 5.36274C2.63291 5.40316 2.64611 5.44214 2.66647 5.47745L3.16985 6.35107C2.8595 6.54349 2.57678 6.73807 2.32447 6.92583C2.29178 6.9502 2.26422 6.98077 2.24335 7.0158C2.22248 7.05082 2.20871 7.08961 2.20283 7.12996C2.19695 7.17031 2.19908 7.21141 2.20908 7.25094C2.21909 7.29046 2.23679 7.32763 2.26116 7.36031C2.28553 7.393 2.3161 7.42056 2.35113 7.44143C2.38615 7.46231 2.42494 7.47607 2.46529 7.48195C2.50563 7.48783 2.54674 7.48571 2.58627 7.4757C2.62579 7.46569 2.66296 7.44799 2.69564 7.42362Z" />
                              </g>
                            </svg>
                            Job Preview
                          </button>
                        </li>
                      </ul>
                      <div className="back-btn d-md-block d-none">
                        <Link legacyBehavior href="/company/company-dashboard">
                          <a>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_20_62"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                            >
                              <rect width={20} height={20} />
                            </mask>
                            <g mask="url(#mask0_20_62)">
                              <path d="M15.3546 6.42791H1.59214L3.15391 4.8661C3.19972 4.82088 3.23613 4.76704 3.26105 4.70769C3.28597 4.64833 3.29891 4.58464 3.29912 4.52027C3.29933 4.45589 3.2868 4.39212 3.26226 4.3326C3.23772 4.27309 3.20166 4.21902 3.15614 4.1735C3.11062 4.12798 3.05655 4.09192 2.99704 4.06738C2.93752 4.04284 2.87375 4.03031 2.80937 4.03052C2.745 4.03073 2.6813 4.04366 2.62195 4.06859C2.5626 4.09351 2.50876 4.12992 2.46354 4.17573L0.191091 6.44818C0.0693458 6.57024 0.000976563 6.7356 0.000976562 6.90799C0.000976563 7.08038 0.0693458 7.24574 0.191091 7.3678L2.46354 9.64025C2.50888 9.68558 2.56271 9.72153 2.62195 9.74606C2.68118 9.77059 2.74467 9.78321 2.80879 9.7832C2.87291 9.78319 2.93639 9.77055 2.99562 9.74601C3.05486 9.72146 3.10867 9.68549 3.154 9.64015C3.19933 9.59481 3.23529 9.54098 3.25982 9.48174C3.28434 9.4225 3.29696 9.35901 3.29696 9.2949C3.29695 9.23078 3.28431 9.16729 3.25976 9.10806C3.23522 9.04883 3.19925 8.99501 3.15391 8.94968L1.60828 7.40422H15.3546C16.3179 7.40422 17.2417 7.78687 17.9228 8.468C18.6039 9.14913 18.9866 10.0729 18.9866 11.0362C18.9866 11.9995 18.6039 12.9233 17.9228 13.6044C17.2417 14.2855 16.3179 14.6682 15.3546 14.6682H9.7407C9.67623 14.6676 9.61228 14.6798 9.55255 14.7041C9.49282 14.7283 9.43849 14.7642 9.39269 14.8096C9.3469 14.855 9.31055 14.909 9.28574 14.9685C9.26094 15.028 9.24817 15.0918 9.24817 15.1563C9.24817 15.2208 9.26094 15.2846 9.28574 15.3441C9.31055 15.4037 9.3469 15.4577 9.39269 15.5031C9.43849 15.5484 9.49282 15.5843 9.55255 15.6086C9.61228 15.6329 9.67623 15.6451 9.7407 15.6445H15.3546C15.963 15.6495 16.5663 15.534 17.1298 15.3046C17.6933 15.0753 18.2058 14.7366 18.6378 14.3082C19.0697 13.8798 19.4126 13.3701 19.6465 12.8085C19.8805 12.2469 20.001 11.6446 20.001 11.0362C20.001 10.4278 19.8805 9.82545 19.6465 9.26386C19.4126 8.70227 19.0697 8.19257 18.6378 7.76415C18.2058 7.33574 17.6933 6.99709 17.1298 6.76775C16.5663 6.5384 15.963 6.4229 15.3546 6.42791Z" />
                            </g>
                          </svg>
                          Back to dashboard
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="counter-area">
                          <div className="row g-4 justify-content-center">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                              <div className="counter-single one">
                                <div className="coundown">
                                  <div className="total-number d-flex align-items-center gap-2">
                                    <h3 className="odometer">40</h3>
                                  </div>
                                  <p>Total Applicantes</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                              <div className="counter-single two">
                                <div className="coundown">
                                  <div className="total-number d-flex align-items-center gap-2">
                                    <h3 className="odometer">60</h3>
                                  </div>
                                  <p>Viewed</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                              <div className="counter-single three">
                                <div className="coundown">
                                  <div className="total-number d-flex align-items-center gap-2">
                                    <h3 className="odometer">20</h3>
                                  </div>
                                  <p>Shortlisted</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                              <div className="counter-single four">
                                <div className="coundown">
                                  <div className="total-number d-flex align-items-center gap-2">
                                    <h3 className="odometer">20</h3>
                                  </div>
                                  <p>Interview List</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                              <div className="counter-single five">
                                <div className="coundown">
                                  <div className="total-number d-flex align-items-center gap-2">
                                    <h3 className="odometer">10</h3>
                                  </div>
                                  <p>Final List</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                              <div className="counter-single six">
                                <div className="coundown">
                                  <div className="total-number d-flex align-items-center gap-2">
                                    <h3 className="odometer">40</h3>
                                  </div>
                                  <p>Rejected</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="row g-lg-4 gy-5">
                          <div className="col-lg-8">
                            <div className="job-details-content">
                              <div className="job-list-content">
                                <div className="company-area">
                                  <div className="logo">
                                    <img
                                      src="assets/images/bg/company-logo/company-01.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="company-details">
                                    <div className="name-location">
                                      <h5>
                                        <a href="#">Senior UI/UX Engineer</a>
                                      </h5>
                                      <p>Bistro.Tech Group Ltd</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="job-discription">
                                  <ul className="one">
                                    <li>
                                      <img
                                        src="assets/images/icon/map-2.svg"
                                        alt=""
                                      />
                                      <p>
                                        <span className="title">Location:</span>{" "}
                                        Dhaka, Bangladesh
                                      </p>
                                    </li>
                                    <li>
                                      <img
                                        src="assets/images/icon/category-2.svg"
                                        alt=""
                                      />
                                      <p>
                                        <span className="title">Category:</span>{" "}
                                        Creative Design
                                      </p>
                                    </li>
                                  </ul>
                                  <ul>
                                    <li>
                                      <img
                                        src="assets/images/icon/company-2.svg"
                                        alt=""
                                      />
                                      <p>
                                        <span className="title">Job Type:</span>{" "}
                                        Full-Time
                                      </p>
                                    </li>
                                    <li>
                                      <img
                                        src="assets/images/icon/salary-2.svg"
                                        alt=""
                                      />
                                      <p>
                                        <span className="title">Salary:</span>{" "}
                                        $40K-$78K/Per Month
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <p>
                                <span>Job Description:</span> A UI/UX (User
                                Interface/User Experience) designer is
                                responsible for designing and creating engaging
                                and effective interfaces for software and web
                                applications. This includes designing the
                                layout, visual design, and interactivity of the
                                user interface.
                              </p>
                              <br />
                              <p>
                                <span>Job Responsibility:</span> Collaborating
                                with cross-functional teams: UI/UX designers
                                often work closely with other teams, including
                                product management, engineering, and marketing,
                                to ensure that the user interface is aligned
                                with business and technical requirements. You
                                will need to be able to effectively communicate
                                your design ideas and gather feedback from other
                                team members.
                              </p>
                              <ul>
                                <li>
                                  Conducting user research and testing to
                                  understand user needs and behaviors.
                                </li>
                                <li>
                                  Designing wireframes, prototypes, and
                                  high-fidelity mockups.
                                </li>
                                <li>
                                  Developing and maintaining design systems and
                                  style guides.
                                </li>
                                <li>
                                  Collaborating with cross-functional teams,
                                  including product management, engineering, and
                                  marketing.
                                </li>
                                <li>
                                  Staying up-to-date with the latest design
                                  trends and technologies.
                                </li>
                                <li>
                                  Gathering and analyzing user requirements to
                                  inform the design of new software or web
                                  applications.
                                </li>
                              </ul>
                              <h6>Educational Requirements:</h6>
                              <ul>
                                <li>
                                  Bachelor degree to complete any reputational
                                  university.
                                </li>
                                <li>
                                  Bachelor degree to complete any reputational
                                  university.
                                </li>
                              </ul>
                              <h6>Experiences:</h6>
                              <ul>
                                <li>2-3 Years in this field.</li>
                              </ul>
                              <p>
                                <span>Main Duties:</span> Some specific tasks
                                that a UI/UX designer might be responsible for
                                include:
                              </p>
                              <ul>
                                <li>
                                  Gathering and analyzing user requirements to
                                  inform the design of new software or web
                                  applications.
                                </li>
                                <li>
                                  Designing the layout, visual design, and
                                  interactivity of the user interface.
                                </li>
                                <li>
                                  Developing and maintaining design systems and
                                  style guides to ensure consistency in theux
                                </li>
                                <li>
                                  Collaborating with cross-functional teams,
                                  including product management, engineering, and
                                  marketing, to ensure that the user interface
                                  is aligned with business and technical
                                  requirements
                                </li>
                              </ul>
                              <p>
                                <span>Extra Benefits:</span> Some specific tasks
                                that a UI/UX designer might be responsible for
                                include:
                              </p>
                              <ul>
                                <li>Any health care.</li>
                                <li>Yearly performance bonus.</li>
                                <li>Flexibility &amp; remote working.</li>
                                <li>Two days off weekly.</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="job-details-sidebar">
                              <div className="save-apply-btn d-flex justify-content-end mb-50">
                                <ul>
                                  <li>
                                    <a className="save-btn" href="#">
                                      Save Job{" "}
                                      <span>
                                        <i className="bi bi-bookmark-fill" />
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="primry-btn-2 lg-btn" href="#">
                                      Apply Position
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job-summary-area mb-50">
                                <div className="pin">
                                  <img
                                    src="assets/images/icon/pin.svg"
                                    alt=""
                                  />
                                </div>
                                <div className="job-summary-title">
                                  <h6>Job Summary:</h6>
                                </div>
                                <ul>
                                  <li>
                                    <p>
                                      <span className="title">Job Title:</span>{" "}
                                      Senior UI/UX Engineer
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span className="title">Vacancy:</span> 07
                                      Person
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span className="title">
                                        Experiences:
                                      </span>{" "}
                                      2-3 Years.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span className="title">
                                        Job Category:
                                      </span>{" "}
                                      Creative Design
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span className="title">Job Type:</span>{" "}
                                      Full-Time
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span className="title">Salary:</span>{" "}
                                      40K-$78K/
                                      <span className="time">Per Month</span>
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <span className="title">Deadline:</span>{" "}
                                      02/02/2023
                                    </p>
                                  </li>
                                </ul>
                              </div>
                              <div className="view-job-btn mb-30">
                                <a href="#">
                                  <img
                                    src="assets/images/icon/company-2.svg"
                                    alt=""
                                  />
                                  View All Jobs In This Company
                                </a>
                              </div>
                              <div className="job-share-area mb-50">
                                <h6>Job Link Share:</h6>
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="bx bx-link" />
                                    </a>
                                  </li>
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
                                      <i className="bx bxl-instagram-alt" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="email-area mb-50">
                                <div className="title">
                                  <h6>
                                    <img
                                      src="assets/images/icon/email-2.svg"
                                      alt=""
                                    />
                                    Email Now
                                  </h6>
                                </div>
                                <p>
                                  Send your resume at{" "}
                                  <a href="mailto:info@example.com">
                                    info@example.com
                                  </a>
                                </p>
                              </div>
                              <div className="location-area">
                                <h6>Get Location:</h6>
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763018799!2d90.36349791490355!3d23.834071191491947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1674212581590!5m2!1sen!2sbd"
                                  style={{ border: 0 }}
                                  allowFullScreen
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="applied-list-wrap">
                <div className="row g-lg-4 gy-5">
                  <div className="col-xl-3 col-lg-4">
                    <div className="filter-area" id="sidebar">
                      <h5>Filtered By :</h5>
                      <div className="select-area mb-15">
                        <select className="select1">
                          <option>Position</option>
                          <option>Senior PHP Developer</option>
                          <option>Senior Receptionist</option>
                          <option>React Developer</option>
                        </select>
                      </div>
                      <div className="select-area mb-15">
                        <select className="select1">
                          <option>Job Type</option>
                          <option>Full Time</option>
                          <option>Part Time</option>
                          <option>Remote</option>
                        </select>
                      </div>
                      <div className="select-area mb-15">
                        <select className="select1">
                          <option>Expereience Level</option>
                          <option>1 Years</option>
                          <option>1.5 Years</option>
                          <option>2 Years</option>
                          <option>2.5 Years</option>
                          <option>3 Years</option>
                          <option>3.5 Years</option>
                        </select>
                      </div>
                      <div className="select-area">
                        <select className="select1">
                          <option>Education Level</option>
                          <option>Bachelor Degree in CSE</option>
                          <option>IGCSE</option>
                          <option>AS</option>
                          <option>A Level</option>
                          <option>Matriculated</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-8">
                    <div className="table-wrapper2">
                      <div className="table-filter-area mb-30">
                        <form>
                          <div className="form-wrap">
                            <div className="form-inner">
                              <h6>Download By:</h6>
                              <div className="button-wrap">
                                <ul>
                                  <li>
                                    <a href="#" download>
                                      <button>
                                        <img
                                          src="assets/images/icon/excle.svg"
                                          alt=""
                                        />
                                      </button>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" download>
                                      <button>
                                        <img
                                          src="assets/images/icon/docs.svg"
                                          alt=""
                                        />
                                      </button>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="form-wrap">
                            <div className="form-inner">
                              <div className="select-area">
                                <select className="select1">
                                  <option>Matched Applicants</option>
                                  <option>PHP Developer</option>
                                  <option>Receptionist</option>
                                  <option>React Developer</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-wrap">
                            <div className="form-inner">
                              <p>Show er page</p>
                              <div className="select-area">
                                <select className="select1">
                                  <option>05</option>
                                  <option>10</option>
                                  <option>15</option>
                                  <option>20</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <table className="eg-table table category-table mb-0">
                        <thead>
                          <tr>
                            <th>Candidate Name</th>
                            <th>Carrer Summary</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Candidate Name">
                              <div className="employee-info">
                                <div className="employee-img">
                                  <img
                                    src="assets/images/bg/employee-img1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="employee-content">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    Mr. Willium Jacson
                                  </button>
                                  {/* Modal */}
                                  <div
                                    className="modal fade"
                                    id="exampleModal"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                              <div className="resume-area">
                                                <div className="row g-4 mb-40">
                                                  <div className="col-lg-6">
                                                    <div className="author-area">
                                                      <div className="author-img">
                                                        <img
                                                          src="assets/images/bg/resume-author.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="name-degination">
                                                        <h4>
                                                          Mr. Jacoline Frankly
                                                        </h4>
                                                        <span>
                                                          UI/UX Engineer
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                    <div className="contact-area">
                                                      <h4>Contact Info</h4>
                                                      <ul>
                                                        <li>
                                                          Phone:
                                                          <a href="#">
                                                            +880-177 443 5455{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/phone-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Email:
                                                          <a href="#">
                                                            info@example.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/envlop-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Website:
                                                          <a href="#">
                                                            www.infositeexample.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/web-5.svg "
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Career Objective</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="description">
                                                      <p>
                                                        I'm a passionate UI/UX
                                                        designer and can bring
                                                        innovative ideas &amp;
                                                        concepts to life for
                                                        client-based design
                                                        projects. I have more
                                                        than 3 years of design
                                                        experience in
                                                        digital/e-commerce. I
                                                        experienced at tackle
                                                        various needs from
                                                        landing page designs,
                                                        web app interfaces. I
                                                        have skills in User
                                                        Experience Design (UXD),
                                                        user-centered Design,
                                                        Interaction and Visual
                                                        Design for websites,
                                                        applications, web, and
                                                        mobile products,
                                                        wireframes, mock-ups,
                                                        qualitative and
                                                        quantitative user
                                                        studies, usability
                                                        analysis, and informal
                                                        usability audits.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Personal Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Father’s Name:
                                                              </span>{" "}
                                                              Mr. Norman Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Date of Birth:
                                                              </span>{" "}
                                                              03 January,1998
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Nationality:
                                                              </span>{" "}
                                                              Bangladeshi
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Marital Status:
                                                              </span>{" "}
                                                              Unmarried
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Blood Group:
                                                              </span>{" "}
                                                              O ve+
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Permanent
                                                                Address:
                                                              </span>{" "}
                                                              Village: Mirpur-12
                                                              Block-C, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations d-flex justify-content-end">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Mother’s Name:
                                                              </span>{" "}
                                                              Mrs. Macoline
                                                              Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                National ID:
                                                              </span>{" "}
                                                              88 9919 6712 8762
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Religion:
                                                              </span>{" "}
                                                              Islam
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Gender:
                                                              </span>{" "}
                                                              Male
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Weight:
                                                              </span>{" "}
                                                              75 KG
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Present Address:
                                                              </span>{" "}
                                                              Village: Mirpur
                                                              DOSH, Block-C,
                                                              Avenue-02, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka.
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Educational
                                                        Qualification
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2016- May, 2020
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Royals Republic
                                                          Science &amp;
                                                          Technology University
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            Graduation
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Bachelor Degree In
                                                            CSE
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            3.75/4.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>June,
                                                          2014- April, 2016
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          International
                                                          Collegiate School
                                                          &amp; College
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            HSC
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Science
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            4.96/5.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Career Application
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4 ">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Job
                                                                Place:
                                                              </span>{" "}
                                                              Norland Tech of
                                                              Industry
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Position:
                                                              </span>{" "}
                                                              UI/UX Engineer
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Experiences:
                                                              </span>{" "}
                                                              3 Years
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Salary:
                                                              </span>{" "}
                                                              30000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Expected Salary:
                                                              </span>{" "}
                                                              40000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Available:
                                                              </span>{" "}
                                                              Full Time
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Professionals
                                                        Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2021- May, 2022
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Bistro.Tech Group of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>April,
                                                          2022- Continuing
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Norland Tech of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Special Skills</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="tag-area">
                                                      <ul>
                                                        <li>
                                                          Web Development,
                                                        </li>
                                                        <li>UI/UX Designer,</li>
                                                        <li>
                                                          React Development.
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Social Network</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="social-area">
                                                      <ul>
                                                        <li>
                                                          <a href="https://www.facebook.com/">
                                                            Facebook
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://twitter.com/">
                                                            Twitter
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.linkedin.com/">
                                                            Linkedin
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.pinterest.com/">
                                                            Pinterest
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://dribbble.com/">
                                                            Dribbble
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.behance.net/">
                                                            Behance
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="declaration-area">
                                                    <h6>
                                                      Declaration &amp;
                                                      Authentication-
                                                    </h6>
                                                    <p>
                                                      I do hereby declare that
                                                      the information given
                                                      above is true of my
                                                      knowledge.
                                                    </p>
                                                  </div>
                                                  <div className="gratitude-area">
                                                    <span>Yours Faithful,</span>
                                                    <h6>Jacoline Frankly</h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-footer">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>
                                    <img
                                      src="assets/images/icon/company-2.svg"
                                      alt=""
                                    />
                                    Internation Colliegate University
                                  </span>
                                  <p>
                                    <span>Applied On:</span> 02 April, 2023
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td data-label="Carrer Summary">
                              <div className="carrer-summary">
                                <h6>
                                  Colliegate Ltd{" "}
                                  <span>(Teaching Assistant)</span>
                                </h6>
                                <ul>
                                  <li>
                                    <span>Experience:</span> 2+ Years
                                  </li>
                                  <li>
                                    <span>Salary:</span> $800/ Per Month
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td data-label="Actions">
                              <div className="action-btn-group">
                                <ul>
                                  <li>
                                    <button>
                                      <img
                                        src="assets/images/icon/shortlist-icon.svg"
                                        alt=""
                                      />{" "}
                                      Shortlist
                                    </button>
                                  </li>
                                  <li>
                                    <button className="reject">
                                      <img
                                        src="assets/images/icon/rejected-icon.svg"
                                        alt=""
                                      />{" "}
                                      Rejected
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Candidate Name">
                              <div className="employee-info">
                                <div className="employee-img">
                                  <img
                                    src="assets/images/bg/employee-img2.png"
                                    alt=""
                                  />
                                </div>
                                <div className="employee-content">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1"
                                  >
                                    Robert Williamson{" "}
                                  </button>
                                  {/* Modal */}
                                  <div
                                    className="modal fade"
                                    id="exampleModal1"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                              <div className="resume-area">
                                                <div className="row g-4 mb-40">
                                                  <div className="col-lg-6">
                                                    <div className="author-area">
                                                      <div className="author-img">
                                                        <img
                                                          src="assets/images/bg/resume-author.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="name-degination">
                                                        <h4>
                                                          Mr. Jacoline Frankly
                                                        </h4>
                                                        <span>
                                                          UI/UX Engineer
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                    <div className="contact-area">
                                                      <h4>Contact Info</h4>
                                                      <ul>
                                                        <li>
                                                          Phone:
                                                          <a href="#">
                                                            +880-177 443 5455{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/phone-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Email:
                                                          <a href="#">
                                                            info@example.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/envlop-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Website:
                                                          <a href="#">
                                                            www.infositeexample.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/web-5.svg "
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Career Objective</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="description">
                                                      <p>
                                                        I'm a passionate UI/UX
                                                        designer and can bring
                                                        innovative ideas &amp;
                                                        concepts to life for
                                                        client-based design
                                                        projects. I have more
                                                        than 3 years of design
                                                        experience in
                                                        digital/e-commerce. I
                                                        experienced at tackle
                                                        various needs from
                                                        landing page designs,
                                                        web app interfaces. I
                                                        have skills in User
                                                        Experience Design (UXD),
                                                        user-centered Design,
                                                        Interaction and Visual
                                                        Design for websites,
                                                        applications, web, and
                                                        mobile products,
                                                        wireframes, mock-ups,
                                                        qualitative and
                                                        quantitative user
                                                        studies, usability
                                                        analysis, and informal
                                                        usability audits.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Personal Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Father’s Name:
                                                              </span>{" "}
                                                              Mr. Norman Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Date of Birth:
                                                              </span>{" "}
                                                              03 January,1998
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Nationality:
                                                              </span>{" "}
                                                              Bangladeshi
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Marital Status:
                                                              </span>{" "}
                                                              Unmarried
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Blood Group:
                                                              </span>{" "}
                                                              O ve+
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Permanent
                                                                Address:
                                                              </span>{" "}
                                                              Village: Mirpur-12
                                                              Block-C, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations d-flex justify-content-end">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Mother’s Name:
                                                              </span>{" "}
                                                              Mrs. Macoline
                                                              Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                National ID:
                                                              </span>{" "}
                                                              88 9919 6712 8762
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Religion:
                                                              </span>{" "}
                                                              Islam
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Gender:
                                                              </span>{" "}
                                                              Male
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Weight:
                                                              </span>{" "}
                                                              75 KG
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Present Address:
                                                              </span>{" "}
                                                              Village: Mirpur
                                                              DOSH, Block-C,
                                                              Avenue-02, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka.
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Educational
                                                        Qualification
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2016- May, 2020
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Royals Republic
                                                          Science &amp;
                                                          Technology University
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            Graduation
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Bachelor Degree In
                                                            CSE
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            3.75/4.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>June,
                                                          2014- April, 2016
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          International
                                                          Collegiate School
                                                          &amp; College
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            HSC
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Science
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            4.96/5.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Career Application
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4 ">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Job
                                                                Place:
                                                              </span>{" "}
                                                              Norland Tech of
                                                              Industry
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Position:
                                                              </span>{" "}
                                                              UI/UX Engineer
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Experiences:
                                                              </span>{" "}
                                                              3 Years
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Salary:
                                                              </span>{" "}
                                                              30000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Expected Salary:
                                                              </span>{" "}
                                                              40000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Available:
                                                              </span>{" "}
                                                              Full Time
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Professionals
                                                        Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2021- May, 2022
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Bistro.Tech Group of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>April,
                                                          2022- Continuing
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Norland Tech of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Special Skills</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="tag-area">
                                                      <ul>
                                                        <li>
                                                          Web Development,
                                                        </li>
                                                        <li>UI/UX Designer,</li>
                                                        <li>
                                                          React Development.
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Social Network</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="social-area">
                                                      <ul>
                                                        <li>
                                                          <a href="https://www.facebook.com/">
                                                            Facebook
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://twitter.com/">
                                                            Twitter
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.linkedin.com/">
                                                            Linkedin
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.pinterest.com/">
                                                            Pinterest
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://dribbble.com/">
                                                            Dribbble
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.behance.net/">
                                                            Behance
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="declaration-area">
                                                    <h6>
                                                      Declaration &amp;
                                                      Authentication-
                                                    </h6>
                                                    <p>
                                                      I do hereby declare that
                                                      the information given
                                                      above is true of my
                                                      knowledge.
                                                    </p>
                                                  </div>
                                                  <div className="gratitude-area">
                                                    <span>Yours Faithful,</span>
                                                    <h6>Jacoline Frankly</h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-footer">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>
                                    <img
                                      src="assets/images/icon/company-2.svg"
                                      alt=""
                                    />
                                    London University
                                  </span>
                                  <p>
                                    <span>Applied On:</span> 02 April, 2023
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td data-label="Carrer Summary">
                              <div className="carrer-summary">
                                <h6>
                                  UI/UX Company Ltd{" "}
                                  <span>(UI/UX Designer)</span>
                                </h6>
                                <ul>
                                  <li>
                                    <span>Experience:</span> 2+ Years
                                  </li>
                                  <li>
                                    <span>Salary:</span> $800/ Per Month
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td data-label="Actions">
                              <div className="action-btn-group">
                                <ul>
                                  <li>
                                    <button>
                                      <img
                                        src="assets/images/icon/shortlist-icon.svg"
                                        alt=""
                                      />{" "}
                                      Shortlist
                                    </button>
                                  </li>
                                  <li>
                                    <button className="reject">
                                      <img
                                        src="assets/images/icon/rejected-icon.svg"
                                        alt=""
                                      />{" "}
                                      Rejected
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Candidate Name">
                              <div className="employee-info">
                                <div className="employee-img">
                                  <img
                                    src="assets/images/bg/employee-img3.png"
                                    alt=""
                                  />
                                </div>
                                <div className="employee-content">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal2"
                                  >
                                    Robertson Harry
                                  </button>
                                  {/* Modal */}
                                  <div
                                    className="modal fade"
                                    id="exampleModal2"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                              <div className="resume-area">
                                                <div className="row g-4 mb-40">
                                                  <div className="col-lg-6">
                                                    <div className="author-area">
                                                      <div className="author-img">
                                                        <img
                                                          src="assets/images/bg/resume-author.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="name-degination">
                                                        <h4>
                                                          Mr. Jacoline Frankly
                                                        </h4>
                                                        <span>
                                                          UI/UX Engineer
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                    <div className="contact-area">
                                                      <h4>Contact Info</h4>
                                                      <ul>
                                                        <li>
                                                          Phone:
                                                          <a href="#">
                                                            +880-177 443 5455{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/phone-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Email:
                                                          <a href="#">
                                                            info@example.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/envlop-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Website:
                                                          <a href="#">
                                                            www.infositeexample.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/web-5.svg "
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Career Objective</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="description">
                                                      <p>
                                                        I'm a passionate UI/UX
                                                        designer and can bring
                                                        innovative ideas &amp;
                                                        concepts to life for
                                                        client-based design
                                                        projects. I have more
                                                        than 3 years of design
                                                        experience in
                                                        digital/e-commerce. I
                                                        experienced at tackle
                                                        various needs from
                                                        landing page designs,
                                                        web app interfaces. I
                                                        have skills in User
                                                        Experience Design (UXD),
                                                        user-centered Design,
                                                        Interaction and Visual
                                                        Design for websites,
                                                        applications, web, and
                                                        mobile products,
                                                        wireframes, mock-ups,
                                                        qualitative and
                                                        quantitative user
                                                        studies, usability
                                                        analysis, and informal
                                                        usability audits.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Personal Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Father’s Name:
                                                              </span>{" "}
                                                              Mr. Norman Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Date of Birth:
                                                              </span>{" "}
                                                              03 January,1998
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Nationality:
                                                              </span>{" "}
                                                              Bangladeshi
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Marital Status:
                                                              </span>{" "}
                                                              Unmarried
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Blood Group:
                                                              </span>{" "}
                                                              O ve+
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Permanent
                                                                Address:
                                                              </span>{" "}
                                                              Village: Mirpur-12
                                                              Block-C, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations d-flex justify-content-end">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Mother’s Name:
                                                              </span>{" "}
                                                              Mrs. Macoline
                                                              Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                National ID:
                                                              </span>{" "}
                                                              88 9919 6712 8762
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Religion:
                                                              </span>{" "}
                                                              Islam
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Gender:
                                                              </span>{" "}
                                                              Male
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Weight:
                                                              </span>{" "}
                                                              75 KG
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Present Address:
                                                              </span>{" "}
                                                              Village: Mirpur
                                                              DOSH, Block-C,
                                                              Avenue-02, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka.
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Educational
                                                        Qualification
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2016- May, 2020
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Royals Republic
                                                          Science &amp;
                                                          Technology University
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            Graduation
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Bachelor Degree In
                                                            CSE
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            3.75/4.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>June,
                                                          2014- April, 2016
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          International
                                                          Collegiate School
                                                          &amp; College
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            HSC
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Science
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            4.96/5.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Career Application
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4 ">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Job
                                                                Place:
                                                              </span>{" "}
                                                              Norland Tech of
                                                              Industry
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Position:
                                                              </span>{" "}
                                                              UI/UX Engineer
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Experiences:
                                                              </span>{" "}
                                                              3 Years
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Salary:
                                                              </span>{" "}
                                                              30000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Expected Salary:
                                                              </span>{" "}
                                                              40000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Available:
                                                              </span>{" "}
                                                              Full Time
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Professionals
                                                        Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2021- May, 2022
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Bistro.Tech Group of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>April,
                                                          2022- Continuing
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Norland Tech of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Special Skills</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="tag-area">
                                                      <ul>
                                                        <li>
                                                          Web Development,
                                                        </li>
                                                        <li>UI/UX Designer,</li>
                                                        <li>
                                                          React Development.
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Social Network</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="social-area">
                                                      <ul>
                                                        <li>
                                                          <a href="https://www.facebook.com/">
                                                            Facebook
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://twitter.com/">
                                                            Twitter
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.linkedin.com/">
                                                            Linkedin
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.pinterest.com/">
                                                            Pinterest
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://dribbble.com/">
                                                            Dribbble
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.behance.net/">
                                                            Behance
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="declaration-area">
                                                    <h6>
                                                      Declaration &amp;
                                                      Authentication-
                                                    </h6>
                                                    <p>
                                                      I do hereby declare that
                                                      the information given
                                                      above is true of my
                                                      knowledge.
                                                    </p>
                                                  </div>
                                                  <div className="gratitude-area">
                                                    <span>Yours Faithful,</span>
                                                    <h6>Jacoline Frankly</h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-footer">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>
                                    <img
                                      src="assets/images/icon/company-2.svg"
                                      alt=""
                                    />
                                    Royals Republic University
                                  </span>
                                  <p>
                                    <span>Applied On:</span> 05 April, 2023
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td data-label="Carrer Summary">
                              <div className="carrer-summary">
                                <h6>
                                  Bistro.Tech Ltd{" "}
                                  <span>(Teaching Assistant)</span>
                                </h6>
                                <ul>
                                  <li>
                                    <span>Experience:</span> 3+ Years
                                  </li>
                                  <li>
                                    <span>Salary:</span> $800/ Per Month
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td data-label="Actions">
                              <div className="action-btn-group">
                                <ul>
                                  <li>
                                    <button>
                                      <img
                                        src="assets/images/icon/shortlist-icon.svg"
                                        alt=""
                                      />{" "}
                                      Shortlist
                                    </button>
                                  </li>
                                  <li>
                                    <button className="reject">
                                      <img
                                        src="assets/images/icon/rejected-icon.svg"
                                        alt=""
                                      />{" "}
                                      Rejected
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Candidate Name">
                              <div className="employee-info">
                                <div className="employee-img">
                                  <img
                                    src="assets/images/bg/employee-img4.png"
                                    alt=""
                                  />
                                </div>
                                <div className="employee-content">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal3"
                                  >
                                    Hari Jonson
                                  </button>
                                  {/* Modal */}
                                  <div
                                    className="modal fade"
                                    id="exampleModal3"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                              <div className="resume-area">
                                                <div className="row g-4 mb-40">
                                                  <div className="col-lg-6">
                                                    <div className="author-area">
                                                      <div className="author-img">
                                                        <img
                                                          src="assets/images/bg/resume-author.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="name-degination">
                                                        <h4>
                                                          Mr. Jacoline Frankly
                                                        </h4>
                                                        <span>
                                                          UI/UX Engineer
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                    <div className="contact-area">
                                                      <h4>Contact Info</h4>
                                                      <ul>
                                                        <li>
                                                          Phone:
                                                          <a href="#">
                                                            +880-177 443 5455{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/phone-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Email:
                                                          <a href="#">
                                                            info@example.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/envlop-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Website:
                                                          <a href="#">
                                                            www.infositeexample.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/web-5.svg "
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Career Objective</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="description">
                                                      <p>
                                                        I'm a passionate UI/UX
                                                        designer and can bring
                                                        innovative ideas &amp;
                                                        concepts to life for
                                                        client-based design
                                                        projects. I have more
                                                        than 3 years of design
                                                        experience in
                                                        digital/e-commerce. I
                                                        experienced at tackle
                                                        various needs from
                                                        landing page designs,
                                                        web app interfaces. I
                                                        have skills in User
                                                        Experience Design (UXD),
                                                        user-centered Design,
                                                        Interaction and Visual
                                                        Design for websites,
                                                        applications, web, and
                                                        mobile products,
                                                        wireframes, mock-ups,
                                                        qualitative and
                                                        quantitative user
                                                        studies, usability
                                                        analysis, and informal
                                                        usability audits.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Personal Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Father’s Name:
                                                              </span>{" "}
                                                              Mr. Norman Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Date of Birth:
                                                              </span>{" "}
                                                              03 January,1998
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Nationality:
                                                              </span>{" "}
                                                              Bangladeshi
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Marital Status:
                                                              </span>{" "}
                                                              Unmarried
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Blood Group:
                                                              </span>{" "}
                                                              O ve+
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Permanent
                                                                Address:
                                                              </span>{" "}
                                                              Village: Mirpur-12
                                                              Block-C, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations d-flex justify-content-end">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Mother’s Name:
                                                              </span>{" "}
                                                              Mrs. Macoline
                                                              Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                National ID:
                                                              </span>{" "}
                                                              88 9919 6712 8762
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Religion:
                                                              </span>{" "}
                                                              Islam
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Gender:
                                                              </span>{" "}
                                                              Male
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Weight:
                                                              </span>{" "}
                                                              75 KG
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Present Address:
                                                              </span>{" "}
                                                              Village: Mirpur
                                                              DOSH, Block-C,
                                                              Avenue-02, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka.
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Educational
                                                        Qualification
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2016- May, 2020
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Royals Republic
                                                          Science &amp;
                                                          Technology University
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            Graduation
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Bachelor Degree In
                                                            CSE
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            3.75/4.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>June,
                                                          2014- April, 2016
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          International
                                                          Collegiate School
                                                          &amp; College
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            HSC
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Science
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            4.96/5.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Career Application
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4 ">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Job
                                                                Place:
                                                              </span>{" "}
                                                              Norland Tech of
                                                              Industry
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Position:
                                                              </span>{" "}
                                                              UI/UX Engineer
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Experiences:
                                                              </span>{" "}
                                                              3 Years
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Salary:
                                                              </span>{" "}
                                                              30000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Expected Salary:
                                                              </span>{" "}
                                                              40000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Available:
                                                              </span>{" "}
                                                              Full Time
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Professionals
                                                        Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2021- May, 2022
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Bistro.Tech Group of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>April,
                                                          2022- Continuing
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Norland Tech of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Special Skills</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="tag-area">
                                                      <ul>
                                                        <li>
                                                          Web Development,
                                                        </li>
                                                        <li>UI/UX Designer,</li>
                                                        <li>
                                                          React Development.
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Social Network</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="social-area">
                                                      <ul>
                                                        <li>
                                                          <a href="https://www.facebook.com/">
                                                            Facebook
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://twitter.com/">
                                                            Twitter
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.linkedin.com/">
                                                            Linkedin
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.pinterest.com/">
                                                            Pinterest
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://dribbble.com/">
                                                            Dribbble
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.behance.net/">
                                                            Behance
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="declaration-area">
                                                    <h6>
                                                      Declaration &amp;
                                                      Authentication-
                                                    </h6>
                                                    <p>
                                                      I do hereby declare that
                                                      the information given
                                                      above is true of my
                                                      knowledge.
                                                    </p>
                                                  </div>
                                                  <div className="gratitude-area">
                                                    <span>Yours Faithful,</span>
                                                    <h6>Jacoline Frankly</h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-footer">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>
                                    <img
                                      src="assets/images/icon/company-2.svg"
                                      alt=""
                                    />
                                    Bistro Mycol University
                                  </span>
                                  <p>
                                    <span>Applied On:</span> 06 April, 2023
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td data-label="Carrer Summary">
                              <div className="carrer-summary">
                                <h6>
                                  Elite Author <span>(Teaching Assistant)</span>
                                </h6>
                                <ul>
                                  <li>
                                    <span>Experience:</span> 1.5+ Years
                                  </li>
                                  <li>
                                    <span>Salary:</span> $1200/ Per Month
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td data-label="Actions">
                              <div className="action-btn-group">
                                <ul>
                                  <li>
                                    <button>
                                      <img
                                        src="assets/images/icon/shortlist-icon.svg"
                                        alt=""
                                      />{" "}
                                      Shortlist
                                    </button>
                                  </li>
                                  <li>
                                    <button className="reject">
                                      <img
                                        src="assets/images/icon/rejected-icon.svg"
                                        alt=""
                                      />{" "}
                                      Rejected
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Candidate Name">
                              <div className="employee-info">
                                <div className="employee-img">
                                  <img
                                    src="assets/images/bg/employee-img5.png"
                                    alt=""
                                  />
                                </div>
                                <div className="employee-content">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal4"
                                  >
                                    Mrs. Jordan Harry
                                  </button>
                                  {/* Modal */}
                                  <div
                                    className="modal fade"
                                    id="exampleModal4"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                              <div className="resume-area">
                                                <div className="row g-4 mb-40">
                                                  <div className="col-lg-6">
                                                    <div className="author-area">
                                                      <div className="author-img">
                                                        <img
                                                          src="assets/images/bg/resume-author.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="name-degination">
                                                        <h4>
                                                          Mr. Jacoline Frankly
                                                        </h4>
                                                        <span>
                                                          UI/UX Engineer
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                    <div className="contact-area">
                                                      <h4>Contact Info</h4>
                                                      <ul>
                                                        <li>
                                                          Phone:
                                                          <a href="#">
                                                            +880-177 443 5455{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/phone-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Email:
                                                          <a href="#">
                                                            info@example.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/envlop-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Website:
                                                          <a href="#">
                                                            www.infositeexample.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/web-5.svg "
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Career Objective</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="description">
                                                      <p>
                                                        I'm a passionate UI/UX
                                                        designer and can bring
                                                        innovative ideas &amp;
                                                        concepts to life for
                                                        client-based design
                                                        projects. I have more
                                                        than 3 years of design
                                                        experience in
                                                        digital/e-commerce. I
                                                        experienced at tackle
                                                        various needs from
                                                        landing page designs,
                                                        web app interfaces. I
                                                        have skills in User
                                                        Experience Design (UXD),
                                                        user-centered Design,
                                                        Interaction and Visual
                                                        Design for websites,
                                                        applications, web, and
                                                        mobile products,
                                                        wireframes, mock-ups,
                                                        qualitative and
                                                        quantitative user
                                                        studies, usability
                                                        analysis, and informal
                                                        usability audits.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Personal Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Father’s Name:
                                                              </span>{" "}
                                                              Mr. Norman Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Date of Birth:
                                                              </span>{" "}
                                                              03 January,1998
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Nationality:
                                                              </span>{" "}
                                                              Bangladeshi
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Marital Status:
                                                              </span>{" "}
                                                              Unmarried
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Blood Group:
                                                              </span>{" "}
                                                              O ve+
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Permanent
                                                                Address:
                                                              </span>{" "}
                                                              Village: Mirpur-12
                                                              Block-C, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations d-flex justify-content-end">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Mother’s Name:
                                                              </span>{" "}
                                                              Mrs. Macoline
                                                              Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                National ID:
                                                              </span>{" "}
                                                              88 9919 6712 8762
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Religion:
                                                              </span>{" "}
                                                              Islam
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Gender:
                                                              </span>{" "}
                                                              Male
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Weight:
                                                              </span>{" "}
                                                              75 KG
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Present Address:
                                                              </span>{" "}
                                                              Village: Mirpur
                                                              DOSH, Block-C,
                                                              Avenue-02, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka.
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Educational
                                                        Qualification
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2016- May, 2020
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Royals Republic
                                                          Science &amp;
                                                          Technology University
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            Graduation
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Bachelor Degree In
                                                            CSE
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            3.75/4.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>June,
                                                          2014- April, 2016
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          International
                                                          Collegiate School
                                                          &amp; College
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            HSC
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Science
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            4.96/5.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Career Application
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4 ">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Job
                                                                Place:
                                                              </span>{" "}
                                                              Norland Tech of
                                                              Industry
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Position:
                                                              </span>{" "}
                                                              UI/UX Engineer
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Experiences:
                                                              </span>{" "}
                                                              3 Years
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Salary:
                                                              </span>{" "}
                                                              30000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Expected Salary:
                                                              </span>{" "}
                                                              40000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Available:
                                                              </span>{" "}
                                                              Full Time
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Professionals
                                                        Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2021- May, 2022
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Bistro.Tech Group of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>April,
                                                          2022- Continuing
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Norland Tech of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Special Skills</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="tag-area">
                                                      <ul>
                                                        <li>
                                                          Web Development,
                                                        </li>
                                                        <li>UI/UX Designer,</li>
                                                        <li>
                                                          React Development.
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Social Network</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="social-area">
                                                      <ul>
                                                        <li>
                                                          <a href="https://www.facebook.com/">
                                                            Facebook
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://twitter.com/">
                                                            Twitter
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.linkedin.com/">
                                                            Linkedin
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.pinterest.com/">
                                                            Pinterest
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://dribbble.com/">
                                                            Dribbble
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.behance.net/">
                                                            Behance
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="declaration-area">
                                                    <h6>
                                                      Declaration &amp;
                                                      Authentication-
                                                    </h6>
                                                    <p>
                                                      I do hereby declare that
                                                      the information given
                                                      above is true of my
                                                      knowledge.
                                                    </p>
                                                  </div>
                                                  <div className="gratitude-area">
                                                    <span>Yours Faithful,</span>
                                                    <h6>Jacoline Frankly</h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-footer">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>
                                    <img
                                      src="assets/images/icon/company-2.svg"
                                      alt=""
                                    />
                                    Internation Colliegate University
                                  </span>
                                  <p>
                                    <span>Applied On:</span> 07 April, 2023
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td data-label="Carrer Summary">
                              <div className="carrer-summary">
                                <h6>
                                  Marko Group <span>(Teaching Assistant)</span>
                                </h6>
                                <ul>
                                  <li>
                                    <span>Experience:</span> 2.5+ Years
                                  </li>
                                  <li>
                                    <span>Salary:</span> $900/ Per Month
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td data-label="Actions">
                              <div className="action-btn-group">
                                <ul>
                                  <li>
                                    <button>
                                      <img
                                        src="assets/images/icon/shortlist-icon.svg"
                                        alt=""
                                      />{" "}
                                      Shortlist
                                    </button>
                                  </li>
                                  <li>
                                    <button className="reject">
                                      <img
                                        src="assets/images/icon/rejected-icon.svg"
                                        alt=""
                                      />{" "}
                                      Rejected
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Candidate Name">
                              <div className="employee-info">
                                <div className="employee-img">
                                  <img
                                    src="assets/images/bg/employee-img6.png"
                                    alt=""
                                  />
                                </div>
                                <div className="employee-content">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal5"
                                  >
                                    Juliya Bhut
                                  </button>
                                  {/* Modal */}
                                  <div
                                    className="modal fade"
                                    id="exampleModal5"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                              <div className="resume-area">
                                                <div className="row g-4 mb-40">
                                                  <div className="col-lg-6">
                                                    <div className="author-area">
                                                      <div className="author-img">
                                                        <img
                                                          src="assets/images/bg/resume-author.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="name-degination">
                                                        <h4>
                                                          Mr. Jacoline Frankly
                                                        </h4>
                                                        <span>
                                                          UI/UX Engineer
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                    <div className="contact-area">
                                                      <h4>Contact Info</h4>
                                                      <ul>
                                                        <li>
                                                          Phone:
                                                          <a href="#">
                                                            +880-177 443 5455{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/phone-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Email:
                                                          <a href="#">
                                                            info@example.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/envlop-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Website:
                                                          <a href="#">
                                                            www.infositeexample.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/web-5.svg "
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Career Objective</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="description">
                                                      <p>
                                                        I'm a passionate UI/UX
                                                        designer and can bring
                                                        innovative ideas &amp;
                                                        concepts to life for
                                                        client-based design
                                                        projects. I have more
                                                        than 3 years of design
                                                        experience in
                                                        digital/e-commerce. I
                                                        experienced at tackle
                                                        various needs from
                                                        landing page designs,
                                                        web app interfaces. I
                                                        have skills in User
                                                        Experience Design (UXD),
                                                        user-centered Design,
                                                        Interaction and Visual
                                                        Design for websites,
                                                        applications, web, and
                                                        mobile products,
                                                        wireframes, mock-ups,
                                                        qualitative and
                                                        quantitative user
                                                        studies, usability
                                                        analysis, and informal
                                                        usability audits.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Personal Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Father’s Name:
                                                              </span>{" "}
                                                              Mr. Norman Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Date of Birth:
                                                              </span>{" "}
                                                              03 January,1998
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Nationality:
                                                              </span>{" "}
                                                              Bangladeshi
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Marital Status:
                                                              </span>{" "}
                                                              Unmarried
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Blood Group:
                                                              </span>{" "}
                                                              O ve+
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Permanent
                                                                Address:
                                                              </span>{" "}
                                                              Village: Mirpur-12
                                                              Block-C, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations d-flex justify-content-end">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Mother’s Name:
                                                              </span>{" "}
                                                              Mrs. Macoline
                                                              Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                National ID:
                                                              </span>{" "}
                                                              88 9919 6712 8762
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Religion:
                                                              </span>{" "}
                                                              Islam
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Gender:
                                                              </span>{" "}
                                                              Male
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Weight:
                                                              </span>{" "}
                                                              75 KG
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Present Address:
                                                              </span>{" "}
                                                              Village: Mirpur
                                                              DOSH, Block-C,
                                                              Avenue-02, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka.
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Educational
                                                        Qualification
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2016- May, 2020
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Royals Republic
                                                          Science &amp;
                                                          Technology University
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            Graduation
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Bachelor Degree In
                                                            CSE
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            3.75/4.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>June,
                                                          2014- April, 2016
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          International
                                                          Collegiate School
                                                          &amp; College
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            HSC
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Science
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            4.96/5.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Career Application
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4 ">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Job
                                                                Place:
                                                              </span>{" "}
                                                              Norland Tech of
                                                              Industry
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Position:
                                                              </span>{" "}
                                                              UI/UX Engineer
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Experiences:
                                                              </span>{" "}
                                                              3 Years
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Salary:
                                                              </span>{" "}
                                                              30000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Expected Salary:
                                                              </span>{" "}
                                                              40000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Available:
                                                              </span>{" "}
                                                              Full Time
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Professionals
                                                        Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2021- May, 2022
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Bistro.Tech Group of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>April,
                                                          2022- Continuing
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Norland Tech of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Special Skills</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="tag-area">
                                                      <ul>
                                                        <li>
                                                          Web Development,
                                                        </li>
                                                        <li>UI/UX Designer,</li>
                                                        <li>
                                                          React Development.
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Social Network</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="social-area">
                                                      <ul>
                                                        <li>
                                                          <a href="https://www.facebook.com/">
                                                            Facebook
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://twitter.com/">
                                                            Twitter
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.linkedin.com/">
                                                            Linkedin
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.pinterest.com/">
                                                            Pinterest
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://dribbble.com/">
                                                            Dribbble
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.behance.net/">
                                                            Behance
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="declaration-area">
                                                    <h6>
                                                      Declaration &amp;
                                                      Authentication-
                                                    </h6>
                                                    <p>
                                                      I do hereby declare that
                                                      the information given
                                                      above is true of my
                                                      knowledge.
                                                    </p>
                                                  </div>
                                                  <div className="gratitude-area">
                                                    <span>Yours Faithful,</span>
                                                    <h6>Jacoline Frankly</h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-footer">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>
                                    <img
                                      src="assets/images/icon/company-2.svg"
                                      alt=""
                                    />
                                    Internation Colliegate University
                                  </span>
                                  <p>
                                    <span>Applied On:</span> 02 April, 2023
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td data-label="Carrer Summary">
                              <div className="carrer-summary">
                                <h6>
                                  Nowreh Tech <span>(Teaching Assistant)</span>
                                </h6>
                                <ul>
                                  <li>
                                    <span>Experience:</span> 2+ Years
                                  </li>
                                  <li>
                                    <span>Salary:</span> $800/ Per Month
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td data-label="Actions">
                              <div className="action-btn-group">
                                <ul>
                                  <li>
                                    <button>
                                      <img
                                        src="assets/images/icon/shortlist-icon.svg"
                                        alt=""
                                      />{" "}
                                      Shortlist
                                    </button>
                                  </li>
                                  <li>
                                    <button className="reject">
                                      <img
                                        src="assets/images/icon/rejected-icon.svg"
                                        alt=""
                                      />{" "}
                                      Rejected
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Candidate Name">
                              <div className="employee-info">
                                <div className="employee-img">
                                  <img
                                    src="assets/images/bg/employee-img1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="employee-content">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal6"
                                  >
                                    Mr. Willium Jacson
                                  </button>
                                  {/* Modal */}
                                  <div
                                    className="modal fade"
                                    id="exampleModal6"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                          <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          />
                                        </div>
                                        <div className="modal-body">
                                          <div className="row justify-content-center">
                                            <div className="col-lg-12">
                                              <div className="resume-area">
                                                <div className="row g-4 mb-40">
                                                  <div className="col-lg-6">
                                                    <div className="author-area">
                                                      <div className="author-img">
                                                        <img
                                                          src="assets/images/bg/resume-author.png"
                                                          alt=""
                                                        />
                                                      </div>
                                                      <div className="name-degination">
                                                        <h4>
                                                          Mr. Jacoline Frankly
                                                        </h4>
                                                        <span>
                                                          UI/UX Engineer
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                    <div className="contact-area">
                                                      <h4>Contact Info</h4>
                                                      <ul>
                                                        <li>
                                                          Phone:
                                                          <a href="#">
                                                            +880-177 443 5455{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/phone-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Email:
                                                          <a href="#">
                                                            info@example.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/envlop-5.svg"
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          Website:
                                                          <a href="#">
                                                            www.infositeexample.com{" "}
                                                            <span>
                                                              <img
                                                                src="assets/images/icon/web-5.svg "
                                                                alt=""
                                                              />
                                                            </span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Career Objective</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="description">
                                                      <p>
                                                        I'm a passionate UI/UX
                                                        designer and can bring
                                                        innovative ideas &amp;
                                                        concepts to life for
                                                        client-based design
                                                        projects. I have more
                                                        than 3 years of design
                                                        experience in
                                                        digital/e-commerce. I
                                                        experienced at tackle
                                                        various needs from
                                                        landing page designs,
                                                        web app interfaces. I
                                                        have skills in User
                                                        Experience Design (UXD),
                                                        user-centered Design,
                                                        Interaction and Visual
                                                        Design for websites,
                                                        applications, web, and
                                                        mobile products,
                                                        wireframes, mock-ups,
                                                        qualitative and
                                                        quantitative user
                                                        studies, usability
                                                        analysis, and informal
                                                        usability audits.
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Personal Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Father’s Name:
                                                              </span>{" "}
                                                              Mr. Norman Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Date of Birth:
                                                              </span>{" "}
                                                              03 January,1998
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Nationality:
                                                              </span>{" "}
                                                              Bangladeshi
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Marital Status:
                                                              </span>{" "}
                                                              Unmarried
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Blood Group:
                                                              </span>{" "}
                                                              O ve+
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Permanent
                                                                Address:
                                                              </span>{" "}
                                                              Village: Mirpur-12
                                                              Block-C, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations d-flex justify-content-end">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Mother’s Name:
                                                              </span>{" "}
                                                              Mrs. Macoline
                                                              Frankly
                                                            </li>
                                                            <li>
                                                              <span>
                                                                National ID:
                                                              </span>{" "}
                                                              88 9919 6712 8762
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Religion:
                                                              </span>{" "}
                                                              Islam
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Gender:
                                                              </span>{" "}
                                                              Male
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Weight:
                                                              </span>{" "}
                                                              75 KG
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Height:
                                                              </span>{" "}
                                                              5’ 5’’
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Present Address:
                                                              </span>{" "}
                                                              Village: Mirpur
                                                              DOSH, Block-C,
                                                              Avenue-02, Thana:
                                                              Pallavi, District:
                                                              Dhaka, Division:
                                                              Dhaka.
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Educational
                                                        Qualification
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2016- May, 2020
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Royals Republic
                                                          Science &amp;
                                                          Technology University
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            Graduation
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Bachelor Degree In
                                                            CSE
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            3.75/4.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>June,
                                                          2014- April, 2016
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          International
                                                          Collegiate School
                                                          &amp; College
                                                        </h6>
                                                        <ul>
                                                          <li>
                                                            <span>
                                                              Education Level:
                                                            </span>{" "}
                                                            HSC
                                                          </li>
                                                          <li>
                                                            <span>
                                                              My Major:
                                                            </span>{" "}
                                                            Science
                                                          </li>
                                                          <li>
                                                            <span>
                                                              Result/GPA:
                                                            </span>{" "}
                                                            4.96/5.00
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Career Application
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="row g-4 ">
                                                      <div className="col-lg-6 devaider1 position-relative">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Job
                                                                Place:
                                                              </span>{" "}
                                                              Norland Tech of
                                                              Industry
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Position:
                                                              </span>{" "}
                                                              UI/UX Engineer
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Experiences:
                                                              </span>{" "}
                                                              3 Years
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div className="col-lg-6 pl-40">
                                                        <div className="informations">
                                                          <ul>
                                                            <li>
                                                              <span>
                                                                Current Salary:
                                                              </span>{" "}
                                                              30000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Expected Salary:
                                                              </span>{" "}
                                                              40000/=
                                                            </li>
                                                            <li>
                                                              <span>
                                                                Available:
                                                              </span>{" "}
                                                              Full Time
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>
                                                        Professionals
                                                        Information
                                                      </h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="educational-qualification mb-30">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>01.</span>April,
                                                          2021- May, 2022
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Bistro.Tech Group of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="educational-qualification">
                                                      <div className="passing-year">
                                                        <p>
                                                          <span>02.</span>April,
                                                          2022- Continuing
                                                        </p>
                                                        <span />
                                                      </div>
                                                      <div className="education-dt">
                                                        <h6>
                                                          Norland Tech of
                                                          Industry
                                                        </h6>
                                                        <p className="position">
                                                          <span>Position:</span>{" "}
                                                          UI/UX Engineer (
                                                          Full-Time)
                                                        </p>
                                                        <div className="responsibility">
                                                          <h6>
                                                            Responsibility:
                                                          </h6>
                                                          <ul>
                                                            <li>
                                                              Creating high
                                                              quality landing
                                                              pages optimized
                                                              for client website
                                                              brands.
                                                            </li>
                                                            <li>
                                                              Creating
                                                              e-commerce
                                                              interfaces, design
                                                              enhancements, and
                                                              overall improved
                                                              user experience of
                                                              existing sites
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Special Skills</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="tag-area">
                                                      <ul>
                                                        <li>
                                                          Web Development,
                                                        </li>
                                                        <li>UI/UX Designer,</li>
                                                        <li>
                                                          React Development.
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="single-information-area">
                                                    <div className="section-title">
                                                      <h6>Social Network</h6>
                                                      <div className="dash" />
                                                    </div>
                                                    <div className="social-area">
                                                      <ul>
                                                        <li>
                                                          <a href="https://www.facebook.com/">
                                                            Facebook
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://twitter.com/">
                                                            Twitter
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.linkedin.com/">
                                                            Linkedin
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.pinterest.com/">
                                                            Pinterest
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://dribbble.com/">
                                                            Dribbble
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="https://www.behance.net/">
                                                            Behance
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12">
                                                  <div className="declaration-area">
                                                    <h6>
                                                      Declaration &amp;
                                                      Authentication-
                                                    </h6>
                                                    <p>
                                                      I do hereby declare that
                                                      the information given
                                                      above is true of my
                                                      knowledge.
                                                    </p>
                                                  </div>
                                                  <div className="gratitude-area">
                                                    <span>Yours Faithful,</span>
                                                    <h6>Jacoline Frankly</h6>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-footer">
                                          <div className="button-groups">
                                            <ul>
                                              <li>
                                                <button className="primary-bg">
                                                  <img
                                                    src="assets/images/icon/pdf2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Download PDF
                                                </button>
                                                <button>
                                                  <img
                                                    src="assets/images/icon/shortlist2.svg"
                                                    alt=""
                                                  />{" "}
                                                  Shortlist
                                                </button>
                                                <button className="red-bg">
                                                  <img
                                                    src="assets/images/icon/reject2.svg"
                                                    alt=""
                                                  />{" "}
                                                  reject
                                                </button>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>
                                    <img
                                      src="assets/images/icon/company-2.svg"
                                      alt=""
                                    />
                                    Internation Colliegate University
                                  </span>
                                  <p>
                                    <span>Applied On:</span> 02 April, 2023
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td data-label="Carrer Summary">
                              <div className="carrer-summary">
                                <h6>
                                  Colliegate Ltd{" "}
                                  <span>(Teaching Assistant)</span>
                                </h6>
                                <ul>
                                  <li>
                                    <span>Experience:</span> 2+ Years
                                  </li>
                                  <li>
                                    <span>Salary:</span> $800/ Per Month
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td data-label="Actions">
                              <div className="action-btn-group">
                                <ul>
                                  <li>
                                    <button>
                                      <img
                                        src="assets/images/icon/shortlist-icon.svg"
                                        alt=""
                                      />{" "}
                                      Shortlist
                                    </button>
                                  </li>
                                  <li>
                                    <button className="reject">
                                      <img
                                        src="assets/images/icon/rejected-icon.svg"
                                        alt=""
                                      />{" "}
                                      Rejected
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="pagination-table-info">
                        <div className="table-info">
                          <span>06 Results Showing In 20 Jobs</span>
                        </div>
                        <div className="pagination-area">
                          <nav aria-label="...">
                            <ul className="pagination">
                              <li className="page-item disabled">
                                <a
                                  className="page-link"
                                  href="#"
                                  tabIndex={-1}
                                />
                              </li>
                              <li
                                className="page-item active"
                                aria-current="page"
                              >
                                <a className="page-link" href="#">
                                  01
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  02
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  03
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#" />
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobDetailsForCompany;
