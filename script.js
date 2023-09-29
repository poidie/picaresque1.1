const terminal = document.getElementsByClassName("root")[0];
const body = document.getElementsByTagName("body")[0];
let newLine = document.createElement("p");
const skipBtn = document.querySelector(".control span");
terminal.appendChild(newLine);

let str = `
불행해질 권리를 요구합니다. 여호와 하나님께서 동쪽 에덴에 정원을 창조하셔서 그 지으신 사람을 거기 두시고 9월 29일 21시 30분에 밴드 링크가 공개합니다. 9월 29일 23시, 회원 가입 신청이 일제히 접수되었습니다. 가까운 미래의 디스토피아, 사이버펑크. 10인 소수의 괄호를 사용한 추론, 생존, 탈출? 본 포스팅 목격 후 캐릭터 카드 할당, 주사위 결정, 장면에 집중해 보세요. 내가 누군지 알면 나는 자유로워질 것이다. 신청서를 제출하기 전 롤 카드 배포, 죽음의 각오, 시나리오 중심. 캐릭터 부상이나 죽음, 모라토리엄 유발 소재에 주의하세요. 스프린트 계획은 29일 밤부터 약 여섯 시간까지다. 너의 선택에 따라 역사의 흐름이 결정되오니, 이 기간에 적극적으로 참여하지 못하시는 분은 등록을 자제해 주시기 바랍니다. 우리의 부주의에 건배하는 밴드는 비윤리성이 강한 서사를 다루지만, 운영진은 이를 지지하거나 옹호하지 않습니다. 가입 시 공백 이미지와 두 글자 한글 닉네임으로 프로필을 설정 요망이 필수불가결하는 이미 러닝 이력 있는 재구성된 밴드이므로 모든 문의는 게시물을 등록된 출처의 담당자에게 연락해 보세요.
`

sayItSlowly('Main', "braveNewWorld", str);

function sayItSlowly(user, place, str){
  let username = `${user}@${place}:~$`;
  let arr = `${username}${str}`.split("");
  let counter = 0;
  let isPaused = false;

  let interval = setInterval(function(){
    if (!isPaused) {
      printChar(arr[counter]);
      counter++;   
    }

    if (counter === arr.length) {
      clearInterval(interval);
      skipBtn.textContent = "Overwirte.";
      skipBtn.classList.remove("hidden");
      skipBtn.addEventListener("click", () => {
        newLine.textContent = ""
        sayItSlowly(user, place, str)
      })
    }

    if (terminal.clientHeight > (body.clientHeight/2)) {
      if(arr[counter] === " "){
        // toggle alway toggling and wont stop, we need to toggle skipBTN outside interval
        isPaused = true;
        skipBtn.classList.remove("hidden");
        
        skipBtn.addEventListener("click", function(){
          newLine.textContent = `${username}`;
          skipBtn.classList.add("hidden");
          isPaused = false;
      })
      }
    }
  }, 50)
}


function pause(){
  clearInterval(interval);
}

function printChar(char){
  newLine.textContent += char;
}