import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "gatsby";
import { useGatsbyContext } from "../context/GatsbyContext";

export default function Sidebar() {
  const { links, toggleSidebar } = useGatsbyContext();
  return (
    <Wrapper>
      <div className="container">
        <button>
          <MdClose className="icon" onClick={toggleSidebar} />
        </button>
        <div className="links">
          {links.map((link, index) => (
            <Link key={index} to={link.url} onClick={toggleSidebar}>
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    display: none;
  }
  .container {
    background: var(--clr-white);
    width: 80vw;
    height: 80vh;
    border-radius: var(--radius);
    position: relative;
    padding: 4rem 2rem 2rem 2rem;
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-grey-5);
    }
    .links {
      display: grid;
      gap: 1rem 2rem;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      a {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.75rem;
        grid-gap: 0.75rem;
        align-items: center;
        color: #0a2540;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.2rem;
        .icon {
          color: #88add2;
          font-size: 2rem;
        }
        &:hover {
          color: #88add2;
          .icon {
            color: #0a2540;
          }
        }
      }
    }
  }
`;
