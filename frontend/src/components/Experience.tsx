import WorkIcon from "@mui/icons-material/HomeWorkOutlined";
import HourglassTopIcon from "@mui/icons-material/HourglassTopOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../api/experienceData";

const Experience = () => {
  return (
    <section id="resume" className="w-full pt-4 sm:pt-10 md:pt-40 overflow-hidden bg-slate-500">
      <div className="col-md-12 mx-auto pb-10 pt-8">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${experience.type}`}
              date={experience.date}
              iconStyle={{
                background: experience.type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)",
                color: "#fff",
              }}
              icon={experience.type === "work" ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              {experience.subtitle && <h4 className="vertical-timeline-element-subtitle">{experience.subtitle}</h4>}
              {experience.tags && (
                <Grid container spacing={1} className="pt-4 text-xs">
                  {experience.tags.map((tag, tagIndex) => (
                    <Grid key={tagIndex} item xs={"auto"} sm={"auto"} md={"auto"}>
                      <Chip label={tag} style={{ width: "100px", textOverflow: "ellipsis", overflow: "hidden" }} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<HourglassTopIcon />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
