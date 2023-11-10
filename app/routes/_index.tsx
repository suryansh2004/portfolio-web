import { useLoaderData } from '@remix-run/react';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';

type Featured = {
  name: string;
  logo: string;
  description: string;
};

export const loader = async () => {
  const featured: Featured[] = [
    {
      name: 'BMI Calculator',
      logo: 'https://as1.ftcdn.net/v2/jpg/02/23/57/42/1000_F_223574261_LmzlzkLtjR0cxcDNvkmr2xHfMU69CheO.jpg',
      description:
        'A BMI calculator using Flutter, incorporating local storage for data persistence and maintaining a comprehensive history of calculations. The app not only provides accurate BMI results but also offers personalized feedback, informing users whether they fall within a healthy weight range or if they are considered overweight. It combines intuitive design with practical functionality for a user-friendly experience.',
    },
    {
      name: 'News Application',
      logo: 'https://www.pxpng.com/public/uploads/preview/-21631035972ydgy6zbcwq.png',
      description:
        'A dynamic Flutter news application with a seamless user experience, featuring a secure login system and Firebase for efficient data storage. The app integrates the News API to deliver a diverse range of news content and boasts a user-friendly interface alongside a multitude of features, enhancing the overall news-consuming experience for users.',
    },
  ];
  return { featured };
};

export default function Home() {
  const { featured } = useLoaderData<typeof loader>();
  return (
    <div className="main-wrapper">
      <div className="container mx-auto">
        <h1 className="container">
          Software Developer learning and building applications and interfaces.
        </h1>
        <div className="home-intro text-large content mt-l">
          <p>
            My name is Suryansh Priyadarshi and I am a student pursuing a
            Bachelor's degree in Computer Science. My specialty is in creating
            mobile based applications with a strong emphasis on simplicity and
            usability, with a focus on building interfaces for the same and also
            learning how to protect systems, networks, and programs from digital
            attacks.
          </p>
          <p>
            I am currently gaining knowledge and experience in{' '}
            <a
              href="http://flutter.dev"
              target="_blank"
              rel="noopener noreferrer">
              Flutter
            </a>{' '}
            and{' '}
            <a
              href="https://rapidapi.com/learn/rest"
              target="_blank"
              rel="noopener noreferrer">
              RestApi
            </a>{' '}
            by building applications. Additionally, I am running protection
            tests on the projects which I have build to make it secure from
            cyber attacks.
          </p>
          <p>
            I am passionate about learning new things from different
            repositories and use my knowledge to build goood. Additionally, I
            prefer to keep my own projects open-sourced.
          </p>
        </div>
        <div className="home-links-list mt-l">
          <ul className="home-links">
            <li>
              <a
                target="_blank"
                href="https://twitter.com/SuryanshPriyad1"
                title="Twitter"
                rel="noreferrer">
                <TwitterIcon size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/thee_suryansh_priyadarshi/"
                title="Instagram"
                rel="noreferrer">
                <InstagramIcon size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/suryansh2004"
                title="Github"
                rel="noreferrer">
                <GithubIcon size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="icon-link icon-link-github"
                href="https://www.linkedin.com/in/suryansh5683/"
                title="LinkedIn"
                rel="noreferrer">
                <LinkedinIcon size={24} />
              </a>
            </li>
          </ul>
          <button
            onClick={(e) => {
              const target = e.currentTarget;
              target.textContent = 'Copied!';
              target.disabled = true;
              navigator.clipboard.writeText('suryansh.sp2004@gmail.com');
              setTimeout(() => {
                target.textContent = 'Email me';
                target.disabled = false;
              }, 2000);
            }}
            className="btn">
            Email me
          </button>
        </div>
        <hr className="mt-xxl mb-xxl" />
        <div>
          <div className="heading-group">
            <h4>Featured projects</h4>
            <div className="sub-heading">
              A collection of some side projects that have shipped recently.
            </div>
          </div>
          <div className="home-featured-projects">
            {featured.map((project) => (
              <a
                key={project.name}
                target="_blank"
                className="tile-project mb-xs"
                rel="noreferrer">
                <div className="thumbnail">
                  <img
                    height="64"
                    width="64"
                    loading="lazy"
                    src={project.logo}
                    className="bg-white"
                    alt={project.name}
                  />
                </div>
                <div className="detail">
                  <span className="title">{project.name}</span>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
