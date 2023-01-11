import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ilData } from "../../../helpers/ilData";
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import InciDıs from '../../../assets/InciDis.png';

const polyclinic = [
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicCity: "",
        polyclinicTown: "",
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
    {
        polyclinicName: 'İnci Diş Polikliniği',
        polyclinicPhoto: InciDıs,
        polyclinicDocotrs: [
            {
                doctorTitr: "",
                doctorFirstName: "",
                doctorLastName: "",
                workingDays: [
                    {
                        pazartesi: {
                            hours: [
                                { '09:00': false }, { '09:15': false }, { "09:30": false }, { "09:45": false }, { "10:00": false }, { "10:15": false }, { "10:30": false }, { "10:45": false }, { "11:00": false }, { "11:15": false }, { "11:30": false }, { "11:45": false }, { "12:00": false }, { "12:15": false }, { "12:30": false },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        sali: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        carsamba: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        persembe: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cuma: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": true }, { "18:15": true }, { "18:30": true }, { "18:45": true }, { "19:00": true }, { "19:15": true }, { "19:30": true }, { "19:45": true }, { "20:00": true }
                            ]
                        }
                    },
                    {
                        cumartesi: {
                            hours: [
                                { '09:00': true }, { '09:15': true }, { "09:30": true }, { "09:45": true }, { "10:00": true }, { "10:15": true }, { "10:30": true }, { "10:45": true }, { "11:00": true }, { "11:15": true }, { "11:30": true }, { "11:45": true }, { "12:00": true }, { "12:15": true }, { "12:30": true },
                                { "13:30": true }, { "13:45": true }, { "14:00": true }, { "14:15": true }, { "14:30": true }, { "14:45": true }, { "15:00": true }, { "15:15": true }, { "15:30": true }, { "15:45": true }, { "16:00": true }, { "16:15": true }, { "16:30": true }, { "16:45": true }, { "17:00": true },
                                { "18:00": false }, { "18:15": false }, { "18:30": false }, { "18:45": false }, { "19:00": false }, { "19:15": false }, { "19:30": false }, { "19:45": false }, { "20:00": false }
                            ]
                        }
                    },
                ]
            }
        ]
    },
]

// useEffect(() => {
// polyclinicQuery()
// doctorsQuery()
// dostorsDates()
// doctorsHours()
// }, [])

const PolyclinicForRecord = ({ place, setPlace }) => {
    const [openTab, setOpenTab] = useState(0);
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();

    useEffect(() => {
        if (swiper) {
            // console.log("Swiper instance:", swiper);
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);
    const handleChange = (e) => {
        setPlace({ ...place, [e.target.name]: e.target.value })
    };

    return (
        <section className=''>
            <article className='flex justify-between px-16 w-11/12 mx-auto'>
                <h1>Poliklinik</h1>
                <article className='flex gap-3'>
                    <select
                        name="city"
                        id="city"
                        className=" select select-sm w-52 transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                        value={place.city}
                        onChange={handleChange}
                    >
                        <option value="">İl Seçiniz</option>
                        {ilData.map((il, i) => <option value={il["text"]} key={i}>{il["text"]}</option>)}
                    </select>
                    <select
                        name="town"
                        id="town"
                        className="select select-sm w-52 transition-all duration-1000 shadow-sm text-base outline-none focus:border-blue1"
                        value={place.town}
                        onChange={handleChange}
                    >
                        <option value="">İlçe Seçiniz</option>
                        {ilData.filter((data) => (data["text"] === place.city)).map((ilce) => (ilce["districts"].map((e, i) => <option value={e["text"]} key={i}>{e["text"]}</option>)))
                        }
                    </select>
                    <button className="bg-white w-8 flex items-center justify-center rounded-full" ref={prevRef}><HiOutlineArrowLeft /></button>
                    <button className="bg-white w-8 flex items-center justify-center rounded-full" ref={nextRef}><HiOutlineArrowRight /></button>
                </article>
            </article>
            <div className="p-1 my-10 w-[87%] mx-auto">
                <Swiper
                    className=""
                    spaceBetween={25}
                    // slidesPerView="auto"
                    slidesPerView={4}
                    // onSlideChange={() => console.log("slide change")}
                    onSwiper={setSwiper}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
                    navigation={{
                        prevEl: prevRef?.current,
                        nextEl: nextRef?.current,
                    }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                // updateOnWindowResize
                // observer
                // observeParents
                >
                    {
                        polyclinic.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={` ${openTab === index
                                    ? "border-2 rounded-2xl border-blue1 py-2"
                                    : "bg-transparent"
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(index);
                                }}
                            >
                                <div className="card card-compact bg-base-100 mx-3" >
                                    <figure><img src={item.polyclinicPhoto} alt="InciDıs" /></figure>
                                    <div className='border-b opacity-80 w-[96%] my-1 mx-auto'></div>
                                    <div className="card-body">
                                        <h2 className="card-title text-blue1 font-normal">{item.polyclinicName}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default PolyclinicForRecord
