#demonstrates oops

class ArrayAnalyzer
	def initialize(array)
		@data = array
	end

	def min() 
		min = @data[0]
		for i in @data
			if i<min 
				min = i 
			end
		end
		return min
	end

	def max() 
		max = @data[0]
		for i in @data
			if i>max 
				max = i 
			end
		end
		return max
	end

	def ave() 
		sum = 0
		for i in @data
			sum += i
		end
		return sum/@data.length
	end 
end

data = [5, 6, 8, 1, 4, 1]

analyzer = ArrayAnalyzer.new(data)

puts "Array minimum: #{analyzer.min()}"
puts "Array maximum: #{analyzer.max()}"
puts "Array average: #{analyzer.ave()}"