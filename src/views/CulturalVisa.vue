<template>
  <div class="visa-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://picsum.photos/id/1067/1920/1080')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">{{ t('culturalVisa.banner.tagline') }}</div>
        <h2>{{ t('culturalVisa.banner.title') }}</h2>
        <p>{{ t('culturalVisa.banner.subtitle') }}</p>
      </div>
      <div class="banner-curve"></div>
    </section>

    <section class="section">
      <div class="container">
        <div class="visa-category">
          <h2 class="visa-category-title">{{ t('culturalVisa.intro.title') }}</h2>
          <p class="visa-category-desc">{{ t('culturalVisa.intro.desc') }}</p>
        </div>

        <div class="visa-block">
          <div class="visa-header">
            <div class="visa-info">
              <div class="visa-country">{{ t('culturalVisa.usaJ1.country') }}</div>
              <h3>{{ t('culturalVisa.usaJ1.title') }}</h3>
              <div class="visa-subtitle">{{ t('culturalVisa.usaJ1.subtitle') }}</div>
            </div>
          </div>

          <div class="visa-content">
            <div class="visa-image">
              <img src="https://picsum.photos/id/1067/800/600" :alt="t('culturalVisa.usaJ1.title')">
              <div class="source-links">
                <h4>{{ t('culturalVisa.usaJ1.sourceLinks.title') }}</h4>
                <a href="https://travel.state.gov/content/travel/en/us-visas/study/exchange.html" target="_blank">{{ t('culturalVisa.usaJ1.sourceLinks.usStateDept') }}</a>
                <a href="https://j1visa.state.gov/programs/intern/" target="_blank">{{ t('culturalVisa.usaJ1.sourceLinks.bridgeUSAIntern') }}</a>
                <a href="https://j1visa.state.gov/programs/trainee/" target="_blank">{{ t('culturalVisa.usaJ1.sourceLinks.bridgeUSATrainee') }}</a>
                <a href="https://www.ice.gov/sevis/i901" target="_blank">{{ t('culturalVisa.usaJ1.sourceLinks.iceSevis') }}</a>
              </div>
            </div>

            <div class="visa-details">
              <div class="detail-section">
                <h4>{{ t('culturalVisa.usaJ1.projectType') }}</h4>
                <p>{{ t('culturalVisa.usaJ1.projectDesc') }}</p>
              </div>

              <div class="detail-section">
                <h4>{{ t('culturalVisa.usaJ1.targetGroup') }}</h4>
                <p>{{ t('culturalVisa.usaJ1.targetDesc') }}</p>
              </div>

              <div class="detail-section">
                <h4>{{ t('culturalVisa.usaJ1.requirements') }}</h4>
                <p>{{ t('culturalVisa.usaJ1.requirementsDesc') }}</p>
              </div>


              <div class="detail-section">
                <h4>{{ t('culturalVisa.usaJ1.fees') }}</h4>
                <p>{{ t('culturalVisa.usaJ1.feesDesc') }}</p>
              </div>

              <div class="detail-section">
                <h4>{{ t('culturalVisa.usaJ1.duration') }}</h4>
                <p>{{ t('culturalVisa.usaJ1.durationDesc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="visa-block">
          <div class="visa-header">
            <div class="visa-info">
              <div class="visa-country">{{ t('culturalVisa.ukGAE.country') }}</div>
              <h3>{{ t('culturalVisa.ukGAE.title') }}</h3>
              <div class="visa-subtitle">{{ t('culturalVisa.ukGAE.subtitle') }}</div>
            </div>
          </div>

          <div class="visa-content">
            <div class="visa-image">
              <img src="https://picsum.photos/id/1067/800/600" :alt="t('culturalVisa.ukGAE.title')">
              <div class="source-links">
                <h4>{{ t('culturalVisa.ukGAE.sourceLinks.title') }}</h4>
                <a href="https://www.gov.uk/government-authorised-exchange" target="_blank">{{ t('culturalVisa.ukGAE.sourceLinks.govUKGAE') }}</a>
                <a href="https://www.gov.uk/government-authorised-exchange/eligibility" target="_blank">{{ t('culturalVisa.ukGAE.sourceLinks.govUKGAEEligibility') }}</a>
              </div>
            </div>

            <div class="visa-details">
              <div class="detail-section">
                <h4>{{ t('culturalVisa.ukGAE.projectType') }}</h4>
                <p>{{ t('culturalVisa.ukGAE.projectDesc') }}</p>
              </div>

              <div class="detail-section">
                <h4>{{ t('culturalVisa.ukGAE.targetGroup') }}</h4>
                <p>{{ t('culturalVisa.ukGAE.targetDesc') }}</p>
              </div>

              <div class="detail-section">
                <h4>{{ t('culturalVisa.ukGAE.requirements') }}</h4>
                <p>{{ t('culturalVisa.ukGAE.requirementsDesc') }}</p>
              </div>

              <div class="detail-section">
                <h4>{{ t('culturalVisa.ukGAE.fees') }}</h4>
                <p>{{ t('culturalVisa.ukGAE.feesDesc') }}</p>
              </div>

              <div class="detail-section">
                <h4>{{ t('culturalVisa.ukGAE.duration') }}</h4>
                <p>{{ t('culturalVisa.ukGAE.durationDesc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'CulturalVisa',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.visa-page {
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

.banner-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: var(--bg-white);
  border-radius: 50% 50% 0 0 / 40px 40px 0 0;
}

.page-banner-content h2 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.95);
}

.page-banner-content p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.section {
  padding: 80px 0;
  background: #FFFFFF;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
}

.visa-category {
  text-align: center;
  margin-bottom: 60px;
}

.visa-category-title {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #4A5568;
  margin-bottom: 16px;
}

.visa-category-desc {
  font-size: 1.1rem;
  color: #718096;
}

.visa-block {
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  margin-bottom: 40px;
  overflow: hidden;
}

.visa-header {
  padding: 32px;
  background: linear-gradient(135deg, #002B5B 0%, #003366 100%);
  color: white;
}

.visa-country {
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #C9A227;
  margin-bottom: 8px;
}

.visa-header h3 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.visa-subtitle {
  font-size: 0.95rem;
  opacity: 0.8;
}

.visa-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 0;
}

.visa-image {
  position: relative;
}

.visa-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.source-links {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 43, 91, 0.9), transparent);
}

.source-links h4 {
  font-size: 0.8rem;
  color: #C9A227;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.source-links a {
  display: block;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 4px 0;
  transition: color 0.3s ease;
}

.source-links a:hover {
  color: #C9A227;
}

.visa-details {
  padding: 40px;
}

.detail-section {
  margin-bottom: 32px;
}

.detail-section:last-child {
  margin-bottom: 0;
}

.detail-section h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #4A5568;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.detail-section p {
  font-size: 0.95rem;
  color: #718096;
  line-height: 1.8;
}

.detail-section ul,
.detail-section ol {
  padding-left: 24px;
  margin: 0;
}

.detail-section li {
  font-size: 0.95rem;
  color: #718096;
  line-height: 1.8;
  padding: 6px 0;
}

@media (max-width: 1024px) {
  .visa-content {
    grid-template-columns: 1fr;
  }
  
  .visa-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .section {
    margin-top: -30px;
    padding: 60px 0;
  }
  
  .container {
    padding: 0 24px;
  }
  
  .visa-details {
    padding: 24px;
  }
}
</style>
