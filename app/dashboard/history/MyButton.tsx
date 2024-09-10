"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { HISTORY } from "./page";

function Mybutton(item: HISTORY) {
  return (
    <h2>
      <Button
        variant="ghost"
        className="text-primary"
        onClick={() => navigator.clipboard.writeText(item?.aiResponse)}
      >
        Copy
      </Button>
    </h2>
  );
}

export default Mybutton;
