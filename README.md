# Rubik's Info

This is a web page written for the HWR module 4-3131-TIT20A. In it's current iteration, it only uses HTML and CSS with no other external dependencies than Google Fonts. It's intended to inform about the infamous Rubik's Cube, giving readers an overview about the history and different types of the puzzle, in addition to a complete tutorial of how to solve one.

Since it's been written in the span of about a week, this website isn't as fleshed out as other projects might be, so don't expect a very modern website. However, if you still want to take a look at it, feel free to do so at https://rubiksinfo.de.

## Docker

If you want to run the web page in a docker container, you can run these commands: 
to build the image: 

docker build . -t rubiksimage:1.0

to run the container: 

docker run -d -p 8080:8080 --name rubiksinfocontainer rubiksimage:1.0
