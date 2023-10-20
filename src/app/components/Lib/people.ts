import uniqueId from "@/utils/uniqueId";

export interface Props {
  id: string;
  name: string;
  jobTitle: string;
  imageUrl: string;
}

const people: Array<Props> = [
  {
    id: uniqueId(),
    name: "Jericho Y. Estares",
    jobTitle: "Lead Programmer",
    imageUrl: "/images/teams/JerichoEstares.svg",
  },
  {
    id: uniqueId(),
    name: "Weynbrenner Y. Mado",
    jobTitle: "Chief Executive Officer/Programmer",
    imageUrl: "/images/teams/_WeynbrennerMado.svg",
  },
  {
    id: uniqueId(),
    name: "Dennison Marcial",
    jobTitle: "Chief Operating Officer",
    imageUrl: "/images/teams/DennisonMarcial.svg",
  },
  {
    id: uniqueId(),
    name: "Janice R. Flores",
    jobTitle: "Secretary",
    imageUrl: "/images/teams/JaniceFlores.svg",
  },
  {
    id: uniqueId(),
    name: "Samuel Migs Gamay",
    jobTitle: "Project Manager/Programmer",
    imageUrl: "/images/teams/SamuelGamay.svg",
  },
  {
    id: uniqueId(),
    name: "Carl Narag Historillo",
    jobTitle: "Human Resource/Quality Assurance",
    imageUrl: "/images/teams/CarlNarag.svg",
  },
  {
    id: uniqueId(),
    name: "Lewis Gerald De Leon",
    jobTitle: "Programmer/AI Programmer",
    imageUrl: "/images/teams/LewisDeLeonC.svg",
  },
  {
    id: uniqueId(),
    name: "Tolits Bulado",
    jobTitle: "Programmer",
    imageUrl: "/images/teams/TolitsBulado.svg",
  },
  {
    id: uniqueId(),
    name: "Desmond Mado",
    jobTitle: "Programmer",
    imageUrl: "/images/teams/_404.svg",
  },
  {
    id: uniqueId(),
    name: "Jayson Garcia",
    jobTitle: "Programmer",
    imageUrl: "/images/teams/_404.svg",
  },
  {
    id: uniqueId(),
    name: "Jim Zedrick Lerio",
    jobTitle: "Audio Designer",
    imageUrl: "/images/teams/JimLerio.svg",
  },
  {
    id: uniqueId(),
    name: "Kean Paolo Orillano",
    jobTitle: "Public Relations Specialist",
    imageUrl: "/images/teams/KeanOrillano.svg",
  },
  {
    id: uniqueId(),
    name: "Michael Calimlim II",
    jobTitle: "Quality Assurance",
    imageUrl: "/images/teams/MichaelCalimlim.svg",
  },
  {
    id: uniqueId(),
    name: "Harold Ragudo",
    jobTitle: "Concept Artist",
    imageUrl: "/images/teams/_Resume_Harold.svg",
  },
  {
    id: uniqueId(),
    name: "Cyrus Valisno",
    jobTitle: "Concept Artist",
    imageUrl: "/images/teams/CyrusValisno.svg",
  },
  {
    id: uniqueId(),
    name: "Regor Paiman",
    jobTitle: "Concept Artist",
    imageUrl: "/images/teams/_404.svg",
  },
  {
    id: uniqueId(),
    name: "Lim Mio",
    jobTitle: "All-Around Artist",
    imageUrl: "/images/teams/_404.svg",
  },
  {
    id: uniqueId(),
    name: "Joaquie S. Dolera",
    jobTitle: "Quality Assurance",
    imageUrl: "/images/teams/_1JoaquieDolera.svg",
  },
  {
    id: uniqueId(),
    name: "Brandon Neil Andrade",
    jobTitle: "2D/3D Digital Artist",
    imageUrl: "/images/teams/brandon_neil_andrade 1.svg",
  },
  {
    id: uniqueId(),
    name: "Maryrose Fajardo Bravo",
    jobTitle: "Game Tester/Tester",
    imageUrl: "/images/teams/maryrose_fajardo.svg",
  },
];

export default people;
