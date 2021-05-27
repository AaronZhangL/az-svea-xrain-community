source .az-svea-xrain-config.token.source
wget https://raw.githubusercontent.com/AaronZhangL/az-svea-xrain-config/master/az-svea-xrain-community/config/config.json\?token\=AAZ46IU5HODCCP35LAFDEPDAXBI3I -O ./config/config.json
wget https://raw.githubusercontent.com/AaronZhangL/az-svea-xrain-config/master/az-svea-xrain-community/config/log4js.json\?token\=AAZ46IRBYZYMMJJDYDYQX3TAXBI4M -O ./config/log4js.json
echo "====== Config file list ========"
ls -al ./config/*.json
