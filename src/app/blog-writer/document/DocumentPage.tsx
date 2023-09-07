import React from "react";

const DocumentPage = ({ data }:any) => {
  const stringToReturn = (array: []) => {
    let string = "";
    array.map((item:any) => {
      return item.data === ""
        ? (string += item.data + " ___________ ")
        : (string += item.data);
    });
    return string;
  };

  function clickForMedia(params: string | URL | undefined) {
    window.open(params);
  }
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        background: "#FAF9F6",
        padding: "3em 0 3em 0",
      }}
    >
      {data &&
        data.contents.map((item:any) => {
          return item.type === "TITLE" ? (
            <h2 style={{ margin: "1em auto", width: "90%" }} key={item.id}>
              {stringToReturn(item.content)}
            </h2>
          ) : item.type === "SUBTITLE" ? (
            <h3 style={{ margin: "1em auto", width: "90%" }} key={item.id}>
              {stringToReturn(item.content)}
            </h3>
          ) : item.type === "FORM_INPUT" ? (
            <p style={{ margin: "1em auto", width: "90%" }} key={item.id}>
              {stringToReturn(item.content)}
            </p>
          ) : item.type === "PARAGRAPH" ? (
            <p style={{ margin: "1em auto", width: "90%" }} key={item.id}>
              {stringToReturn(item.content)}
            </p>
          ) : item.type === "MEDIA" ? (
            <a onClick={() => clickForMedia(item.content[0].data)}>
              Click Here
            </a>
          ) : item.type === "SIGNATURE" ? (
            <img style={{ margin: "1em auto", width: "90%" }} src="" />
          ) : item.type === "MULTI_SIGNATURE" ? (
            <></>
          ) : (
            <></>
          );
        })}
    </div>
  );
};

export default DocumentPage;
