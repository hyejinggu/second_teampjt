// import joinStyle from '../../css/join/join.module.css';


// const Details = () => {



//     return (
//         <form action="#" method="post">
//             <figure>

//                 <table>
//                     <tr>
//                         <th><label htmlFor="user_id" className={joinStyle.required}>아이디</label></th>
//                         <td><input type="text" name="user_id" id="user_id" placeholder="아이디 입력(6~20자)" /></td>
//                     </tr>

//                     <tr>
//                         <th><label htmlFor="user_password" className={joinStyle.required}>비밀번호</label></th>
//                         <td><input type="password" name="user_password" id="user_password"
//                             placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)" />
//                         </td>
//                     </tr>

//                     <tr>
//                         <th><label htmlFor="user_password2" className={joinStyle.required}>비밀번호 확인</label></th>
//                         <td><input type="password" name="user_password2" id="user_password2"
//                             placeholder="비밀번호 재입력" /></td>
//                     </tr>

//                 </table>
//             </figure>
//             <input type="submit" value="Next" />
//         </form>
//     )
// }

// export default Details;


import React, { useState } from 'react';
import joinStyle from '../../css/join/join.module.css';

const Details = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        user_password: '',
        user_password2: '',
    });

    const [errors, setErrors] = useState({
        user_id: '',
        user_password: '',
        user_password2: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // 유효성 검사 실행
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        const newErrors = { ...errors };

        switch (fieldName) {
            case 'user_id':
                if (!value) {
                    newErrors.user_id = '아이디를 입력하세요.';
                } else if (value.length < 6 || value.length > 20) {
                    newErrors.user_id = '아이디는 6~20자 사이여야 합니다.';
                } else {
                    newErrors.user_id = '';
                }
                break;
            case 'user_password':
                if (!value) {
                    newErrors.user_password = '비밀번호를 입력하세요.';
                } else if (value.length < 8) {
                    newErrors.user_password = '비밀번호는 8자 이상이어야 합니다.';
                } else {
                    newErrors.user_password = '';
                }
                break;
            case 'user_password2':
                if (!value) {
                    newErrors.user_password2 = '비밀번호를 확인하세요.';
                } else if (value !== formData.user_password) {
                    newErrors.user_password2 = '비밀번호가 일치하지 않습니다.';
                } else {
                    newErrors.user_password2 = '';
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 유효성 검사 실행
        if (validateForm()) {
            // 유효성 검사 통과 시 다음 단계로 진행
            // 예: 다음 페이지로 이동
        }
    };

    const validateForm = () => {
        const newErrors = { ...errors };

        // 아이디, 비밀번호, 비밀번호 확인 필드의 유효성 검사를 진행합니다.
        validateField('user_id', formData.user_id);
        validateField('user_password', formData.user_password);
        validateField('user_password2', formData.user_password2);

        setErrors(newErrors);

        // 모든 필드의 유효성을 통과하면 true를 반환합니다.
        return Object.values(newErrors).every((error) => error === '');
    };

    return (
        <form action="#" method="post" onSubmit={handleSubmit}>
            <figure>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="user_id" className={joinStyle.required}>
                                    아이디
                                </label>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="user_id"
                                    id="user_id"
                                    placeholder="아이디 입력(6~20자)"
                                    value={formData.user_id}
                                    onChange={handleChange}
                                />
                            </td>
                            {errors.user_id && <div className="error">{errors.user_id}</div>}
                        </tr>
                        <tr>
                            <th><label htmlFor="user_password" className={joinStyle.required}>비밀번호</label></th>
                            <td>
                                <input
                                    type="password"
                                    name="user_password"
                                    id="user_password"
                                    placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8~20자)"
                                    value={formData.user_password}
                                    onChange={handleChange}
                                />
                            </td>
                            {errors.user_password && <div className="error">{errors.user_password}</div>}
                        </tr>
                        <tr>
                            <th><label htmlFor="user_password2" className={joinStyle.required}>비밀번호 확인</label></th>
                            <td>
                                <input
                                    type="password"
                                    name="user_password2"
                                    id="user_password2"
                                    placeholder="비밀번호 재입력"
                                    value={formData.user_password2}
                                    onChange={handleChange}
                                />
                            </td>
                            {errors.user_password2 && <div className="error">{errors.user_password2}</div>}
                        </tr>
                    </tbody>
                </table>
            </figure>
            <input type="submit" value="Next" />
        </form>
    );
};

export default Details;