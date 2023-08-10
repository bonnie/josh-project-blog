import dynamic from "next/dynamic";

export * from "./DivisionGroupsDemo";

// lazy load this component everywhere
export default dynamic(() => import("./DivisionGroupsDemo"));
