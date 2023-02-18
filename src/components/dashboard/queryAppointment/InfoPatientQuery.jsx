import React from 'react'

const InfoPatientQuery = ({patientInfo}) => {
  return (
    <section className="w-10/12 mx-auto">
                <h1 className="text-22 my-8 mx-auto">Hasta Bilgileri</h1>
                <article className="grid xs:grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="w-9/12 mx-auto">
                    <p className="label-text ml-4 mb-1">Ad</p>
                    <p className="input xs:input-sm md:input-md input-accent flex items-center">
                      {patientInfo.firstName}
                    </p>
                  </div>
                  <div className="w-9/12 mx-auto">
                    <p className="label-text ml-4 mb-1">Soyad</p>
                    <p className="input xs:input-sm md:input-md input-accent flex items-center">
                      {patientInfo.lastName}
                    </p>
                  </div>
                  <div className="w-9/12 mx-auto">
                    <p className="label-text ml-4 mb-1">Telefon</p>
                    <p className="input xs:input-sm md:input-md input-accent flex items-center">
                      {patientInfo.phone}
                    </p>
                  </div>
                </article>
              </section>
  )
}

export default InfoPatientQuery
