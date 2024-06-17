import React, { useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';



const App = () => {

    // 회원들이 저장될 배열
    const [userList, setUserList] = useState([]);

    const addUserHandler = user => {
        console.log(user);
        setUserList(prev => [
            ...prev, // 기존 회원 복사해서 오고,
            {
                // 추가 회원 등록을 여기서
                ...user, // 기존 유저의 username, age가 들어있고,
                id: Math.random().toString()} // id를 여기서 생성해서 부여.
        ]);
    };

    return (
        <>
            <AddUsers onAddUser={addUserHandler} />
            <UserList users={userList}/>
        </>
    );
};

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import ExpenseList from './components/expenses/ExpenseList';
// import NewExpense from './components/new-expense/NewExpense';
//
//
//
// const App = () => {
//
//     // 서버에서 지출항목 JSON 배열을 응답받음
//     const expenses = [
//         {
//             title: '치킨먹음',
//             price: 30000,
//             date: new Date(2024, 6 - 1, 3)
//         },
//         {
//             title: '족발먹음',
//             price: 40000,
//             date: new Date(2023, 12 - 1, 17)
//         },
//         {
//             title: '헬스장등록',
//             price: 300000,
//             date: new Date(2024, 6 - 1, 12)
//         },
//         {
//             title: '파파존스피자',
//             price: 40000,
//             date: new Date(2022, 3 - 1, 4)
//         },
//         {
//             title: '파리채',
//             price: 1500,
//             date: new Date(2023, 5 - 1, 6)
//         },
//     ];
//
//     // 배열을 상태변수로 관리
//     const [expenseList, setExpenseList] = useState(expenses);
//
//
//     // ExpenseForm에게 내려보낼 함수
//
//     // setter에게 변경을 감지시키기 위해서는
//     // 새로운 값을 넣어야 한다. (주소값 이전)
//     const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);
//
//     return (
//         <>
//             <NewExpense onSave={onAddExpense} />
//
//             <ExpenseList expenses={expenseList} />
//         </>
//     );
// };
//
// export default App;

