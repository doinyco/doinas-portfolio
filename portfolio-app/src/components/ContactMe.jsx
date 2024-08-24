
const ContactMe = () => {
    return (
        <div className="contact-section space-y-4">
            <div className="flex space-x-4 items-center">
                <a
                    href="https://github.com/doinyco"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        className="w-5 h-5 github-icon transition-transform duration-300 hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 .5a12 12 0 00-3.794 23.4c.6.1.794-.256.794-.57v-2.2c-3.232.7-3.909-1.55-3.909-1.55-.546-1.36-1.332-1.725-1.332-1.725-1.087-.74.083-.73.083-.73 1.2.084 1.833 1.24 1.833 1.24 1.067 1.82 2.8 1.29 3.486.985.1-.776.418-1.29.763-1.59-2.577-.3-5.285-1.29-5.285-5.748 0-1.27.44-2.31 1.168-3.12-.118-.3-.508-1.52.117-3.15 0 0 .97-.31 3.18 1.18a11.02 11.02 0 015.81 0c2.2-1.49 3.18-1.18 3.18-1.18.625 1.63.235 2.85.118 3.15.725.81 1.168 1.85 1.168 3.12 0 4.47-2.715 5.44-5.295 5.72.43.38.815 1.1.815 2.24v3.33c0 .32.195.68.805.56A12 12 0 0012 .5z" />
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/doina-c/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        className="w-5 h-5 linkedin-icon transition-transform duration-300 hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.12 20.45H3.56V9.01h3.56zm-1.78-13c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06-.01 1.14-.93 2.06-2.06 2.06zM20.45 20.45h-3.56V14.6c0-1.4-.03-3.21-1.96-3.21-1.96 0-2.26 1.53-2.26 3.11v6h-3.56V9.01h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54v6.21z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ContactMe;