import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import QRCode from 'qrcode.react';
// import QRCode from 'qrcode-react';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    const router = useRouter()
    const { name, year, date, code } = router.query;
    return (
        <>
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
                                <img src='/img/logo.png' className="img-fluid d-block mx-auto logo" />

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
                                        <div className="qr-code-container d-block mx-auto">
                                            <QRCode
                                                value={code}
                                                size={200}
                                                className="d-block mx-auto"
                                                imageSettings={{
                                                    src: '/img/logo_center.png',
                                                    excavate: true,
                                                    height: 27,
                                                    width: 27
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="col-12 qr-code" style={{ backgroundColor: 'red' }}>

                                        <QRCode
                                            value={code}
                                            className="d-block mx-auto"
                                        />
                                        <img src='/img/qr-code.png' className="d-block mx-auto" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        </>
    );
}

export default Home;