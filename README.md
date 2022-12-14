# Todos APP with Firebase

## ๐ ํ๋ก์ ํธ ์ ๋ณด

1. ํ๋ก์ ํธ ๋ช : Create Todos with Firebase
2. ํ๋ก์ ํธ ๊ธฐ๊ฐ : 2022. 10.31 ~ 2022. 11.14
3. ํ๋ก์ ํธ ์ธ์: ๋จ๋ ์งํ ํ๋ก์ ํธ

<br />

---

## ๐ ์คํ ๋ฐฉ๋ฒ

```
$ git clone https://github.com/dduddu92/Todos.git
$ cd Todos
$ yarn install
$ yarn start
```

<br/>

---

## ๐ ๋ฐฐํฌ ๋งํฌ

<br/>

> https://todolist-project-dduddu92.vercel.app/

<br/>

---

## ๐ ๊ธฐ์ ์คํ

<br/>

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![styledComponents](https://img.shields.io/badge/styled--components-5.3.6-DB7093?logo=styledcomponents)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.4.2-blue?logo=react-router)  
![firebase](https://img.shields.io/badge/firebase-9.13.0-E1C537?logo=firebase)

- **์ ์  ์ด์ **

  - _Styled-Components_
    - ์คํ์ผ์ ๋ํด ๊ณ ์ ํ ํด๋์ค ์ด๋ฆ์ ์์ฑํ๋ฏ๋ก, ์ค๋ณต ๋ฐ ๋ง์ถค๋ฒ ์ค๋ฅ์ ๋ํ ๊ฑฑ์ ์ ๋ ์ ์์.
    - ๊ตฌ์ฑ ์์์ ์ํฅ์ ๋ฏธ์น๋ ์คํ์ผ์ ์ฐพ๊ธฐ ์ํด ์ฌ๋ฌ ํ์ผ์ ๊ฒ์ํ  ํ์๊ฐ ์์ผ๋ฏ๋ก, ์ ์ง๋ณด์๊ฐ ๊ฐํธํ๋ค๋ ์ฅ์ ์ด ์์.
    - props๋ฅผ ํ์ฉํ ์กฐ๊ฑด๋ถ ๋ ๋๋ง์ ์ฉ์ด.
    - ์ปดํฌ๋ํธํํ์ฌ ์ฌํ์ฉ ๊ฐ๋ฅํจ.
  - _Firebase_
    - ํ๋ก ํธ์๋ ๋จ๋ ์งํ ํ๋ก์ ํธ์ด๋ฏ๋ก ๋ฐฑ์๋๋ฅผ ๋์ ํ์ฌ TodoList๋ฅผ ์ ์ฅํ  ๋ฐ์ดํฐ ๊ตฌ์ถ์ ํ์ฉํ๊ธฐ ์ํจ.
    - ์ด๋ฉ์ผ๊ณผ ํจ์ค์๋๋ฅผ ์ด์ฉํ ๋ก๊ทธ์ธ๊ณผ ์์ ๋ก๊ทธ์ธ API๋ฅผ ์ง์ํจ.
    - DB๋ฅผ ์์ฒด์ ์ผ๋ก ์์ ๋กญ๊ฒ ๊ตฌ์ถํ  ์ ์์ผ๋ฏ๋ก ๊ฐ์ธ ํ๋ก์ ํธ์ ์ฌ์ฉํ๊ธฐ ์ฉ์ดํ๋ค๊ณ  ํ๋จํ์์.
  - _React-Router-Dom_
    - React์ SPA(Single Page Application)ํน์ฑ์ ํ๋์ ํ์ด์ง์์ ๋ชจ๋  ๋ ๋๋ง์ด ์ด๋ฃจ์ด์ง๋ค.
    - ํด๋ผ์ด์ธํธ ์ธก ๋ผ์ฐํ(Client side routing)์ ์ฌ์ฉํ๋ฉด ์๋ฒ์์ ๋ค๋ฅธ ๋ฌธ์๋ฅผ ์์ฒญํ์ง ์๊ณ ๋ ๋งํฌ ํด๋ฆญ์ ํตํด URL์ ์๋ฐ์ดํธ ํ  ์ ์๋ค.
    - ๋ธ๋ผ์ฐ์ ๊ฐ ์์ ํ ์๋ก์ด ๋ฌธ์๋ฅผ ์์ฒญํ๊ฑฐ๋ ๋ค์ ํ์ด์ง๋ฅผ ์ํด CSS์ ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ๋ค์ ํ๊ฐํ  ํ์๊ฐ ์๊ธฐ ๋๋ฌธ์ ๋ ๋น ๋ฅธ ์ฌ์ฉ์ ๊ฒฝํ์ด ๊ฐ๋ฅํจ.

<br />

---

## ๐ ๊ตฌํ ๊ธฐ๋ฅ

- Firebase๋ฅผ ์ด์ฉํ ํ์๊ฐ์ ๋ฐ ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ๊ตฌํ

  - ํ์๊ฐ์

    - ํ์๊ฐ์์ `firebase`์์ ์ ๊ณตํด์ฃผ๋ `createUserWithEmailAndPassword` ๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ ๊ตฌํ.
    - firebaseAuth.js ํ์ผ์ register ํจ์๋ฅผ ๋ง๋ค์ด ์ฌ์ฉ.

    ```js
    export const register = async (email, password) => {
      return await createUserWithEmailAndPassword(auth, email, password);
    };
    ```

    - ํ์๊ฐ์์ ์๋ ฅ ๋ฐ์ ์ด๋ฉ์ผ๊ณผ ์ ์ ์ ์ด๋ฆ์ `setDoc`์ ์ด์ฉํ์ฌ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ ์ฅํจ.
    - `updateUser` ๋ฉ์๋๋ฅผ ํตํด user์ displayName์ ์ฌ์ฉ์๊ฐ ์๋ ฅํ ์ด๋ฆ์ผ๋ก ์ค์ ํจ.
      (์ถํ ๋ก๊ทธ์ธ์ ์ฑ๊ณตํ์ ๋ ํ์ ๋ฉํธ์ ๋ค์ด๊ฐ ์ด๋ฆ๊ณผ, ๋ก๊ทธ์ธํ ์ ์ ์ ์ด๋ฆ์ด todolist header์ ๋ณด์ฌ์ง๋๋ฐ์ ์ฌ์ฉ)

  - ๋ก๊ทธ์ธ

    - ๋ก๊ทธ์ธ ์ญ์ `firebase`์์ ์ ๊ณตํ๋ `signInWithEmailAndPassword` ๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ ๊ตฌํ.
    - firebaseAuth.js ํ์ผ์ login ํจ์๋ฅผ ๋ง๋ค์ด ์ฌ์ฉ.

    ```js
    export const login = async (email, password) => {
      return await signInWithEmailAndPassword(auth, email, password);
    };
    ```

  - TodoList ๊ฐ์ ธ์ค๊ธฐ

    - todos ์ปฌ๋ ์์์ ํ์ฌ ๋ก๊ทธ์ธํ ์ ์ ๊ฐ ์์ฑํ ํฌ๋๋ง ๊ฐ์ ธ์ค๊ธฐ ์ํด `firebase`์์ ์ ๊ณตํ๋ `query`๋ฉ์๋๋ฅผ ์ฌ์ฉ.
    - ๋ํ `onSnapshot`๋ฉ์๋๋ฅผ ์ฌ์ฉํ์ฌ ์ฟผ๋ฆฌ ๊ฒฐ๊ณผ๊ฐ ๋ณ๊ฒฝ๋  ๋๋ง๋ค(๋ฌธ์๊ฐ ์ถ๊ฐ, ์ ๊ฑฐ ๋๋ ์์ ๋  ๋๋ง๋ค) ์ค์๊ฐ์ผ๋ก ์๋ฐ์ดํธ๋ฅผ ๋ฐ์ ์ ์๊ฒ๋ ์ค์ .

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

  - TodoList ์ถ๊ฐํ๊ธฐ

    - input ์ฐฝ์ ์ํ๋ ๋ด์ฉ์ ์ ๊ณ  ์ ์ถํ๊ฒ๋๋ฉด, `addDoc()` ๋ฉ์๋๋ฅผ ์ด์ฉํด `Cloud FireStore`์ ๋ฐ์ดํฐ๊ฐ ์ ์ฅ๋๋ค.

    ```js
    const onSubmit = async event => {
      event.preventDefault(); //์๋ก ๊ณ ์นจ ๋ฐฉ์ง
      try {
        if (todo === '') {
          alert('๋ด์ฉ์ ์๋ ฅ ํด์ฃผ์ธ์.');
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

  - TodoList ์์ ํ๊ธฐ ๋ฐ ์๋ฃ, ๋ฏธ์๋ฃ ํ์

    - `updateDoc()`๋ฉ์๋๋ฅผ ์ด์ฉํด ํฌ๋์ ์์  ๋ฐ ์๋ฃ ๋ฏธ์๋ฃ ๊ธฐ๋ฅ์ ๊ตฌํํ์๋ค.

    ```js
    //ํฌ๋ ์์ ํ๊ธฐ
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
    //ํฌ๋ ์๋ฃ/๋ฏธ์๋ฃ ํ์ ์ ํ
    const onToggleClick = async () => {
      const postDone = doc(db, 'todos', `${id}`);
      await updateDoc(postDone, { done: !done });
    };
    ```

  - TodoList ์ญ์ ํ๊ธฐ
    - ์ญ์  ๊ธฐ๋ฅ์ ๊ฒฝ์ฐ, `deleteDoc()` ๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ, ์ญ์  ๋ฒํผ ํด๋ฆญ ์ ํด๋น id๋ฅผ ๊ฐ์ง Todo ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ๊ฒ๋ ๊ตฌํ.
    ```js
    //ํฌ๋ ์ญ์ ํ๊ธฐ
    const onDeleteClick = async () => {
      const confirmToUser = window.confirm('์ ๋ง ์ญ์ ํ์๊ฒ ์ต๋๊น?๐ค');
      const postDelete = doc(db, 'todos', `${id}`);
      if (confirmToUser) {
        await deleteDoc(postDelete);
      }
    };
    ```

---

## ๐ ์ถํ ๊ฐ์  ์ 

- props drilling์ ์ค์ด๊ธฐ ์ํด redux(์ ์ญ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ)์ ํ์์ฑ์ ๋๋.
- ๋ค์์ผ๋ก ์งํ ํ  ๋ฆฌํฉํ ๋ง ํ๋ก์ ํธ์ redux๋ฅผ ์ฌ์ฉํ์ฌ ์ ์ญ ์ํ ๊ด๋ฆฌ ์งํ ์์ .
