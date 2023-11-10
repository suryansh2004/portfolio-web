import { Badges } from '~/components/badges';

export default function About() {
  return (
    <div className="main-wrapper">
      <div className="container-slim mx-auto content">
        <div className="inset-image about-cover-image mb-m">
          <img
            height="420"
            width="450"
            src="/assets/img/cover2.jpeg"
            alt="Suryansh"
          />
        </div>
        <p>
          I'm Suryansh Priyadarshi and I am a student pursuing a Bachelor's
          degree in Computer Science. My specialty is in creating mobile based
          applications with a strong emphasis on simplicity and usability, with
          a focus on building interfaces for the same and also learning how to
          protect systems, networks, and programs from digital attacks.
        </p>
        <p>You can also find me working on my own projects such as</p>
        <p>
          In my free time, I enjoy playing criket and football, watching rom-com
          shows and movies, playing new songs on my guitar and taking pictures.
        </p>
        <p>
          You can follow along with my work, personal projects and occasional
          insights into my life on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/SuryanshPriyad1">
            Twitter
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/thee_suryansh_priyadarshi/">
            Instagram
          </a>
          .
        </p>
        <hr className="mt-xl mb-m" />
        <h4>Development and Cloud</h4>
        <p className="t-stack mb-m">
          Flutter, Firebase, RestApi, and Linux
        </p>
        <h4>Programming Languages</h4>
        <p className="t-stack">
          Java, C, C++, Python, Dart, and MySql
        </p>
        <hr className="mt-xl mb-m" />
        <h4>Education</h4>
        <div className="work-list">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="work-list-item"
            href="https://www.srmist.edu.in/">
            <span className="work-list-item-company">SRM University</span>
            <span className="work-list-item-spacer" />
            <span className="work-list-item-title">Full-Time Student</span>
            <span className="work-list-item-date">CURRENT</span>
          </a>
          <ul>
            <li>B.Tech in CSE</li>
            <li>Overall CGPA: 9.26</li>
          </ul>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="work-list-item"
            href="https://grow.google/certificates/cybersecurity/#?modal_active=none">
            <span className="work-list-item-company">Google</span>
            <span className="work-list-item-spacer" />
            <span className="work-list-item-title">Online Student</span>
            <span className="work-list-item-date">Batch 2023</span>
          </a>
          <ul>
            <li>CyberSecurity Cource</li>
            <li>Overall Cources: 8</li>
          </ul>
        </div>
        <hr className="mt-m mb-xl" />
        <h4>Certificates</h4>
        <div className="work-list space-y-9">
        <img
            height="520"
            width="400"
            src="/assets/img/certificates/google.png"
          />
        <img
            height="520"
            width="400"
            src="/assets/img/certificates/app.jpeg"
          />
        <img
            height="520"
            width="400"
            src="/assets/img/certificates/quiz.jpeg"
          />
        </div>
        <hr className="mt-m mb-xl" />
        <h4>Co-Curricular</h4>
        <div className="work-list">
          <ul>
            <li>
              Cricket
            </li>
            <li>
              Football
            </li>
            <li>
              Swimming
            </li>
            <li>
              Tech Member at a Club
            </li>
            <li>
              Guiter Player
            </li>
          </ul>
        </div>
        <hr className="mt-m mb-xl" />
        <h4>HackerRank</h4>
        <div className="work-list flex flex-wrap gap-5">
          <Badges />
        </div>
        <hr className="mt-m mb-xl" />
        <h4>About this site</h4>
        <p>In case you were wondering this site is:</p>
        <ul>
          <li>
            Designed and built on a Mac using{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://code.visualstudio.com/">
              Visual Studio Code
            </a>
          </li>
          <li>
            Hosted and Deployed by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vercel.com">
              Vercel
            </a>
          </li>
          <li>
            Inspired by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://daleanthony.com">
              daleanthony.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
