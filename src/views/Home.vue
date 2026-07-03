<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="tagline">{{ t('home.hero.tagline') }}</div>
        <h2>{{ t('home.hero.title') }}</h2>
        <p>{{ t('home.hero.subtitle') }}</p>
        <div class="hero-buttons">
          <router-link to="/cultural-exchange" class="btn btn-primary">{{ t('home.hero.explore') }}</router-link>
          <router-link to="/contact" class="btn btn-outline">{{ t('home.hero.contact') }}</router-link>
        </div>
      </div>
      <div class="hero-curve"></div>
    </section>

    <section id="about" class="section about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <div class="section-tag">{{ t('home.aboutSectionTag') }}</div>
            <h2>{{ t('header.nav.about') }}</h2>
            <p>{{ t('about.story.content') }}</p>
          </div>
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-number">01</div>
              <h4>{{ t('home.programs.culturalExchange.title') }}</h4>
              <p>{{ t('home.programs.culturalExchange.desc') }}</p>
            </div>
            <div class="feature-item">
              <div class="feature-number">02</div>
              <h4>{{ t('home.programs.culturalVisa.title') }}</h4>
              <p>{{ t('home.programs.culturalVisa.desc') }}</p>
            </div>
            <div class="feature-item">
              <div class="feature-number">03</div>
              <h4>{{ t('home.programs.internshipVisa.title') }}</h4>
              <p>{{ t('home.programs.internshipVisa.desc') }}</p>
            </div>
          </div>
        </div>
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

    <section id="programs" class="section programs-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">{{ t('home.programs.sectionTag') }}</div>
          <h2>{{ t('home.programs.title') }}</h2>
          <p>{{ t('home.stats.title') }}</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card card-large">
            <div class="card-bg" style="background-image: url('https://picsum.photos/id/1074/800/600')"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
              <div class="category-tag">{{ t('home.programs.culturalExchange.tag') }}</div>
              <h4>{{ t('home.programs.culturalExchange.title') }}</h4>
              <p>{{ t('home.programs.culturalExchange.desc') }}</p>
              <router-link to="/cultural-exchange" class="service-link">{{ t('home.hero.explore') }} →</router-link>
            </div>
          </div>
          <div class="service-card card-medium">
            <div class="card-bg" style="background-image: url('https://picsum.photos/id/1067/800/600')"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
              <div class="category-tag">{{ t('home.programs.culturalVisa.tag') }}</div>
              <h4>{{ t('home.programs.culturalVisa.title') }}</h4>
              <router-link to="/cultural-visa" class="service-link">{{ t('home.hero.explore') }} →</router-link>
            </div>
          </div>
          <div class="service-card card-medium">
            <div class="card-bg" style="background-image: url('https://picsum.photos/id/10/800/600')"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
              <div class="category-tag">{{ t('home.programs.workingHoliday.tag') }}</div>
              <h4>{{ t('home.programs.workingHoliday.title') }}</h4>
              <router-link to="/working-holiday" class="service-link">{{ t('home.hero.explore') }} →</router-link>
            </div>
          </div>
          <div class="service-card card-small">
            <div class="card-bg" style="background-image: url('https://picsum.photos/id/180/800/600')"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
              <div class="category-tag">{{ t('home.programs.internshipVisa.tag') }}</div>
              <h4>{{ t('home.programs.internshipVisa.title') }}</h4>
              <router-link to="/internship-visa" class="service-link">{{ t('home.hero.explore') }} →</router-link>
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
  name: 'Home',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  mounted() {
    this.initScrollEffects()
  },
  methods: {
    initScrollEffects() {
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll() {
      const scrolled = window.scrollY
      const heroContent = document.querySelector('.hero-content')
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 88px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80') center/cover no-repeat;
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 26, 51, 0.9) 0%, rgba(0, 43, 91, 0.85) 50%, rgba(0, 26, 51, 0.8) 100%);
  z-index: -1;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 120px 24px;
  animation: fadeUp 1s ease-out;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content .tagline {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.75rem;
  color: var(--accent-gold);
  letter-spacing: 8px;
  text-transform: uppercase;
  margin-bottom: 32px;
  font-weight: 600;
}

.hero-content h2 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 4.5rem;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 36px;
  letter-spacing: 3px;
  color: var(--bg-white);
}

.hero-content p {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 60px;
  line-height: 2;
  font-weight: 300;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 16px 40px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-transform: uppercase;
  text-decoration: none;
}

.btn-primary {
  background: #C9A227;
  color: white;
  border: 2px solid #C9A227;
}

.btn-primary:hover {
  background: transparent;
  color: #C9A227;
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.btn-outline:hover {
  border-color: #C9A227;
  color: #C9A227;
}

.hero-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: var(--bg-white);
  border-radius: 50% 50% 0 0 / 50px 50px 0 0;
}

.about-section {
  padding: 160px 0 120px;
  background: #FFFFFF;
  position: relative;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
}

.about-text .section-tag {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.8rem;
  color: #C9A227;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 600;
}

.about-text h2 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 500;
  margin-bottom: 24px;
  letter-spacing: 1px;
  color: #4A5568;
}

.about-text p {
  font-size: 1.15rem;
  color: #718096;
  line-height: 1.9;
  font-weight: 300;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.feature-item {
  display: flex;
  gap: 24px;
  padding: 24px;
  background: #FAFAFA;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.feature-item:hover {
  background: #FFFFFF;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  transform: translateX(8px);
}

.feature-number {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #C9A227;
  opacity: 0.5;
  min-width: 50px;
}

.feature-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4A5568;
  margin-bottom: 4px;
}

.feature-item p {
  font-size: 0.95rem;
  color: #718096;
  margin: 0;
}

.stats-section {
  padding: 80px 40px;
  background: var(--bg-light);
  position: relative;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 600;
  color: #4A5568;
  margin-bottom: 12px;
}

.stat-label {
  font-size: 0.95rem;
  color: #718096;
  letter-spacing: 1px;
}

.programs-section {
  padding: 160px 0 120px;
  background: #FFFFFF;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 24px;
}

.service-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.card-large {
  grid-column: span 2;
  grid-row: span 2;
}

.card-medium {
  grid-row: span 2;
}

.card-small {
  grid-column: span 2;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
}

.service-card:hover .card-bg {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 43, 91, 0.85) 0%, rgba(0, 43, 91, 0.6) 100%);
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
}

.category-tag {
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(201, 162, 39, 0.8);
  margin-bottom: 12px;
}

.card-content h4 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 12px;
}

.card-content p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: 16px;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #C9A227;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.service-link:hover {
  gap: 16px;
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 250px);
  }
  
  .card-large {
    grid-column: span 2;
    grid-row: span 1;
  }
  
  .card-medium {
    grid-row: span 1;
  }
  
  .card-small {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .hero-content h2 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .hero-curve {
    height: 30px;
    border-radius: 50% 50% 0 0 / 30px 30px 0 0;
  }
  
  .about-section {
    padding: 100px 0 80px;
  }
  
  .stats-section {
    padding: 80px 20px;
  }
  
  .stats-section::before,
  .stats-section::after {
    height: 20px;
    border-radius: 50% 50% 0 0 / 20px 20px 0 0;
  }

  .stats-section::before {
    top: -20px;
  }

  .stats-section::after {
    bottom: -20px;
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .programs-section {
    padding: 100px 0 80px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .card-large,
  .card-medium,
  .card-small {
    grid-column: span 1;
    grid-row: span 1;
    height: 250px;
  }
}
</style>