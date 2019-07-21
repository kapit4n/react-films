import React, { useEffect, useState } from "react";

export default function Clourarity(props) {
  let widget = {};

  const [mounted, setMount] = useState(true);
  const [imgUrl, setImgUrl] = useState("");

  const Position = () => {
    useEffect(() => {
      window.addEventListener("mousemove", () => console.log("code"));
    });

    return null;
  };

  useEffect(() => {
    if (window.cloudarity) {
      console.log("widget code");
    }
  }, []);

  const showWidget = () => {
    widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dzpqgzke9",
        apiKey: "127779212656245",
        uploadPreset: "k8gtkhif"
      },
      (error, result) => {
        console.log("upload");
        console.log(error);
        console.log(result);
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setImgUrl(result.info.thumbnail_url);
        }
      }
    );

    widget.open();
  };

  return (
    <div id="photo-form-container">
      <button onClick={showWidget} className={"cloudinary-button"}>
        Upload Photo
      </button>
      {mounted ? <Position /> : null}
      <img src={imgUrl} />
    </div>
  );
}
