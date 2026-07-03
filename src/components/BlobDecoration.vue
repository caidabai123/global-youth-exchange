<template>
  <div :class="['blob-decoration', `blob-${position}`]" :style="blobStyle">
    <div class="blob-inner"></div>
    <div class="blob-inner-secondary"></div>
  </div>
</template>

<script>
export default {
  name: 'BlobDecoration',
  props: {
    position: {
      type: String,
      default: 'top-left',
      validator: (val) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val)
    },
    color: {
      type: String,
      default: '#C9A227'
    },
    opacity: {
      type: Number,
      default: 0.15
    },
    size: {
      type: String,
      default: 'large',
      validator: (val) => ['small', 'medium', 'large', 'xlarge'].includes(val)
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    blobStyle() {
      const sizeMap = {
        small: { width: '250px', height: '250px' },
        medium: { width: '400px', height: '400px' },
        large: { width: '550px', height: '550px' },
        xlarge: { width: '750px', height: '750px' }
      }
      
      return {
        width: sizeMap[this.size].width,
        height: sizeMap[this.size].height,
        animation: this.animate ? 'blob-morph 15s ease-in-out infinite' : 'none'
      }
    }
  }
}
</script>

<style scoped>
.blob-decoration {
  position: absolute;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.blob-top-left {
  top: -20%;
  left: -15%;
}

.blob-top-right {
  top: -20%;
  right: -15%;
}

.blob-bottom-left {
  bottom: -20%;
  left: -15%;
}

.blob-bottom-right {
  bottom: -20%;
  right: -15%;
}

.blob-inner {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: radial-gradient(circle at 30% 40%, rgba(201, 162, 39, 0.15), transparent 60%);
  animation: blob-pulse 8s ease-in-out infinite;
}

.blob-inner-secondary {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 43, 91, 0.08), transparent 70%);
}

@keyframes blob-morph {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: scale(1) rotate(0deg);
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: scale(1.15) rotate(8deg);
  }
  50% {
    border-radius: 50% 60% 30% 60% / 30% 40% 70% 60%;
    transform: scale(0.95) rotate(-5deg);
  }
  75% {
    border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%;
    transform: scale(1.1) rotate(3deg);
  }
}

@keyframes blob-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
</style>
