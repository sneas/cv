#!/bin/sh

[ ! -z "$GH_NAME" ] && git config --local user.name $GH_NAME
[ ! -z "$GH_EMAIL" ] && git config --local user.email $GH_EMAIL


git config user.name

npm run gh
