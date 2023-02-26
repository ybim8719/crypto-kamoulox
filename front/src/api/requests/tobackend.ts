
import { LoginAuthData } from "../../models/Auth/LoginHandler";
import { SignupAuthData } from "../../models/Auth/Signup/SignupHandler";
import { QraphQlQueryType } from "../../models/GraphQlQuery";
import { buildLoginQuery, buildSignupQuery } from "../graphql/queryBuilder";

export const sendGraphQlLoginQuery = async (authData: LoginAuthData) => {
    const graphQLQuery = buildLoginQuery(authData);
    return await sendRequestToGraphQl(graphQLQuery)
}

export const sendGraphQlSignupQuery = async (authData: SignupAuthData) => {
    const graphQLQuery = buildSignupQuery(authData);
    return await sendRequestToGraphQl(graphQLQuery)
}

const sendRequestToGraphQl = async (query: QraphQlQueryType) => {
    const resp = await fetch("/graphql", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
      });
    const resData = await resp.json();

    return resData;
}    