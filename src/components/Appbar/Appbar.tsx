// import * as React from 'react';
import LayoutPlaceholder from "../Layout/LayoutPlaceholder";
import SearchBar from "../SearchBar";
import Avatar from "./Avatar";

function Appbar() {
  return (
    <>
    <Avatar></Avatar>
    <SearchBar></SearchBar>
    <LayoutPlaceholder placeholderText={'Appbar'}/>
    </>
  );
}

export default Appbar;
