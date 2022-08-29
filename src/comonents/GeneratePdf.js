import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

// import { ComponentToPrint } from './ComponentToPrint';
import { DataComponent } from "./DataComponent";

const GeneratePdf = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <div className="text-end pt-4 pe-3">
            {" "}
            <button>Print this out!</button>{" "}
          </div>
        )}
        content={() => componentRef.current}
        onBeforePrint={() => (document.title = "R15 Racing")}
      />
      <DataComponent ref={componentRef} />
    </div>
  );
};

export default GeneratePdf;
