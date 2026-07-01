<template>
  <div class="visa-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://source.unsplash.com/random/1920x1080?passport,visa,international')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">VISA SERVICES</div>
        <h2>国际青年文化交流签证</h2>
        <p>专业签证咨询与办理服务，助力您的文化交流之旅</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="visa-category">
          <h2 class="visa-category-title">交流访问与政府授权交换类</h2>
          <p class="visa-category-desc">以下签证适用于参加指定交流项目、实习培训或研究活动的申请人</p>
        </div>

        <!-- 美国 J-1 签证 -->
        <div class="visa-block">
          <div class="visa-header">
            
            <div class="visa-info">
              <div class="visa-country">美国 USA</div>
              <h3>J-1 Exchange Visitor Visa</h3>
              <div class="visa-subtitle">交流访问签证</div>
            </div>
          </div>

          <div class="visa-content">
            <div class="visa-image">
              <img src="https://source.unsplash.com/random/1920x1080?usa,washington,government" alt="J-1 Visa">
              <div class="source-links">
                <h4>官网来源</h4>
                <a href="https://travel.state.gov/content/travel/en/us-visas/study/exchange.html" target="_blank">美国国务院 Exchange Visitor Visa</a>
                <a href="https://j1visa.state.gov/programs/intern/" target="_blank">BridgeUSA Intern</a>
                <a href="https://j1visa.state.gov/programs/trainee/" target="_blank">BridgeUSA Trainee</a>
                <a href="https://www.ice.gov/sevis/i901" target="_blank">ICE I-901 SEVIS Fee</a>
              </div>
            </div>

            <div class="visa-details">
              <div class="detail-section">
                <h4>定位</h4>
                <p>美国交流访问项目签证，用于参加美国国务院指定 sponsor 管理的文化交流、实习、培训、研究、教学等项目；实习/培训场景常见类别为 Intern 和 Trainee。</p>
              </div>

              <div class="detail-section">
                <h4>适用人群</h4>
                <p>已有美国指定 sponsor、接收单位、实习或培训安排的申请人；Intern 偏向在读或毕业不久学生，Trainee 偏向有相关学历、证书或工作经验的专业人员。</p>
              </div>

              <div class="detail-section">
                <h4>核心条件</h4>
                <ul>
                  <li>需 sponsor 签发 DS-2019</li>
                  <li>Intern/Trainee 通常还需 DS-7002</li>
                  <li>Intern 通常要求境外高校在读或毕业不超过项目开始前 12 个月</li>
                  <li>Trainee 通常要求相关学历加 1 年境外经验，或无相关学历但有 5 年相关境外经验</li>
                </ul>
              </div>


              <div class="detail-section">
                <h4>获批权益</h4>
                <ul>
                  <li>可按 DS-2019/DS-7002 参加交流、实习或培训</li>
                  <li>符合条件的配偶和 21 岁以下未婚子女可申请 J-2 随行</li>
                </ul>
              </div>


              
            </div>
          </div>
        </div>

        <!-- 英国 GAE 签证 -->
        <div class="visa-block uk-visa">
          <div class="visa-header">
            
            <div class="visa-info">
              <div class="visa-country">英国 UNITED KINGDOM</div>
              <h3>Government Authorised Exchange Visa</h3>
              <div class="visa-subtitle">Temporary Work - 政府授权交换类</div>
            </div>
          </div>

          <div class="visa-content">
            <div class="visa-image">
              <img src="https://source.unsplash.com/random/1920x1080?uk,london,parliament" alt="GAE Visa">
                <div class="source-links">
                <h4>官网来源</h4>
                <a href="https://www.gov.uk/government-authorised-exchange" target="_blank">GOV.UK Government Authorised Exchange</a>
                <a href="https://www.gov.uk/government-authorised-exchange/eligibility" target="_blank">GOV.UK Eligibility</a>
                <a href="https://www.gov.uk/healthcare-immigration-application/how-much-pay" target="_blank">GOV.UK Healthcare Surcharge</a>
              </div>
            </div>

            <div class="visa-details">
              <div class="detail-section">
                <h4>定位</h4>
                <p>英国 Temporary Work 路线下的政府授权交换签证，用于短期工作体验、培训、研究、fellowship、海外政府语言项目等 approved scheme。</p>
              </div>

              <div class="detail-section">
                <h4>适用人群</h4>
                <p>已有英国 licensed sponsor、Certificate of Sponsorship 或 sponsorship reference，且活动内容属于 approved exchange scheme 的申请人。</p>
              </div>

              <div class="detail-section">
                <h4>核心条件</h4>
                <ul>
                  <li>需有效 sponsor reference</li>
                  <li>通常需证明 GBP 1,270 生活资金连续持有 28 天</li>
                  <li>除非已在英国合法居住满 12 个月或 sponsor certify maintenance</li>
                </ul>
              </div>


              <div class="detail-section">
                <h4>获批权益</h4>
                <ul>
                  <li>可从事 sponsor reference 对应活动，可学习</li>
                  <li>符合条件时配偶和子女可作为 dependants 随行</li>
                  <li>部分第二份工作通常每周最多 20 小时</li>
                </ul>
              </div>


            
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CulturalVisa'
}
</script>

<style scoped>
.visa-page {
  padding-top: 80px;
}

.page-banner {
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
}

.page-banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 43, 91, 0.7);
}

.page-banner-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.tagline {
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 15px;
  opacity: 0.8;
}

.page-banner-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.page-banner-content p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.section {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.visa-category {
  text-align: center;
  margin-bottom: 50px;
}

.visa-category-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--primary-blue);
  margin-bottom: 10px;
}

.visa-category-desc {
  color: var(--text-secondary);
  font-size: 1rem;
}

.visa-block {
  margin-bottom: 60px;
}

.visa-header {
  background: var(--primary-blue);
  color: white;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
}

.uk-visa .visa-header {
  background: linear-gradient(135deg, #012169 0%, #002B5B 100%);
}

.visa-info .visa-country {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  opacity: 0.8;
  margin-bottom: 5px;
}

.visa-info h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.visa-subtitle {
  font-size: 0.95rem;
  opacity: 0.9;
}

.visa-content {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  margin-top: 30px;
  padding: 0 20px;
}

.visa-image {
  position: relative;
}

.visa-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.image-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: var(--primary-blue);
  color: white;
  padding: 15px 20px;
  border-radius: 4px;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
}

.visa-details {
  padding: 0;
}

.detail-section {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-light);
}

.detail-section:last-of-type {
  border-bottom: none;
}

.detail-section.tip {
  background: var(--accent-cream);
  padding: 20px;
  border-left: 4px solid var(--accent-gold);
  border-radius: 4px;
}

.detail-section h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: var(--primary-blue);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.detail-section p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.detail-section ul {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.detail-section li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
}

.detail-section li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-gold);
  font-weight: bold;
}

.fee-list {
  margin-top: 0;
}

.fee-list li {
  padding: 10px 0;
}

.source-links {
  margin-top: 25px;
  padding: 20px;
  background: var(--bg-warm);
  border-radius: 8px;
}

.source-links h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: var(--primary-blue);
  margin-bottom: 15px;
}

.source-links a {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 10px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition-smooth);
}

.source-links a:hover {
  color: var(--accent-gold);
}

@media (max-width: 1024px) {
  .visa-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .visa-image img {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .page-banner-content h2 {
    font-size: 1.8rem;
  }

  .visa-header {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;
  }

  .visa-info h3 {
    font-size: 1.3rem;
  }

  .visa-content {
    padding: 0;
  }

  .visa-image img {
    height: 300px;
  }

  .detail-section {
    padding-bottom: 15px;
    margin-bottom: 20px;
  }

  .detail-section.tip {
    padding: 15px;
  }

  .source-links {
    padding: 15px;
  }

  .source-links a {
    display: block;
    margin-right: 0;
  }
}
</style>