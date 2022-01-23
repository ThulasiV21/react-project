import styled from 'styled-components';

const Button = styled.button`
  font: inherit;     //Class or ID name should not be given instead give
  padding: 0.5rem 1.5rem;    //the css styles directly
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

&:focus {  //for Psedo selectors like this instead of giving the tagname(.button)
  outline: none; //you should give '&' instead
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
