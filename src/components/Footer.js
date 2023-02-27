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
                        <li><a href="#!">회원권만기반환</a></li>
                        <li><a href="#!">회원혜택</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="inner">
                    <figure>
                        <img src="./img/tree_logo.png" alt="" />
                    </figure>
                    <address>
                        <ul>
                            <li>부산광역시 oo구 oo동 oo로 123번길</li>
                            <li>사업자등록번호: 012-34-56789</li>
                            <li>tel: 051-123-4567</li>
                            <li>fax: 051-234-5678</li>
                            <li>대표자: ooo</li>
                        </ul>
                        <div className="copy">&copy;2023 RESROT. All Rights Reserved.</div>
                    </address>
                </div>
            </div>
        </footer>
    )
}

export default Footer;