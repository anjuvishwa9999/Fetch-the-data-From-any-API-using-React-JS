import React, { useEffect } from 'react'

function Main() {

    let API=`https://api.openweathermap.org/data/2.5/forecast?q=city name &appid=your api`;
    const fetchApiData= async(url)=>{
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);

        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchApiData(API);
    },[]);

  return (
    <div>Main</div>
  )
}

export default Main

