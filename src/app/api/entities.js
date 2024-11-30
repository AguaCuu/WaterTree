export const User = {
  name: 'user',
  shape: [
    'name',
    'lastname',
    'email',
  ],
  registerShape: [
    'name',
    'lastname',
    'email',
    'password'
  ],
}

export const Login = {
  name: 'login',
  shape: [
    'email',
    'password'
  ]
}

export const WaterTree = {
  name: 'waterTree',
  shape: [
    'name',
  ]
}