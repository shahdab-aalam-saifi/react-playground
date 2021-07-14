import React from "react";

const kfx = window.KfxWebSDK;
const Capture = kfx.Capture;
const captureOptions = {
  containerId: "webcam",
  preference: "camera",
  useVideoStream: true,
  preview: true,
};

const createSuccessCallback = (createSuccess) => {
  Capture.takePicture(
    (imageData) => {
      console.log("takePicture", imageData, createSuccess);
    },
    (error) => {
      console.log("takePicture", error);
    }
  );
};

const createFailureCallback = (error) => console.log(error);

const captureImage = () => {
  Capture.create(captureOptions, createSuccessCallback, createFailureCallback);
};
export const Kofax = () => {
  return (
    <>
      <div id="webcam"></div>
      <button onClick={captureImage}>Capture</button>
    </>
  );
};
