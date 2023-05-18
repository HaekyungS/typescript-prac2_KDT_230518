// 1. 이름 만들기
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
  if ((na === a || na===b || na===c) && (you === a || you===b || you===c)) {
    if (na === you) {
      return '비김비김'
    }
    else if (na !== you) {
      if (na === a) {
        if (you === b) {
          return false
        } else if (you === c) {
          return true
        }
      } else if (na === b) {
        if (you === a) {
          return true
        } else if (you === c) {
          return false
        }
      } else if (na === c) {
        if (you === a) {
          return false
        } else if (you === b) {
          return true
        }
      }
    }
  } else {
    return '가위바위보 할 줄 몰라?'
  }

  // 리턴은 변할 수 있다. 불리언일 수도 있고, 값일 수도 있는 것임. 그래서 나중에 정해도 됨.
}

let rules = ['가위', '바위', '보']

function gamBamBoResult(result:any){
  if(result===true){
    return '내가 이겼다!'
  }else if(result===false){
    return '니가 이겼넹..'
  }else{
    return result
  }
}
// 타입을 any 로 해서 작동은 하는데 음
// console.log(gamBamBoResult(gamBamBo('가', rules[2])))


// 랜덤함수로 가위바위보 중 하나 뱉어내기

let me = rules[Math.floor(Math.random()*rules.length)]
let you = rules[Math.floor(Math.random()*rules.length)]

console.log(me, you)
console.log(gamBamBo(me, you))