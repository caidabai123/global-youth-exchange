<template>
  <div class="contact-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://picsum.photos/id/1059/1920/1080')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">CONTACT US</div>
        <h1>联系我们</h1>
        <p>我们随时准备为您解答任何问题</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="intro-container">
        <p>无论是项目咨询、签证服务还是合作洽谈，我们都期待与您交流。我们的专业团队将为您提供一对一的咨询服务，助您开启国际文化交流之旅。</p>
      </div>
    </section>

    <section class="contact-info-section">
      <div class="contact-container">
        <div class="contact-grid">
          <div class="contact-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>办公地址</h3>
            <p>北京市朝阳区建国门外大街1号<br>国际文化交流中心大厦A座18层</p>
          </div>
          <div class="contact-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>联系电话</h3>
            <p>+86 10 8888 8888<br>+86 10 8888 8889</p>
          </div>
          <div class="contact-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3>电子邮箱</h3>
            <p>info@globalyouth.org<br>visa@globalyouth.org</p>
          </div>
          <div class="contact-card">
            <div class="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3>办公时间</h3>
            <p>周一至周五: 9:00 - 18:00<br>周六: 9:00 - 12:00</p>
          </div>
        </div>
      </div>
    </section>

    <section class="global-offices-section">
      <div class="section-header">
        <div class="section-tag">GLOBAL NETWORK</div>
        <h2>全球办公网络</h2>
        <p>我们在全球多个城市设有联络处，为您提供本地化服务支持</p>
      </div>
      <div class="offices-container">
        <div class="office-card">
          <div class="office-image">
            <img src="https://picsum.photos/id/1031/800/500" alt="Beijing Office">
          </div>
          <div class="office-content">
            <h3>北京总部</h3>
            <p>负责中国地区的项目管理、签证服务和业务拓展</p>
            <div class="office-info">
              <span>北京市朝阳区建国门外大街1号</span>
            </div>
          </div>
        </div>
        <div class="office-card">
          <div class="office-image">
            <img src="https://picsum.photos/id/1067/800/500" alt="New York Office">
          </div>
          <div class="office-content">
            <h3>纽约联络处</h3>
            <p>负责北美地区的项目合作、签证支持和文化交流活动</p>
            <div class="office-info">
              <span>123 Broadway, New York, NY 10001</span>
            </div>
          </div>
        </div>
        <div class="office-card">
          <div class="office-image">
            <img src="https://picsum.photos/id/1040/800/500" alt="London Office">
          </div>
          <div class="office-content">
            <h3>伦敦联络处</h3>
            <p>负责欧洲地区的项目协调、合作伙伴关系管理</p>
            <div class="office-info">
              <span>45 Oxford Street, London W1D 1BS</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="section-header">
        <div class="section-tag">FAQ</div>
        <h2>常见问题</h2>
        <p>以下是我们收到的常见问题，希望能帮助您解答疑惑</p>
      </div>
      <div class="faq-container">
        <div class="faq-item" v-for="(item, index) in faqs" :key="index">
          <button class="faq-question" @click="toggleFaq(index)">
            {{ item.question }}
            <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9h12M12 3v18"/>
            </svg>
          </button>
          <div class="faq-answer" :class="{ active: activeFaq === index }">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </section>

    <section class="promise-section">
      <div class="promise-container">
        <div class="promise-item">
          <div class="promise-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3>24小时内回复</h3>
          <p>工作日我们承诺在24小时内回复您的咨询</p>
        </div>
        <div class="promise-item">
          <div class="promise-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3>专属顾问服务</h3>
          <p>为每位客户配备专属顾问，提供一对一咨询</p>
        </div>
        <div class="promise-item">
          <div class="promise-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3>全程陪伴支持</h3>
          <p>从咨询到出行，全程提供专业指导与支持</p>
        </div>
      </div>
    </section>

    <section class="form-section">
      <div class="section-header">
        <div class="section-tag">GET IN TOUCH</div>
        <h2>在线咨询</h2>
        <p>填写以下表单，我们将尽快与您联系</p>
      </div>
      <div class="form-container">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="您的姓名" required>
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="电子邮箱" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <input type="tel" v-model="form.phone" placeholder="联系电话" required>
            </div>
            <div class="form-group">
              <select v-model="form.country" required>
                <option value="">选择所在国家/地区</option>
                <option value="china">中国</option>
                <option value="usa">美国</option>
                <option value="uk">英国</option>
                <option value="australia">澳大利亚</option>
                <option value="newzealand">新西兰</option>
                <option value="canada">加拿大</option>
                <option value="ireland">爱尔兰</option>
                <option value="other">其他</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <select v-model="form.type" required>
                <option value="">选择咨询类型</option>
                <option value="program">文化交流项目咨询</option>
                <option value="visa">签证服务咨询</option>
                <option value="working-holiday">打工度假咨询</option>
                <option value="internship">实习培训咨询</option>
                <option value="cooperation">合作伙伴洽谈</option>
                <option value="other">其他问题</option>
              </select>
            </div>
            <div class="form-group">
              <select v-model="form.preferredContact" required>
                <option value="">首选联系方式</option>
                <option value="email">邮件</option>
                <option value="phone">电话</option>
                <option value="wechat">微信</option>
                <option value="skype">Skype</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <textarea v-model="form.message" placeholder="请详细描述您的问题或需求" rows="6" required></textarea>
          </div>
          <div class="form-submit">
            <button type="submit" class="submit-btn">提交咨询</button>
          </div>
        </form>
      </div>
    </section>

    <section class="social-section">
      <div class="social-container">
        <h3>关注我们</h3>
        <p>了解最新项目资讯和活动动态</p>
        <div class="social-links">
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="#" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        country: '',
        type: '',
        preferredContact: '',
        message: ''
      },
      activeFaq: -1,
      faqs: [
        {
          question: '申请文化交流项目需要具备什么条件？',
          answer: '一般来说，申请人需要年满18-30周岁，具备良好的英语沟通能力，身心健康，有一定的经济能力支持在海外的生活费用。不同项目可能有特定的学历、工作经验或技能要求，具体请咨询我们的顾问。'
        },
        {
          question: '签证申请需要多长时间？',
          answer: '签证审理时间因国家和签证类型而异。通常需要4-8周的准备时间，加上使领馆的审理周期。建议在计划出行前3-6个月开始申请准备，以确保充足的时间完成所有手续。'
        },
        {
          question: '你们提供哪些国家的交流项目？',
          answer: '我们目前提供美国、英国、澳大利亚、新西兰、加拿大、爱尔兰、日本、韩国等多个国家的文化交流项目和签证服务。我们的全球网络还在不断扩展，以满足更多青年的国际交流需求。'
        },
        {
          question: '项目费用包含哪些内容？',
          answer: '项目费用通常包含项目申请费、签证服务费、项目安排费、保险费等。具体费用因项目类型、目的地国家和项目周期而异。不包含的费用通常有：国际机票、生活费、个人消费等。详细费用清单会在项目说明中列出。'
        },
        {
          question: '如果签证被拒签怎么办？',
          answer: '如果签证申请被拒签，我们会协助您分析拒签原因，并提供专业的指导和建议。根据项目条款，部分项目提供免费的二次申请服务或退还部分费用。我们的签证顾问会全程陪同，帮助您提高二次申请的成功率。'
        },
        {
          question: '如何确定最适合我的项目？',
          answer: '我们的专业顾问会根据您的个人背景、兴趣爱好、职业规划和预算，为您推荐最适合的项目。您可以通过在线咨询、电话或到访我们的办公室进行详细沟通，我们会提供一对一的个性化咨询服务。'
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.activeFaq = this.activeFaq === index ? -1 : index
    },
    handleSubmit() {
      alert('感谢您的咨询！我们将尽快与您联系。')
      this.form = {
        name: '',
        email: '',
        phone: '',
        country: '',
        type: '',
        preferredContact: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding-top: 80px;
}

.page-banner {
  position: relative;
  height: 60vh;
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

.page-banner-content h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 15px;
  font-weight: normal;
}

.page-banner-content p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.intro-section {
  padding: 60px 0;
  background: var(--bg-white);
}

.intro-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
}

.intro-container p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.contact-info-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.contact-card {
  text-align: center;
  padding: 35px 25px;
  background: var(--bg-white);
  border-radius: 8px;
  transition: var(--transition-smooth);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-gold);
}

.contact-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  color: var(--primary-blue);
  margin-bottom: 15px;
  font-weight: normal;
}

.contact-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
}

.global-offices-section {
  padding: 80px 0;
  background: var(--bg-white);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 15px;
  display: block;
}

.section-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: var(--primary-blue);
  margin-bottom: 15px;
  font-weight: normal;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.offices-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.office-card {
  background: var(--bg-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition-smooth);
}

.office-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.office-image {
  height: 200px;
  overflow: hidden;
}

.office-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-smooth);
}

.office-card:hover .office-image img {
  transform: scale(1.05);
}

.office-content {
  padding: 25px;
}

.office-content h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: var(--primary-blue);
  margin-bottom: 10px;
  font-weight: normal;
}

.office-content p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

.office-info {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.faq-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
}

.faq-item {
  margin-bottom: 15px;
}

.faq-question {
  width: 100%;
  padding: 22px 30px;
  background: var(--bg-white);
  border: none;
  text-align: left;
  font-size: 1rem;
  color: var(--primary-blue);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition-smooth);
  border-radius: 6px;
}

.faq-question:hover {
  background: var(--primary-blue);
  color: white;
}

.faq-icon {
  transition: var(--transition-smooth);
  flex-shrink: 0;
  margin-left: 20px;
}

.faq-question:hover .faq-icon {
  color: var(--accent-gold);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: var(--transition-smooth);
  padding: 0 30px;
}

.faq-answer.active {
  max-height: 200px;
  padding: 20px 30px 25px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.promise-section {
  padding: 80px 0;
  background: var(--primary-blue);
}

.promise-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  text-align: center;
}

.promise-item {
  color: white;
}

.promise-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-gold);
}

.promise-item h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  margin-bottom: 12px;
  font-weight: normal;
}

.promise-item p {
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.6;
}

.form-section {
  padding: 80px 0;
  background: var(--bg-white);
}

.form-container {
  max-width: 750px;
  margin: 0 auto;
  padding: 0 40px;
}

.contact-form {
  background: var(--bg-light);
  padding: 50px;
  border-radius: 10px;
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
  border-radius: 6px;
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
  padding: 18px 60px;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.submit-btn:hover {
  background: var(--accent-gold);
}

.social-section {
  padding: 60px 0;
  background: var(--bg-light);
  text-align: center;
}

.social-container h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: var(--primary-blue);
  margin-bottom: 8px;
  font-weight: normal;
}

.social-container p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 25px;
}

.social-link {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-blue);
  border: 1px solid var(--border-light);
  border-radius: 50%;
  transition: var(--transition-smooth);
}

.social-link:hover {
  background: var(--primary-blue);
  color: white;
  border-color: var(--primary-blue);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .offices-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .promise-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
  }
}

@media (max-width: 768px) {
  .page-banner {
    height: 50vh;
  }

  .page-banner-content h1 {
    font-size: 2rem;
  }

  .intro-section {
    padding: 40px 0;
  }

  .intro-container {
    padding: 0 25px;
  }

  .contact-info-section {
    padding: 50px 0;
  }

  .contact-container {
    padding: 0 25px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .global-offices-section {
    padding: 50px 0;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-header h2 {
    font-size: 1.6rem;
  }

  .offices-container {
    grid-template-columns: 1fr;
    padding: 0 25px;
    gap: 25px;
  }

  .faq-section {
    padding: 50px 0;
  }

  .faq-container {
    padding: 0 25px;
  }

  .promise-section {
    padding: 50px 0;
  }

  .promise-container {
    grid-template-columns: 1fr;
    padding: 0 25px;
    gap: 40px;
  }

  .form-section {
    padding: 50px 0;
  }

  .form-container {
    padding: 0 25px;
  }

  .contact-form {
    padding: 35px 25px;
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

  .social-section {
    padding: 40px 0;
  }
}
</style>
