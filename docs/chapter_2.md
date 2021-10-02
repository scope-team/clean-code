---
sidebar_position: 2
---

# 2장 의미 있는 이름

> 좋은 이름을 짓는 것은 매우 중요하다. 좋은 이름을 통해 가독성이 좋아진다면 나를 포함한 팀에 혼란을 줄이고 코드의 본질에 집중할 수 있다.

##

## 1) 의도를 분명하게 밝히자

```
// 나쁜 코드
type TList = string[];

function getThem (x: array) {
  const result: TList;
  for(i = 0; i < x.length; i++) {
    if(x[i] === 1) {
      result.push(x[i]);
    }
  }
  return result;
}
```

```
// 좋은 코드
type TGameBoard = string[];

function getFlaggedCells (TargetArray: array) {
  const flaggedCells: TGameBoard;
  const FLAGGED = 1;
  for(i = 0; i < TargetArray.length; i++) {
    if(TargetArray[i] === FLAGGED) {
      result.push(TargetArray[i]);
    }
  }
  return result;
}
```

#### (1) 의미를 함축적으로 담아라.

- 함수가 하는일이 무엇인지 명확해졌다.
- List가 하는 일이 게임판을 알 수 있게 되었다.
- 숫자 1이 깃발이 꽂힌 상태를 표현하는 것임을 알 수 있게 되었다.

#### (2) 코드의 단순성은 변하지 않지만 코드가 더욱 명확해진다.

- FLAGGED라는 상수를 isFllagged라는 명시적인 함수로 바꿔주면 좋다.

## 2) 그릇된 정보를 피하자

#### (1) 널리 쓰이는 의미가 있는 단어를 다른 의미로 사용하면 안 된다.

- 여러 계정을 묶는 경우 array가 아닌데 array를 쓰면 혼란을 줄 수 있다(accountGroup을 사용)
- hp(유닉스 플랫폼을 가리키는 이름)을 hp(빗변)으로 사용하면 혼란을 줄 수 있다

#### (2) 유사한 개념은 유사한 표기법을 사용한다.

- 소문자L과 숫자1, 알파벳O와 숫자0

## 3) 의미있게 구분하자

#### (1) 이름이 달라진다면 의미도 달라져야 한다.

- a1, a2, a3 같은 연속적인 방식 피하자
- 불용어(a, an, the)를 추가한 이름 피하자
- 변수 이름에 variable, 표 이름에 table, 텍스트에 string 등등 의미없는 정보 피하자
- 즉, 읽는 사람이 붙어있는 단어의 그 차이를 알도록 이름을 지어보자.

## 4) 발음하기 쉬운 이름을 사용하자

```
// 나쁜 코드
class DtaRcrd = { private Date genymdhms}
```

```
// 좋은 코드
class Customer = { private Date generationTimestamp}
```

## 5) 검색하기 쉬운 이름을 사용하자

```
// 나쁜 코드
for (i = 0; i < 34; i++) {
  s += (t[i]*4)/5
}
```

- 34는 뭐지? 4는? 5는? 뭐지?

```
// 좋은 코드
const realDaysPerIdealDay = 4;
const WORK_DAYS_PER_WEEK = 5;
for (i = 0; i < NUMBER_OF_TASKS; i++) {
  code blabla
}
```

- 이름을 의미있게 지으면 코드는 길어진다
- 하지만 검색하기 쉬워진다
- 심지어 숫자의 경우에는 검색이 얼마나 어려워질지 생각해보자

## 6) 인코딩을 피하자

#### (1) 멤버 변수 접두어

- m_blabla (과거의 유산)

#### (2) 인터페이스 클래스 vs 클래스

- 굳이 I를 넣어서 주의를 흐트리고 과도한 정보를 제공할 필요가 없다
- 하나를 선택하라면 구현 클래스 이름을 선택하는 것이 좋다.(C를 붙이거나 아예 안 붙이거나, "IProps" 안좋네)

## 7) 기억력을 자랑하지 마라

#### (1) 문자 하나만 사용하는 변수 이름을 피하라

- 루프에서 i, j, k는 괜찮다(l은 안된다. 왤까?)

#### (2) 자신만 아는 이름으로 짓지 말자

## 8) 클래스 이름

- 클래스 이름은 명사나 명사구가 좋다
- Manager, Processor, Date, Info 등은 피한다
- 동사도 피한다

## 9) 메서드 이름

- 메서드 이름은 동사나 동사구가 좋다
- postBlaBla, deleteBlaBla 등이 좋다
- 접근자, 변경자, 조건자는 값 앞에 get, set, is를 붙인다

```
employee.getName();
customer.setName('SangHyuk');
```

## 10) 기발한 이름은 피하자

## 11) 한 개념에 한 단어를 사용하자

## 12) 한 단어를 두가지 목적으로 사용하지 말자

- 맥락이 다른데도 일관성을 고려해서는 안된다
- 값을 더하는 경우 add를 썼다면 집합에 값을 추가할때는 insert, appends 라는 이름으로!

## 13) 해법 영역에서 가져온 이름을 사용하자

- 문제의 영역이 아닌 해법의 영역에서 가져오자(패턴 이름, 수학 용어, 알고리즘 이름 등)
- 비지터 패턴[(링크)](https://dailyheumsi.tistory.com/216)을 이용한 고객관리라면 AccountVisitor라는 이름이 익숙하다
- 기술은 기술 이름이 가장 좋다(EditDocusaurus)

## 14) 문제의 영역에서 가져온 이름을 사용하자(?)

- 적절한게 없다면 문제의 영역에서 가져온다(?)

## 15) 의미 있는 맥락을 추가하자

- 맥락을 유추해야 하는 변수명은 좋지 않다.
- 함수가 긴 경우 작게 쪼갠다.

## 16) 불필요한 맥락을 없애자

- 짧은 이름이 긴 이름보다 좋다 ( 안좋은 예 : 컴포넌트 이름에 Flex를 전부 붙였다, 부모 컴포넌트 이름을 자식에게 계속 물려줬다)
- 포함관계를 클래스로 잘 표현하자

## 17) 단원 정리

- 생략
