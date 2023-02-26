export type GraphQlvariables = {
    email?: string;
    username?: string;
    password?: string;
}



export type QraphQlQueryType = {
    query: string;
    variables: GraphQlvariables; 
}