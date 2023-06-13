import React from 'react'

function Overview({ description }) {




    return (
        <>
            <div class="flex items-center flex-col mt-2 justify-between mr-auto ml-auto w-[80vw]">
                <div >
                    <h3 class="text-primary font-semibold text-base ">Who we are</h3>
                </div>
                <div className='mt-4' role="button" tabindex="0">
                    <div aria-label="more about company" class="text-primary text-sm">
                        <p class="leading-6">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview