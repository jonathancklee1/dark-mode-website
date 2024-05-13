import avatar from '../assets/images/profile-picture.jpg'
function Footer() {
    return (
        <footer className="mx-auto flex items-center justify-center gap-2 bg-background-color px-12 py-14">
            <p className="text-center">
                A website made by&nbsp;
                <a
                    href="https://github.com/jonathancklee1"
                    className="underline hover:text-text-color"
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
