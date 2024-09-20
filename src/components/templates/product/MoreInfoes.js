import React from "react";

const MoreInfoes = ({data}) => {
  return (
    <div>
      <p>اطلاعات بیشتر :</p>
      <hr />
      <main>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>وزن</p>
          <p>{data} گرم</p>
        </div>
      </main>
    </div>
  );
};

export default MoreInfoes;
