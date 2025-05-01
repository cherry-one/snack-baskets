const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const modal = document.getElementById('myModal'); //모달
const closeBtn = document.querySelector('.exit_modal');
const openBtn = document.getElementById('openModalBtn');
const ctx = document.getElementById('myBarChart').getContext('2d');//그래프 샘플

//그래프
const myChart = new Chart(ctx, {
    type: 'bar', // 세로 막대 그래프
    data: {
        labels: ['포카리', '핫식스', '몽쉘', '예감', '사브레','나'], // X축 라벨
        datasets: [{
            label: '재구매율',
            data: [12, 19, 8, 5, 2, 1], // Y축 값
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true // y축 0부터 시작
            }
        }
    }
});
// 기간 설정 데이터
const subDateData = {
    week: ['월','화','수','목','금','토','일'],
    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
};
const mainoptSelect = document.getElementById('mainopt1');
const suboptSelect = document.querySelector('.optbox2');

uploadBtn.addEventListener('click', () => {
  fileInput.click(); // input을 강제로 클릭시킴
});

fileInput.addEventListener('change', () => {
  // 파일 선택되었을 때 처리
  const file = fileInput.files[0];
  if (file) {
    alert(`선택된 파일: ${file.name}`);
  }
});

//모달 열기
document.getElementById('setperson').addEventListener('click', () => {
    document.getElementById('pop_wl').style.display = 'flex';
});

document.getElementById('seturl').addEventListener('click', () => {
    document.getElementById('pop_si').style.display = 'flex';
});
document.getElementById('setvote').addEventListener('click', () => {
    document.getElementById('pop_vo').style.display = 'flex';
});
document.getElementById('setmoney').addEventListener('click', () => {
    document.getElementById('pop_pr').style.display = 'flex';
});
// 모달 닫기
document.querySelectorAll('.exit_modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) modal.style.display = 'none';
    });
  });

//  가격 정보 관리 팝업
// 라디오 연동
document.querySelectorAll('tr').forEach(tr => {
    tr.addEventListener('click', () => {
      const radio = tr.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
// 삭제버튼
document.querySelectorAll('.delete_btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        if (row) {
            row.classList.add('slide_out');
            setTimeout(() => row.remove(), 400);
        }
    });
});

// //목록 바꾸기
document.querySelectorAll('.mainopt').forEach(main => {
    main.addEventListener('change', () => {
    const selected = main.value;
    const targetClass = main.dataset.sub; // 'optbox2'
    const subSelects = document.querySelectorAll(`.${targetClass}`);
    const options = subDateData[selected] || [];

    subSelects.forEach(sub => {
        sub.innerHTML = '<option value="">-- 선택 --</option>';
        options.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        sub.appendChild(option);
        });
    });
    });
});
//투표 기간 목록록
    document.querySelectorAll('.mainopt2').forEach(main => {
        main.addEventListener('change', () => {
        const selected = main.value;
        const targetClass = main.dataset.sub; // 'optbox3'
        const subSelects = document.querySelectorAll(`.${targetClass}`);
        const options = subDateData[selected] || [];
    
        subSelects.forEach(sub => {
            sub.innerHTML = '<option value="">-- 선택 --</option>';
            options.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            sub.appendChild(option);
            });
        });
        });
    });