import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// IMAGES
import logo from '../assets/logo-tc+en.png';
import asa from '../assets/images/visit/woodcraft_visit3.jpg';
import vst1 from '../assets/images/visit/woodcraft_visit7.jpg';
import vst2 from '../assets/images/visit/woodcraft_visit2.jpg';
import vst3 from '../assets/images/visit/woodcraft_visit4.jpg';
import vst4 from '../assets/images/visit/woodcraft_visit6.jpg';
import vst5 from '../assets/images/visit/woodcraft_visit8.jpg';
import rarrow from '../assets/images/gr-arrow.svg';
import varrow from '../assets/images/left-arrow.svg';

// components
import Works from './Works.jsx';
import Reservation from '../components/Reservation.jsx';
import BackToTop from '../components/BackToTop.jsx';

// SASS
import '../sass/homepage.scss';

export default function Homepage() {
  // VIDEO
  // 使用 useRef 來取得 DOM 元素的引用 (代替 getElementById)
  const videoRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    // 確保元素存在後，才添加事件監聽器
    const videoElement = videoRef.current;
    const targetElement = targetRef.current;

    // 進行防禦性檢查
    if (videoElement && targetElement) {
      // 監聽 'ended' 事件
      const handleVideoEnd = () => {
        // 影片播放結束後執行的動作

        // 使用 scrollIntoView() 將頁面捲動到目標元素
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });

        console.log('影片播放完畢，頁面已跳轉。');
      };

      videoElement.addEventListener('ended', handleVideoEnd);

      // 在元件卸載時清除監聽器，防止記憶體洩漏
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []); // 空依賴陣列確保只執行一次 (類似 componentDidMount)

  // // 只有在視窗寬度大於 640px 時才加入影片原始碼
  // if (window.innerWidth > 640) {
  //   const videoContainer = document.getElementById('video-container');
  //   videoContainer.innerHTML = `<video src="video.mp4" autoplay loop muted></video>`;
  // }
  return (
    <>
      {/* HERO */}
      <section className="hero" id="Hero">
        <header>
          <h2>蠻自然家具設計</h2>
          <h4>從山林到客廳——原住民工藝生活進行式</h4>
        </header>

        <video src="./mangcelan-hero.mp4" id="Video" ref={videoRef} autoPlay muted></video>
        <img src={vst1} alt="蠻自然家具設計首頁" />

        {/* reservation */}
        <Reservation />
      </section>

      {/* OURSTORY */}
      <section id="Ourstory" ref={targetRef}>
        <header>
          <h2>關於蠻自然</h2>
          <h3>Our Story</h3>
        </header>

        <div className="text-box">
          {/* 說明文字 */}
          <div className="text">
            <h4>從山林到客廳——原住民工藝生活進行式</h4>
            <p>
              蠻自然家具設計成立於2021年，
              <br />
              以手工、天然素材與文化故事為核心，
              <br />
              打造兼具功能與情感的手作木作家具。
              <br />
              <br />
              作品取材自實木、竹藤與串珠，
              <br />
              融合阿美族文化語彙與當代設計美學，
              <br />
              呈現自然樸實卻細膩的質感。
              <br />
              <br />
              我們相信，家具不只是物件，
              <br />
              而是人與自然、生活與時間的連結。
              <br />
              蠻自然透過工藝與設計，
              <br />
              將溫度與故事延伸至每一個生活場域。
            </p>
          </div>

          <Link to="/about" className="brand-img">
            <p>了解更多</p>
          </Link>
        </div>

        <div className="bg-box">
          <div className="image-box">
            {/* 照片 */}
            <div className="img img1">
              <img src={vst1} alt="" />
            </div>
            <div className="img img2">
              <img src={vst2} alt="" />
            </div>
            <div className="img img3">
              <img src={vst3} alt="" />
            </div>
            <div className="img img4">
              <img src={vst4} alt="" />
            </div>
            <div className="img img5">
              <img src={vst5} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <Works />

      {/* BACKTOTOP */}
      <BackToTop />
    </>
  );
}

