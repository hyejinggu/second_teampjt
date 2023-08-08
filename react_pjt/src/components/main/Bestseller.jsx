import '../../common/css/Bestseller.css'

const Bestseller = () => {

    return (
        <div className='bestseller_wrap'>
            <h1>베스트 셀러 상품</h1>
            <div className="bestseller_list">
                <a href="#">
                    <h2>간식, 사료</h2>
                </a>
                <a href="./pjt/main/html/main_best_toy.html">
                    <h2>장난감</h2>
                </a>
                <a href="">
                    <h2>리빙, 패션</h2>
                </a>
                <a href="">
                    <h2>산책, 케어</h2>
                </a>
            </div>
            <ul className="bestseller">
                <li>
                    <div className="item_info_wrap">
                        <a href="#">
                        {/* bestseller2.png */}
                            <img src={"../../public/images/logo.png"} alt="상품 1" />
                                <h3>(간식) 진짜 연어</h3>
                                <span className="sale_info">30%</span>
                                <span className="normal_pr">39,900원</span>
                                <span className="present_pr">27,900원</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="item_info_wrap">
                        <a href="#">
                            {/* <img src="./pjt/main/image/bestseller3.jpeg" alt="상품 2"> */}
                            <img src={"../../public/images/logo.png"} alt="상품 1" />
                                <h3>(수입) 멍멍 사료</h3>
                                <span className="sale_info">20%</span>
                                <span className="normal_pr">39,900원</span>
                                <span className="present_pr">31,900원</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="item_info_wrap">
                        <a href="#">
                            {/* <img src="./pjt/main/image/bestseller4.png" alt="상품 2"> */}
                            <img src={"../../public/images/logo.png"} alt="상품 1" />
                                <h3>하루 유산균</h3>
                                <span className="sale_info">10%</span>
                                <span className="normal_pr">40,000원</span>
                                <span className="present_pr">36,000원</span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="item_info_wrap">
                        <a href="#">
                            {/* <img src="./pjt/main/image/bestseller5.png" alt="상품 2"> */}
                            <img src={"../../public/images/logo.png"} alt="상품 1" />
                                <h3>아침애 사료 (다이어트)</h3>
                                {/* <span className="sale_info">30%</span>
                                <span className="normal_pr">30%</span> */}
                                <span className="sale_info">30%</span>
                                <span className="normal_pr">29,900원</span>
                                <span className="present_pr">20,900원</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Bestseller;