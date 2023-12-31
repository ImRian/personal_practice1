# 주간 루틴 관리 서비스 웹앱

## 주간 루틴 관리 앱 사용 안내

### 개요

"주간 루틴 관리 앱"은 일주일 동안의 개인 루틴을 관리할 수 있는 웹 애플리케이션입니다. 이 앱을 통해 사용자는 매일의 할 일 목록을 계획하고, 진행 상태를 추적할 수 있습니다.

### 기본 기능

- **주간 루틴 표시**: 앱은 현재 주의 각 요일에 대한 루틴을 표시합니다.
- **루틴 추가**: 사용자는 새로운 루틴을 진행해야 하는 요일에 맞춰 추가할 수 있습니다.
- **루틴 수정**: 기존에 추가된 루틴은 수정할 수 있습니다.
- **주간 이동**: 이전 또는 다음 주로 넘어가며 루틴을 관리할 수 있습니다.

### 사용 방법

#### 주간 루틴 확인

앱 상단에서 현재 주의 시작 날짜와 종료 날짜를 확인할 수 있습니다. 각 요일별로 루틴이 표시됩니다.

#### 루틴 추가하기

1. "새 루틴 이름" 입력란에 루틴의 이름을 입력합니다.
2. 요일을 선택하여 루틴이 수행될 날을 지정합니다.
3. "루틴 추가" 버튼을 클릭하여 새로운 루틴을 추가합니다.

#### 루틴 수정

- 루틴의 텍스트 필드를 사용하여 루틴 이름을 수정합니다.
- 루틴의 상태(완료O, 미완료X, 진행중)를 선택 메뉴를 통해 변경할 수 있습니다.

#### 다른 주로 이동하기

- "<" 버튼을 클릭하여 이전 주의 루틴을 확인합니다.
- ">" 버튼을 클릭하여 다음 주의 루틴으로 이동합니다.
- 다른 주로 이동하더라도, 이전에 작성해 놓았던 루틴 데이터는 그대로 남아있습니다.

#### 루틴 상태 관리

각 루틴 옆의 드롭다운 메뉴에서 루틴의 상태를 "O"(완료), "X"(미완료), "진행중"으로 변경할 수 있습니다.

***
# 코딩 테스트 
이 코딩 테스트는 React를 사용하여 주간 루틴 관리 애플리케이션을 구현하는 데 초점을 맞추고 있습니다.  
후보자는 React의 기본 개념에 익숙해야 하며, 컴포넌트 스타일링, 상태 관리, 함수 구현 등의 중요한 기능을 구현할 수 있어야 합니다.  
이 테스트는 후보자가 React의 핵심 개념을 얼마나 잘 이해하고 적용할 수 있는지를 평가하기 위해 설계되었습니다.

## 문제 설명
이 프로젝트는 일주일 동안의 루틴을 관리할 수 있는 웹 애플리케이션을 구축하는 것을 목표로 합니다.  
사용자는 주간 달력에서 각 요일별로 루틴을 추가하고, 해당 루틴의 상태를 변경할 수 있어야 합니다.  
또한, 루틴을 추가하는 기능도 구현해야 합니다.  
이러한 기능들을 구현하기 위해 React의 상태 관리, 이벤트 핸들링, 조건부 렌더링 등의 기술을 활용해야 합니다.

## 작업 지시사항
1. Calendar 컴포넌트 수정: Calendar.jsx 파일에서 `renderWeekTitle` 및 `renderRoutinesForDay` 함수를 구현하세요. 이 함수들은 주간 타이틀을 표시하고, 각 요일에 해당하는 루틴을 렌더링해야 합니다.

2. RoutineManager 컴포넌트 수정: RoutineManager.jsx 파일에서 새 루틴을 추가하고, 루틴의 상태를 관리하는 로직을 구현하세요. 또한, 요일별 루틴 선택 상태를 관리하는 로직도 구현해야 합니다.

3. 코드의 가독성과 구조: 코드는 잘 구조화되어 있어야 하며, 다른 개발자들이 이해하기 쉬워야 합니다. 주석을 통해 코드의 의도를 명확히 해주세요.

4. 테스트 및 실행: 구현한 애플리케이션이 제대로 작동하는지 확인하세요. 모든 기능이 올바르게 작동해야 합니다.

## 문제 의도

- **컴포넌트 스타일링**: React 컴포넌트를 스타일링하는 방법을 이해하고 있는지 확인합니다.
- **상태 관리**: React에서 상태 관리를 효율적으로 할 수 있는 능력을 평가합니다.
- **함수 구현**: 주어진 기능에 대한 적절한 로직을 작성할 수 있는지 평가합니다.

## 프로젝트 실행 방법

1. **프로젝트 클론**: 이 저장소를 로컬 시스템에 클론합니다.  
```git clone https://github.com/ImRian/personal_practice1.git```

2. **의존성 설치**: 프로젝트의 루트 디렉토리에서 필요한 패키지를 설치합니다.  
```npm install```  
```npm install moment```

3. **애플리케이션 실행**: 다음 명령어를 실행하여 애플리케이션을 시작합니다.
npm start

4. **브라우저 접속**: 애플리케이션이 실행되면, 웹 브라우저에서 `localhost:3000`으로 접속합니다.

## 작업 지시사항

- `src/components/Calendar.jsx`와 `src/containers/RoutineManager.jsx` 파일에서 주석으로 표시된 `TODO` 부분을 완성하세요.
- 주간별 루틴을 표시하고, 사용자가 루틴을 추가, 수정 할 수 있어야 합니다.
- 코드의 가독성과 재사용성을 고려하여 작성하세요.

## 평가 기준

- **기능 구현**: 주어진 요구 사항에 맞게 기능이 정확히 구현되었는지 평가합니다.
- **코드 품질**: 코드의 가독성, 구조화, 재사용성을 평가합니다.
- **스타일링**: 컴포넌트의 스타일링이 적절하게 적용되었는지 평가합니다.

***
## 테스트 실행 방법

프로젝트에는 RoutineManager와 Calendar 컴포넌트의 기능을 테스트하는 테스트 케이스들이 포함되어 있습니다.  
이 테스트들을 실행하기 위해 다음 명령어를 사용합니다.

```npm test```

이 명령어는 App.test.js에 정의된 모든 테스트 케이스를 실행합니다.
