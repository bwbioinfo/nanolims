import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

// CHECKING FUNCTIONS
export const hasToken = async (req) => {
  const token = await getToken({ req, secret })
  if(!token){
    return false
  }
  return true
}

export const isAdmin = async (req) => {
  const token = await getToken({ req, secret })
  if(!token || token.user.role !== 'admin'){
    return false
  }
  return true
}