import React from 'react';

const BestsellerList = ({ products }) => {
    return (
        <ul className="bestseller">
            {products.map((product, index) => (
                <li key={index}>
                    <div className="item_info_wrap">
                        <a href="#">
                            <img src={product.image} alt={`상품 ${index + 1}`} />
                            <h3>{product.name}</h3>
                            <span className="sale_info">{product.saleInfo}</span>
                            <span className="normal_pr">{product.normalPr}</span>
                            <span className="present_pr">{product.presentPr}</span>
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default BestsellerList;