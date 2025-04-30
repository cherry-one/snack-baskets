## 핸드폰 알림 자동화
fetch('https://api.pushover.net/1/messages.json', {
  method: 'POST',
  body: new URLSearchParams({
    token: '앱토큰',
    user: '유저키',
    message: '여기에 보낼 메시지'
  })
})

## 구글 스프레드시트에 투표 데이터 연동 / 앱스 스크립트 코드
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([data.name, data.vote]);
  
  return ContentService.createTextOutput("Success");
}
>> 웹 앱으로 배포
>> 내 html/js에서 fetch로 보내기
fetch('https://script.google.com/macros/s/웹앱URL/exec', {
  method: 'POST',
  body: JSON.stringify({
    name: '홍길동',
    vote: '찬성'
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => res.text())
.then(res => console.log(res))

## 화이트리스트 예시
const allowedUsers = [
  { id: '1234567890' },       // 카카오 고유 ID
  { email: 'example@example.com' }, // 이메일로 체크할 수도 있음
];

## 화이트리스트 체크
function isAllowed(user) {
  return allowedUsers.some(u => 
    (u.id && u.id == user.id) ||
    (u.email && u.email == user.kakao_account.email)
  );
}

// 로그인 성공 이후
Kakao.API.request({
  url: '/v2/user/me',
  success: function(res) {
    if (isAllowed(res)) {
      console.log("회원가입 허용!");
      // 회원가입 로직 실행
    } else {
      alert('승인된 사용자만 회원가입할 수 있습니다.');
      // 페이지 이동 막거나 로그아웃 처리
    }
  }
});
