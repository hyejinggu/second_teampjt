import React from 'react';
import '../../css/main/bestseller.css';
import "../../css/common/reset.css";
import "../../css/common/common.css";
import BestsellerList from './BestsellerList';


const Bestseller = () => {
    const products = [
        {
            name: "(간식) 진짜 연어",
            saleInfo: "30%",
            normalPr: "39,900원",
            presentPr: "27,900원",
            image: "/images/main/bestseller2.png",
        }, {
            name: "(수입) 멍멍 사료",
            saleInfo: "20%",
            normalPr: "39,900원",
            presentPr: "31,900원",
            image: "/images/main/bestseller3.jpeg",
        }, {
            name: "하루 유산균",
            saleInfo: "10%",
            normalPr: "40,000원",
            presentPr: "36,000원",
            image: "/images/main/bestseller4.png",
        }, {
            name: "아침애 사료 (다이어트)",
            saleInfo: "30%",
            normalPr: "29,900원",
            presentPr: "20,900원",
            image: "/images/main/bestseller5.png",
        },
    ];
    return (
        <div className='bestseller_wrap'>
            <h1>베스트 셀러 상품</h1>
            <div className="bestseller_list">
            <a href="#">
                <h2>간식, 사료</h2>
            </a>
            <a href="">
                <h2>장난감</h2>
            </a>
            <a href="">
                <h2>리빙, 패션</h2>
            </a>
            <a href="">
                <h2>산책, 케어</h2>
            </a>
            </div>
            <BestsellerList products={products} />
        </div>
    );
};

export default Bestseller;