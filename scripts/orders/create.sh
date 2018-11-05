#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "order": {
      "products": {
          "product":  "'"${P_ID}"'",
          "quantity": "'"${QTY}"'"
        },
      "purchased": "'"${PURCHASED}"'"
    }
  }'

echo
