// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <main>
//           <Hero />
//           <About />
//           <Projects />
//           <Skills />
//           <Contact />
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { 
  arrowUpOutline,
  locationOutline,
  callOutline,
  mailOutline,
  personOutline,
  chatbubblesOutline,
  chevronForwardOutline,
  link,
  image
} from 'ionicons/icons';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillsTab, setSkillsTab] = useState('skills');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSkillsTab = () => {
    setSkillsTab(skillsTab === 'skills' ? 'tools' : 'skills');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkTheme ? 'dark bg-gray-900' : 'bg-gray-200'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollY >= 10 ? 'py-3 bg-gray-800 shadow-lg dark:bg-gray-800' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="#" className="text-white dark:text-white font-saira">Mohan.k</a>
          </h1>


          <nav className={`fixed top-0 left-0 w-full h-full bg-gray-800 dark:bg-gray-800 flex items-center justify-center transition-all duration-500 md:static md:w-auto md:h-auto md:bg-transparent md:dark:bg-transparent ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100'}`}>
            <ul className="flex flex-col items-center gap-8 md:flex-row md:gap-6">
              {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white dark:text-white font-poppins relative py-2 text-xl md:text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 transition-all duration-300 hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 relative">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* <picture className="w-full max-w-md mb-8 md:max-w-2xl">
            <source 
              srcSet="https://i.postimg.cc/dQbV4ZPD/temp-Imagem0-Jki4.avif" 
              media="(min-width: 768px)" 
            />
            <source 
              srcSet="https://i.postimg.cc/ncZ75fFM/hero-banner-md.png" 
              media="(min-width: 500px)" 
            />
            <img 
              src="https://i.postimg.cc/2yLvDCqB/hero-banner-sm.png" 
              alt="A man with blue shirt" 
              className="w-full"
            />
          </picture> */}
          
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white dark:text-white mb-6">
            Crafting Innovative Experiences for iOS
          </h2>
          
          <a 
            href="#contact" 
            className="px-8 py-3 border border-white text-white dark:text-white uppercase font-bold tracking-wider hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Contact us
          </a>
        </div>

        {/* Social Links - Hidden on mobile */}
        <div className="hidden lg:block absolute left-8 bottom-32">
          <ul className="space-y-4">
            
           {[
  // { img: '/images/facebook.png', tooltip: 'Facebook', link: 'https://facebook.com/yourprofile' },
  { img: 'https://i.postimg.cc/Gp5FZCv0/git.png', tooltip: 'Git', link: 'https://github.com/mohankarthigaimoorthy' },
  { img: 'https://i.postimg.cc/8PxSdtpW/temp-Imageuq-Ybo-I.avif', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/mohan-k-948192191' }
].map((social) => (
  <li key={social.tooltip}>
    <a 
      href={social.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block relative group"
    >
      <img src={social.img} alt={social.tooltip} className="w-6 h-6" />
      <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {social.tooltip}
      </span>
    </a>
  </li>
))}

          </ul>
          <div className="w-px h-8 bg-gray-400 ml-2.5 mt-4"></div>
        </div>

        {/* Scroll Down - Hidden on mobile */}
        <a 
          href="#stats" 
          className="hidden lg:block absolute right-8 bottom-20 text-gray-400 uppercase rotate-90 origin-top-right tracking-wider"
        >
          Scroll
          <span className="inline-block w-8 h-px bg-gray-400 ml-4 align-middle"></span>
        </a>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 bg-gray-800 dark:bg-gray-800">
        <div className="container mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: 'https://i.postimg.cc/x1TWtf69/stats-card-icon-1.png',
                value: '2+',
                label: 'Years of Experience'
              },
              { 
                icon: 'https://i.postimg.cc/q7ByNYBb/stats-card-icon-2.png',
                value: '3+',
                label: 'Completed Projects'
              },
              { 
                icon: 'https://i.postimg.cc/hj6d3tL6/stats-card-icon-3.png',
                value: '3+',
                label: 'Happy Clients'
              }
            ].map((stat, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="bg-gray-700 dark:bg-gray-700 p-6 rounded-xl flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-lg"
                >
                  <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center">
                    <img src={stat.icon} alt="" className="w-10 h-10 invert" />
                  </div>
                  <div className="flex-1 text-center">
                    <h3 className="text-2xl font-bold text-amber-600">{stat.value}</h3>
                    <p className="text-white dark:text-white font-medium">{stat.label}</p>
                  </div>
                  <IonIcon icon={chevronForwardOutline} className="text-gray-400 text-xl" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-md mx-auto"> 
            {/* <img 
              src="https://i.postimg.cc/LXcVgTbJ/about-banner.png" 
              alt="A man thinking" 
              className="w-full"
            /> */}
          </div>

          <div className="relative">
            {/* <p className="text-amber-600 uppercase font-bold tracking-wider mb-4 lg:absolute lg:-left-40 lg:top-0 lg:rotate-90 lg:origin-left">About me</p> */}
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6"> About Me</h2>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
              Need a Product? Get in Touch!
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Hi, I'm mohan Reacher. I'm a developer passionate in creating clean mobile applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I'm always curious about leaning new skills, tools and concepts. In addition to working on various projects, I have worked with complex teams, which involves daily stand-ups and communications, source control and project management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-amber-700 transition-colors duration-300">
                Hire me
              </button>
              <button className="border border-white text-black dark:text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors duration-300">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">My Skills</h2>

            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
              What my Programming Skills Includes?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I develop simple, intuitive and responsive user interface that helps user get things done with less effort and time with those technologies.
            </p>
            
            {/* <div className="relative bg-gray-700 dark:bg-gray-700 w-max mx-auto lg:mx-0 rounded-full p-1 shadow-lg">
              <div className={`absolute top-1 left-1 w-24 h-8 bg-amber-600 rounded-full transition-all duration-300 ${skillsTab === 'tools' ? 'translate-x-24' : ''}`}></div>
              <button 
                // onClick={toggleSkillsTab}
                className={`relative z-10 px-6 py-1 font-poppins ${skillsTab === 'skills' ? 'text-white' : 'text-gray-400'}`}
              >
                Skills
              </button>
              <button 
                // onClick={toggleSkillsTab}
                className={`relative z-10 px-6 py-1 font-poppins ${skillsTab === 'tools' ? 'text-white' : 'text-gray-400'}`}
              >
                Tools
              </button>
            </div> */}

<div className="relative bg-transparent w-max mx-auto lg:mx-0 rounded-full p-1">
  {/* Highlight slider */}
  {/* <div
    className={`absolute top-1 left-1 w-28 h-12 bg-white dark:bg-amber-600 rounded-full shadow-md transition-transform duration-300 ease-in-out ${
      skillsTab === "tools" ? "translate-x-32" : ""
    }`}
  ></div> */}

  {/* Buttons */}
  <button
    onClick={toggleSkillsTab}
    className={`relative z-10 border border-white px-8 py-3 font-bold uppercase tracking-wider transition-colors duration-300 rounded-full mr-2 ${
      skillsTab === "skills"
        ? "text-gray-900 dark:text-white"
        : "text-black hover:bg-white hover:text-gray-900"
    }`}
  >
    Skills
  </button>
  <button
    onClick={toggleSkillsTab}
    className={`ml-2 relative z-10 border border-white px-8 py-3 font-bold uppercase tracking-wider transition-colors duration-300 rounded-full ${
      skillsTab === "tools"
        ? "text-gray-900 dark:text-white"
        : "text--black hover:bg-white hover:text-gray-900"
    }`}
  >
    Tools
  </button>
</div>

            
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skillsTab === 'skills' ? (
              <>
                {[
                  { name: 'Swift',icon: 'https://i.postimg.cc/TP6vttzL/temp-Image6s-Fi-Du.avif'},
                  { name: 'HTML5', icon: 'https://i.postimg.cc/90cYBMc2/html5.png' },
                  { name: 'CSS3', icon: 'https://i.postimg.cc/cCDwMBD7/css3.png' },
                  { name: 'Javascript', icon: 'https://i.postimg.cc/htmQfnq1/javascript.png' },
                  // { name: 'TypeScript', icon: 'https://i.postimg.cc/HswVg206/typescript.png' },
                  // { name: 'JQuery', icon: 'https://i.postimg.cc/Y9C14PR2/jquery.png' },
                  // { name: 'Bootstrap', icon: 'https://i.postimg.cc/Fzf3pJw2/bootstrap.png' },
                  { name: 'Angular', icon: 'https://i.postimg.cc/pLMzQrC6/angular.png' },
                  { name: 'React', icon: 'https://i.postimg.cc/LsNPMTpc/react.png' },
                  // { name: 'Vue', icon: 'https://i.postimg.cc/YqYbBJyT/vue.png' },
                  { name: 'Firebase', icon: 'https://i.postimg.cc/vTHbwrGN/firebase.png' },
                  // { name: 'PugJs', icon: 'https://i.postimg.cc/FRKN2brn/pugjs.png' },
                  // { name: 'SASS', icon: 'https://i.postimg.cc/jSrKsYqf/sass.png' }
                ].map((skill, index) => (
                  <div key={index} className="group relative w-20 h-20 bg-gray-700 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-lg cursor-help">
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <>
                {[
                                    { name: 'Xcode',icon: 'https://i.postimg.cc/RZJY5w77/temp-Imageo-Ipv-EP.avif'},
                                                      { name: 'Xcode Simulator',icon: 'https://i.postimg.cc/CxJs21tG/temp-Image-D5e-GWF.avif'},
                  // { name: 'Ajax', icon: 'https://i.postimg.cc/FHSDb1Sf/ajax.png' },
                  // { name: 'Gulp', icon: 'https://i.postimg.cc/Xqhkd07c/gulp.png' },
                  // { name: 'Webpack', icon: 'https://i.postimg.cc/NFTk6zy3/webpack.png' },
                  { name: 'Git', icon: 'https://i.postimg.cc/Gp5FZCv0/git.png' },
                  { name: 'Npm', icon: 'https://i.postimg.cc/wjxDMvV8/npm.png' },
                  { name: 'Command Line', icon: 'https://i.postimg.cc/VNrr0b0T/command.png' },
                  { name: 'VS Code', icon: 'https://i.postimg.cc/zvXqW9PB/vs-code.png' },
                  // { name: 'Trello', icon: 'https://i.postimg.cc/FHJNjbGj/trello.png' },
                  // { name: 'Clickup', icon: 'https://i.postimg.cc/wjJYtqT2/clickup.png' },
                  { name: 'Slack', icon: 'https://i.postimg.cc/3RfcSVxW/slack.png' },
                  // { name: 'Photoshop', icon: 'https://i.postimg.cc/MZ4L1CLF/photoshop.png' },
                  // { name: 'Adobe XD', icon: 'https://i.postimg.cc/g0NSjQR4/adobe-xd.png' }
                ].map((tool, index) => (
                  <div key={index} className="group relative w-20 h-20 bg-gray-700 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-lg cursor-help">
                    <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
             my works 
            </h2>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
              See my works which will amaze you!
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl">
              We develop the best quality mobile Application that serves you in the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {[
              // { 
              //   title: 'Pepul', 
              //   // date: 'March 2025', 
              //   image: 'https://i.postimg.cc/ZnTMNgyZ/temp-Imageq-Gx-Qv-B.avif' 
              // },
              { 
  title: 'Pepul', 
  // date: 'March 2025', 
  image: 'https://i.postimg.cc/9FMjNxLz/temp-Imagej4-I7c-Z.avif',
  link: 'https://apps.apple.com/in/app/pepul-social-network-app/id1571517301'
},

              { 
                title: 'Eirad Owner', 
                // date: 'February 2025', 
                image: 'https://i.postimg.cc/RCw3Z0mw/temp-Image-ICAs-Dc.avif',
                link: 'hhttps://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/gt/app/eirad-owner/id6477288439&ved=2ahUKEwju5YOsxLmPAxXdfGwGHZI5AqAQFnoECBYQAQ&usg=AOvVaw0qVmrOl7OSngfMqnuFgJE-' 
              },
              { 
                title: 'CHIKKU', 
                // date: 'January 2025', 
                image: 'https://i.postimg.cc/nzgvbSvZ/temp-Imaged-Dl-Ut-A.avif' ,
                link: 'https://apps.apple.com/in/app/chikku/id6743438106'
              }
              // { 
              //   title: 'Weathering Arc', 
              //   date: 'February 2025', 
              //   image: 'https://i.postimg.cc/grFpxQzw/desert.jpg' 
              // },
              // { 
              //   title: 'Natural light', 
              //   date: 'February 2025', 
              //   image: 'https://i.postimg.cc/s2mpWxFt/article-3.jpg' 
              // },
              // { 
              //   title: 'Mixed shades', 
              //   date: 'January 2025', 
              //   image: 'https://i.postimg.cc/bJCS8cR7/explore-product-4.jpg' 
              // },
              
            ].map((project, index) => (
              <div key={index} className="mb-6 break-inside-avoid relative group">
                <a href="#" className="block overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-poppins font-bold bg-gray-900 dark:bg-gray-900 px-3 py-1 rounded shadow-lg transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {project.title}
                    </h3>
                    <time className="text-gray-300 text-sm bg-gray-900 dark:bg-gray-900 px-3 py-1 rounded shadow-lg inline-block transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      {project.date}
                    </time>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <button className="text-amber-600 text-xl underline mx-auto block mt-8 hover:text-amber-500 transition-colors duration-300">
            Load More Works
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <div className="relative mb-12">
              <p className="text-amber-600 uppercase font-bold tracking-wider mb-4 lg:absolute lg:-left-40 lg:top-0 lg:rotate-90 lg:origin-left">Contact</p>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
                Have you any project? Drop a message!
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Get in touch and let me know if I can help! Fill out the form and I'll be in touch as soon as possible.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                {/* <IonIcon icon={locationOutline} className="text-2xl text-white mt-1" /> */}
                {/* <div>
                  <h3 className="text-white font-poppins font-bold mb-2">Address:</h3>
                  <address className="text-gray-400 not-italic">
                    725 Broadway, New York, NY 10003, USA
                  </address>
                </div> */}
              </li>
              
              <li className="flex items-start gap-4">
                <IonIcon icon={callOutline} className="text-2xl text-white mt-1" />
                <div>
                  <h3 className="text-white font-poppins font-bold mb-2">Phone:</h3>
                  <a href="tel:6461234567" className="text-gray-400 block hover:text-white transition-colors duration-300">+91 8124118346</a>
                  {/* <a href="tel:6467890123" className="text-gray-400 block hover:text-white transition-colors duration-300">(646) 789-0123</a> */}
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <IonIcon icon={mailOutline} className="text-2xl text-white mt-1" />
                <div>
                  <h3 className="text-white font-poppins font-bold mb-2">Email:</h3>
                  <a href="mailto:info@jack.com" className="text-gray-400 block hover:text-white transition-colors duration-300">mohankiosdev@gmail.com</a>
                  {/* <a href="mailto:support@jack.com" className="text-gray-400 block hover:text-white transition-colors duration-300">support@jack.com</a> */}
                </div>
              </li>
            </ul>

            <ul className="flex flex-wrap gap-4 mt-8">
             {[
  // { img: '/images/facebook.png', tooltip: 'Facebook', link: 'https://facebook.com/yourprofile' },
  { img: 'https://i.postimg.cc/Gp5FZCv0/git.png', tooltip: 'Git', link: 'https://github.com/mohankarthigaimoorthy' },
  { img: 'https://i.postimg.cc/8PxSdtpW/temp-Imageuq-Ybo-I.avif', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/mohan-k-948192191' }
].map((social) => (
  <li key={social.tooltip}>
    <a 
      href={social.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block relative group"
    >
      <img src={social.img} alt={social.tooltip} className="w-6 h-6" />
      <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {social.tooltip}
      </span>
    </a>
  </li>
))}
            </ul>
          </div>

          <form className="bg-gray-700 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-white text-sm font-poppins mb-2">Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="John Doe" 
                  className="w-full bg-gray-800 dark:bg-gray-800 text-amber-600 px-4 py-3 pl-10 rounded-lg focus:outline focus:outline-amber-600"
                />
                <IonIcon icon={personOutline} className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-sm font-poppins mb-2">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="johndoe@gmail.com" 
                  className="w-full bg-gray-800 dark:bg-gray-800 text-amber-600 px-4 py-3 pl-10 rounded-lg focus:outline focus:outline-amber-600"
                />
                <IonIcon icon={mailOutline} className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-white text-sm font-poppins mb-2">Phone</label>
              <div className="relative">
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  placeholder="Phone Number" 
                  className="w-full bg-gray-800 dark:bg-gray-800 text-amber-600 px-4 py-3 pl-10 rounded-lg focus:outline focus:outline-amber-600"
                />
                <IonIcon icon={callOutline} className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-white text-sm font-poppins mb-2">Message</label>
              <div className="relative">
                <textarea 
                  id="message" 
                  required 
                  placeholder="Write your Message" 
                  className="w-full bg-gray-800 dark:bg-gray-800 text-amber-600 px-4 py-3 pl-10 rounded-lg h-32 focus:outline focus:outline-amber-600"
                ></textarea>
                <IonIcon icon={chatbubblesOutline} className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-white text-gray-900 py-3 font-bold uppercase tracking-wider hover:bg-amber-600 hover:text-white transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-800 py-6 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">
            <a href="#" className="text-white font-saira">Mohan.k<span className="text-amber-600">.</span></a>
          </h1>
          <p className="text-gray-400">
            &copy; 2025
             {/* <a href="https://codepen.io/leonam-silva-de-souza" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-turret">ULTRA CODE</a>.  */}
             
             All rights reserved
          </p>
        </div>
      </footer>

      {/* Go Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-transparent border-2 border-white text-white rounded-full flex items-center justify-center transition-all duration-300 ${scrollY >= 10 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <IonIcon icon={arrowUpOutline} className="text-xl" />
      </button>
    </div>
  );
};

export default App;

// import { useState, useEffect } from 'react';
// import { IonIcon } from '@ionic/react';
// import { 
//   arrowUpOutline,
//   locationOutline,
//   callOutline,
//   mailOutline,
//   personOutline,
//   chatbubblesOutline,
//   chevronForwardOutline,
//   link,
//   image,
//   menuOutline,
//   closeOutline
// } from 'ionicons/icons';
// import { SpeedInsights } from "@vercel/speed-insights/next"

// const App = () => {
//   const [darkTheme, setDarkTheme] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [skillsTab, setSkillsTab] = useState('skills');
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     setDarkTheme(!darkTheme);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const toggleSkillsTab = () => {
//     setSkillsTab(skillsTab === 'skills' ? 'tools' : 'skills');
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className={`min-h-screen ${darkTheme ? 'dark bg-gray-900' : 'bg-gray-200'} overflow-x-hidden`}>
//       {/* Header */}
//       <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollY >= 10 ? 'py-3 bg-gray-800 shadow-lg dark:bg-gray-800' : 'py-4'}`}>
//         <div className="container max-w-screen-xl mx-auto px-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold">
//             <a href="#" className="text-white dark:text-white font-saira">Mohan.k</a>
//           </h1>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-8">
//               {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <a 
//                     href={`#${item.toLowerCase()}`} 
//                     className="text-white dark:text-white font-poppins relative py-2 text-base"
//                   >
//                     {item}
//                     <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 transition-all duration-300 hover:w-full"></span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden text-white text-2xl"
//             onClick={toggleMobileMenu}
//           >
//             <IonIcon icon={mobileMenuOpen ? closeOutline : menuOutline} />
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <nav className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 dark:bg-gray-800 flex items-center justify-center transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
//           <ul className="flex flex-col items-center gap-8">
//             {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
//               <li key={item}>
//                 <a 
//                   href={`#${item.toLowerCase()}`} 
//                   className="text-white dark:text-white font-poppins relative py-2 text-xl"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item}
//                   <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 transition-all duration-300 hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 relative">
//         <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
//           <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white dark:text-white mb-6">
//             Crafting Innovative Experiences for iOS
//           </h2>
          
//           <a 
//             href="#contact" 
//             className="px-8 py-3 border border-white text-white dark:text-white uppercase font-bold tracking-wider hover:bg-white hover:text-gray-900 transition-colors duration-300"
//           >
//             Contact us
//           </a>
//         </div>

//         {/* Social Links - Hidden on mobile */}
//         <div className="hidden lg:block absolute left-8 bottom-32">
//           <ul className="space-y-4">
//             {[
//               { img: 'https://i.postimg.cc/Gp5FZCv0/git.png', tooltip: 'Git', link: 'https://github.com/mohankarthigaimoorthy' },
//               { img: 'https://i.postimg.cc/8PxSdtpW/temp-Imageuq-Ybo-I.avif', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/mohan-k-948192191' }
//             ].map((social) => (
//               <li key={social.tooltip}>
//                 <a 
//                   href={social.link} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="block relative group"
//                 >
//                   <img src={social.img} alt={social.tooltip} className="w-6 h-6" />
//                   <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     {social.tooltip}
//                   </span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="w-px h-8 bg-gray-400 ml-2.5 mt-4"></div>
//         </div>

//         {/* Scroll Down - Hidden on mobile */}
//         <a 
//           href="#stats" 
//           className="hidden lg:block absolute right-8 bottom-20 text-gray-400 uppercase rotate-90 origin-top-right tracking-wider"
//         >
//           Scroll
//           <span className="inline-block w-8 h-px bg-gray-400 ml-4 align-middle"></span>
//         </a>
//       </section>

//       {/* Stats Section */}
//       <section id="stats" className="py-20 px-4 bg-gray-800 dark:bg-gray-800">
//         <div className="container max-w-screen-xl mx-auto">
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { 
//                 icon: 'https://i.postimg.cc/x1TWtf69/stats-card-icon-1.png',
//                 value: '2+',
//                 label: 'Years of Experience'
//               },
//               { 
//                 icon: 'https://i.postimg.cc/q7ByNYBb/stats-card-icon-2.png',
//                 value: '3+',
//                 label: 'Completed Projects'
//               },
//               { 
//                 icon: 'https://i.postimg.cc/hj6d3tL6/stats-card-icon-3.png',
//                 value: '3+',
//                 label: 'Happy Clients'
//               }
//             ].map((stat, index) => (
//               <li key={index}>
//                 <a 
//                   href="#" 
//                   className="bg-gray-700 dark:bg-gray-700 p-6 rounded-xl flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-lg"
//                 >
//                   <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center">
//                     <img src={stat.icon} alt="" className="w-10 h-10 invert" />
//                   </div>
//                   <div className="flex-1 text-center">
//                     <h3 className="text-2xl font-bold text-amber-600">{stat.value}</h3>
//                     <p className="text-white dark:text-white font-medium">{stat.label}</p>
//                   </div>
//                   <IonIcon icon={chevronForwardOutline} className="text-gray-400 text-xl" />
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4">
//         <div className="container max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           <div className="max-w-md mx-auto"> 
//             {/* Placeholder for about image */}
//           </div>

//           <div className="relative">
//             <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6"> About Me</h2>
//             <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
//               Need a Product? Get in Touch!
//             </h2>
//             <p className="text-gray-400 mb-8 leading-relaxed">
//               Hi, I'm Mohan. I'm a developer passionate in creating clean mobile applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I'm always curious about leaning new skills, tools and concepts. In addition to working on various projects, I have worked with complex teams, which involves daily stand-ups and communications, source control and project management.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-amber-600 text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-amber-700 transition-colors duration-300">
//                 Hire me
//               </button>
//               <button className="border border-white text-black dark:text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors duration-300">
//                 Download CV
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 px-4">
//         <div className="container max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">My Skills</h2>

//             <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
//               What my Programming Skills Includes?
//             </h2>
//             <p className="text-gray-400 mb-8 leading-relaxed">
//               I develop simple, intuitive and responsive user interface that helps user get things done with less effort and time with those technologies.
//             </p>
            
//             <div className="relative bg-transparent w-max mx-auto lg:mx-0 rounded-full p-1">
//               <button
//                 onClick={() => setSkillsTab("skills")}
//                 className={`relative z-10 border border-white px-8 py-3 font-bold uppercase tracking-wider transition-colors duration-300 rounded-full mr-2 ${
//                   skillsTab === "skills"
//                     ? "bg-white text-gray-900"
//                     : "text-white hover:bg-white hover:text-gray-900"
//                 }`}
//               >
//                 Skills
//               </button>
//               <button
//                 onClick={() => setSkillsTab("tools")}
//                 className={`relative z-10 border border-white px-8 py-3 font-bold uppercase tracking-wider transition-colors duration-300 rounded-full ${
//                   skillsTab === "tools"
//                     ? "bg-white text-gray-900"
//                     : "text-white hover:bg-white hover:text-gray-900"
//                 }`}
//               >
//                 Tools
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4">
//             {skillsTab === 'skills' ? (
//               <>
//                 {[
//                   { name: 'Swift', icon: 'https://i.postimg.cc/TP6vttzL/temp-Image6s-Fi-Du.avif'},
//                   { name: 'HTML5', icon: 'https://i.postimg.cc/90cYBMc2/html5.png' },
//                   { name: 'CSS3', icon: 'https://i.postimg.cc/cCDwMBD7/css3.png' },
//                   { name: 'Javascript', icon: 'https://i.postimg.cc/htmQfnq1/javascript.png' },
//                   { name: 'Angular', icon: 'https://i.postimg.cc/pLMzQrC6/angular.png' },
//                   { name: 'React', icon: 'https://i.postimg.cc/LsNPMTpc/react.png' },
//                   { name: 'Firebase', icon: 'https://i.postimg.cc/vTHbwrGN/firebase.png' },
//                 ].map((skill, index) => (
//                   <div key={index} className="group relative w-20 h-20 bg-gray-700 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-lg cursor-help">
//                     <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
//                     <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               <>
//                 {[
//                   { name: 'Xcode', icon: 'https://i.postimg.cc/RZJY5w77/temp-Imageo-Ipv-EP.avif'},
//                   { name: 'Xcode Simulator', icon: 'https://i.postimg.cc/CxJs21tG/temp-Image-D5e-GWF.avif'},
//                   { name: 'Git', icon: 'https://i.postimg.cc/Gp5FZCv0/git.png' },
//                   { name: 'Npm', icon: 'https://i.postimg.cc/wjxDMvV8/npm.png' },
//                   { name: 'Command Line', icon: 'https://i.postimg.cc/VNrr0b0T/command.png' },
//                   { name: 'VS Code', icon: 'https://i.postimg.cc/zvXqW9PB/vs-code.png' },
//                   { name: 'Slack', icon: 'https://i.postimg.cc/3RfcSVxW/slack.png' },
//                 ].map((tool, index) => (
//                   <div key={index} className="group relative w-20 h-20 bg-gray-700 dark:bg-gray-700 rounded-xl flex items-center justify-center shadow-lg cursor-help">
//                     <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
//                     <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                       {tool.name}
//                     </span>
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Section */}
//       <section id="portfolio" className="py-20 px-4">
//         <div className="container max-w-screen-xl mx-auto">
//           <div className="relative mb-12">
//             <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
//              My Works 
//             </h2>
//             <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
//               See my works which will amaze you!
//             </h2>
//             <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl">
//               We develop the best quality mobile Application that serves you in the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.
//             </p>
//           </div>

//           <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
//             {[
//               { 
//                 title: 'Pepul', 
//                 image: 'https://i.postimg.cc/9FMjNxLz/temp-Imagej4-I7c-Z.avif',
//                 link: 'https://apps.apple.com/in/app/pepul-social-network-app/id1571517301'
//               },
//               { 
//                 title: 'Eirad Owner', 
//                 image: 'https://i.postimg.cc/RCw3Z0mw/temp-Image-ICAs-Dc.avif',
//                 link: 'https://apps.apple.com/gt/app/eirad-owner/id6477288439' 
//               },
//               { 
//                 title: 'CHIKKU', 
//                 image: 'https://i.postimg.cc/nzgvbSvZ/temp-Imaged-Dl-Ut-A.avif',
//                 link: 'https://apps.apple.com/in/app/chikku/id6743438106'
//               }
//             ].map((project, index) => (
//               <div key={index} className="mb-6 break-inside-avoid relative group">
//                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl shadow-lg">
//                   <img 
//                     src={project.image} 
//                     alt={project.title} 
//                     className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
//                     <h3 className="text-white font-poppins font-bold bg-gray-900 dark:bg-gray-900 px-3 py-1 rounded shadow-lg transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                       {project.title}
//                     </h3>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>

//           <button className="text-amber-600 text-xl underline mx-auto block mt-8 hover:text-amber-500 transition-colors duration-300">
//             Load More Works
//           </button>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-4">
//         <div className="container max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12">
//           <div>
//             <div className="relative mb-12">
//               <p className="text-amber-600 uppercase font-bold tracking-wider mb-4">Contact</p>
//               <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white dark:text-white mb-6">
//                 Have you any project? Drop a message!
//               </h2>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 Get in touch and let me know if I can help! Fill out the form and I'll be in touch as soon as possible.
//               </p>
//             </div>

//             <ul className="space-y-6">
//               <li className="flex items-start gap-4">
//                 <IonIcon icon={callOutline} className="text-2xl text-white mt-1" />
//                 <div>
//                   <h3 className="text-white font-poppins font-bold mb-2">Phone:</h3>
//                   <a href="tel:6461234567" className="text-gray-400 block hover:text-white transition-colors duration-300">+91 8124118346</a>
//                 </div>
//               </li>
              
//               <li className="flex items-start gap-4">
//                 <IonIcon icon={mailOutline} className="text-2xl text-white mt-1" />
//                 <div>
//                   <h3 className="text-white font-poppins font-bold mb-2">Email:</h3>
//                   <a href="mailto:info@jack.com" className="text-gray-400 block hover:text-white transition-colors duration-300">mohankiosdev@gmail.com</a>
//                 </div>
//               </li>
//             </ul>

//             <ul className="flex flex-wrap gap-4 mt-8">
//               {[
//                 { img: 'https://i.postimg.cc/Gp5FZCv0/git.png', tooltip: 'Git', link: 'https://github.com/mohankarthigaimoorthy' },
//                 { img: 'https://i.postimg.cc/8PxSdtpW/temp-Imageuq-Ybo-I.avif', tooltip: 'LinkedIn', link: 'https://www.linkedin.com/in/mohan-k-948192191' }
//               ].map((social) => (
//                 <li key={social.tooltip}>
//                   <a 
//                     href={social.link} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="block relative group"
//                   >
//                     <img src={social.img} alt={social.tooltip} className="w-6 h-6" />
//                     <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {social.tooltip}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <form className="bg-gray-700 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
//             <div className="mb-6">
//               <label htmlFor="name" className="block text-white text-sm font-poppins mb-2">Name</label>
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   id="name" 
//                   required 
//                   placeholder="John Doe" 
//                   className="w-full bg-gray-800 dark:bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg focus:outline focus:outline-amber-600"
//                 />
//                 <IonIcon icon={personOutline} className="absolute left-3 top-3.5 text-gray-400 text-xl" />
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <label htmlFor="email" className="block text-white text-sm font-poppins mb-2">Email</label>
//               <div className="relative">
//                 <input 
//                   type="email" 
//                   id="email" 
//                   required 
//                   placeholder="johndoe@gmail.com" 
//                   className="w-full bg-gray-800 dark:bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg focus:outline focus:outline-amber-600"
//                 />
//                 <IonIcon icon={mailOutline} className="absolute left-3 top-3.5 text-gray-400 text-xl" />
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <label htmlFor="phone" className="block text-white text-sm font-poppins mb-2">Phone</label>
//               <div className="relative">
//                 <input 
//                   type="tel" 
//                   id="phone" 
//                   required 
//                   placeholder="Phone Number" 
//                   className="w-full bg-gray-800 dark:bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg focus:outline focus:outline-amber-600"
//                 />
//                 <IonIcon icon={callOutline} className="absolute left-3 top-3.5 text-gray-400 text-xl" />
//               </div>
//             </div>
            
//             <div className="mb-8">
//               <label htmlFor="message" className="block text-white text-sm font-poppins mb-2">Message</label>
//               <div className="relative">
//                 <textarea 
//                   id="message" 
//                   required 
//                   placeholder="Write your Message" 
//                   className="w-full bg-gray-800 dark:bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg h-32 focus:outline focus:outline-amber-600"
//                 ></textarea>
//                 <IonIcon icon={chatbubblesOutline} className="absolute left-3 top-3.5 text-gray-400 text-xl" />
//               </div>
//             </div>
            
//             <button 
//               type="submit" 
//               className="w-full bg-white text-gray-900 py-3 font-bold uppercase tracking-wider hover:bg-amber-600 hover:text-white transition-colors duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 dark:bg-gray-800 py-6 shadow-lg">
//         <div className="container max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//           <h1 className="text-2xl font-bold mb-4 md:mb-0">
//             <a href="#" className="text-white font-saira">Mohan.k<span className="text-amber-600">.</span></a>
//           </h1>
//           <p className="text-gray-400">
//             &copy; 2025 All rights reserved
//           </p>
//         </div>
//       </footer>

//       {/* Go Top Button */}
//       <button 
//         onClick={scrollToTop}
//         className={`fixed bottom-6 right-6 w-12 h-12 bg-gray-800 border-2 border-white text-white rounded-full flex items-center justify-center transition-all duration-300 ${scrollY >= 10 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//       >
//         <IonIcon icon={arrowUpOutline} className="text-xl" />
//       </button>
//     </div>
//   );
// };

// export default App;