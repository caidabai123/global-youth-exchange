<template>
  <div class="about-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://picsum.photos/id/1040/1920/1080')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">{{ t('about.banner.tagline') }}</div>
        <h1>{{ t('about.banner.title') }}</h1>
        <p>{{ t('about.banner.subtitle') }}</p>
      </div>
      <div class="banner-curve"></div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <div class="section-tag">{{ t('about.story.tag') }}</div>
          <h2>{{ t('about.story.title') }}</h2>
          <p>{{ t('about.story.subtitle') }}</p>
        </div>
        
        <div class="content-container">
          <p>{{ t('about.story.paragraph1') }}</p>
          <p>{{ t('about.story.paragraph2') }}</p>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-gray);">
      <div class="container">
        <div class="section-title">
          <div class="section-tag">{{ t('about.values.tag') }}</div>
          <h2>{{ t('about.values.title') }}</h2>
          <p>{{ t('about.values.subtitle') }}</p>
        </div>
        
        <div class="feature-grid">
          <div class="feature-card">
            <h4>{{ t('about.values.mutualRespect.title') }}</h4>
            <p>{{ t('about.values.mutualRespect.desc') }}</p>
          </div>
          <div class="feature-card">
            <h4>{{ t('about.values.openMind.title') }}</h4>
            <p>{{ t('about.values.openMind.desc') }}</p>
          </div>
          <div class="feature-card">
            <h4>{{ t('about.values.winWin.title') }}</h4>
            <p>{{ t('about.values.winWin.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'About',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.about-page {
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

.page-banner-content h1 {
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

.section {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.75rem;
  color: var(--accent-gold);
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 600;
}

.section-title h2 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: #4A5568;
  margin-bottom: 16px;
}

.section-title p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
}

.content-container p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 20px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 35px 30px;
  background: var(--bg-white);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-smooth);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.feature-card h4 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #4A5568;
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .page-banner-content h1 {
    font-size: 2rem;
  }

  .container {
    padding: 0 20px;
  }
}
</style>