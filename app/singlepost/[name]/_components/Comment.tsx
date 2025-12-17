import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Comment = () => {
    return (
        <div>
            <h2 className='font-medium underline text-[14px] text-center'>Comment</h2>
            <div className="flex gap-4  py-5">
                <div className="w-20">
                    <img className='rounded-full' src="https://secure.gravatar.com/avatar/db6f032dce962144efc9b625779461a1?s=200&d=mm&r=g" alt="" />
                </div>
                <div className="space-y-2 ">
                    <h3 className='font-semibold text-[10px] '>Admin <span className='text-gray-400'>July 27, 2015 at 5:45 am </span>Reply</h3>
                    <p className='text-sm'>Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue.
                    </p>
                </div>
            </div>
            <div className="text-center py-5">
                <div className="w-full border h-0 border-border mb-8"></div>
                <h2 className='text-sm'>Your email address will not be published. Required fields are marked *</h2>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <h2 className='text-[12px] font-medium'>COMMENT*</h2>
                    <Textarea />
                </div>
                <div className="grid grid-cols-3 gap-4 ">
                    <div className="space-y-2">
                        <h2 className='text-[12px] font-medium'>NAME*</h2>
                        <Input placeholder='Name*' />
                    </div>
                    <div className="space-y-2">
                        <h2 className='text-[12px] font-medium'>EMAIL*</h2>
                        <Input placeholder='EMAIL*' />
                    </div>
                    <div className="space-y-2">
                        <h2 className='text-[12px] font-medium'>WEBSITE*</h2>
                        <Input placeholder='WEBSITE*' />
                    </div>
                </div>
                <div className="flex w-full gap-4 my-2">
                    <Checkbox />
                    <h2 className='text-sm font-medium whitespace-nowrap'>Save my name, email, and website in this browser for the next time I comment.</h2>
                </div>
                <div className="">

                    <button className='text-[12px] mt-5 text-white bg-gray-500 px-3 py-1'>POST COMMENT</button>
                </div>
            </div>

        </div>
    )
}

export default Comment