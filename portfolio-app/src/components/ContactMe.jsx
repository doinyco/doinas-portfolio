const ContactMe = () =>{
    return (
        <div className="contact-section space-y-4">
            <div className="flex space-x-4 items-center">
                <a
                href="https://github.com/doinyco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
                >
                <img
                    src="https://www.svgrepo.com/show/217753/github.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                />
                </a>
                <a
                href="https://www.linkedin.com/in/doina-c/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
                >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                />
                </a>
            </div>
        </div>
    );
}

export default ContactMe;