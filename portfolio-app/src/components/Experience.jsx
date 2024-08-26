import React, { useState, useEffect } from 'react';

const Experience = ({ onClose, darkMode }) => {
    const overlayColor = darkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)';

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: overlayColor }} >
            <div className="relative bg-white dark:bg-[#242124] p-6 max-w-3xl mx-auto rounded-lg shadow-lg overflow-y-auto h-3/4">
                <button
                    className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Experience</h1>
                <div className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-4">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Amazon</h2>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">08/2022 - 01/2023</h4>
                    <h3 className="text-lg font-medium mt-2">Software Engineering Apprentice</h3>
                    <ul className="custom-list mt-2 text-gray-700 dark:text-gray-300">
                        <li>Contributed to causal machine learning systems for financial forecasting using Spark on AWS.</li>
                        <li>Migrated features from Apache Pig to Scala Spark, enhancing system quality.</li>
                        <li>Led feature implementation and validation in Scala Spark on AWS cloud.</li>
                        <li>Optimized feature generation runtime by 40%.</li>
                        <li>Worked with big data processing technologies and AWS cloud services.</li>
                        <li><strong>Tech stack:</strong> Scala, Java, Spark, Mockito, AWS (EMR, S3, EC2).</li>
                    </ul>
                </div>
                <div className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Education</h2>

                <div className="mt-4">
                    <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Ada Developers Academy Advanced Cohort</h3>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">05/2024 - 08/2024</h4>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Software Engineering Student</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li>Completed advanced coursework in computer science and developed AI-powered applications.</li>
                        <li>Developed "Plan My Trip" app using Leaflet.js and the OpenAI API.</li>
                        <li><strong>Tech stack:</strong> Python, Flask, React, PostgreSQL, OpenAI API, Leaflet.js.</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Ada Developers Academy</h3>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">02/2022 - 01/2023</h4>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Full-stack Software Engineering Student</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li>Developed "My Next Gym" app using React and Google Maps API.</li>
                        <li><strong>Tech stack:</strong> Python, JavaScript, Flask, React, PostgreSQL, Heroku.</li>
                    </ul>
                </div>
            </div>
                <div className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Lake Washington Institute of Technology</h2>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">09/2019 - 05/2021</h4>
                    <h3 className="text-lg font-medium mt-2">Student</h3>
                    <ul className="custom-list mt-2 text-gray-700 dark:text-gray-300">
                        <li>Completed courses in Math and Communication.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Moldova State University</h2>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">09/2014 - 07/2017</h4>
                    <h3 className="text-lg font-medium mt-2">Bachelor's Degree - Psychology</h3>
                </div>
            </div>
        </div>
    );
};

export default Experience;