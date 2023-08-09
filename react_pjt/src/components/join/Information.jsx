const Information = () => {

    return (
        <div className="right_contents">
            <form action="#" method="post">
                <figure>
                    <ul>
                        <li><a href="../html/profile.html">Proflie</a></li>
                        <li><a href="../html/details.html">Details</a></li>
                        <li><a className="checking" href="../html/information.html">Information</a></li>
                        <li><a href="../html/agree.html">Agree</a></li>
                    </ul>
                    <table>
                        <tr>
                            <th>
                                <label for="ani_name">반려동물 이름</label>
                            </th>
                            <td>
                                <input type="text" name="ani_name" id="ani_name" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="ani_bday">반려동물 생일</label>
                            </th>
                            <td>
                                <input type="text" name="ani_bday" id="ani_bday" placeholder="ex) 20230203" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="ani_gender">반려동물 성별</label>
                            </th>
                            <td className="ani_gender">
                                <input type="radio" name="ani_gender" id="male" />
                                <label for="male">남아</label>
                                <input type="radio" name="ani_gender" id="female" />
                                <label for="female">여아</label>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="ani_character">반려동물 특성</label>
                            </th>
                            <td className="ani_character">
                                <textarea name="ani_character" id="ani_character" cols="84" rows="3"></textarea>
                            </td>
                        </tr>



                    </table>
                </figure>
                <input type="submit" value="Next" />
            </form>
        </div>
    )
}

export default Information;