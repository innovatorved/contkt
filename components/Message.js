import React, { useState, useEffect } from 'react';

export default function Message() {
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

    const messageSubmitted = (e) => {
        e.preventDefault();
        const data = {
            username,
            message: e.target.elements.message.value,
            timeString: new Date().toLocaleTimeString()
        }
        e.target.elements.message.value = '';
        console.log(data);

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
                        <input type="text" name="message" className='inline outline-none border-[1px] w-96 h-10 rounded-md p-2 border-gray-400 focus:border-gray-600' />
                    </label>
                </div>
                <button type="submit" className='mt-2'>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-sent.png" />
                </button>
            </form>
        </div>
    )
}