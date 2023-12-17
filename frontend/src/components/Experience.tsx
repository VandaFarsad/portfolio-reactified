import WorkIcon from "@mui/icons-material/HomeWorkOutlined";
import HourglassTopIcon from "@mui/icons-material/HourglassTopOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, fetchExperiences } from "../api/experienceData";
// import { experienceData } from "../api/experienceData";


const commonIconStyle = { color: "#fff" };
const workIconStyle = { background: "rgb(33, 150, 243)", ...commonIconStyle };
const educationIconStyle = { background: "rgb(233, 30, 99)", ...commonIconStyle };
type FetchState = "initial" | "loading" | "success" | "error";

const Experience = () => {

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [state, setState] = useState<FetchState>("initial");

  useEffect(() => {
    setState("loading");
    fetchExperiences()
      .then((experience) => {
        setExperiences(experience);
        setState("success");
      })
      .catch(() => {
        setState("error");
      });
  }, []);

  return (
    <section id="resume" className="w-full pt-4 sm:pt-10 md:pt-40 overflow-hidden bg-slate-500">
      {state === "loading" && (
        <h2 className="">Loading experiences...</h2>
      )}
      {state === "error" && (
        <h2 className="">Error while loading experiences...</h2>
      )}
      {state === "success" && 
      <>  
      <div className="col-md-12 mx-auto pb-10 pt-8">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.id}
              className={`vertical-timeline-element--${experience.type}`}
              date={experience.date}
              iconStyle={experience.type === "work" ? workIconStyle : educationIconStyle}
              icon={experience.type === "work" ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              {experience.subtitle && <h4 className="vertical-timeline-element-subtitle">{experience.subtitle}</h4>}
              {experience.tags && (
                <Grid container spacing={1} className="pt-4 text-xs">
                  {experience.tags.map((tag) => (
                    <Grid key={tag} item xs={"auto"} sm={"auto"} md={"auto"}>
                      <Chip label={tag} style={{ width: "100px", textOverflow: "ellipsis", overflow: "hidden" }} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", ...commonIconStyle }}
            icon={<HourglassTopIcon />}
          />
        </VerticalTimeline>
      </div>
      </>
      }
    </section>
  );
};

export default Experience;
