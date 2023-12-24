"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

interface EmojiPickerProps {
  children: React.ReactNode;
  getValue?: (emoji: string) => void;
}
const EmojiPicker = () => {
  const route = useRouter();
  const Picker = dynamic(() => import("emoji-picker-react"));
  const onclick = (selectedEmoji: any) => {
    
  };
  return <div>EmojiPicker</div>;
};

export default EmojiPicker;
