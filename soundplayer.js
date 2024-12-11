document.addEventListener('DOMContentLoaded', function() {
  const audio = document.querySelector('audio'); // 오디오 엘리먼트
  const playPauseButton = document.getElementById('play-pause');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const progressBar = document.getElementById('progress-bar');
  const volumeControl = document.getElementById('volume');
  
  const tracks = ['audio2.mp3', 'audio1.mp3', 'audio3.mp3']; // 재생할 음악 파일들
  let currentTrackIndex = 0; // 현재 재생 중인 트랙 인덱스
  
  // 초기 트랙 설정
  audio.src = tracks[currentTrackIndex];
  
  // 버튼에 이미지 설정 함수
  function setButtonImage(button, imagePath) {
    button.style.backgroundImage = `url(${imagePath})`;
    button.style.backgroundSize = 'cover';  // 버튼에 이미지 크기 맞추기
  }

  // 초기 버튼 이미지 설정
  setButtonImage(playPauseButton, 'audioplayer-play-but.png');  // 재생 버튼 이미지
  setButtonImage(prevButton, 'audioplayer-down-but.png');  // 이전 버튼 이미지
  setButtonImage(nextButton, 'audioplayer-up-but.png');  // 다음 버튼 이미지

  // 재생/일시 정지 버튼 클릭 시
  playPauseButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      setButtonImage(playPauseButton, 'audioplayer-pause-but.png'); // 일시 정지 버튼 이미지로 변경
    } else {
      audio.pause();
      setButtonImage(playPauseButton, 'audioplayer-play-but.png'); // 재생 버튼 이미지로 변경
    }
  });

  // 이전 버튼 클릭 시 (audio1.mp3 재생)
  prevButton.addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length; // 이전 트랙 인덱스
    audio.src = tracks[currentTrackIndex]; // 새로운 트랙 소스 설정
    audio.play(); // 새로운 트랙 재생
    setButtonImage(playPauseButton, 'audioplayer-pause-but.png'); // 일시 정지 버튼 이미지로 변경
  });

  // 다음 버튼 클릭 시 (audio3.mp3 재생)
  nextButton.addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // 다음 트랙 인덱스
    audio.src = tracks[currentTrackIndex]; // 새로운 트랙 소스 설정
    audio.play(); // 새로운 트랙 재생
    setButtonImage(playPauseButton, 'audioplayer-pause-but.png'); // 일시 정지 버튼 이미지로 변경
  });

  // 오디오의 진행 상황을 업데이트하는 함수
  audio.addEventListener('timeupdate', function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress; // 진행 바 업데이트
  });

  // 사용자가 진행 상황을 변경하면 오디오의 재생 위치를 설정
  progressBar.addEventListener('input', function() {
    const progress = progressBar.value;
    audio.currentTime = (progress / 100) * audio.duration; // 진행 바에 맞춰 오디오 위치 변경
  });

  // 볼륨 조절
  volumeControl.addEventListener('input', function() {
    audio.volume = volumeControl.value / 100; // 볼륨 조절
  });

  // 노래가 끝날 때 다음 트랙으로 자동 재생
  audio.addEventListener('ended', function() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // 다음 트랙 인덱스
    audio.src = tracks[currentTrackIndex]; // 새로운 트랙 소스 설정
    audio.play(); // 새로운 트랙 재생
    setButtonImage(playPauseButton, 'audioplayer-pause-but.png'); // 일시 정지 버튼 이미지로 변경
  });
});
