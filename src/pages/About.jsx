import React, { useEffect } from 'react';

import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// IMAGES
import awrd1 from '/images/about/awards_230731.jpg';
import awrd2 from '/images/about/awards_million01.jpg';
import awrd3 from '/images/about/awards_million02.jpg';
import awrd4 from '/images/about/awards_silver.jpg';

// SASS
import '../sass/about.scss';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section id="about">
        {/* 背景 */}
        <div className="bg"></div>

        {/* 頁面標題 */}
        <header className="about-header">
          <h2>關於蠻自然</h2>
          <h3>Our Story</h3>
        </header>

        <div className="about-wrap">
          {/* 品牌故事 */}
          <section className="story-section">
            {/* 得獎照片 */}
            <div className="story-media" data-aos="fade-up">
              <SlCarousel
                className="story-carousel"
                pagination
                // navigation
                style={{ '--scroll-hint': '10%' }}
              >
                {/* 1 */}
                <SlCarouselItem>
                  <img src={awrd1} alt="蠻自然得獎照片" />
                </SlCarouselItem>
                {/* 2 */}
                <SlCarouselItem>
                  <img src={awrd2} alt="蠻自然得獎照片" />
                </SlCarouselItem>
                {/* 3 */}
                <SlCarouselItem>
                  <img src={awrd3} alt="蠻自然得獎照片" />
                </SlCarouselItem>
                {/* 4 */}
                <SlCarouselItem>
                  <img src={awrd4} alt="蠻自然得獎照片" />
                </SlCarouselItem>
              </SlCarousel>
            </div>

            {/* 品牌介紹 */}
            <div className="story-content" data-aos="fade-up" data-aos-delay="200">
              <div className="story-text">
                <h4>讓自然與生活一同呼吸</h4>
                <p>
                  家具，應該與生活一起呼吸。蠻自然的每件作品，都是在自然與人之間找到平衡的結果。我們將「自然共存」的理念，透過材質、設計與細節融入每一件作品中，讓它們在你的生活，不只是擺設，而是伴隨日子的夥伴。
                </p>
              </div>
            </div>
          </section>

          {/* 品牌影片 */}
          <div className="video-section" data-aos="fade-up">
            <iframe
              src="https://www.youtube.com/embed/_LAiP0pX9vw?si=52YOSohev9Yw__-p"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

