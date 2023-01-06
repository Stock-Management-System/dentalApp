import React from 'react'

const DoctorsForRecord = () => {
    const oylesine = [1, 2, 3, 4]
    return (
        <div className="carousel gap-4 p-5">
            {
                oylesine.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <div className="card card-compact w-96 bg-base-100 p-1">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className='border-b opacity-80 w-[96%] my-1 mx-auto'></div>
                            <div className="card-body">
                                <h2 className="card-title text-blue1 font-normal">İNCİ DİŞ POLİKLİNİĞİ</h2>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DoctorsForRecord