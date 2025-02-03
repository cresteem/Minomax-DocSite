import { Stepper } from "@mantine/core";
import { FaArrowCircleRight } from "react-icons/fa";
import { RiDownloadLine, RiFileSettingsLine, RiPlayFill } from "react-icons/ri";
import InputAndCopy from "../utils/input-and-copy";
import Logo from "../utils/minomax-logo";

export default function HowToGetStarted() {
  return (
    <section className="py-7 leading-loose tracking-wide">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl text-center">
            <span className="bg-gradient-to-r from-primary/[65%] to-primary bg-clip-text text-transparent">
              How to Get Started
            </span>{" "}
            with Minomax 🚀
          </h3>
          <p className="mt-6 text-justify">
            Minomax streamlines web optimization by automating essential tasks
            like image compression, video processing, and web document
            minification. Follow these simple steps to integrate Minomax into
            your workflow and supercharge your website’s performance.
          </p>
        </div>
        <div className="relative mt-12 px-3 lg:w-[50%] mx-auto">
          <Stepper
            active={4}
            orientation="vertical"
            color="#f26522"
            styles={{
              stepDescription: { lineHeight: "4ch", paddingBottom: "3em" },
            }}
            allowNextStepsSelect={false}
          >
            <Stepper.Step
              label="Step 1: Install Minomax"
              description={
                <div className="flex flex-col pt-3 justify-start items-start">
                  <p className="mb-5">
                    Install Minomax using <em className="text-primary">npm</em>{" "}
                    or <em className="text-primary">yarn</em> for seamless
                    accessibility in your workspace / project.
                  </p>
                  <InputAndCopy
                    source="npm install @cresteem/minomax"
                    successCallback={() => {
                      alert("Now paste it on terminal: ctrl + v");
                    }}
                  />
                </div>
              }
              completedIcon={<RiDownloadLine size={20} />}
              allowStepSelect={false}
            />

            <Stepper.Step
              label="Step 2: Configure Minomax"
              description={
                <div className="flex flex-col pt-3 justify-start items-start">
                  <p className="mb-5">
                    Run the command below to generate a configuration file.
                    Customize it based on your project&apos;s requirements.{" "}
                    <a
                      href="/docs/customizing-minomax-for-your-needs"
                      className="link"
                    >
                      Explore Configurations{" "}
                      <FaArrowCircleRight className="inline" />
                    </a>
                  </p>
                  <InputAndCopy
                    source="npx minomax init"
                    successCallback={() => {
                      alert("Now paste it on terminal: ctrl + v");
                    }}
                  />
                </div>
              }
              completedIcon={<RiFileSettingsLine size={20} />}
              allowStepSelect={false}
            />

            <Stepper.Step
              label="Step 3: Optimize with Minomax"
              description={
                <div className="flex flex-col pt-3 justify-start items-start">
                  <p className="mb-5">
                    Execute master command to perform tasks like compression,
                    optimization, and more in a single step.
                  </p>
                  <InputAndCopy
                    source="npx minomax prod"
                    successCallback={() => {
                      alert("Now paste it on terminal: ctrl + v");
                    }}
                  />
                </div>
              }
              completedIcon={<RiPlayFill size={20} />}
              allowStepSelect={false}
            />

            <Stepper.Step
              label="Step 4: Enhance Workflow"
              description={
                <p>
                  Leverage Minomax’s CLI or API to integrate optimization into
                  your CI/CD pipeline for continuous improvement.{" "}
                  <a
                    href="/docs/github-action-and-gitlab-ci-cd"
                    className="link"
                  >
                    Explore CI/CD <FaArrowCircleRight className="inline" />
                  </a>
                </p>
              }
              completedIcon={<Logo className="w-[20px]" />}
              allowStepSelect={false}
            />
          </Stepper>
        </div>
      </div>
    </section>
  );
}
