#!/bin/bash
redis-cli keys "*" > keys.txt
cat keys.txt | awk '{ printf "type %s\n", $1 }' | redis-cli > types.txt
paste -d'|' keys.txt types.txt | awk -F\| '
   $2 == "string"               { printf "echo \"KEY %s %s\"\nget %s\n", $1, $2, $1 }
   $2 == "list" || $2 == "set"  { printf "echo \"KEY %s %s\"\nsort %s by nosort\n", $1, $2, $1 }
   $2 == "hash"                 { printf "echo \"KEY %s %s\"\nhgetall %s\n", $1, $2, $1 }
   $2 == "zset"                 { printf "echo \"KEY %s %s\"\nzrange %s 0 -1 withscores\n", $1, $2,$1 }
' | redis-cli
rm keys.txt
rm types.txt


