const Header = ({ Gnb }) => {
    return (
        <>
            <header className="header">
                <div className="inner">
                    <h1>
                        <a href="/">
                            <img src="./img/tree_logo.png" alt="" />
                        </a>
                    </h1>
                    <nav className="gnb">
                        <ul>
                            {Gnb.map((it, idx) => (
                                <li key={idx}>
                                    <a href={it.link}>{it.NavTit}</a>
                                    <ul className="drop_menu">
                                        {
                                            it.submenu.map((subit, idx) => (
                                                <li key={idx}>
                                                    <a href={subit.lik}>{subit.tit}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header; 