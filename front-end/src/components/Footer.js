import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import Twitter from '@mui/icons-material/Twitter'
import '../styles/Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
            </div>
            <p> &copy; ShopIT Team</p>
        </div>
    )
}

export default Footer
