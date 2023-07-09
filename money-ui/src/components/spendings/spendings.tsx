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