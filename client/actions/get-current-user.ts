import {Category} from "@/types";
import { cookies } from "next/headers";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

const getCurrentUser = async (): Promise<any> => {

    const jwtCookie = cookies().get('jwt');
    const userCookie = cookies().get('current_user');

    if (!jwtCookie || !userCookie) {
        return null;
    }
    console.log('user cookie ', jwtCookie, userCookie)

    return { user: JSON.parse(userCookie.value), jwt: jwtCookie.value};
}

export default getCurrentUser;