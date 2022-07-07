---
title: (JavaScript) Expression VS statement
date: 2019-08-09 10:24:00
category: javascript
tags:
  - javascript
  - Expression
  - statement
  - 식 vs 문
  - Expression VS statement
---

### **표현식은 값을 만들어낸다.**

==Expression==는 표현식이라고도 말합니다.

==Expression==는 단일 값이 되는 자바스크립트 코드의 형식이다. ==Expression==는 원하는 만큼 길어질수 있지만

항상 단일 값을 갖고 있다.

```js
5 +
  5(
    // 10

    Math.random() * (100 - 20)
  ) +
  20;
// random값

functionCall();
// 함수 호출
```

위 코드는 전부 ==Expression(표현식)== 이며 어디서든 단일 값을 기대할 수 있다. 따라서 `console.log`의 인수로 위의 값들 중 하나를 넣어본다면 콘솔에 해당하는 단일 값이 나타나는 걸 확인할 수 있다.

### 표현식은 반드시 상태(State)를 바꿀 필요는 없습니다.

```javascript
const variable = 2; // 이 코드는 Statement입니다 variable은 상태(State)입니다.

variable * 4; // Expression 입니다.

variable * 10; // Expression 입니다.

variable - 10; // Expression 입니다.

console.log(assignedVariable); // 2
```

각종 표현식 에도 불구하고 variable의 값은 여전히 2입니다.

`state`가 변환되지 않는다면 `표현식` 이라고 할 수 있습니다.

함수 호출은 `표현식` 이지만 함수는 아래 코드와 같이 상태를 변경하는 명령문을 포함 할 수 있습니다.

```javascript
    const foo = foo () => {
     variable = 14
    }         // 끔찍한 혼종 힘수호출(표현식), 상태변경(statement) 이 섞여있다.
```

함수 호출은 ==Expression(표현식)== 이지만 호출로 인해 상태가 변경되었습니다.

그러므로 `foo()` 함수를 재 작성하는 더 좋은 방법은 다음과 같습니다.

```javascript
    const foo = foo (n) => {
     return n
    }

    variable = foo(14)
```

이렇게 코드를 더 읽기 쉽게 구성 할 수 있으며 ==Expression(표현식)== 과 ==Statement(문장)== 을 명확하게 구분할 수 있습니다. 이것이 선언적이고 함수적인 javascript의 기반입니다.
