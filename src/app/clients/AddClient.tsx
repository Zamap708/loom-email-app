"use client";

import React from "react";
import Modal from "../components/Modal";

interface props {
    handleModal: () => void;
}
// Takes props.handleModal to toggle Modal display, must add property to every instance
export default function AddClient(props: props) {
  return <Modal handleModal={props.handleModal}>njdsbjfdsjf</Modal>;
}
