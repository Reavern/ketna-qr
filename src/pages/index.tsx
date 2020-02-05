import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import QRCode from 'qrcode.react';

import useResizeObserver from "use-resize-observer";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    const router = useRouter()
    const { name, year, date, code } = router.query;

    const { ref, width = 1, height = 1 } = useResizeObserver();

    return (
        <div ref={ref}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Ketna | QR Code</title>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

                <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:600,800&display=swap" rel="stylesheet" />

                <link rel="shortcut icon" href="public/img/logo.png" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            </Head>
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 qr-box">
                            <div className="qr-box__content">
                                <img src='/img/logo.png' className="img-fluid d-block mx-auto logo" style={{ width: width / 3 }} />

                                <div className="row mt-3 mt-md-4">
                                    <div className="col-6">
                                        <h3>Nama Undangan</h3>
                                        <p>{name}</p>

                                        <h3>Angkatan</h3>
                                        <p>{year}</p>
                                    </div>

                                    <div className="col-6">
                                        <h3>Hari / Tanggal</h3>
                                        <p>{date}</p>

                                        <h3>Jumlah Tiket</h3>
                                        <p>1 (Satu)</p>
                                    </div>

                                    <div className="col-12 qr-code">
                                        <div className="qr-code-container d-block mx-auto" style={{ width: (width / 5) +20 }}>
                                            <QRCode
                                                value={code ? code : ''}
                                                size={width / 5}
                                                className="d-block mx-auto"
                                                imageSettings={{
                                                    src: '/img/logo_center.png',
                                                    excavate: false,
                                                    height: width / 25,
                                                    width: width / 25
                                                }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        </div>
    );
}

export default Home;