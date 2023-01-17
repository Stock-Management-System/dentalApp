import * as Yup from 'yup';

export const tcNoScheme = Yup.object().shape({
    queryTC: Yup.string()
        .min(11, 'TC Kimlik Numarası 11 haneli bir sayıdır.')
        .max(11, 'TC Kimlik Numarası 11 haneli bir sayıdır.')
        .required("Bu Alan Doldurulmalıdır")
        .matches(/\d+/, 'TC Kimlik Numarası Sadece Rakamlardan Oluşmalıdır')
    // .matches(/[0-9]+/, 'TC Kimlik Numarası Sadece Rakamlardan Oluşmalıdır')
})