import avatar from '../assets/images/profile-picture.jpg'
function Footer() {
    return (
        <footer className="content-container flex items-center justify-center gap-2 bg-background-color">
            <p className="text-center">
                A website made by&nbsp;
                <a
                    href="https://github.com/jonathancklee1"
                    target="_blank"
                    className="text-text-color underline hover:text-accent-color"
                >
                    Jonathan Lee
                </a>
            </p>
            <div className="size-8 flex-shrink-0 overflow-hidden rounded-full">
                <img src={avatar} alt="profile picture" />
            </div>
        </footer>
    )
}

export default Footer
