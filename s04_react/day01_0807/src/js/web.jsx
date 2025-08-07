// src/App.js
import React from "react";
import "../App.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">로고</div>
            <nav className="main-menu">
                <ul>
                    <li>이용안내
                        <ul className="sub-menu">
                            <li>이용방법</li>
                            <li>이용시간</li>
                            <li>이용요금</li>
                        </ul>
                    </li>
                    <li>이벤트정보
                        <ul className="sub-menu">
                            <li>현장이벤트</li>
                            <li>온라인이벤트</li>
                            <li>이벤트예약</li>
                        </ul>
                    </li>
                    <li>프로그램
                        <ul className="sub-menu">
                            <li>프로그램안내</li>
                            <li>온라인예약</li>
                            <li>단체예약상담</li>
                        </ul>
                    </li>
                    <li>고객센터
                        <ul className="sub-menu">
                            <li>공지사항</li>
                            <li>자주묻는질문</li>
                            <li>자료실</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function ImageSlider() {
    return (
        <div className="image-slider">
            이미지 슬라이드
        </div>
    );
}

function NoticeGalleryTabs() {
    return (
        <div className="notice-gallery">
            <div className="tabs">
                <button>공지사항</button>
                <button>갤러리</button>
            </div>
            <div className="tab-content">
                {/* 탭에 따라 내용 변경 */}
                내용
            </div>
        </div>
    );
}

function Banner() {
    return <div className="banner">배너</div>;
}

function QuickLinks() {
    return <div className="quick-links">바로가기</div>;
}

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">로고</div>
            <div className="footerBox">
                <div className="footer-menu">하단 메뉴</div>
                <div className="copyright">Copyright</div>
            </div>
        </footer>
    );
}

function Web() {
    return (
        <div className="container">
            <Header />

            <div className="main-content">
                <ImageSlider />
                <div className="sub-content">
                    <NoticeGalleryTabs />
                    <Banner />
                    <QuickLinks />
                </div>
                <Footer />
            </div>

        </div>
    );
}

export default Web;