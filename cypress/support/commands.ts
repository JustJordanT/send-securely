import { Token } from '@basis-theory/basis-theory-elements-interfaces/models';
import snakecaseKeys from 'snakecase-keys';
import type { StubMapping, StubMappingRequest } from './wiremock/types';

Cypress.Commands.add('stubRequest', (scenario: string, stub: StubMapping) => {
  const mappingWithScenarioMetadata = {
    ...stub,
    metadata: {
      ...stub.metadata,
      scenario,
    },
  };

  cy.request(
    'POST',
    'http://localhost:8080/__admin/mappings',
    JSON.stringify(mappingWithScenarioMetadata)
  );
});

Cypress.Commands.add('stubGetTokenById', (scenario: string, token: Token) => {
  const mapping = {
    request: {
      method: 'GET',
      urlPath: `/tokens/${token.id}`,
    },
    response: {
      status: 200,
      jsonBody: token,
    },
    metadata: {
      scenario,
    },
  };

  cy.request(
    'POST',
    'http://localhost:8080/__admin/mappings',
    JSON.stringify(snakecaseKeys(mapping, { deep: false }))
  );
});

Cypress.Commands.add('clearStubs', (scenario: string) => {
  cy.request(
    'POST',
    'http://localhost:8080/__admin/mappings/remove-by-metadata',
    JSON.stringify({
      matchesJsonPath: {
        expression: '$.scenario',
        equalTo: scenario,
      },
    })
  );
});

Cypress.Commands.add(
  'verifyRequestCount',
  (expectedCount: number, requestMapping: StubMappingRequest) => {
    cy.request(
      'POST',
      'http://localhost:8080/__admin/requests/count',
      JSON.stringify(requestMapping)
    ).then(({ body }) => {
      expect(body.count).to.eq(expectedCount);
    });
  }
);