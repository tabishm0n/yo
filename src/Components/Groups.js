import React from 'react'
import { useSelector } from 'react-redux';

function Groups() {
  const lightTheme = useSelector((state)=>state.themeKey);

  return (
    <div>Groups</div>
  )
}

export default Groups