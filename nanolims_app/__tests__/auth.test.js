// FILEPATH: nanolims/nanolims_app/__tests__/auth.test.js

import NextAuth from 'next-auth'
import { AppleProvider, GoogleProvider, GitHubProvider } from 'next-auth/providers'
import { connectDB, User } from '../your-db-connection-file' // replace with your actual db connection file

jest.mock('next-auth')
jest.mock('next-auth/providers')
jest.mock('../your-db-connection-file') // replace with your actual db connection file

describe('NextAuth configuration', () => {
  it('should call NextAuth with correct arguments', () => {
    const nextAuthMock = NextAuth.mockImplementation(() => {})
    
    require('../pages/api/auth/[...nextauth]') // replace with your actual NextAuth configuration file

    expect(nextAuthMock).toHaveBeenCalledWith(expect.objectContaining({
      providers: expect.arrayContaining([
        expect.objectContaining({
          clientId: process.env.APPLE_ID,
          clientSecret: process.env.APPLE_SECRET,
        }),
        expect.objectContaining({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
        }),
        expect.objectContaining({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
      ]),
      database: process.env.MONGODB_URI,
      pages: {
        signIn: "/login",
      },
      secret: process.env.NEXTAUTH_SECRET,
    }))
  })

  it('should create a new user if user does not exist', async () => {
    const mockUser = {
      email: 'test@example.com',
      id: '123',
      name: 'Test User',
    }

    const mockCreate = jest.fn()
    User.findOne = jest.fn().mockResolvedValue(null)
    User.create = mockCreate.mockResolvedValue(mockUser)

    const { signIn } = NextAuth.mock.calls[0][0].callbacks
    const result = await signIn({ profile: mockUser })

    expect(User.findOne).toHaveBeenCalledWith({ email: mockUser.email })
    expect(mockCreate).toHaveBeenCalledWith({
      email: mockUser.email,
      githubId: mockUser.id,
      firstname: mockUser.name.split(" ")[0],
      lastname: mockUser.name.split(" ")[1],
    })
    expect(result).toBe(true)
  })

  it('should not create a new user if user already exists', async () => {
    const mockUser = {
      email: 'test@example.com',
      id: '123',
      name: 'Test User',
    }

    User.findOne = jest.fn().mockResolvedValue(mockUser)
    User.create = jest.fn()

    const { signIn } = NextAuth.mock.calls[0][0].callbacks
    const result = await signIn({ profile: mockUser })

    expect(User.findOne).toHaveBeenCalledWith({ email: mockUser.email })
    expect(User.create).not.toHaveBeenCalled()
    expect(result).toBe(true)
  })
})