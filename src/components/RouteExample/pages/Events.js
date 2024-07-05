import React, { useEffect, useState } from 'react'
import EventList from '../components/EventList';
import EventSkeleton from '../components/EventSkeleton';

// npm install lodash
import { debounce, throttle } from 'lodash';

const Events = () => {

  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();

  // 서버에서 가져온 이벤트 목록
  const [events, setEvents] = useState([]);

  // 로딩 상태 체크
  const [loading, setLoading] = useState(false);

  // 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState(1);

  // 더이상 가져올 데이터가 있는지 없는지 확인
  const [isFinish, setIsFinish] = useState(false);

  // 서버로 목록 조회 요청보내기
  const loadEvents = async() => {

    if (isFinish) {
      console.log('loading finished');
      return;
    }
    
    console.log('start loading...');
    // setLoading이 true일 때만 스켈레톤 나옴
    setLoading(true);

    const response = await fetch(`http://localhost:8282/events/page/${currentPage}?sort=date`);
    const { events: loadedEvents, totalCount } = await response.json();

    console.log('loaded: ', loadedEvents);
    // 기존 것에 추가로 달아줌
    const updatedEvents = [...events, ...loadedEvents];
    setEvents(updatedEvents);
    // 데이터가 들어오면 false 바뀌면서 스켈레톤 사라짐
    setLoading(false);
    // 로딩이 끝나면 페이지번호를 1 늘려놓는다.
    setCurrentPage(prevPage => prevPage + 1);
    console.log('end loading');

    // 로딩이 끝나면 더 이상 가져올게 있는지 여부를 체크
    setIsFinish(totalCount === updatedEvents.length);
  };

  // 초기 이벤트 1페이지 목록 가져오기
  useEffect(() => {
    loadEvents();
  }, []);

  // 스크롤 핸들러
  const scrollHandler = throttle(() => {

    if (loading || 
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
    ) {
      return;
    }
    loadEvents();
  }, 2000);

  // 스크롤 이벤트 바인딩
  // -> 한번만 실행되게 useEffect로 묶어줌 (스크롤 1번만 되게!)
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler.cancel(); // throttle 취소
    }
  }, [currentPage, loading]);

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