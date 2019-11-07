describe directory("/etc/testbook") do
  it { should exist }
end

describe file("/etc/testbook/log.sh") do
  it { should exist }
  its('content') { should match /echo "this is the log.sh"/ }
end
