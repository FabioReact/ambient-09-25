type UserResponse = {
  accessToken: string
  user: {
    email: string
  }
}

export const registerUser = ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<UserResponse> => {
  return fetch('http://localhost:4000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.status === 400) {
      throw new Error('User already exists')
    }
    return res.json()
  })
}

export const signInUser = ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<UserResponse> => {
  return fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    // if (res.status === 400) {
    //   throw new Error('User already exists')
    // }
    return res.json()
  })
}
