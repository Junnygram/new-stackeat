import React from "react";

function LoadingBox() {
  return (
    <div className="flex items-center bg-orange-500 text-white text-sm justify-center font-bold px-4 py-3">
      <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>
      Processing...
    </div>
  );
}

export default LoadingBox;
