const projects = [
    {
        title: 'Plan My Trip',
        description: 'A web app that helps users plan their trips with suggested itineraries, accommodations, and restaurants.',
        link: 'https://github.com/doinyco/plan-my-trip-backend',
        image: 'https://afar.brightspotcdn.com/dims4/default/dc5cf24/2147483647/strip/true/crop/2160x1080+0+164/resize/2880x1440!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fcd%2F82%2Fe5821197681c4d25c932a2ae069b%2Foriginal-road-trip.jpg',
    },
    {
        title: 'Connect',
        description: 'A web app that helps users connect and find networking events in their area.',
        link: 'https://www.youtube.com/watch?v=e1TZms_Ms8w&t=182s',
        image: 'https://images.squarespace-cdn.com/content/v1/603c2cf40d3b11630e44cea8/1683153806993-UFRS604CY16TZUN6B0PK/LIW-Blog-GMB+-+2023-05-03T183839.739.jpg?format=1000w'
    },
    {
        title: 'Chatbot-app',
        description: 'An AI chatbot applicatin that helps users with their questions.',
        link: 'https://www.youtube.com/watch?v=GIxmI2cO_YU',
        image: 'https://www.phoenixs.co.uk/wp-content/uploads/2021/02/Chatbot-Banner-1800x400.jpg'
    },
    {
        title: 'My Next Gym',
        description: 'A web application that helps users find gyms based on a ',
        link: 'https://www.youtube.com/watch?v=VFmsh5oNHYA',
        image: 'https://media1.popsugar-assets.com/files/thumbor/bn4M5T6eZMJdDK7rl9m2zdrPr0o=/fit-in/1584x1056/top/filters:format_auto():upscale()/2018/11/26/126/n/1922729/c5a3c1018831a0bb_GettyImages-907504500.jpg'
    },
    {
        title: 'Inspiration Board',
        description: 'A platform for users to create and share inspiration boards.',
        link: 'https://github.com/fdang836/back-end-inspiration-board?',
        image: 'https://i0.wp.com/aletajacobsonartist.com/wp-content/uploads/2021/11/IMG-4493.jpg?resize=1536%2C1025&ssl=1'
    },
    {
        title: 'Weather Report',
        description: 'An app that provides users with the current weather conditions and forecast.',
        link: 'https://github.com/doinyco/weather-report?',
        image: 'https://s3.amazonaws.com/www-inside-design/uploads/2018/05/weather-app-4_feature-810x810.jpg'
    },
    {
        title: 'Chatlog',
        description: 'An chatlog application that helps users keep track of their conversations.',
        link: 'https://github.com/doinyco/react-chatlog?',
        image: 'https://t3.ftcdn.net/jpg/03/38/07/94/240_F_338079451_OjYWdOAb8xE7zyOyvPYRrfRe4OkAp394.jpg'
    },
    {
        title: 'Task List API',
        description: 'CRUD API for a task list',
        link: 'https://github.com/doinyco/task-list-api?',
        image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_638884198_366705.jpg'
    },
    {
        title: 'JS Adagram',
        description: 'A JavaScript version of the popular word game Anagram',
        link: 'https://github.com/doinyco/js-adagrams?',
        image: 'https://i.etsystatic.com/5376917/r/il/47afaa/5798160692/il_fullxfull.5798160692_n9k0.jpg'
    }
];

function Projects() {
    return (
        <div className="w-full flex justify-center py-8 bg-white dark:bg-gray-800">
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {projects.map((project, index) => (
            <div
                key={index}
                className={`relative w-64 bg-transparent border border-gray-300 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 dark:border-gray-700`}
                style={{
                transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                }}
            >
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {project.description}
                </p>
                {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-1 px-2 mt-4 bg-gray-300 text-gray-800 rounded-sm hover:bg-gray-400 transition-colors duration-300 text-xs"
                >
                    View Project
                </a>
                )}
            </div>
            ))}
        </div>
        </div>
    );
}

export default Projects;