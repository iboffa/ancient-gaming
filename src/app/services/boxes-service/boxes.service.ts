import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import {
  Box,
  BoxesQueryResult,
  BoxOpeningMutationResult,
  ItemVariant,
} from 'src/graphql.types';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  constructor(private apollo: Apollo) {}

  getAvailableBoxes(): Observable<Box[]> {
    return this.apollo
      .watchQuery<BoxesQueryResult>({
        query: gql`
          query {
            boxes(free: false, purchasable: true, openable: true) {
              edges {
                node {
                  id
                  name
                  iconUrl
                  cost
                }
              }
            }
          }
        `,
      })
      .valueChanges.pipe(
        map((result) => result.data.boxes.edges.map((edge) => edge.node))
      );
  }

  openBox(boxId: string): Observable<ItemVariant> {
    return this.apollo
      .mutate<BoxOpeningMutationResult>({
        mutation: gql`
          mutation OpenBox($input: OpenBoxInput!) {
            openBox(input: $input) {
              boxOpenings {
                id
                itemVariant {
                  id
                  name
                  value
                }
              }
            }
          }
        `,
        variables: {
          input: { boxId, amount: 1 },
        },
      })
      .pipe(map((result) => result.data?.openBox.boxOpenings[0].itemVariant!));
  }
}
