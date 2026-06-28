/* ================================================================
   community.js — Realtime Database 기반 커뮤니티 공통 유틸
   ================================================================ */

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

/* ── 공지사항 게시판 로드 ── */
window.loadNoticeBoard = function (listEl, paginationEl, pageSize) {
  pageSize = pageSize || 10;
  _rdb.ref('posts/notice').orderByChild('createdAt').limitToLast(pageSize).once('value')
    .then(function (snap) {
      var items = [];
      snap.forEach(function (child) { items.unshift({ id: child.key, data: child.val() }); });
      if (items.length === 0) {
        listEl.innerHTML = '<p class="board-empty">등록된 게시글이 없습니다.</p>';
        return;
      }
      listEl.innerHTML = '';
      items.forEach(function (item) {
        var d = item.data;
        var badgeCls = d.category === '이벤트' ? 'badge-event' : 'badge-notice';
        var a = document.createElement('a');
        a.href = 'notice-detail.html?id=' + item.id;
        a.className = 'board-row';
        a.setAttribute('role','listitem');
        a.innerHTML =
          '<span class="badge ' + badgeCls + '">' + _esc(d.category || '공지') + '</span>' +
          '<span class="board-title">' + _esc(d.title) + '</span>' +
          '<span class="board-date">'  + _fmtDate(d.createdAt) + '</span>' +
          '<span class="board-views">조회 ' + (d.views || 0) + '</span>';
        listEl.appendChild(a);
      });
    })
    .catch(function (err) {
      console.error(err);
      listEl.innerHTML = '<p class="board-empty">게시글을 불러오지 못했습니다.</p>';
    });
};

/* ── 수강생 후기 카드 로드 ── */
window.loadReviewBoard = function (gridEl, pageSize) {
  pageSize = pageSize || 6;
  _rdb.ref('posts/review').orderByChild('createdAt').limitToLast(pageSize).once('value')
    .then(function (snap) {
      var items = [];
      snap.forEach(function (child) { items.unshift({ id: child.key, data: child.val() }); });
      if (items.length === 0) {
        gridEl.innerHTML = '<p class="board-empty">등록된 후기가 없습니다.</p>';
        return;
      }
      gridEl.innerHTML = '';
      items.forEach(function (item) {
        var d = item.data;
        var stars = '';
        var rating = d.rating || 5;
        for (var i=1; i<=5; i++) {
          stars += i <= rating
            ? '<i class="fa-solid fa-star"></i>'
            : '<i class="fa-regular fa-star"></i>';
        }
        var preview = (d.content || '').replace(/<[^>]+>/g,'').slice(0,120);
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
    })
    .catch(function (err) {
      console.error(err);
      gridEl.innerHTML = '<p class="board-empty">후기를 불러오지 못했습니다.</p>';
    });
};

/* ── 뉴스 카드 로드 ── */
window.loadNewsBoard = function (gridEl, pageSize) {
  pageSize = pageSize || 6;
  _rdb.ref('posts/news').orderByChild('createdAt').limitToLast(pageSize).once('value')
    .then(function (snap) {
      var items = [];
      snap.forEach(function (child) { items.unshift({ id: child.key, data: child.val() }); });
      if (items.length === 0) {
        gridEl.innerHTML = '<p class="board-empty">등록된 뉴스가 없습니다.</p>';
        return;
      }
      gridEl.innerHTML = '';
      items.forEach(function (item) {
        var d = item.data;
        var preview = (d.content || '').replace(/<[^>]+>/g,'').slice(0,80);
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
    })
    .catch(function (err) {
      console.error(err);
      gridEl.innerHTML = '<p class="board-empty">뉴스를 불러오지 못했습니다.</p>';
    });
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
