<template>
  <div class="ce-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://picsum.photos/id/1035/1920/1080')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">{{ t('culturalExchange.banner.tagline') }}</div>
        <h1>{{ t('culturalExchange.banner.title') }}</h1>
        <p>{{ t('culturalExchange.banner.subtitle') }}</p>
      </div>
      <div class="banner-curve"></div>
    </section>

    <section class="intro-section">
      <div class="intro-container">
        <p>{{ t('culturalExchange.intro.desc') }}</p>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">15+</div>
          <div class="stat-label">{{ t('home.stats.years') }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">{{ t('home.stats.countries') }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100,000+</div>
          <div class="stat-label">{{ t('home.stats.students') }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">200+</div>
          <div class="stat-label">{{ t('home.stats.partners') }}</div>
        </div>
      </div>
    </section>

    <section class="programs-section">
      <div class="section-header">
        <div class="section-tag">{{ t('culturalExchange.programs.sectionTag') }}</div>
        <h2>{{ t('culturalExchange.programs.title') }}</h2>
        <p>{{ t('culturalExchange.intro.title') }}</p>
      </div>

      <div class="programs-grid">
        <div class="program-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/1074/600/400" :alt="t('culturalExchange.programs.studentExchange.tag')">
          </div>
          <div class="card-content">
            <span class="category-tag">{{ t('culturalExchange.programs.studentExchange.tag') }}</span>
            <h3>{{ t('culturalExchange.programs.studentExchange.title') }}</h3>
            <p>{{ t('culturalExchange.programs.studentExchange.desc') }}</p>
            <ul class="card-features">
              <li>{{ t('culturalExchange.programs.studentExchange.feature1') }}</li>
              <li>{{ t('culturalExchange.programs.studentExchange.feature2') }}</li>
              <li>{{ t('culturalExchange.programs.studentExchange.feature3') }}</li>
              <li>{{ t('culturalExchange.programs.studentExchange.feature4') }}</li>
            </ul>
          </div>
        </div>

        <div class="program-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/96/600/400" :alt="t('culturalExchange.programs.culturalImmersion.tag')">
          </div>
          <div class="card-content">
            <span class="category-tag">{{ t('culturalExchange.programs.culturalImmersion.tag') }}</span>
            <h3>{{ t('culturalExchange.programs.artExchange.title') }}</h3>
            <p>{{ t('culturalExchange.programs.artExchange.desc') }}</p>
            <ul class="card-features">
              <li>{{ t('culturalExchange.programs.artExchange.feature1') }}</li>
              <li>{{ t('culturalExchange.programs.artExchange.feature2') }}</li>
              <li>{{ t('culturalExchange.programs.artExchange.feature3') }}</li>
              <li>{{ t('culturalExchange.programs.artExchange.feature4') }}</li>
            </ul>
          </div>
        </div>

        <div class="program-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/1058/600/400" :alt="t('culturalExchange.programs.volunteer.tag')">
          </div>
          <div class="card-content">
            <span class="category-tag">{{ t('culturalExchange.programs.volunteer.tag') }}</span>
            <h3>{{ t('culturalExchange.programs.volunteer.title') }}</h3>
            <p>{{ t('culturalExchange.programs.volunteer.desc') }}</p>
            <ul class="card-features">
              <li>{{ t('culturalExchange.programs.volunteer.feature1') }}</li>
              <li>{{ t('culturalExchange.programs.volunteer.feature2') }}</li>
              <li>{{ t('culturalExchange.programs.volunteer.feature3') }}</li>
              <li>{{ t('culturalExchange.programs.volunteer.feature4') }}</li>
            </ul>
          </div>
        </div>

        <div class="program-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/1050/600/400" :alt="t('culturalExchange.programs.youthForum.tag')">
          </div>
          <div class="card-content">
            <span class="category-tag">{{ t('culturalExchange.programs.youthForum.tag') }}</span>
            <h3>{{ t('culturalExchange.programs.youthForum.title') }}</h3>
            <p>{{ t('culturalExchange.programs.youthForum.desc') }}</p>
            <ul class="card-features">
              <li>{{ t('culturalExchange.programs.youthForum.feature1') }}</li>
              <li>{{ t('culturalExchange.programs.youthForum.feature2') }}</li>
              <li>{{ t('culturalExchange.programs.youthForum.feature3') }}</li>
              <li>{{ t('culturalExchange.programs.youthForum.feature4') }}</li>
            </ul>
          </div>
        </div>

        <div class="program-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/1077/600/400" :alt="t('culturalExchange.programs.summerCamp.tag')">
          </div>
          <div class="card-content">
            <span class="category-tag">{{ t('culturalExchange.programs.summerCamp.tag') }}</span>
            <h3>{{ t('culturalExchange.programs.summerCamp.title') }}</h3>
            <p>{{ t('culturalExchange.programs.summerCamp.desc') }}</p>
            <ul class="card-features">
              <li>{{ t('culturalExchange.programs.summerCamp.feature1') }}</li>
              <li>{{ t('culturalExchange.programs.summerCamp.feature2') }}</li>
              <li>{{ t('culturalExchange.programs.summerCamp.feature3') }}</li>
              <li>{{ t('culturalExchange.programs.summerCamp.feature4') }}</li>
            </ul>
          </div>
        </div>

        <div class="program-card">
          <div class="card-image">
            <img src="https://picsum.photos/id/1039/600/400" :alt="t('culturalExchange.programs.artExchange.tag')">
          </div>
          <div class="card-content">
            <span class="category-tag">{{ t('culturalExchange.programs.artExchange.tag') }}</span>
            <h3>{{ t('culturalExchange.programs.culturalImmersion.title') }}</h3>
            <p>{{ t('culturalExchange.programs.culturalImmersion.desc') }}</p>
            <ul class="card-features">
              <li>{{ t('culturalExchange.programs.culturalImmersion.feature1') }}</li>
              <li>{{ t('culturalExchange.programs.culturalImmersion.feature2') }}</li>
              <li>{{ t('culturalExchange.programs.culturalImmersion.feature3') }}</li>
              <li>{{ t('culturalExchange.programs.culturalImmersion.feature4') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="section-header">
        <div class="section-tag">{{ t('culturalExchange.whyChooseUs.sectionTag') }}</div>
        <h2>{{ t('header.nav.about') }}</h2>
      </div>

      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-number">01</div>
          <h3>{{ t('culturalExchange.features.professional.title') }}</h3>
          <p>{{ t('culturalExchange.features.professional.desc') }}</p>
        </div>
        <div class="feature-item">
          <div class="feature-number">02</div>
          <h3>{{ t('culturalExchange.features.global.title') }}</h3>
          <p>{{ t('culturalExchange.features.global.desc') }}</p>
        </div>
        <div class="feature-item">
          <div class="feature-number">03</div>
          <h3>{{ t('culturalExchange.features.personalized.title') }}</h3>
          <p>{{ t('culturalExchange.features.personalized.desc') }}</p>
        </div>
        <div class="feature-item">
          <div class="feature-number">04</div>
          <h3>{{ t('culturalExchange.features.support.title') }}</h3>
          <p>{{ t('culturalExchange.features.support.desc') }}</p>
        </div>
      </div>
    </section>

    <section class="partners-section">
      <div class="section-header">
        <div class="section-tag">{{ t('culturalExchange.partners.sectionTag') }}</div>
        <h2>{{ t('footer.programs') }}</h2>
        <p>{{ t('culturalExchange.intro.title') }}</p>
      </div>

      <div class="partners-grid">
        <div class="partner-item">{{ t('culturalExchange.partners.unesco') }}</div>
        <div class="partner-item">{{ t('culturalExchange.partners.worldYouthAlliance') }}</div>
        <div class="partner-item">{{ t('culturalExchange.partners.internationalStudentOrg') }}</div>
        <div class="partner-item">{{ t('culturalExchange.partners.embassies') }}</div>
        <div class="partner-item">{{ t('culturalExchange.partners.topUniversities') }}</div>
        <div class="partner-item">{{ t('culturalExchange.partners.multinationalCompanies') }}</div>
      </div>
    </section>

    <section class="footer-section">
      <div class="footer-container">
        <p>{{ t('culturalExchange.intro.desc') }}</p>
        <p>{{ t('home.hero.explore') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'CulturalExchange',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.ce-page {
  padding-top: 80px;
}

.page-banner {
  position: relative;
  height: 50vh;
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

.page-banner-content h1 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2.8rem;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.95);
}

.page-banner-content p {
  font-size: 1.1rem;
  opacity: 0.9;
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
  padding: 140px 0 80px;
  background: #FFFFFF;
}

.intro-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
}

.intro-container p {
  font-size: 1.1rem;
  color: #718096;
  line-height: 1.8;
}

.stats-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, #002B5B 0%, #003366 50%, #002B5B 100%);
  position: relative;
  margin: 40px 0;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: -25px;
  left: 0;
  right: 0;
  height: 25px;
  background: var(--bg-white);
  border-radius: 0 0 50% 50% / 0 0 25px 25px;
}

.stats-section::after {
  content: '';
  position: absolute;
  bottom: -25px;
  left: 0;
  right: 0;
  height: 25px;
  background: var(--bg-white);
  border-radius: 50% 50% 0 0 / 25px 25px 0 0;
}

.stats-section .stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  position: relative;
  z-index: 1;
}

.stat-item {
  text-align: center;
  color: white;
}

.stat-number {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 600;
  color: #C9A227;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.programs-section {
  padding: 140px 0 120px;
  background: #FFFFFF;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header .section-tag {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.8rem;
  color: #C9A227;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 600;
}

.section-header h2 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: #4A5568;
}

.section-header p {
  color: #718096;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
}

.program-card {
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.program-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.program-card:hover .card-image img {
  transform: scale(1.08);
}

.card-content {
  padding: 28px;
}

.category-tag {
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #C9A227;
  font-weight: 600;
  margin-bottom: 12px;
}

.card-content h3 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #4A5568;
  margin-bottom: 12px;
}

.card-content p {
  font-size: 0.95rem;
  color: #718096;
  line-height: 1.7;
  margin-bottom: 16px;
}

.card-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-features li {
  font-size: 0.9rem;
  color: #888888;
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
}

.card-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 6px;
  height: 6px;
  background: #C9A227;
  border-radius: 50%;
}

.features-section {
  padding: 120px 0;
  background: #FAFAFA;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
}

.feature-item {
  text-align: center;
  padding: 32px;
}

.feature-number {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 600;
  color: rgba(201, 162, 39, 0.1);
  margin-bottom: 16px;
}

.feature-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4A5568;
  margin-bottom: 12px;
}

.feature-item p {
  font-size: 0.95rem;
  color: #718096;
  line-height: 1.7;
}

.partners-section {
  padding: 120px 0;
  background: #FFFFFF;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 48px;
}

.partner-item {
  text-align: center;
  padding: 24px;
  background: #FAFAFA;
  border-radius: 8px;
  font-size: 1rem;
  color: #718096;
  font-weight: 500;
}

.footer-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #002B5B 0%, #003366 100%);
  text-align: center;
  position: relative;
}

.footer-section::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  height: 50px;
  background: white;
  border-radius: 0 0 50% 50% / 0 0 50px 50px;
}

.footer-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 48px 0;
}

.footer-container p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 16px;
}

.footer-container p:last-child {
  color: #C9A227;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-banner-content h1 {
    font-size: 2rem;
  }
  
  .banner-curve {
    height: 70px;
    border-radius: 50% 50% 0 0 / 70px 70px 0 0;
  }
  
  .intro-section {
    padding: 100px 0 60px;
  }
  
  .stats-section {
    padding: 80px 20px;
  }
  
  .stats-section::before,
  .stats-section::after {
    height: 35px;
    border-radius: 50% 50% 0 0 / 35px 35px 0 0;
  }
  
  .stats-section::before {
    top: -35px;
  }
  
  .stats-section::after {
    bottom: -35px;
  }
  
  .stats-section .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .programs-section {
    padding: 100px 0 80px;
  }
  
  .programs-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-section::before {
    height: 35px;
  }
  
  .footer-container {
    padding: 40px 24px 0;
  }
}
</style>