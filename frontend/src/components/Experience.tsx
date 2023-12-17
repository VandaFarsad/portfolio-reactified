import WorkIcon from "@mui/icons-material/HomeWorkOutlined";
import HourglassTopIcon from "@mui/icons-material/HourglassTopOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - jetzt"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="text-xl font-semibold">Freelance Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Orendt Studios, Hamburg</h4>
            <Grid container spacing={1} className="pt-4 text-xs">
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="Django" />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="Docker" />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="Kubernetes" />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="Gitlab" />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="Next.js" />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="React.js" />
              </Grid>
            </Grid>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="text-xl font-semibold">Biostatistiker</h3>
            <h4 className="vertical-timeline-element-subtitle">Ecker+Ecker, Hamburg</h4>
            <Grid container spacing={1} className="pt-4 text-xs">
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="Python" />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="Git" />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="R" />
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Chip label="SAS" />
              </Grid>
            </Grid>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2017"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="text-xl font-semibold">Doktor der Naturwissenschaften</h3>
            <h4 className="vertical-timeline-element-subtitle">Mathematik, Universität Hamburg</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2009 - 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="text-xl font-semibold">Master of Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Mathematik, TU Darmstadt</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2005 - 2009"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h4 className="text-xl font-semibold">Diplom (FH)</h4>
            <h3 className="vertical-timeline-element-subtitle">Mathematik, Hochschule Darmstadt</h3>
          </VerticalTimelineElement>

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
