// Desafio: Causa vs. Efeito
// Os comentários são as linhas de código originais

import { useEffect, useState } from "react"

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        // name: 'Joseph Oliveira',
        name: 'Matheus Guissi',
        // github: 'https://github.com/josepholiveira'
        github: 'https://github.com/guissimatheus'
      }
    }
  }
}

export function UserProfile() {
  // const [shouldNotRenderUserName, setShouldNotRenderUserName] = useState(false)
  const [isLoadingUserNameData, setIsLoadingUserNameData] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadUser() {
      // setShouldNotRenderUserName(true)
      setIsLoadingUserNameData(true)

      const fetchUserResponse = fetchUser()

      setUserData(fetchUserResponse.data.user)
      
      // setShouldNotRenderUserName(false)
      setIsLoadingUserNameData(false)
    }

    loadUser()
  })

  // if (shouldNotRenderUserName) {
  if (isLoadingUserNameData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}


