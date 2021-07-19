import React, { useEffect, useState } from 'react'
import './components/styles.css'
import TextField from '@material-ui/core/TextField';
//@ts-ignore
import "html5-device-mockups/dist/device-mockups.min.css"
import vogzVid from '../../assets/vogzvid.mp4'
import vogzO from '../../assets/vogz-outline.png'
import Down from '../../utils/Icons/Down'
import phone2 from "../../assets/phone2.png"
import selfie11 from "../../assets/selfie11.png"
import CurbArrow from "../../utils/Icons/CurbArrow"
import meufselfie from "../../assets/meufselfi3.png"
import deuxg2 from "../../assets/deuxg2.png"
import crown from "../../assets/crown.png"
import crowArrow from "../../assets/crow-arrow.png"
import iconcontourblanc from "../../assets/iconcontourblanc.png"
import arrowhorizontal from '../../assets/arrow-horizontal.png'
import vogzpeople from '../../assets/vogzpeople.png'
import iconbgwhite from '../../assets/iconbgwhite.png'
import cowboy from '../../assets/cowboy.png'
//@ts-ignore
import ReactPageScroller from 'react-page-scroller';


//@ts-ignore
import { AwesomeButton } from "react-awesome-button";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import VogzContouringW from '../../utils/Icons/VogzContouringW'
import AppStore from '../../utils/Icons/AppStore'
import PlayStore from '../../utils/Icons/PlayStore'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { handleChangeText, handleSubmitForm, scrollDown, scrollUp, useStyles } from '../../utils/helpers/functions';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
//@ts-ignore
import Plx from 'react-plx';


function Home() {


    const [form, setForms] = useState({
        name: "",
        surname: "",
        mail: "",
        phone: "",
        formErrors: {
            name: "",
            surname: "",
            mail: "",
            phone: "",
        }
    })

    const [containerHeight, setFourthContainerHeight] = useState({ fourth: 0 as any, sixth: 0 as any, })
    const [pageNumber, setPageNumber] = useState(0)

    const setErrors = (error: errors) => {
        setForms({ ...form, formErrors: { ...form.formErrors, name: error.name, mail: error.mail, phone: error.phone, surname: error.surname } })
    }

    const classes = useStyles();

    useEffect(() => {
        setFourthContainerHeight({ ...containerHeight, fourth: document?.getElementById('fourth-part-homevogz')?.clientHeight, sixth: document?.getElementById('sixth-part-homevogz')?.clientHeight })
    }, [])


    const parallaxData = [
        {
            start: 0,
            end: 100,
            properties: [
                {
                    startValue: 1.2,
                    endValue: 1,
                    property: 'scale',
                },
            ],
        },
    ];


    return (
        <div>
            <section className="first-part-homevogz first-part-mobile">
                <div className="screen">
                    <video src={vogzVid} autoPlay muted loop />
                </div>
                <div className="downn-button-div">
                    <div className='downn-button'>
                        <Down className="down-icon" />
                    </div>
                </div>
            </section>


            <section className="first-part-homevogz first-part-web">
                <div className="background-image-vogz" style={{ backgroundImage: `url(${vogzO})` }}>
                    {/* <img></img> */}
                </div>

                <div className="device device-iphone-x">

                    <div className="device-wrapper">
                        <Plx
                            parallaxData={parallaxData}
                        >
                            <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                <div className="screen">
                                    <video src={vogzVid} autoPlay muted loop controls />
                                </div>

                            </div>
                        </Plx>
                    </div>

                </div>

                <div className="downn-button-div">
                    <div className='downn-button'>
                        <Down className="down-icon" />
                    </div>
                </div>
            </section>


            <section className="second-part-homevogz">
                <div className="second-part-homevogz-content">
                    <Plx
                        parallaxData={scrollDown}
                        className="desc-second-section Plx--above"
                    >
                        {/* <div className="desc-second-section"> */}
                        <h4 className="top-second-section">Tu es créateur de contenu <br />et tu sais le rendre <br /> <span>captivant</span> et <span>original</span> ?</h4>
                        <p className="bottom-desc">Devient <span className="remark-bold-blue-text">Vogzter</span> et fais partie de nos <br /> <span className="remark-bold-blue-text">30 BETA Testeur</span>, <span className="background-yellow">l’objectif :</span> créer les <br /> <span className="remark-bold-blue-text">VOGZ</span><span className="remark-bold-blue-text">*</span> les plus <span className="background-yellow">engageantes</span> pour toutes <br /> les marques de notre <br /> <span className="background-yellow">communauté !</span> </p>
                        {/* </div> */}
                    </Plx>

                    <Plx
                        parallaxData={scrollUp}
                        className="image-second-section Plx--above"
                    >
                        <img src={phone2} />
                    </Plx>
                </div>
            </section>

            <section className="third-part-homevogz">
                <div className="second-part-homevogz-content" style={{ alignItems: "stretch" }}>
                    <div className="image-second-section">
                        <img src={selfie11} />
                    </div>
                    <div className="desc-second-section" style={{ justifyContent: "space-between" }}>
                        <div>
                            <h4 className="top-second-section">*Une <span className="remark-bold-blue-text">VOGZ</span> ? </h4>
                            <p className="bottom-desc">Une <span className="remark-bold-blue-text">VOGZ</span> est <span className="background-yellow">une vidéo</span> réalisée par un <br /> <span className="remark-bold-blue-text">Vogzter</span>, Elle répond au <span className="background-yellow">brief d’un client,</span> et<br /> se veut créative, authentique, mais surtout,<br /> elle doit être à <span className="background-yellow">l’image de son créateur :</span><br /> <span className="remark-bold-blue-text-big">GRANDIOSE</span> </p>
                        </div>
                        <div className="button-signup">
                            <button type="submit" className="slideform-btn slideform-btn-submit">S’INSCRIRE</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fourth-part-homevogz">
                <div className="fourth-part-homevogz-content">
                    <img src={crown} className="crown-img" />
                    {/* <img src={ } className="crown-img" /> */}
                    <h3>Au royaume du <br /> contenu, les VOGZTERS <br /> sont <span style={{ color: "#FAE422" }}>rois</span> !</h3>

                    <p><span style={{ fontFamily: "Hurme" }}>VOGZ</span> est une nouvelle plateforme innovante <br /> pensée pour les <span className="background-pink">créateurs de contenus</span> et à <br /> destination des <span className="background-pink">marques</span> voulant <br /> communiquer de la façon la plus authentique<br /> possible  auprès de leur <span className="background-pink">communauté</span></p>

                    <h3>Répondez à vos premiers briefs...</h3>

                    <div className="illustration-part-fourth">
                        <img src={deuxg2} className="illustration-boy" />

                        <img src={crowArrow} className="curb-arrow" />
                        <img src={arrowhorizontal} className="curb-arrow-horizontal" />

                        <img src={iconcontourblanc} className="white-contour" />
                        <img src={meufselfie} className="illustration-girl" />
                    </div>

                    <h3>Et générez vos premiers revenus<br /> grâce à vos productions ! </h3>

                    <div className="button-signup">
                        <button type="submit" className="slideform-btn slideform-btn-submit">S’INSCRIRE</button>
                    </div>
                </div>
            </section>

            <section className="fifth-part-homevogz">
                <div className="fifth-part-homevogz-content">
                    <img src={vogzpeople} />
                    <h4 className="top-second-section">*Une <span className="remark-bold-blue-text">VOGZ</span> ? </h4>
                    <p className="bottom-desc">C’est entrer dans une <span className="background-yellow">communauté créative</span><br /> aux contenus <span className="background-yellow">rigoureux</span> et <span className="background-yellow">efficaces.</span></p>
                </div>
            </section>

            <section className="sixth-part-homevogz">
                <div className="sixth-part-homevogz-content">
                    <div className="first-part-homevogz-content">
                        <img src={iconbgwhite} />
                        <h3>Bientôt disponible sur </h3>
                        <div className="playstore-appstore">
                            <PlayStore />
                            <h4>&</h4>
                            <AppStore />
                        </div>
                    </div>


                    <div className="second-part-homevogz-content">
                        <img src={cowboy} />
                        <h3>Avis aux <span style={{ color: "#FFC899" }}>pionniers</span> !</h3>
                        <p>Nous sommes à la recherche de nos<br /> <span className="background-blue">30 premiers vogzters.</span> C'est le<br /> moment pour toi de te lancer, rejoins<br /> dès <span className="background-blue">maintenant</span> l'aventure <span style={{ fontFamily: "Hurme" }}>VOGZ</span> !</p>
                        <form className={`${classes.root} form-homevogz-div`} onSubmit={(e) => handleSubmitForm(e, form, setErrors)} noValidate autoComplete="off">

                            <TextField
                                error={form.formErrors.name != ""}
                                label="Nom"
                                name="name"
                                onChange={(e) => handleChangeText(e as any, form, setForms)}
                                id="name"
                                value={form.name}
                                helperText={form.formErrors.name}
                                variant="filled"
                                fullWidth
                                size="small"
                            />

                            <TextField
                                error={form.formErrors.surname != ""}
                                name="surname"
                                label="Prénom"
                                value={form.surname}
                                helperText={form.formErrors.surname}
                                id="Surname"
                                onChange={(e) => handleChangeText(e as any, form, setForms)}
                                fullWidth
                                variant="filled"
                                size="small"
                            />

                            <TextField
                                error={form.formErrors.mail != ""}
                                name="mail"
                                label="Adresse Mail"
                                value={form.mail}
                                helperText={form.formErrors.mail && form.formErrors.mail}
                                id="mail"
                                onChange={(e) => handleChangeText(e as any, form, setForms)}
                                fullWidth
                                variant="filled"
                                size="small"
                            />


                            <TextField
                                error={form.formErrors.phone != ""}
                                id="standard-error-helper-text"
                                name="phone"
                                label="Téléphone"
                                value={form.phone}
                                helperText={form.formErrors.phone && form.formErrors.phone}
                                onChange={(e) => handleChangeText(e as any, form, setForms)}
                                type="number"
                                variant="filled"
                                fullWidth
                                size="small"
                            />

                            <div className="button-signup">
                                <button type="submit" className="slideform-btn slideform-btn-submit">ENVOYER</button>
                            </div>
                        </form>


                    </div>
                </div>
            </section>
        </div>
    )
}

interface errors {
    name: string,
    surname: string,
    phone: string,
    mail: string
}

export default Home
