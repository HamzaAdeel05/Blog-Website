import React from 'react'

const ArtFood = () => {
    return (
        <div className='w-full'>
            <div className="flex justify-center items-center  gap-5">
                <div className="w-full border h-0 border-border "></div>
                <p className=' text-[12px]'>Art/Food/Top</p>
                <div className="w-full border h-0 border-border"></div>
            </div>
            <div className="flex gap-4 items-center py-5">
                <div className="">
                    <img className='rounded-full' src="https://secure.gravatar.com/avatar/db6f032dce962144efc9b625779461a1?s=200&d=mm&r=g" alt="" />
                </div>
                <div className="">
                    <h3 className='font-semibold text-lg'>John Philipe</h3>
                    <p className='text-sm'>Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArtFood