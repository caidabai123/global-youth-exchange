<template>
  <div class="internship-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://picsum.photos/id/180/1920/1080')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">{{ t('internshipVisa.banner.tagline') }}</div>
        <h2>{{ t('internshipVisa.banner.title') }}</h2>
        <p>{{ t('internshipVisa.banner.subtitle') }}</p>
      </div>
      <div class="banner-curve"></div>
    </section>

    <section class="intro-section">
      <div class="intro-container">
        <p>{{ t('internshipVisa.intro.desc') }}</p>
      </div>
    </section>

    <section class="countries-section">
      <!-- 澳大利亚 -->
      <div class="country-row">
        <div class="country-image">
          <img src="https://picsum.photos/id/36/800/600" :alt="t('internshipVisa.australia.title')">
        </div>
        <div class="country-content">
          <span class="country-tag">{{ t('internshipVisa.australia.country') }}</span>
          <h3 class="visa-code">{{ t('internshipVisa.australia.visaCode') }}</h3>
          <span class="visa-name">{{ t('internshipVisa.australia.title') }}</span>
          <p class="country-desc">{{ t('internshipVisa.australia.desc') }}</p>
          
          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.australia.who') }}</span>
            <ul>
              <li>{{ t('internshipVisa.australia.who1') }}</li>
              <li>{{ t('internshipVisa.australia.who2') }}</li>
              <li>{{ t('internshipVisa.australia.who3') }}</li>
            </ul>
          </div>

          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.australia.requirements') }}</span>
            <ul>
              <li>{{ t('internshipVisa.australia.req1') }}</li>
              <li>{{ t('internshipVisa.australia.req2') }}</li>
              <li>{{ t('internshipVisa.australia.req3') }}</li>
              <li>{{ t('internshipVisa.australia.req4') }}</li>
            </ul>
          </div>

          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.australia.trainingTypes') }}</span>
            <ul>
              <li>{{ t('internshipVisa.australia.train1') }}</li>
              <li>{{ t('internshipVisa.australia.train2') }}</li>
              <li>{{ t('internshipVisa.australia.train3') }}</li>
            </ul>
          </div>

          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.australia.fees') }}</span>
            <ul>
              <li>{{ t('internshipVisa.australia.fee1') }}</li>
              <li>{{ t('internshipVisa.australia.fee2') }}</li>
            </ul>
          </div>

          <div class="important-note">
            {{ t('internshipVisa.australia.note') }}
          </div>
        </div>
      </div>

      <!-- 新西兰 -->
      <div class="country-row reversed">
        <div class="country-image">
          <img src="https://picsum.photos/id/119/800/600" :alt="t('internshipVisa.newZealand.title')">
        </div>
        <div class="country-content">
          <span class="country-tag">{{ t('internshipVisa.newZealand.country') }}</span>
          <h3 class="visa-code">{{ t('internshipVisa.newZealand.visaCode') }}</h3>
          <span class="visa-name">{{ t('internshipVisa.newZealand.title') }}</span>
          <p class="country-desc">{{ t('internshipVisa.newZealand.desc') }}</p>
          
          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.newZealand.who') }}</span>
            <ul>
              <li>{{ t('internshipVisa.newZealand.who1') }}</li>
              <li>{{ t('internshipVisa.newZealand.who2') }}</li>
              <li>{{ t('internshipVisa.newZealand.who3') }}</li>
              <li>{{ t('internshipVisa.newZealand.who4') }}</li>
            </ul>
          </div>

          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.newZealand.requirements') }}</span>
            <ul>
              <li>{{ t('internshipVisa.newZealand.req1') }}</li>
              <li>{{ t('internshipVisa.newZealand.req2') }}</li>
              <li>{{ t('internshipVisa.newZealand.req3') }}</li>
              <li>{{ t('internshipVisa.newZealand.req4') }}</li>
            </ul>
          </div>

          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.newZealand.fees') }}</span>
            <ul>
              <li>{{ t('internshipVisa.newZealand.fee1') }}</li>
            </ul>
          </div>

          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.newZealand.duration') }}</span>
            <ul>
              <li>{{ t('internshipVisa.newZealand.dur1') }}</li>
              <li>{{ t('internshipVisa.newZealand.dur2') }}</li>
              <li>{{ t('internshipVisa.newZealand.dur3') }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 爱尔兰 -->
      <div class="country-row">
        <div class="country-image">
          <img src="https://picsum.photos/id/28/800/600" :alt="t('internshipVisa.ireland.title')">
        </div>
        <div class="country-content">
          <span class="country-tag">{{ t('internshipVisa.ireland.country') }}</span>
          <h3 class="visa-code">{{ t('internshipVisa.ireland.visaCode') }}</h3>
          <span class="visa-name">{{ t('internshipVisa.ireland.title') }}</span>
          <p class="country-desc">{{ t('internshipVisa.ireland.desc') }}</p>
          
          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.ireland.who') }}</span>
            <ul>
              <li>{{ t('internshipVisa.ireland.who1') }}</li>
              <li>{{ t('internshipVisa.ireland.who2') }}</li>
              <li>{{ t('internshipVisa.ireland.who3') }}</li>
            </ul>
          </div>

          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.ireland.duration') }}</span>
            <ul>
              <li>{{ t('internshipVisa.ireland.dur1') }}</li>
              <li>{{ t('internshipVisa.ireland.dur2') }}</li>
              <li>{{ t('internshipVisa.ireland.dur3') }}</li>
            </ul>
          </div>

          <div class="info-section">
            <span class="detail-label">{{ t('internshipVisa.ireland.fees') }}</span>
            <ul>
              <li>{{ t('internshipVisa.ireland.fee1') }}</li>
              <li>{{ t('internshipVisa.ireland.fee2') }}</li>
              <li>{{ t('internshipVisa.ireland.fee3') }}</li>
            </ul>
          </div>

          <div class="important-note">
            <ul>
              <li>{{ t('internshipVisa.ireland.note1') }}</li>
              <li>{{ t('internshipVisa.ireland.note2') }}</li>
              <li>{{ t('internshipVisa.ireland.note3') }}</li>
              <li>{{ t('internshipVisa.ireland.note4') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="footer-section">
      <div class="footer-container">
        <p class="important-tip">{{ t('internshipVisa.footer.tip') }}</p>
        
        <div class="official-links">
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/training-407" target="_blank">{{ t('internshipVisa.footer.australia') }}</a>
          <span class="divider">·</span>
          <a href="https://www.immigration.govt.nz/visas/student-and-trainee-work-visa/" target="_blank">{{ t('internshipVisa.footer.newZealand') }}</a>
          <span class="divider">·</span>
          <a href="https://www.irishimmigration.ie/atypical-working-scheme/" target="_blank">{{ t('internshipVisa.footer.ireland') }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'InternshipVisa',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.internship-page {
  padding-top: 88px;
}

.page-banner {
  position: relative;
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  background: linear-gradient(135deg, rgba(0, 26, 51, 0.88) 0%, rgba(0, 43, 91, 0.8) 100%);
}

.page-banner-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.tagline {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.75rem;
  color: var(--accent-gold);
  letter-spacing: 8px;
  text-transform: uppercase;
  margin-bottom: 24px;
  font-weight: 600;
}

.page-banner-content h2 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 3.2rem;
  font-weight: 500;
  margin-bottom: 20px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.95);
}

.page-banner-content p {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
}

.banner-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: var(--bg-white);
  border-radius: 50% 50% 0 0 / 40px 40px 0 0;
}

.intro-section {
  padding: 60px 0;
  background: var(--bg-warm);
}

.intro-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
}

.intro-container p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.countries-section {
  padding: 40px 0;
}

.country-row {
  display: flex;
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 40px;
  gap: 60px;
  align-items: flex-start;
}

.country-row.reversed {
  flex-direction: row-reverse;
}

.country-row:last-child {
  margin-bottom: 0;
}

.country-image {
  flex: 1;
  max-width: 45%;
}

.country-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.country-content {
  flex: 1;
  max-width: 55%;
}

.country-tag {
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--accent-gold);
  display: block;
  margin-bottom: 10px;
}

.visa-code {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.visa-name {
  font-size: 1.1rem;
  color: var(--text-secondary);
  display: block;
  margin-bottom: 20px;
}

.country-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 30px;
}

.info-section {
  margin-bottom: 25px;
}

.detail-label {
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-gold);
  font-weight: 600;
  margin-bottom: 10px;
  padding: 4px 12px;
  background: rgba(201, 162, 39, 0.1);
  border-radius: 20px;
}

.info-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-section li {
  padding: 8px 0;
  padding-left: 22px;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  border-bottom: 1px solid var(--border-light);
}

.info-section li:last-child {
  border-bottom: none;
}

.info-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background: var(--accent-gold);
  border-radius: 50%;
}

.important-note {
  background: var(--accent-cream);
  padding: 25px 30px;
  margin-top: 20px;
  border-radius: 8px;
  border-left: 3px solid var(--accent-gold);
}

.important-note p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
}

.important-note ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.important-note li {
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.important-note li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background: var(--accent-gold);
  border-radius: 50%;
}

.footer-section {
  padding: 80px 40px;
  background: var(--bg-warm);
  text-align: center;
}

.footer-container {
  max-width: 800px;
  margin: 0 auto;
}

.important-tip {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.official-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.official-links a {
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: var(--transition-smooth);
}

.official-links a:hover {
  color: var(--accent-gold);
  border-bottom-color: var(--accent-gold);
}

.divider {
  color: var(--border-light);
}

@media (max-width: 900px) {
  .country-row {
    flex-direction: column !important;
    gap: 30px;
  }
  
  .country-image,
  .country-content {
    max-width: 100%;
  }
  
  .country-image img {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .page-banner-content h2 {
    font-size: 1.8rem;
  }

  .intro-section {
    padding: 40px 0;
  }

  .intro-container {
    padding: 0 24px;
  }

  .country-row {
    padding: 0 24px;
    margin-bottom: 60px;
  }

  .country-image img {
    height: 250px;
  }

  .visa-code {
    font-size: 1.5rem;
  }

  .footer-section {
    padding: 50px 24px;
  }

  .official-links {
    flex-direction: column;
    gap: 12px;
  }
}
</style>