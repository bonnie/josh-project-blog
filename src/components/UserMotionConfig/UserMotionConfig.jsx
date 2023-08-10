"use client";
import { MotionConfig } from "framer-motion";

function UserMotionConfig({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default UserMotionConfig;
