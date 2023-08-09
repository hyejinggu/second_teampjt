const Details = () => {

    return (
        <div className="right_contents">
            <form action="#" method="post">
                <figure>
                    <ul>
                        <li><a href="../html/profile.html">Proflie</a></li>
                        <li><a className="checking" href="../html/details.html">Details</a></li>
                        <li><a href="../html/information.html">information</a></li>
                        <li><a href="../html/agree.html">Agree</a></li>
                    </ul>
                    <table>
                        <tr>
                            <th><label for="user_id" className="required">아이디</label></th>
                            <td><input type="text" name="user_id" id="user_id" placeholder="아이디 입력(6~20자)" /></td>
                        </tr>

                        <tr>
                            <th><label for="user_password" className="required">비밀번호</label></th>
                            <td><input type="password" name="user_password" id="user_password"
                                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)" />
                            </td>
                        </tr>

                        <tr>
                            <th><label for="user_password2" className="required">비밀번호 확인</label></th>
                            <td><input type="password" name="user_password2" id="user_password2"
                                placeholder="비밀번호 재입력" /></td>
                        </tr>

                    </table>
                </figure>
                <input type="submit" value="Next" />
            </form>
        </div>
    )
}

export default Details;