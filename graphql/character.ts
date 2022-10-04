export const character = `query ($search: String, $id: Int) {
  Character(id: $id, search: $search) {
    id
    name {
      english: full
      native
      alternative
    }
    image {
      large
      medium
    }
    gender
    description
    isFavourite
    dateOfBirth {
      year
      month
      day
    }
    favourites
    bloodType
    siteUrl
    age
    media {
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
  }
}`;
