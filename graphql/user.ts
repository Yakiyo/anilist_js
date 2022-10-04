export const user = `query ($search: String, $id: Int) {
  User(search: $search, id: $id) {
    id
    name
    about
    avatar {
      large
      medium
    }
    bannerImage
    isFollowing
    isFollower
    isBlocked
    bans
    options {
      titleLanguage
      displayAdultContent
      airingNotifications
      profileColor
      activityMergeTime
      staffNameLanguage
      notificationOptions {
        type
        enabled
      }
    }
    mediaListOptions {
      scoreFormat
      rowOrder
      animeList {
        sectionOrder
        splitCompletedSectionByFormat
        customLists
        advancedScoring
        advancedScoringEnabled
      }
      mangaList {
        sectionOrder
        splitCompletedSectionByFormat
        customLists
        advancedScoring
        advancedScoringEnabled
      }
    }
    favourites {
      anime {
        nodes {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          type
        }
      }
      manga {
        nodes {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          type
        }
      }
      characters {
        nodes {
          id
          name {
            english: full
          }
        }
      }
      staff {
        nodes {
          id
          name {
            english: full
          }
        }
      }
      studios {
        nodes {
          id
          name
        }
      }
    }
    unreadNotificationCount
    siteUrl
    donatorTier
    donatorBadge
    moderatorRoles
    updatedAt
  }
}
`;
