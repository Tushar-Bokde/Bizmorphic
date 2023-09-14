"use client"

import { useState, useEffect, Key } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import classes from "./BlogWriter.module.css"
import { v4 as uuidv4 } from "uuid";
import DocumentPage from "./document/DocumentPage";
import Image from "next/image";
import React from "react";
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import routes from "../utils/routes";

export interface Blog {

  id?: string 
  image?: string | number | readonly string[] | undefined;
  value?: string
  type?: string
  description?: string,
}

interface Document {
  _id: string
  name: string
  document: {
    pages: [Pages]
  }
}

interface Category {
}

interface Pages {
  page_no: string | number | any

}


export default function BlogWriter({ type, blogData }: any) {
  const {data :session } = useSession()
  const router = useRouter()
  const [isBrowser, setIsBrowser] = useState(false);
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<Array<Blog>>([]);
  const [category, setCategory] = useState<Array<Category>>([]);
  const [metaDescription, setMetaDescription] = useState("");
  const [documents, setDocuments] = useState<Array<Document>>([]);
  const [form, setForm] = useState<Document>({
    _id: '',
    name: '',
    document: {
      pages: [{
        page_no: ''
      }]
    }
  });
  const [ifFormIsRemoved, setIfFormIsRemoved] = useState(false);
  const [formSearchValue, setFormSearchValue] = useState("");

  // For tool List i.e. for adding and removing blog items
  function addHeading(id?: string, index?: string) {
    setItems([
      ...items,
      {
        id: uuidv4(),
        value: "",
        type: "HEADING",
      },
    ]);
  }

  function addDocument(id?: string, index?: string) {
    setItems([
      ...items,
      {
        id: uuidv4(),
        value: "",
        type: "DOCUMENT",
      },
    ]);
  }

  function addParagraph(id?: string, index?: string) {
    setItems([
      ...items,
      {
        id: uuidv4(),
        value: "",
        type: "PARAGRAPH",
      },
    ]);
  }

  function addSubHeading(id?: string, index?: string) {

    setItems([
      ...items,
      {
        id: uuidv4(),
        value: "",
        type: "SUB_HEADING",
      },
    ]);
  }

  function addImage(e:any ,id?: string, index?: string) {
    setItems([
      ...items,
      {
        id: uuidv4(),
        value: "",
        type: "IMAGE",
        description: "",
      },
    ]);
  }

  function removeItem(dataId: string | undefined, type: string | undefined) {
    const newItems = Array.from(items).filter((item) => item.id !== dataId);
    setItems(newItems);
    setIfFormIsRemoved(true);
    type === "DOCUMENT" && setForm({
      _id: '',
      name: '',
      document: {
        pages: [{
          page_no: ''
        }]
      }
    });
    setFormSearchValue("");
  }

  // For Input change
  function handleHeadingChange(e: any, idData: string | any) {
    e.preventDefault();
    const newItems = Array.from(items).map((item) => {
      if (item.id === idData) {
        return {
          ...item,
          value: e.target.value,
        };
      } else {
        return item;
      }
    });
    setItems(newItems);
  }

  function handleImageDescription(e: any, idData: string | undefined) {
    e.preventDefault();
    const newItems = Array.from(items).map((item) => {
      if (item.id === idData) {
        return {
          ...item,
          description: e.target.value,
        };
      } else {
        return item;
      }
    });
    setItems(newItems);
  }

  // To Search Document
  async function handleDocumentSearchChange(e: any, idData: string | undefined) {
    e.preventDefault();
    setFormSearchValue(e.target.value);
    const response =
      e.target.value &&
      (await routes.HR_TOOLS.APIS.GET_SEARCH_FORMS(e.target.value));
    setDocuments(response);
  }

  function selectDocumentForBlog(id: string, contentId: string | undefined) {
    const selectedFormData = documents.filter((item) => item._id === id)[0];
    setForm(selectedFormData);
    const newItems = Array.from(items).map((item) => {
      if (item.id === contentId) {
        return {
          ...item,
          value: id,
        };
      } else {
        return item;
      }
    });
    setItems(newItems);
    setDocuments([]);
  }

  const handleImageChange = async (e: any, contentId: string | undefined) => {
    e.preventDefault();
    let data = new FormData();
    const image = e.target.files[0]
    data.append("image", image, "image.png");
    data.append("image_name", image.name)
    const apiData = await routes.BLOG_MS.APIS.UPLOAD_LOCAL_IMAGE_BLOG(data)
    console.log("this is the api data",apiData,)
    const newItems = Array.from(items).map((item) => {
      if (item.id === contentId) {
        return {
          ...item,
          value: apiData.location,
        };
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  async function getFormById(id: string) {
    const formToStore = await routes.HR_TOOLS.APIS.GET_FORM_BY_FORMID(id);
    setForm(formToStore);
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const indexOfEvent = category.indexOf(e.target.value);
    indexOfEvent < 0
      ? setCategory([...category, e.target.value])
      : setCategory([...category.filter((item) => item !== e.target.value)]);
  }

  // For Drag and Drop
  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setItems(newItems);
  }

  function previewBlog() {
    // console.log("ITEMS HERE FOR BLOG---->", items);
    // items && setBlogPrevData(items);
    localStorage.setItem("items", JSON.stringify(newItemsToGet()));
    localStorage.setItem("title", title);
    localStorage.setItem("category", category as any); //checkout this again in testing
    localStorage.setItem("metaDescription", metaDescription);
    return window.open("/preview", "_blank");
  }

  // Api Calls
  // Save Blog

  function newItemsToGet() {
    const indexes = (str: string, char: string) => {
      const indexes : number[]= [];
      for (let i:number = 0; i < str.length; i++) {
        if (str[i] === char) {
          indexes.push(i);
          i++;
        }
      }
      return indexes;
    };
    const newItems = items.map((item: any, index: any) => {
      if (
        item.type === "HEADING" ||
        item.type === "SUB_HEADING" ||
        item.type === "PARAGRAPH"
      ) {
        if (
          indexes(item.value, "<").length > 0 &&
          indexes(item.value, ">").length > 0
        ) {
          var newValue = item.value;
          let links: any = [];
          indexes(item.value, "<").map((item2, i) => {
            const linkArray = item.value
              .slice(item2 + 2, indexes(item.value, ">")[i])
              .split(" ")
              .filter((item: string | any[]) => item.length !== 0);
            const urlToAdd = linkArray.pop();
            const keyWordToAdd = linkArray.join(" ");
            links.push({ keyword: keyWordToAdd, url: urlToAdd });
            return (newValue = newValue.replace(
              item.value.slice(item2, indexes(item.value, ">")[i] + 2),
              keyWordToAdd
            ));
          });
          return {
            ...item,
            value: newValue,
            links,
          };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
    return newItems;
  }

  async function saveBlog() {
    // Working for multiple indexes
    const newItems = newItemsToGet();
    const data = newItems && {
      name: session?.user?.name,
      userId: session?.user?.email,
      title: title,
      contents: newItems,
      category: category,
      metaDescription,
    };  
    const blogForGivenTitle = await routes.BLOG_MS.APIS.GET_BLOG_BY_TITLE(
      title
    );
    var parsedResponse;
    if (blogForGivenTitle.name) {
      try {
        if (type === "UPDATE" && newItems) {
          parsedResponse = await routes.BLOG_MS.APIS.UPDATE_BLOG({
            name:blogData.name,
            blogAuthentication: blogData.blogAuthentication,
            contents: newItems,
            title,
            readingTime: blogData.readingTime,
            userid: blogData.userid,
            username: blogData.username,
            id: blogData._id,
            category: category,
            metaDescription,
          });

        } else {
          parsedResponse = await routes.BLOG_MS.APIS.SAVE_BLOG(data);
          console.log("this is printed",parsedResponse)
        }
        const messageToAlert =
          type === "UPDATE" ? "Blog is Updated" : "Your Blog is Saved";
        window.alert(messageToAlert);
      } catch (error: any) {
        window.alert(`Something went Wrong, ${error}`);
        console.log(error)
      }
    } else {
      window.alert("Title is Used Befor Please Use another Title");
    }
  }

  useEffect(() => {
    setIsBrowser(process.browser);
  }, []);

  useEffect(() => {
    if (type === "UPDATE") {
      setTitle(blogData.title);
      setCategory(blogData.category);
      setMetaDescription(blogData.metaDescription);
      blogData && blogData.contents && setItems(blogData.contents);
      const documentItem =
        blogData &&
        blogData.contents &&
        blogData.contents.filter((item: any) => item.type === "DOCUMENT")[0];
      !ifFormIsRemoved && documentItem && getFormById(documentItem.value);
    }
  }, [type, blogData, ifFormIsRemoved]);

  return (
    <div className={`${classes.blogWriterContainer} py-24 max-w-6xl mx-auto`} >
      {/* <IdleTimer ref={idleTimerRef} timeout={4000} onIdle={handleIdleChange}> */}
      <header className="App-header p-12">
        <div className="flex p-4">
        <h1>{type === "UPDATE" ? "Update" : "Write"} Your Blog</h1>
        <div className="m-auto w-5/6">
          <input
            style={{
              width: "100%",
              padding: "0.5em",
            }}
            value={title}
            className="border"
            onChange={(e) => {
              if (e.target.value.includes("-")) {
                window.alert("Please Dont include '-' in Title");
              } else {
                setTitle(e.target.value);
              }
            }}
            placeholder="Give Your Blog Title....."
          /></div>
        </div>
        <div
        className="p-4"
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h3>Select Category For the Blog</h3>
          <div
          className="w-full"
            style={{
              display: "flex",

              justifyContent: "space-around",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={category && category.includes("HR")}
                id="HR"
                name="HR"
                value="HR"
                onChange={(e) => {
                  handleCategoryChange(e);
                }}
              />
              HR
            </div>
            <div>
              <input
                type="checkbox"
                id="LEGAL"
                name="LEGAL"
                checked={category && category.includes("LEGAL")}
                value="LEGAL"
                onChange={(e) => {
                  handleCategoryChange(e);
                }}
              />
              LEGAL
            </div>
            <div>
              <input
                type="checkbox"
                id="BUSINESS"
                name="BUSINESS"
                value="BUSINESS"
                checked={category && category.includes("BUSINESS")}
                onChange={(e) => {
                  handleCategoryChange(e);
                }}
              />
              BUSINESS
            </div>
          </div>
          {/* <select
            style={{
              width: "30%",
              margin: "auto",
            }}
            value={category}
            onChange={handleCategoryChange}
          >
            <option></option>
            <option></option>
            <option></option>
          </select> */}
        </div>
        <div
        className="p-4"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h3>Meta Description For Blog</h3>
          <textarea className="border w-5/6"
            style={{
              margin: "auto",
              height: "150px",
              padding: "0.5em",
              fontSize: "0.9rem",
            }}
            value={metaDescription}
            onChange={(e) => {
              setMetaDescription(e.target.value);
            }}
            placeholder="Meta Description For Blog...."
          />
        </div>



        <div
          style={{
            display: "flex",
            position: "relative",
          }}
        >
          <div className="px-2"
            style={{
              display: "flex",
              // marginLeft: "auto",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "400px",
              position: "sticky",
              top: "4rem",
              zIndex: "100",
            }}
          >
            <button
              style={{
                margin: "auto",
                padding: "1em 1em",
                fontSize: "1rem",
                width: "80%",
                color: "#696969",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => addHeading()}
            >
            <h1>Add Heading</h1>  
            </button>
            <button
              style={{
                margin: "auto",
                padding: "1em 1em",
                fontSize: "1rem",
                width: "80%",
                color: "#696969",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => addSubHeading()}
            >
              
              <h1>Add Sub Heading</h1>  
            </button>
            <button
              style={{
                margin: "auto",
                padding: "1em 1em",
                fontSize: "1rem",
                width: "80%",
                color: "#696969",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => addParagraph()}
            >
            <h1>Add Paragraph</h1>  
            </button>
            <button
              style={{
                margin: "auto",
                padding: "1em 1em",
                fontSize: "1rem",
                width: "80%",
                color: "#696969",
                border: "none",
                cursor: "pointer",
              }}
              onClick={(e) => addImage(e)}
            ><h1>Add Image</h1>  
            </button>
            {/* <button
              style={{
                margin: "auto",
                padding: "1em 1em",
                fontSize: "1rem",
                width: "80%",
                color: "#696969",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => addDocument()}
            >
              <h1>Add Document</h1>
            </button> */}
            <button
              style={{
                margin: "auto",
                padding: "1em 1em",
                fontSize: "1rem",
                width: "80%",
                color: "#696969",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => previewBlog()}
            >
            <h1> Preview Blog</h1> 
            </button>
            <button
              style={{
                margin: "auto",
                padding: "0.8em 1em",
                fontSize: "1rem",
                width: "80%",
                background: "#00baff",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
              onClick={saveBlog}
            >
              {type === "UPDATE" ? "Update Blog" : "Save Blog"}
            </button>
          </div>
          <div style={{ width: "80%" }}>
            {isBrowser && (
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="items">
                  {(provided: any) => (
                    <div
                      className="characters"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {items &&
                        items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={
                                typeof item.id === "string"
                                  ? item.id
                                  : `${item.id}`
                              }
                              index={index}
                            >
                              {(provided: any) => (
                                <div
                                  style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                  }}
                                  id={item.id}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="m-auto p-4"
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                    }}
                                  >
                                    
                                    {item.type === "HEADING" ? (
                                      <input className="border"
                                        style={{
                                          width: "80%",
                                          padding: ".5rem",
                                          margin: "auto",
                                          textAlign: "left",
                                        }}
                                        value={item.value}
                                        onChange={(e) =>
                                          handleHeadingChange(e, item.id)
                                        }
                                        placeholder={"Add Heading..."}
                                      ></input>
                                    ) : item.type === "SUB_HEADING" ? (
                                      <input className="border"
                                        style={{
                                          width: "80%",
                                          padding: "0.5em",
                                          margin: "auto",
                                          textAlign: "left",
                                        }}
                                        placeholder="Add Sub Heading..."
                                        value={item.value}
                                        onChange={(e) =>
                                          handleHeadingChange(e, item.id)
                                        }
                                      />
                                    ) : item.type === "PARAGRAPH" ? (
                                      <textarea className="border"
                                        style={{
                                          width: "80%",
                                          padding: ".5rem",
                                          margin: "auto",
                                          textAlign: "left",
                                          height: "400px",
                                        }}
                                        placeholder="Add Paragraph..."
                                        value={item.value}
                                        onChange={(e) =>
                                          handleHeadingChange(e, item.id)
                                        }
                                      />
                                    ) : item.type === "IMAGE" ? (
                                      <div className="m-auto">
                                        {item.value ? (
                                          <></>
                                        ) : (
                                          <input className="border "
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                              handleImageChange(e, item.id)
                                            }
                                            style={{
                                              width: "80%",
                                              padding: ".5rem",
                                              margin: "auto",
                                              textAlign: "left",
                                            }}
                                          ></input>
                                        )}
                                        {item.value ? (
                                          <div 
                                          className="p-6"
                                            style={{
                                              width: "100%",
                                              display: "flex",
                                              flexDirection: "column",
                                            }}
                                          >
                                            <Image
                                            width={500}
                                            height={300}
                                              src={item.value}
                                              alt="Image"

                                            />
                                            <input className="border text-xs m-4 p-1"
                                              value={item.image}
                                              onChange={(e) =>
                                                handleImageDescription(
                                                  e,
                                                  item.id
                                                )
                                              }
                                              placeholder="Add Image Description....."
                                            />
                                          </div>
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    ) : item.type === "DOCUMENT" ? (
                                      <div
                                        style={{
                                          width: "80%",
                                        }}
                                      >
                                        {Object.keys(form).length === 0 ? (
                                          <input
                                            style={{
                                              width: "100%",
                                              padding: "0.5em",
                                              marginTop: "auto",
                                              textAlign: "left",
                                            }}
                                            placeholder="Search For the Document..."
                                            value={formSearchValue}
                                            onChange={(e) =>
                                              handleDocumentSearchChange(
                                                e,
                                                item.id
                                              )
                                            }
                                          />
                                        ) : (
                                          <div
                                            style={{
                                              width: "100%",
                                            }}
                                          >
                                            <h3
                                              style={{
                                                width: "100%",
                                                textAlign: "center",
                                              }}
                                            >
                                              {form.name}
                                            </h3>
                                            <div>
                                              {form &&
                                                form.document &&
                                                form.document.pages.map(
                                                  (page) => {
                                                    return (
                                                      <DocumentPage
                                                        key={page.page_no}
                                                        data={page}
                                                      />
                                                    );
                                                  }
                                                )}
                                            </div>
                                          </div>
                                        )}
                                        {documents.length > 0 && (
                                          <div
                                            style={{
                                              width: "100%",
                                              display: "flex",
                                              flexDirection: "column",
                                              height: "250px",
                                              overflow: "scroll",
                                            }}
                                          >
                                            {documents &&
                                              documents.map((item45, index) => {
                                                return (
                                                  <button
                                                    key={item45._id}
                                                    className={
                                                      classes.formSelectionButton
                                                    }
                                                    style={{
                                                      width: "100%",
                                                      margin: "0.25em auto",
                                                      padding: "0.5em",
                                                      background: "none",
                                                      border: "none",
                                                      cursor: "pointer",
                                                      fontSize: "1rem",
                                                      textAlign: "left",
                                                    }}
                                                    onClick={() => {
                                                      selectDocumentForBlog(
                                                        item45._id,
                                                        item.id
                                                      );
                                                    }}
                                                  >
                                                    {item45.name}
                                                  </button>
                                                );
                                              })}
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <>{item.value}</>
                                    )}
                                    <button
                                      style={{
                                        padding: "0.5em 1em",
                                        fontSize: "1rem",
                                        background: "#F32013",
                                        border: "none",
                                        color: "white",
                                      }}
                                      onClick={() =>
                                        removeItem(item.id, item.type)
                                      }
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            )}
          </div>
        </div>
      </header>
      {/* </IdleTimer> */}
    </div>
  );
}
