#!/bin/sh

[ ! -z "$GH_NAME" ] && git config --global user.name $GH_NAME
[ ! -z "$GH_EMAIL" ] && git config --global user.email $GH_EMAIL

echo "User email"

git config --global user.email

npm run gh
