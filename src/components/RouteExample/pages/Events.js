import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EventList from '../components/EventList';
import EventsNavigation from '../layout/EventNavigation';


const Events = () => {

  const [eventList, setEventList] = useState([]);

  // useEffect(() => {}, []);에서 () 비워놓으면 단 한번만 실행
  
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8282/events');
      const jsonData = await response.json();
      setEventList(jsonData);
    })();

  }, []);

  // jsonData를 담은 eventList 전달
  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList}/>
    </>
  )
}

export default Events