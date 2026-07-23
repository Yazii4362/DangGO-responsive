// ============================================================
// DangGO Main JavaScript — minimoremax landing
// ============================================================

gsap.registerPlugin(ScrollTrigger);

function initHeroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.kv__title-line', { y: 36, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.1 })
    .from('.kv__sub-line', { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.45')
    .from('.kv__btns .btn-store', { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
    .from('.kv__taxi', { y: 40, opacity: 0, duration: 0.9, ease: 'back.out(1.2)' }, '-=0.5')
    .from('.floating-badge', { scale: 0.85, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.4)' }, '-=0.4');
}

function initHeaderScroll() {
  const header = document.querySelector('.landing-header');
  if (!header) return;

  const toggle = () => {
    header.classList.toggle('landing-header--scrolled', window.scrollY > 48);
  };

  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

function initScrollAnimations() {
  gsap.utils.toArray('.landing-story__line, .landing-story__card').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.landing-moment').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: '.landing-moments', start: 'top 88%', toggleActions: 'play none none reverse' },
      y: 12,
      opacity: 0,
      duration: 0.45,
      delay: i * 0.04,
      ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.moments-category').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
      y: 32,
      opacity: 0,
      duration: 0.55,
      delay: index * 0.05,
      ease: 'power2.out'
    });
  });

  const journeyVisual = document.querySelector('.journey-map__visual');
  if (journeyVisual) {
    gsap.from(journeyVisual, {
      scrollTrigger: { trigger: journeyVisual, start: 'top 85%', toggleActions: 'play none none reverse' },
      y: 40,
      opacity: 0,
      duration: 0.75,
      ease: 'power2.out'
    });
  }

  gsap.utils.toArray('.landing-split__copy').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' },
      x: -32,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out'
    });
  });

  gsap.utils.toArray('.landing-split__visual').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' },
      x: 32,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out'
    });
  });

  gsap.utils.toArray('.usecase-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.08,
      ease: 'power2.out'
    });
  });

  const usecaseTaxi = document.querySelector('.usecase-stack__taxi');
  if (usecaseTaxi) {
    gsap.to(usecaseTaxi, {
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

  const bubble = document.querySelector('.trip-flow__bubble');
  if (bubble) {
    gsap.from(bubble, {
      scrollTrigger: { trigger: '.trip-flow__preview', start: 'top 85%', toggleActions: 'play none none reverse' },
      scaleX: 0.65,
      opacity: 0,
      x: -10,
      duration: 0.65,
      ease: 'back.out(1.4)'
    });
  }

  gsap.utils.toArray('.trip-flow__step').forEach((step) => {
    const body = step.querySelector('.trip-flow__step-body');
    if (!body) return;
    gsap.from(body, {
      scrollTrigger: { trigger: step, start: 'top 88%', toggleActions: 'play none none reverse' },
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  gsap.utils.toArray('.driver__checklist li').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none reverse' },
      x: -20,
      opacity: 0,
      duration: 0.5,
      delay: index * 0.06,
      ease: 'power2.out'
    });
  });
}

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

    if (index === 3) {
      gsap.fromTo(
        '.app-screen--chat .app-screen__chat-bubble',
        { y: 12, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.3)' }
      );
    }
  };

  steps.forEach((step, index) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top 70%',
      end: 'bottom 30%',
      onEnter: () => setActive(index),
      onEnterBack: () => setActive(index)
    });
  });

  setActive(0);
}

function initDriverSlider() {
  const track = document.querySelector('.driver__track');
  const dots = document.querySelectorAll('.driver__dot');
  const slides = document.querySelectorAll('.driver__slide-item');
  if (!track || !dots.length || !slides.length) return;

  let currentIndex = 0;
  let autoplayInterval;

  function goToSlide(index) {
    currentIndex = index;
    slides.forEach((slide) => slide.classList.remove('is-active'));
    slides[index].classList.add('is-active');
    dots.forEach((dot) => dot.classList.remove('is-active'));
    dots[index].classList.add('is-active');
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      stopAutoplay();
      startAutoplay();
    });
  });

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      goToSlide((currentIndex + 1) % slides.length);
    }, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  startAutoplay();
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
}

function initCountUp() {
  document.querySelectorAll('.landing-compare__num').forEach((el) => {
    const match = el.textContent.match(/\d+/);
    if (!match) return;
    const finalNumber = parseInt(match[0], 10);

    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      textContent: 0,
      duration: 1.4,
      ease: 'power1.out',
      snap: { textContent: 1 },
      onUpdate() {
        const n = Math.ceil(this.targets()[0].textContent);
        el.innerHTML = `${n}<span style="font-size:1rem;opacity:.6">분</span>`;
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimation();
  initHeaderScroll();
  initScrollAnimations();
  initTripFlow();
  initDriverSlider();
  initCountUp();
  initSmoothScroll();
  ScrollTrigger.refresh();
});

window.addEventListener('resize', () => ScrollTrigger.refresh());
