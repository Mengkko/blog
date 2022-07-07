---
title: (JavaScript) == vs === and typeof
date: 2019-08-08 12:42:48
category: javascript
tags:
  - javascript
  - ==
  - ===
  - typeof
---

### **두가지(==, ===)의 비교연산자**

Javascript 에는 동등 비교연산자 두가지가 있습니다. ( == , === ) &#128516;

Javascript에서 === 연산을 사용할 때, 우리는 엄격한 동등성을 비교합니다.

엄격한 동등성은 값은 물론이고 타입까지 같아야 한다는 의미입니다.

===와 == 를 비교할 수 있는 코드 몇 가지를 가져왔습니다.

```js
1234 == "1234";
// true 

1234 === "1234";
// false

0 == false;
// true
1 == true;
// true
"" == false;
// true

0 === false;
// false
1 === true;
// false

null == undefined;
// true
null === undefined;
// false
```

위 코드에서 보듯이 === 연산자는 타입, 값 모두 같아야 ==true== 를 반환하고

하나라도 다르다면 ==false==를반환 하는 엄격함을 갖고 있습니다.

비교적 == 연산자는 느슨한 비교를 하는 것을 볼 수 있는데 충격적인 사실은

```javascript
"" == false;
// true
"0" == false;
// true
```

위 코드값이 ==true==를 반환한다는 것입니다.

그 이유는 ==falsy==값 때문입니다. ==falsy==값이란 Javascript에서는

=="" => false== 빈문자열을 false값으로 강제 변환 시킵니다.

그리고 ==false==로 변환된 ==""== 은 결국 ==false==와 같은 값이 돼버립니다.

위 코드를 통해 Javascript에서는 특별한 경우가 아니라면 == 보다는 === 를 더 권장합니다.

이유는 정확한 비교를 하기 위해서 입니다.

Javascript에서는 총 6가지에 값을 ==falsy==값으로 통용합니다.

> 1.  false
> 2.  0
> 3.  ""
> 4.  null
> 5.  undefined
> 6.  NaN

간단하게 위 6가지의 ==falsy== 값이 ==if문== 에 인자로 들어간다면

==false==이기 때문에 진행할 수 없습니다.

```javascript
let cat = "cat";
if ("") cat = "dog";
console.log(cat);
// "cat"
```

이를 통해 이해했는지를 보기 위해 예제를 준비했습니다.

아래 코드를 보고 어떻게 실행될지 맞혀 보세요

```javascript
// -------------------------- 1번
let cat = "cat";
if ("0") cat = "dog";
console.log(cat);

// -------------------------- 2번
let cat = "cat";
if (NaN == NaN) cat = "dog";
console.log(cat);
```

### **typeof.**

흔히 `typeof()`는 함수 또는 메소드로 알고 있지만 사실 `typeof()`는 연산자 입니다.

`typeof()` 로 쓰는것 보다 `typeof 123` 이런 식으로 쓰는 것이 올바른 방법입니다.

매개변수로 받은 값의 원시값을 나타내는 표현식입니다.

`typeof()`가 반환할 수 있는 값은 아래 표와 같습니다.

<br>

| type                                                         |     Result      |
| :----------------------------------------------------------- | :-------------: |
| Undefined                                                    |   "undefined"   |
| Null                                                         |    "object"     |
| Boolean                                                      |    "boolean"    |
| Number                                                       |    "number"     |
| Bigint                                                       |    "bigint"     |
| String                                                       |    "string"     |
| Symbol (ECMAScript 2015에서 추가)                            |    "symbol"     |
| 호스트 객체 (JS 환경에서 제공)                               | 구현체마다 다름 |
| Function 객체 (ECMA-262 표현으로는 [[Call]]을 구현하는 객체) |   "function"    |
| 다른 모든 객체                                               |    "object"     |

```js
// Numbers
typeof 37 === "number";
typeof 3.14 === "number";

typeof Math.LN2 === "number";
// 자연로그(2) 값

typeof Infinity === "number";
// Infinity는 무한대 값입니다. 어떤값을 0으로 나눠도 나오는 값입니다.

typeof NaN === "number";
// NaN도 number형 입니다.

typeof Number(1) === "number";
// 이런식으로 쓸꺼라면 쓰지마세요 ㅎ

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";

typeof typeof 1 === "string";
// typeof의 result값은 항상 문자열을 반환합니다.

typeof String("abc") === "string";
// 이런식으로 쓸꺼라면 쓰지마세요 ㅎ

// Booleans
typeof true === "boolean";
typeof false === "boolean";

typeof Boolean(true) === "boolean";
// 이런식으로 쓸꺼라면 쓰지마세요 ㅎ

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
// ECMAScript 2015에서 추가된 속성 입니다. 나중에 따로 자세히 다뤄야 할 것 같습니다.

// Undefined
typeof undefined === "undefined";

typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";
// 위 두값은 예약어도 아니고 선언한적도 없는 값이라 undefined를 반환합니다.

// Objects
typeof { a: 1 } === "object";

// 배열은 typeof 보다는 isArray 또는 Object.prototype.toString.call를 이용합니다.
// 일반 객체와 배열을 구별하지 못합니다.
typeof [1, 2, 4] === "object";

typeof new Date() === "object";

// 다음 사용법은 혼란스러우니 권장하지 않습니다.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function() {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
// Math.sin은 메소드 입니다.
```

추가적인 정보는 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)을 참고해주세요 😃
