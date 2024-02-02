import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
     async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email !== "bliss@gmail.com" || password !== "123456") {
          throw new Error("Invalid credential");
        } else {
          return {
            id: "1",
            name: "Bliss",
            email: "bliss@gmail.com",
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  }
});

export { handler as GET, handler as POST };
