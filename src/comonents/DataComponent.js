import React, { forwardRef } from "react";
import Image from "../assets/logo.png";
const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal",
};

export const DataComponent = forwardRef((props, ref) => {
  return (
    <div>
      <div style={{width:"900px",height:"600px",margin:"auto"}}>
      <div className="p-5" ref={ref}>
      <p>Date:28/8/12</p>
      <div className="text-center mb-3">
        <img src={Image} alt="..." width={120} height={120} />
        <p className="mb-1 pt-2">MINISTRY OF PUBLIC ADMINISTRATION</p>
        <p className="mb-1">PUBLIC ADMINISTRATION COMPUTER CENTRE (PACC)</p>
        <p className="mb-1">SHORT PDS OF OFFICER</p>
      </div>

      <div className="d-flex">
        <p className="w-25">
          GOVT ID: <span className="text-muted">5216</span>
        </p>
        <div className="d-flex justify-content-between w-100 ps-4">
          <p>
            NAME: <span className="text-muted">K M ALI AZAM</span>
          </p>
          <p>
            NAME(BN): <span className="text-muted">কে এম আলী আজম</span>
          </p>
        </div>
      </div>
      <div>
        <p>GENERAL INFORMATION</p>
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">FATHER'S NAME: </p>
              <p className="text-muted w-50 ps-1">LATE K M MAHBUBOR RAHMAN</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">DATE OF BIRTH: </p>
              <p className="text-muted w-50 ps-1">03/11/63</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">RANK: </p>
              <p className="text-muted w-50 ps-1">SECRETARY</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">DESIGNATION: </p>
              <p className="text-muted w-50 ps-1">SENIOR SECRETARY</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">ORDER DATE: </p>
              <p className="text-muted w-50 ps-1">09/05/21</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">CADRE: </p>
              <p className="text-muted w-50 ps-1">BCS(ADMINISTRATION)</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">BATCH: </p>
              <p className="text-muted w-50 ps-1">8TH</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">GENDER: </p>
              <p className="text-muted w-50 ps-1">MALE</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">MARITAL STATUS: </p>
              <p className="text-muted w-50 ps-1">MARRIED</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">FREEDOM FIGHTER: </p>
              <p className="text-muted w-50 ps-1">NO</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">MOBILE: </p>
              <p className="text-muted w-50 ps-1">01713221674</p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">FATHER'S NAME: </p>
              <p className="text-muted w-50 ps-1">LATE K M MAHBUBOR RAHMAN</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">DATE OF BIRTH: </p>
              <p className="text-muted w-50 ps-1">03/11/63</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">RANK: </p>
              <p className="text-muted w-50 ps-1">SECRETARY</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">DESIGNATION: </p>
              <p className="text-muted w-50 ps-1">SENIOR SECRETARY</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">ORDER DATE: </p>
              <p className="text-muted w-50 ps-1">09/05/21</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">CADRE: </p>
              <p className="text-muted w-50 ps-1">BCS(ADMINISTRATION)</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">BATCH: </p>
              <p className="text-muted w-50 ps-1">8TH</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">GENDER: </p>
              <p className="text-muted w-50 ps-1">MALE</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">MARITAL STATUS: </p>
              <p className="text-muted w-50 ps-1">MARRIED</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">FREEDOM FIGHTER: </p>
              <p className="text-muted w-50 ps-1">NO</p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="text-end w-50">MOBILE: </p>
              <p className="text-muted w-50 ps-1">01713221674</p>
            </div>
          </div>
        </div>
      </div>
      {/* <table style={thStyle} className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Product A</th>
            <th>Product B</th>
            <th>Product C</th>
            <th>Product D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company A</td>
            <td>5</td>
            <td>6</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Company B</td>
            <td>1</td>
            <td>5</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Company C</td>
            <td>1</td>
            <td>6</td>
            <td>8</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Company D</td>
            <td>1</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Company E</td>
            <td>3</td>
            <td>0</td>
            <td>3</td>
            <td>0</td>
          </tr>
          <tr>
            <td>
              <strong>Gross Total</strong>
            </td>
            <td>11</td>
            <td>19</td>
            <td>14</td>
            <td>12</td>
          </tr>
        </tbody>
        <caption>Previously sold products</caption>
      </table> */}
    </div>
      </div>
    </div>
    
  );
});
