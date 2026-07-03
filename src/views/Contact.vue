<template>
  <div class="contact-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://picsum.photos/id/1048/1920/1080')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">{{ t('contact.banner.tagline') }}</div>
        <h2>{{ t('contact.banner.title') }}</h2>
        <p>{{ t('contact.banner.subtitle') }}</p>
      </div>
      <div class="banner-curve"></div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('contact.info.title') }}</h2>
          <p class="section-desc">{{ t('contact.form.title') }}</p>
        </div>

        <div class="contact-info-grid">
          <div class="info-block">
            <h4>{{ t('contact.info.headquarters') }}</h4>
            <p>{{ t('contact.info.address') }}</p>
          </div>
          <div class="info-block">
            <h4>{{ t('contact.info.phone') }}</h4>
            <p>+61 2 8211 0688</p>
          </div>
          <div class="info-block">
            <h4>{{ t('contact.info.email') }}</h4>
            <p>contact@datangcapital.com.au</p>
          </div>
          <div class="info-block">
            <h4>{{ t('contact.info.coverage') }}</h4>
            <p>{{ t('contact.info.countries') }}</p>
          </div>
        </div>

        <div class="quick-access">
          <a href="mailto:contact@datangcapital.com.au" class="access-btn">{{ t('contact.form.submit') }}</a>
          <a href="tel:+61282110688" class="access-btn">{{ t('contact.info.phone') }}</a>
        </div>

        <div class="divider"></div>

        <div class="form-section">
          <h3 class="form-title">{{ t('contact.form.title') }}</h3>
          <p class="form-desc">{{ t('contact.form.title') }}</p>

          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <input type="text" v-model="form.name" :placeholder="t('contact.form.name')" required>
              </div>
              <div class="form-group">
                <input type="email" v-model="form.email" :placeholder="t('contact.form.email')" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <input type="tel" v-model="form.phone" :placeholder="t('contact.form.phone')" required>
              </div>
              <div class="form-group">
                <select v-model="form.type" required>
                  <option value="">{{ t('contact.form.subject') }}</option>
                  <option value="program">{{ t('header.nav.culturalExchange') }}</option>
                  <option value="visa">{{ t('header.nav.culturalVisa') }}</option>
                  <option value="working-holiday">{{ t('header.nav.workingHoliday') }}</option>
                  <option value="internship">{{ t('header.nav.internshipVisa') }}</option>
                  <option value="cooperation">{{ t('contact.info.countries') }}</option>
                  <option value="other">{{ t('contact.form.subject') }}</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <textarea v-model="form.message" :placeholder="t('contact.form.message')" rows="6" required></textarea>
            </div>
            <div class="form-submit">
              <button type="submit" class="submit-btn">{{ t('contact.form.submit') }}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Contact',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        type: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      alert(t('contact.form.submit'))
      this.form = { name: '', email: '', phone: '', type: '', message: '' }
    }
  }
}
</script>

<style scoped>
.contact-page {
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

.section {
  padding: 80px 0 100px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2rem;
  color: #4A5568;
  margin-bottom: 15px;
  font-weight: normal;
}

.section-desc {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
}

/* 联系信息 - 简约留白风格 */
.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  margin-bottom: 60px;
}

.info-block {
  text-align: center;
}

.info-block h4 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 20px;
  font-weight: normal;
}

.info-block p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
}

/* 快速咨询入口 */
.quick-access {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 80px;
}

.access-btn {
  padding: 14px 35px;
  border: 1px solid #4A5568;
  color: #4A5568;
  text-decoration: none;
  font-size: 0.95rem;
  transition: var(--transition-smooth);
  border-radius: 4px;
}

.access-btn:hover {
  background: var(--primary-blue);
  color: white;
}

/* 分隔线 */
.divider {
  width: 60px;
  height: 1px;
  background: var(--border-light);
  margin: 0 auto 80px;
}

/* 表单区域 */
.form-section {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.form-title {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 1.6rem;
  color: #4A5568;
  margin-bottom: 10px;
  font-weight: normal;
}

.form-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 50px;
}

.contact-form {
  text-align: left;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 25px;
}

.form-group {
  width: 100%;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 16px 20px;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 1rem;
  color: var(--text-primary);
  transition: var(--transition-smooth);
  background: var(--bg-white);
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-gold);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23555' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  padding-right: 40px;
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
  margin-bottom: 30px;
}

.form-submit {
  text-align: center;
}

.submit-btn {
  padding: 16px 50px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.submit-btn:hover {
  background: var(--accent-gold);
}

@media (max-width: 1024px) {
  .contact-info-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .page-banner-content h2 {
    font-size: 1.8rem;
  }

  .section {
    padding: 60px 0 80px;
  }

  .container {
    padding: 0 25px;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .contact-info-grid {
    grid-template-columns: 1fr;
    gap: 35px;
    margin-bottom: 40px;
  }

  .info-block h4 {
    margin-bottom: 12px;
  }

  .quick-access {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
  }

  .access-btn {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }

  .divider {
    margin-bottom: 50px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .form-group textarea {
    min-height: 120px;
  }

  .submit-btn {
    width: 100%;
  }
}
</style>