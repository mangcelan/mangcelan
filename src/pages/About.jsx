import React, { useEffect } from 'react';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// IMAGES
import awrd1 from '/images/about/awards_230731.jpg'
import awrd2 from '/images/about/awards_million01.jpeg'
import awrd3 from '/images/about/awards_million02.jpeg'
import awrd4 from '/images/about/awards_silver.jpeg'

// SASS
import '../sass/about.scss';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="about">
        <div className="about-wrap">
          {/* 段落標題 */}
          <header>
            <h2>關於山木工所</h2>
            <h3>About Shanmu Atelier</h3>
          </header>

          <div className="img1 carousel size-fit">
            <div className="carousel-item w-full">
              <img
                src={awrd1}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={awrd2}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={awrd3}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={awrd4}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>

          <div className="block1" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h4>讓自然與生活一同呼吸的家</h4>
            <p>
              家具，應該與生活一起呼吸。山木工所的每件作品，都是在自然與人之間找到平衡的結果。我們將「自然共存」的理念，透過材質、設計與細節融入每一張桌、每一把椅，讓它們在你的生活中，不只是工具，而是伴隨日子的夥伴。
            </p>
          </div>

          <div className="iframe" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
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

        <div className="bg"></div>
      </section>
    </>
  );
};

export default About;

