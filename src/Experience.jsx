const Experience = () => (
    <div id="Experience" className="section">
        <h2 className='mb-2 text-4xl font-semibold' data-aos="fade-left" data-aos-anchor="#Experience">Professional Experience</h2>
        <div className="flex" data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#Experience">
            <div className="w-4/12">
                <h4 className="font-semibold text-xl">Jan 2022 - Jun 2022</h4>
            </div>
            <div className="w-8/12">
                <h4 className="font-semibold text-xl">Internship</h4>
                <p className="mb-2"> Centre de Précompensation Interbencaire, Algiers, Algeria.</p>
                <ul className="list-[disc] ms-4">
                    <li>Designed and participated in developing an IoT platform for real-time remote monitoring of data center equipment (CPI Dashboard).</li>
                    <li>Collaborated for successful testing and deployment of CPI Dashboard.</li>
                </ul>
            </div>
        </div>
        <h2 className='mb-2 text-4xl font-semibold' data-aos="fade-left" data-aos-delay="200" data-aos-anchor="#Experience">Education</h2>
        <div className="flex mb-4" data-aos="fade-left" data-aos-delay="300" data-aos-anchor="#Experience">
            <div className="w-4/12">
                <h4 className="font-semibold text-xl">Sep 2022 - Jul 2024</h4>
            </div>
            <div className="w-8/12">
                <h4 className="font-semibold text-xl">Masters in Information System Security</h4>
                <p className="mb-2"> USTHB, Algiers, Algeria.</p>
                <ul className="list-[disc] ms-4">
                    <li>Masters thesis was a proposal for a secure e-healthcare platform based on a microservices architecture using Blockchain technology.</li>
                    <li>Cryptography, Networks, Operating System Security.</li>
                    <li>GPA: 16.50 / 20 (Valedictorian).</li>
                </ul>
            </div>
        </div>
        <div className="flex mb-4" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="#Experience">
            <div className="w-4/12">
                <h4 className="font-semibold text-xl">Sep 2019 - Jul 2022</h4>
            </div>
            <div className="w-8/12">
                <h4 className="font-semibold text-xl">Bachelors in Software Engineering</h4>
                <p className="mb-2"> USTHB, Algiers, Algeria.</p>
                <ul className="list-[disc] ms-4">
                    <li>Bachelors&apos;s thesis was an internship at CPI, worked on the CPI Dashboard.</li>
                    <li>Algorithms & Data Structures, OOP, Databases, Operating Systems.</li>
                    <li>GPA: 16.28 / 20 (Valedictorian).</li>
                </ul>
            </div>
        </div>
        <div className="flex mb-8" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="#Experience">
            <div className="w-4/12">
                <h4 className="font-semibold text-xl">Sep 2016 - Jul 2019</h4>
            </div>
            <div className="w-8/12">
                <h4 className="font-semibold text-xl">B.A.C Math (High School Degree)</h4>
                <p className="mb-2"> Ibn Rochd High School, Blida, Algeria </p>
                <ul className="list-[disc] ms-4">
                    <li>GPA: 16.36 / 20.</li>
                </ul>
            </div>
        </div>
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="#Experience">
            <a href="/cv/Brahim Abderrazak Resumé.pdf" target="_blank" className="btn outline outline-1 outline-blue-500 px-4 py-2 rounded text-white hover:outline-blue-600" data-aos-anchor="#Experience">
                View my Resumé
            </a>
        </div>
    </div>
);
export default Experience;
