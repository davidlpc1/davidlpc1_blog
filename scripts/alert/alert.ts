import { ReactNode } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface SweetAlertProps {
  title: ReactNode | string;
  footer: ReactNode | string;
  didOpen?: () => void;
}

export default async function SweetAlert({
  title,
  footer,
  didOpen,
}: SweetAlertProps) {
  await MySwal.fire({
    title,
    footer,
    didOpen
  });
  // didOpen: () => {
  //     // `MySwal` is a subclass of `Swal`
  //     //   with all the same instance & static methods
  //     MySwal.clickConfirm()
  //   }
}
