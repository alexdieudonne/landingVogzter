import React from 'react'
import NavBar from '../../utils/navbar'

function Support() {
    return (
        <div className="policiesbody">
            <NavBar />
            <div className="policiesbodycontent">
                <p className='title-policies'><strong ><u>Support</u></strong></p>
                <p><span style={{ fontWeight: 400 }}>Pour toute demande de support concernant des soucis techniques liés à l’utilisation de l’application. Vous pouvez nous contacter à l’adresse suivante <a href="mailto:contact@vogz.io">contact@vogz.io</a></span></p>
            </div>
        </div>
    )
}

export default Support

