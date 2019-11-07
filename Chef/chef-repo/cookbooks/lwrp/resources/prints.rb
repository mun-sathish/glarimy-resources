resource_name :prints

actions :perform
attribute :message, kind_of: String
attribute :capitals, [true, false], default: true 

action 'perform' do
  log "doing the work"
  if new_resource.capitals then
    log "#{new_resource.message.upcase}"
  else
    log "#{new_resource.message.downcase}"
  end

  execute 'print' do
    command "echo #{new_resource.message}"
  end 
end