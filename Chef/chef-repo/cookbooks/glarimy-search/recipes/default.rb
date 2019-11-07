nodes = search("node", "*:*")

for node in nodes
	log node.to_s
	log node['ipaddress']
end