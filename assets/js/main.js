// ============================================================
// DangGO Main JavaScript
// GSAP 애니메이션 및 인터랙션
// ============================================================

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// ============================================================
// 1. 히어로 섹션 애니메이션
// ============================================================
function initHeroAnimation() {
  // 타임라인 생성
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // 배지 등장
  tl.from('.hero-badge', {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
  });

  // 타이틀 라인별 등장
  tl.from('.kv__title-line', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
  }, '-=0.4');

  // 하이라이트 애니메이션
  tl.from('.hl', {
    backgroundSize: '0% 100%',
    duration: 0.6,
    stagger: 0.2
  }, '-=0.5');

  // 서브 텍스트 등장
  tl.from('.kv__sub-line', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1
  }, '-=0.4');

  // 버튼 등장
  tl.from('.kv__btns .btn-store', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.3');

  // 택시 이미지 등장
  tl.from('.kv__taxi', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.4)'
  }, '-=0.6');

  // 플로팅 배지 등장
  tl.from('.floating-badge', {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(2)'
  }, '-=0.5');

  // 스크롤 힌트 애니메이션
  gsap.to('.kv__scroll-hint', {
    y: 10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });
}

// ============================================================
// 2. 섹션 진입 애니메이션
// ============================================================
function initScrollAnimations() {
  // 섹션 타이틀 애니메이션
  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // 섹션 서브텍스트 애니메이션
  gsap.utils.toArray('.section-sub').forEach(sub => {
    gsap.from(sub, {
      scrollTrigger: {
        trigger: sub,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  // 카테고리 카드 애니메이션
  gsap.utils.toArray('.moments-category').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.05,
      ease: 'power2.out'
    });
  });

  // 서비스 스텝 애니메이션
  gsap.utils.toArray('.service-step').forEach((step, index) => {
    gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // 사용법 스텝 애니메이션
  gsap.utils.toArray('.trip-flow__step').forEach((step) => {
    gsap.from(step.querySelector('.trip-flow__step-body'), {
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 24,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  // 비교 카드 애니메이션
  gsap.utils.toArray('.compare-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.2,
      ease: 'back.out(1.4)'
    });
  });

  // 활용사례 카드 애니메이션
  gsap.utils.toArray('.usecase-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.08,
      ease: 'power2.out'
    });
  });

  // 드라이버 체크리스트 애니메이션
  gsap.utils.toArray('.driver__checklist li').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      x: -30,
      opacity: 0,
      duration: 0.5,
      delay: index * 0.1,
      ease: 'power2.out'
    });
  });
}

// ============================================================
// 3. 택시 패럴랙스 효과
// ============================================================
function initParallax() {
  // KV 택시
  gsap.to('.kv__taxi', {
    scrollTrigger: {
      trigger: '.kv',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 100,
    ease: 'none'
  });

  // 활용사례 택시
  gsap.to('.usecase-stack__taxi', {
    scrollTrigger: {
      trigger: '.features',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    },
    x: '+=50',
    ease: 'none'
  });
}

// ============================================================
// 4. 숫자 카운트업 애니메이션
// ============================================================
function initCountUp() {
  const numberElements = document.querySelectorAll('.compare-card__number');
  
  numberElements.forEach(el => {
    const finalNumber = parseInt(el.textContent);
    
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      textContent: 0,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      onUpdate: function() {
        el.textContent = Math.ceil(this.targets()[0].textContent);
      }
    });
  });
}

// ============================================================
// 5. 이동 과정 스크롤 연동 (Trip Flow)
// ============================================================
function initTripFlow() {
  const steps = document.querySelectorAll('.trip-flow__step');
  const screens = document.querySelectorAll('.trip-flow__screens .app-screen');

  if (!steps.length || !screens.length) return;

  let activeIndex = 0;

  const setActive = (index) => {
    if (index < 0 || index >= steps.length || index === activeIndex) return;

    activeIndex = index;
    steps.forEach((step, i) => step.classList.toggle('is-active', i === index));
    screens.forEach((screen, i) => screen.classList.toggle('is-active', i === index));
  };

  steps.forEach((step, index) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActive(index),
      onEnterBack: () => setActive(index)
    });
  });

  setActive(0);
}

// ============================================================
// 6. 드라이버 슬라이더
// ============================================================
function initDriverSlider() {
  const track = document.querySelector('.driver__track');
  const dots = document.querySelectorAll('.driver__dot');
  const slides = document.querySelectorAll('.driver__slide-item');
  
  if (!track || !dots.length) return;
  
  let currentIndex = 0;
  let autoplayInterval;

  function goToSlide(index) {
    currentIndex = index;
    
    // 슬라이드 이동
    slides.forEach(slide => slide.classList.remove('is-active'));
    slides[index].classList.add('is-active');
    
    // 닷 활성화
    dots.forEach(dot => dot.classList.remove('is-active'));
    dots[index].classList.add('is-active');
    
    // 트랙 이동
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // 닷 클릭 이벤트
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      stopAutoplay();
      startAutoplay();
    });
  });

  // 자동 재생
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextIndex);
    }, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  startAutoplay();
  
  // 마우스 오버 시 자동재생 멈춤
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
}

// ============================================================
// 7. 스무스 스크롤 (앵커 링크)
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: 'power3.inOut'
        });
      }
    });
  });
}

// ============================================================
// 8. 초기화
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimation();
  initScrollAnimations();
  initParallax();
  initCountUp();
  initTripFlow();
  initDriverSlider();
  initSmoothScroll();
  
  // 페이지 로드 후 스크롤트리거 새로고침
  ScrollTrigger.refresh();
});

// 리사이즈 시 스크롤트리거 새로고침
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
