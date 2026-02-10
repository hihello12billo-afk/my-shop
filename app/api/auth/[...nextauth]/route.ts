import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // 1. Google Login (NOW ACTIVE)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // 2. Secure Email/Password (Backup for Admin)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "admin@luxe.com" && credentials?.password === "123456") {
          return { id: "1", name: "Luxe Admin", email: "admin@luxe.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  }
});

export { handler as GET, handler as POST };