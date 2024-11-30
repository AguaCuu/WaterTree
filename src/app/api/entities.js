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

export const Me = {
  name: 'me',
  permissions: {
    update: true,
    delete: true
  },
  shape: [
    'name',
    'lastname',
    'email',
  ]
}