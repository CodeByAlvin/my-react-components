import Button from "./Button";
import Modal from "./ModalDialog";


const arr = [
  {
    path: "/",
    exact: true,
    title: 'ModalDialog',
    main: Modal
  },
  {
    path: "/button",
    title: 'Button',
    main: Button
  },
  
];

export default arr;

