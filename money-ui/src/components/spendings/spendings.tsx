import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpendingForm from "./spending-form";
import SpendingsList from "./spendings-list";

interface SpendingsProps {
  children?: any,
}

export default function Spendings(props: any) {
  return (
    <>
      <SpendingForm />
      <SpendingsList />
    </>
  )
}