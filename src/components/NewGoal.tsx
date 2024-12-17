import { FormEvent, useRef } from "react";
type NewGoalProps = {
  handleAddGoal: (goal: string, summary: string) => void;
};
const NewGoal = ({ handleAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summarry = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summarry.current!.value;
    event.currentTarget.reset()
    handleAddGoal(enteredGoal, enteredSummary);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summarry} />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
