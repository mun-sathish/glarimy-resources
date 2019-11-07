name "glarimy-webserver-role"
description "Apache based Webserver"
run_list ["recipe[glarimy-cron::default]", "recipe[glarimy-server::default]"]
