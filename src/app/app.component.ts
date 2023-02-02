import { Component, OnInit } from '@angular/core';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-start';
  profileData: any[] = [];
  private API_URL = 'https://api.lens.dev';
  /* create the API client */
  private client = new ApolloClient({
    uri: this.API_URL,
    cache: new InMemoryCache(),
  });
  private temp = {
    offset: 25,
  };
  /* define a GraphQL query  */
  private exploreProfiles = gql`
    query ExploreProfiles {
      exploreProfiles(request: { sortCriteria: MOST_FOLLOWERS, limit: 2, cursor: "{\"offset\": 25}" }) {
        items {
          id
          name
          bio
          handle
          picture {
            ... on MediaSet {
              original {
                url
              }
            }
          }
          stats {
            totalFollowers
          }
        }
        pageInfo {
          prev
          next
          totalCount
        }
      }
    }
  `;
  ngOnInit(): void {
    this.fetchProfiles();
  }
  async fetchProfiles() {
    try {
      /* fetch profiles from Lens API */
      const response = await this.client.query({ query: this.exploreProfiles });
      /* loop over profiles, create properly formatted ipfs image links */
      const profileData = await Promise.all(
        response.data.exploreProfiles.items.map(async (profileInfo: any) => {
          const profile = { ...profileInfo };
          const picture = profile.picture;
          if (picture && picture.original && picture.original.url) {
            if (picture.original.url.startsWith('ipfs://')) {
              const result = picture.original.url.substring(
                7,
                picture.original.url.length
              );
              profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`;
            } else {
              profile.avatarUrl = picture.original.url;
            }
          }
          return profile;
        })
      );

      /* update the local state with the profiles array */
      this.profileData = profileData;
      console.log(this.profileData);
    } catch (err) {
      console.log({ err });
    }
  }
}
