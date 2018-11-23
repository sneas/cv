#!/bin/sh

[ ! -z "$GH_NAME" ] && git config --global user.name "$GH_NAME"
[ ! -z "$GH_EMAIL" ] && git config --global user.email "$GH_EMAIL"

echo "User email ($GH_EMAIL)"
git config --global user.email

echo "User name ($GH_NAME)"
git config --global user.name

npm run gh
