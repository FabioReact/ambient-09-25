type RegisterUserResponse = {
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
}): Promise<RegisterUserResponse> => {
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
