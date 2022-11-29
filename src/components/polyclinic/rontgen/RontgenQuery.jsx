import React from 'react';
import ImageModal from './ImageModal';
import Modal from './Modal';
import ModalExamineRontgen from './ModalExamineRontgen';

const patientInfos = {
    TCKimlikNo: "44558899330",
    firstName: "Canan",
    lastName: "Güzelce",
    gender: "Kadın",
    rontgenInfo: [
        {
            type: "Perioponal Röntgen",
            date: "29.11.2022",
            desc: "Alt-7 kök eğilmesi başlamış",
            rontgen: [
                "https://www.omerbayar.com.tr/wp-content/uploads/2020/01/oral-diagnoz-ve-radyoloji.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOx1hmyt1BElr60XudF5Bes9O4ymDQ9Rr2_g&usqp=CAU",
                "https://www.dent-art.com.tr/wp-content/uploads/2021/07/xray-x-ray-2764828_1280-900x588.jpg",
                "https://trakyadent.com.tr/wp-content/uploads/2022/02/dis-rontgeni-nasil-cekilir.jpg"
            ]
        },
        {
            type: "Panoramik Röntgen",
            date: "24.11.2022",
            desc: "Alt-7 kök eğilmesi başlamış",
            rontgen: [
                "https://www.yenibosnadis.com/wp-content/uploads/2016/04/oral-diagnoz-ve-radyoloji-icerik-gorsel-1-yenibosna-dis.jpg",
                "https://www.sengelclinics.com/tr/wp-content/uploads/2022/04/picture63.png",
            ]
        },
        {
            type: "Perioponal Röntgen",
            date: "11.11.2022",
            desc: "Alt-7 kök eğilmesi başlamış",
            rontgen: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOx1hmyt1BElr60XudF5Bes9O4ymDQ9Rr2_g&usqp=CAU",
                "https://www.dent-art.com.tr/wp-content/uploads/2021/07/xray-x-ray-2764828_1280-900x588.jpg",
                "https://trakyadent.com.tr/wp-content/uploads/2022/02/dis-rontgeni-nasil-cekilir.jpg"
            ]
        },
        {
            type: "Okluzal Röntgen",
            date: "21.11.2022",
            desc: "Alt-7 kök eğilmesi başlamış",
            rontgen: [
                "https://www.omok.com.tr/userfiles/images/stories/04ilkrandevu/okluzal_rontgen.jpg",
                "https://www.detaygoruntulememerkezi.com/wp-content/uploads/2018/09/adana_okluzal_film.jpg"
            ]
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
                            <th className="text-xl">RÖNTGEN TANIMI</th>
                            <th>RÖNTGEN TARİHİ</th>
                            <th>NOTLAR</th>
                            <th>RÖNTGENLER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            patientInfos.rontgenInfo?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.type}</td>
                                    <td>{item.date} </td>
                                    <td>{item.desc} </td>
                                    <td>{item.rontgen.map((i, key, arr) => (
                                        <ImageModal key={key} Images={arr} Image={i} />
                                    ))}
                                    </td>
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
