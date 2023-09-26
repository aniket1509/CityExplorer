"use client"
import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import PlaceList from '@/components/PlaceList'

export default function Home() {

  const [placeList, setPlaceList] = useState([])

  useEffect(() => {
    getPlaceList('Hotels in Pune')
  }, []);

  const getPlaceList = async (value) => {
    setPlaceList([])
    const result = await fetch("/api/google-place-api?q="+value)
    const data = await result.json();
    setPlaceList(data.resp.results)
  }

  return (
    <div>
      <Hero userInput={(value)=>getPlaceList(value)}/>

      {placeList? <PlaceList placeList={placeList}/>: null}
    </div>
  )
}
