export const media =
	`query ($id: Int, $format: MediaFormat, $search: String, $type: MediaType) {
    Media(id: $id, search: $search, type: $type, format: $format) {
      id
      idMal
      title {
        romaji
        english
        native
        userPreferred
      }
      format
      status
      episodes
      description
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      duration
      countryOfOrigin
      isLicensed
      source
      hashtag
      trailer {
        id
        site
      }
      updatedAt
      coverImage {
        large: extraLarge
        medium: large
        small: medium
        color
      }
      bannerImage
      genres
      synonyms
      averageScore
      meanScore
      favourites
      popularity
      trending
      tags {
        id
        name
        isMediaSpoiler
      }
      relations {
        nodes {
          id
          title {
            english
            native
            romaji
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
          isAnimationStudio
        }
      }
      isFavourite
      isAdult
      isLocked
      nextAiringEpisode {
        timeUntilAiring
        airingAt
        episode
      }
      airingSchedule {
        nodes {
          airingAt
          timeUntilAiring
          episode
        }
      }
      trends {
        nodes {
          date
          trending
          popularity
          inProgress
        }
      }
      externalLinks {
        url
      }
      streamingEpisodes {
        title
        thumbnail
        url
        site
      }
      rankings {
        rank
        type
        context
        year
        season
      }
      mediaListEntry {
        id
        status
      }
      reviews {
        nodes {
          id
          score
          summary
          body
        }
      }
      siteUrl
      autoCreateForumThread
      modNotes
      stats {
        scoreDistribution {
          score
          amount
        }
        statusDistribution {
          status
          amount
        }
      }
      isRecommendationBlocked
      recommendations {
        nodes {
          mediaRecommendation {
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
      }
    }
  }
  `;
