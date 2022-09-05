import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
    return (
        <>
            <MetaTags title="About" description="About page" />

            <header>
                <h1>Redwood Blog</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={routes.about()}>About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>Home</main>
            <p>Redwood link examples</p>
            <Link to={routes.home()}>Return Home</Link>
        </>
    )
}

export default AboutPage
