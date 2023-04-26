rm -rf ./libs/shared-types/generated
openapi-generator-cli generate \
  -i ./openapi.json \
  -g typescript-axios \
  -o ./libs/shared-types/generated \
  --package-name api \
  --additional-properties=useSingleRequestParameter=true
