---
title: (MacOS) OS업데이트 후 git error
date: 2019-10-08 08:37:12
tags:
 - Catalina
 - macos
 - git 오류
 - git 에러
 - xcode-select
---

## git 오류(error)

Catalina 업데이트 후 아래와 같은 오류가 발생했다.

```cmd
~ git --version
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

갑자기 git이 사용이 안됬다. 

인터넷을 찾아보니 MacOS 특유의 OS업데이트 이후 버그라고 한다.

xcode를 재설치하면 해결이 가능하다고 한다.

하지만 나는 xcode를 따로 사용하지 않고 무거운 xcode를 설치하기엔 부담이여서 

아래와 같은 해결법을 찾았다.

```cmd
~ xcode-select --install
```

설치가 완료되면 아래와 같이 git이 정상 작동하는걸 볼수있다.
<img-cont src="git_error_2.png" art=""/>


