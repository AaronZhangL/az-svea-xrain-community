source .az-svea-xrain-config.token.source
wget $CONFIG_CONFIG_JSON -O ./config/config.json
wget $CONFIG_LOG4JS_JSON -O ./config/log4js.json
echo "====== Config file list ========"
ls -al ./config/*.json
