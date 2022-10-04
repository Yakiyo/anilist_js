export const media_list =
	`query ($userId: Int, $username: String, $type: MediaType) {
    MediaListCollection(userId: $userId, userName: $username, type: $type) {
      lists{
        name
        isCustomList
        isSplitCompletedList
        status
        entries {
          id
          mediaId
          status
          score
          progress
          progressVolumes
          repeat
          priority
          private
          notes
          hiddenFromStatusLists
          customLists
          advancedScores
          startedAt {
            year
            month
            day
          }
          completedAt {
            year
            month
            day
          }
          updatedAt
          createdAt
          media {
            id
          }
          user {
            id
          }
        }
      }
    }
  }`;
