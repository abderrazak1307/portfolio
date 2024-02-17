import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faBootstrap, faDocker, faGit, faGithub, faJira, faJs, faNeos, faNodeJs, faPython, faReact, faSlack } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const TechStack = () => (
  <section id="TechStack" className='section'>
    <h2 className='mb-4 text-4xl font-semibold' data-aos="fade-left" data-aos-anchor="#TechStack">Tech Stack &lt;/&gt;</h2>
    <p className="mb-8" data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#TechStack">In the realm of code, my primary stack expertise web development using primarly Javascript. From Node to React, Next.js to Express. I also have a good understanding of various DevOps tools for implementing an efficient CI/CD workflow.</p>

    <h3 className='mb-4 text-2xl font-semibold' data-aos="fade-left" data-aos-delay="200" data-aos-anchor="#TechStack">DevOps</h3>
    <div className="flex mb-8">
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-blue-600' data-aos="fade-left" data-aos-delay="300" data-aos-anchor="#TechStack" >
          <FontAwesomeIcon icon={faDocker} size='2x' className='me-2' />
          Docker
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-blue-600' data-aos="fade-left" data-aos-delay="400" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faDocker} size='2x' className='me-2' />
          Kubernetes
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-orange-600' data-aos="fade-left" data-aos-delay="700" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faAws} size='2x' className='me-2' />
          AWS
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-white' data-aos="fade-left" data-aos-delay="1000" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faGithub} size='2x' className='me-2' />
          Github<br></br>Actions
        </a>
      </div>
    </div>

    <h3 className='mb-4 text-2xl font-semibold' data-aos="fade-left" data-aos-delay="200" data-aos-anchor="#TechStack">Development</h3>
    {/* Backend */}
    <div className="flex mb-4">
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-green-600' data-aos="fade-left" data-aos-delay="700" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faNodeJs} size='2x' className='me-2' />
          Node.js
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-white-600' data-aos="fade-left" data-aos-delay="800" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faNodeJs} size='2x' className='me-2' />
          Express
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-blue-600' data-aos="fade-left" data-aos-delay="300" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faReact} size='2x' className='me-2' />
          React.js
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-white-600' data-aos="fade-left" data-aos-delay="400" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faNeos} size='2x' className='me-2' />
          Next.js
        </a>
      </div>
    </div>
    
    {/* Frontend */}
    <div className="flex mb-4">
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-purple-600' data-aos="fade-left" data-aos-delay="500" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faBootstrap} size='2x' className='me-2' />
          Bootstrap
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-blue-600' data-aos="fade-left" data-aos-delay="600" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faJs} size='2x' className='me-2' />
          TailwindCSS
        </a>
      </div>
    </div>

    {/* Databases */}
    <div className="flex mb-8">
      <div className="w-1/4">
        <a href="js.com" className='flex items-center' data-aos="fade-left" data-aos-delay="1000" data-aos-anchor="#TechStack">
            <FontAwesomeIcon icon={faDatabase} size='2x' className='me-2' />
          PostgreSQL
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center' data-aos="fade-left" data-aos-delay="900" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faDatabase} size='2x' className='me-2' />
          MySQL
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center' data-aos="fade-left" data-aos-delay="1100" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faDatabase} size='2x' className='me-2' />
          MongoDB
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center' data-aos="fade-left" data-aos-delay="1200" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faDatabase} size='2x' className='me-2' />
          Redis
        </a>
      </div>
    
    </div>

    {/* Misc */}
    <h3 className='mb-4 text-2xl font-semibold' data-aos="fade-left" data-aos-delay="200" data-aos-anchor="#TechStack">Misc</h3>
    <div className="flex mb-8">
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-yellow-600' data-aos="fade-left" data-aos-delay="300" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faPython} size='2x' className='me-2' />
          Python
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center hover:text-white' data-aos="fade-left" data-aos-delay="400" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faGit} size='2x' className='me-2' />
          Git
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center  hover:text-blue-600' data-aos="fade-left" data-aos-delay="500" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faJira} size='2x' className='me-2' />
          Jira
        </a>
      </div>
      <div className="w-1/4">
        <a href="js.com" className='flex items-center  hover:text-white' data-aos="fade-left" data-aos-delay="600" data-aos-anchor="#TechStack">
          <FontAwesomeIcon icon={faSlack} size='2x' className='me-2' />
          Slack
        </a>
      </div>
    </div>
  </section>
);
export default TechStack;
