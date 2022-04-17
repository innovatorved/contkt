import Head from 'next/head';
import SendMessage from '../components/SendMessage';

import {useState , useEffect } from "react";
import io from "socket.io-client";
let socket;

import { nanoid } from "nanoid";

const userName = nanoid(4);

let prevMsg = {};
function Home() {

  const [msg , setMsg] = useState('');
  const [messages , setMessages] = useState([]);

  const socketInitializer = async () => {
    await fetch('/api/server');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('chat', msg => {
      if( JSON.stringify(prevMsg) !== JSON.stringify(msg)){
        // problem
        setMessages([...messages , msg]);
        // console.log(messages);
      }
      prevMsg = msg;
      
    })
  }

  useEffect(() => {
    socketInitializer();
  }, [1]);

  const SendChat = (data) => {
    socket.emit('chat', {
      data , userName
    })
  }



  
  return (
    
    <div>
      <Head>
        <title>Contkt</title>
        <meta name="description" content="Contkt App : Online Messaging Application" />
        <link rel="icon" href="/logonew.png" />
      </Head>

        <img
          className="h-auto mx-auto mt-24"
          src="/contkt-logo-extra-low-quality.png"
          alt='Contkt Logo'
          width={200}
          height={200}
        />

      <main>
        <SendMessage SendChat={SendChat} msg={msg} setMsg={setMsg}/>
      </main>
    </div>
  )
}

export default Home;