import socialProfilesData from "@data/socialProfiles.json";
import { faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "@components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialProfilesIconsMaper = {
    facebook: faFacebook,
    x: faXTwitter,
    linkedin: faLinkedin,
}

/**
 * @typedef {Object} SocialProfilesProps
 * @prop {string} [className]
 */

/**
 * @param {SocialProfilesProps} props 
 */

function SocialProfiles({ className }) {
    return (
        <ul className={`flex itemScope gap-3 ${className}`}>
            {
                socialProfilesData.map((profile, index) => (<li key={profile.id || index}>
                    <Button
                        variant="secondary"
                        title={profile.name}
                        aria-label={profile.name}
                        href={profile.href}
                        target="_blank"
                        className="w-12 h-12 p-0! rounded-md flex items-center justify-center text-grey-20! transition sm:hover:text-inherit! text-xl"
                    >
                        <FontAwesomeIcon icon={socialProfilesIconsMaper[profile.icon]} />
                        <span className="sr-only">{profile.name}</span>
                    </Button>
                </li>))
            }
        </ul>
    )
}

export default SocialProfiles;