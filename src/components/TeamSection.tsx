import SectionHeader from "@/components/SectionHeader";
import BrushHighlight from "@/components/BrushHighlight";
import TeamProfileCard from "@/components/TeamProfileCard";
import { useTeamMembers } from "@/hooks/useTeamMembers";
import OutlineButton from "@/components/OutlineButton";
import LazyVideo from "@/components/ui/LazyVideo";
import collaborativeVideo from "@/assets/Collaborative_Discussion.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TeamSection = () => {
  const { data: teamMembers, isLoading } = useTeamMembers();
  const { ref: teamGridRef, isVisible: teamGridVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: careerRef, isVisible: careerVisible } = useScrollAnimation({ threshold: 0.1 });

  // Hide section if loading or no team members
  if (isLoading) return null;
  if (!teamMembers || teamMembers.length === 0) return null;

  return (
    <>
      {/* Section Header with responsive width */}
      <div className="w-full tablet:w-2/3 desktop:w-1/2 max-w-[550px] mx-auto">
        <SectionHeader
          title={
            <>
              Our leadership and <BrushHighlight>experts</BrushHighlight>
            </>
          }
          subtitle="A dedicated team of analysts, strategists, and innovators working together to simplify your financial decisions."
          align="center"
        />
      </div>

      {/* Team Grid */}
      <div 
        ref={teamGridRef}
        className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-x-3 gap-y-8 tablet:gap-y-10 section-header"
        style={{
          opacity: teamGridVisible ? 1 : 0,
          transform: teamGridVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
        }}
      >
        {teamMembers.map((member) => (
          <TeamProfileCard
            key={member.id}
            name={member.name}
            photoUrl={member.photo_url}
            position={member.position}
            socialLink={member.social_link}
          />
        ))}
      </div>

      {/* Career Block */}
      <div 
        ref={careerRef}
        className="flex justify-center section-header"
        style={{
          opacity: careerVisible ? 1 : 0,
          transform: careerVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
        }}
      >
        <div 
          className="w-full desktop:w-[83%] flex flex-col tablet:flex-row items-center gap-10 desktop:gap-16 p-5 tablet:py-12 tablet:px-8 border-2 border-neutral-02 rounded-[20px]"
          style={{ boxShadow: '0 10px 20px hsl(var(--neutral-12) / 0.05)' }}
        >
          {/* Video */}
          <LazyVideo 
            src={collaborativeVideo}
            className="w-[250px] h-auto tablet:w-auto tablet:h-[150px] flex-shrink-0"
          />
          
          {/* Content */}
          <div className="max-w-[500px]">
            <h5>Grow your career at Zova</h5>
            <p className="text-body font-medium mt-3 text-neutral-10">
              Work with a team that simplifies financial workflows and brings clarity to every business we support.
            </p>
            <div className="mt-6">
              <OutlineButton href="https://linkedin.com">
                See openings on LinkedIn
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
