import { useLoaderData } from "@remix-run/react";

type Projects = {
  name: string;

  imageUrl: string;
  description: string;
};

export const loader = async () => {
  const projects: Projects[] = [
    {
      name: "BMI Calculator",
      imageUrl:
        "https://f-droid.org/repo/com.github.characterdog.bmicalculator/en-US/phoneScreenshots/1.png",
      description:
        "A BMI calculator using Flutter, incorporating local storage for data persistence and maintaining a comprehensive history of calculations. The app not only provides accurate BMI results but also offers personalized feedback, informing users whether they fall within a healthy weight range or if they are considered overweight. It combines intuitive design with practical functionality for a user-friendly experience.",
    },
    {
      name: "News Application",
      imageUrl:
        "https://media.npr.org/assets/NPROneProductPage/version-two/image-one.webp?s=1200",
      description:
        "A dynamic Flutter news application with a seamless user experience, featuring a secure login system and Firebase for efficient data storage. The app integrates the News API to deliver a diverse range of news content and boasts a user-friendly interface alongside a multitude of features, enhancing the overall news-consuming experience for users.",
    },
    {
      name: "Currency Converter",
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ea0c1f56500611.59b10c0232b80.jpg",
      description:
        "A responsive currency converter using JavaScript, HTML, and CSS, offering real-time exchange rates for seven different countries through API integration. The application provides a user-friendly interface for seamless currency conversion, enhancing accessibility and convenience for users in tracking and exchanging global currencies.",
    },
    {
      name: "Expense Tracker",
      imageUrl:
        "https://media.taxtim.com/images/expense-tracker-mobile-mockup.png",
      description:
        "A comprehensive expense tracker that enables users to log both expenditures and income. With intuitive features, the application not only allows users to monitor their financial transactions but also provides insightful graphical representations, detailing spending patterns on a daily, monthly, weekly, or yearly basis for a holistic understanding of their financial habits.",
    },
    {
      name: "Medical Management System",
      imageUrl:
        "https://i.ytimg.com/vi/Pes84AzXsC8/maxresdefault.jpg",
      description:
        "A medical management system using Java Swing for the user interface and SQL for database management. This system efficiently tracks medicine stock levels, sales records, and associated suppliers. With a proactive approach, the application also issues warnings for impending medicine expirations, ensuring comprehensive management of pharmaceutical inventory and sales data.",
    },
  ];

  return { projects };
};

export default function Projects() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <div className="main-wrapper">
      <div className="container mx-auto content">
        <h1 className="page-title">Projects</h1>
        <div>
          -- Follow me on GitHub :){" "}
          <a
            href={"https://github.com/suryansh2004"}
            className="btn project-btn"
            target="_blank"
            rel="noopener noreferrer">
            github.com/suryansh2004
          </a>
        </div>
        <br />
        <div className="page-sub-heading">
          I have developed a variety of projects as part of my learning process,
          some are on github and some are with me. I have shared some of these
          projects for others to view. I am always looking for ways to improve
          and expand my skills as a developer.
        </div>
        <hr className="mt-xl mb-xxl" />
      </div>
      <div className="container-slim mx-auto content">
        {projects.map((project) => {
          const description = project.description.split("\n\n");
          return (
            <div key={project.name} className="project-container mb-xxl">
              <div className="inset-image project-image mb-m">
                <img
                  alt={project.name}
                  loading="lazy"
                  width={880}
                  height={495}
                  src={project.imageUrl}
                />
              </div>
              <h4 className="project-title">{project.name}</h4>
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          );
        })}
      </div>
      <div className="container mx-auto">
        <hr className="mt-xxl mb-xxl" />
      </div>
      <div className="container-slim mx-auto">
        <div className="heading-group mb-m">
          <h4 className="mb-s">Acknowledgments</h4>
          <div className="sub-heading mb-s">
            I'd like to extend my gratitude to all the developers who have put
            in hard work to create resources for others to learn from and build
            stunning websites, as well as to contribute to open-source projects.
          </div>
          <p>
            The sharing of knowledge and collaboration in the open-source
            community is a fantastic way to advance technology. Keep up the good
            work and continue making contributions!
          </p>
        </div>
      </div>
    </div>
  );
}
