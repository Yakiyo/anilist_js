export const thread = `query ($id: Int) {
	Thread(id: $id) {
	  id
	  title
	  body
	  userId
	  replyUserId
	  replyCommentId
	  replyCount
	  viewCount
	  isLocked
	  isSticky
	  isSubscribed
	  likeCount
	  isLiked
	  repliedAt
	  createdAt
	  updatedAt
	  user {
		id
		name
	  }
	  replyUser {
		id
		name
	  }
	  likes {
		id
		name
	  }
	  siteUrl
	  categories {
		id
		name
	  }
	  mediaCategories {
		id
		title {
		  romaji
		  english
		}
	  }
	}
  }
  `;

export const thread_comment =
	`query ($id: Int, $page: Int, $perPage: Int) {
	Page(page: $page, perPage: $perPage) {
	  threadComments(threadId: $id) {
		id
		userId
		comment
		likeCount
		isLiked
		siteUrl
		createdAt
		updatedAt
		likes
		childComments
		isLocked
	  }
	}
  }`;
