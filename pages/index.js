import {
  faBootstrap,
  faCss3,
  faCss3Alt,
  faGit,
  faHtml5,
  faJava,
  faJoomla,
  faJs,
  faJsfiddle,
  faNodeJs,
  faReact,
  faSquareJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faBriefcase,
  faBullhorn,
  faCalendar,
  faCode,
  faCodeBranch,
  faComment,
  faDatabase,
  faFire,
  faHome,
  faLaptopCode,
  faList,
  faMobileAlt,
  faPalette,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import man from '../public/man.jpg';
import Portfolio from './portfolio';

export default function Home() {
  return (
    <>
      <Head>
        <title>Connect Riaj</title>
        <meta name="description" content="Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main-container">
        {/* side navigation */}
        <section className="aside flex justify-center items-center">
          <div className="logo">
            <a href="#home" className="capitalize">
              <span>R</span>iaj
            </a>
          </div>
          {/* nav toggler */}
          <div className="nav-toggler flex justify-center items-center hidden">
            <span></span>
          </div>
          <ul className="nav">
            <li>
              <a href="#home" className="active">
                <FontAwesomeIcon className="icon" icon={faHome} />
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                <FontAwesomeIcon className="icon" icon={faUser} />
                About
              </a>
            </li>
            <li>
              <a href="#skills">
                <FontAwesomeIcon className="icon" icon={faBook} />
                Skills
              </a>
            </li>
            <li>
              <a href="#services">
                <FontAwesomeIcon className="icon" icon={faList} />
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <FontAwesomeIcon className="icon" icon={faBriefcase} />
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact">
                <FontAwesomeIcon className="icon" icon={faComment} />
                Contact
              </a>
            </li>
          </ul>
        </section>
        {/* home content */}
        <section className="main-content">
          <section className="home section" id="home">
            <div className="container">
              <div className="row">
                <div className="home-info">
                  <h3 className="hello">
                    Hello, my name is <span>Riajul Islam</span>
                  </h3>
                  <h3 className="my-profession font-semibold">
                    I'm a <span className="typing">Web Developer</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptate, a architecto tenetur rerum velit nobis hic ipsa
                    repellat natus id?
                  </p>
                  <a
                    href="#contact"
                    className="btn btn-error text-base py-[12px] px-[35px] rounded-full inline-block whitespace-nowrap"
                  >
                    Hire Me
                  </a>
                </div>
                <div className="home-image p-4">
                  <Image
                    width="100%"
                    height="400"
                    src={man}
                    alt="man"
                    className="rounded-md m-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* about section  */}
        <section className="about section " id="about">
          <div className="container">
            <div className="row">
              <div className="section-title pl-4">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="about-content pl-4">
                <div className="row">
                  <div className="about-text pl-4">
                    <h3>
                      I'm Md Riajul Islam and <span>Web Developer</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos, minima numquam reiciendis incidunt nobis
                      cupiditate optio modi porro in assumenda harum at earum
                      repudiandae iure blanditiis esse quasi fugiat pariatur
                      doloremque, debitis excepturi! Recusandae aspernatur enim
                      magni rerum? Dolor praesentium expedita nihil eligendi
                      assumenda. Beatae nobis reiciendis ea doloremque. Quaerat
                      nisi dignissimos illo nostrum dolorum!
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="personal-info pl-4">
                    <div className="row">
                      <div className="info-item pl-4">
                        <p>
                          Birthday : <span>06 sep 1994</span>
                        </p>
                      </div>
                      <div className="info-item pl-4">
                        <p>
                          Age : <span>28</span>
                        </p>
                      </div>
                      <div className="info-item pl-4">
                        <p>
                          Website : <span>www.connectriaj.com</span>
                        </p>
                      </div>
                      <div className="info-item pl-4">
                        <p>
                          Email : <span>connect.riaj@hotmail.com</span>
                        </p>
                      </div>
                      <div className="info-item pl-4">
                        <p>
                          Degree : <span>CSE</span>
                        </p>
                      </div>
                      <div className="info-item pl-4">
                        <p>
                          Phone : <span>+8801706848920</span>
                        </p>
                      </div>
                      <div className="info-item pl-4">
                        <p>
                          City : <span>Jessore - 7401</span>
                        </p>
                      </div>
                      <div className="info-item pl-4">
                        <p>
                          Freelance : <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons">
                        <a
                          href="#"
                          className="btn btn-error text-base py-[12px] px-[35px] rounded-full inline-block whitespace-nowrap ml-4 "
                        >
                          Download CV
                        </a>
                        <a
                          href="#contact"
                          className="btn btn-error text-base py-[12px] px-[35px] rounded-full inline-block whitespace-nowrap ml-4"
                        >
                          Hire Me
                        </a>
                      </div>
                    </div>

                    {/* education and experiences */}
                    <div className=" flex lg:flex-row flex-col justify-between gap-x-8">
                      <div className="education pl-4">
                        <h3 className="title">Education</h3>
                        <div className="row lg:w-[600px]">
                          <div className="timeline-box pl-4">
                            <div className="timeline shadow-dark glass">
                              {/* timeline item  */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <FontAwesomeIcon
                                    className="icon"
                                    icon={faCalendar}
                                  />{' '}
                                  2013 - 2015
                                </h3>
                                <h4 className="timeline-title">
                                  Bachelor of Computer Science
                                </h4>
                                <p className="timeline-text">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Aspernatur consequatur
                                  expedita distinctio, alias odio laborum magni
                                  tenetur laudantium cum esse accusantium eum
                                  molestiae delectus commodi.
                                </p>
                              </div>
                              {/* timeline item  */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <FontAwesomeIcon
                                    className="icon"
                                    icon={faCalendar}
                                  />{' '}
                                  2013 - 2015
                                </h3>
                                <h4 className="timeline-title">
                                  Bachelor of Computer Science
                                </h4>
                                <p className="timeline-text">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Aspernatur consequatur
                                  expedita distinctio, alias odio laborum magni
                                  tenetur laudantium cum esse accusantium eum
                                  molestiae delectus commodi.
                                </p>
                              </div>
                              {/* timeline item  */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <FontAwesomeIcon
                                    className="icon"
                                    icon={faCalendar}
                                  />{' '}
                                  2013 - 2015
                                </h3>
                                <h4 className="timeline-title">
                                  Bachelor of Computer Science
                                </h4>
                                <p className="timeline-text">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Aspernatur consequatur
                                  expedita distinctio, alias odio laborum magni
                                  tenetur laudantium cum esse accusantium eum
                                  molestiae delectus commodi.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="experience pl-4">
                        <h3 className="title">Experience</h3>
                        <div className="row lg:w-[600px]">
                          <div className="timeline-box pl-4">
                            <div className="timeline shadow-dark glass">
                              {/* timeline item  */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <FontAwesomeIcon
                                    className="icon"
                                    icon={faCalendar}
                                  />{' '}
                                  2013 - 2015
                                </h3>
                                <h4 className="timeline-title">
                                  Bachelor of Computer Science
                                </h4>
                                <p className="timeline-text">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Aspernatur consequatur
                                  expedita distinctio, alias odio laborum magni
                                  tenetur laudantium cum esse accusantium eum
                                  molestiae delectus commodi.
                                </p>
                              </div>
                              {/* timeline item  */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <FontAwesomeIcon
                                    className="icon"
                                    icon={faCalendar}
                                  />{' '}
                                  2013 - 2015
                                </h3>
                                <h4 className="timeline-title">
                                  Bachelor of Computer Science
                                </h4>
                                <p className="timeline-text">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Aspernatur consequatur
                                  expedita distinctio, alias odio laborum magni
                                  tenetur laudantium cum esse accusantium eum
                                  molestiae delectus commodi.
                                </p>
                              </div>
                              {/* timeline item  */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <FontAwesomeIcon
                                    className="icon"
                                    icon={faCalendar}
                                  />{' '}
                                  2013 - 2015
                                </h3>
                                <h4 className="timeline-title">
                                  Bachelor of Computer Science
                                </h4>
                                <p className="timeline-text">
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Aspernatur consequatur
                                  expedita distinctio, alias odio laborum magni
                                  tenetur laudantium cum esse accusantium eum
                                  molestiae delectus commodi.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills section  */}
        <section className="skills section " id="skills">
          <div className="container cursor-pointer">
            <div className="row">
              <div className="section-title pl-4">
                <h2>My Skills</h2>
              </div>
            </div>
            <div className="grid gap-x-10 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faReact}
                    />
                    REACT
                  </p>
                  <p className="font-bold">80%</p>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="80"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faJs}
                    />
                    JavaScript
                  </p>
                  <p className="font-bold">85%</p>
                </div>
                <progress
                  className="progress progress-accent w-full"
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faDatabase}
                    />
                    Mongo DB
                  </p>
                  <p className="font-bold">75%</p>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="75"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faHtml5}
                    />
                    HTML 5
                  </p>
                  <p className="font-bold">90%</p>
                </div>
                <progress
                  className="progress progress- w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faCode}
                    />
                    Express JS
                  </p>
                  <p className="font-bold">85%</p>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faNodeJs}
                    />
                    Node Js
                  </p>
                  <p className="font-bold">80%</p>
                </div>
                <progress
                  className="progress progress-info w-full"
                  value="80"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faCss3Alt}
                    />
                    Tailwind CSS
                  </p>
                  <p className="font-bold">95%</p>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="95"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faJsfiddle}
                    />
                    Next JS
                  </p>
                  <p className="font-bold">80%</p>
                </div>
                <progress
                  className="progress progress-dark w-full"
                  value="80"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faCodeBranch}
                    />
                    Git
                  </p>
                  <p className="font-bold">85%</p>
                </div>
                <progress
                  className="progress progress-success w-full"
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faBootstrap}
                    />
                    Bootstrap
                  </p>
                  <p className="font-bold">90%</p>
                </div>
                <progress
                  className="progress progress-warning w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faFire}
                    />
                    Firebase Auth
                  </p>
                  <p className="font-bold">80%</p>
                </div>
                <progress
                  className="progress progress-accent w-full"
                  value="80"
                  max="100"
                ></progress>
              </div>
              <div
                className="p-4 bg-slate-400 rounded-2xl glass
              "
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">
                    <FontAwesomeIcon
                      className="icon pr-2 font-bold"
                      icon={faCss3}
                    />
                    CSS 3
                  </p>
                  <p className="font-bold">90%</p>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </section>

        {/* service section  */}
        <section className="service section " id="services">
          <div className="container">
            <div className="row">
              <div className="section-title pl-4">
                <h2>Services</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="row">
                {/* service item  */}
                <div className="service-item pl-4">
                  <div className="service-item-inner  pl-4">
                    <div className="icon">
                      <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia repudiandae odio sapiente.
                    </p>
                  </div>
                </div>
                {/* service item  */}
                <div className="service-item pl-4">
                  <div className="service-item-inner  pl-4">
                    <div className="icon">
                      <FontAwesomeIcon className="icon" icon={faLaptopCode} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia repudiandae odio sapiente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* service item  */}
                <div className="service-item pl-4">
                  <div className="service-item-inner  pl-4">
                    <div className="icon">
                      <FontAwesomeIcon className="icon" icon={faCode} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia repudiandae odio sapiente.
                    </p>
                  </div>
                </div>

                {/* service item  */}
                <div className="service-item pl-4">
                  <div className="service-item-inner  pl-4">
                    <div className="icon">
                      <FontAwesomeIcon className="icon" icon={faBullhorn} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia repudiandae odio sapiente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* service item  */}
                <div className="service-item pl-4">
                  <div className="service-item-inner  pl-4">
                    <div className="icon">
                      <FontAwesomeIcon className="icon" icon={faPalette} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia repudiandae odio sapiente.
                    </p>
                  </div>
                </div>
                {/* service item  */}
                <div className="service-item pl-4">
                  <div className="service-item-inner pl-4">
                    <div className="icon">
                      <FontAwesomeIcon className="icon" icon={faReact} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Web Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia repudiandae odio sapiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* portfolio section  */}
        <section className="portfolio section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="section-title pl-4">
                <h2>Portfolio</h2>
              </div>
            </div>
            <div className="row">
              <div className="portfolio-heading pl-4">
                <h2 className="text-lg font-bold font-mono">
                  My Latest Projects:
                </h2>
              </div>
            </div>
            {/* portfolio item  */}
            <Portfolio />
          </div>
        </section>

        {/* contact section  */}
        <section className="contact section" id="contact">
          <div className="container">
            <div className="row">
              <div className="section-title pl-4">
                <h2>Contact Me</h2>
              </div>
            </div>
            <h3 className="contact-title">Have You Any Questions ?</h3>
            <h4 className="contact-sub-title">I'M AT YOUR SERVICES</h4>
            {/* contact info item */}
            <div className="row">
              <div className="contact-info-item">
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
