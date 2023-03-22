import React from "react";

const ProductCard = () => {
  return (
    <div className="card">
      <img
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bdbed338-76cb-413e-8453-5a222a33dd7e/%EB%A0%88%EB%B3%BC%EB%A3%A8%EC%85%98-6-%EB%84%A5%EC%8A%A4%ED%8A%B8-%EB%84%A4%EC%9D%B4%EC%B2%98-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%9F%AC%EB%8B%9D%ED%99%94-HZyd5KOt.png"
        alt=""
      />
      <div className="best">베스트샐러</div>
      <div className="name">제품명</div>
      <div className="price">가격</div>
      <div className="new">신제품</div>
    </div>
  );
};

export default ProductCard;
