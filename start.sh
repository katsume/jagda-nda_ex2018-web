#!/bin/sh

DIR=$(cd $(dirname $0) && pwd)
NAME=${DIR##*/}

if ! docker ps | grep $NAME > /dev/null ; then
	docker run -d --rm --name $NAME -p 8000:80 -v $(cd docs && pwd):/usr/local/apache2/htdocs/ httpd:2.4
fi

$(npm bin)/bower install

gulp
