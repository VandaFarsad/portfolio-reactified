export type Experience = {
  id: string;
  type: string;
  date: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

export const fetchExperiences = () => {
  return fetch(`${process.env.REACT_APP_URL_API}/experiences`).then((res) =>
    res.json() as Promise<Experience[]>
  ) 
};



export const experienceData = [
  {
    id: "1",
    type: "work",
    date: "2020 - jetzt",
    title: "Freelance Backend Developer",
    subtitle: "Orendt Studios, Hamburg",
    tags: ["Django", "Docker", "Kubernetes", "Gitlab", "Next.js", "React.js"],
  },
  {
    id: "2",
    type: "work",
    date: "2017 - 2019",
    title: "Biostatistiker",
    subtitle: "Ecker+Ecker, Hamburg",
    tags: ["Python", "Git", "R", "SAS"],
  },
  {
    id: "3",
    type: "education",
    date: "2014 - 2017",
    title: "Doktor der Naturwissenschaften",
    subtitle: "Mathematik, Universität Hamburg",
  },
  {
    id: "4",
    type: "education",
    date: "2009 - 2013",
    title: "Master of Science",
    subtitle: "Mathematik, TU Darmstadt",
  },
  {
    id: "5",
    type: "education",
    date: "2005 - 2009",
    title: "Diplom (FH)",
    subtitle: "Mathematik, Hochschule Darmstadt",
  },
];
