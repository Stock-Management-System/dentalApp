import React from 'react';
import ImageModal from './ImageModal';
import Modal from './Modal';
import ModalExamineRontgen from './ModalExamineRontgen';
// rontgen: [
//     "https://www.omerbayar.com.tr/wp-content/uploads/2020/01/oral-diagnoz-ve-radyoloji.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOx1hmyt1BElr60XudF5Bes9O4ymDQ9Rr2_g&usqp=CAU",
//     "https://www.dent-art.com.tr/wp-content/uploads/2021/07/xray-x-ray-2764828_1280-900x588.jpg",
//     "https://trakyadent.com.tr/wp-content/uploads/2022/02/dis-rontgeni-nasil-cekilir.jpg"
// "https://www.omok.com.tr/userfiles/images/stories/04ilkrandevu/okluzal_rontgen.jpg",
// "https://www.detaygoruntulememerkezi.com/wp-content/uploads/2018/09/adana_okluzal_film.jpg",
// "https://www.dent-art.com.tr/wp-content/uploads/2021/07/xray-x-ray-2764828_1280-900x588.jpg",
// "https://trakyadent.com.tr/wp-content/uploads/2022/02/dis-rontgeni-nasil-cekilir.jpg"
// ]
const patientInfos = {
    TCKimlikNo: "44558899330",
    firstName: "Canan",
    lastName: "Güzelce",
    gender: "Kadın",
    rontgenInfo: [
        {
            firstName: "Canan",
            lastName: "Güzelce",
            gender: "Kadın",
            referring_doctor: [
                {
                    doctorFirstName: "Egemen",
                    doctorLastName: "Yılmaz",
                    doctorAvatar: "https://placeimg.com/50/50/people"
                }
            ],
            rontgenType: "Perioponal Röntgen",
            createdDate: "29.11.2022",
            desc: "Alt-7 kök eğilmesi başlamış",
            rontgen: "https://www.omerbayar.com.tr/wp-content/uploads/2020/01/oral-diagnoz-ve-radyoloji.png",
        },
        {
            firstName: "Canan",
            lastName: "Güzelce",
            gender: "Kadın",
            referring_doctor: [
                {
                    doctorFirstName: "Egemen",
                    doctorLastName: "Yılmaz",
                    doctorAvatar: "https://placeimg.com/50/50/people"
                }
            ],
            rontgenType: "Panoramik Röntgen",
            createdDate: "24.11.2022",
            desc: "Alt-7 kök eğilmesi başlamış",
            rontgen: "https://www.yenibosnadis.com/wp-content/uploads/2016/04/oral-diagnoz-ve-radyoloji-icerik-gorsel-1-yenibosna-dis.jpg",

        },
        {
            firstName: "Canan",
            lastName: "Güzelce",
            gender: "Kadın",
            referring_doctor: [
                {
                    doctorFirstName: "Egemen",
                    doctorLastName: "Yılmaz",
                    doctorAvatar: "https://placeimg.com/50/50/people"
                }
            ],
            rontgenType: "Perioponal Röntgen",
            createdDate: "11.11.2022",
            desc: "Alt-7 kök eğilmesi başlamış",
            rontgen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOx1hmyt1BElr60XudF5Bes9O4ymDQ9Rr2_g&usqp=CAU",
        },
        {
            firstName: "Canan",
            lastName: "Güzelce",
            gender: "Kadın",
            referring_doctor: [
                {
                    doctorFirstName: "Egemen",
                    doctorLastName: "Yılmaz",
                    doctorAvatar: "https://placeimg.com/50/50/people"
                }
            ],
            rontgenType: "Okluzal Röntgen",
            createdDate: "21.11.2022",
            desc: "Alt-7 kök eğilmesi başlamış",
            rontgen: "https://www.omok.com.tr/userfiles/images/stories/04ilkrandevu/okluzal_rontgen.jpg",
        },
    ]

}

const RontgenQuery = () => {
    return (
        <div>
            <div className="flex basis-4/6 justify-between items-center px-5 py-2">
                <p className="text-2xl font-semibold antialiased leading-loose">
                    Röntgen Sorgulama
                </p>
                <Modal />
            </div>
            <div className="grid grid-cols-1 place-items-center my-9">
                {/* TC numarası ile sorgulama 👇🏻 */}
                <div className="flex justify-between items-center w-[40rem]">
                    <label className="label-text text-center">HASTA TC KİMLİK NO</label>
                    <input
                        type="text"
                        placeholder="Hasta TC Kimlik No"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <button className="btn btn-sm btn-outline btn-primary rounded-full capitalize">
                        Sorgula
                    </button>
                </div>
            </div>

            <h4 className='ml-20 p-2'><span className='text-blue1 font-semibold'>{patientInfos.firstName} {patientInfos.lastName}</span> isimli hastanın töntgenleri listelendi.</h4>

            <div className="overflow-x-auto mx-4 px-4">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SEVKEDEN HEKİM</th>
                            <th>HASTA</th>
                            <th>CİNSİYET</th>
                            <th>RÖNTGEN TARİHİ</th>
                            <th>RÖNTGENLER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            patientInfos.rontgenInfo?.map((item, index, arr) => (
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center space-x-3 gap-3">
                                            <div className="avatar">
                                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                                    <img
                                                        src={item.referring_doctor[0].doctorAvatar}
                                                        alt="Doktor Avatar"
                                                    />
                                                </div>
                                            </div>
                                            <div className="font-bold">{item.referring_doctor[0].doctorFirstName} {item.referring_doctor[0].doctorLastName}</div>
                                        </div>
                                    </td>
                                    <td>{item.firstName} {item.lastName}</td>
                                    <td>{item.gender} </td>
                                    <td>{item.createdDate}</td>
                                    <td><ModalExamineRontgen rontgenInfo={arr} oneRontgen={item} /></td>
                                    {/* <td>{item.rontgen.map((i, key, arr) => (
                                        <ImageModal key={key} />
                                    ))}
                                    </td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RontgenQuery
