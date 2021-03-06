import PropTypes from "prop-types";
import React from 'react';
import Navbar from './navbar'
import FooterClass from './footer'

function Layout (props) {
// console.log('layout props: ', props)
    return (
      <>
        <Navbar signedInUser={props.signedInUser}/>
          <body className="">
            <main className="w-full container mx-auto p-12">
              {props.children}
            </main>
          </body>
        <FooterClass />
      </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
