"use server";

import { GraphQLClient, gql } from "graphql-request";
import { z } from "zod";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

const graphcmsToken = process.env.HYGRAPH_TOKEN!;

interface Props {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const sendMessage = async ({ name, email, phone, message }: Props) => {
    try {
        const data = { name, email, phone, message };

        const query = gql`
            mutation CreateClient($name:String!, $email:String!, $phone:String!, $message:String!){
                createClient(data: {name: $name, email: $email, phone: $phone, message: $message}){id}
            }
        `;

        const client = new GraphQLClient(graphqlAPI!, {
            headers: {
                Authorization: `Bearer ${graphcmsToken!}`,
            }
        });

        const result = await client.request(query, data);

        return result;
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { error: "Invalid request data passed" };
        }

        return { error: "Unable to send Message" };
    }
};

export default sendMessage;