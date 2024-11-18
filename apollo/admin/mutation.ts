import { gql } from '@apollo/client';

/**************************
 *         MEMBER         *
 *************************/

export const UPDATE_MEMBER_BY_ADMIN = gql`
	mutation UpdateMemberByAdmin($input: MemberUpdate!) {
    updateMemberByAdmin(input: $input) {
        _id
        memberType
        memberStatus
        memberAuthType
        memberPhone
        memberNick
        memberImage
        memberAddress
        memberProduct
        memberPurchase
        memberArticles
        memberFollowers
        memberFollowings
        memberPoints
        memberLikes
        memberViews
        memberComments
        memberRank
        memberWarnings
        memberBlocks
        deletedAt
        createdAt
        updatedAt
        accessToken
    }
}

`;

/**************************
 *        PROPERTY        *
 *************************/

export const UPDATE_PROPERTY_BY_ADMIN = gql`
	mutation UpdateProductByAdmin ($input: ProductUpdate!){
    updateProductByAdmin(input: $input) {
        _id
        productCategory
        productStatus
        productLocation
        dealAddress
        productTitle
        productPrice
        productViews
        productLikes
        productImages
        productDesc
        productBarter
        productSharing
        memberId
        soldAt
        deletedAt
        manufacturedAt
        createdAt
        updatedAt
    }
}

`;

export const REMOVE_PRODUCT_BY_ADMIN = gql`
	mutation RemoveProductByAdmin ($input:String!){
    removeProductByAdmin(productId: $input) {
        _id
        productCategory
        productStatus
        productLocation
        dealAddress
        productTitle
        productPrice
        productViews
        productLikes
        productComments
        productRank
        productImages
        productDesc
        productBarter
        productSharing
        memberId
        soldAt
        deletedAt
        manufacturedAt
        createdAt
        updatedAt
    }
}

`;

/**************************
 *      BOARD-ARTICLE     *
 *************************/

export const UPDATE_BOARD_ARTICLE_BY_ADMIN = gql`
	mutation UpdateBoardArticleByAdmin($input:BoardArticleUpdate!) {
    updateBoardArticleByAdmin(input: $input) {
        _id
        articleCategory
        articleStatus
        articleTitle
        articleContent
        articleImage
        articleViews
        articleLikes
        articleComments
        memberId
        createdAt
        updatedAt
    }
}

`;

export const REMOVE_BOARD_ARTICLE_BY_ADMIN = gql`
	mutation RemoveBoardArticleByAdmin($input: String!) {
		removeBoardArticleByAdmin(articleId: $input) {
			_id
			articleCategory
			articleStatus
			articleTitle
			articleContent
			articleImage
			articleViews
			articleLikes
			memberId
			createdAt
			updatedAt
		}
	}
`;

/**************************
 *         COMMENT        *
 *************************/

export const REMOVE_COMMENT_BY_ADMIN = gql`
	mutation RemoveCommentByAdmin ($input:String!){
    removeCommentByAdmin(commentId: $input) {
        _id
        commentStatus
        commentGroup
        commentContent
        commentRefId
        memberId
        createdAt
        updatedAt
    }
}

`;