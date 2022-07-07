---
title: (JavaScript) 순수 🍌JS로 Module패턴을 사용해서 MVC패턴을 구현한 Momentum
typora-copy-images-to: momentum만들기
date: 2019-09-10 15:27:13
tags: 
  - javascript
  - Vanilla javascript
  - 디자인패턴
  - Design Patterns
  - module Pattern
  - MVC
---

## 모멘텀 만들기입니다.

- Vanilla Js로 구현 했습니다.
- Module패턴으로 구현 했습니다.
- MVC패턴으로 구현 했습니다.
- date함수를 이용해 시간을 구했습니다.
- openWeathermap api를 이용했습니다.
- api를 통해 얻어온 날씨정보를 토대로 이미지와 온도를 출력합니다.
- eslint google style
- es6이후 문법을 사용하려 노력했습니다.
- 날씨 이미지는 [출처](https://www.amcharts.com/free-animated-svg-weather-icons/)를 이용했습니다.
- 크롬환경을 권장합니다. 일부 브라우저에선 작동이 안됩니다.
  <br>

### 완성된 모습  😃

![](/image/todo.png)
### [완성품 링크](https://momentum.mengkko.dev)

### [깃허브 코드 링크](https://github.com/Mengkko/momentum)
<br>

> #### index.html
> - js/app.js 파일을 type="module"로 로드합니다.
> - type="module"로 js파일을 부르면 import를 사용할수있고
> - 각 파일마다 스코프를 갖게 됩니다.
> - [index.html](https://github.com/Mengkko/momentum/blob/master/index.html)

> #### js/app.js
> - 제일먼저 실행됩니다.
> - MainController를 import 합니다. 
> - DOM이 그려진후 MainController.init()을 실행합니다
> - [js/app.js](https://github.com/Mengkko/momentum/blob/master/js/app.js)

> #### js/controllers/MainController.js
> - MVC패턴에서 Controller 부븐을 맡고 있습니다.
> - 모든 View 파일들을 Import 합니다.
> - init()에서 모든 View파일들을 setup 해줍니다.
> - setup은 각자 구현이 다르지만 기본적으로 this.el에 본인의 메인타겟을 넣어줍니다.
> - View파일들은 각각 스코프와 CustomEvent를 갖고있으며
> - .on()을 이용하여 View들의 CustomEvent를 받으려고 대기하고 있습니다.
> - renderView()가 화면을 그리는 역할을 하고
> - 이벤트 발생시 매번 renderView()를 재실행 하는 구조 입니다.
> - [js/controllers/MainController.js](https://github.com/Mengkko/momentum/blob/master/js/controllers/MainController.js)

> #### js/models/TodoListModel.js
> - MVC패턴에서 Model 부분을 맡고 있습니다.
> - LocalData를 저장 수정 검색 삭제 하는 역할입니다.
> - 실시간으로 반영하기 힘들어서 기존 LocalData를 변수로 받아 수정후 변수를 LocalData로 올리는 작업을 합니다.
> - DB를 사용했다면 더 편했을거 같습니다. 
> - 브라우저마다 환경이 달라 크롬에서만 정상작동 합니다.
> - [js/models/TodoListModel.js](https://github.com/Mengkko/momentum/blob/master/js/models/TodoListModel.js)

> #### js/views/View.js
> - 각 역할을 맡은 View파일들이 있지만 모두 이 View.js를 상속 받아 사용합니다.
> - init()은 컨트롤러에서 넘어온 타겟을 this.el 프로퍼티에 저장합니다.
> - on()은 이벤트리스너를 생성해서 CustomEvent를 받는 역할을 합니다.
> - emit()은 CustomEvent를 만들어서 방출하는 역할을 합니다.
> - hide()는 this.el프로퍼티에 저장된 타겟의 css를 수정하여 표시되지 않게 합니다.
> - show()는 hide와 반대로 표시되게 합니다.
> - [js/views/View.js](https://github.com/Mengkko/momentum/blob/master/js/views/View.js)
<br>
<Br>

### 할 말 ‍🏄🏻‍

여러가지 기능을 넣고 싶었지만 우선 toy 프로젝트이기에 

크게 두가지 Todo와 Calendar 두가지만 넣었습니다. 

어차피 MVC패턴을 만든거기에 추가하려면 크게 어렵지 않고

굳이 무겁게 할필요가 없었습니다. 

코드를 짜며 많은 공부가 되었고 만약 누군가가 이 글을 읽는다면 

한번 제 코드를 베이스로 더 멋진 코드를 만들었으면 좋겠습니다.

개인 공부용이고 누군가에게 굳이 오픈하지 않는 글이니 욕하지 말아주세요

읽어주셔서 감사합니다. 🙏
