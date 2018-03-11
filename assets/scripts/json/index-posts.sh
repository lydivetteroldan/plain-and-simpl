
#!/bin/bash

curl "http://localhost:4741/posts" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
