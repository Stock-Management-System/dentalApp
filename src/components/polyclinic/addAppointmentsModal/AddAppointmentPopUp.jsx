import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle } from '../../../features/modalSlice';

const AddAppointmentPopUp = () => {
    const toggleM = useSelector(state => state.toggleM.value);
    const dispatch = useDispatch()
    return (
        <>
            {
                toggleM
                    ?
                    < div className='fixed inset-0 bg-linkhover bg-opacity-30 backdrop-blur-sm flex justify-center items-center' >
                        <div className='md:w-[600px] w-[90%] mx-auto flex flex-col'>
                            <div className="flex items-center justify-between bg-blue1 rounded-t py-2">
                                <h3 className="ml-4 text-white font-semibold">
                                    Yeni Randevu Oluştur
                                </h3>
                                <button
                                    className="text-xl mr-5 text-white"
                                    onClick={() => dispatch(modalToggle())}
                                >
                                    <span className="text-3xl text-white">
                                        ×
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div >
                    :
                    null

            }
        </>

    )
}

export default AddAppointmentPopUp
