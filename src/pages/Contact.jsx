import React, { useEffect, useState } from 'react';

// SASS
import '../sass/contact.scss';

const Contact = () => {
  const [result, setResult] = useState('');

  // 新增一個 State 來追蹤 purpose 的值，初始值可以設為空字串或預設值。
  const [purpose, setPurpose] = useState('');

  // 新增一個事件處理器來更新 purpose 的 State
  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // 核心設定
    formData.append('access_key', '317e9789-eb18-4d51-b8f5-70f8dbe43fc7');
    // Email 主旨
    formData.append('subject', '【官網】聯絡表單');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? 'Success!' : 'Error');
  };

  return (
    <>
      {/* VISIT */}
      <section id="contact">
        {/* 視窗容器 */}
        <div className="viewport">
          {/* 背景 */}
          <div className="bg"></div>

          {/* 聯絡區塊 */}
          <div className="visit-wrap">
            <div className="text-box">
              {/* 段落標題 */}
              <header>
                <h2>聯絡我們</h2>
                <h3>Contact</h3>
              </header>

              <p>
                有關工作室預約參觀或其他需求，
                <br />
                歡迎透過表單與我們聯繫。
              </p>
            </div>

            <div>
              {/* 表單 */}
              <form id="contactform" method="post" onSubmit={onSubmit}>
                <div className="input-box pur">
                  <label htmlFor="purpose">
                    諮詢項目 Purpose <span>必填</span>
                  </label>
                  <input
                    type="text"
                    name="參訪目的 purpose"
                    className="input"
                    id="purpose"
                    title="參訪目的欄位"
                    list="browsers"
                    required
                    // 綁定 value 和 onChange 事件
                    value={purpose}
                    onChange={handlePurposeChange}
                  />
                  <datalist id="browsers">
                    <option value="客製商品"> Custom</option>
                    <option value="預約參訪">Visit</option>
                    <option value="合作 / 採訪邀約">Collab / Interview</option>
                    <option value="其他">Other</option>
                  </datalist>
                </div>
                {/* 基本資料 */}
                <div className="input-box name">
                  <label htmlFor="name">
                    姓名 Name <span>必填</span>
                  </label>
                  <input
                    type="text"
                    name="姓名 name"
                    className="input"
                    id="name"
                    title="姓名欄位"
                    placeholder="請輸入姓名"
                    required="required"
                    autoFocus
                  />
                </div>
                <div className="input-box tel">
                  <label htmlFor="tel">
                    聯絡電話 Phone Number<span>必填</span>
                  </label>
                  <input
                    type="tel"
                    name="聯絡電話 tel"
                    className="input"
                    id="tel"
                    maxLength="10"
                    title="聯絡電話欄位"
                    placeholder="例如：0123456789"
                    required="required"
                  />
                </div>
                <div className="input-box mail">
                  <label htmlFor="email">
                    電子郵件 E-mail<span>必填</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    id="email"
                    title="E-mail欄位"
                    placeholder="mail@site.com"
                    required
                    multiple
                  />
                </div>

                {/* 條件區域 */}
                {purpose === '客製洽詢' && (
                  <div className="custom-box">
                    <label htmlFor="custom">
                      客製需求<span>必填</span>
                    </label>
                    <textarea
                      name="客製需求 message"
                      className="input"
                      id="custom"
                      rows="3"
                      placeholder="請詳細說明材質、尺寸、用途等"
                    ></textarea>
                  </div>
                )}

                {purpose === '預約參訪' && (
                  <>
                    <div className="input-box num">
                      <label htmlFor="number">
                        參訪人數 Visitor numbers<span>必填</span>
                      </label>
                      <input
                        type="number"
                        name="參訪人數 number"
                        className="input"
                        id="number"
                        title="人數欄位"
                        min="1"
                        max="99"
                      />
                    </div>

                    <div className="input-box date">
                      <label htmlFor="date">
                        參訪日期 Visit Date<span>必填</span>
                      </label>
                      <input
                        type="date"
                        name="參訪日期 date"
                        className="input"
                        id="date"
                        title="日期欄位"
                      />
                    </div>
                  </>
                )}

                {/* 多行文字欄位 */}
                <div className="input-box msg">
                  <label htmlFor="message">特別需求 Note</label>
                  <textarea
                    name="特別需求 message"
                    className="input"
                    id="message"
                    rows="3"
                    placeholder="若有特別需求，敬請提出"
                  ></textarea>
                </div>
                <button className="btn-animation" type="submit">
                  <p>提交</p>
                </button>
                <p>{result}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

