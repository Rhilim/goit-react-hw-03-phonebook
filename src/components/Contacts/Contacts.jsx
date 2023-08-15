import { StyledDeleteBtn, StyledList } from "./Contacts.styled";

export const Contacts = ({ array, onDelete }) => {
    console.log(array)
  return (
    <>
      <StyledList>
        {array.map((el, index) => (
          <li key={index}>
            {el.name}: {el.number}
            <StyledDeleteBtn onClick={() => onDelete(el.id)}>delete</StyledDeleteBtn>
          </li>
        ))}
      </StyledList>
    </>
  );
};
