import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetail = () => {
  // App.js에 :eventId 를 useParams로 읽어옴
  const { eventId: id } = useParams();
  const [ev, setEv] = useState({});

  useEffect(() => {

    // 즉시 실행 함수
    (async () => {
      const response = await fetch(`http://localhost:8282/events/${id}`);
      const json = await response.json();
      console.log('json: ', json);
      setEv(json);
    })();

  }, []);

  return <EventItem event={ev} />;
};

export default EventDetail;
