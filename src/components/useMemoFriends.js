// import { useMemo, useState } from 'react';
// import GenerateRandomFriends from './GenerateRandomFriends.js';

// const initalFriends = GenerateRandomFriends(200);

// export default function UseMemoFriends() {
//     const [count, setCount] = useState(0);
//     const [friends] = useState(initalFriends);
//     const [filter, setFilter] = useState('');

//     const visibleFriends = useMemo(() => {
//         return friends.filter(friend => friend.toLowerCase().includes(filter));
//     }, [filter, friends])

//     return (
//         <div>
//             <button onClick={() => setCount(c => c + 1)}>{count}</button>
//             <input onChange={e => setFilter(e.target.value)}/>
//             <ul>
//                 {visibleFriends.map((friend, index) =>
//                     (<li key={index}>{friend}</li>))}
//             </ul>
//         </div>
//     )
// }



import React, { useMemo, useState } from 'react';
// import GenerateRandomFriends from './GenerateRandomFriends.js'; 

const initialFriends = []

export default function UseMemoFriends() {
    const [count, setCount] = useState(0);
    const [friends] = useState(initialFriends);
    const [filter, setFilter] = useState('');

    const visibleFriends = useMemo(() => {
        return friends.filter(friend => friend.name.toLowerCase().includes(filter));
    }, [filter, friends])

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>{count}</button>
            <input onChange={e => setFilter(e.target.value)}/>
            <ul>
                {visibleFriends.map((friend, index) =>
                    (<li key={friend.id}>{friend.name}</li>))}
            </ul>
        </div>
    )
}
