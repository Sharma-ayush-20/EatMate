import React from "react";
import { IMAGE_URL } from "../utils/constants";

function TopResMenu(props) {
  const imageId = props?.foodData?.imageId;

  return (
    <div className="w-30 sm:w-30 md:w-35 overflow-hidden">
      <img
        src={IMAGE_URL + imageId}
        alt="food"
        className="w-full h-32 sm:h-36 md:h-40 object-cover"
      />
      <div className="p-2 text-center">
        <h4 className="text-sm font-medium text-gray-700">
          {props?.foodData?.name}
        </h4>
      </div>
    </div>
  );
}

export default TopResMenu;
