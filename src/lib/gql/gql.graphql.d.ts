/* fb5ad475740ddb68029bb28dd09375884e75e8ac
 * This file is automatically generated by graphql-let. */

import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type News = {
    __typename?: 'News';
    id: Scalars['ID'];
    title: Scalars['String'];
    slug: Scalars['String'];
    desc: Scalars['String'];
};
export declare type Post = {
    __typename?: 'Post';
    id: Scalars['ID'];
    title: Scalars['String'];
    slug: Scalars['String'];
    desc: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    viewer: User;
    post: Post;
    news: News;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    updateName: User;
    updatePost: Post;
};
export declare type MutationUpdateNameArgs = {
    name: Scalars['String'];
};
export declare type MutationUpdatePostArgs = {
    title: Scalars['String'];
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    name: Scalars['String'];
    status: Scalars['String'];
};
export declare type ViewerQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type ViewerQuery = ({
    __typename?: 'Query';
} & {
    viewer: ({
        __typename?: 'User';
    } & Pick<User, 'status'> & UserPartialFragment);
});
export declare type UserPartialFragment = ({
    __typename?: 'User';
} & Pick<User, 'id' | 'name'>);
export declare type PostQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type PostQuery = ({
    __typename?: 'Query';
} & {
    post: ({
        __typename?: 'Post';
    } & Pick<Post, 'desc'> & PostPartialFragment);
});
export declare type PostPartialFragment = ({
    __typename?: 'Post';
} & Pick<Post, 'id' | 'title' | 'slug'>);
export declare type NewsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type NewsQuery = ({
    __typename?: 'Query';
} & {
    news: ({
        __typename?: 'News';
    } & Pick<News, 'id' | 'title' | 'slug' | 'desc'>);
});
export declare type UpdateNameMutationVariables = Exact<{
    name: Scalars['String'];
}>;
export declare type UpdateNameMutation = ({
    __typename?: 'Mutation';
} & {
    updateName: ({
        __typename?: 'User';
    } & Pick<User, 'status'> & UserPartialFragment);
});
export declare type UpdatePostMutationVariables = Exact<{
    title: Scalars['String'];
}>;
export declare type UpdatePostMutation = ({
    __typename?: 'Mutation';
} & {
    updatePost: ({
        __typename?: 'Post';
    } & Pick<Post, 'desc'> & PostPartialFragment);
});
export declare const UserPartialFragmentDoc: Apollo.DocumentNode;
export declare const PostPartialFragmentDoc: Apollo.DocumentNode;
export declare const ViewerDocument: Apollo.DocumentNode;
/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>): Apollo.QueryResult<ViewerQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>): Apollo.QueryTuple<ViewerQuery, Exact<{
    [key: string]: never;
}>>;
export declare type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export declare type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export declare type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;
export declare const PostDocument: Apollo.DocumentNode;
/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *   },
 * });
 */
export declare function usePostQuery(baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>): Apollo.QueryResult<PostQuery, Exact<{
    [key: string]: never;
}>>;
export declare function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>): Apollo.QueryTuple<PostQuery, Exact<{
    [key: string]: never;
}>>;
export declare type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export declare type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export declare type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export declare const NewsDocument: Apollo.DocumentNode;
/**
 * __useNewsQuery__
 *
 * To run a query within a React component, call `useNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useNewsQuery(baseOptions?: Apollo.QueryHookOptions<NewsQuery, NewsQueryVariables>): Apollo.QueryResult<NewsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsQuery, NewsQueryVariables>): Apollo.QueryTuple<NewsQuery, Exact<{
    [key: string]: never;
}>>;
export declare type NewsQueryHookResult = ReturnType<typeof useNewsQuery>;
export declare type NewsLazyQueryHookResult = ReturnType<typeof useNewsLazyQuery>;
export declare type NewsQueryResult = Apollo.QueryResult<NewsQuery, NewsQueryVariables>;
export declare const UpdateNameDocument: Apollo.DocumentNode;
export declare type UpdateNameMutationFn = Apollo.MutationFunction<UpdateNameMutation, UpdateNameMutationVariables>;
/**
 * __useUpdateNameMutation__
 *
 * To run a mutation, you first call `useUpdateNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNameMutation, { data, loading, error }] = useUpdateNameMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export declare function useUpdateNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNameMutation, UpdateNameMutationVariables>): Apollo.MutationTuple<UpdateNameMutation, Exact<{
    name: string;
}>>;
export declare type UpdateNameMutationHookResult = ReturnType<typeof useUpdateNameMutation>;
export declare type UpdateNameMutationResult = Apollo.MutationResult<UpdateNameMutation>;
export declare type UpdateNameMutationOptions = Apollo.BaseMutationOptions<UpdateNameMutation, UpdateNameMutationVariables>;
export declare const UpdatePostDocument: Apollo.DocumentNode;
export declare type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;
/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export declare function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>): Apollo.MutationTuple<UpdatePostMutation, Exact<{
    title: string;
}>>;
export declare type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export declare type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export declare type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
