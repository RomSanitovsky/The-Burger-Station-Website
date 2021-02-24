

import React from "react"

import { Anchor } from 'antd';

const { Link } = Anchor;

export default function Header() {

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto">Burger Station</h1>
                <Anchor>
                    <Link href="#about" title="About" />
                    <Link href="#whyUs" title="Why Us" />
                    <Link href="#branch" title="Branches" />
                    <Link href="#gallery" title="Gallery" />
                    <Link href="#staff" title="Staff" />
                    <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
        </header>

    );

}