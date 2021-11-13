import Input from "./input";

const Form = () => {
  const formInputType = [
    { id: 1, type: "text", placeholder: "First Name" },
    { id: 2, type: "text", placeholder: "Last Name" },
    { id: 3, type: "email", placeholder: "Email Address" },
    { id: 4, type: "password", placeholder: "Password" },
  ];
  return (
    <form>
      {formInputType.map((input) => {
        return <Input key={input.id} type={input.type} placeholder={input.placeholder} />;
      })}
    </form>
  );
};

export default Form;
