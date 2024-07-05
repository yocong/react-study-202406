import React, { useEffect, useState } from 'react'
import EventList from '../components/EventList';
import EventSkeleton from '../components/EventSkeleton';


const Events = () => {

  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();

  // 서버에서 가져온 이벤트 목록
  const [events, setEvents] = useState([]);

  // 로딩 상태 체크
  const [loading, setLoading] = useState(false);

  // 서버로 목록 조회 요청보내기
  const loadEvents = async() => {

    console.log('start loading...');
    // setLoading이 true일 때만 스켈레톤 나옴
    setLoading(true);

    const response = await fetch('http://localhost:8282/events/page/1?sort=date');
    const events = await response.json();

    setEvents(events);
    // 데이터가 들어오면 false 바뀌면서 스켈레톤 사라짐
    setLoading(false);
    console.log('end loading');
  };

  // 초기 이벤트 1페이지 목록 가져오기
  useEffect(() => {
    loadEvents();
  }, []);

  console.log('event page rendering!');
  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={events}/>
      {loading && <EventSkeleton />}
    </>
  )
}

export default Events

// loader를 app.js로부터 아웃소싱
// export const loader = async () => {

//   const response = await fetch('http://localhost:8282/events/page/1?sort=date');

//   if (!response.ok) {
//     const errorText = await response.text(); // 서버가 내려준 에러내용
//     throw json( // throw new Response -> throw json : stringify 안해도됨
//       { message: errorText },
//       {
//         status: response.status
//       }
//     ); // error message
//   }
//   console.log('loader call!');
//   return response; // ok일 경우 events[]
// };