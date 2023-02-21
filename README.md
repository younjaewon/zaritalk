중간 점검

-- Input Group 재사용성
--- 임대비용, 환급금 예상 Continer 안의 Element 요소가 달라짐에 따라 border-radius, title, label, css 등 재사용 하기에 문제가 있음.
-> 전체 Component를 모듈화하여 사용하는 것이 아닌, 최소한의 Css, 구조만 모듈화 하는것이 낫다고 생각함.
Atom Design에 대해 알아보자 설계 기준이 잡힐 것같다.

-- Context API 성능 최적화
--- Context API로 Global State를 관리하고 있다. Recoil, RTK가 있었지만, 초기 월세, 전세 Tab Component를 재사용성을 고려하여 작업하다 보니, 굳이 Recoil, RTK로 관리
해야 할 필요성을 못느꼇으며, 현재, 요구사항에 맞춰 작업하는데에 있어 Recoil, RTK의 기능은 과하다고 생각하여 Context API로 작업 했다.
--- 현재 Input onChange시 관련 없는 컴포넌트들이 재 렌더링 되는 문제가 있다. useMemo를 통해 action을 Memoization을 해주며, Input을 다루는 모듈화 된 컴포넌트에 React.Memo로 감싸주어 Memoization화 시켜주었다. 하지만, 불필요한 재 렌더링이 발생하고 있다.
-> 예상 원인? : Context API의 Action 객체를 useMemo로 감싸주고 있지만, dependency는 state Object객체가 변경 될 때마다 메모리 주소가 변경이 되어서 그런가?
-> dependency array에 state Object를 주는것이 아닌, state Object의 원시형 데이터를 참조시키는 것으로 시도해 봐야 할 것 같다.

-- 컴포넌트 세분화
--- 컴포넌트는 렌더링 기준을 컴포넌트 단위로 진행한다. state가 변경 될 때마다, 불필요한 요소들도 전부 재 렌더링 되는 문제가 있다.
--- state값에 의존하고 있는 컴포넌트들을 전부 memo를 시켜야 하는것이 올바른지 아니면, 독립적인 InputComponent로 만들어서 관리하는 것이 맞는지는 아직 기준이 안잡힌다.

-- Date Picker
--- 타 라이브러리와 비교해보았을 떄, 접근성, 확장성이 용이하다 생각하였다. 날짜 데이터에 Enabled를 처리하여 disabled 시킬 수 있으며, Custom Css가 용이하여, 추후 리팩터링 작업을 거치며, UI를 쉽게 개선할 수 있다 판단하여 선택했다.

-- Alert
--- Popup 기능 을 System Alert로 작업했다. SweetAlert, react-toastify가 있지만, OS마다 System UI가 다르며, OS 별로 작업을 해주어야 하기 때문에 현재는 System Alert로 OS UI를 따르는 것으로 진행 했다.

-- 아키텍쳐
--- 목적별로 나누는 것이 Code의 가독성이 좋다고 느끼며, Container 컴포넌트에 표현 컴포넌트를 주로 합성하여 개발합니다.
