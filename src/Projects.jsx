import test from './assets/test.png'

const Projects = () => (
    <section id="Projects" className='section'>
        <h2 className='mb-4 text-4xl font-semibold' data-aos="fade-left" data-aos-anchor="#Projects">Projects 🖥️</h2>
        <p className="mb-4" data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#Projects">In the part, I would love to talk a bit more in depth about projects which I&apos;ve participated in and learned new tech throughout.</p>
        <div className='md:flex mb-8 gap-10'>
            <div className="md:w-1/2 w-full hover:scale-105 transition-transform" data-aos="zoom-in" data-aos-delay="200">
                <img src={test} width='100%' className='rounded mb-3'></img>
                <h4 className='text-2xl mb-1'>E-healthcare platform</h4>
                <p className='text-slate-300  mb-2'>Microservices based architecture for a secure e-healthcare platform using: Docker, Kubernetes.</p>
                <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-1 bg-cyan-800/40 rounded-full text-l'>Docker</div>
                    <div className='px-3 py-1 bg-blue-800/40 rounded-full text-l'>Kubernetes</div>
                    <div className='px-3 py-1 bg-teal-800/40 rounded-full text-l'>Node.js</div>
                    <div className='px-3 py-1 bg-black-800/40 rounded-full text-l'>Express</div>
                </div>
            </div>
            <div className="md:w-1/2 w-full hover:scale-105 transition-transform" data-aos="zoom-in" data-aos-delay="300">
                <img src={test} width='100%' className='rounded mb-3'></img>
                <h4 className='text-2xl mb-1'>CPI Dashboard</h4>
                <p className='text-slate-300 mb-2'>An IoT dashboard for monitoring data center equipment in real-time.</p>
                <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-1 bg-teal-800/40 rounded-full text-l'>Node.js</div>
                    <div className='px-3 py-1 bg-black-800/40 rounded-full text-l'>Express</div>
                    <div className='px-3 py-1 bg-cyan-800/40 rounded-full text-l'>PostgreSQL</div>
                    <div className='px-3 py-1 bg-orange-800/40 rounded-full text-l'>SNMP</div>
                </div>
            </div>
        </div>
        <div className='md:flex mb-8 gap-10'>
            <div className="md:w-1/2 w-full hover:scale-105 transition-transform" data-aos="zoom-in" data-aos-delay="200">
                <img src={test} width='100%' className='rounded mb-3'></img>
                <h4 className='text-2xl mb-1'>CI/CD Workflow (Todo App)</h4>
                <p className='text-slate-300  mb-2'>Automated deployment workflow for a todo app (designed using React.js) using various CI/CD tools: GitHub Actions, Docker, Kubernetes.</p>
                <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-1 bg-teal-800/40 rounded-full text-l'>React.js</div>
                    <div className='px-3 py-1 bg-blue-800/40 rounded-full text-l'>Github&nbsp;Actions</div>
                    <div className='px-3 py-1 bg-cyan-800/40 rounded-full text-l'>Docker</div>
                    <div className='px-3 py-1 bg-cyan-800/40 rounded-full text-l'>Kubernetes</div>
                </div>
            </div>
            <div className="md:w-1/2 w-full hover:scale-105 transition-transform" data-aos="zoom-in" data-aos-delay="300">
                <img src={test} width='100%' className='rounded mb-3'></img>
                <h4 className='text-2xl mb-1'>Changelog Discord Bot</h4>
                <p className='text-slate-300 mb-2'>A bot written in Python for automated changelog announcement on each new release.</p>
                <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-1 bg-teal-800/40 rounded-full text-l'>Python</div>
                    <div className='px-3 py-1 bg-blue-800/40 rounded-full text-l'>Github&nbsp;Actions</div>
                </div>
            </div>
        </div>
        <div className='flex mb-8 gap-10'>
            <div className="md:w-1/2 w-full hover:scale-105 transition-transform" data-aos="zoom-in" data-aos-delay="500">
                <img src={test} width='100%' className='rounded mb-3'></img>
                <h4 className='text-2xl mb-1'>Unsure</h4>
                <p className='text-slate-300 mb-2'>A web scraper to get data.</p>
                <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-1 bg-teal-800/40 rounded-full text-l'>Node.js</div>
                    <div className='px-3 py-1 bg-black-800 rounded-full text-l'>Puppeteer</div>
                </div>
            </div>
        </div>

    </section>
);
export default Projects;
