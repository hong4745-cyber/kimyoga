/* ================================================================
   community.js — Realtime Database 기반 커뮤니티 공통 유틸
   ================================================================ */

/* ── 샘플 Fallback 데이터 (Firebase 데이터 없을 때 사용) ── */
var _FALLBACK_NOTICE = [
  { id:'n10', category:'공지', title:'2026년 하반기 수강생 모집 안내', createdAt: new Date('2026-06-20').getTime(), views:312 },
  { id:'n9',  category:'이벤트', title:'여름 특별 원데이 클래스 — 힐링 요가 & 스트레칭', createdAt: new Date('2026-06-15').getTime(), views:487 },
  { id:'n8',  category:'공지', title:'7월 시간표 변경 공지 (안산 본점·선부점)', createdAt: new Date('2026-06-10').getTime(), views:256 },
  { id:'n7',  category:'이벤트', title:'친구 초대 이벤트 — 두 분이 함께 등록 시 10% 할인', createdAt: new Date('2026-06-05').getTime(), views:398 },
  { id:'n6',  category:'공지', title:'전문지도자 요가 과정 8기 모집 (7월 개강)', createdAt: new Date('2026-05-28').getTime(), views:521 },
  { id:'n5',  category:'공지', title:'안양 평촌점 리모델링 완료 및 재오픈 안내', createdAt: new Date('2026-05-20').getTime(), views:634 },
  { id:'n4',  category:'이벤트', title:'어버이날 기념 — 가족 요가 체험 프로그램 무료 운영', createdAt: new Date('2026-05-05').getTime(), views:279 },
  { id:'n3',  category:'공지', title:'필라테스 기구반 소규모 정원제 운영 변경 안내', createdAt: new Date('2026-04-22').getTime(), views:188 },
  { id:'n2',  category:'이벤트', title:'KYA 공인 자격 취득 축하 이벤트 — 수강료 5% 캐시백', createdAt: new Date('2026-04-10').getTime(), views:342 },
  { id:'n1',  category:'공지', title:'KIM\'S YOGA & PILATES 홈페이지 리뉴얼 오픈 안내', createdAt: new Date('2026-04-01').getTime(), views:815 }
];

var _FALLBACK_REVIEW = [
  { id:'r1', title:'3개월 만에 체형이 달라졌어요!', rating:5, authorName:'김*지', createdAt: new Date('2026-06-18').getTime(),
    content:'필라테스 기구반을 3개월째 다니고 있는데 허리 통증이 사라지고 어깨가 펴지기 시작했어요. 강사님이 자세 하나하나 꼼꼼하게 잡아주셔서 혼자서는 느끼지 못했던 근육을 발견한 기분입니다. 주변에 추천하고 싶어요.' },
  { id:'r2', title:'아침 힐링 요가로 하루를 시작해요', rating:5, authorName:'박*연', createdAt: new Date('2026-06-12').getTime(),
    content:'회사 출근 전 매일 아침 6시 30분 힐링 요가 수업을 듣고 있어요. 처음엔 힘들었는데 이제는 이 시간이 없으면 하루가 허전할 정도예요. 강사님의 진행이 너무 차분하고 에너지가 넘쳐서 매번 기분 좋게 마무리됩니다.' },
  { id:'r3', title:'전문지도자 과정 수료 후 강사로 활동 중!', rating:5, authorName:'이*현', createdAt: new Date('2026-05-30').getTime(),
    content:'KIM\'S에서 전문지도자 요가 과정 7기를 수료하고 지금은 직접 수업을 진행하고 있어요. 커리큘럼이 체계적이고 KYA 협회 공인 자격까지 취득할 수 있어서 취업에 큰 도움이 됐습니다. 꿈을 현실로 만들어준 곳이에요.' },
  { id:'r4', title:'비전야사 수업이 예상보다 훨씬 재밌어요', rating:4, authorName:'최*미', createdAt: new Date('2026-05-22').getTime(),
    content:'요가를 처음 배우는데 비전야사 입문반부터 시작했어요. 강사님이 초보자도 쉽게 따라할 수 있게 단계별로 가르쳐주시고 분위기도 화기애애해서 매주 기다려집니다. 시설도 깔끔하고 접근성이 좋아서 만족합니다.' },
  { id:'r5', title:'임산부 요가 — 안전하게 잘 배웠습니다', rating:5, authorName:'정*서', createdAt: new Date('2026-05-14').getTime(),
    content:'임신 5개월부터 출산 전까지 임산부 요가를 받았어요. 강사님이 산전·산후 전문 자격을 갖추셔서 불안 없이 다닐 수 있었습니다. 순산에 도움이 됐다고 생각해요. 아이 낳고 나서도 꼭 다시 등록하러 올게요.' },
  { id:'r6', title:'소도구 필라테스로 코어가 살아났어요', rating:5, authorName:'한*우', createdAt: new Date('2026-05-05').getTime(),
    content:'앉아서 일하는 직업이라 허리·골반 통증이 심했는데 소도구 필라테스 수업 두 달 만에 확연히 나아졌습니다. 폼롤러와 밴드를 활용한 동작들이 집에서도 따라할 수 있어서 일상 루틴으로 굳혀가고 있어요.' }
];

var _FALLBACK_NEWS = [
  { id:'news1', title:'KIM\'S YOGA & PILATES, KYA 공인 교육기관 5년 연속 선정', createdAt: new Date('2026-06-22').getTime(),
    content:'대한요가기협회(KYA)는 2026년도 공인 교육기관 평가에서 KIM\'S YOGA & PILATES를 5년 연속 공인 교육기관으로 선정했다고 밝혔다. 전문 커리큘럼과 강사진의 우수성이 높은 평가를 받았다.' },
  { id:'news2', title:'안산 본점 리폼드 필라테스 기구 전면 교체 완료', createdAt: new Date('2026-06-10').getTime(),
    content:'안산 본점이 리폼드 필라테스 기구를 최신 모델로 전면 교체했다. 캐딜락·리포머 등 11종의 기구를 새로 들여와 수강생의 운동 효율과 안전성이 한층 강화되었다.' },
  { id:'news3', title:'2026 전국 요가 지도자 대회 — KIM\'S 수료생 3인 수상', createdAt: new Date('2026-05-28').getTime(),
    content:'한국요가지도자협회가 주최한 2026 전국 요가 지도자 대회에서 KIM\'S YOGA & PILATES 출신 수료생 3명이 각각 금·은·동메달을 수상했다. 체계적인 지도자 과정의 성과가 결실을 맺었다는 평가다.' },
  { id:'news4', title:'포토스토리 — 6월 원데이 힐링 요가 클래스 현장', createdAt: new Date('2026-06-08').getTime(),
    content:'지난 6월 7일 안산 본점에서 진행된 원데이 힐링 요가 클래스에 30여 명의 수강생이 참여했다. 자연 채광이 가득한 스튜디오에서 진행된 이번 클래스는 만족도 4.9점(5점 만점)을 기록했다.' },
  { id:'news5', title:'안양 평촌점 그랜드 오픈 기념 이벤트 성황리 마무리', createdAt: new Date('2026-05-18').getTime(),
    content:'5월 17일 리모델링을 마친 안양 평촌점의 그랜드 오픈 행사가 성황리에 마무리됐다. 이날 행사에는 100여 명이 방문해 무료 체험 클래스와 경품 행사를 즐겼다.' },
  { id:'news6', title:'\'요가와 명상으로 찾는 나의 균형\' — KIM\'S 건강 세미나 개최', createdAt: new Date('2026-05-02').getTime(),
    content:'KIM\'S YOGA & PILATES는 오는 7월 5일(토) 안산 본점에서 \'요가와 명상으로 찾는 나의 균형\'을 주제로 건강 세미나를 개최한다. 요가 전문 강사와 명상 코치가 함께하는 이 행사는 무료로 진행될 예정이다.' }
];

function _esc(str) {
  return String(str || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function _fmtDate(ts) {
  if (!ts) return '';
  var d = new Date(ts);
  var y = d.getFullYear();
  var m = String(d.getMonth()+1).padStart(2,'0');
  var day = String(d.getDate()).padStart(2,'0');
  return y + '.' + m + '.' + day;
}

/* ── 공지사항: 즉시 fallback 렌더 후 Firebase 실데이터로 교체 ── */
function _renderNoticeRows(listEl, items) {
  listEl.innerHTML = '';
  items.forEach(function (item) {
    var d = item.data;
    var badgeCls = d.category === '이벤트' ? 'badge-event' : 'badge-notice';
    var a = document.createElement('a');
    a.href = 'notice-detail.html?id=' + item.id;
    a.className = 'board-row';
    a.setAttribute('role', 'listitem');
    a.innerHTML =
      '<span class="badge ' + badgeCls + '">' + _esc(d.category || '공지') + '</span>' +
      '<span class="board-title">' + _esc(d.title) + '</span>' +
      '<span class="board-date">' + _fmtDate(d.createdAt) + '</span>' +
      '<span class="board-views">조회 ' + (d.views || 0) + '</span>';
    listEl.appendChild(a);
  });
}

window.loadNoticeBoard = function (listEl, paginationEl, pageSize) {
  pageSize = pageSize || 10;
  _renderNoticeRows(listEl, _FALLBACK_NOTICE.map(function(f){ return { id: f.id, data: f }; }));
  if (!window._rdb) return;
  _rdb.ref('posts/notice').orderByChild('createdAt').limitToLast(pageSize).once('value')
    .then(function (snap) {
      var items = [];
      snap.forEach(function (child) { items.unshift({ id: child.key, data: child.val() }); });
      if (items.length > 0) _renderNoticeRows(listEl, items);
    })
    .catch(function (err) { console.error(err); });
};

/* ── 수강생 후기: 즉시 fallback 렌더 후 Firebase 실데이터로 교체 ── */
function _renderReviewCards(gridEl, items) {
  gridEl.innerHTML = '';
  items.forEach(function (item) {
    var d = item.data;
    var stars = '';
    var rating = d.rating || 5;
    for (var i = 1; i <= 5; i++) {
      stars += i <= rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
    var preview = (d.content || '').replace(/<[^>]+>/g, '').slice(0, 120);
    var card = document.createElement('a');
    card.href = 'review-detail.html?id=' + item.id;
    card.className = 'review-page-card';
    card.innerHTML =
      '<div class="review-page-stars">' + stars + '</div>' +
      '<h3>' + _esc(d.title) + '</h3>' +
      '<p class="review-page-excerpt">' + _esc(preview) + (preview.length === 120 ? '…' : '') + '</p>' +
      '<div class="review-page-footer">' +
        '<span class="review-page-author"><i class="fa-regular fa-user"></i> ' + _esc(d.authorName || '익명') + '</span>' +
        '<span class="review-page-date">' + _fmtDate(d.createdAt) + '</span>' +
      '</div>';
    gridEl.appendChild(card);
  });
}

window.loadReviewBoard = function (gridEl, pageSize) {
  pageSize = pageSize || 6;
  _renderReviewCards(gridEl, _FALLBACK_REVIEW.map(function(f){ return { id: f.id, data: f }; }));
  if (!window._rdb) return;
  _rdb.ref('posts/review').orderByChild('createdAt').limitToLast(pageSize).once('value')
    .then(function (snap) {
      var items = [];
      snap.forEach(function (child) { items.unshift({ id: child.key, data: child.val() }); });
      if (items.length > 0) _renderReviewCards(gridEl, items);
    })
    .catch(function (err) { console.error(err); });
};

/* ── 뉴스: 즉시 fallback 렌더 후 Firebase 실데이터로 교체 ── */
function _renderNewsCards(gridEl, items) {
  gridEl.innerHTML = '';
  items.forEach(function (item) {
    var d = item.data;
    var preview = (d.content || '').replace(/<[^>]+>/g, '').slice(0, 80);
    var card = document.createElement('a');
    card.href = 'news-detail.html?id=' + item.id;
    card.className = 'news-page-card';
    var thumb = d.imageUrl
      ? '<img src="' + _esc(d.imageUrl) + '" alt="" class="news-page-thumb" style="height:200px;width:100%;object-fit:cover;border-radius:10px;margin-bottom:16px;">'
      : '<div class="news-page-thumb ph" role="img" aria-label="뉴스 썸네일"></div>';
    card.innerHTML =
      thumb +
      '<h3>' + _esc(d.title) + '</h3>' +
      '<p style="font-size:13px;color:var(--color-font-sub);line-height:1.7;margin-bottom:12px;">' + _esc(preview) + (preview.length === 80 ? '…' : '') + '</p>' +
      '<span style="font-size:12px;color:var(--color-font-light);font-family:var(--font-en);">' + _fmtDate(d.createdAt) + '</span>';
    gridEl.appendChild(card);
  });
}

window.loadNewsBoard = function (gridEl, pageSize) {
  pageSize = pageSize || 6;
  _renderNewsCards(gridEl, _FALLBACK_NEWS.map(function(f){ return { id: f.id, data: f }; }));
  if (!window._rdb) return;
  _rdb.ref('posts/news').orderByChild('createdAt').limitToLast(pageSize).once('value')
    .then(function (snap) {
      var items = [];
      snap.forEach(function (child) { items.unshift({ id: child.key, data: child.val() }); });
      if (items.length > 0) _renderNewsCards(gridEl, items);
    })
    .catch(function (err) { console.error(err); });
};

/* ── 상세 페이지 공통 로드 ── */
window.loadPostDetail = function (opts) {
  var params = new URLSearchParams(location.search);
  var postId = params.get('id');
  if (!postId) { window.location.href = opts.listUrl; return; }

  var refPath = 'posts/' + opts.type + '/' + postId;

  /* 조회수 +1 */
  _rdb.ref(refPath + '/views').transaction(function (v) { return (v || 0) + 1; });

  /* 본문 로드 */
  _rdb.ref(refPath).once('value').then(function (snap) {
    if (!snap.exists()) { window.location.href = opts.listUrl; return; }
    opts.onLoad({ id: snap.key }, snap.val());

    /* 수정/삭제 버튼 */
    var actionsEl = document.getElementById('postActions');
    if (actionsEl && window._auth) {
      _auth.onAuthStateChanged(function (user) {
        var data = snap.val();
        if (user && user.uid === data.authorId) {
          actionsEl.innerHTML =
            '<a href="community-write.html?id=' + postId + '&type=' + opts.type + '" class="btn-outline" style="border-radius:50px;padding:0 20px;height:38px;font-size:13px;display:inline-flex;align-items:center;gap:6px;"><i class="fa-solid fa-pen"></i> 수정</a>' +
            '<button id="btnDeletePost" class="btn-outline" style="border-radius:50px;padding:0 20px;height:38px;font-size:13px;color:#e55;border-color:#e55;display:inline-flex;align-items:center;gap:6px;"><i class="fa-solid fa-trash"></i> 삭제</button>';
          document.getElementById('btnDeletePost').addEventListener('click', function () {
            if (!confirm('게시글을 삭제하시겠습니까?')) return;
            _rdb.ref(refPath).remove()
              .then(function () { window.location.href = opts.listUrl; })
              .catch(function (err) { alert('삭제 중 오류가 발생했습니다.'); console.error(err); });
          });
        }
      });
    }
  }).catch(function (err) {
    console.error(err);
    alert('게시글을 불러오지 못했습니다.');
    window.location.href = opts.listUrl;
  });
};
