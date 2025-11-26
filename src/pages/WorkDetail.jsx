import { useState, useEffect, useRef, useId } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWorksData } from '../hooks/useWorksData';

// IMAGES
import glarrow from '../assets/images/gl-arrow.svg';

// SASS
import '../sass/workDetail.scss';

const WorkDetail = () => {
  const { slug } = useParams();
  const { data, error } = useWorksData();

  if (error) return <p style={{ color: 'crimson' }}>讀取失敗：{error}</p>;
  if (!data) return <p>讀取中…</p>;

  const w = data.find((item) => item.slug === slug);
  if (!w) {
    return (
      <section className="work-detail">
        <h2>找不到作品</h2>
        <Link to="/works" className="back">
          <img src={glarrow} alt="" />
          <p>回上一頁</p>
        </Link>
      </section>
    );
  }


  // 1) 把 w.cover / w.images 正規化成「圖片名稱陣列」
  const names = (Array.isArray(w.images) && w.images.length) ? w.images
            : (Array.isArray(w.cover) && w.cover.length) ? w.cover
            : [w.cover];

  // 2) 把名稱轉成可以用的 src（同時相容多種寫法）
  const toSrc = (p) => {
    if (typeof p !== 'string') return p;
    if (/^https?:\/\//.test(p)) return p; // 完整網址
    if (p.startsWith('/')) return `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`; // /images/...
    return `${import.meta.env.BASE_URL}images/works/${p}`; // 純檔名 → 補上資料夾
  };

  const gallery = names.map(toSrc);
  console.table(gallery); // ← 再對照 Network 的 Request URL

  return (
    <>
      <section id="work-detail">
        {/* 段落標題 */}
        <header className="detail-header">
          <h2>作品介紹</h2>
          <h3>Works</h3>
        </header>

        <div className="detail-content">
          {/* 作品圖片 */}
          {gallery.length > 0 && (
            <div className="detail-img">
              {gallery.map((src, i) => (
                <img key={i} src={src} alt={`${w.title} 圖片 ${i + 1}`} loading="lazy" />
              ))}
            </div>
          )}

          {/* 作品說明 */}
          <div className="text-box" key={w.id}>
            <h3>{w.title}</h3>
            <time className="year">{w.year}</time>

            <div className="detail-desc">
              <p>{w.desc}</p>
            </div>

            <div className="detail-specs">
              <div className="size">
                <h4>尺寸</h4>
                <p>{w.size}</p>
              </div>

              <div className="material">
                <h4>材質</h4>
                <p>{w.materials}</p>
              </div>

              <div className="custom">
                <h4>商品訂製</h4>
                <p>{w.state}</p>
              </div>
            </div>

            <Link to="/" className="back">
              <img src={glarrow} alt="回上一頁" />
              <p>回上一頁</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkDetail;

