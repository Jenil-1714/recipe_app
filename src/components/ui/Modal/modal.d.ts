declare namespace IModalProps {
  export interface IProps {
    title?: string;
    isOpen: boolean;
    onCloseHandler: () => void;
    children: ReactNode;
    dialogActions: ReactNode;
  }
}
