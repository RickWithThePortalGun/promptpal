import React from "react";
import Feed from "@components/Feed";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Generate and Exchange
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center"> AI Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptPal is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>
      <Feed/>
    </section>
  );
};

export default page;
