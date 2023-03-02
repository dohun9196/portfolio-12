import { Link } from "react-router-dom"
const Header = ({ Gnb }) => {
    return (
        <>
            <header className="header">
                <div className="inner">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + `/img/logo.png`} alt="" />
                        </Link>
                    </h1>
                    <nav className="gnb">
                        <ul>
                            {Gnb.map((it, idx) => (
                                <li key={idx}>
                                    <Link to={it.link}>{it.NavTit}</Link>

                                    <ul className="drop_menu">
                                        {
                                            it.submenu.map((subit, idx) => (
                                                <li key={idx}>
                                                    <Link to={subit.lik}>{subit.tit}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div class="bar">
                        <i class="xi-bars"></i>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header; 