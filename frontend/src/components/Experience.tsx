import WorkIcon from "@mui/icons-material/HomeWorkOutlined";
import HourglassTopIcon from "@mui/icons-material/HourglassTopOutlined";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id="resume" className="pb-20 bg-slate-500">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="container mx-auto flex flex-col items-center text-2xl font-sans">
            <span className="mb-2 text-2xl tracking-tight text-gray-900 pt-20">Experience</span>
          </h1>
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
            <h3 className="vertical-timeline-element-title">Freelance Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Orendt Studios, Hamburg</h4>
            <p>Web-Entwicklung, Projekt-Managment</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Biostatistiker</h3>
            <h4 className="vertical-timeline-element-subtitle">Ecker+Ecker, Hamburg</h4>
            <p>Statistik, Software-Entwicklung, Schulungen</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2017"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Mathematik</h3>
            <h4 className="vertical-timeline-element-subtitle">Doktor der Naturwissenschaft</h4>
            <p>Kategorientheory, Konforme Feldtheroien</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2009 - 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Mathematik</h4>
            <p>Geometrie, Algebra, Kernphysik</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2005 - 2009"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Mathematik</h3>
            <h4 className="vertical-timeline-element-subtitle">Diplom (FH)</h4>
            <p>Numerische Mathematik, Infomatik</p>
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
