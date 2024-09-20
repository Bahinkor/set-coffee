import React from "react";

const MoreInfoes = ({productData}) => {
  return (
    <div>
      <p>اطلاعات بیشتر :</p>
      <hr />
      <main>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>وزن</p>
          <p>{productData.weight} گرم</p>
        </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>مناسب برای</p>
          <p>{productData.suitableFor}</p>
        </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>میزان بو</p>
          <p>{productData.smell}</p>
        </div>
      </main>
    </div>
  );
};

export default MoreInfoes;
