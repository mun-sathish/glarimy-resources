#demonstrates hashes

$states = {
	'Karnataka' => 'Bengaluru', 
	'Andhra' => 'Amaravati',
	'Kerala' => 'Tiruvananthapuram',
	'Tamilnadu' => 'Chennai'
}

def find(state) 
	return $states[state]
end

state = 'Andhra'
capital = find(state)

if(capital == nil)
	puts "Capital of #{state} is not found"
else
	puts "Capital if #{state} is #{capital}"
end
