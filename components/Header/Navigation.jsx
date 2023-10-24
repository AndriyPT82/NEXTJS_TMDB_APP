"use client";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export function Navigation() {
  return (
    <Nav>
      <Link href="/"> Home </Link>
      <Link href="/discover home rew qwe"> Discover </Link>
      <Link href="/release"> Movie Release </Link>
    </Nav>
  );
}
