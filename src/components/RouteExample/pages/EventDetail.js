import React from 'react';
import { useLoaderData, useRouteLoaderData, redirect } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetail = () => {

  // 사용범위 : 본인, 하위 컴포넌트 (children은 하위 아님!)
  // const ev = useLoaderData(); // 자신의 loader를 불러옴

  // 서버에서 가져온 데이터
  const ev = useRouteLoaderData('event-detail'); // 부모의 loader를 불러오는 훅

  return <EventItem event={ev} />;
};

export default EventDetail;

// use로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용가능
// loader에서는 파라미터.params로 가져올 수 있음!
export const loader = async ({ params }) => {
  console.log(params);
  const { eventId:id } = params;

  // const { eventId: id } = useParams();
  // const [ev, setEv] = useState({});

  const response = await fetch(`http://localhost:8282/events/${id}`);
  return await response.json();
  // console.log('json: ', json);
};

export const action = async ({ params }) => {

  if (!window.confirm('정말 삭제하시겠습니까?')) return;

  const response = await fetch(`http://localhost:8282/events/${params.eventId}`, {
    method: 'DELETE',
  });

  if (!response.ok) { 
    //...
  }

  return redirect('/events');
};
