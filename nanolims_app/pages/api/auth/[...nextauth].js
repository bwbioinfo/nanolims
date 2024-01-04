import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/Users";
import connectDB from "@/utils/db";


export default NextAuth({
  providers: [
    // OAuth authentication providers...
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  database: process.env.MONGODB_URI,
  callbacks: {
    async signIn({ profile }) {
      console.log(profile)
      try {
        // Connect to database
        await connectDB()
        // Find or create user
        const userExist = await User.findOne( {email: profile.email})

        if (!userExist) {
          const newUser = await User.create({
            email: profile.email,
            githubId: profile.id,
            firstname: profile.name.split(" ")[0],
            lastname: profile.name.split(" ")[1],
          });
        }
        return true

      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      // else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
  pages: {
    signIn: "/login",
    // signOut: "/auth/signout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
  },
});
