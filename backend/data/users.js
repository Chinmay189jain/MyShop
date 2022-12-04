import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@myshop.com',
    password: bcrypt.hashSync('admin1234', 10),
    isAdmin: true,
  },
  {
    name: 'Chinmay Jain',
    email: 'chinmayjain.189@gmail.com',
    password: bcrypt.hashSync('user123', 10),
  },
  {
    name: 'Chunmun Jain',
    email: 'chunmun.jain143@gmail.com',
    password: bcrypt.hashSync('user456', 10),
  },
]

export default users
