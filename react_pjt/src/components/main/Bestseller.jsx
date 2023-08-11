import React, { useState } from 'react';
import '../../css/main/bestseller.css';
import "../../css/common/common.css";
import BestsellerList from './BestsellerList';


const Bestseller = () => {
    const [products, setProducts] = useState([
        // 초기 상품 정보 배열
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
    ]);

    const snackProducts = [
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

    const toyProducts = [
        {
            name: "알록달록 로프 장난감",
            saleInfo: "10%",
            normalPr: "13,000원",
            presentPr: "11,700원",
            image: "/images/subpage/item1_1.jpg",
        }, {
            name: "당근밭에서 당근 난다",
            saleInfo: "20%",
            normalPr: "18,000원",
            presentPr: "14,400원",
            image: "/images/subpage/item5_1.jpg",
        }, {
            name: "도토리를 찾아라!",
            saleInfo: "10%",
            normalPr: "13,000원",
            presentPr: "11,700원",
            image: "/images/subpage/item3_1.jpg",
        }, {
            name: "돌려 돌려 미로",
            saleInfo: "30%",
            normalPr: "21,000원",
            presentPr: "14,700원",
            image: "/images/subpage/item6.jpg",
        },
    ];

    const livingProducts = [
        // ... 다른 상품들
    ];

    const careProducts = [
        // ... 다른 산책 상품들
    ];


    // 각 링크를 클릭할 때 실행되는 함수
    const handleLinkClick = (event, newProducts) => {
        event.preventDefault();
        setProducts(newProducts);
    };

    return (
        <div className='bestseller_wrap'>
            <h1>베스트 셀러 상품</h1>
            <div className="bestseller_list">
                <a href="#" onClick={(event) => handleLinkClick(event, snackProducts)}>
                    <h2>간식, 사료</h2>
                </a>
                <a href="#" onClick={(event) => handleLinkClick(event, toyProducts)}>
                    <h2>장난감</h2>
                </a>
                <a href="#" onClick={(event) => handleLinkClick(event, livingProducts)}>
                    <h2>리빙, 패션</h2>
                </a>
                <a href="#" onClick={(event) => handleLinkClick(event, careProducts)}>
                    <h2>산책, 케어</h2>
                </a>
            </div>
            <BestsellerList products={products} />
        </div>
    );
};

export default Bestseller;