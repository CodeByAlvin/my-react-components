import Modal from "./ModalDialog";


export default [
  {
    path: "/",
    exact: true,
    title: 'ModalDialog',
    main: Modal
  },
  {
    path: "/bubblegum",
    title: '',
    main: Modal
  },
  {
    path: "/shoelaces",
    title: '',
    main: Modal,
  }
];

