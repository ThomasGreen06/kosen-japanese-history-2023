#!/bin/bash 

EXTENTION=${1##*.} 

echo "Extention: ${EXTENTION}"

if [ ${EXTENTION} != "html" ]; then
    echo "not an html file"
    exit 0
else
    TEMPFILE="temp_${1}"
    cp $1 $TEMPFILE
    sed -z -e 's/\n//g' -e 's/\(\s\)\{2,\}//g' $TEMPFILE > $1
    rm $TEMPFILE
    echo "${1} -> ${1} (Minifyed)"
fi