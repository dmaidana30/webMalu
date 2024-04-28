import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import Categoria from "./Categoria"
import useQuiosco from "../hooks/useQuiosco"

export default function App() {
    const { categorias } = useQuiosco()
  return (
    <Navbar style={{ backgroundColor: '#A2E9C1' }}>
      <NavbarBrand>
      {/* <Avatar src={`/img/LogoMALU.png`} size="lg" /> */}
        <p className="font-bold text-inherit">M A L U</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
 
                      
        <NavbarItem>
          <Link color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Carrito
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
             <Avatar icon="ReactNode" src={`/img/menu.png`}   />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            {/* <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem> */}
                 <DropdownItem key="profile">Categorias</DropdownItem>
                  {categorias.map( categoria => (
                        <DropdownItem key="profile" >
                                <Categoria
                                    key={categoria.id}
                                    categoria={categoria}
                                />
                             </DropdownItem>
                        ))}
                       
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
