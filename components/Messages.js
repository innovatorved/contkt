import React from 'react'

export default function Messages(props) {
    const { messages , userName , isMobile} = props;

  return (
    <div className={isMobile?`max-w-[380px] m-auto mt-10`:`max-w-[400px] m-auto mt-10`}>
        <div className='mt-[15px] mb-[10px] '>
        {
            isMobile ? (
                messages.map((msg , key) => {
                
                    return (
                        msg.userName === userName ?
                        (
                            <div className='text-right rounded-lg mt-[10px] mb-[5px] p-[10px] pt-2 bg-[#EFEFEF]' key={key}>
                                <p className='text-left text-[50%] text-[#F97316] font-medium'>{msg.data.username + "   #"+msg.userName}</p>
                                <p>{msg.data.message}</p>
                                <p className='text-[50%] mt-1 text-zinc-700 font-semibold'>{ msg.data.timeString}</p>
                            </div>
                        ):(
                            <div className='text-left rounded-lg mt-[10px] mb-[10px] p-[10px] pt-2 bg-[#EFEFEF]' key={key}>
                                <p className='text-right text-[50%] text-[#F97316] font-medium'>{msg.data.username + "   #"+msg.userName}</p>
                                <p>{msg.data.message}</p>
                                <p className='text-[50%] mt-1 text-zinc-700 font-semibold'>{msg.data.timeString}</p>
                            </div>
                        )
                    )
                })
            ) : (
                messages.map(item => item).reverse().map((msg , key) => {
                
                    return (
                        msg.userName === userName ?
                        (
                            <div className='text-right rounded-lg mt-[10px] mb-[5px] p-[10px] pt-2 bg-[#EFEFEF]' key={key}>
                                <p className='text-left text-[50%] text-[#F97316] font-medium'>{msg.data.username + "   #"+msg.userName}</p>
                                <p>{msg.data.message}</p>
                                <p className='text-[50%] mt-1 text-zinc-700 font-semibold'>{ msg.data.timeString}</p>
                            </div>
                        ):(
                            <div className='text-left rounded-lg mt-[10px] mb-[10px] p-[10px] pt-2 bg-[#EFEFEF]' key={key}>
                                <p className='text-right text-[50%] text-[#F97316] font-medium'>{msg.data.username + "   #"+msg.userName}</p>
                                <p>{msg.data.message}</p>
                                <p className='text-[50%] mt-1 text-zinc-700 font-semibold'>{msg.data.timeString}</p>
                            </div>
                        )
                    )
                })
            )
        }
        </div>
    </div>
  )
}
