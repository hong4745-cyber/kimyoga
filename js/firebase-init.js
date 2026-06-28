// ================================================================
// ★ Firebase 콘솔 > 프로젝트 설정 > 내 앱 > firebaseConfig 붙여넣기
// ================================================================
var firebaseConfig = {
  apiKey:            "AIzaSyAtDTvzAbY_lIIuafhDJtzTXkDDiDmEv_o",
  authDomain:        "kim-s-yoga.firebaseapp.com",
  databaseURL:       "https://kim-s-yoga-default-rtdb.firebaseio.com",
  projectId:         "kim-s-yoga",
  storageBucket:     "kim-s-yoga.firebasestorage.app",
  messagingSenderId: "922241247178",
  appId:             "1:922241247178:web:efa08b0654d8380975d133"
};

// ★ 카카오 개발자센터 > 내 애플리케이션 > 앱 키 > JavaScript 키
var KAKAO_JS_KEY = "YOUR_KAKAO_JS_KEY";

// ★ 네이버 개발자센터 > 애플리케이션 > Client ID
var NAVER_CLIENT_ID    = "YOUR_NAVER_CLIENT_ID";
var NAVER_CALLBACK_URL = location.origin + "/login.html";

// ================================================================
// Firebase 초기화
// ================================================================
firebase.initializeApp(firebaseConfig);
window._auth = firebase.auth();

// Realtime Database (커뮤니티 게시판, 상담신청)
if (firebase.database) {
  window._rdb = firebase.database();
}

// Firestore (로그인·회원가입 페이지에서만 SDK 로드 시 사용)
if (firebase.firestore) {
  window._db = firebase.firestore();
}

_auth.onAuthStateChanged(function (user) {
  if (user) {
    localStorage.setItem('kimyoga_logged_in', '1');
  } else {
    localStorage.removeItem('kimyoga_logged_in');
  }
  ['topbarAuth', 'mobAuth'].forEach(function (id) {
    var link = document.getElementById(id);
    if (link) {
      link.textContent = user ? '로그아웃' : '로그인';
      link.href        = user ? 'logout.html' : 'login.html';
      link.classList.toggle('topbar-logout', !!user);
    }
  });
});

// ================================================================
// 공통 유틸: 소셜 계정(카카오·네이버)으로 Firebase 사용자 생성/로그인
// ================================================================
window._socialSignIn = function (provider, socialId, email, name) {
  if (!email) {
    alert(provider + ' 계정에 이메일 공개 동의가 필요합니다.\n설정에서 이메일 공개 후 다시 시도해 주세요.');
    return;
  }
  var pw = 'KimsYoga_' + provider + '_' + socialId;
  return _auth.signInWithEmailAndPassword(email, pw)
    .catch(function (err) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        return _auth.createUserWithEmailAndPassword(email, pw)
          .then(function (cred) {
            if (_rdb) {
              return _rdb.ref('users/' + cred.user.uid).set({
                name: name || '',
                email: email,
                provider: provider,
                socialId: String(socialId),
                createdAt: new Date().toISOString()
              });
            }
          });
      }
      throw err;
    })
    .then(function () {
      window.location.href = 'index.html';
    })
    .catch(function (err) {
      console.error(err);
      alert('로그인 중 오류가 발생했습니다.\n' + err.message);
    });
};
