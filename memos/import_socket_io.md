## 서론

Client단에서 socket.io 를 import 하는데 문제가 있었는데 약 1시간 이상 소모했다.
그대신 중요하고 기본적인 것을 깨달았다. 어찌보면 당연한건데...
일단, 이 문제는 typescript 를 사용하기 때문에 발생한 문제였다.
(typescript를 사용하지 않으면 1분이면 끝났을...)

typescript를 사용한다 해도 webpack을 사용하면 충분히 문제를 해결할 수 있다.
하지만 나는 이 앱을 그렇게 크게 키우고 싶지 않았고, vanilla typescript 내에서 해결하고 싶었다.
수십가지 해결 방안들을 찾아봤고, 내 사례와 맞는 방법을 찾기는 어려웠다.

그 중 이 문제를 해결할 수 있는 답변을 드디어 찾게 되었다.

## 문제

node_modules 에 있는 패키지는 기본적으로 바닐라 js 에서 import 할 수 없다.
그래서 뭐 node_modules 에 있는 폴더의 경로를 입력한다던가, 
cdn을 사용한다던가 하는 방법들을 사용할 수 있다.

하지만 ts 에서는 node_modules 경로를 직접 입력하면 type을 찾을 수 없는 문제가 있었고,
cdn을 사용하면 해당 모듈을 아예 찾을 수 없는 문제가 있었다.
(그냥 tsc로 빌드하면 작동은 되긴 했는데 빨간 밑줄이 보고싶지 않았다.)

## 해결

내가 찾은 나에게 맞는 답변은 아래 링크에 있다.
https://stackoverflow.com/questions/52967044/cannot-find-name-firebase-vanilla-typescript

socket.io 와 @types/socket.io 를 설치하고 type만 참조하는 방법이었다. 어차피 node_modules 폴더는 배포때 사용하지 않을거라서
이 방법은 괜찮아 보였다.



