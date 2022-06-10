# Code Notebook

Check out here. Click:point_down:

<a href="https://code-notebook.netlify.app/">
  <img src="https://api.netlify.com/api/v1/badges/30facc59-13a1-44d6-a2b6-5f32c8078aa2/deploy-status">
</a>

## Motivation

자바스크립트 공부할 때 코드를 빨리 짜서 결과를 확인하고 싶은 경우가 많습니다. 새로 익힌 기술을 빠르게 실행해보고 해당 코드 snippet들을 텍스트와 함께 잘 정돈해서 저장할 수 있으면 편할 것 같아서 만들었습니다.

## Tech Stack

Typescript, React, Redux, thunk, esbuild, bulmaswatch

## Deep into tech

### Typescript

Typescript 를 사용한 이유는 개발 중에 버그를 예방하기 위해서입니다. IDE에서 autocomplete 기능으로 개발이 조금 더 편해집니다.

### Redux

Redux를 사용한 이유는 상태관리 때문입니다. Mobx 등 다양한 옵션이 있지만 Redux가 현재 가장 많이 쓰이는 라이브러리이며 공부의 목적으로 사용했습니다. 하나의 store 에 모든 상태를 관리하고 reducer 를 통해서 복잡한 로직을 분류하는게 저한테는 조금 더 와다았습니다.
Redux-thunk middleware 를 사용해서 비동기 dispatch 를 구현했습니다.

### esbuild

사용자가 코드 에디터에 코드를 넣었을 때 그 코드를 실행을 하기 위해서는 사용자가 쓴 코드의 모듈들을 bundle해서 실해해야 합니다. Webpack rollup 등 역시 여러가지 옵션이 존재했지만 esbuild 를 사용한 이유는 esbuild 가 가장 빠르기 때문입니다.
