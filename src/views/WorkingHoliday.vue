<template>
  <div class="wh-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://picsum.photos/id/10/1920/1080')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">{{ t('workingHoliday.banner.tagline') }}</div>
        <h1>{{ t('workingHoliday.banner.title') }}</h1>
        <p>{{ t('workingHoliday.banner.subtitle') }}</p>
      </div>
      <div class="banner-curve"></div>
    </section>

    <section class="intro-section">
      <div class="intro-container">
        <p>{{ t('workingHoliday.intro.desc') }}</p>
      </div>
    </section>

    <!-- Australia -->
    <section class="country-section">
      <div class="country-banner">
        <div class="country-banner-bg" style="background-image: url('https://picsum.photos/id/1015/1920/1080')"></div>
        <div class="country-banner-overlay"></div>
        <div class="country-banner-content">
          <span class="country-tag">{{ t('workingHoliday.australia.country') }}</span>
          <h2>{{ t('workingHoliday.australia.subtitle') }}</h2>
          <p>{{ t('workingHoliday.australia.title') }}</p>
        </div>
      </div>
      
      <div class="country-detail">
        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.australia.duration') }}</span>
          <p>{{ t('workingHoliday.australia.desc') }}</p>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.australia.requirements') }}</span>
          <p>{{ t('workingHoliday.australia.requirementsDesc') }}</p>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.australia.work') }}</span>
          <p>{{ t('workingHoliday.australia.workDesc') }}</p>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.australia.age') }}</span>
          <p>{{ t('workingHoliday.australia.ageDesc') }}</p>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.australia.fees') }}</span>
          <p>{{ t('workingHoliday.australia.durationDesc') }}</p>
        </div>

        <div class="detail-row tip">
          <span class="detail-label">{{ t('workingHoliday.australia.note') }}</span>
          <p>{{ t('workingHoliday.australia.noteDesc') }}</p>
        </div>

        <div class="source-links">
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/working-holiday-417" target="_blank">Subclass 417</a>
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-and-holiday-462" target="_blank">Subclass 462</a>
        </div>
      </div>
    </section>

    <!-- New Zealand -->
    <section class="country-section">
      <div class="country-banner">
        <div class="country-banner-bg" style="background-image: url('https://picsum.photos/id/1019/1920/1080')"></div>
        <div class="country-banner-overlay"></div>
        <div class="country-banner-content">
          <span class="country-tag">{{ t('workingHoliday.newZealand.country') }}</span>
          <h2>{{ t('workingHoliday.newZealand.subtitle') }}</h2>
          <p>{{ t('workingHoliday.newZealand.title') }}</p>
        </div>
      </div>
      
      <div class="country-detail">
        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.newZealand.purpose') }}</span>
          <p>{{ t('workingHoliday.newZealand.purposeDesc') }}</p>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.newZealand.eligible') }}</span>
          <ul>
            <li>{{ t('workingHoliday.newZealand.eligible1') }}</li>
            <li>{{ t('workingHoliday.newZealand.eligible2') }}</li>
            <li>{{ t('workingHoliday.newZealand.eligible3') }}</li>
            <li>{{ t('workingHoliday.newZealand.eligible4') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.newZealand.requirements') }}</span>
          <ul>
            <li>{{ t('workingHoliday.newZealand.req1') }}</li>
            <li>{{ t('workingHoliday.newZealand.req2') }}</li>
            <li>{{ t('workingHoliday.newZealand.req3') }}</li>
            <li>{{ t('workingHoliday.newZealand.req4') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.newZealand.workRights') }}</span>
          <ul>
            <li>{{ t('workingHoliday.newZealand.work1') }}</li>
            <li>{{ t('workingHoliday.newZealand.work2') }}</li>
            <li>{{ t('workingHoliday.newZealand.work3') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.newZealand.fees') }}</span>
          <ul>
            <li>{{ t('workingHoliday.newZealand.fee1') }}</li>
            <li>{{ t('workingHoliday.newZealand.fee2') }}</li>
            <li>{{ t('workingHoliday.newZealand.fee3') }}</li>
          </ul>
        </div>

        <div class="source-links">
          <a href="https://www.immigration.govt.nz/visas/working-holiday-visa/" target="_blank">{{ t('workingHoliday.newZealand.officialLink') }}</a>
        </div>
      </div>
    </section>

    <!-- Canada -->
    <section class="country-section">
      <div class="country-banner">
        <div class="country-banner-bg" style="background-image: url('https://picsum.photos/id/1024/1920/1080')"></div>
        <div class="country-banner-overlay"></div>
        <div class="country-banner-content">
          <span class="country-tag">{{ t('workingHoliday.canada.country') }}</span>
          <h2>{{ t('workingHoliday.canada.subtitle') }}</h2>
          <p>{{ t('workingHoliday.canada.title') }}</p>
        </div>
      </div>
      
      <div class="country-detail">
        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.canada.purpose') }}</span>
          <p>{{ t('workingHoliday.canada.purposeDesc') }}</p>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.canada.eligible') }}</span>
          <ul>
            <li>{{ t('workingHoliday.canada.eligible1') }}</li>
            <li>{{ t('workingHoliday.canada.eligible2') }}</li>
            <li>{{ t('workingHoliday.canada.eligible3') }}</li>
            <li>{{ t('workingHoliday.canada.eligible4') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.canada.requirements') }}</span>
          <ul>
            <li>{{ t('workingHoliday.canada.req1') }}</li>
            <li>{{ t('workingHoliday.canada.req2') }}</li>
            <li>{{ t('workingHoliday.canada.req3') }}</li>
            <li>{{ t('workingHoliday.canada.req4') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.canada.workRights') }}</span>
          <ul>
            <li>{{ t('workingHoliday.canada.work1') }}</li>
            <li>{{ t('workingHoliday.canada.work2') }}</li>
            <li>{{ t('workingHoliday.canada.work3') }}</li>
            <li>{{ t('workingHoliday.canada.work4') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.canada.fees') }}</span>
          <ul>
            <li>{{ t('workingHoliday.canada.fee1') }}</li>
            <li>{{ t('workingHoliday.canada.fee2') }}</li>
            <li>{{ t('workingHoliday.canada.fee3') }}</li>
          </ul>
        </div>

        <div class="source-links">
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html" target="_blank">IEC Program</a>
        </div>
      </div>
    </section>

    <!-- Ireland -->
    <section class="country-section">
      <div class="country-banner">
        <div class="country-banner-bg" style="background-image: url('https://picsum.photos/id/1035/1920/1080')"></div>
        <div class="country-banner-overlay"></div>
        <div class="country-banner-content">
          <span class="country-tag">{{ t('workingHoliday.ireland.country') }}</span>
          <h2>{{ t('workingHoliday.ireland.subtitle') }}</h2>
          <p>{{ t('workingHoliday.ireland.title') }}</p>
        </div>
      </div>
      
      <div class="country-detail">
        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.ireland.purpose') }}</span>
          <p>{{ t('workingHoliday.ireland.purposeDesc') }}</p>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.ireland.eligible') }}</span>
          <ul>
            <li>{{ t('workingHoliday.ireland.eligible1') }}</li>
            <li>{{ t('workingHoliday.ireland.eligible2') }}</li>
            <li>{{ t('workingHoliday.ireland.eligible3') }}</li>
            <li>{{ t('workingHoliday.ireland.eligible4') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.ireland.requirements') }}</span>
          <ul>
            <li>{{ t('workingHoliday.ireland.req1') }}</li>
            <li>{{ t('workingHoliday.ireland.req2') }}</li>
            <li>{{ t('workingHoliday.ireland.req3') }}</li>
            <li>{{ t('workingHoliday.ireland.req4') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.ireland.workRights') }}</span>
          <ul>
            <li>{{ t('workingHoliday.ireland.work1') }}</li>
            <li>{{ t('workingHoliday.ireland.work2') }}</li>
            <li>{{ t('workingHoliday.ireland.work3') }}</li>
          </ul>
        </div>

        <div class="detail-row">
          <span class="detail-label">{{ t('workingHoliday.ireland.fees') }}</span>
          <ul>
            <li>{{ t('workingHoliday.ireland.fee1') }}</li>
            <li>{{ t('workingHoliday.ireland.fee2') }}</li>
            <li>{{ t('workingHoliday.ireland.fee3') }}</li>
          </ul>
        </div>

        <div class="detail-row tip">
          <span class="detail-label">{{ t('workingHoliday.ireland.note') }}</span>
          <ul>
            <li>{{ t('workingHoliday.ireland.note1') }}</li>
            <li>{{ t('workingHoliday.ireland.note2') }}</li>
            <li>{{ t('workingHoliday.ireland.note3') }}</li>
          </ul>
        </div>

        <div class="source-links">
          <a href="https://www.irishimmigration.ie/working-holiday-authorisation/" target="_blank">Working Holiday Authorisation</a>
        </div>
      </div>
    </section>

    <section class="footer-section">
      <div class="footer-container">
        <p class="important-tip">{{ t('workingHoliday.footer.tip') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'WorkingHoliday',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style scoped>
.wh-page {
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

.country-section {
  margin-bottom: 80px;
}

.country-banner {
  position: relative;
  height: 40vh;
  display: flex;
  align-items: flex-end;
}

.country-banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
}

.country-banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 43, 91, 0.3) 0%, rgba(0, 43, 91, 0.8) 100%);
}

.country-banner-content {
  position: relative;
  z-index: 1;
  padding: 50px 40px;
  color: white;
}

.country-tag {
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.8;
  display: block;
  margin-bottom: 10px;
}

.country-banner-content h2 {
  font-family: 'Noto Sans SC', 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 5px;
}

.country-banner-content p {
  font-size: 1rem;
  opacity: 0.9;
}

.country-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 40px;
}

.detail-row {
  margin-bottom: 35px;
}

.detail-row:last-of-type {
  margin-bottom: 0;
}

.detail-row.tip {
  background: var(--accent-cream);
  padding: 25px 30px;
  border-radius: 8px;
}

.detail-label {
  display: inline-block;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-gold);
  font-weight: 600;
  margin-bottom: 12px;
  padding: 4px 12px;
  background: rgba(201, 162, 39, 0.1);
  border-radius: 20px;
}

.detail-row p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1rem;
}

.detail-row ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-row li {
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  border-bottom: 1px solid var(--border-light);
}

.detail-row li:last-child {
  border-bottom: none;
}

.detail-row li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: var(--accent-gold);
  border-radius: 50%;
}

.source-links {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid var(--border-light);
}

.source-links a {
  display: inline-block;
  margin-right: 25px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: var(--transition-smooth);
}

.source-links a:hover {
  color: var(--accent-gold);
  border-bottom-color: var(--accent-gold);
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
}

@media (max-width: 768px) {
  .page-banner-content h1 {
    font-size: 1.8rem;
  }

  .intro-section {
    padding: 40px 0;
  }

  .intro-container {
    padding: 0 24px;
  }

  .country-section {
    margin-bottom: 60px;
  }

  .country-banner {
    height: 35vh;
  }

  .country-banner-content {
    padding: 30px 24px;
  }

  .country-banner-content h2 {
    font-size: 1.5rem;
  }

  .country-detail {
    padding: 35px 24px;
  }

  .detail-row {
    margin-bottom: 25px;
  }

  .detail-row.tip {
    padding: 20px;
  }

  .source-links a {
    display: block;
    margin-right: 0;
    margin-bottom: 10px;
  }

  .footer-section {
    padding: 50px 24px;
  }
}
</style>