import NextAuth from 'next-auth'; 
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';

import User from '@models/user';



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
            await connectToDB();

            // check if user already exists

            const userExists = await User.fondOne({
                email: profile.email
            })

            // if not, create user

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})