# zip up everything except for build.sh, and the solution folder

zip -r fop-practicals.zip . -x build.sh solution/\* -x \*.git\* \*.DS_Store
