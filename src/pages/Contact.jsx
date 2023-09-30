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
           <SocialIcon href="https://www.instagram.com/taylor.golden.33"
url="www.instagram.com" target="_blank" />
            <SocialIcon href="https://www.linkedin.com/in/taylor-golden-212b19257"url="www.linkedin.com"target="_blank" />
            <SocialIcon href="https://www.github.com/kumoko8"url="www.github.com"target="_blank" />
            <SocialIcon href="https://www.facebook.com/taylor.golden.33"url="www.facebook.com"target="_blank" />
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