import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BooleanResponse = {
  __typename?: 'BooleanResponse';
  error?: Maybe<FieldError>;
  status: Scalars['Boolean'];
};

export type EditUserArgs = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  location: Scalars['String'];
  middlename: Scalars['String'];
  phone: Scalars['String'];
  status: Scalars['Boolean'];
};

export type EmailPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  message: Scalars['String'];
  target: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRole: BooleanResponse;
  deleteRole: BooleanResponse;
  editRole: BooleanResponse;
  editUser: BooleanResponse;
  forgotPassword: BooleanResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: BooleanResponse;
  resetPassword: UserResponse;
};


export type MutationAddRoleArgs = {
  name: Scalars['String'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['Float'];
};


export type MutationEditRoleArgs = {
  id: Scalars['Float'];
  name: Scalars['String'];
};


export type MutationEditUserArgs = {
  id: Scalars['Float'];
  params: EditUserArgs;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  params: EmailPasswordArgs;
};


export type MutationRegisterArgs = {
  params: RegisterUserArgs;
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getRoles: Array<Role>;
  getUser?: Maybe<User>;
  getUsers: Array<User>;
  me?: Maybe<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['Float'];
};


export type QueryGetUsersArgs = {
  roles?: InputMaybe<Array<Scalars['Float']>>;
};

export type RegisterUserArgs = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  location: Scalars['String'];
  middlename: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['Float'];
  lastname: Scalars['String'];
  location: Scalars['String'];
  middlename: Scalars['String'];
  phone: Scalars['String'];
  role: Role;
  status: Scalars['Boolean'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<FieldError>;
  user?: Maybe<User>;
};

export type ErrorFragment = { __typename?: 'FieldError', target: string, message: string };

export type MeFragment = { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, location: string, status: boolean, role: { __typename?: 'Role', id: number, name: string } };

export type BooleanResponseFragment = { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null };

export type AddRoleMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type AddRoleMutation = { __typename?: 'Mutation', addRole: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type EditRoleMutationVariables = Exact<{
  name: Scalars['String'];
  id: Scalars['Float'];
}>;


export type EditRoleMutation = { __typename?: 'Mutation', editRole: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type DeleteRoleMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteRoleMutation = { __typename?: 'Mutation', deleteRole: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type LoginMutationVariables = Exact<{
  params: EmailPasswordArgs;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, location: string, status: boolean, role: { __typename?: 'Role', id: number, name: string } } | null, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, location: string, status: boolean, role: { __typename?: 'Role', id: number, name: string } } | null, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type RegisterMutationVariables = Exact<{
  params: RegisterUserArgs;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type EditUserMutationVariables = Exact<{
  id: Scalars['Float'];
  params: EditUserArgs;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', getRoles: Array<{ __typename?: 'Role', id: number, name: string }> };

export type GetUsersQueryVariables = Exact<{
  roles?: InputMaybe<Array<Scalars['Float']> | Scalars['Float']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, location: string, status: boolean, role: { __typename?: 'Role', id: number, name: string } }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, location: string, status: boolean, role: { __typename?: 'Role', id: number, name: string } } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, location: string, status: boolean, role: { __typename?: 'Role', id: number, name: string } } | null };

export const ErrorFragmentDoc = gql`
    fragment Error on FieldError {
  target
  message
}
    `;
export const MeFragmentDoc = gql`
    fragment Me on User {
  id
  firstname
  middlename
  lastname
  email
  phone
  location
  status
  role {
    id
    name
  }
}
    `;
export const BooleanResponseFragmentDoc = gql`
    fragment BooleanResponse on BooleanResponse {
  status
  error {
    target
    message
  }
}
    `;
export const AddRoleDocument = gql`
    mutation addRole($name: String!) {
  addRole(name: $name) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useAddRoleMutation() {
  return Urql.useMutation<AddRoleMutation, AddRoleMutationVariables>(AddRoleDocument);
};
export const EditRoleDocument = gql`
    mutation editRole($name: String!, $id: Float!) {
  editRole(name: $name, id: $id) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useEditRoleMutation() {
  return Urql.useMutation<EditRoleMutation, EditRoleMutationVariables>(EditRoleDocument);
};
export const DeleteRoleDocument = gql`
    mutation deleteRole($id: Float!) {
  deleteRole(id: $id) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useDeleteRoleMutation() {
  return Urql.useMutation<DeleteRoleMutation, DeleteRoleMutationVariables>(DeleteRoleDocument);
};
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($params: EmailPasswordArgs!) {
  login(params: $params) {
    user {
      ...Me
    }
    error {
      ...Error
    }
  }
}
    ${MeFragmentDoc}
${ErrorFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const ResetPasswordDocument = gql`
    mutation resetPassword($token: String!, $newPassword: String!) {
  resetPassword(token: $token, newPassword: $newPassword) {
    user {
      ...Me
    }
    error {
      ...Error
    }
  }
}
    ${MeFragmentDoc}
${ErrorFragmentDoc}`;

export function useResetPasswordMutation() {
  return Urql.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument);
};
export const RegisterDocument = gql`
    mutation register($params: RegisterUserArgs!) {
  register(params: $params) {
    status
    error {
      ...Error
    }
  }
}
    ${ErrorFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const EditUserDocument = gql`
    mutation editUser($id: Float!, $params: EditUserArgs!) {
  editUser(id: $id, params: $params) {
    status
    error {
      target
      message
    }
  }
}
    `;

export function useEditUserMutation() {
  return Urql.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument);
};
export const GetRolesDocument = gql`
    query getRoles {
  getRoles {
    id
    name
  }
}
    `;

export function useGetRolesQuery(options?: Omit<Urql.UseQueryArgs<GetRolesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRolesQuery, GetRolesQueryVariables>({ query: GetRolesDocument, ...options });
};
export const GetUsersDocument = gql`
    query getUsers($roles: [Float!]) {
  getUsers(roles: $roles) {
    ...Me
  }
}
    ${MeFragmentDoc}`;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables>({ query: GetUsersDocument, ...options });
};
export const GetUserDocument = gql`
    query getUser($id: Float!) {
  getUser(id: $id) {
    ...Me
  }
}
    ${MeFragmentDoc}`;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...Me
  }
}
    ${MeFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};