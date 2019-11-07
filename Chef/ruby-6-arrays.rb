#demonstrates arrays

def min(data) 
	min = data[0]
	for i in data
		if i<min 
			min = i 
		end
	end
	return min
end

def max(data) 
	max = data[0]
	for i in data
		if i>max 
			max = i 
		end
	end
	return max
end

def ave(data) 
	sum = 0
	for i in data
		sum += i
	end
	return sum/data.length
end

data = [5, 6, 8, 1, 4, 1]

puts "Array minimum: #{min(data)}"
puts "Array maximum: #{max(data)}"
puts "Array average: #{ave(data)}"