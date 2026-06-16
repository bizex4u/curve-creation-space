import SocialLink from "@/components/footer/SocialLink";
import linkedinLogo from "@/assets/Linkedin_Logo.png";

interface TeamProfileCardProps {
  name: string;
  photoUrl: string | null;
  position: string;
  socialLink: string | null;
}

const TeamProfileCard = ({ name, photoUrl, position, socialLink }: TeamProfileCardProps) => {
  return (
    <div className="bg-neutral-01 border border-neutral-02 rounded-[12px] overflow-hidden">
      {/* Photo Container */}
      <div className="relative aspect-[3/4]">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-neutral-03" />
        )}
        
        {/* Social Link - Bottom Right */}
        {socialLink && (
          <div className="absolute bottom-3 right-3">
            <SocialLink
              href={socialLink}
              icon={<img src={linkedinLogo} alt="LinkedIn" className="w-full h-full object-contain" />}
            />
          </div>
        )}
      </div>
      
      {/* Text Container */}
      <div className="p-5">
        <p className="text-body font-medium text-neutral-11">{name}</p>
        <p className="text-body-small text-neutral-10">{position}</p>
      </div>
    </div>
  );
};

export default TeamProfileCard;
