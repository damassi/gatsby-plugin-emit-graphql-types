/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type seoQueryVariables = {};
export type seoQueryResponse = {
    readonly site: ({
        readonly siteMetadata: ({
            readonly title: string | null;
            readonly description: string | null;
            readonly author: string | null;
        }) | null;
    }) | null;
};
export type seoQuery = {
    readonly response: seoQueryResponse;
    readonly variables: seoQueryVariables;
};



/*
query seoQuery {
  site {
    siteMetadata {
      title
      description
      author
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
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "author",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "seoQuery",
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
    "name": "seoQuery",
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
    "name": "seoQuery",
    "id": null,
    "text": "query seoQuery {\n  site {\n    siteMetadata {\n      title\n      description\n      author\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0eb91027e221b780285e93c692a5bcf4';
export default node;
