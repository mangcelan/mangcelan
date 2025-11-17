import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWorksData } from '../hooks/useWorksData';
import WorkCard from '../components/WorkCard';

// IMAGES
import rarrow from '../assets/images/gr-arrow.svg';

// SASS
import '../sass/works.scss';

// 匯入所有圖片（自動對應檔名）
// assets/images/works 底下的圖片全數載成一個物件
const imageMap = import.meta.glob('../assets/images/works/*.{jpg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

const getCoverSrc = (filename) => {
  if (!filename) return '';
  const path = `../assets/images/works/${filename}`;
  return imageMap[path] || '';
};

const Works = () => {
  const { data, error } = useWorksData();

  if (error) return <p style={{ color: 'crimson' }}>讀取失敗：{error}</p>;
  if (!data) return <p>讀取中⋯⋯@@</p>;

  return (
    <>
      <section id="works">
        {/* 段落標題 */}
        <header>
          <h2>作品介紹</h2>
          <h3>Works</h3>
        </header>

        {/* <div className="prompt">
          <p>滾動滑鼠．左右瀏覽</p>
          <span>
            <img src={rarrow} alt="" />
          </span>
        </div> */}

        {/* Works */}
        <div className="works-list">
          {data.map((w) => (
            <div className="card-wrap" key={w.id}>
              <WorkCard
                slug={w.slug}
                title={w.title}
                year={w.year}
                coverSrc={getCoverSrc(w.cover)}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;

