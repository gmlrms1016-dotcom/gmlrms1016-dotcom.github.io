/* ── Reveal on scroll ── */
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ── Active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((a) =>
          a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`)
        );
      }
    });
  },
  { threshold: 0.35 }
);
sections.forEach((s) => navObserver.observe(s));

/* ── Mobile hamburger ── */
const hamburger = document.querySelector('.nav__hamburger');
const navLinksList = document.querySelector('.nav__links');

hamburger?.addEventListener('click', () => navLinksList.classList.toggle('nav__links--open'));
navLinks.forEach((a) => a.addEventListener('click', () => navLinksList.classList.remove('nav__links--open')));

/* ── Contact form ── */
function handleSubmit() {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const message = document.getElementById('f-message').value.trim();

  if (!name || !email || !message) {
    alert('이름, 이메일, 내용을 모두 입력해주세요.');
    return;
  }
  alert(`${name}님, 메시지가 접수되었습니다!\n빠른 시일 내에 연락드리겠습니다.`);
  ['f-name', 'f-email', 'f-subject', 'f-message'].forEach((id) => {
    document.getElementById(id).value = '';
  });
}

/* ── Navbar shadow on scroll ── */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 1px 20px rgba(0,0,0,0.06)' : 'none';
}, { passive: true });
