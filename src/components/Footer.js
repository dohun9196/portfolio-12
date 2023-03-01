const Footer = () => {

    return (
        <footer className="footer">
            <div className="top">
                <div className="inner">
                    <ul>
                        <li className="f_list_fir"><a href="#!">개인정보처리방침</a></li>
                        <li><a href="#!">이용약관</a></li>
                        <li><a href="#!">이메일무단수집금지</a></li>
                        <li><a href="#!">제휴/제안</a></li>
                        <li><a href="#!">건축/시설물 안전관리</a></li>
                        <li><a href="#!">신용평가</a></li>
                        <li><a href="#!">윤리경영</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="inner">
                    <figure>
                        <img src={process.env.PUBLIC_URL + `/img/flogo.png`} alt="" />
                    </figure>
                    <address>
                        <ul>
                            <li>전북 전주시 덕진구 전주천동로 473 (금암동, 르네블루빌딩) 우편번호 54932</li>
                            <li>사업자등록번호 418-81-10256</li>
                            <li>대표전화 063-232-2244</li>
                            <li>팩스 063-232-2241</li>
                        </ul>
                        <div className="copy">&copy;2020 RENE BLEU SHINSUNG CONSTRUCTION CORP. All rights reserved</div>
                    </address>
                </div>
            </div>
        </footer>
    )
}

export default Footer;