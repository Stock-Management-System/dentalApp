import React, { useState } from 'react'

const DoctorTreatments = ({ doctorTreatment }) => {
  const [openTreatment, setOpenTreatment] = useState(1)
  // console.log(doctorTreatment)

  return (
    <div>
      <div className="flex flex-row justify-between py-5">
        <h1 className="text-xl font-semibold mb-3">Uyguladığı Tedaviler</h1>
        <div className="flex flex-row gap-2 ">
          {doctorTreatment.map((tedavi, index) => {
            return (
              <button
                className={` ${
                  openTreatment === index + 1
                    ? 'btn btn-sm btn-primary rounded-full capitalize'
                    : 'btn btn-sm btn-outline btn-primary rounded-full capitalize'
                }`}
                onClick={e => {
                  e.preventDefault()
                  setOpenTreatment(index + 1)
                }}
              >
                {tedavi.müdahaleKategori}
              </button>
            )
          })}
          {/* <button
            className={` ${
              openTreatment === 2
                ? 'btn btn-sm btn-primary rounded-full capitalize'
                : 'btn btn-sm btn-outline btn-primary rounded-full capitalize'
            }`}
            onClick={e => {
              e.preventDefault()
              setOpenTreatment(2)
            }}
          >
            Tedavi
          </button>
          <button
            className={` ${
              openTreatment === 3
                ? 'btn btn-sm btn-primary rounded-full capitalize'
                : 'btn btn-sm btn-outline btn-primary rounded-full capitalize'
            }`}
            onClick={e => {
              e.preventDefault()
              setOpenTreatment(3)
            }}
          >
            Ortodonti
          </button>
          <button
            className={` ${
              openTreatment === 4
                ? 'btn btn-sm btn-primary rounded-full capitalize'
                : 'btn btn-sm btn-outline btn-primary rounded-full capitalize'
            }`}
            onClick={e => {
              e.preventDefault()
              setOpenTreatment(4)
            }}
          >
            Radyoloji
          </button>
          <button
            className={` ${
              openTreatment === 5
                ? 'btn btn-sm btn-primary rounded-full capitalize'
                : 'btn btn-sm btn-outline btn-primary rounded-full capitalize'
            }`}
            onClick={e => {
              e.preventDefault()
              setOpenTreatment(5)
            }}
          >
            Fenoloji
          </button>
          <button
            className={` ${
              openTreatment === 6
                ? 'btn btn-sm btn-primary rounded-full capitalize'
                : 'btn btn-sm btn-outline btn-primary rounded-full capitalize'
            }`}
            onClick={e => {
              e.preventDefault()
              setOpenTreatment(6)
            }}
          >
            Ağız Bakım
          </button>
          <button
            className={` ${
              openTreatment === 7
                ? 'btn btn-sm btn-primary rounded-full capitalize'
                : 'btn btn-sm btn-outline btn-primary rounded-full capitalize'
            }`}
            onClick={e => {
              e.preventDefault()
              setOpenTreatment(7)
            }}
          >
            Cleoronti
          </button>
          <button
            className={` ${
              openTreatment === 8
                ? 'btn btn-sm btn-primary rounded-full capitalize'
                : 'btn btn-sm btn-outline btn-primary rounded-full capitalize'
            }`}
            onClick={e => {
              e.preventDefault()
              setOpenTreatment(8)
            }}
          >
            Ceromonti
          </button> */}
        </div>
      </div>
      {doctorTreatment.map((tedavi, index, hepsi) => {
        // console.log(tedavi, hepsi)
        return (
          <div
            className={
              openTreatment === index + 1
                ? 'grid grid-cols-8 gap-4 place-content-center py-8'
                : 'hidden'
            }
          >
            {tedavi.müdahaleIstatistik.map((müdahale, i) => {
              // console.log(hepsi)
              return (
                <div className="grid place-content-center bg-container p-8 ">
                  <div>
                    <h6 className="text-xl font-semibold">
                      {müdahale.müdahaleAdı}
                    </h6>
                    <p className="text-[10px] opacity-70 uppercase">
                      {hepsi[index].müdahaleKategori}
                    </p>
                  </div>
                  <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                    {müdahale.müdahaleSayı}
                  </h1>
                </div>
              )
            })}
            {/* <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Telleme</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                215
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Sıkma</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                751
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Gevşetme</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                102
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Uydurma</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                234
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Uyarlama</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                145
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Sallama</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                210
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Kasnak Atma</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                145
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Entegre</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                103
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Ondoitasyon</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                137
              </h1>
            </div>
            <div className="grid place-content-center bg-container p-8 ">
              <div>
                <h6 className="text-xl font-semibold">Pufrize</h6>
                <p className="text-[10px] opacity-70 uppercase">Ortodonti</p>
              </div>
              <h1 className="text-3xl font-bold text-blue2 text-center pt-6">
                191
              </h1>
            </div> */}
          </div>
        )
      })}

      {/* <div
        className={
          openTreatment === 2
            ? 'grid grid-cols-8 gap-4 place-content-center py-8'
            : 'hidden'
        }
      >
        <p>Tedavi Bilgileri</p>
      </div>
      <div
        className={
          openTreatment === 3
            ? 'grid grid-cols-8 gap-4 place-content-center py-8'
            : 'hidden'
        }
      >
        <p>Ortodonti Bilgileri</p>
      </div>
      <div
        className={
          openTreatment === 4
            ? 'grid grid-cols-8 gap-4 place-content-center py-8'
            : 'hidden'
        }
      >
        <p>Radyoloji Bilgileri</p>
      </div>
      <div
        className={
          openTreatment === 5
            ? 'grid grid-cols-8 gap-4 place-content-center py-8'
            : 'hidden'
        }
      >
        <p>Fenoloji Bilgileri</p>
      </div>
      <div
        className={
          openTreatment === 6
            ? 'grid grid-cols-8 gap-4 place-content-center py-8'
            : 'hidden'
        }
      >
        <p>Ağız Bakım Bilgileri</p>
      </div>
      <div
        className={
          openTreatment === 7
            ? 'grid grid-cols-8 gap-4 place-content-center py-8'
            : 'hidden'
        }
      >
        <p>Cleoronti Bilgileri</p>
      </div>
      <div
        className={
          openTreatment === 8
            ? 'grid grid-cols-8 gap-4 place-content-center py-8'
            : 'hidden'
        }
      >
        <p>Ceromonti Bilgileri</p>
      </div> */}
    </div>
  )
}

export default DoctorTreatments
