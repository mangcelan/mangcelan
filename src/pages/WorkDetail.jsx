import { useParams, Link } from 'react-router-dom';
import { useWorksData } from '../hooks/useWorksData';

// IMAGES
import glarrow from '../assets/images/gl-arrow.svg';

// 自動匯入所有作品圖片
const imageMap = import.meta.glob('../assets/images/works/*', {
  eager: true,
  import: 'default',
  query: '?url',
});

// 依照圖片名稱取得圖片 URL
const getWorkImage = (filename) => {
  if (!filename) return null;

  // 取得純檔名
  const name = filename.split('/').pop();

  // 對應圖片
  const path = `../assets/images/works/${name}`;
  const image = imageMap[path];

  if (!image) {
    console.warn('找不到作品圖片：', filename);
  }

  return image ?? null;
};

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

  // 1) 正規化作品圖片資料
  // 優先使用 image（沒有才使用 cover
  const names =
    Array.isArray(w.images) && w.images.length
      ? w.images
      : Array.isArray(w.cover) && w.cover.length
        ? w.cover
        : [w.cover];

  const gallery = names.map(getWorkImage).filter(Boolean);

  return (
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
  );
};

export default WorkDetail;

