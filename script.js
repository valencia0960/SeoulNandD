document.addEventListener('DOMContentLoaded', () => {
    const navList   = document.querySelector('.nav-list');
    const dayHero   = document.querySelector('.hero-day');
    const nightHero = document.querySelector('.hero-night');
  
    const menus = {
      day: [
        { text: 'Home', href: './seoul2.html'},
        { text: '서울의 밤', href: '#hero-night' },
        { text: '운동코스', href: './exercise.html'},
        { text: '맛집', href: './restaurants_day.html' },
        { text: '산책로', href: './pathways.html' },
      ],
      night: [
        { text: 'Home', href: './seoul2.html' },
        { text: '서울의 낮', href: '#hero-day' },
        { text: '야경코스', href: './attractions_night.html' },
        { text: '야간 맛집', href: './restaurants_night.html' },
        { text: '이벤트/행사', href: './events.html' },
      ],
    };
  
    function renderMenu(mode) {
      navList.innerHTML = menus[mode]
        .map(i => `<li><a href="${i.href}">${i.text}</a></li>`)
        .join('');
    }
  
    // 초기엔 낮 모드로 세팅
    document.body.classList.add('day');
    renderMenu('day');
  
    // IntersectionObserver 로 dayHero/​nightHero 가 뷰포트에 들어올 때마다 클래스 토글
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === dayHero && entry.isIntersecting) {
          document.body.classList.add('day');
          document.body.classList.remove('night');
          renderMenu('day');
        }
        if (entry.target === nightHero && entry.isIntersecting) {
          document.body.classList.add('night');
          document.body.classList.remove('day');
          renderMenu('night');
        }
      });
    }, {
      threshold: 0.6  // 요소가 60% 보이면 발동
    });
  
    io.observe(dayHero);
    io.observe(nightHero);
  });
  