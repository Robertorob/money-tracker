import { useSelector } from "react-redux";

interface SpendingsListProps {
  children?: any;
}

export default function SpendingsList(props: SpendingsListProps) {

  let state = useSelector((state: any) => state.spendings);

  return <>
    {
      state.spendings.map((spending: any) => 
        <div>
          Comment: {spending.comment}, Category: {spending.category}
        </div>)
    }
  </>
}