import dynamic from "next/dynamic";

// load dynamically every time
export default dynamic(() => import("./CircularColorsDemo"));
