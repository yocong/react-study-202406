import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import EventList from '../components/EventList';
import EventsNavigation from '../layout/EventNavigation';


const Events = () => {

  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();

  console.log('event page rendering!');
  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList}/>
    </>
  )
}

export default Events

// loader를 app.js로부터 아웃소싱
export const loader = async () => {

  const response = await fetch('http://localhost:8282/events?sort=date');

  if (!response.ok) {
    const errorText = await response.text(); // 서버가 내려준 에러내용
    throw new Response(
      JSON.stringify({ message: errorText }),
      {
        status: response.status
      }
    ); // error message
  }
  console.log('loader call!');
  return response; // ok일 경우 events[]
};