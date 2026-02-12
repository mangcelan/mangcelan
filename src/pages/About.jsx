import React, { useEffect } from 'react';

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
    AOS.init();
  }, []);


  return (
    <>
      <section id="about">
        <div className="about-wrap">
          {/* 段落標題 */}
          <header>
            <h2>關於蠻自然</h2>
            <h3>Our Story</h3>
          </header>

          <div className="img1 carousel size-fit">
            <div className="carousel-item w-full ">
              <img src={awrd1} className="w-full object-cover" alt="蠻自然得獎照片" />
            </div>
            <div className="carousel-item w-full">
              <img src={awrd2} className="w-full object-cover" alt="蠻自然得獎照片" />
            </div>
            <div className="carousel-item w-full">
              <img src={awrd3} className="w-full object-cover" alt="蠻自然得獎照片" />
            </div>
            <div className="carousel-item w-full">
              <img src={awrd4} className="w-full object-cover" alt="蠻自然得獎照片" />
            </div>
          </div>

          <div className="block1" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <h4>讓自然與生活一同呼吸的家</h4>
            <p>
              家具，應該與生活一起呼吸。蠻自然的每件作品，都是在自然與人之間找到平衡的結果。我們將「自然共存」的理念，透過材質、設計與細節融入每一件作品中，讓它們在你的生活，不只是擺設，而是伴隨日子的夥伴。
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

