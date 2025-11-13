import React from "react";

function WorkSetupBadge({ children }) {
  return (
    <div className="px-3 py-2 text-sm font-medium bg-gray-50 text-gray-500 rounded-full">
      {children}
    </div>
  );
}

export default WorkSetupBadge;
