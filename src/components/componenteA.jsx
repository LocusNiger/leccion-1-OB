import { Contact } from "../models/contact.class";
import ComponenteB from "./componenteB";

const ComponenteA = () => {
  const defaultContact = new Contact("Ivan", "Sanchez", "test@test.com", false);
  return (
    <>
      <ComponenteB contact={defaultContact} />
    </>
  );
};

export default ComponenteA;
