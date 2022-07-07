---
title: (JavaScript) 디자인패턴
date: 2019-10-13 12:42:48
category: javascript
tags:
  - javascript
  - 디자인패턴
  - Design Patterns
  - module
  - Prototype
  - Observer
  - Singleton
---

### JavaScript Design Patterns

js의 디자인패턴은  

  - [Singleton](#singleton)
  - [Module](#module)
  - Prototype
  - Observer 

... 등이 있지만 대표적으로 Singleton과 Module패턴 두가지를 보겠습니다. 
## Singleton
 싱글톤 패턴은 애플리케이션이 실행될때 어떤 클래스가 최초 한번만 메모리를 할당하고

 그 메모리에 인스턴스를 만들어 사용하는 디자인 패턴입니다.

 생성자가 여러 차례 호출되더라도 실제로 객체는 하나고 최초 생성 이후 호출된 생성자는

 최초에 생성한 객체를 반환합니다.

ES5 에서의 싱글톤 패턴은 간단하게 객체 리터럴방식이 대표적인 예입니다.
```js
var obj = {
  a: 'hello',
  b: function() {
    alert(this.a);
  }
};
```

ES6 에서의 싱글톤 패턴
 ```js
let instance;
class Singleton {
    constructor() {
        if (instance) return instance;

        this.name = '김수한무';
        this.date = new Date();
        instance = this;
    }
}
const singleton_1 = new Singleton();
const singleton_2 = new Singleton();
 
singleton_1 === singleton_2; // true
instance === singleton_1     // true
 ```

## module
  module 패턴은 가장 널리 사용되는 디자인 패턴 입니다.

  객체지향 언어에 익숙하신 분들은 JavaScript의 Class라고 이해하시면 좋습니다. 

  IIFE (Immediately-Invoked-Function-Expressions)를 이용한 private변수를 활용하는게 특징입니다.
```js
const contentLog = (function() { 
    const contents = 'contents' 
    const log = function() {
      console.log(contents)
    } 
    return { 
      callLog: function() { 
      log(); 
    } 
  }; 
  })();

contentLog.callLog()              // 'contents'
console.log(contentLog.contents)  // undefined
```
크게 두가지 특징이 있습니다.
  - 비공개 변수를 갖는다.
  - 모듈 내부에서만 접근이 가능하다.

위와 같이 설명한게 기존 ES6이전 문법에서의 Module 패턴입니다.

기존에 C언어는 #include, Java는 import 등 대부분 언어가 모듈 기능을 갖고 있습니다.

하지만 클라이언트 사이드 JavaScript에서는 script태그를 통해 외부의 script 소스를 갖고 올수 있지만

파일마다 독립적인 파일 스코프를 갖지않고 하나의 전역 객체(Global Object)에 바인딩 되기 때문에 전역 

변수가 중복 되는 등의 문제를 갖고 있어 IIFE를 이용한 클로저를 사용해 흉내내기만 가능했습니다.

ES6 에서는 기존 Module 패턴이 넘어와 직접적으로 js파일이 Module로서 동작할수 있게 되었습니다.

```html
<script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script>
```
script 태그에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작합니다. 
Module의 파일 확장자는 'mjs'를 권장합니다.

#### 예제 코드
```html
<!DOCTYPE html>
<html>
<body>
  <script src="foo.js"></script>
  <script src="bar.js"></script>
</body>
</html>
```
```js
// foo.js
const x = 'foo'

console.log(x) 
```
```js
// bar.js
// 중복 선언
const x = 'bar'

console.log(x)
```
----
```html
<!DOCTYPE html>
<html>
<body>
  <script type="module" src="foo.js"></script>
  <script type="module" src="bar.js"></script>
</body>
</html>
```
```js
// foo.js
const x = 'foo'

console.log(x) 
```
```js
// bar.js
console.log(x)  // x is not defined
```

