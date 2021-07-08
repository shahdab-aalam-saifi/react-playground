import React from "react";

const kfx = window.KfxWebSDK;
const Capture = kfx.Capture;
const SelfieCapture = kfx.SelfieCapture;
const captureOptions = {
  containerId: "webcam",
  preference: "camera",
  useVideoStream: true,
  preview: true,
};

const foo = () => {
  console.log(foo)
  Capture.create(captureOptions,
    (createSuccess) => {
      Capture.takePicture(
        (imageData) => {
          console.log("Captured Image", imageData, createSuccess);
        },
        (error) => {
          console.log("takePicture", error);
        }
      );
    },
    (error) => {
      console.log("create", error);
    }
  );
};
export const Kofax = () => {
  return (
    <>
      {console.log("Kofax")}
      <div id="webcam" onClick={foo}>Web Cam</div>
    </>
  );
};
