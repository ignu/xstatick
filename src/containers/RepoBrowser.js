/* flow  */
import React from 'react'

import Github from 'github-api'

type Props = {
  userName?: any
}

const login = (username, password) => {
  console.log("Github", Github);
  console.log('username, password', username, password)
}

const RepoBrowser = (props:Props) => {
  return (<div>
    <input type="text"/>
    <input type="submit"/>
  </div>)
}

export default RepoBrowser
