---
title: (JavaScript) this_call_apply_bind
typora-copy-images-to: this_call_apply_bind
date: 2019-09-03 08:37:12
tags:
---

## this

#### 1.전역 공간에서 this

전역 공간에서 this는 global 객체 또는 window 객체를 가르킵니다.

이 window와 global은 모두 ECMAScript에서 정의한 전역객체의 구현체입니다. 

각 호스트 환경에서 정의한 바에 따라 구체적인 내용이 상이합니다. 

![](/image/this1.png)

---

#### 2.함수 내부에서 this

함수 내부에서 this는 전역공간과 같이 전역객체를 가르킵니다.

```js
function a() {
    console.log(this)
}
a()
// 함수 내부에서 this를 출력해도 window를 출력하고

function b() {
    function c() {
        console.log(this)
    }
    c()
}
b()
// 외부함수 b의 내부함수인 c에서 this를 호출해도 window를 출력하고

const d = {
    e: function () {
        function f() {
            console.log(this)
        }
        f()
    }
}
d.e()
// d객체 내의 메소드 e 안에있는 f함수 내부에서 this를 출력해도 window를 출력합니다. 
```

즉 함수내부에서 this는 기본적으로 전역객체를 가르킵니다.

즉 default값이 전역객체이며 바꿀수 있습니다. 

바꾸는법은 추후에 설명 하겠습니다. 

---

#### 3.1 메소드 호출시 this

메소드 호출시의 this는 메소드의 호출 주체 입니다. 

```js
const a = {
    b: function() {
        console.log(this)
    }
}
a.b()
// a.b를 호출하면 b함수 내부에서 this를 호출합니다
// 결과는 a객체를 출력합니다.
```
```js
const a = {
    b: {
        c: function() {
            console.log(this)
        }
    }
}
a.b.c();
// 객체 a의 b 프로퍼티가 객체이고 그안에 c메소드가 있다면 
// a.b객체를 출력합니다. 
```

정리하면 메소드명 앞에 있는 .까지가 this다 라고 할수 있습니다. 

첫번째 코드 a.b() 에서는 b()메소드 앞에있는 a가 this이고 

두번째 코드 a.b.c() 에서는 c()메소드 앞에있는 a.b가 this 입니다.

#### 3.2 내부 함수에서 우회법 

```js
const obj = {
    a: 20,
    b: function() {
        console.log(this.a)
        function c() {
            console.log(this.a)
        }
        c()
    }
}
obj.b() // 20 undefined

// 첫번째 this.a는 20에 접근이 가능하여 출력이 되지만
// b메소드의 내부함수 c는 this.a가 undefined 가 출력이 됩니다. 
// 이를 우회하기 위해 아래와 같이 사용할수 있습니다. 

const obj = {
    a: 20,
    b: function() {
        const that = this
        console.log(this.a)
        function c() {
            console.log(that.a)
        }
        c()
    }
}
obj.b() // 20 20
```
첫번째 코드에 c함수에서 this.a 로 접근이 불가능한 이유는 obj.b()는 메소드여서 obj라는 this를 갖지만

내부함수 c는 메소드가 아닌 함수이기때문에 this는 window를 가르킵니다. 

그래서 obj를 직접 접근하거나 스코프체인을 이용해 that과 같은 변수를 선언해 내가 추후에 이용할

this를 저장해서 사용이 가능합니다. 

---

추가적으로 callback 함수에서 this가 있지만 

아래 callm, apply, bind를 먼저 이해하고 진행 하겠습니다. 

## call apply bind

```js
const obj = {
    str: 'Hello World'
}

function a(x, y, z) {
    console.log(this, x, y, z)
}



a.call(obj, 1, 2, 3)
//  Object {str: "Hello World"} 1 2 3


a.apply(obj, [1, 2, 3])
//  Object {str: "Hello World"} 1 2 3

const b = a.bind(obj)
b(1,2,3)
//  Object {str: "Hello World"} 1 2 3

const d = a.bind(obj, 1,2)
d(3)
//  Object {str: "Hello World"} 1 2 3
```

위 코드에서 call, apply, bind는 모두 같은 답을 출력하는 예제입니다

각각의 api를 읽어보면 사용법은 아래와 같습니다.

```js
fun.call(thisArg[, arg1[, arg2[, ...]]])

fun.apply(thisArg, [argsArray])

fun.bind(thisArg[, arg1[, arg2[, ...]]])

```

세가지 모두 첫번째 인자로는 thisArg를 받고 있습니다.

내가 원하는 this를 넣어주고 그뒤로 내가 원하는 인자를 넣어줍니다.

call과 apply의 차이는 

call은 두번째 인자부터 함수에 쓰일 인자를 넣는것이고 

apply는 인자를 모두 하나의배열로 합쳐서 한번에 넣는것입니다. 

call과 apply는 모두 즉시호출함수이고

bind는 새로운 함수를 생성하는 기능을 합니다. (currying)

위 코드에서 가장 마지막에 호출하는 d(3)에 대해 설명하면 

a함수를 d라는 변수에 새롭게 생성하는데 this값은 obj를 갖고 첫번째 인자와 두번째 인자는 1, 2로 고정

그리고 d(3)을 호출하게 되면 세번째 인자에 3이 들어가게 됩니다. 앞서 bind할때 

첫번째와 두번째 인자는 이미 고정을 해서 몇개의 값을 넣든 세번째 인자부터 들어가게 됩니다.

---


## callback 함수에서 this

```js
const callback = function() {
    console.log(this)
}

const obj = {
    a: 1,
    b: function(cb) {
        cb()
    }
}
obj.b(callback)
// 당연하게도 callback함수는 함수니깐 this는 window를 가르킵니다.

const callback = function() {
    console.log(this)
}

const obj = {
    a: 1,
    b: function(cb) {
        cb.call(this)
    }
}
obj.b(callback)
// call메소드를 이용해 this를 넘겨준다면 this는 obj객체를 가르킵니다. 
```

이렇게 기본적으로 callback함수에서 this는 위에 설명했던 

(2.함수 내부에서 this)와 같습니다.

그리고 이제는 많이 쓰이는 이벤트 핸들러에서 this가 

왜 event를 발생한 dom객체인 이유가 설명이 됩니다.

```js
document.body.innerHTML += '<button id="a">클릭하세요</button>'

document.getElementById('a')
	.addEventListener('click', function() {
		console.dir(this)
	})
```

![](/image/this2.png)


addEventListener라는 함수가 자체적으로 callback함수를 호출할떄는 

dom객체를 this로 명시 했기 때문입니다.

물론 제어권을 받은 함수가 this를 어떤식으로 binding 했던간에

개발자가 그 규칙을 무시하고 다른것으로 대체하도록 명시할수 있습니다. 

```js
const obj = { a: 1 }
document.body.innerHTML += '<button id="a">클릭하세요</button>'

document.getElementById('a')
	.addEventListener('click', function() {
		console.dir(this)
	}.bind(obj))
```
![](/image/this3.png)

정리하자면 callback함수에 this는 기본적으로 위에서 설명했던 

함수 내부에서 this와 같습니다. 하지만 제어권을 가진 함수가 

callback의 this를 명시한 경우 그에 따르게 되고

개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따르게 됩니다. 
---
## 결론 

| 위치 |  this가 가르키는것  |
|---|---|
| 전역 공간에서 | window / global |
| 함수 내부에서 | window / global |
| 메소드 호출시 | 메소드 호출 주체 (메소드명 앞) |
| callback에서 | 기본적으로 함수 내부에서와 동일 |