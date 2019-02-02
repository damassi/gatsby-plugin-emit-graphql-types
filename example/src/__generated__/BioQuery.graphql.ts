/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type BioQueryVariables = {};
export type BioQueryResponse = {
    readonly site: ({
        readonly siteMetadata: ({
            readonly author: string | null;
            readonly social: ({
                readonly twitter: string | null;
            }) | null;
        }) | null;
    }) | null;
};
export type BioQuery = {
    readonly response: BioQueryResponse;
    readonly variables: BioQueryVariables;
};



/*
query BioQuery {
  site {
    siteMetadata {
      author
      social {
        twitter
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "siteMetadata",
  "storageKey": null,
  "args": null,
  "concreteType": "siteMetadata_2",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "author",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "social",
      "storageKey": null,
      "args": null,
      "concreteType": "social_2",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "twitter",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BioQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "site",
        "storageKey": null,
        "args": null,
        "concreteType": "Site",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BioQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "site",
        "storageKey": null,
        "args": null,
        "concreteType": "Site",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BioQuery",
    "id": null,
    "text": "query BioQuery {\n  site {\n    siteMetadata {\n      author\n      social {\n        twitter\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '97c8fbfd37d34a1dcfa898dceca64b9f';
export default node;
