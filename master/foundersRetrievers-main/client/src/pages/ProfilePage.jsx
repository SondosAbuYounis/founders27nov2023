import React, { useEffect, useState } from "react";
import { Edit } from "../assets/icons/IconsSVGConst";
import { NotSignedIn } from "../components/uiPrimitives/NotSignedIn";
import { useUser } from "../hooks/useContext/UserContext";

import { useModal } from "../../src/hooks/useContext/ModalContext";
import Modal from "react-modal";
import { UserData } from "../components/profile/UserData";
import { FilterData } from "../components/profile/FilterData";
import { BgNotSignedIn } from "../components/profile/BgNotSignedIn";
import { UserDataTwo } from "../components/profile/UserDataTwo";
Modal.setAppElement(document.getElementById("root"));

export const ProfilePage = (isOpen, onRequestClose) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  // const { user, isAuthenticated, logout } = useUser();

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { modalIsOpen, openModal, closeModal } = useModal();

  // useEffect(()=>{

  // })

  return (
    <>
      {isAuthenticated ? (
        <div className="flex flex-row justify-between mt-12 mb-12">
          {/* Side bar */}
          <UserDataTwo />
          {/* My Posts  */} {/* Filter  */}
          <FilterData />
        </div>
      ) : (
        <>
          <NotSignedIn isOpen={true} onRequestClose={closeModal} />
          {/* Modal Background */}
          <BgNotSignedIn />
        </>
      )}
    </>
  );
};
