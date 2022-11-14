# Todos APP with Firebase

## 🍀 프로젝트 정보

1. 프로젝트 명 : Create Todos with Firebase
2. 프로젝트 기간 : 2022. 10.31 ~ 2022. 11.14
3. 프로젝트 인원: 단독 진행 프로젝트

<br />

---

## 🍀 실행 방법

```
$ git clone https://github.com/dduddu92/Todos.git
$ cd Todos
$ yarn install
$ yarn start
```

<br/>

---

## 🍀 배포 링크

<br/>

> https://todolist-project-dduddu92.vercel.app/

<br/>

---

## 🍀 기술스택

<br/>

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![styledComponents](https://img.shields.io/badge/styled--components-5.3.6-DB7093?logo=styledcomponents)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.4.2-blue?logo=react-router)  
![firebase](https://img.shields.io/badge/firebase-9.13.0-E1C537?logo=firebase)

- **선정 이유**

  - _Styled-Components_
    - 스타일에 대해 고유한 클래스 이름을 생성하므로, 중복 및 맞춤법 오류에 대한 걱정을 덜 수 있음.
    - 구성 요소에 영향을 미치는 스타일을 찾기 위해 여러 파일을 검색할 필요가 없으므로, 유지보수가 간편하다는 장점이 있음.
    - props를 활용한 조건부 렌더링에 용이.
    - 컴포넌트화하여 재활용 가능함.
  - _Firebase_
    - 프론트엔드 단독 진행 프로젝트이므로 백엔드를 대신하여 TodoList를 저장할 데이터 구축에 활용하기 위함.
    - 이메일과 패스워드를 이용한 로그인과 소셜 로그인 API를 지원함.
    - DB를 자체적으로 자유롭게 구축할 수 있으므로 개인 프로젝트에 사용하기 용이하다고 판단하였음.
  - _React-Router-Dom_
    - React의 SPA(Single Page Application)특성상 하나의 페이지에서 모든 렌더링이 이루어진다.
    - 클라이언트 측 라우팅(Client side routing)을 사용하면 서버에서 다른 문서를 요청하지 않고도 링크 클릭을 통해 URL을 업데이트 할 수 있다.
    - 브라우저가 완전히 새로운 문서를 요청하거나 다음 페이지를 위해 CSS와 자바스크립트를 다시 평가할 필요가 없기 때문에 더 빠른 사용자 경험이 가능함.

<br />

---

## 🍀 구현 기능

- Firebase를 이용한 회원가입 및 로그인 기능 구현

  - 회원가입

    - 회원가입은 `firebase`에서 제공해주는 `createUserWithEmailAndPassword` 메소드를 이용하여 구현.
    - firebaseAuth.js 파일에 register 함수를 만들어 사용.

    ```js
    export const register = async (email, password) => {
      return await createUserWithEmailAndPassword(auth, email, password);
    };
    ```

    - 회원가입시 입력 받은 이메일과 유저의 이름을 `setDoc`을 이용하여 데이터베이스에 저장함.
    - `updateUser` 메소드를 통해 user의 displayName을 사용자가 입력한 이름으로 설정함.
      (추후 로그인을 성공했을 때 환영 멘트에 들어갈 이름과, 로그인한 유저의 이름이 todolist header에 보여지는데에 사용)

  - 로그인

    - 로그인 역시 `firebase`에서 제공하는 `signInWithEmailAndPassword` 메소드를 이용하여 구현.
    - firebaseAuth.js 파일에 login 함수를 만들어 사용.

    ```js
    export const login = async (email, password) => {
      return await signInWithEmailAndPassword(auth, email, password);
    };
    ```

  - TodoList 가져오기

    - todos 컬렉션에서 현재 로그인한 유저가 작성한 투두만 가져오기 위해 `firebase`에서 제공하는 `query`메서드를 사용.
    - 또한 `onSnapshot`메서드를 사용하여 쿼리 결과가 변경될 때마다(문서가 추가, 제거 또는 수정될 때마다) 실시간으로 업데이트를 받을 수 있게끔 설정.

    ```js
    useEffect(() => {
      const q = query(
        collection(db, 'todos'),
        where('creatorId', '==', `${userUid}`),
        orderBy('createdAt', 'asc')
      );
      onSnapshot(q, querySnapshot => {
        const data = [];
        querySnapshot.forEach(document => {
          data.push({ id: document.id, ...document.data() });
        });
        setTodos(data);
      });
    }, [userUid]);
    ```

  - TodoList 추가하기

    - input 창에 원하는 내용을 적고 제출하게되면, `addDoc()` 메서드를 이용해 `Cloud FireStore`에 데이터가 저장된다.

    ```js
    const onSubmit = async event => {
      event.preventDefault(); //새로 고침 방지
      try {
        if (todo === '') {
          alert('내용을 입력 해주세요.');
        } else {
          await addDoc(collection(db, 'todos'), {
            creatorId: userUid,
            text: todo,
            createdAt: new Date(),
            done: false,
          });
          setTodo('');
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    ```

  - TodoList 수정하기 및 완료, 미완료 표시

    - `updateDoc()`메서드를 이용해 투두의 수정 및 완료 미완료 기능을 구현하였다.

    ```js
    //투두 수정하기
    const onSubmit = async event => {
      event.preventDefault();
      if (text !== newTodo) {
        const postUpdate = doc(db, 'todos', `${id}`);
        await updateDoc(postUpdate, { text: newTodo });
      }
      setEditTodo(false);
    };
    ```

    ```js
    //투두 완료/미완료 표시 전환
    const onToggleClick = async () => {
      const postDone = doc(db, 'todos', `${id}`);
      await updateDoc(postDone, { done: !done });
    };
    ```

  - TodoList 삭제하기
    - 삭제 기능의 경우, `deleteDoc()` 메서드를 이용하여, 삭제 버튼 클릭 시 해당 id를 가진 Todo 데이터를 삭제하게끔 구현.
    ```js
    //투두 삭제하기
    const onDeleteClick = async () => {
      const confirmToUser = window.confirm('정말 삭제하시겠습니까?🤔');
      const postDelete = doc(db, 'todos', `${id}`);
      if (confirmToUser) {
        await deleteDoc(postDelete);
      }
    };
    ```

---

## 🍀 추후 개선 점

- props drilling을 줄이기 위해 redux(전역 상태 관리 라이브러리)의 필요성을 느낌.
- 다음으로 진행 할 리팩토링 프로젝트에 redux를 사용하여 전역 상태 관리 진행 예정.
