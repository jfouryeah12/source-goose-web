import React from "react";
import Image from "next/image";

interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

const colors = {
  teamstext: ["text-green-500"],
};

const TeamMember = ({
  name,
  jobTitle,
  imageUrl,
}: {
  name: string;
  jobTitle: string;
  imageUrl: string;
}) => {
  return (
    <div className="employee-tile relative group">
      <div className="employee-img filter grayscale">
        <Image
          src={imageUrl}
          alt={`${name} profile picture`}
          width={300}
          height={300}
          loading="lazy"
        />
      </div>

      <div
        className={`employee-info absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md p-4 text-white text-center opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100`}
      >
        <div className="employee-info-content">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="job-title">{jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default function Teams({ className, ...props }: Props) {
  // ... Your existing code ...

  return (
    <div>
      <h2 className="text-2xl font-bold">THE SG TEAM</h2>
      <br />
      <blockquote className="text-s italic text-white text-center">
        <p>
          "We've seen things that'll make your eyebrows jump.
          <br /> We've done stuff that defies explanation. <br />
          And you know what? We're still out here, doing our thing like a bunch
          of crazy, unstoppable maniacs.
          <br /> Watch out, world!"
        </p>
      </blockquote>

      <div className="flex flex-wrap justify-center pt-10">
        {/* Member 1 */}
        <TeamMember
          name="Jericho Y. Estares"
          jobTitle="Lead Programmer"
          imageUrl="/images/teams/JerichoEstares.jpg"
        />

        {/* Member 2 */}
        <TeamMember
          name="Weynbrenner Y. Mado"
          jobTitle="Chief Executive Officer/Programmer"
          imageUrl="/images/teams/WeynbrennerMado.jpg"
        />

        {/* Member 3 */}
        <TeamMember
          name="Dennison Marcial"
          jobTitle="Chief Operating Officer"
          imageUrl="/images/teams/DennisonMarcial.jpg"
        />

        {/* Member 4 */}
        <TeamMember
          name="Janice R. Flores"
          jobTitle="Secretary"
          imageUrl="/images/teams/JaniceFlores.jpg"
        />

        {/* Member 5 */}
        <TeamMember
          name="Samuel Migs Gamay"
          jobTitle="Project Manager/Programmer"
          imageUrl="/images/teams/SamuelGamay.jpg"
        />

        {/* Member 6 */}
        <TeamMember
          name="Carl Narag Historillo"
          jobTitle="Human Resource/Quality Assurance"
          imageUrl="/images/teams/CarlNarag.jpg"
        />

        {/* Member 7 */}
        <TeamMember
          name="Lewis Gerald De Leon"
          jobTitle="Programmer/AI Programmer"
          imageUrl="/images/teams/LewisDeLeonC.jpg"
        />

        {/* Member 8 */}
        <TeamMember
          name="Tolits Bulado"
          jobTitle="Programmer"
          imageUrl="/images/teams/TolitsBulado.jpg"
        />

        {/* Member 9 */}
        <TeamMember
          name="Desmond Mado"
          jobTitle="Programmer"
          imageUrl="/images/teams/_404.jpg"
        />

        {/* Member 10 */}
        <TeamMember
          name="Jayson Garcia"
          jobTitle="Programmer"
          imageUrl="/images/teams/_404.jpg"
        />

        {/* Member 11 */}
        <TeamMember
          name="Jim Zedrick Lerio"
          jobTitle="Audio Designer"
          imageUrl="/images/teams/JimLerio.jpg"
        />

        {/* Member 12 */}
        <TeamMember
          name="Kean Paolo Orillano"
          jobTitle="Public Relations Specialist"
          imageUrl="/images/teams/KeanOrillano.jpg"
        />

        {/* Member 13 */}
        <TeamMember
          name="Michael Calimlim II"
          jobTitle="Quality Assurance"
          imageUrl="/images/teams/MichaelCalimlim.jpg"
        />

        {/* Member 14 */}
        <TeamMember
          name="Harold Ragudo"
          jobTitle="Concept Artist"
          imageUrl="/images/teams/_Resume_Harold.jpg"
        />

        {/* Member 15 */}
        <TeamMember
          name="Cyrus Valisno"
          jobTitle="Concept Artist"
          imageUrl="/images/teams/CyrusValisno.jpg"
        />

        {/* Member 16 */}
        <TeamMember
          name="Regor Paiman"
          jobTitle="Concept Artist"
          imageUrl="/images/teams/_404.jpg"
        />

        {/* Member 15 */}
        <TeamMember
          name="Lim Mio"
          jobTitle="All-Around Artist"
          imageUrl="/images/teams/_404.jpg"
        />

        {/* Member 16 */}
        <TeamMember
          name="Joaquie S. Dolera"
          jobTitle="Quality Assurance"
          imageUrl="/images/teams/JoaquieDolera.jpg"
        />

        {/* Add more TeamMembers here as needed */}
      </div>
    </div>
  );
}
