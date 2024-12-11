//함수 정리!!
//1.공통 명령어
//2.폰트 크기 조절 명령어
//3.리스트 클릭 이벤트 명령어
//4.리스트 1번 항목 readme리스트의 명령어

// 1. 문서 전체에 클릭 소리를 내주는 명령어 'click
const clickSound = new Audio('click.mp3'); // 원하는 소리 파일 경로

document.body.addEventListener('click', () => {
  clickSound.play();
});

//1-2. 모든 알림창 닫기 버튼
 document.querySelector(".alert button").addEventListener("click", function() {
  document.querySelector(".alert").style.display = "none"; // 알림창 숨기기
 });

// 2. 폰트 크기 슬라이더와 .grid-container의 폰트 크기 연결
document.getElementById('fontSizeSlider').addEventListener('input', function () {
  const fontSize = `${this.value}px`; // 슬라이더 값에 'px' 단위 추가
  const gridItems = document.querySelectorAll('.grid-item');

  // 모든 grid-item의 폰트 크기 변경
  gridItems.forEach(item => {
    item.style.fontSize = fontSize;
  });
});

// 초기 설정: Clock_Screen을 항상 표시
document.addEventListener('DOMContentLoaded', () => {
  const clockScreen = document.getElementById('Clock_Screen'); // Clock_Screen 요소 가져오기
  if (clockScreen) {
    clockScreen.style.display = 'block'; // 처음부터 Clock_Screen 표시
  } else {
    console.error("Clock_Screen 요소를 찾을 수 없습니다.");
  }
});

// 리스트 항목 클릭 이벤트 처리
// 초기 설정: Clock_Screen은 처음에 표시되도록 설정
document.addEventListener('DOMContentLoaded', () => {
  const clockScreen = document.getElementById('Clock_Screen'); // Clock_Screen 요소 가져오기
  if (clockScreen) {
    clockScreen.style.display = 'block'; // Clock_Screen을 처음에 표시
  } else {
    console.error("Clock_Screen 요소를 찾을 수 없습니다.");
  }
});

// 리스트 항목 클릭 이벤트 처리
const listItems = document.querySelectorAll('.grid-item'); // 모든 그리드 항목 가져오기
if (listItems.length === 0) {
  console.error("grid-item 요소를 찾을 수 없습니다.");
}

const clickCounts = {}; // 클릭 횟수를 저장하는 객체

listItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.stopPropagation(); // 이벤트 전파 방지

    const screenId = item.dataset.screen; // data-screen 값 가져오기
    if (!screenId) {
      console.error("data-screen 속성이 정의되지 않은 grid-item 요소입니다.");
      return;
    }

    // 클릭 횟수 저장 및 증가
    clickCounts[screenId] = (clickCounts[screenId] || 0) + 1; // 클릭 횟수 초기화 또는 증가

    // 이전에 선택된 항목 초기화
    listItems.forEach(el => el.classList.remove('oneclick'));

    if (clickCounts[screenId] === 1) {
      // 첫 번째 클릭: 클릭한 항목에만 스타일 적용
      item.classList.add('oneclick');
    } else if (clickCounts[screenId] === 2) {
      // 두 번째 클릭: 팝업 화면 표시
      const screenElement = document.getElementById(screenId);

      if (screenElement) {
        // 다른 팝업 숨기기
        document.querySelectorAll('.screen-content').forEach(content => {
          content.style.display = 'none'; // 모든 팝업 숨기기
        });

        // 선택된 팝업 보이기
        screenElement.style.display = 'block';
      } else {
        console.error(`ID가 ${screenId}인 요소를 찾을 수 없습니다.`);
      }

      // 클릭 횟수 초기화
      clickCounts[screenId] = 0;
    }
  });
});


// 팝업 닫기 버튼 처리
const closeButtons = document.querySelectorAll('.popup_closebutton');

if (closeButtons.length === 0) {
  console.error("popup_closebutton 요소를 찾을 수 없습니다.");
}

closeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // 이벤트 전파 방지

    const popup = button.closest('.screen-content'); // 닫을 팝업 요소 가져오기
    if (popup) {
      popup.style.display = 'none'; // 팝업 숨기기
    } else {
      console.error("닫기 버튼이 screen-content 내에 포함되어 있지 않습니다.");
    }
  });
});



 // 3-1. 스크린 닫기 버튼 클릭 이벤트 처리
 const closeButton = document.querySelectorAll('.popup_closebutton');

 closeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // 이벤트 전파 방지

    const popup = button.closest('.screen-content'); // 닫을 팝업 요소 가져오기
    if (popup) {
      popup.style.display = 'none'; // 팝업 숨기기
    }
  });
 });

//5.READ ME 이벤트 모음
 //알림창 활성화 명령어'alertBox'
document.getElementById('README_Screen_Event_Button').addEventListener('click', function() {
  const alertBox = document.querySelector('.alert');
  if (alertBox) {
    alertBox.style.display = 'block';  
  }
});
 //팝업창 닫기 버튼
 document.querySelector(".alert button").addEventListener("click", function() {
  document.querySelector(".alert").style.display = "none"; // 알림창 숨기기
 });

// 이미지 클릭 시 커서 변경
document.addEventListener('DOMContentLoaded', () => {
  const popupImage = document.querySelector('#cursorImage'); // 이미지 요소 선택
  const body = document.querySelector('body'); // body 요소 선택
  const screen = document.querySelector('.screen'); // .screen 요소 선택

  if (popupImage) { // popupImage가 null이 아닌지 확인
    popupImage.addEventListener('click', () => {
      // 커서 이미지를 'pointer.png'로 설정
      body.style.cursor = 'url(pointer.png), auto';
      if (screen) { // screen 요소가 존재하는지 확인
        screen.style.cursor = 'url(pointer.png), auto'; // .screen 커서도 변경
      }
    });
  } else {
    console.log('커서 이미지 요소를 찾을 수 없습니다.');
  }
});


//6.game.exe.이벤트 코드 
 // 격자무늬 자동으로 만드는 코드
 const gridContainer = document.querySelector('.game_grid_container');

 // 64개의 셀을 동적으로 생성하여 gridContainer에 추가
 for (let i = 0; i < 64; i++) {
  const cell = document.createElement('div');
  gridContainer.appendChild(cell);
 }

 // 모든 셀을 클릭할 때 circle 토글하는 기능
 const gridCells = document.querySelectorAll('.game_grid_container div');
 gridCells.forEach(cell => {
  cell.addEventListener('click', function() {
    const existingCircle = cell.querySelector('.circle');
    if (existingCircle) {
      existingCircle.remove();
    } else {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      cell.appendChild(circle);
    }
  });
 });

 // Reset 버튼 클릭 시 모든 원 초기화
 const resetButton = document.getElementById('resetBtn');
 resetButton.addEventListener('click', function() {
  const allCircles = document.querySelectorAll('.circle'); // 모든 원 요소 선택
  allCircles.forEach(circle => {
    circle.remove(); // 원 제거
  });
 });

//7.Schedule.exe 이벤트 코드
 
 // Reset 버튼에 이벤트 리스너 추가
document.getElementById("resetBtn_SCHEDULE_SCREEN").addEventListener("click", function () {
  // 모든 contenteditable 요소 선택
  const editableElements = document.querySelectorAll(".editable");
  
  // 각 요소의 내용을 비움
  editableElements.forEach((element) => {
    element.innerHTML = ""; // 텍스트 초기화
  });
});
