const projects = [
    {
        title: 'Plan My Trip',
        description: 'A web app that helps users plan their trips with suggested itineraries, accommodations, and restaurants.',
        link: 'https://github.com/doinyco/plan-my-trip-backend',
        image: 'https://t4.ftcdn.net/jpg/05/45/90/59/360_F_545905919_qpA9rMWgzRkxv3FBoZuUQ3aYSvfKo46J.jpg',
    },
    {
        title: 'Connect',
        description: 'A web app that helps users connect and find networking events in their area.',
        link: 'https://www.youtube.com/watch?v=e1TZms_Ms8w&t=182s',
        image: 'https://t3.ftcdn.net/jpg/02/74/44/20/360_F_274442016_5Jd0yr9vpjm2MH2O5AM5uRV5oQYDCCi7.jpg'
    },
    {
        title: 'Chatbot-app',
        description: 'An AI chatbot applicatin that helps users with their questions.',
        link: 'https://www.youtube.com/watch?v=GIxmI2cO_YU',
        image: 'https://www.247.ai/sites/default/files/styles/wx550/public/image/content/hero_banner/all-about-ai-powered-chatbots-banner.jpg.webp'
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
        <div className="projects-wrapper">
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card`}
                        style={{
                            transform: `rotate(${index % 2 === 0 ? '-4deg' : '4deg'})`,
                        }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
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