<template>
  <div class="contact-page">
    <section class="page-banner">
      <div class="page-banner-bg" style="background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20office%20meeting%20consultation%20modern&image_size=landscape_16_9')"></div>
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <div class="tagline">CONTACT US</div>
        <h2>联系我们</h2>
        <p>我们随时准备为您解答任何问题</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">与我们取得联系</h2>
          <p class="section-desc">无论是项目咨询、签证服务还是合作洽谈，我们都期待与您交流</p>
        </div>

        <!-- 联系信息 - 简约留白风格 -->
        <!-- <div class="contact-info-grid">
          <div class="info-block">
            <h4>办公地址</h4>
            <p>北京市朝阳区建国门外大街1号<br>国际文化交流中心大厦A座18层</p>
          </div>
          <div class="info-block">
            <h4>联系电话</h4>
            <p>+86 10 8888 8888<br>+86 10 8888 8889</p>
          </div>
          <div class="info-block">
            <h4>电子邮箱</h4>
            <p>info@globalyouth.org<br>visa@globalyouth.org</p>
          </div>
          <div class="info-block">
            <h4>办公时间</h4>
            <p>周一至周五: 9:00 - 18:00<br>周六: 9:00 - 12:00</p>
          </div>
        </div> -->

        <!-- 快速咨询入口 -->
        <div class="quick-access">
          <a href="mailto:info@globalyouth.org" class="access-btn">发送邮件咨询</a>
          <a href="tel:+861088888888" class="access-btn">电话咨询</a>
        </div>

        <!-- 分隔线 -->
        <div class="divider"></div>

        <!-- 咨询表单 -->
        <div class="form-section">
          <h3 class="form-title">在线咨询</h3>
          <p class="form-desc">填写以下表单，我们将尽快回复您</p>

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
            </div>
            <div class="form-group">
              <textarea v-model="form.message" placeholder="请详细描述您的问题或需求" rows="6" required></textarea>
            </div>
            <div class="form-submit">
              <button type="submit" class="submit-btn">提交咨询</button>
            </div>
          </form>
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
        type: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      alert('感谢您的咨询！我们将尽快与您联系。')
      this.form = {
        name: '',
        email: '',
        phone: '',
        type: '',
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
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--primary-blue);
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
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: var(--primary-blue);
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
  border: 1px solid var(--primary-blue);
  color: var(--primary-blue);
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
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: var(--primary-blue);
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