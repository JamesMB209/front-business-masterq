import React from "react";
import { useSelector } from "react-redux";

const BillboardComponent = () => {
  const businessObjectStore = useSelector((state) => state.businessObjectStore);
  const apiStore = useSelector((state) => state.apiStore);

  return (
    <>
      {apiStore === undefined ? (
        <h4>Billboard Error</h4>
      ) : (
        apiStore.map((doctorDetail) => {
          return (
            <div key={doctorDetail.id}>
              <h2>{doctorDetail.name}</h2>
              {businessObjectStore[doctorDetail.id].queue === undefined ? (
                <h4>BIG FAT ERROR NO BUSINESSOBJECTSTORE</h4>
              ) : (
                businessObjectStore[doctorDetail.id].queue.map((e) => {
                  return <p>{e.f_name}</p>;
                })
              )}
            </div>
          );
        })
      )}
    </>
  );
};

export default BillboardComponent;
