---
sidebar_position: 3
---

# 3장 함수

## 함수를 작게 만들어라

함수를 만드는 첫째 규칙은 '작게!'다. 함수를 만든느 둘째 규칙은 '더 작게!'다. 지금까지 경험을 바탕으로 그리고 오랜 시행착오를 바탕으로 나는 작은 함수가 좋다고 확신한다.

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
  pageData,
  isStuie,
}: IRenderPageWithSetupsAndTeardowns): string {
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
function renderPageWithSetupsAndTeardowns({
  pageData,
  isSuite,
}: IRenderPageWithSetupsAndTeardowns): string {
  if (isTestPage(pageData)) {
    includeSetupAndTeardownPages(pageData, isSuite);
    return pageData.getHtml();
  }
}
```

> if 문 / else 문 / while 문 등에 들어가는 블록은 한 줄이어야 한다.
> 이 말은 중첩 구조가 생길 만큼 함수가 커져서는 안 된다는 뜻이다. 그러므로 함수에서 들여쓰기 수준은 1단이나 2단을 넘어서면 안 된다. 그래야 함수는 읽고 이해하기 쉬워진다.

## 한 가지만 해라!
> 함수는 한 가지를 해야 한다. 그 한 가지를 잘 해야 한다. 그 한 가지만을 해야 한다.

`목록 3-1`은 다양한 추상화 수준에서 여러 단계를 처리한다. `목록 3-2`도 추상화 수준이 둘이다. 그래서 `목록 3-3`으로 축소가 가능했다. 따라서 함수가 '한 가지'만 하는지 판단하는 방법이 하나 더 있다. 단순히 다른 표현이 아니라 의미 있는 이름으로 다른 함수를 추출할 수 있다면 그 함수는 여러 작업을 하는 셈이다.

## 함수 당 추상화 수준은 하나로!
한 함수 내에 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 특정 표현이 근본 개념인지 아니면 세부사항인지 구분하기 어려운 탓이다. 

> 위에서 아래로 코드 읽기: `내려가기` 규칙
코드는 위에서 아래로 이야기처럼 읽혀야 좋다. 한 함수 다음에는 추상화 수준이 한 단계 낮은 함수가 온다. 즉, 위에서 아래로 프로그램을 읽으면 함수 추상화 수준이 한 번에 한 단계씩 낮아진다.

## Switch 문
switch 문은 작게 만들기 어렵다. case 분기가 단 두 개인 switch 문도 너무 길며, 단일 블록이나 함수를 선호한다. 