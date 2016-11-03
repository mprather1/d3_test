require 'json'
require 'faker'

# Create Users seed
File.open('seeds/datapoints.json', 'w') do |file|
file.puts('[')  
10.times do
  @data1 = Faker::Number.number(2)
  @data2 = Faker::Number.number(3)

  my_hash = {
    dataNumberOne: @data1,
    dataNumberTwo: @data2,
  }
  file.puts(JSON.generate(my_hash) + ",")
end
file.puts("]")
end

