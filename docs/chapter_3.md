---
sidebar_position: 3
---

# 3장 함수

## 1. 함수를 작게 만들어라

함수를 만드는 첫째 규칙은 '작게!'다. 함수를 만드는 둘째 규칙은 '더 작게!'다. 지금까지 경험을 바탕으로 그리고 오랜 시행착오를 바탕으로 나는 작은 함수가 좋다고 확신한다.

그럼 얼마나 짧아야 좋을까?

```typescript
// 목록 3-1.
function testableHTML({ pageData, includeSuiteSetup }: ITestableHTML): string {
  const wikiPage = pageData.getWikiPage();
  const buffer = new StringBuffer();

  if (pageData.hasAttribue('Test')) {
    if (includeSuiteSetup) {
      const suiteSetup = PageCrawlerImpl.getInheritedPage(
        SuiteResponder.SUITE_SETUP_NAME,
        wikiPage
      );

      if (suiteSetup !== null) {
        const pagePath = suiteSetup.getPageCrawler().getFullPath(suiteSetup);
        const pagePathName = PathParser.render(pagePath);
        buffer.append('!include -setup .').append(pagePathName).append('\n');
      }
    }
    const setup = PageCrawlerImpl.getInheritedPage('SetUp', wikiPage);
    if (setup !== null) {
      const setupPath = wikiPage.getPageCrawler().getFullPath(setup);
      const setupPathName = PathParser.render(setupPath);
      buffer.append('!include -setup .').append(setupPathName).append('\n');
    }
  }
  buffer.append(pageData.getContent());
  if (pageData.hasAttribute('Test')) {
    const teardown = PageCrawlerImpl.getInheritedPage('TearDown', wikiPage);
    if (teardown !== null) {
      const tearDownPath = wikiPage.getPageCrawler().getFullPath(teardown);
      const tearDownPathName = PathParser.render(tearDownPath);
      buffer
        .append('\n')
        .append('!include -teardown .')
        .append(tearDownPathName)
        .append('\n');
    }
    if (includeSuiteSetup) {
      const suiteTeardown = PageCrawlerImpl.getInheritedPage(
        SuiteResponder.SUITE_TEARDOWN_NAME,
        wikiPage
      );
      if (suiteTeardown !== null) {
        const pagePath = suiteTeardown
          .getPageCrawler()
          .getFullPath(suiteTeardown);
        const pagePathName = PathParser.render(pagePath);
        buffer.append('!include -teardown .').append(pagePathName).append('\n');
      }
    }
  }
  pageData.setContent(buffer.toString());
  return pageData.getHtml();
}
```

길다.. 추상화 수준도 너무 다양하고, 코드도 너무 길다. 두 겹으로 중첩된 if 문, 이상한 문자열, 이상한 함수를 호출한다.
`목록 3-1`을 메서드 몇 개를 추출하고, 이름 몇 개를 변경하고, 구조를 조금 변경하면 다음과 같이 표현할 수 있다.

```typescript
// 목록 3-2.
function renderPageWithSetupsAndTeardowns({
  pageData: IPageData,
  isSuite: boolean,
): string {
  if (isTestPage) {
    const testPage = pageData.getWikiPage();
    const newPageContent = new StringButffer();
    includeSetupPages(testPage, newPageContent, isSuite);
    newPageContent.append(pageData.getContent());
    includeTeardownPages(testPage, newPageContent, isSuite);
    pageData.setContent(newPageContent.toString());
  }
  return pageData.getHtml();
}
```

함수가 얼마나 짧아야 하느냐고? 3-2보다 짧아야 한다! 사실 `목록 3-2`는 `목록 3-3`으로 줄여야 마땅하다.

```typescript
function renderPageWithSetupsAndTeardowns(
  pageData: IPageData,
  isSuite: boolean
): string {
  if (isTestPage(pageData)) {
    includeSetupAndTeardownPages(pageData, isSuite);
    return pageData.getHtml();
  }
}
```

> if 문 / else 문 / while 문 등에 들어가는 블록은 한 줄이어야 한다.
> 이 말은 중첩 구조가 생길 만큼 함수가 커져서는 안 된다는 뜻이다. 그러므로 함수에서 들여쓰기 수준은 1단이나 2단을 넘어서면 안 된다. 그래야 함수는 읽고 이해하기 쉬워진다.

## 2. 한 가지만 해라!

> 함수는 한 가지를 해야 한다. 그 한 가지를 잘 해야 한다. 그 한 가지만을 해야 한다.

`목록 3-1`은 다양한 추상화 수준에서 여러 단계를 처리한다. `목록 3-2`도 추상화 수준이 둘이다. 그래서 `목록 3-3`으로 축소가 가능했다. 따라서 함수가 '한 가지'만 하는지 판단하는 방법이 하나 더 있다. 단순히 다른 표현이 아니라 의미 있는 이름으로 다른 함수를 추출할 수 있다면 그 함수는 여러 작업을 하는 셈이다.

## 3. 함수 당 추상화 수준은 하나로!

한 함수 내에 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 특정 표현이 근본 개념인지 아니면 세부사항인지 구분하기 어려운 탓이다.

> 위에서 아래로 코드 읽기: `내려가기` 규칙
> 코드는 위에서 아래로 이야기처럼 읽혀야 좋다. 한 함수 다음에는 추상화 수준이 한 단계 낮은 함수가 온다. 즉, 위에서 아래로 프로그램을 읽으면 함수 추상화 수준이 한 번에 한 단계씩 낮아진다.

## 4. Switch 문

switch 문은 작게 만들기 어렵다. case 분기가 단 두 개인 switch 문도 너무 길며, 단일 블록이나 함수를 선호한다.
일반적으로 나는 switch문을 단 한 번만 참아준다. 다형적 객체를 생성하는 코드 안에서다. 이렇게 상속 관계를 숨긴 후에는 절대로 다른 코드에 노출하지 않는다.

## 5. 서술적인 이름을 사용하라!

어떻게 서술적인 이름을 사용할 수 있을까?

- 함수가 작고 단순할수록 서술적인 이름을 고르기도 쉬워진다.
- 이름이 길어도 괜찮다. 겁먹을 필요없다. 길고 서술적인 이름이 짧고 어려운 이름보다 좋다. 길고 서술적인 이름이 길고 서술적인 주석보다 좋다.
  > eg. `testbleHtml` → `SetupTeardownIncluder.render`
- 서술적인 이름을 사용하면 개발자 머릿속에서도 설계가 뚜렷해지므로 코드를 개선하기 쉬워진다.
- 이름을 붙일 때는 일관성이 있어야 한다.
  > eg. `includeSetupAndTeardownPages`, `includeSetupPages`, `includeSuiteSetupPage` 등. 문체가 비슷하면 이야기를 순차적으로 풀어가기도 쉬워진다.

## 6. 함수 인수

함수에서 이상적인 인수 개수는 `0개(무항)`다. 다음은 `1개(단항)`고, 다음은 `2개(이항)`다. `3개(삼항)`는 가능한 피하는 편이 좋다. `4개 이상(다항)`은 특별한 이유가 필요하다. <u>특별한 이유가 있어도 사용하면 안 된다.</u>
왜 인수는 적을수록 좋을까?

- 인수는 개념을 이해하기 어렵게 만든다. 코드를 읽는 사람이 당장은 세부적일 수 있는 함수 인수의 의미를 해석해야 한다.
- 테스트 관점에서 인수가 없다면 검증이 간단해진다.

### 1) 많이 쓰는 단항 형식

함수에 인수 1개를 넘기는 이유로 가장 흔한 경우는 두 가지다.

- (1) 인수에 질문을 던지는 경우
  > eg. `fileExists("MyFile")` // return boolean
- (2) 인수를 뭔가로 변환해 결과를 반환하는 경우
  > eg. `fileOpen("MyFile")` // return InputStream

혹은 이벤트도 유용한 단항 함수 형식이다.
이외의 경우에 단항 함수는 가급적 피한다.

### 2) 이항 함수

이항 함수는 가급적 단항 함수로 바꾸도록 애써야 한다.

### 3) 삼항 함수

인수가 3개인 함수는 인수가 2개인 함수보다 훨씬 더 이해하기 어렵다. 그래서 삼항 함수를 만들 때는 신중히 고려하라 권고한다.

### 4) 인수 객체

인수가 2-3개 필요하다면 일부를 독자적인 클래스 변수로 선언할 수 있다.

> eg. `makeCircle(x, y, radius)` → `makeCircle(center, radius)`

### 5) 동사와 키워드

함수의 의도나 인수의 순서와 의도를 제대로 표현하려면 좋은 함수 이름이 필수다.

- 단항 함수는 함수와 인수가 동사/명사 쌍을 이뤄야 한다.
  > eg: `write(name)`
- 혹은 함수 이름에 키워드를 추가하는 형식이다. 즉, 함수 이름에 인수 이름을 넣는다.
  > eg: `assertExpectedEqualsActual(expected, actual)`

## 7. 부수 효과를 일으키지 마라!

함수에서 한 가지를 하겠다고 약속하고선 남몰래 다른 부수 효과를 일으키지 않도록 하자.
많은 경우 `시간적인 결합(temporal coupling)`이나 `순서 종속성(order dependency`를 초래한다.

```typescript
class UserValidator {
  cryptographer: string;

  constructor(cryptographer: string) {
    this.cryptographer = cryptographer;
  }

  checkPassword(userName: string, password: string): boolean {
    const user = UserGateway.findByName(userName);
    if (user !== User.NULL) {
      const codedPhrase = user.getPhraseEncodedByPassword();
      const phrase = this.cryptographer.decrypt(codedPhrase, password);
      if ('Valid Password'.equals(phrase)) {
        Session.initialize();
        return true;
      }
    }
    return false;
  }
}

const person = new UserValidator('positiveko');
person.checkPassword('positiveko', '1234');
```

여기서 함수가 일으키는 부수 효과는 `Session.initialize()` 호출이다. `checkPassword`함수는 이름 그대로 암호를 확인한다. 이름만 봐서는 세션을 초기화한다는 사실이 드러나지 않는다. 그래서 함수 이름만 보고 함수를 호출하는 사용자는 사용자를 인증하면서 기존 세션 정보를 지워버릴 위험에 처한다.

<u>이런 부수 효과가 `시간적인 결합(temporal coupling)`을 초래한다. 즉, `checkPassword` 함수는 특정 상황에서만 호출이 가능하다. 다시 말해, 세션을 초기화해도 괜찮은 경우에만 호출이 가능하다.</u> 만약 시간적인 결합이 필요하다면 함수 이름에 분명히 명시한다. `checkPasswordAndInitializeSession`이라는 이름이 훨씬 좋다.

## 8. 명령과 조회를 분리하라!
이다.

함수는 뭔가를 수행하거나 뭔가에 답하거나 둘 중 하나만 해야 한다. 둘 다 하면 안 된다. 둘 다 하면 혼란을 초래한다.

```typescript
function set(attribute: string, value: string): boolean {
  //
}

if(set("username", "positiveko"))...
```

함수를 호출하는 코드만 봐서는 의미가 모호하다. 해결책은 명령과 조회를 분리해 혼란을 뿌리뽑는 방법이다.

```typescript
if (attributeExists("username")) {
  setAttribute("username", "positiveko");
  ...
}
```

## 9. 오류 코드보다 예외를 사용하라!
명령 함수에서 오류 코드를 반환하는 방식은 명령/조회 분리 규칙을 미묘하게 위반한다. 자칫하면 if문에서 명령을 표현식으로 사용하기 쉬운 탓이다.

### 오류 처리도 한 가지 작업이다.
함수는 '한 가지' 작업만 해야 한다. 오류 처리도 '한 가지' 작업에 속한다. 그러므로 오류를 처리하는 함수는 오류만 처리해야 마땅하다. 

## 10. 반복하지 마라!
중복은 소프트웨어에서 모든 악의 근원이다. 많은 원칙과 기법이 중복을 없애거나 제어할 목적으로 나왔다.

## 11. 함수를 어떻게 짜죠?
소프트웨어를 짜는 행위는 여느 글짓기와 비슷하다. 논문이나 기사를 작성할 때는 먼저 생각을 기록한 후 읽기 좋게 다듬는다. 초안은 대개 서투르고 어수선하므로 원하는 대로 읽힐 때까지 말을 다듬고 문장을 고치고 문단을 정리한다. 

## 결론
> 진짜 목표는 시스템이라는 이야기를 풀어가는 데 있다는 사실을 명심하기 바란다.
> 여러분이 작성하는 함수가  분명하고 정확한 언어로 깔끔하게 같이 맞아떨어져야 이야기를 풀어가기가 쉬워진다는 사실을 기억하기 바란다.
