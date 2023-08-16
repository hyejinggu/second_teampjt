import joinStyle from '../../css/join/join.module.css';


const Details = () => {

    return (
        <form action="#" method="post">
            <figure>

                <table>
                    <tr>
                        <th><label htmlFor="user_id" className={joinStyle.required}>아이디</label></th>
                        <td><input type="text" name="user_id" id="user_id" placeholder="아이디 입력(6~20자)" /></td>
                    </tr>

                    <tr>
                        <th><label htmlFor="user_password" className={joinStyle.required}>비밀번호</label></th>
                        <td><input type="password" name="user_password" id="user_password"
                            placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)" />
                        </td>
                    </tr>

                    <tr>
                        <th><label htmlFor="user_password2" className={joinStyle.required}>비밀번호 확인</label></th>
                        <td><input type="password" name="user_password2" id="user_password2"
                            placeholder="비밀번호 재입력" /></td>
                    </tr>

                </table>
            </figure>
            <input type="submit" value="Next" />
        </form>
    )
}

export default Details;