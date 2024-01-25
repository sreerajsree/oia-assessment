"use client";
import Image from "next/image";
import React, { useState } from "react";
import Papa from "papaparse";
import { FiUpload } from "react-icons/fi";

export const BrosweFile = () => {
  const [parsedData, setParsedData] = useState([]);

  // State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  // State to store the values
  const [values, setValues] = useState([]);

  // State to store the selected values for each row
  const [selectedArray, setSelectedArray] = useState([]);

  const handleSelectChange = (index, selectedValue) => {
    const newSelectedArray = [...selectedArray];

    // If the row index doesn't exist in selectedArray, create a new array for it
    if (!newSelectedArray[index]) {
      newSelectedArray[index] = [];
    }

    newSelectedArray[index].push(selectedValue);
    setSelectedArray(newSelectedArray);
  };

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  console.log("parse", parsedData);

  return (
    <>
      <div
        className="relative top-[15%] sm:top-20
            w-[90%] sm:w-[50%] m-auto text-center"
      >
        <div className="px-2  flex flex-col sm:flex-row sm:justify-between">
          <div className="w-full bg-white rounded-md shadow-md px-4 py-4">
            <div
              className={` ${"border-2 border-dashed border-[#EBEBEB]"} py-10 mt-5 bg-white  rounded-lg  w-full`}
            >
              <label>
                <input
                  type="file"
                  accept=".csv"
                  name="file"
                  onChange={changeHandler}
                  className="border border-grey text-sm
                          hidden
                          rounded py-2 px-2 w-full "
                  multiple
                />

                <div
                  className="w-[60%]  border-red-700 m-auto
                                 flex items-center justify-center"
                >
                  <svg
                    width="37"
                    height="36"
                    viewBox="0 0 37 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_22_2724)">
                      <path
                        d="M22.7801 17.2998L10.9556 15.1998V30.7167C10.9556 31.4253 11.5264 31.9998 12.2305 31.9998H32.6341C33.3382 31.9998 33.9091 31.4253 33.9091 30.7167V24.9998L22.7801 17.2998Z"
                        fill="#185C37"
                      />
                      <path
                        d="M22.7802 4H12.2306C11.5264 4 10.9556 4.57446 10.9556 5.2831V11L22.7802 18L29.0402 20.1L33.9091 18V11L22.7802 4Z"
                        fill="#21A366"
                      />
                      <path
                        d="M10.9556 11H22.7802V18H10.9556V11Z"
                        fill="#107C41"
                      />
                      <path
                        opacity="0.1"
                        d="M19.4185 9.60049H10.9556V27.1005H19.4185C20.1216 27.0982 20.6911 26.5251 20.6934 25.8174V10.8836C20.6911 10.1759 20.1216 9.60279 19.4185 9.60049Z"
                        fill="black"
                      />
                      <path
                        opacity="0.2"
                        d="M18.7229 10.3002H10.9556V27.8002H18.7229C19.4261 27.7979 19.9956 27.2248 19.9978 26.5171V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z"
                        fill="black"
                      />
                      <path
                        opacity="0.2"
                        d="M18.7229 10.3002H10.9556V26.4002H18.7229C19.4261 26.3979 19.9956 25.8248 19.9978 25.1172V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z"
                        fill="black"
                      />
                      <path
                        opacity="0.2"
                        d="M18.0273 10.3002H10.9556V26.4002H18.0273C18.7305 26.3979 19.3 25.8248 19.3023 25.1172V11.5833C19.3 10.8757 18.7305 10.3025 18.0273 10.3002Z"
                        fill="black"
                      />
                      <path
                        d="M5.27496 10.3002H18.0274C18.7315 10.3002 19.3023 10.8747 19.3023 11.5833V24.4171C19.3023 25.1258 18.7315 25.7002 18.0274 25.7002H5.27496C4.57082 25.7002 4 25.1258 4 24.4171V11.5833C4 10.8747 4.57082 10.3002 5.27496 10.3002Z"
                        fill="url(#paint0_linear_22_2724)"
                      />
                      <path
                        d="M7.94867 22.1706L10.6307 17.9881L8.17334 13.8287H10.1501L11.4912 16.4887C11.615 16.7414 11.6998 16.929 11.7457 17.0529H11.7631C11.8512 16.8513 11.944 16.6555 12.0413 16.4656L13.4749 13.8301H15.2896L12.7696 17.965L15.3536 22.1706H13.4227L11.8737 19.2509C11.8008 19.1267 11.7388 18.9962 11.6887 18.861H11.6658C11.6204 18.9934 11.5602 19.1203 11.4863 19.239L9.89138 22.1706H7.94867Z"
                        fill="white"
                      />
                      <path
                        d="M32.6342 4H22.7802V11H33.9091V5.2831C33.9091 4.57446 33.3383 4 32.6342 4Z"
                        fill="#33C481"
                      />
                      <path
                        d="M22.7802 18H33.9091V25H22.7802V18Z"
                        fill="#107C41"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_22_2724"
                        x1="6.65832"
                        y1="9.29766"
                        x2="16.7396"
                        y2="26.6473"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#18884F" />
                        <stop offset="0.5" stop-color="#117E43" />
                        <stop offset="1" stop-color="#0B6631" />
                      </linearGradient>
                      <clipPath id="clip0_22_2724">
                        <rect
                          width="29.9091"
                          height="28"
                          fill="white"
                          transform="translate(4 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className=" mt-10 text-[#707070] text-sm text-center">
                  {" "}
                  Drop Your excel sheet here or{" "}
                  <span className="text-[#605BFF]"> browse </span>
                </p>
              </label>
            </div>

            <button
              class="inline-flex mt-4 justify-center w-full items-center gap-2 rounded border border-[#605BFF] bg-[#605BFF] px-8 py-4 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
             type="button"
            >
              <FiUpload /> <span class="text-sm font-medium"> Download </span>
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <table className="w-full mt-20 bg-[#f5f5f5] ">
        <thead>
          <tr>
            {tableRows.map((rows, index) => (
              <th key={index} className=" border-gray-400 py-2 px-4">
                {rows}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className=" px-4 py-2">
          {values.map((subarray, index) => (
            <tr
              key={index}
              className="bg-white gap-10 mt-5 rounded-lg  px-4 py-4 shadow-lg"
            >
              {subarray.slice(0, 3).map((value, subIndex) => (
                <td key={subIndex} className="py-2 ">
                  <div className="py-4 ">{value}</div>
                </td>
              ))}
              <td className="border-gray-400 py-2">
                <select
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                  className="w-full py-4 px-4 rounded-xl"
                >
                  {subarray[3].split(",").map((value, subIndex) => (
                    <option key={subIndex} value={value}>
                      {value} 999
                    </option>
                  ))}
                </select>
              </td>
              {/* Display selected values from the selectedArray */}
              <td className="border-gray-400 py-2">
                {selectedArray[index] &&
                  selectedArray[index].map((value, subIndex) => (
                    <button
                      key={subIndex}
                      className="bg-[#605bff] text-white py-1 px-2 mx-2 rounded-lg"
                    >
                      {value}
                    </button>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
// <tbody className="border-2 bg-[#ffffff] border-green-600 px-4 py-2 ">
// {values.map((subarray, index) => (
//     <tr key={index} className="bg-gray-200 shadow-lg mt-5
//     rounded-lg border border-red-600  px-4 ">
//       {subarray.slice(0, 3).map((value, subIndex) => (
//           <td key={subIndex} className="py-2  border-green-400">
//             <div className=" bg-[#ffffff] py-4 border-yellow-500">
//           {value}-
//                  </div>
//         </td>
//       ))}
//       {/* {subarray.slice(0, 3).map((value, subIndex) => (
//         <td key={subIndex} className="py-2  border-green-400">
//           {value}-
//         </td>
//       ))} */}

//       <td className=" border-gray-400 py-2">
//         <select
//           onChange={(e) => handleSelectChange(index, e.target.value)}
//           className="w-full  py-4 px-4  border-red-600"
//         >
//           {subarray[3].split(",").map((value, subIndex) => (
//             <option key={subIndex} value={value}>
//               {/* <div className="bg-[#ffffff]"> */}
//               {value} 999
//               {/* </div> */}
//             </option>
//           ))}
//         </select>
//       </td>

//       {/* Display selected values from the selectedArray */}
//       <td className="border-gray-400 py-2">
//         {selectedArray[index] &&
//           selectedArray[index].map((value, subIndex) => (
//             <button
//               key={subIndex}
//               className="bg-red-500 text-white py-1 px-2 mr-2 rounded-lg"
//             >
//               {value}
//             </button>
//           ))}
//       </td>
//     </tr>
//   ))}

//           </tbody>
