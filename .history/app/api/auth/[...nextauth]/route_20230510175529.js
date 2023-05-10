import NextAuth from 'next-auth'; 
import GoogleProvider from 'next-auth/providers/google';
IMPORT 



const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {

        } catch (error) {
            
        }
    }
})