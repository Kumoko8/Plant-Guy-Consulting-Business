import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/discord'
import 'react-social-icons/facebook'

export default function Contact() {
    return (
        <div>
            <div>
                <h1> Contact</h1>
            </div>
            <SocialIcon url="www.instagram.com" />
            <SocialIcon url="www.linkedin.com" />
            <SocialIcon url="www.github.com" />
            <SocialIcon url="www.discord.com" />
            <SocialIcon url="www.facebook.com" />
            <div>
                <Link to="/Projects">
                    <button >
                        Projects
                    </button>
                </Link>

            </div>
        </div>
    )
};