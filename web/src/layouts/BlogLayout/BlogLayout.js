import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
    return (
        <>
            <header>
                <h1>
                    <Link to={routes.home()}>Redwood Blog</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={routes.about()}>About</Link>
                        </li>
                        <li>
                            <Link to={routes.contact()}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
        </>
    )
}

export default BlogLayout
