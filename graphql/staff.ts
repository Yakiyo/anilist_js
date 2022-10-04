export const staff = `query ($search: String, $id: Int) {
  Staff(search: $search, id: $id) {
    id
    name {
      english: full
      native
      alternative
    }
    languageV2
    primaryOccupations
    image {
      large
      medium
    }
    description
    primaryOccupations
    gender
    dateOfBirth {
      year
      month
      day
    }
    dateOfDeath {
      year
      month
      day
    }
    age
    yearsActive
    homeTown
    bloodType
    isFavourite
    isFavouriteBlocked
    siteUrl
    favourites
    staffMedia {
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
  }
}`;
