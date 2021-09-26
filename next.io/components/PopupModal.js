import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { IoCloseCircleSharp } from "react-icons/io5";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ imageUpload, codesId }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    toast.success(
      "Your Image is uploaded to our Backend,It ll show on your Article sortly"
    );
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "codes");
    formData.append("refId", codesId);
    formData.append("field", "image");

    const res = await fetch(`http://localhost:1337/upload`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      imageUpload();
    }
  };
  const handelFileChange = (e) => {
    // console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <ToastContainer />
      <Button
        variant="contained"
        style={{
          color: "#F3F4F6",
          backgroundColor: "#616D7E",
          width: "130px",
        }}
        onClick={handleOpen}
      >
        Upload Image
      </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="flex justify-between items-center py-4">
            <h2 className="text-2xl font-semibold tracking-wider leading-relaxed text-gray-600  p-4 border-l-4 border-l-gray-700 shadow-lg">
              Upload your Image
            </h2>
            <p className="cursor-pointer" onClick={handleClose}>
              <IoCloseCircleSharp
                fontSize="30px"
                className="text-red-800 hover:animate-pulse duration-500"
              />
            </p>
          </div>
          <div className="flex-col items-center">
            <form onSubmit={handelSubmit}>
              <div className="mb-4">
                <input
                  type="file"
                  onChange={handelFileChange}
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <input
                type="submit"
                value="Upload"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-11 rounded-md focus:outline-none focus:shadow-outline cursor-pointer"
              />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
