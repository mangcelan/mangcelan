import { Link } from 'react-router-dom';
import wArrow from '../assets/images/works-arrow.svg';
import React from 'react';

// SASS
import '../sass/works.scss';

const WorkCard = React.memo(function WorkCard({ slug, title, year, coverSrc }) {
  return (
    <div className="work-card">
      <Link to={`/works/${slug}`}>
        <div className="work-contents">
          {/* 作品圖片 */}
          <div className="work-image">
            <img src={coverSrc} alt={`${title} 封面`} loading="lazy" />
          </div>

          {/* hover色塊 */}
          <div className="work-sum">
            <div className="content">
              <p className="work-name">{title}</p>
              <div className="work-mfg">
                <p>{year}</p>
                <div className="work-arrow">
                  <img src={wArrow} alt="" />
                </div>
              </div>
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});

export default WorkCard;

