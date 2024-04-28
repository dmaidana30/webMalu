import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import useQuiosco from '../hooks/useQuiosco'
import ModalProducto from '../components/ModalProducto'
import React, { useState } from 'react';
import SidebarV2 from '../components/SidebarV2'
export default function Layout() {

  const { modal } = useQuiosco();
  const [showMenu, setShowMenu] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showResumen, setShowResumen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement('#root')

  return (
    <>
      {/* Encabezado con botones y logo */}
      <NavBar />
      {/* Resto del contenido */}
      <main className="flex-1 h-screen  p-3 mx-10 " >
        {!showResumen && !showMenu && <Outlet className="hidden md:block" />}
      <Footer/>
      </main>
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>

      <ToastContainer />
    </>
  );
}
