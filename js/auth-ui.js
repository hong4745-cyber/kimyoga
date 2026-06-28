(function () {
  function applyAuthState() {
    var loggedIn = !!localStorage.getItem('kimyoga_logged_in');

    /* 데스크탑 top-bar */
    var topLink = document.getElementById('topbarAuth');
    if (topLink) {
      topLink.textContent = loggedIn ? '로그아웃' : '로그인';
      topLink.href        = loggedIn ? 'logout.html' : 'login.html';
      topLink.classList.toggle('topbar-logout', loggedIn);
    }

    /* 태블릿·모바일 사이드 메뉴 */
    var mobLink = document.getElementById('mobAuth');
    if (mobLink) {
      mobLink.textContent = loggedIn ? '로그아웃' : '로그인';
      mobLink.href        = loggedIn ? 'logout.html' : 'login.html';
    }
    var mobSignup = document.getElementById('mobSignup');
    if (mobSignup) {
      mobSignup.style.display = loggedIn ? 'none' : 'block';
    }
  }

  function fixSubnavTop() {
    var gnb    = document.querySelector('.gnb');
    var subnav = document.querySelector('.page-subnav');
    var tabs   = document.querySelector('.community-tabs');
    if (!gnb) return;
    var h = gnb.getBoundingClientRect().height;
    if (subnav) subnav.style.top = h + 'px';
    if (tabs)   tabs.style.top   = h + 'px';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyAuthState();
      fixSubnavTop();
    });
  } else {
    applyAuthState();
    fixSubnavTop();
  }
  window.addEventListener('resize', fixSubnavTop);
})();
