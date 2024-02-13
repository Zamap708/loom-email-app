import React from "react";
import Modal from "../components/Modal";

interface props {
  handleModal: () => void;
}
// Takes props.handleModal to toggle Modal display, must add property to every instance
export default function AddClient(props: props) {
  return (
    <Modal handleModal={props.handleModal}>
      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full h-10 px-4 py-8 flex items-center justify-between bg-white/50 rounded overflow-hidden">
          <h1>Add Client</h1>
        </div>
        <form
          action=""
          method="post"
          className="w-full h-full p-4 flex flex-col items-start justify-start gap-2 bg-white/50 rounded overflow-y-auto"
        >
          <input
            type="text"
            name=""
            className="w-full rounded shadow p-2"
            id=""
            placeholder="First Name"
          />
          <input
            type="text"
            name=""
            className="w-full rounded shadow p-2"
            id=""
            placeholder="Second Name"
          />
          <input
            type="text"
            name=""
            className="w-full rounded shadow p-2"
            id=""
            placeholder="LinkedIn Profile"
          />
          <input
            type="text"
            name=""
            className="w-full rounded shadow p-2"
            id=""
            placeholder="Personal Email"
          />
          <input
            type="text"
            name=""
            className="w-full rounded shadow p-2"
            id=""
            placeholder="Work Email"
          />
          <input
            type="text"
            name=""
            className="w-full rounded shadow p-2"
            id=""
            placeholder="Personal Number"
          />
          <input
            type="text"
            name=""
            className="w-full rounded shadow p-2"
            id=""
            placeholder="Work Number"
          />
          <div className="h-full flex justify-center items-end gap-2">
            <button className="p-2 px-4 rounded bg-sky-400 text-white shadow hover:scale-105">
              Save Client
            </button>
            <button
              onClick={props.handleModal}
              className="p-2 px-4 rounded bg-white text-black shadow hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
