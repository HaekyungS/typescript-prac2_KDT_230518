// 1. 이름 만들기
let count = 0;
let winCount = 0;
let loseCount = 0;

function gamBamBo(na: string, you: string) {
  // 2. 규칙 만들기 ( 작업중, 구상중이라 쓰기 )
  // 가위는 주먹한테 지고, 보자기가 이긴다
  // 보자기는 주먹한테 이기고, 가위한테 진다
  // 주먹은 보자기한테 지고, 가위한테 이긴다.
  // 규칙은 불변함 = 전제임. => 이게 `설계` 이다.

  let a = '가위';
  // 가위
  let b = '바위';
  // 바위
  let c = '보';
  // 보

  // you가 이기면 false, 지면 true
  if ((na === a || na === b || na === c) && (you === a || you === b || you === c)) {
    count++;
    if (na === you) {
      return count+'번째 경기의 결과는 무승부 입니다. 현재 스코어는'+winCount+':'+loseCount
    }
    else if (na !== you) {
      if (na === a) {
        if (you === b) {
          loseCount++;
          return count+'번째 경기의 결과는 내가 졌습니다. 현재 스코어는'+winCount+':'+loseCount
        } else if (you === c) {
          winCount++;
          return count+'번째 경기의 결과는 내가 이겼습니다. 현재 스코어는'+winCount+':'+loseCount
        }
      } else if (na === b) {
        if (you === a) {
          winCount++;
          return count+'번째 경기의 결과는 내가 이겼습니다. 현재 스코어는'+winCount+':'+loseCount
        } else if (you === c) {
          loseCount++;
          return count+'번째 경기의 결과는 내가 졌습니다. 현재 스코어는'+winCount+':'+loseCount
        }
      } else if (na === c) {
        if (you === a) {
          loseCount++;
          return count+'번째 경기의 결과는 내가 졌습니다. 현재 스코어는'+winCount+':'+loseCount
        } else if (you === b) {
          winCount++;
          return count+'번째 경기의 결과는 내가 이겼습니다. 현재 스코어는'+winCount+':'+loseCount
        }
      }
    }
  } else {
    return '가위바위보가 뭔지 모르시나봅니다. 이번 판은 횟수를 측정하지 않습니다.'
  }
  // 리턴은 변할 수 있다. 불리언일 수도 있고, 값일 수도 있는 것임. 그래서 나중에 정해도 됨.
}

let rules = ['가위', '바위', '보']

// function gamBamBoResult(result: any) {
//   if (result === true) {
//     return '내가 이겼다!'
//   } else if (result === false) {
//     return '니가 이겼넹..'
//   } else {
//     return result
//   }
// }
// 타입을 any 로 해서 작동은 하는데 음
// console.log(gamBamBoResult(gamBamBo('가', rules[2])))


// 랜덤함수로 가위바위보 중 하나 뱉어내기

let me = rules[Math.floor(Math.random() * rules.length)]
let you = rules[Math.floor(Math.random() * rules.length)]

console.log(me, you)
console.log(gamBamBo(me, you))