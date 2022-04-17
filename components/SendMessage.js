import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SendMessage(props) {
    const {SendChat , msg , setMsg} = props;
    const [username, setusername] = useState(null);
    useEffect(() => {
        Promise.all([
            localStorage.getItem('username'),
        ]).then(([name]) => {
            if (name === null) {
                const uname = window.prompt("Enter the name");
                localStorage.setItem('username', uname);
                setusername(uname);
            } else {
                setusername(name);
            }

        })
    }, [username]);

    const changeMsg = (e) => {
        setMsg(e.target.value);
    }

    const messageSubmitted = (e) => {
        e.preventDefault();
        const value = e.target.elements.message.value;
        if (value.replace(/\s/g,"") == "") {
            alert("Please enter a message");
            setMsg("");
            return ;
        }
        const data = {
            username,
            message: value,
            timeString: new Date().toLocaleTimeString()
        }
        setMsg('');
        SendChat(data);
    }

    return (
        <div className='grid place-items-center'>
            <form className='mt-10' onSubmit={messageSubmitted}>
                <div className='flex justify-between mx-2 mb-5'>
                    <div>
                        Hi , <span className='font-medium '>{username}</span>
                    </div>
                    <div className='text-xs ml-2 cursor-pointer text-orange-500 font-medium hover:text-orange-600' onClick={() => {
                        localStorage.removeItem('username');
                        setusername(null);
                    }}>
                        Change Username
                    </div>
                </div>
                <div>
                    <label htmlFor="message">
                        <input type="text" name="message" className='inline outline-none border-[1px] md:w-96 sm:w-[22rem] w-[21rem] h-10 rounded-md p-2 border-gray-400 focus:border-gray-600' value={msg} onChange={changeMsg} autoComplete="off"/>
                    </label>
                </div>
                <button type="submit" className='mt-2'>
                    <Image src="/filled-sent.png" width={30} height={30} />
                </button>
            </form>
        </div>
    )
}
