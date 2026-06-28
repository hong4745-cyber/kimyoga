(function () {

  /* ── 로그인 상태 반영 ── */
  function applyAuthState() {
    var loggedIn = !!localStorage.getItem('kimyoga_logged_in');

    var topLink = document.getElementById('topbarAuth');
    if (topLink) {
      topLink.textContent = loggedIn ? '로그아웃' : '로그인';
      topLink.href        = loggedIn ? 'logout.html' : '#';
      topLink.classList.toggle('topbar-logout', loggedIn);
      if (!loggedIn) {
        topLink.addEventListener('click', function (e) {
          e.preventDefault();
          openLoginModal();
        });
      }
    }

    var mobLink = document.getElementById('mobAuth');
    if (mobLink) {
      mobLink.textContent = loggedIn ? '로그아웃' : '로그인';
      mobLink.href        = loggedIn ? 'logout.html' : '#';
      if (!loggedIn) {
        mobLink.addEventListener('click', function (e) {
          e.preventDefault();
          openLoginModal();
        });
      }
    }

    var mobSignup = document.getElementById('mobSignup');
    if (mobSignup) mobSignup.style.display = loggedIn ? 'none' : 'block';
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

  /* ── 로그인 모달 HTML 주입 ── */
  function injectModal() {
    if (document.getElementById('authModal')) return;
    var html = [
      '<div id="authModal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:20px;">',
        '<div style="background:#fff;border-radius:20px;padding:44px 40px 36px;width:100%;max-width:420px;position:relative;box-shadow:0 16px 56px rgba(0,0,0,.15);">',
          '<button id="authModalClose" style="position:absolute;top:16px;right:20px;background:none;border:none;font-size:22px;cursor:pointer;color:#aaa;line-height:1;">&#10005;</button>',
          '<div style="text-align:center;margin-bottom:28px;">',
            '<p style="font-family:\'Taviraj\',serif;font-size:11px;letter-spacing:3px;color:#888;margin-bottom:6px;">KIM\'S YOGA &amp; PILATES</p>',
            '<h2 style="font-size:20px;font-weight:700;color:#496357;margin:0;">로그인</h2>',
          '</div>',
          '<div id="authModalError" style="display:none;background:#fff0f0;color:#c00;border-radius:8px;padding:10px 14px;font-size:13px;margin-bottom:16px;"></div>',
          '<div style="margin-bottom:14px;">',
            '<input id="authModalEmail" type="email" placeholder="이메일" style="width:100%;height:48px;border:1.5px solid #e0dbd3;border-radius:10px;padding:0 16px;font-size:14px;font-family:\'Noto Sans KR\',sans-serif;outline:none;box-sizing:border-box;">',
          '</div>',
          '<div style="margin-bottom:20px;">',
            '<input id="authModalPw" type="password" placeholder="비밀번호" style="width:100%;height:48px;border:1.5px solid #e0dbd3;border-radius:10px;padding:0 16px;font-size:14px;font-family:\'Noto Sans KR\',sans-serif;outline:none;box-sizing:border-box;">',
          '</div>',
          '<button id="authModalLoginBtn" style="width:100%;height:50px;background:#496357;color:#fff;border:none;border-radius:50px;font-size:15px;font-weight:700;font-family:\'Noto Sans KR\',sans-serif;cursor:pointer;margin-bottom:12px;">로그인</button>',
          '<div style="display:flex;align-items:center;gap:10px;margin:18px 0;">',
            '<div style="flex:1;height:1px;background:#e0dbd3;"></div>',
            '<span style="font-size:11px;color:#aaa;white-space:nowrap;">또는 소셜 로그인</span>',
            '<div style="flex:1;height:1px;background:#e0dbd3;"></div>',
          '</div>',
          '<button id="authModalGoogle" style="width:100%;height:48px;background:#fff;border:1.5px solid #e0dbd3;border-radius:50px;font-size:14px;font-family:\'Noto Sans KR\',sans-serif;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:18px;">',
            '<svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>',
            'Google로 로그인',
          '</button>',
          '<div style="text-align:center;">',
            '<span style="font-size:12px;color:#aaa;">계정이 없으신가요?</span>',
            '<a href="signup.html" style="font-size:12px;color:#496357;font-weight:700;margin-left:6px;text-decoration:none;">회원가입</a>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');

    var div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div.firstChild);

    document.getElementById('authModalClose').addEventListener('click', closeLoginModal);
    document.getElementById('authModal').addEventListener('click', function (e) {
      if (e.target === this) closeLoginModal();
    });
    document.getElementById('authModalLoginBtn').addEventListener('click', handleEmailLogin);
    document.getElementById('authModalGoogle').addEventListener('click', handleGoogleLogin);
    document.getElementById('authModalPw').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') handleEmailLogin();
    });
  }

  function openLoginModal() {
    injectModal();
    var modal = document.getElementById('authModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    ensureFirebase();
  }

  function closeLoginModal() {
    var modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function showModalError(msg) {
    var el = document.getElementById('authModalError');
    if (el) { el.textContent = msg; el.style.display = 'block'; }
  }
  function clearModalError() {
    var el = document.getElementById('authModalError');
    if (el) el.style.display = 'none';
  }

  function onLoginSuccess() {
    localStorage.setItem('kimyoga_logged_in', '1');
    closeLoginModal();
    window.location.reload();
  }

  function handleEmailLogin() {
    clearModalError();
    var email = document.getElementById('authModalEmail').value.trim();
    var pw    = document.getElementById('authModalPw').value;
    if (!email || !pw) { showModalError('이메일과 비밀번호를 입력해 주세요.'); return; }
    if (!window._auth) { showModalError('인증 서비스 로드 중입니다. 잠시 후 다시 시도해 주세요.'); return; }

    var btn = document.getElementById('authModalLoginBtn');
    btn.disabled = true; btn.textContent = '로그인 중…';

    window._auth.signInWithEmailAndPassword(email, pw)
      .then(onLoginSuccess)
      .catch(function (err) {
        var msg = '이메일 또는 비밀번호가 올바르지 않습니다.';
        if (err.code === 'auth/too-many-requests') msg = '잠시 후 다시 시도해 주세요.';
        showModalError(msg);
        btn.disabled = false; btn.textContent = '로그인';
      });
  }

  function handleGoogleLogin() {
    clearModalError();
    if (!window._auth) { showModalError('인증 서비스 로드 중입니다. 잠시 후 다시 시도해 주세요.'); return; }
    var provider = new firebase.auth.GoogleAuthProvider();
    window._auth.signInWithPopup(provider)
      .then(onLoginSuccess)
      .catch(function (err) {
        if (err.code !== 'auth/popup-closed-by-user') showModalError(err.message);
      });
  }

  /* ── Firebase 동적 로드 ── */
  function ensureFirebase() {
    if (window._auth) return;
    var scripts = [
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js',
      'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js',
      'js/firebase-init.js'
    ];
    var loaded = 0;
    scripts.forEach(function (src) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { loaded++; };
      document.head.appendChild(s);
    });
  }

  /* ── 초기화 ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { applyAuthState(); fixSubnavTop(); });
  } else {
    applyAuthState();
    fixSubnavTop();
  }
  window.addEventListener('resize', fixSubnavTop);
})();
