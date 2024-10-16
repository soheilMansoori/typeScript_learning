export default function Events(): JSX.Element {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value;
  };
  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.type;
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} />
        <button onClick={clickHandler}></button>
      </form>
    </>
  );
}
