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

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  companies: Array<Company>;
  country: Scalars['String'];
  createdAt: Scalars['String'];
  currentUsers: Array<User>;
  deleted: Scalars['Boolean'];
  district: Scalars['String'];
  id: Scalars['Float'];
  permanentUsers: Array<User>;
  street: Scalars['String'];
  updatedAt: Scalars['String'];
  ward: Scalars['String'];
  zip: Scalars['String'];
};

export type BooleanResponse = {
  __typename?: 'BooleanResponse';
  error?: Maybe<FieldError>;
  status: Scalars['Boolean'];
};

export type BooleanResponseWithType = {
  __typename?: 'BooleanResponseWithType';
  data?: Maybe<Type>;
  error?: Maybe<FieldError>;
  status: Scalars['Boolean'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String'];
  deleted: Scalars['Boolean'];
  id: Scalars['Float'];
  name: Scalars['String'];
  type: Type;
  updatedAt: Scalars['String'];
  user: Array<User>;
};

export type CategoryArgs = {
  name: Scalars['String'];
  type: Scalars['Float'];
};

export type Company = {
  __typename?: 'Company';
  branches: Array<Scalars['Float']>;
  createdAt: Scalars['String'];
  deleted: Scalars['Boolean'];
  email: Scalars['String'];
  employees: Array<Employee>;
  id: Scalars['Float'];
  isBranch: Scalars['Boolean'];
  isParent: Scalars['Boolean'];
  location: Address;
  logo: Scalars['String'];
  name: Scalars['String'];
  parentId: Scalars['String'];
  phone: Scalars['String'];
  poBox: Scalars['String'];
  registrationNumber: Scalars['String'];
  status: Scalars['String'];
  tinNumber: Scalars['String'];
  updatedAt: Scalars['String'];
  website: Scalars['String'];
};

export type EditUserArgs = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  middlename: Scalars['String'];
  phone: Scalars['String'];
};

export type EmailPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Employee = {
  __typename?: 'Employee';
  accountNumber: Scalars['String'];
  checkNumber: Scalars['String'];
  company: Company;
  contractEndDate: Scalars['String'];
  contractStartDate: Scalars['String'];
  createdAt: Scalars['String'];
  deleted: Scalars['Boolean'];
  department: Scalars['String'];
  departmentLocation: Scalars['String'];
  designation: Scalars['String'];
  educationLevel: Scalars['String'];
  employeeId: Scalars['String'];
  employmentType: Scalars['String'];
  id: Scalars['Float'];
  image: Scalars['String'];
  nhifRank: Scalars['String'];
  pfNumber: Scalars['String'];
  role: Scalars['String'];
  signature: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  message: Scalars['String'];
  target: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: BooleanResponse;
  addPermission: BooleanResponse;
  addRole: BooleanResponse;
  addType: BooleanResponseWithType;
  deleteCategory: BooleanResponse;
  deletePermission: BooleanResponse;
  deleteRole: BooleanResponse;
  deleteType: BooleanResponse;
  editCategory: BooleanResponse;
  editPermission: BooleanResponse;
  editRole: BooleanResponse;
  editType: BooleanResponse;
  editUser: BooleanResponse;
  forgotPassword: BooleanResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  manageUserPermissions: BooleanResponse;
  register: BooleanResponse;
  resetPassword: UserResponse;
};


export type MutationAddCategoryArgs = {
  args: CategoryArgs;
};


export type MutationAddPermissionArgs = {
  name: Scalars['String'];
};


export type MutationAddRoleArgs = {
  args: RoleArgs;
};


export type MutationAddTypeArgs = {
  args: TypeArgs;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteTypeArgs = {
  id: Scalars['Float'];
};


export type MutationEditCategoryArgs = {
  args: CategoryArgs;
  id: Scalars['Float'];
};


export type MutationEditPermissionArgs = {
  id: Scalars['Float'];
  name: Scalars['String'];
};


export type MutationEditRoleArgs = {
  args: RoleArgs;
  id: Scalars['Float'];
};


export type MutationEditTypeArgs = {
  args: TypeEditArgs;
  id: Scalars['Float'];
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


export type MutationManageUserPermissionsArgs = {
  id: Scalars['Float'];
  permissions: Array<Scalars['Float']>;
};


export type MutationRegisterArgs = {
  params: RegisterUserArgs;
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['String'];
  deleted: Scalars['Boolean'];
  id: Scalars['Float'];
  name: Scalars['String'];
  roles: Array<Role>;
  updatedAt: Scalars['String'];
  users: Array<User>;
};

export type Query = {
  __typename?: 'Query';
  getAllCategories: Array<Category>;
  getCategories: Array<Category>;
  getPermissions: Array<Permission>;
  getRoles: Array<Role>;
  getType?: Maybe<Type>;
  getTypes: Array<Type>;
  getUser?: Maybe<User>;
  getUsers: Array<User>;
  me?: Maybe<User>;
};


export type QueryGetCategoriesArgs = {
  type: Scalars['Float'];
};


export type QueryGetTypeArgs = {
  id: Scalars['Float'];
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
  middlename: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['String'];
  deleted: Scalars['Boolean'];
  id: Scalars['Float'];
  name: Scalars['String'];
  permissions: Array<Permission>;
  updatedAt: Scalars['String'];
  users: Array<User>;
};

export type RoleArgs = {
  name: Scalars['String'];
  permissions: Array<Scalars['Float']>;
};

export type Type = {
  __typename?: 'Type';
  category: Array<Category>;
  createdAt: Scalars['String'];
  deleted: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TypeArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type TypeEditArgs = {
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  currentAddress: Address;
  dateOfBirth: Scalars['String'];
  deleted: Scalars['Boolean'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Float'];
  lastname: Scalars['String'];
  middlename: Scalars['String'];
  permanentAddress: Address;
  permissions: Array<Permission>;
  phone: Scalars['String'];
  role: Role;
  status: Array<Category>;
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<FieldError>;
  user?: Maybe<User>;
};

export type ErrorFragment = { __typename?: 'FieldError', target: string, message: string };

export type MeFragment = { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, role: { __typename?: 'Role', id: number, name: string } };

export type BooleanResponseFragment = { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null };

export type DeleteTypeMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteTypeMutation = { __typename?: 'Mutation', deleteType: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type AddTypeMutationVariables = Exact<{
  args: TypeArgs;
}>;


export type AddTypeMutation = { __typename?: 'Mutation', addType: { __typename?: 'BooleanResponseWithType', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null, data?: { __typename?: 'Type', id: number, name: string, description: string } | null } };

export type EditTypeMutationVariables = Exact<{
  id: Scalars['Float'];
  args: TypeEditArgs;
}>;


export type EditTypeMutation = { __typename?: 'Mutation', editType: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type AddPermissionMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type AddPermissionMutation = { __typename?: 'Mutation', addPermission: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type EditPermissionMutationVariables = Exact<{
  id: Scalars['Float'];
  name: Scalars['String'];
}>;


export type EditPermissionMutation = { __typename?: 'Mutation', editPermission: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type DeletePermissionMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeletePermissionMutation = { __typename?: 'Mutation', deletePermission: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type AddRoleMutationVariables = Exact<{
  args: RoleArgs;
}>;


export type AddRoleMutation = { __typename?: 'Mutation', addRole: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type EditRoleMutationVariables = Exact<{
  id: Scalars['Float'];
  args: RoleArgs;
}>;


export type EditRoleMutation = { __typename?: 'Mutation', editRole: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type DeleteRoleMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteRoleMutation = { __typename?: 'Mutation', deleteRole: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type AddCategoryMutationVariables = Exact<{
  args: CategoryArgs;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type EditCategoryMutationVariables = Exact<{
  id: Scalars['Float'];
  args: CategoryArgs;
}>;


export type EditCategoryMutation = { __typename?: 'Mutation', editCategory: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type LoginMutationVariables = Exact<{
  params: EmailPasswordArgs;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, role: { __typename?: 'Role', id: number, name: string } } | null, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, role: { __typename?: 'Role', id: number, name: string } } | null, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type RegisterMutationVariables = Exact<{
  params: RegisterUserArgs;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type EditUserMutationVariables = Exact<{
  id: Scalars['Float'];
  params: EditUserArgs;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'BooleanResponse', status: boolean, error?: { __typename?: 'FieldError', target: string, message: string } | null } };

export type GetUsersQueryVariables = Exact<{
  roles?: InputMaybe<Array<Scalars['Float']> | Scalars['Float']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, role: { __typename?: 'Role', id: number, name: string } }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, role: { __typename?: 'Role', id: number, name: string } } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, firstname: string, middlename: string, lastname: string, email: string, phone: string, role: { __typename?: 'Role', id: number, name: string } } | null };

export type GetPermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPermissionsQuery = { __typename?: 'Query', getPermissions: Array<{ __typename?: 'Permission', id: number, name: string }> };

export type GetTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTypesQuery = { __typename?: 'Query', getTypes: Array<{ __typename?: 'Type', id: number, name: string, description: string, category: Array<{ __typename?: 'Category', id: number, name: string }> }> };

export type GetTypeQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetTypeQuery = { __typename?: 'Query', getType?: { __typename?: 'Type', id: number, name: string, description: string, category: Array<{ __typename?: 'Category', id: number, name: string }> } | null };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', getRoles: Array<{ __typename?: 'Role', id: number, name: string }> };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type GetCategoriesQueryVariables = Exact<{
  type: Scalars['Float'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', id: number, name: string }> };

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
export const DeleteTypeDocument = gql`
    mutation deleteType($id: Float!) {
  deleteType(id: $id) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useDeleteTypeMutation() {
  return Urql.useMutation<DeleteTypeMutation, DeleteTypeMutationVariables>(DeleteTypeDocument);
};
export const AddTypeDocument = gql`
    mutation addType($args: TypeArgs!) {
  addType(args: $args) {
    status
    error {
      target
      message
    }
    data {
      id
      name
      description
    }
  }
}
    `;

export function useAddTypeMutation() {
  return Urql.useMutation<AddTypeMutation, AddTypeMutationVariables>(AddTypeDocument);
};
export const EditTypeDocument = gql`
    mutation editType($id: Float!, $args: TypeEditArgs!) {
  editType(id: $id, args: $args) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useEditTypeMutation() {
  return Urql.useMutation<EditTypeMutation, EditTypeMutationVariables>(EditTypeDocument);
};
export const AddPermissionDocument = gql`
    mutation addPermission($name: String!) {
  addPermission(name: $name) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useAddPermissionMutation() {
  return Urql.useMutation<AddPermissionMutation, AddPermissionMutationVariables>(AddPermissionDocument);
};
export const EditPermissionDocument = gql`
    mutation editPermission($id: Float!, $name: String!) {
  editPermission(id: $id, name: $name) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useEditPermissionMutation() {
  return Urql.useMutation<EditPermissionMutation, EditPermissionMutationVariables>(EditPermissionDocument);
};
export const DeletePermissionDocument = gql`
    mutation deletePermission($id: Float!) {
  deletePermission(id: $id) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useDeletePermissionMutation() {
  return Urql.useMutation<DeletePermissionMutation, DeletePermissionMutationVariables>(DeletePermissionDocument);
};
export const AddRoleDocument = gql`
    mutation addRole($args: RoleArgs!) {
  addRole(args: $args) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useAddRoleMutation() {
  return Urql.useMutation<AddRoleMutation, AddRoleMutationVariables>(AddRoleDocument);
};
export const EditRoleDocument = gql`
    mutation editRole($id: Float!, $args: RoleArgs!) {
  editRole(id: $id, args: $args) {
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
export const AddCategoryDocument = gql`
    mutation addCategory($args: CategoryArgs!) {
  addCategory(args: $args) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useAddCategoryMutation() {
  return Urql.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument);
};
export const EditCategoryDocument = gql`
    mutation editCategory($id: Float!, $args: CategoryArgs!) {
  editCategory(id: $id, args: $args) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useEditCategoryMutation() {
  return Urql.useMutation<EditCategoryMutation, EditCategoryMutationVariables>(EditCategoryDocument);
};
export const DeleteCategoryDocument = gql`
    mutation deleteCategory($id: Float!) {
  deleteCategory(id: $id) {
    ...BooleanResponse
  }
}
    ${BooleanResponseFragmentDoc}`;

export function useDeleteCategoryMutation() {
  return Urql.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument);
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
export const GetPermissionsDocument = gql`
    query getPermissions {
  getPermissions {
    id
    name
  }
}
    `;

export function useGetPermissionsQuery(options?: Omit<Urql.UseQueryArgs<GetPermissionsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPermissionsQuery, GetPermissionsQueryVariables>({ query: GetPermissionsDocument, ...options });
};
export const GetTypesDocument = gql`
    query getTypes {
  getTypes {
    id
    name
    description
    category {
      id
      name
    }
  }
}
    `;

export function useGetTypesQuery(options?: Omit<Urql.UseQueryArgs<GetTypesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTypesQuery, GetTypesQueryVariables>({ query: GetTypesDocument, ...options });
};
export const GetTypeDocument = gql`
    query getType($id: Float!) {
  getType(id: $id) {
    id
    name
    description
    category {
      id
      name
    }
  }
}
    `;

export function useGetTypeQuery(options: Omit<Urql.UseQueryArgs<GetTypeQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTypeQuery, GetTypeQueryVariables>({ query: GetTypeDocument, ...options });
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
export const GetAllCategoriesDocument = gql`
    query getAllCategories {
  getAllCategories {
    id
    name
  }
}
    `;

export function useGetAllCategoriesQuery(options?: Omit<Urql.UseQueryArgs<GetAllCategoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>({ query: GetAllCategoriesDocument, ...options });
};
export const GetCategoriesDocument = gql`
    query getCategories($type: Float!) {
  getCategories(type: $type) {
    id
    name
  }
}
    `;

export function useGetCategoriesQuery(options: Omit<Urql.UseQueryArgs<GetCategoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>({ query: GetCategoriesDocument, ...options });
};