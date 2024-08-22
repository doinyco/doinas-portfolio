
const Experience = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white dark:bg-gray-800 p-6 max-w-3xl mx-auto rounded-lg shadow-lg overflow-y-auto h-3/4">
            <button
            className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-2xl font-bold"
            onClick={onClose}
            >
            &times;
            </button>
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Experience</h1>
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Amazon</h2>
                <h4 className="text-sm text-gray-600 dark:text-gray-400">08/2022 - 01/2023</h4>
                <h3 className="text-lg font-medium mt-2">Software Engineering Apprentice</h3>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                    <li>Contributed to causal machine learning systems for financial forecasting using Spark on AWS.</li>
                    <li>Migrated features from Apache Pig to Scala Spark, enhancing system quality.</li>
                    <li>Led feature implementation and validation in Scala Spark on AWS cloud.</li>
                    <li>Optimized feature generation run time by 40%.</li>
                    <li>Worked with big data processing technologies and AWS cloud services.</li>
                    <li>Tech stack: Scala, Java, Spark, Mockito, AWS (EMR, S3, EC2).</li>
                </ul>
            </div>

            <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Education</h1>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Ada Developers Academy Advanced Cohort</h2>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">05/2024 - 01/2025</h4>
            <h3 className="text-lg font-medium mt-2">Returning Software Engineering Student</h3>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Ada Developers Academy</h2>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">02/2022 - 01/2023</h4>
            <h3 className="text-lg font-medium mt-2">Full-stack Software Engineering Student</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                <li>Developed "My Next Gym" app using React and Google Maps API.</li>
                <li>Tech stack: Python, JavaScript, HTML, CSS, Flask, React, PostgreSQL, Heroku, Git, GitHub Pages, Postman, Pytest.</li>
            </ul>
            </div>

            <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Lake Washington Institute of Technology</h2>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">09/2019 - 05/2021</h4>
            <h3 className="text-lg font-medium mt-2">Student</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                <li>Completed classes in Math and Communication.</li>
            </ul>
            </div>

            <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Moldova State University</h2>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">09/2014 - 07/2017</h4>
            <h3 className="text-lg font-medium mt-2">Bachelor's Degree - Psychology</h3>
            </div>
        </div>
        </div>
    );
};

export default Experience;