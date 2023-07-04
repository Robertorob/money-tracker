import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface SpendingsProps {
  children?: any,
}

export default function Spendings(props: any) {
  let state = useSelector((state: any) => state.spendings);

  return (
    <>
      {state.spendings.map((f: any) => (<div>Comment: {f.comment}, Category: {f.category}</div>))}
    </>
  )
}